const products = {
  Seboclin: {
    number: '01 | LIMPEZA',
    title: 'SEBOCLIN',
    subtitle: 'Gel de Limpeza Dermatológico | Ácido Salicílico 2%',
    body: 'Produto indicado para rotina cosmética de peles oleosas e acneicas. O ácido salicílico é um BHA lipofílico, capaz de auxiliar na limpeza dos poros, na remoção do excesso de sebo e na renovação superficial da pele.',
  },
  Anexregen: {
    number: '02 | REPARAÇÃO',
    title: 'ANEXREGEN',
    subtitle: 'Sérum Dermatológico Reparador | Ácido Tranexâmico 3%',
    body: 'Sérum voltado à uniformização do tom da pele, cuidado com manchas pós-acne e suporte à barreira cutânea. A proposta é reduzir aparência de hiperpigmentação e auxiliar peles sensibilizadas dentro de uma rotina cosmética.',
  },
  Keraclin: {
    number: '03 | RENOVAÇÃO',
    title: 'KERACLIN',
    subtitle: 'Esfoliante Dermatológico Renovador',
    body: 'Produto pensado para renovação da textura da pele. Auxilia na remoção de células mortas, melhora o aspecto visual de irregularidades superficiais e contribui para uma aparência mais limpa e luminosa.',
  },
};

let planItems = JSON.parse(localStorage.getItem('biovitaPlanItems')) || [];
let lastRoutine = [];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const pageLoader = $('#pageLoader');
const sideMenu = $('#sideMenu');
const backdrop = $('#backdrop');
const cartCount = $('#cartCount');
const planItemsBox = $('#planItems');
const interestInput = $('#interestInput');

window.addEventListener('load', () => {
  setTimeout(() => pageLoader.classList.add('hidden'), 450);
  updatePlanUI();
});

function openSideMenu() {
  sideMenu.classList.add('open');
  sideMenu.setAttribute('aria-hidden', 'false');
  backdrop.classList.add('show');
  document.body.classList.add('menu-open');
}

function closeSideMenu() {
  sideMenu.classList.remove('open');
  sideMenu.setAttribute('aria-hidden', 'true');
  backdrop.classList.remove('show');
  document.body.classList.remove('menu-open');
}

$('#openMenu').addEventListener('click', openSideMenu);
$('#closeMenu').addEventListener('click', closeSideMenu);
backdrop.addEventListener('click', closeSideMenu);
$$('.side-nav a').forEach((link) => link.addEventListener('click', closeSideMenu));

function savePlan() {
  localStorage.setItem('biovitaPlanItems', JSON.stringify(planItems));
  updatePlanUI();
}

function addToPlan(item) {
  if (!planItems.includes(item)) {
    planItems.push(item);
    savePlan();
    showToast(`${item} adicionado ao plano.`);
  } else {
    showToast(`${item} já está no plano.`);
  }
}

function updatePlanUI() {
  cartCount.textContent = planItems.length;

  if (!planItemsBox) return;

  if (planItems.length === 0) {
    planItemsBox.innerHTML = '<p class="plan-empty">Nenhum item adicionado ainda.</p>';
    return;
  }

  planItemsBox.innerHTML = planItems
    .map(
      (item) => `
      <div class="plan-item">
        <strong>${item}</strong>
        <button class="link-button remove-plan-item" data-item="${item}">REMOVER</button>
      </div>`
    )
    .join('');

  $$('.remove-plan-item').forEach((button) => {
    button.addEventListener('click', () => {
      planItems = planItems.filter((item) => item !== button.dataset.item);
      savePlan();
    });
  });
}

$$('.add-plan').forEach((button) => {
  button.addEventListener('click', () => addToPlan(button.dataset.name));
});

$$('.choose-plan').forEach((button) => {
  button.addEventListener('click', () => {
    const plan = `Plano ${button.dataset.plan}`;
    addToPlan(plan);
    if (interestInput) interestInput.value = plan;
  });
});

const productModal = $('#productModal');
const modalTitle = $('#modalTitle');
const modalSubtitle = $('#modalSubtitle');
const modalBody = $('#modalBody');
const modalNumber = $('#modalNumber');
const modalAddButton = $('#modalAddButton');
let currentProduct = null;

function openProductModal(productName) {
  const product = products[productName];
  if (!product) return;

  currentProduct = productName;
  modalNumber.textContent = product.number;
  modalTitle.textContent = product.title;
  modalSubtitle.textContent = product.subtitle;
  modalBody.textContent = product.body;
  productModal.showModal();
  document.body.classList.add('modal-open');
}

$$('[data-detail]').forEach((button) => {
  button.addEventListener('click', () => openProductModal(button.dataset.detail));
});

$('#closeModal').addEventListener('click', () => {
  productModal.close();
  document.body.classList.remove('modal-open');
});

modalAddButton.addEventListener('click', () => {
  if (currentProduct) addToPlan(currentProduct);
  productModal.close();
  document.body.classList.remove('modal-open');
});

const searchModal = $('#searchModal');
const searchInput = $('#searchInput');
const searchResults = $('#searchResults');

