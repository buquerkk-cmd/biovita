const body = document.body;
const menuTrigger = document.getElementById('menuTrigger');
const menuOverlay = document.getElementById('menuOverlay');
const closeMenu = document.getElementById('closeMenu');
const searchTrigger = document.getElementById('searchTrigger');
const searchModal = document.getElementById('searchModal');
const closeSearch = document.getElementById('closeSearch');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const planTrigger = document.getElementById('planTrigger');
const planDrawer = document.getElementById('planDrawer');
const closePlan = document.getElementById('closePlan');
const planItems = document.getElementById('planItems');
const planCount = document.getElementById('planCount');

const plan = [];
const searchData = [
  { term: 'ACNE', text: 'Seboclin é o produto principal para pele oleosa e acneica.' },
  { term: 'MANCHAS', text: 'Anexregen atua na proposta de uniformização do tom e manchas pós-acne.' },
  { term: 'OLEOSIDADE', text: 'Seboclin ajuda na limpeza dos poros e controle de sebo.' },
  { term: 'TEXTURA', text: 'Keraclin é indicado para renovação da textura cutânea.' },
  { term: 'ASSINATURA', text: 'Planos Essencial, Controle, Repair e Complete estão disponíveis para simulação.' }
];

function openLayer(layer) {
  layer.classList.add('open');
  layer.setAttribute('aria-hidden', 'false');
  body.classList.add('locked');
}

function closeLayer(layer) {
  layer.classList.remove('open');
  layer.setAttribute('aria-hidden', 'true');
  body.classList.remove('locked');
}

menuTrigger.addEventListener('click', () => {
  openLayer(menuOverlay);
  menuTrigger.setAttribute('aria-expanded', 'true');
});
closeMenu.addEventListener('click', () => {
  closeLayer(menuOverlay);
  menuTrigger.setAttribute('aria-expanded', 'false');
});
menuOverlay.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => closeLayer(menuOverlay));
});

searchTrigger.addEventListener('click', () => {
  openLayer(searchModal);
  searchInput.focus();
  renderSearch('');
});
closeSearch.addEventListener('click', () => closeLayer(searchModal));
searchInput.addEventListener('input', (event) => renderSearch(event.target.value));

function renderSearch(query) {
  const normalized = query.trim().toLowerCase();
  const results = normalized
    ? searchData.filter(item => item.term.toLowerCase().includes(normalized) || item.text.toLowerCase().includes(normalized))
    : searchData;

  searchResults.innerHTML = results.map(item => `
    <div>
      <strong>${item.term}</strong>
      <p>${item.text}</p>
    </div>
  `).join('') || '<p>Nenhum resultado encontrado.</p>';
}

function updatePlan() {
  planCount.textContent = plan.length;
  planItems.innerHTML = plan.length
    ? plan.map(item => `<li>${item}</li>`).join('')
    : '<li>Nenhum item selecionado.</li>';
}

document.querySelectorAll('.add-plan').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.product-card');
    const product = card.dataset.product;
    if (!plan.includes(product)) plan.push(product);
    card.classList.add('added');
    updatePlan();
  });
});

document.querySelectorAll('.choose-plan').forEach(button => {
  button.addEventListener('click', () => {
    const chosen = `Plano ${button.dataset.plan}`;
    if (!plan.includes(chosen)) plan.push(chosen);
    updatePlan();
    planDrawer.classList.add('open');
    planDrawer.setAttribute('aria-hidden', 'false');
  });
});

planTrigger.addEventListener('click', () => {
  updatePlan();
  planDrawer.classList.add('open');
  planDrawer.setAttribute('aria-hidden', 'false');
});
closePlan.addEventListener('click', () => {
  planDrawer.classList.remove('open');
  planDrawer.setAttribute('aria-hidden', 'true');
});

const diagnosisForm = document.getElementById('diagnosisForm');
const diagnosisResult = document.getElementById('diagnosisResult');

diagnosisForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(diagnosisForm);
  const skin = data.get('skin');
  const concern = data.get('concern');
  let title = 'Rotina BioVita';
  let recommendation = '';

  if (concern === 'acne' || concern === 'oleosidade' || skin === 'oleosa') {
    title = 'Seboclin + Anexregen';
    recommendation = 'Comece pela limpeza com Seboclin. Para marcas pós-acne ou tom irregular, associe Anexregen com orientação e uso de protetor solar.';
  } else if (concern === 'manchas') {
    title = 'Anexregen';
    recommendation = 'Foco em uniformização do tom e cuidado com manchas pós-acne. A rotina deve ser acompanhada de proteção solar diária.';
  } else if (concern === 'textura') {
    title = 'Keraclin + Anexregen';
    recommendation = 'Use Keraclin como proposta de renovação de textura e Anexregen para suporte de reparação e uniformização.';
  } else if (skin === 'sensivel') {
    title = 'Rotina suave';
    recommendation = 'Comece com baixa frequência e observe tolerância. Peles sensíveis exigem introdução gradual dos produtos.';
  } else {
    recommendation = 'Rotina básica recomendada: limpeza, reparação e proteção solar.';
  }

  diagnosisResult.innerHTML = `
    <span>RESULTADO</span>
    <h3>${title}</h3>
    <p>${recommendation}</p>
  `;
});

const leadForm = document.getElementById('leadForm');
const leadCard = document.getElementById('leadCard');

leadForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('leadName').value.trim();
  const interest = document.getElementById('leadInterest').value;
  const note = document.getElementById('leadNote').value.trim();
  const date = new Date().toLocaleDateString('pt-BR');

  leadCard.innerHTML = `
    <span>BIOVITA DERMO | ${date}</span>
    <h3>${name}</h3>
    <p><strong>Interesse:</strong> ${interest}</p>
    <p><strong>Observação:</strong> ${note || 'Sem observação registrada.'}</p>
    <p>Apresente esta ficha ao consultor BioVita para simulação de assinatura.</p>
  `;
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeLayer(menuOverlay);
    closeLayer(searchModal);
    planDrawer.classList.remove('open');
  }
});
