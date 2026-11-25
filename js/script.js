// =========================================================
// 1. ACESSIBILIDADE WCAG (Modo Claro/Escuro + Tamanho Fonte)
// =========================================================
const htmlEl = document.documentElement;
const btnTema = document.getElementById('btn-tema');
let tamanhoFonte = 16; // tamanho base em px

btnTema.addEventListener('click', () => {
  const temaAtual = htmlEl.getAttribute('data-bs-theme');
  const novoTema = temaAtual === 'dark' ? 'light' : 'dark';
  htmlEl.setAttribute('data-bs-theme', novoTema);

  if (novoTema === 'light') {
    btnTema.textContent = '🌙 Modo Escuro';
    btnTema.setAttribute('aria-pressed', 'true');
  } else {
    btnTema.textContent = '☀️ Modo Claro';
    btnTema.setAttribute('aria-pressed', 'false');
  }
});

document.getElementById('btn-aumentar-fonte').addEventListener('click', () => {
  if (tamanhoFonte < 20) {
    tamanhoFonte += 2;
    htmlEl.style.fontSize = `${tamanhoFonte}px`;
  }
});

document.getElementById('btn-diminuir-fonte').addEventListener('click', () => {
  if (tamanhoFonte > 14) {
    tamanhoFonte -= 2;
    htmlEl.style.fontSize = `${tamanhoFonte}px`;
  }
});

document.getElementById('btn-resetar-fonte').addEventListener('click', () => {
  tamanhoFonte = 16;
  htmlEl.style.fontSize = '16px';
});

// =========================================================
// 2. ABA DE PESQUISA E FILTRO DE AULAS
// =========================================================
const campoPesquisa = document.getElementById('campo-pesquisa');
const botoesFiltro = document.querySelectorAll('.filtro-btn');
const cardsAulas = document.querySelectorAll('.item-aula');
const msgSemResultados = document.getElementById('sem-resultados');
let categoriaAtiva = 'todos';

function filtrarAulas() {
  const termo = campoPesquisa.value.toLowerCase().trim();
  let visiveis = 0;

  cardsAulas.forEach((card) => {
    const categoriaCard = card.getAttribute('data-categoria');
    const textoCard = card.getAttribute('data-texto');

    const bateCategoria = categoriaAtiva === 'todos' || categoriaCard === categoriaAtiva;
    const bateTexto = textoCard.includes(termo);

    if (bateCategoria && bateTexto) {
      card.classList.remove('d-none');
      visiveis++;
    } else {
      card.classList.add('d-none');
    }
  });

  msgSemResultados.classList.toggle('d-none', visiveis > 0);
}

campoPesquisa.addEventListener('input', filtrarAulas);

botoesFiltro.forEach((btn) => {
  btn.addEventListener('click', () => {
    botoesFiltro.forEach((b) => {
      b.classList.remove('btn-gold', 'active');
      b.classList.add('btn-outline-gold');
    });
    btn.classList.remove('btn-outline-gold');
    btn.classList.add('btn-gold', 'active');

    categoriaAtiva = btn.getAttribute('data-filtro');
    filtrarAulas();
  });
});

// =========================================================
// 3. VALIDAÇÃO DO FORMULÁRIO DE AULA EXPERIMENTAL + MODAL
// =========================================================
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = document.getElementById('nome');
  const tel = document.getElementById('tel');

  nome.setCustomValidity(nome.value.trim().length >= 3 ? '' : 'invalido');
  tel.setCustomValidity(tel.value.replace(/\D/g, '').length >= 10 ? '' : 'invalido');

  form.classList.add('was-validated');
  if (!form.checkValidity()) return;

  const primeiroNome = nome.value.trim().split(' ')[0];
  const turma = document.getElementById('modalidade').value;

  document.getElementById('modalTxt').textContent =
    `Tudo certo, ${primeiroNome}! Entraremos em contato pelo WhatsApp para confirmar sua aula de ${turma}.`;

  bootstrap.Modal.getOrCreateInstance('#modalOk').show();
  form.reset();
  form.classList.remove('was-validated');
});

// =========================================================
// 4. VALIDAÇÃO DO MODAL DE LOGIN (ÁREA DO ALUNO)
// =========================================================
const formLogin = document.getElementById('formLogin');
const loginFeedback = document.getElementById('loginFeedback');

formLogin.addEventListener('submit', (e) => {
  e.preventDefault();
  formLogin.classList.add('was-validated');
  if (!formLogin.checkValidity()) return;

  const email = document.getElementById('loginEmail').value;
  loginFeedback.textContent = `Bem-vindo(a), ${email}! Redirecionando para o painel do aluno...`;
  loginFeedback.classList.remove('d-none');

  setTimeout(() => {
    bootstrap.Modal.getOrCreateInstance('#modalLogin').hide();
    formLogin.reset();
    formLogin.classList.remove('was-validated');
    loginFeedback.classList.add('d-none');
  }, 1500);
});

// =========================================================
// 5. FECHAR MENU MOBILE AO CLICAR EM UM LINK
// =========================================================
document.querySelectorAll('#menu .nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    const menu = bootstrap.Collapse.getInstance('#menu');
    if (menu) menu.hide();
  });
});