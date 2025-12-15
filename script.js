document.addEventListener('DOMContentLoaded', () => {

    const listaCarrinho = document.getElementById('lista-carrinho');
    const carrinhoTotalDisplay = document.getElementById('carrinho-total');


    // FUNÇÃO PRINCIPAL: Cálculo e Atualização do Total

    function atualizarTotalCarrinho() {
        let total = 0;
        
        // Itera sobre todos os itens <li> no carrinho
        listaCarrinho.querySelectorAll('li').forEach(itemLi => {
            const precoUnitario = parseFloat(itemLi.getAttribute('data-price'));
            const quantidade = parseInt(itemLi.querySelector('.item-quantidade').value);
            const subtotal = precoUnitario * quantidade;

            // Atualiza o subtotal na linha do item (Manipulação DOM)
            itemLi.querySelector('.item-subtotal').textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
            
            total += subtotal;
        });

        // Atualiza o TOTAL GERAL no footer do carrinho (Manipulação DOM)
        carrinhoTotalDisplay.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
    }

    // FUNÇÃO: Configura a Interatividade dos Itens (Quantidade e Remoção)

    function configurarInteratividade(itemLi) {
        const btnAumentar = itemLi.querySelector('.btn-aumentar');
        const btnDiminuir = itemLi.querySelector('.btn-diminuir');
        const btnRemover = itemLi.querySelector('.btn-remover');
        const inputQuantidade = itemLi.querySelector('.item-quantidade');

        // Lógica para Aumentar Quantidade
        btnAumentar.addEventListener('click', () => {
            inputQuantidade.value = parseInt(inputQuantidade.value) + 1;
            atualizarTotalCarrinho();
        });

        // Lógica para Diminuir Quantidade
        btnDiminuir.addEventListener('click', () => {
            let novaQuantidade = parseInt(inputQuantidade.value) - 1;
            if (novaQuantidade >= 1) {
                inputQuantidade.value = novaQuantidade;
                atualizarTotalCarrinho();
            }
        });

        // Lógica para Remover Item (Manipulação DOM)
        btnRemover.addEventListener('click', () => {
            itemLi.remove();
            atualizarTotalCarrinho();
        });
    }

    // Inicialização: Aplica a interatividade ao item padrão e calcula o total inicial

    listaCarrinho.querySelectorAll('li').forEach(configurarInteratividade);
    atualizarTotalCarrinho();

    // Ação DOM 2: Adicionar NOVO Item ao Carrinho (Botões em TODOS os Cards de Produto)

    const botoesAdicionar = document.querySelectorAll('.btn-adicionar-produto');

    botoesAdicionar.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const nome = e.currentTarget.getAttribute('data-name');
            const preco = parseFloat(e.currentTarget.getAttribute('data-price')).toFixed(2);
            
            // Cria o novo elemento <li> (Manipulação DOM)
            const novoItem = document.createElement('li');
            novoItem.className = 'list-group-item d-flex justify-content-between align-items-center bg-light';
            novoItem.setAttribute('data-price', preco);
            
            // Estrutura do novo item
            novoItem.innerHTML = `
                <div>
                    <span class="item-nome">${nome}</span> 
                    <span class="text-muted">(R$ ${preco.replace('.', ',')}/Kg)</span>
                </div>
                <div class="d-flex align-items-center">
                    <div class="input-group input-group-sm me-3" style="width: 110px;">
                        <button class="btn btn-outline-secondary btn-diminuir" type="button">-</button>
                        <input type="text" class="form-control text-center item-quantidade" value="1" readonly>
                        <button class="btn btn-outline-secondary btn-aumentar" type="button">+</button>
                    </div>
                    <span class="fw-bold item-subtotal me-3">R$ ${preco.replace('.', ',')}</span>
                    <button class="btn btn-sm btn-danger btn-remover" type="button">X</button> 
                </div>
            `;
            
            listaCarrinho.appendChild(novoItem);
            
            // Configura a interatividade e atualiza o total
            configurarInteratividade(novoItem);
            atualizarTotalCarrinho();
        });
    });

    // Ação DOM 1: Mudar Texto (Slogan)

    const btnMudarSlogan = document.getElementById('btn-mudar-slogan');
    const tituloPrincipal = document.querySelector('#hero h1');
    const slogans = [
        "Destaque: Bolo de Ninho",
        "Experimente o Melhor Red Velvet!",
        "Fresquinho, feito na hora sob encomenda."
    ];
    let sloganIndex = 0;

    btnMudarSlogan.addEventListener('click', () => {
        sloganIndex = (sloganIndex + 1) % slogans.length;
        tituloPrincipal.textContent = slogans[sloganIndex];
    });

    // FUNÇÃO AUXILIAR: Coleta Dados Detalhados do Carrinho

    function coletarDetalhesDoCarrinho() {
        const itens = [];
        let total = 0;

        // Itera sobre todos os itens <li>
        listaCarrinho.querySelectorAll('li').forEach(itemLi => {
            const nome = itemLi.querySelector('.item-nome').textContent;
            const precoUnitario = parseFloat(itemLi.getAttribute('data-price'));
            const quantidade = parseInt(itemLi.querySelector('.item-quantidade').value);
            const subtotal = precoUnitario * quantidade;
            total += subtotal;

            itens.push({
                nome: nome,
                quantidade: quantidade,
                subtotal: `R$ ${subtotal.toFixed(2).replace('.', ',')}`
            });
        });

        return { itens: itens, totalFinal: total };
    }

    // Ação DOM 3: Mostrar/Esconder Feedback (Simulação de Envio e Detalhes)

    const formPedido = document.querySelector('#pedido form');
    const feedbackEnvio = document.getElementById('feedback-envio');

    formPedido.addEventListener('submit', (e) => {
        e.preventDefault(); 
        
        // 1. COLETAR OS DADOS DO CARRINHO E CLIENTE
        const dadosCarrinho = coletarDetalhesDoCarrinho();
        const totalFormatado = `R$ ${dadosCarrinho.totalFinal.toFixed(2).replace('.', ',')}`;
        const nomeCliente = document.getElementById('nome').value;
        const telefoneCliente = document.getElementById('telefone').value;

        // 2. Montar a Mensagem de Confirmação com os detalhes
        let mensagemDetalhada = `
            <p>Cliente: <strong>${nomeCliente}</strong> (Tel: ${telefoneCliente})</p>
            <p><strong>Total Final: ${totalFormatado}</strong></p>
            <p><strong>Itens Encomendados:</strong></p>
            <ul class="list-unstyled small text-start ps-3">
        `;

        dadosCarrinho.itens.forEach(item => {
            mensagemDetalhada += `<li>${item.nome} (${item.quantidade}x) - ${item.subtotal}</li>`;
        });
        mensagemDetalhada += `</ul>`;

        
        // 3. Exibir o feedback no DOM
        feedbackEnvio.classList.remove('text-danger');
        feedbackEnvio.classList.add('text-success');

         feedbackEnvio.innerHTML = `
            <p class="mb-1">✅ Pedido enviado com sucesso! Entraremos em contato para mais informações!</p>
            ${mensagemDetalhada}
            <p>Seus detalhes de envio seriam processados aqui.</p>
        `;
        feedbackEnvio.style.display = 'block';

        setTimeout(() => {
            feedbackEnvio.style.display = 'none';
            formPedido.reset(); 
        }, 14000); 
    });
});