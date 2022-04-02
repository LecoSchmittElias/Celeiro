const novos = [{
    id: "4d97cc39-309b-4bb0-9ae8-08c847a81e41",
    nome: 'vaca',
    img: 'img/juju3.jpg',
    quantidade: 0
}, {
    id: "094f84b5-682c-4815-acc1-e261596fc1a7",
    nome: 'galo',
    img: 'img/floquinho3.jpg',
    quantidade: 0
}, {
    id: "ae745063-7416-4842-b897-741e9ccceda3",
    nome: 'porco',
    img: 'img/flash2.jpeg.',
    quantidade: 0
}]

const aves = [{
    id: "b1d1b115-aee9-494c-9704-12c164af0826",
    nome: 'galo robô',
    img: 'img/juju3.jpg',
    quantidade: 0
}, {
    id: "3415745c-b7d2-47a2-b4d4-b0838612f5cb",
    nome: 'galinha veridiane',
    img: 'img/floquinho3.jpg',
    quantidade: 0
}, {
    id: "63797725-6210-4519-a47b-05d1d8118210",
    nome: 'frango maguila',
    img: 'img/flash2.jpeg.',
    quantidade: 0
}]

const suinos = [{
    id: "11d8f4fe-c73a-418d-962e-e0c58be024cf",
    nome: 'porco arranha',
    img: 'img/porcoarranha.png',
    quantidade: 0
}, {
    id: "4876bc30-88b6-44dd-9aa4-ace7eda41fdd",
    nome: 'porquinho Bruninho',
    img: 'img/bruninho2.jpg',
    quantidade: 0
}, {
    id: "cc8ae80f-91b2-40b3-88be-aec1ea34756e",
    nome: 'leitão (aquele do ursinho pooh)',
    img: 'img/leitao.jpg',
    quantidade: 0
}]

const bovinos = [{
    id: "221cfba4-2f50-4c82-ae7b-a57e48422dde",
    nome: 'boizão de gaspár',
    img: 'img/juju3.jpg',
    quantidade: 0
}, {
    id: "03fb1011-5ef1-422d-b7a8-b1cb77f3cdac",
    nome: 'vaquinha mimosa',
    img: 'img/floquinho3.jpg',
    quantidade: 0
}, {
    id: "cd169c84-b0e9-4acb-b794-b89092bf4cb5",
    nome: 'leitão (aquele do ursinho puhf)',
    img: 'img/flash2.jpeg.',
    quantidade: 0
}]




const inicializarLoja = () => {

    //ABA CELEIRO
    var containerProdutos = document.getElementById('novos');
    var stringItens = "";
    novos.map((val) => {
        stringItens += `
            <div class="single">
            <img src="${val.img}"/>
            <p>${val.nome}</p>
        <a onclick="validarRequisicao('${val.id}')" href="#">Adicionar ao carrinho!</a></div>`
    }).join("")
    containerProdutos.innerHTML = stringItens

    //ABA GALINHEIRO

    containerProdutos = document.getElementById('aves');
    stringItens = "";
    aves.map((val) => {
        stringItens += `
            <div class="single">
            <img src="${val.img}"/>
            <p>${val.nome}</p>
        <a onclick="validarRequisicao('${val.id}')" href="#">Adicionar ao carrinho!</a></div>`
    }).join("")
    containerProdutos.innerHTML = stringItens

    //ABA CHIQUEIRO

    containerProdutos = document.getElementById('suinos');
    stringItens = "";
    suinos.map((val) => {
        stringItens += `
            <div class="single">
            <img src="${val.img}"/>
            <p>${val.nome}</p>
        <a onclick="validarRequisicao('${val.id}')" href="#">Adicionar ao carrinho!</a></div>`
    }).join("")
    containerProdutos.innerHTML = stringItens

    //ABA CURRAL

    containerProdutos = document.getElementById('bovinos');
    stringItens = "";
    bovinos.map((val) => {
        stringItens += `
            <div class="single">
            <img src="${val.img}"/>
            <p>${val.nome}</p>
        <a onclick="validarRequisicao('${val.id}')" href="#">Adicionar ao carrinho!</a></div>`
    }).join("")
    containerProdutos.innerHTML = stringItens
}

inicializarLoja();

async function validarRequisicao(Id) {

    const inputDados = {
        "Id": Id,
    }

    const rawResponse = await fetch('https://localhost:7294/Produto', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputDados)
    });
}

inicializarLoja();





//atualiza o carrinho em js

atualizarCarrinho = () => {
    var containerCarrinho = document.getElementById('carrinho');
    containerCarrinho.innerHTML = "";
    items.map((val) => {
        if (val.quantidade > 0) {
            containerCarrinho.innerHTML += ` <
                        p > ` + val.nome + ` | quantidade ` + val.quantidade + ` < /p> <
                    hr >
                        `;
        }

    })
}

var links = document.getElementsByTagName('a');

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
        let key = this.getAttribute('key');
        items[key].quantidade++;
        atualizarCarrinho();
        return false;
    })
}