IMAGENS DO PROJETO — site-cristiane-costa
==========================================

Esta pasta concentra todas as imagens do site. O layout já está preparado
para receber os arquivos abaixo sem que nenhuma alteração de código seja
necessária. Basta adicionar o arquivo com o nome exato indicado.

1) cristiane-costa.webp
   - Fotografia profissional principal de Cristiane Costa.
   - Usada em dois pontos do site: em grande escala, integrada ao fundo
     da hero (primeira dobra), e em formato retrato na seção "Sobre".
   - Orientação retrato (vertical) funciona melhor com o layout atual.
   - Recomendado: mínimo 1200px de largura, formato WebP, boa iluminação,
     fundo neutro ou levemente desfocado, expressão natural e profissional.
   - Enquadramento ideal: do torso para cima (ou aproximadamente 3/4),
     com espaço acima da cabeça — a hero usa um recorte alto que
     privilegia rosto e ombros.
   - Ajuste fino do enquadramento: se, ao adicionar a foto real, o rosto
     não ficar bem posicionado, ajuste a propriedade
     `object-position` da regra `.hero-photo-img` em style.css
     (ex.: `center 18%` no mobile, `center 20%` no desktop — o primeiro
     valor controla a posição horizontal, o segundo a vertical; valores
     menores puxam o foco para cima da imagem).
   - Enquanto este arquivo não existir, a hero exibe automaticamente um
     monograma elegante ("CC") integrado ao fundo — o design não quebra
     e não aparece nenhum ícone de imagem corrompida.

2) logo.svg
   - Marca gráfica utilizada no cabeçalho e no rodapé.
   - Já incluída neste projeto (monograma vetorial, leve, sem dependências).
   - Pode ser substituída por uma versão personalizada, desde que mantenha
     o nome do arquivo "logo.svg" e proporção aproximadamente quadrada.

IMAGEM DE FUNDO (opcional, futura)
-----------------------------------
Caso, no futuro, deseje adicionar uma imagem de fundo editorial na seção
Hero (por exemplo, uma fotografia arquitetônica discreta ou uma textura
sutil), adicione o arquivo como:

   hero-background.webp

e referencie-o em style.css, na regra ".hero" (há um comentário indicando
o ponto exato). Prefira imagens escuras, de baixo contraste, para não
comprometer a legibilidade do texto branco sobre o fundo.

BOAS PRÁTICAS
-------------
- Utilize sempre o formato WebP para melhor performance.
- Nomes de arquivo apenas em minúsculas, sem espaços ou acentos.
- Comprima as imagens antes de adicionar (evite arquivos acima de 300KB).
