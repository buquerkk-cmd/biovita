<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>BIOVITA DERMO</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">

<style>
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

  :root {
    --black: #0a0a0a;
    --white: #ffffff;
    --gray-light: #f5f5f3;
    --gray-mid: #e0e0dc;
    --gray-dark: #8a8a82;
    --green: #3d5a4a;
    --green-light: #b8ccc0;
    --display: 'Cormorant Garamond', Georgia, serif;
    --body: 'Inter', system-ui, sans-serif;
  }

  html { scroll-behavior: smooth; }

  body {
    background: var(--white);
    color: var(--black);
    font-family: var(--body);
    font-size: 13px;
    font-weight: 300;
    letter-spacing: 0.08em;
    overflow-x: hidden;
  }

  /* ── HEADER ── */
  header {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    height: 60px;
    background: rgba(255,255,255,0.96);
    backdrop-filter: blur(8px);
    border-bottom: 0.8px solid var(--gray-mid);
  }

  .header-left {
    display: flex;
    align-items: center;
    gap: 32px;
  }

  .hamburger {
    display: flex;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    padding: 4px;
  }
  .hamburger span {
    display: block;
    width: 22px;
    height: 0.8px;
    background: var(--black);
    transition: all 0.3s;
  }

  .site-logo {
    font-family: var(--display);
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--black);
    line-height: 1;
  }
  .site-logo span {
    display: block;
    font-size: 9px;
    font-weight: 300;
    letter-spacing: 0.45em;
    color: var(--gray-dark);
    margin-top: 2px;
  }

  .header-right {
    display: flex;
    align-items: center;
    gap: 28px;
  }
  .header-right a {
    text-decoration: none;
    color: var(--black);
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    opacity: 0.7;
    transition: opacity 0.2s;
    cursor: pointer;
  }
  .header-right a:hover { opacity: 1; }

  .plan-badge {
    display: flex;
    align-items: center;
    gap: 6px;
    opacity: 1 !important;
  }
  .plan-count {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 16px; height: 16px;
    border: 0.8px solid var(--black);
    border-radius: 50%;
    font-size: 9px;
  }

  /* ── OVERLAY MENU ── */
  .menu-overlay {
    position: fixed;
    inset: 0;
    z-index: 200;
    background: var(--white);
    transform: translateX(-100%);
    transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
    display: flex;
  }

  .menu-overlay.open { transform: translateX(0); }

  .menu-close {
    position: absolute;
    top: 20px; left: 40px;
    cursor: pointer;
    font-size: 22px;
    color: var(--black);
    background: none; border: none;
    line-height: 1;
  }

  .menu-inner {
    display: flex;
    width: 100%;
    padding-top: 80px;
  }

  .menu-main {
    width: 280px;
    padding: 0 48px;
    border-right: 0.8px solid var(--gray-mid);
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .menu-logo {
    font-family: var(--display);
    font-size: 28px;
    font-weight: 400;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin-bottom: 40px;
    line-height: 1.1;
  }
  .menu-logo small {
    display: block;
    font-size: 12px;
    letter-spacing: 0.35em;
    font-weight: 300;
    color: var(--gray-dark);
  }

  .menu-item {
    font-size: 12px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 10px 0;
    cursor: pointer;
    color: var(--black);
    text-decoration: none;
    display: block;
    border-bottom: 0.8px solid transparent;
    transition: border-color 0.2s, color 0.2s;
    position: relative;
  }
  .menu-item:hover { color: var(--black); border-bottom-color: var(--black); }
  .menu-item.active { font-weight: 500; }
  .menu-item .dot {
    display: inline-block;
    width: 4px; height: 4px;
    border-radius: 50%;
    background: var(--green);
    margin-right: 8px;
    vertical-align: middle;
    margin-bottom: 1px;
  }

  .menu-sub {
    flex: 1;
    padding: 0 60px;
    display: none;
  }
  .menu-sub.visible { display: block; }

  .menu-sub-title {
    font-size: 11px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--gray-dark);
    margin-bottom: 24px;
  }

  .menu-sub-item {
    display: flex;
    align-items: baseline;
    gap: 20px;
    padding: 14px 0;
    border-bottom: 0.8px solid var(--gray-mid);
    cursor: pointer;
    text-decoration: none;
    color: var(--black);
  }
  .menu-sub-item:hover .sub-name { text-decoration: underline; }
  .sub-num { font-size: 10px; color: var(--gray-dark); letter-spacing: 0.1em; }
  .sub-name { font-size: 16px; font-family: var(--display); font-weight: 400; letter-spacing: 0.06em; }
  .sub-label { font-size: 10px; color: var(--gray-dark); text-transform: uppercase; letter-spacing: 0.1em; }

  /* ── HERO ── */
  #hero {
    min-height: 100vh;
    padding-top: 60px;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
  }

  .hero-label {
    padding: 20px 40px 0;
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gray-dark);
  }

  .hero-content {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
  }

  .hero-left {
    padding: 40px 0 40px 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    z-index: 2;
  }

  .hero-title {
    font-family: var(--display);
    font-size: clamp(52px, 8vw, 110px);
    font-weight: 300;
    line-height: 0.9;
    letter-spacing: -0.01em;
    text-transform: uppercase;
  }
  .hero-title em {
    display: block;
    font-style: italic;
    font-weight: 300;
    color: var(--gray-dark);
    font-size: 0.65em;
    letter-spacing: 0.05em;
  }

  .hero-tagline {
    font-size: 11px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--black);
    line-height: 2;
    max-width: 220px;
  }

  .hero-cta-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .btn-primary {
    display: inline-block;
    padding: 14px 28px;
    background: var(--black);
    color: var(--white);
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    border: none;
    transition: background 0.2s;
    font-family: var(--body);
    font-weight: 400;
    width: fit-content;
  }
  .btn-primary:hover { background: var(--green); }

  .btn-ghost {
    display: inline-block;
    padding: 13px 28px;
    background: transparent;
    color: var(--black);
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    border: 0.8px solid var(--black);
    transition: all 0.2s;
    font-family: var(--body);
    font-weight: 300;
    width: fit-content;
  }
  .btn-ghost:hover { background: var(--black); color: var(--white); }

  .hero-right {
    position: relative;
    overflow: hidden;
  }

  .hero-image-bg {
    position: absolute;
    inset: 0;
    background: var(--gray-light);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* SVG skin illustration */
  .skin-visual {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .hero-brand-bg {
    position: absolute;
    bottom: -20px;
    right: -40px;
    font-family: var(--display);
    font-size: clamp(80px, 14vw, 180px);
    font-weight: 600;
    color: rgba(0,0,0,0.04);
    text-transform: uppercase;
    letter-spacing: -0.02em;
    pointer-events: none;
    line-height: 1;
    white-space: nowrap;
    z-index: 1;
  }

  .hero-scroll-hint {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    font-size: 9px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gray-dark);
    cursor: pointer;
  }
  .scroll-line {
    width: 0.8px;
    height: 40px;
    background: linear-gradient(to bottom, var(--gray-dark), transparent);
    animation: scrollPulse 2s ease-in-out infinite;
  }
  @keyframes scrollPulse {
    0%, 100% { opacity: 0.4; transform: scaleY(1); }
    50% { opacity: 1; transform: scaleY(1.2); }
  }

  /* ── NOVA ROTINA ── */
  #nova-rotina {
    padding: 0;
    overflow: hidden;
  }

  .rotina-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding: 60px 40px 40px;
    border-bottom: 0.8px solid var(--gray-mid);
  }
  .rotina-header h2 {
    font-family: var(--display);
    font-size: clamp(36px, 5vw, 64px);
    font-weight: 300;
    letter-spacing: 0.02em;
  }
  .rotina-header p {
    font-size: 11px;
    letter-spacing: 0.15em;
    color: var(--gray-dark);
    text-transform: uppercase;
    max-width: 200px;
    text-align: right;
    line-height: 1.8;
  }

  .rotina-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 70vh;
    position: relative;
  }

  .rotina-img {
    background: var(--gray-light);
    position: relative;
    overflow: hidden;
    min-height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .rotina-img-inner {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px;
  }

  .rotina-brand-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    font-family: var(--display);
    font-size: clamp(60px, 12vw, 160px);
    font-weight: 600;
    color: rgba(0,0,0,0.06);
    text-transform: uppercase;
    letter-spacing: -0.02em;
    pointer-events: none;
    line-height: 0.85;
    overflow: hidden;
  }

  /* ── PRODUTOS ── */
  #produtos {
    padding: 80px 40px;
    border-top: 0.8px solid var(--gray-mid);
  }

  .section-label {
    font-size: 10px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--gray-dark);
    margin-bottom: 48px;
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .section-label::after {
    content: '';
    flex: 1;
    height: 0.8px;
    background: var(--gray-mid);
    max-width: 80px;
  }

  .produto-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
    border-top: 0.8px solid var(--gray-mid);
    border-left: 0.8px solid var(--gray-mid);
  }

  .produto-card {
    border-right: 0.8px solid var(--gray-mid);
    border-bottom: 0.8px solid var(--gray-mid);
    padding: 0;
    overflow: hidden;
    cursor: pointer;
  }

  .produto-img-wrap {
    background: var(--gray-light);
    aspect-ratio: 3/4;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: background 0.4s;
  }
  .produto-card:hover .produto-img-wrap { background: var(--gray-mid); }

  .produto-num {
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 9px;
    letter-spacing: 0.15em;
    color: var(--gray-dark);
  }

  .produto-info {
    padding: 24px 28px 28px;
    border-top: 0.8px solid var(--gray-mid);
  }

  .produto-cat {
    font-size: 9px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gray-dark);
    margin-bottom: 8px;
  }

  .produto-name {
    font-family: var(--display);
    font-size: 28px;
    font-weight: 400;
    letter-spacing: 0.02em;
    margin-bottom: 4px;
    line-height: 1;
  }

  .produto-ativo {
    font-size: 10px;
    letter-spacing: 0.12em;
    color: var(--green);
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  .produto-desc {
    font-size: 12px;
    line-height: 1.7;
    color: var(--gray-dark);
    margin-bottom: 24px;
    font-weight: 300;
    letter-spacing: 0.04em;
  }

  .produto-btns {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .btn-sm {
    padding: 10px 16px;
    font-size: 9px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    border: 0.8px solid var(--black);
    background: transparent;
    cursor: pointer;
    font-family: var(--body);
    font-weight: 300;
    transition: all 0.2s;
    width: 100%;
    text-align: center;
  }
  .btn-sm:hover, .btn-sm.primary { background: var(--black); color: var(--white); }
  .btn-sm.primary:hover { background: var(--green); border-color: var(--green); }

  /* ── DIAGNÓSTICO ── */
  #diagnostico {
    background: var(--gray-light);
    padding: 80px 40px;
    border-top: 0.8px solid var(--gray-mid);
  }

  .diag-header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    margin-bottom: 60px;
    align-items: end;
  }

  .diag-header h2 {
    font-family: var(--display);
    font-size: clamp(36px, 4vw, 60px);
    font-weight: 300;
    line-height: 1;
    letter-spacing: 0.01em;
  }
  .diag-header p {
    font-size: 12px;
    line-height: 1.9;
    color: var(--gray-dark);
    letter-spacing: 0.05em;
  }

  .diag-steps {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .diag-step {
    border-top: 0.8px solid var(--gray-mid);
    padding: 32px 0;
  }

  .diag-step-header {
    display: flex;
    align-items: baseline;
    gap: 24px;
    margin-bottom: 20px;
  }

  .step-num {
    font-size: 10px;
    letter-spacing: 0.15em;
    color: var(--gray-dark);
    min-width: 24px;
  }
  .step-q {
    font-size: 13px;
    letter-spacing: 0.08em;
    font-weight: 300;
  }

  .step-options {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding-left: 48px;
  }

  .step-opt {
    padding: 8px 20px;
    border: 0.8px solid var(--gray-dark);
    font-size: 10px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    cursor: pointer;
    background: transparent;
    font-family: var(--body);
    font-weight: 300;
    transition: all 0.2s;
    color: var(--black);
  }
  .step-opt:hover, .step-opt.selected {
    background: var(--black);
    color: var(--white);
    border-color: var(--black);
  }

  .diag-result {
    display: none;
    margin-top: 48px;
    padding: 40px;
    background: var(--white);
    border: 0.8px solid var(--gray-mid);
  }
  .diag-result.visible { display: block; }

  .result-label {
    font-size: 9px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--green);
    margin-bottom: 16px;
  }
  .result-title {
    font-family: var(--display);
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 8px;
  }
  .result-desc {
    font-size: 12px;
    color: var(--gray-dark);
    line-height: 1.8;
    letter-spacing: 0.04em;
    margin-bottom: 28px;
  }

  .diag-btn-wrap {
    margin-top: 48px;
    display: flex;
    justify-content: center;
  }

  /* ── ASSINATURAS ── */
  #assinaturas {
    padding: 80px 40px;
    border-top: 0.8px solid var(--gray-mid);
  }

  .planos-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 48px;
    border-top: 0.8px solid var(--gray-mid);
    border-left: 0.8px solid var(--gray-mid);
  }

  .plano-card {
    border-right: 0.8px solid var(--gray-mid);
    border-bottom: 0.8px solid var(--gray-mid);
    padding: 36px 28px;
    cursor: pointer;
    transition: background 0.3s;
    position: relative;
  }
  .plano-card:hover { background: var(--gray-light); }
  .plano-card.featured { background: var(--black); color: var(--white); }
  .plano-card.featured .plano-desc,
  .plano-card.featured .plano-item { color: rgba(255,255,255,0.6); }
  .plano-card.featured .plano-btn { border-color: var(--white); color: var(--white); }
  .plano-card.featured .plano-btn:hover { background: var(--white); color: var(--black); }

  .plano-badge {
    position: absolute;
    top: 16px;
    right: 16px;
    font-size: 8px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    background: var(--green);
    color: var(--white);
    padding: 4px 8px;
  }

  .plano-num {
    font-size: 10px;
    letter-spacing: 0.15em;
    color: var(--gray-dark);
    margin-bottom: 20px;
  }
  .plano-card.featured .plano-num { color: rgba(255,255,255,0.4); }

  .plano-name {
    font-family: var(--display);
    font-size: 26px;
    font-weight: 400;
    letter-spacing: 0.04em;
    margin-bottom: 8px;
    line-height: 1;
  }

  .plano-desc {
    font-size: 11px;
    color: var(--gray-dark);
    letter-spacing: 0.06em;
    margin-bottom: 24px;
    line-height: 1.6;
  }

  .plano-items {
    list-style: none;
    margin-bottom: 28px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .plano-item {
    font-size: 11px;
    color: var(--gray-dark);
    letter-spacing: 0.05em;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .plano-item::before {
    content: '';
    width: 12px;
    height: 0.8px;
    background: currentColor;
    flex-shrink: 0;
  }

  .plano-btn {
    width: 100%;
    padding: 12px;
    border: 0.8px solid var(--black);
    background: transparent;
    font-size: 9px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    cursor: pointer;
    font-family: var(--body);
    font-weight: 300;
    transition: all 0.2s;
    color: var(--black);
  }
  .plano-btn:hover { background: var(--black); color: var(--white); }

  /* ── SOBRE ── */
  #sobre {
    padding: 80px 40px;
    background: var(--black);
    color: var(--white);
    border-top: 0.8px solid #222;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
  }

  .sobre-left h2 {
    font-family: var(--display);
    font-size: clamp(40px, 5vw, 80px);
    font-weight: 300;
    line-height: 0.9;
    margin-bottom: 40px;
    letter-spacing: 0.01em;
  }
  .sobre-left h2 em {
    font-style: italic;
    color: var(--green-light);
  }

  .sobre-values {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .sobre-value {
    display: flex;
    align-items: baseline;
    gap: 20px;
    padding: 20px 0;
    border-top: 0.8px solid #2a2a2a;
  }
  .value-num { font-size: 10px; color: var(--gray-dark); letter-spacing: 0.1em; }
  .value-text { font-size: 12px; letter-spacing: 0.08em; font-weight: 300; color: rgba(255,255,255,0.7); line-height: 1.6; }
  .value-name { font-size: 14px; font-family: var(--display); font-weight: 400; margin-bottom: 4px; color: var(--white); }

  /* ── CONTATO ── */
  #contato {
    padding: 80px 40px;
    border-top: 0.8px solid var(--gray-mid);
  }

  .contato-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: start;
  }

  .contato-left h2 {
    font-family: var(--display);
    font-size: clamp(36px, 4vw, 60px);
    font-weight: 300;
    margin-bottom: 16px;
    line-height: 1;
  }
  .contato-left p {
    font-size: 12px;
    color: var(--gray-dark);
    line-height: 1.8;
    letter-spacing: 0.04em;
  }

  .contato-form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .form-field {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .form-field label {
    font-size: 9px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gray-dark);
  }
  .form-field input,
  .form-field select,
  .form-field textarea {
    border: none;
    border-bottom: 0.8px solid var(--gray-mid);
    padding: 12px 0;
    font-size: 13px;
    font-family: var(--body);
    font-weight: 300;
    letter-spacing: 0.05em;
    background: transparent;
    outline: none;
    transition: border-color 0.2s;
    color: var(--black);
    width: 100%;
    -webkit-appearance: none;
  }
  .form-field input:focus,
  .form-field select:focus,
  .form-field textarea:focus { border-bottom-color: var(--black); }
  .form-field textarea { resize: none; min-height: 80px; }

  /* ── FOOTER ── */
  footer {
    padding: 40px;
    border-top: 0.8px solid var(--gray-mid);
    display: flex;
    justify-content: space-between;
    align-items: end;
  }

  .footer-logo {
    font-family: var(--display);
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.3em;
    text-transform: uppercase;
  }
  .footer-logo small {
    display: block;
    font-size: 9px;
    font-weight: 300;
    letter-spacing: 0.4em;
    color: var(--gray-dark);
    margin-top: 4px;
  }

  .footer-copy {
    font-size: 10px;
    letter-spacing: 0.08em;
    color: var(--gray-dark);
  }

  /* ── PRODUTO VISUAL SVGs ── */
  .produto-svg {
    width: 60%;
    max-width: 140px;
  }

  .hero-skin-svg {
    width: 80%;
    max-width: 300px;
    opacity: 0.5;
  }

  /* ── SCROLL ANIMATIONS ── */
  .fade-up {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }
  .fade-up.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 900px) {
    header { padding: 0 20px; }
    .hero-content { grid-template-columns: 1fr; }
    .hero-right { min-height: 280px; }
    .rotina-grid { grid-template-columns: 1fr; }
    .produto-grid { grid-template-columns: 1fr; }
    .diag-header { grid-template-columns: 1fr; gap: 20px; }
    .planos-grid { grid-template-columns: 1fr 1fr; }
    .sobre { grid-template-columns: 1fr; }
    #sobre { grid-template-columns: 1fr; gap: 48px; }
    .contato-inner { grid-template-columns: 1fr; gap: 40px; }
    .menu-main { width: 100%; border-right: none; }
    .menu-sub { display: none !important; }
    footer { flex-direction: column; gap: 16px; align-items: start; }
  }

  @media (prefers-reduced-motion: reduce) {
    *, .fade-up { transition: none !important; animation: none !important; }
  }
