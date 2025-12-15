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
## 🧠 4. Facilidades e Dificuldades (Lições Aprendidas)

### Facilidades

* **Concepção e Estrutura:** A etapa de planejar o projeto (esboço em HTML) e definir a estrutura geral foi realizada com facilidade, seguindo a metodologia ensinada pela Professora Nattane de priorizar a estrutura (`HTML`) antes da estilização (`CSS`).
* **Design Rápido:** O uso do framework Bootstrap facilitou a construção de um layout responsivo e a estilização dos componentes (cards e formulário) de forma ágil.

### Dificuldades

* **Lógica de Cálculos e Formatação:** Do ponto de vista técnico, o maior desafio foi gerenciar as conversões de tipos de dados no JavaScript. Gerenciar a conversão entre *string* (lida do atributo `data-price`) para *número decimal* (`parseFloat`) e, em seguida, formatar o resultado final para o padrão monetário brasileiro (R$ com vírgula) exigiu atenção e depuração para garantir a precisão dos cálculos totais.
* **Utilização do GitHub:** Houve uma dificuldade inicial em utilizar a plataforma GitHub. Apesar de ter sido apenas a segunda interação com a ferramenta, a dúvida sobre o fluxo de envio (`push`), gerenciamento e obtenção dos links (página e repositório) foi resolvida por meio da busca autônoma de conhecimento (especificamente, assistindo ao vídeo da `@larissakich` no YouTube).
* **Lição Aprendida (Compromisso):** Reconheço que o projeto poderia ter atingido um nível superior de complexidade e refinamento. O vasto e detalhado conhecimento transmitido pela Professora Nattane (IF Goiano – Campus Urutaí), que demonstra grande apreço pela disciplina de "Programação para Web 1", não foi totalmente absorvido devido à minha participação e dedicação aquém do ideal. Fica a lição de que o esforço contínuo e a busca por orientação são cruciais para o sucesso em disciplinas práticas.
