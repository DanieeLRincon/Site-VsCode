Site de E-Commerce

Descrição do Projeto

O LucianaCakes é um projeto de simulação de um e-commerce, eu pensei em fazer esse site, pois minha mãe trabalha com venda de bolos, e pensei que talvez um dia, esse site seria bom para ela, 
as imagens utilizadas para mostrar os bolos, são alguns dos bolos confeccionados por ela, ela tem uma página no intagram que mostra um pouco mais, com o nome llucianacakes.

Funcionalidades e Requisitos Técnicos

O site foi desenvolvido para atender aos seguintes requisitos de um projeto, proposto pela Professora Nattane Luiza da Costa, do IF Goiano – Campus Urutaí.

Requisitos do Projeto:

Site HTML, CSS e JavaScript
Uso de Bootstrap, minimizar o uso de CSS manual
Uso de manipulação DOM com JavaScript
Uso de seção hero, header, nav, footer, main, section
Site com layout responsivo
Botões iterativos que realizem alguma ação no site

E os que foram usados em meu site para:

*Estrutura Semântica*     Uso de `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` e seção `<hero>`. 
*Design e Responsividade* Utilização do `Bootstrap` para layout responsivo (Grid system e Navbar) e estilos.
*Tecnologias*             HTML, CSS e JavaScript.
*Manipulação DOM*         Usei para criação do carrinho funcional, posso adicionar/remover itens, ajustar quantidade e calcular o preço total.
*Interatividade*          Botão de "Destaque do Dia" que muda texto principal e o processo de "Finalizar Pedido"  que coleta dados do carrinho).
*Estilo*                  Cores temáticas customizadas (rosa e marrom) "minha mãe que escolheu kkkk" e inclusão de imagem de fundo para ambientação.

Processo de Desenvolvimento

O projeto foi construído aos poucos, da parte principal,o HTML, que é o esboço do projeto, como a Professora Nattane nos ensinou, "devemos primeiro fazer o molde do site, depois que deixamos ele bonitinho".

Estruturação (HTML/Bootstrap): Definição do esqueleto semântico, links do Bootstrap e criação do layout Hero, Cards de Produtos, Carrinho e Formulário de Pedido.
Estilização (CSS): Customização das cores primárias e secundárias (`--bs-custom-pink`, `--bs-custom-brown`) e aplicação do estilo de fundo (`body`) para criar a identidade visual da loja.
Lógica Básica do DOM (JavaScript): Implementação inicial do botão "Destaque do Dia" para validação da conexão `script.js` e manipulação simples de texto.
Desenvolvimento do Carrinho: Criação das funções: `configurarInteratividade` (para botões `[+]`, `[-]`, `[X]`) e `atualizarTotalCarrinho` (para o cálculo dos bolos pedidos).
Integração do Pedido: Desenvolvimento da função `coletarDetalhesDoCarrinho` para ler os dados dinâmicos da lista (`<ul>`) e, posteriormente, utilizar essas informações na mensagem de `feedback-envio`.

Facilidades e Dificuldades

Bom, minhas facilidades foram em pensar no projeto em si, mas não saiu exatamente como eu gostaria, eu creio que poderia apresentar um site melhor,  devido ao vasto conhecimento que a professora Nattane nos passou durante as aulas, 
creio que poderia ter sido muito melhor, acho que faltou um pouco mais de participação e esforço meu durante as aulas, creio que ela orientaria e daria todo apoio necessario, que seria muito bom para apresentar um projeto melhor, 
pois eu teria muito mais capacidade e conhecimento participando mais das aulas, e como ela disse no começo das aulas, ela gosta muito de dar aula dessa materia "Programação para Web 1". 
Outras dificuldades relacionadas ao trabalho foram os calculos, gerenciar a conversão entre string (lida do `data-price`), número decimal (`parseFloat`) e a formatação final para R$ (com vírgula) exigiu atenção para que não ocorrece erro nos cálculos.
Outra dificuldade foi em utilizar essa plataforma do github, essa foi a segunda vez que utilizei, mas so foi assistir um vídeo no youTube que ficou mais claro de que forma posta e pega os links. O vídeo que assitir foi da @larissakich.