</style>
</head>
<body>

<!-- MENU OVERLAY -->
<div class="menu-overlay" id="menuOverlay">
  <button class="menu-close" id="menuClose">✕</button>
  <div class="menu-inner">
    <nav class="menu-main">
      <div class="menu-logo">BIOVITA<small>DERMO</small></div>
      <a href="#hero" class="menu-item" onclick="closeMenu()"><span class="dot"></span>Início</a>
      <a href="#nova-rotina" class="menu-item" onclick="closeMenu()">Nova Rotina</a>
      <a href="#produtos" class="menu-item active" id="menuProdutos" onclick="toggleSub(event)">Produtos</a>
      <a href="#diagnostico" class="menu-item" onclick="closeMenu()">Diagnóstico</a>
      <a href="#assinaturas" class="menu-item" onclick="closeMenu()">Assinaturas</a>
      <a href="#sobre" class="menu-item" onclick="closeMenu()">Sobre</a>
      <a href="#contato" class="menu-item" onclick="closeMenu()">Contato</a>
    </nav>
    <div class="menu-sub" id="menuSub">
      <div class="menu-sub-title">Coleção</div>
      <a href="#produtos" class="menu-sub-item" onclick="closeMenu()">
        <span class="sub-num">01 |</span>
        <span>
          <div class="sub-name">Seboclin</div>
          <div class="sub-label">Limpeza</div>
        </span>
      </a>
      <a href="#produtos" class="menu-sub-item" onclick="closeMenu()">
        <span class="sub-num">02 |</span>
        <span>
          <div class="sub-name">Anexregen</div>
          <div class="sub-label">Reparação</div>
        </span>
      </a>
      <a href="#produtos" class="menu-sub-item" onclick="closeMenu()">
        <span class="sub-num">03 |</span>
        <span>
          <div class="sub-name">Keraclin</div>
          <div class="sub-label">Renovação</div>
        </span>
      </a>
    </div>
  </div>