function renderSearchResults(query = '') {
  const normalized = query.trim().toLowerCase();
  const cards = $$('.product-card');

  const matches = cards.filter((card) => {
    const haystack = `${card.dataset.product} ${card.dataset.category} ${card.innerText}`.toLowerCase();
    return !normalized || haystack.includes(normalized);
  });

  searchResults.innerHTML = matches
    .map(
      (card) => `
      <div class="search-item">
        <strong>${card.dataset.product}</strong>
        <span>${card.querySelector('.product-subtitle').textContent}</span>
        <button class="link-button search-open-product" data-product="${card.dataset.product}">VER PRODUTO</button>
      </div>`
    )
    .join('') || '<p>Nenhum produto encontrado.</p>';

  $$('.search-open-product').forEach((button) => {
    button.addEventListener('click', () => {
      searchModal.close();
      openProductModal(button.dataset.product);
    });
  });
}

$('#openSearch').addEventListener('click', () => {
  renderSearchResults();
  searchModal.showModal();
  document.body.classList.add('modal-open');
  setTimeout(() => searchInput.focus(), 80);
});

$('#closeSearch').addEventListener('click', () => {
  searchModal.close();
  document.body.classList.remove('modal-open');
});

searchInput.addEventListener('input', () => renderSearchResults(searchInput.value));

const planModal = $('#planModal');
$('#openPlan').addEventListener('click', () => {
  updatePlanUI();
  planModal.showModal();
  document.body.classList.add('modal-open');
});

$('#closePlan').addEventListener('click', () => {
  planModal.close();
  document.body.classList.remove('modal-open');
});

$('#clearPlan').addEventListener('click', () => {
  planItems = [];
  savePlan();
  showToast('Plano limpo.');
});

$('#goToForm').addEventListener('click', () => {
  if (planItems.length > 0 && interestInput) {
    interestInput.value = planItems.join(', ');
  }
  planModal.close();
  document.body.classList.remove('modal-open');
});

$('#skinQuiz').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const skin = form.get('skin');
  const concern = form.get('concern');
  const routine = form.get('routine');

  if (!skin || !concern || !routine) {
    showToast('Responda todas as perguntas.');
    return;
  }

  const result = getRoutineResult(skin, concern, routine);
  lastRoutine = result.products;

  $('#resultTitle').textContent = result.title;
  $('#resultText').textContent = result.text;
  $('#quizResult').hidden = false;
  $('#quizResult').scrollIntoView({ behavior: 'smooth', block: 'center' });
});

function getRoutineResult(skin, concern, routine) {
  if (concern === 'manchas') {
    return {
      title: 'Rotina Repair',
      products: ['Anexregen', 'Seboclin'],
      text: `Para pele ${skin}, com foco em manchas, sugerimos Anexregen para uniformização visual do tom e Seboclin como limpeza inicial. Use protetor solar como parte obrigatória da rotina.`,
    };
  }

  if (concern === 'acne' || concern === 'oleosidade' || skin === 'oleosa') {
    return {
      title: 'Rotina Controle',
      products: ['Seboclin', 'Anexregen'],
      text: `Para pele ${skin}, com foco em ${concern}, sugerimos Seboclin para limpeza e controle cosmético da oleosidade, com Anexregen como suporte à reparação de marcas pós-acne.`,
    };
  }

  if (concern === 'textura') {
    return {
      title: 'Rotina Renovação',
      products: ['Keraclin', 'Seboclin'],
      text: `Para textura irregular, sugerimos Keraclin para renovação superficial e Seboclin para limpeza. Em pele sensível, o uso deve ser mais espaçado.`,
    };
  }

  return {
    title: 'Rotina Essencial',
    products: ['Seboclin'],
    text: `Para quem ${routine === 'não' ? 'ainda não tem' : 'já tem'} rotina, sugerimos começar com uma etapa simples de limpeza e observar a resposta da pele.`,
  };
}

$('#addRoutineToPlan').addEventListener('click', () => {
  lastRoutine.forEach(addToPlan);
});

$('#interestForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = form.get('name');
  const skinType = form.get('skinType');
  const interest = form.get('interest');
  const contact = form.get('contact') || 'Não informado';
  const protocol = `BV-${Date.now().toString().slice(-6)}`;

  $('#receiptName').textContent = name;
  $('#receiptInfo').textContent = `Pele: ${skinType} | Interesse: ${interest} | Contato: ${contact}`;
  $('#receiptProtocol').textContent = `Protocolo de interesse: ${protocol}`;
  $('#receipt').hidden = false;
  $('#receipt').scrollIntoView({ behavior: 'smooth', block: 'center' });

  showToast('Ficha gerada.');
});

$('#printReceipt').addEventListener('click', () => window.print());

function showToast(message) {
  const oldToast = $('.toast');
  if (oldToast) oldToast.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add('show'));

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 250);
  }, 2400);
}

$$('dialog').forEach((dialog) => {
  dialog.addEventListener('close', () => document.body.classList.remove('modal-open'));
});
