# Galeria de Imagens Interativa

Este é um projeto de uma galeria de imagens responsiva com funcionalidades interessantes, como visualização em tela cheia e um tema claro/escuro alternável.

## Visão Geral

O projeto consiste em uma página web que exibe uma coleção de miniaturas de imagens em um layout dinâmico. Ao clicar em uma miniatura, a imagem é exibida em tela cheia, com opções de navegar para a imagem anterior ou seguinte, além de um botão para fechar a visualização. O site também oferece um botão para alternar entre um tema claro e um tema escuro, com a preferência do usuário sendo salva no armazenamento local do navegador.

## Funcionalidades Principais

* **Layout Responsivo:** A galeria se adapta a diferentes tamanhos de tela, garantindo uma boa experiência em desktops e dispositivos móveis.
* **Visualização em Tela Cheia:** Ao clicar em uma imagem, ela é exibida em uma sobreposição em tela cheia, permitindo uma visualização detalhada.
* **Navegação em Tela Cheia:** Botões de "anterior" e "próximo" permitem navegar facilmente entre as imagens na visualização em tela cheia.
* **Fechamento da Tela Cheia:** Um botão "X" e a tecla "Esc" fecham a visualização em tela cheia.
* **Navegação por Teclado:** Na visualização em tela cheia, as setas esquerda e direita do teclado podem ser usadas para navegar entre as imagens.
* **Tema Claro/Escuro:** Um botão elegante no menu permite alternar entre um tema claro e um tema escuro.
* **Persistência do Tema:** A preferência de tema do usuário é salva no `localStorage` do navegador, mantendo o tema escolhido em visitas futuras.

## Tecnologias Utilizadas

* **HTML:** Estrutura da página web.
* **CSS:** Estilização da página, incluindo o layout da galeria, a sobreposição em tela cheia e os estilos dos temas. Foi utilizado Bootstrap para alguns estilos base.
* **JavaScript:** Interatividade da galeria, como a funcionalidade de tela cheia, a navegação entre as imagens e a alternância de temas.

## Como Usar

Para visualizar este projeto, basta abrir o arquivo `index.html` (ou o nome do seu arquivo HTML principal) em qualquer navegador web moderno.

* **Navegar pela Galeria:** As miniaturas das imagens são exibidas na página principal.
* **Visualizar em Tela Cheia:** Clique em qualquer miniatura para abrir a imagem em tela cheia.
* **Navegar em Tela Cheia:** Use os botões de seta ("←" e "→") ou as teclas de seta do seu teclado para ver as imagens anterior e seguinte.
* **Fechar Tela Cheia:** Clique no botão "×" ou pressione a tecla "Esc".
* **Alternar Tema:** Use o botão de alternância (sol/lua) no canto superior direito para mudar entre o tema claro e o escuro.

## Estrutura de Arquivos

A estrutura de arquivos deste projeto é a seguinte:

.
├── miniaturas/
│   ├── logo.png
│   ├── 1.jpg
│   ├── 2.jpg
│   ├── ... (outras imagens)
├── style.css
├── script.js
└── index.html (ou seu arquivo HTML principal)

* `miniaturas/`: Contém as imagens da galeria e o logo do site.
* `style.css`: Arquivo de estilos CSS para a página.
* `script.js`: Arquivo JavaScript com a lógica interativa da galeria.
* `index.html`: Arquivo HTML principal que estrutura a página.

## Créditos

* As imagens utilizadas nesta galeria são de [Adicione aqui a fonte das suas imagens, se aplicável, ou deixe em branco].
* Ícones de sol e lua utilizados no botão de tema foram obtidos de [Adicione aqui a fonte dos ícones, se aplicável].
* Bootstrap foi utilizado para alguns estilos base.

## Status do Projeto

Este projeto está [Em desenvolvimento / Concluído / Em manutenção].

## Próximos Passos (Opcional)

Se você planeja continuar desenvolvendo este projeto, pode adicionar aqui algumas ideias para o futuro, como:

* Implementar um sistema de paginação para galerias com muitas imagens.
* Adicionar legendas ou descrições para cada imagem.
* Melhorar a acessibilidade da galeria.
* Explorar diferentes layouts de galeria.

## Contribuição

Contribuições são bem-vindas! Se você tiver alguma sugestão de melhoria ou encontrar algum problema, sinta-se à vontade para abrir uma issue ou enviar um pull request.

---

Feito por [Eduardo Luparele] ([Luparele](https://github.com/Luparele))