</div>

<!-- HEADER -->
<header>
  <div class="header-left">
    <div class="hamburger" id="hamburger" onclick="openMenu()">
      <span></span><span></span><span></span>
    </div>
    <a href="#hero" class="site-logo">BIOVITA<span>DERMO</span></a>
  </div>
  <div class="header-right">
    <a href="#diagnostico">DIAGNÓSTICO</a>
    <a href="#assinaturas" class="plan-badge">MEU PLANO <span class="plan-count">0</span></a>
    <a href="#contato">ATENDIMENTO</a>
  </div>
</header>

<!-- HERO -->
<section id="hero">
  <div class="hero-label">Dermocosméticos — Coleção 2025</div>
  <div class="hero-content">
    <div class="hero-left">
      <div class="hero-title">
        PELE<br>TRATA<br>DA
        <em>com precisão</em>
      </div>
      <div class="hero-tagline">
        LIMPEZA<br>
        REPARAÇÃO<br>
        RENOVAÇÃO CUTÂNEA
      </div>
      <div class="hero-cta-group">
        <a href="#nova-rotina" class="btn-primary">Nova Rotina</a>
        <a href="#diagnostico" class="btn-ghost">Fazer Diagnóstico</a>
      </div>
    </div>
    <div class="hero-right">
      <div class="hero-image-bg">
        <!-- Editorial skin illustration -->
        <svg class="hero-skin-svg" viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="150" cy="180" rx="90" ry="120" fill="#e8e4de" stroke="#c8c4bc" stroke-width="0.5"/>
          <ellipse cx="150" cy="160" rx="52" ry="68" fill="#ddd9d1" stroke="#c8c4bc" stroke-width="0.3"/>
          <circle cx="120" cy="148" rx="12" ry="8" fill="#ccc8c0"/>
          <circle cx="180" cy="148" rx="12" ry="8" fill="#ccc8c0"/>
          <path d="M130 185 Q150 198 170 185" stroke="#b8b4ac" stroke-width="0.8" fill="none"/>
          <line x1="150" y1="100" x2="150" y2="240" stroke="#c8c4bc" stroke-width="0.3" stroke-dasharray="2 4"/>
          <ellipse cx="150" cy="310" rx="60" ry="14" fill="#eeebe6" opacity="0.6"/>
          <circle cx="150" cy="60" r="40" fill="#e0dbd3" stroke="#c8c4bc" stroke-width="0.5"/>
          <circle cx="135" cy="55" r="6" fill="#c8c4bc"/>
          <circle cx="165" cy="55" r="6" fill="#c8c4bc"/>
        </svg>
        <div class="hero-brand-bg">BIOVITA</div>
      </div>
    </div>
  </div>
  <div class="hero-scroll-hint" onclick="document.getElementById('nova-rotina').scrollIntoView({behavior:'smooth'})">
    <div class="scroll-line"></div>
    <span>ROLAR</span>
  </div>
