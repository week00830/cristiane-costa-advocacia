# Site institucional — Cristiane Costa

Site institucional estático (HTML, CSS e JavaScript puro, sem frameworks)
para Cristiane Costa, com foco em Direito de Família e Sucessões.

## Direção de design (v2)

Identidade escura e terrosa, mas **não monocromática**: o site alterna
entre zonas tonais distintas ao longo da rolagem — espresso profundo no
topo (hero), um respiro claro em tom bege quente ("Sobre"), bordô escuro
("Formação"), um bloco bicolor terracota/preto ("Áreas de Interesse"),
grafite ("Abordagem") e um fechamento em bronze/terracota (CTA final).
A tipografia serifada (Fraunces) é tratada como elemento gráfico —
títulos grandes, itálicos como acento, numerais editoriais — combinada a
uma sans-serif (Inter) limpa para leitura.

## Estrutura do projeto

```
site-cristiane-costa/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
└── images/
    ├── cristiane-costa.webp   (adicionar — ver images/README.txt)
    ├── logo.svg               (incluído)
    └── README.txt
```

## Como visualizar

Não é necessário nenhum processo de build. Basta abrir `index.html`
diretamente no navegador, ou servir a pasta com qualquer servidor
estático simples:

```bash
npx serve .
```

## Como adicionar a fotografia de Cristiane Costa

1. Prepare uma fotografia profissional, formato **WebP**, orientação
   retrato, mínimo recomendado de 900px de largura.
2. Salve o arquivo como `images/cristiane-costa.webp`.
3. Pronto — nenhuma alteração de código é necessária. A seção "Sobre"
   passará a exibir a fotografia automaticamente. Enquanto o arquivo
   não existir, um monograma elegante ("CC") é exibido no lugar, sem
   quebrar o layout.

Mais detalhes em `images/README.txt`.

## Conteúdo e informações profissionais

Todo o conteúdo textual do site foi escrito com base exclusivamente nas
informações fornecidas:

- Formação em Direito — UNA
- Pós-graduação em Direito de Família e Sucessões — UNA
- Registro informado: OAB/MG nº 59658-E
- Atuação atual: estagiária do advogado Francys Gomes

Nenhuma informação sobre tempo de atuação, escritório próprio, sociedade,
número de clientes ou resultados foi adicionada.

## Personalização rápida

| O que alterar                | Onde                                              |
|-------------------------------|----------------------------------------------------|
| Paleta de cores                | `style.css`, bloco `:root` (seção 1 — Tokens)      |
| Fontes                        | `<link>` no `<head>` de `index.html` + `--font-display` / `--font-body` em `style.css` |
| Enquadramento da foto da hero | `style.css`, propriedade `object-position` em `.hero-photo-img` |
| Altura do header (referência) | `style.css`, variável `--header-h` em `:root`      |
| Textos das seções             | `index.html`, diretamente no HTML de cada `<section>` |
| Número de WhatsApp / mensagem | Todos os links `https://wa.me/553791710105?text=...` em `index.html` |
| Itens do menu                 | `.main-nav` e `.mobile-nav` em `index.html`        |

## Contato via WhatsApp

Todos os botões de contato do site apontam para:

```
https://wa.me/553791710105
```

com mensagem inicial pré-preenchida ("Olá, Cristiane. Gostaria de entrar
em contato."), abrindo em uma nova aba. Os CTAs aparecem em três
momentos da jornada: hero, seção final e rodapé — sem excesso.

## Acessibilidade e performance

- HTML semântico, com landmarks (`header`, `main`, `footer`, `nav`) e
  hierarquia de headings coerente.
- Foco visível em todos os elementos interativos (navegação por teclado).
- Texto alternativo em imagens informativas; elementos decorativos
  (numerais, textura, coluna vertical do hero) marcados como
  `aria-hidden`.
- Respeita `prefers-reduced-motion` em todas as animações, incluindo o
  indicador de rolagem do hero.
- `loading="lazy"` na fotografia da seção "Sobre".
- Textura do hero é gerada via SVG/CSS (sem imagem extra para baixar).
- Sem bibliotecas externas além das fontes (Google Fonts).
