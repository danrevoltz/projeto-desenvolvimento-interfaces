# 🥋 Arte Suave Jiu-Jitsu — Desenvolvimento de Interfaces

Projeto desenvolvido para a disciplina **Desenvolvimento de Interfaces** (CEUB — Prof. Dr. Felipe Batista da Silva) por **Daniel de Jesus Dias (RA: 22609661)**[cite: 1, 21].

O objetivo do projeto é construir uma landing page moderna, responsiva e acessível para uma academia de Jiu-Jitsu, demonstrando a evolução incremental desde o HTML semântico puro até a integração de frameworks CSS, JavaScript interativo e diretrizes de acessibilidade **WCAG**[cite: 18, 21].

---

## 🚀 Evolução do Projeto (Linha do Tempo)

O desenvolvimento foi estruturado em etapas progressivas para evidenciar o papel de cada camada da Web:

1. **Etapa 1 — Estrutura Semântica (HTML5):** Criação do esqueleto do documento utilizando tags semânticas (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<table>`, `<form>`, `<footer>`) para garantir SEO e compatibilidade com leitores de tela[cite: 2, 3, 4, 18].
2. **Etapa 2 — Identidade Visual (CSS Personalizado):** Implementação da paleta *Dark & Gold* por meio de variáveis CSS (`:root`), tipografia responsiva com `clamp()` e estilização base[cite: 3, 7, 18].
3. **Etapa 3 — Layout e Componentes (Bootstrap 5.3):** Integração do sistema de grid responsivo (`container`, `row`, `col-*`), barra de navegação com menu hambúrguer, tabela zebrada, formulário com feedback de validação e modais[cite: 5, 18].
4. **Etapa 4 — Refinamento Visual (Tailwind CSS):** Configuração do Tailwind com prefixo `tw-` e `preflight: false` para conviver sem conflitos com o Bootstrap, adicionando degradês de texto, selos em pílula e microinterações de hover[cite: 2, 6, 18].
5. **Etapa 5 — Comportamento e Interatividade (JavaScript):** Validação customizada de nome e telefone com DDD, abertura dinâmica do modal de agendamento e fechamento automático do menu mobile[cite: 8, 17, 18].
6. **Etapa 6 — Projeto Final (Multimídia, Pesquisa, Login e WCAG):**
   - Substituição dos fundos por fotografias reais com camada de contraste nos cartões de aulas;
   - Barra de pesquisa em tempo real e filtro por categoria (*Todas*, *Iniciante*, *Avançado*, *Kids*);
   - Seção de cartões explicativos sobre a metodologia e carrossel de imagens da estrutura;
   - Modal funcional de Login (*Área do Aluno*);
   - Barra de acessibilidade WCAG com alternância de **Modo Claro/Escuro**, controle de tamanho de fonte (`A-`, `A`, `A+`), *Skip Link* e indicadores de foco visíveis[cite: 21].

---

## 🎨 Paleta de Cores e Acessibilidade (WCAG)

A identidade visual foi projetada com base na **Psicologia das Cores** aplicada às artes marciais:
- **Preto / Grafite (`#0a0a0a` e `#171717`):** Transmite seriedade, disciplina, foco e elegância.
- **Dourado / Âmbar (`#f5c542` e `#d97706`):** Representa conquista, excelência, energia e destaque para chamadas de ação (CTAs).
- **Contraste WCAG AA/AAA:** No modo escuro, textos claros (`#f5f5f5`) sobre fundo escuro (`#0a0a0a`) atingem taxa de contraste superior a **18:1 (nível AAA)**. No modo claro, os tons dourados são ajustados para âmbar escuro (`#92400e`), mantendo contraste acima de **6.5:1**.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 Semântico**
- **CSS3 Personalizado** (Custom Properties, `:where()`, Flexbox/Grid)
- **Bootstrap 5.3.3** (via CDN)
- **Tailwind CSS 3.4.17** (Play CDN com `prefix: "tw-"`)
- **JavaScript Vanilla (ES6+)**

---

## 📂 Estrutura de Pastas

```text
arte-suave-jiu-jitsu/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── img/
│   ├── aula-fundamentos.jpg
│   ├── aula-avancado.jpg
│   ├── aula-kids.jpg
│   ├── carrossel-1.jpg
│   ├── carrossel-2.jpg
│   └── carrossel-3.jpg
└── README.md