</section>

<!-- NOVA ROTINA -->
<section id="nova-rotina">
  <div class="rotina-header">
    <h2 class="fade-up">Nova Rotina</h2>
    <p class="fade-up">Dermocosméticos pensados para cada etapa da pele</p>
  </div>
  <div class="rotina-grid">
    <div class="rotina-img" style="background:#1a1a18;">
      <div class="rotina-img-inner">
        <svg viewBox="0 0 260 360" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:70%;max-width:200px;opacity:0.8">
          <rect x="80" y="40" width="100" height="280" rx="50" fill="#2a2a28" stroke="#3d3d3a" stroke-width="0.8"/>
          <rect x="95" y="60" width="70" height="200" rx="35" fill="#222220"/>
          <ellipse cx="130" cy="170" rx="28" ry="38" fill="#2e4a3a" opacity="0.6"/>
          <text x="130" y="295" text-anchor="middle" fill="#555550" font-size="8" letter-spacing="2" font-family="serif">SEBOCLIN</text>
          <rect x="115" y="55" width="30" height="6" rx="3" fill="#444440"/>
        </svg>
      </div>
      <div class="rotina-brand-overlay">DERMO</div>
    </div>
    <div class="rotina-img" style="background:#f0ede8;">
      <div class="rotina-img-inner">
        <svg viewBox="0 0 220 320" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:65%;max-width:180px;">
          <rect x="60" y="60" width="100" height="220" rx="8" fill="#e8e4de" stroke="#c8c4bc" stroke-width="0.8"/>
          <rect x="70" y="80" width="80" height="160" rx="4" fill="#ddd9d1"/>
          <ellipse cx="110" cy="155" rx="24" ry="32" fill="#3d5a4a" opacity="0.15"/>
          <text x="110" y="270" text-anchor="middle" fill="#8a8a82" font-size="7.5" letter-spacing="2" font-family="serif">ANEXREGEN</text>
          <rect x="90" y="56" width="40" height="8" rx="4" fill="#c8c4bc"/>
        </svg>
      </div>
      <div class="rotina-brand-overlay" style="color:rgba(0,0,0,0.05);">VITA</div>
    </div>
  </div>
</section>

<!-- PRODUTOS -->
<section id="produtos">
  <div class="section-label fade-up">Coleção Dermatológica</div>
  <div class="produto-grid">

    <!-- Seboclin -->
    <div class="produto-card fade-up">
      <div class="produto-img-wrap">
        <span class="produto-num">01 | LIMPEZA</span>
        <svg class="produto-svg" viewBox="0 0 140 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="30" y="20" width="80" height="160" rx="40" fill="#d8d4ce" stroke="#c0bcb4" stroke-width="0.6"/>
          <rect x="42" y="36" width="56" height="120" rx="28" fill="#ccc8c0"/>
          <ellipse cx="70" cy="100" rx="18" ry="26" fill="#3d5a4a" opacity="0.12"/>
          <text x="70" y="175" text-anchor="middle" fill="#8a8a82" font-size="7" letter-spacing="1.5" font-family="serif">SEBOCLIN</text>
          <rect x="55" y="17" width="30" height="6" rx="3" fill="#b0aca4"/>
        </svg>
      </div>
      <div class="produto-info">
        <div class="produto-cat">01 | Limpeza</div>
        <div class="produto-name">Seboclin</div>
        <div class="produto-ativo">Ácido Salicílico 2%</div>
        <div class="produto-desc">Limpeza para peles oleosas e acneicas. Remove excesso de sebo, limpa poros e reduz acúmulo de impurezas.</div>
        <div class="produto-btns">
          <button class="btn-sm primary" onclick="adicionarPlano('Seboclin')">ADICIONAR AO PLANO</button>
          <button class="btn-sm" onclick="document.getElementById('diagnostico').scrollIntoView({behavior:'smooth'})">VER NO DIAGNÓSTICO</button>
        </div>
      </div>
    </div>

    <!-- Anexregen -->
    <div class="produto-card fade-up" style="transition-delay:0.1s">
      <div class="produto-img-wrap">
        <span class="produto-num">02 | REPARAÇÃO</span>
        <svg class="produto-svg" viewBox="0 0 140 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="28" y="18" width="84" height="164" rx="10" fill="#e0dbd3" stroke="#c8c4bc" stroke-width="0.6"/>
          <rect x="38" y="30" width="64" height="130" rx="6" fill="#d4d0c8"/>
          <ellipse cx="70" cy="98" rx="20" ry="28" fill="#3d5a4a" opacity="0.1"/>
          <text x="70" y="174" text-anchor="middle" fill="#8a8a82" font-size="6.5" letter-spacing="1.5" font-family="serif">ANEXREGEN</text>
          <rect x="52" y="14" width="36" height="7" rx="3.5" fill="#b8b4ac"/>
        </svg>
      </div>
      <div class="produto-info">
        <div class="produto-cat">02 | Reparação</div>
        <div class="produto-name">Anexregen</div>
        <div class="produto-ativo">Ácido Tranexâmico 3%</div>
        <div class="produto-desc">Sérum para uniformização do tom da pele, manchas pós-acne e suporte à barreira cutânea.</div>
        <div class="produto-btns">
          <button class="btn-sm primary" onclick="adicionarPlano('Anexregen')">ADICIONAR AO PLANO</button>
          <button class="btn-sm" onclick="document.getElementById('diagnostico').scrollIntoView({behavior:'smooth'})">VER NO DIAGNÓSTICO</button>
        </div>
      </div>
    </div>

    <!-- Keraclin -->
    <div class="produto-card fade-up" style="transition-delay:0.2s">
      <div class="produto-img-wrap">
        <span class="produto-num">03 | RENOVAÇÃO</span>
        <svg class="produto-svg" viewBox="0 0 140 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="32" y="22" width="76" height="156" rx="38" fill="#e8e4de" stroke="#c8c4bc" stroke-width="0.6"/>
          <rect x="44" y="38" width="52" height="118" rx="26" fill="#ddd9d1"/>
          <circle cx="70" cy="100" r="20" fill="#3d5a4a" opacity="0.08"/>
          <text x="70" y="176" text-anchor="middle" fill="#8a8a82" font-size="7" letter-spacing="1.5" font-family="serif">KERACLIN</text>
          <rect x="54" y="18" width="32" height="7" rx="3.5" fill="#c0bcb4"/>
        </svg>
      </div>
      <div class="produto-info">
        <div class="produto-cat">03 | Renovação</div>
        <div class="produto-name">Keraclin</div>
        <div class="produto-ativo">Esfoliante Dermatológico</div>
        <div class="produto-desc">Renovação da textura da pele com acabamento mais uniforme, limpo e luminoso.</div>
        <div class="produto-btns">
          <button class="btn-sm primary" onclick="adicionarPlano('Keraclin')">ADICIONAR AO PLANO</button>
          <button class="btn-sm" onclick="document.getElementById('diagnostico').scrollIntoView({behavior:'smooth'})">VER NO DIAGNÓSTICO</button>
        </div>
      </div>
    </div>

  </div>
</section>

<!-- DIAGNÓSTICO -->
<section id="diagnostico">
  <div class="diag-header">
    <h2 class="fade-up">Diagnóstico<br><em style="font-family:var(--display);font-style:italic;font-weight:300;color:var(--gray-dark);">BioVita</em></h2>
    <p class="fade-up">Responda três perguntas e receba sua rotina personalizada. Dermocosméticos pensados para o seu tipo de pele.</p>
  </div>

  <div class="diag-steps">
    <div class="diag-step fade-up">
      <div class="diag-step-header">
        <span class="step-num">01 |</span>
        <span class="step-q">Como sua pele costuma ficar ao longo do dia?</span>
      </div>
      <div class="step-options" id="q1">
        <button class="step-opt" onclick="selectOpt(this,'q1')">OLEOSA</button>
        <button class="step-opt" onclick="selectOpt(this,'q1')">MISTA</button>
        <button class="step-opt" onclick="selectOpt(this,'q1')">SECA</button>
        <button class="step-opt" onclick="selectOpt(this,'q1')">SENSÍVEL</button>
      </div>
    </div>

    <div class="diag-step fade-up">
      <div class="diag-step-header">
        <span class="step-num">02 |</span>
        <span class="step-q">Qual seu principal incômodo?</span>
      </div>
      <div class="step-options" id="q2">
        <button class="step-opt" onclick="selectOpt(this,'q2')">ACNE</button>
        <button class="step-opt" onclick="selectOpt(this,'q2')">MANCHAS</button>
        <button class="step-opt" onclick="selectOpt(this,'q2')">OLEOSIDADE</button>
        <button class="step-opt" onclick="selectOpt(this,'q2')">TEXTURA</button>
      </div>
    </div>

    <div class="diag-step fade-up">
      <div class="diag-step-header">
        <span class="step-num">03 |</span>
        <span class="step-q">Você já tem rotina de skincare?</span>
      </div>
      <div class="step-options" id="q3">
        <button class="step-opt" onclick="selectOpt(this,'q3')">SIM</button>
        <button class="step-opt" onclick="selectOpt(this,'q3')">NÃO</button>
        <button class="step-opt" onclick="selectOpt(this,'q3')">ÀS VEZES</button>
      </div>
    </div>
  </div>

  <div class="diag-btn-wrap">
    <button class="btn-primary" onclick="gerarResultado()">VER MINHA ROTINA</button>
  </div>

  <div class="diag-result" id="diagResult">
    <div class="result-label">Sua rotina recomendada</div>
    <div class="result-title" id="resultTitle">Seboclin + Anexregen</div>
    <div class="result-desc" id="resultDesc">Controle de oleosidade, limpeza dos poros e uniformização do tom. Rotina indicada para pele oleosa com histórico de manchas.</div>
    <button class="btn-primary" onclick="document.getElementById('assinaturas').scrollIntoView({behavior:'smooth'})">VER PLANOS DE ASSINATURA</button>
  </div>
</section>

<!-- ASSINATURAS -->
<section id="assinaturas">
  <div class="section-label fade-up">Planos de Assinatura</div>
  <div class="planos-grid">

    <div class="plano-card fade-up">
      <div class="plano-num">01</div>
      <div class="plano-name">Essencial</div>
      <div class="plano-desc">Para quem quer começar.</div>
      <ul class="plano-items">
        <li class="plano-item">1 produto principal</li>
        <li class="plano-item">Orientação de uso</li>
        <li class="plano-item">Rotina básica</li>
      </ul>
      <button class="plano-btn">ESCOLHER PLANO</button>
    </div>

    <div class="plano-card fade-up" style="transition-delay:0.1s">
      <div class="plano-num">02</div>
      <div class="plano-name">Controle</div>
      <div class="plano-desc">Para pele oleosa e acneica.</div>
      <ul class="plano-items">
        <li class="plano-item">Seboclin</li>
        <li class="plano-item">Orientação de limpeza</li>
        <li class="plano-item">Controle de oleosidade</li>
      </ul>
      <button class="plano-btn">ESCOLHER PLANO</button>
    </div>

    <div class="plano-card fade-up" style="transition-delay:0.2s">
      <div class="plano-num">03</div>
      <div class="plano-name">Repair</div>
      <div class="plano-desc">Para manchas e reparação.</div>
      <ul class="plano-items">
        <li class="plano-item">Anexregen</li>
        <li class="plano-item">Suporte à barreira cutânea</li>
        <li class="plano-item">Uniformização do tom</li>
      </ul>
      <button class="plano-btn">ESCOLHER PLANO</button>
    </div>

    <div class="plano-card featured fade-up" style="transition-delay:0.3s">
      <div class="plano-badge">Completo</div>
      <div class="plano-num">04</div>
      <div class="plano-name">Complete</div>
      <div class="plano-desc">Rotina completa BioVita.</div>
      <ul class="plano-items">
        <li class="plano-item">Seboclin</li>
        <li class="plano-item">Anexregen</li>
        <li class="plano-item">Keraclin</li>
        <li class="plano-item">Diagnóstico BioVita</li>
      </ul>
      <button class="plano-btn">ESCOLHER PLANO</button>
    </div>

  </div>
</section>

<!-- SOBRE -->
<section id="sobre">
  <div class="sobre-left">
    <h2 class="fade-up">Precisão<br><em>dermatológica.</em><br>Sem ruído.</h2>
    <p class="fade-up" style="color:rgba(255,255,255,0.5);font-size:12px;line-height:1.8;letter-spacing:0.05em;max-width:320px;">A BioVita Dermo desenvolve dermocosméticos com ativos dermatológicos selecionados. Cada produto existe por uma razão clínica.</p>
  </div>
  <div class="sobre-values fade-up">
    <div class="sobre-value">
      <span class="value-num">01</span>
      <div>
        <div class="value-name">Formulação Clínica</div>
        <div class="value-text">Ativos com concentração e indicação dermatológica. Nada supérfluo.</div>
      </div>
    </div>
    <div class="sobre-value">
      <span class="value-num">02</span>
      <div>
        <div class="value-name">Rotina Personalizada</div>
        <div class="value-text">Cada pele é diferente. O diagnóstico BioVita orienta o uso correto de cada produto.</div>
      </div>
    </div>
    <div class="sobre-value">
      <span class="value-num">03</span>
      <div>
        <div class="value-name">Resultados Visíveis</div>
        <div class="value-text">Limpeza, reparação e renovação cutânea em uma rotina integrada.</div>
      </div>
    </div>
  </div>
</section>

<!-- CONTATO -->
<section id="contato">
  <div class="contato-inner">
    <div class="contato-left">
      <h2 class="fade-up">Ficha de<br>Interesse</h2>
      <p class="fade-up" style="margin-top:16px;">Preencha e nossa equipe entra em contato para montar seu plano personalizado.</p>
    </div>
    <div class="contato-form fade-up">
      <div class="form-field">
        <label>Nome</label>
        <input type="text" placeholder="Seu nome completo">
      </div>
      <div class="form-field">
        <label>Contato</label>
        <input type="text" placeholder="WhatsApp ou e-mail">
      </div>
      <div class="form-field">
        <label>Tipo de pele</label>
        <select>
          <option value="">Selecionar —</option>
          <option>Oleosa</option>
          <option>Mista</option>
          <option>Seca</option>
          <option>Sensível</option>
        </select>
      </div>
      <div class="form-field">
        <label>Principal incômodo</label>
        <textarea placeholder="Acne, manchas, oleosidade, textura..."></textarea>
      </div>
      <button class="btn-primary" style="margin-top:8px;width:100%;text-align:center;">ENVIAR INTERESSE</button>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="footer-logo">
    BIOVITA
    <small>DERMO</small>
  </div>
  <div class="footer-copy">
    © 2025 BioVita Dermo — Dermocosméticos
  </div>
</footer>

<script>
  // Menu
  function openMenu() {
    document.getElementById('menuOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    document.getElementById('menuOverlay').classList.remove('open');
    document.body.style.overflow = '';
    document.getElementById('menuSub').classList.remove('visible');
  }
  document.getElementById('menuClose').onclick = closeMenu;

  function toggleSub(e) {
    e.preventDefault();
    const sub = document.getElementById('menuSub');
    sub.classList.toggle('visible');
  }

  // Diagnóstico
  function selectOpt(btn, group) {
    document.querySelectorAll(`#${group} .step-opt`).forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
  }

  const rotinas = {
    OLEOSA: { ACNE: { title: 'Seboclin + Keraclin', desc: 'Limpeza profunda e renovação cutânea para pele oleosa com tendência acneica.' },
               MANCHAS: { title: 'Seboclin + Anexregen', desc: 'Controle de oleosidade e uniformização do tom para manchas pós-acne.' },
               OLEOSIDADE: { title: 'Seboclin', desc: 'Gel de limpeza dermatológico para controle de sebo e poros limpos.' },
               TEXTURA: { title: 'Seboclin + Keraclin', desc: 'Limpeza e renovação para textura mais uniforme e luminosa.' } },
    MISTA: { ACNE: { title: 'Seboclin + Anexregen', desc: 'Equilíbrio para pele mista com foco em acne e manchas residuais.' },
              MANCHAS: { title: 'Anexregen + Keraclin', desc: 'Uniformização e renovação para manchas em pele mista.' },
              OLEOSIDADE: { title: 'Seboclin', desc: 'Limpeza direcionada para zonas T com excesso de sebo.' },
              TEXTURA: { title: 'Keraclin', desc: 'Esfoliante dermatológico para textura mais refinada em pele mista.' } },
    SECA: { ACNE: { title: 'Anexregen', desc: 'Reparação e suporte à barreira cutânea para pele seca com acne.' },
             MANCHAS: { title: 'Anexregen', desc: 'Sérum reparador para uniformização do tom em pele seca.' },
             OLEOSIDADE: { title: 'Keraclin', desc: 'Renovação suave para pele seca sem causar ressecamento adicional.' },
             TEXTURA: { title: 'Anexregen + Keraclin', desc: 'Reparação e renovação para textura da pele seca.' } },
    SENSÍVEL: { default: { title: 'Anexregen', desc: 'Suporte à barreira cutânea para pele sensível. Uso progressivo recomendado.' } }
  };

  function gerarResultado() {
    const q1 = document.querySelector('#q1 .selected');
    const q2 = document.querySelector('#q2 .selected');

    if (!q1) { alert('Selecione o tipo de pele.'); return; }

    const tipo = q1.textContent;
    const incomodo = q2 ? q2.textContent : 'MANCHAS';

    const rotinaGrupo = rotinas[tipo] || rotinas['OLEOSA'];
    const rotina = rotinaGrupo[incomodo] || rotinaGrupo['MANCHAS'] || rotinaGrupo.default;

    document.getElementById('resultTitle').textContent = rotina.title;
    document.getElementById('resultDesc').textContent = rotina.desc;

    const result = document.getElementById('diagResult');
    result.classList.add('visible');
    result.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  // Adicionar ao plano
  let planCount = 0;
  function adicionarPlano(produto) {
    planCount++;
    document.querySelector('.plan-count').textContent = planCount;
    const badge = document.createElement('div');
    badge.textContent = `${produto} adicionado ao plano`;
    badge.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#0a0a0a;color:#fff;padding:12px 28px;font-size:11px;letter-spacing:0.12em;z-index:999;pointer-events:none;';
    document.body.appendChild(badge);
    setTimeout(() => badge.remove(), 2500);
  }

  // Scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // Close menu on outside click
  document.getElementById('menuOverlay').addEventListener('click', function(e) {
    if (e.target === this) closeMenu();
  });
</script>
</body>
</html>
