import { conectaApi } from './conectaApi.js';

const divCard = document.querySelector("[data-card]");

function constroiCard(nome, valor, imagem, id) {
  const produto = document.createElement("div");
  produto.className = "main__produtos__cards__card";
  produto.innerHTML = `<div class="main__produtos__card__img">
    <img src="${imagem}" alt="">
</div>
<span>${nome}</span>
<div class="main__produtos__card__act">
    <span>$${valor}</span>
    <button class="btn-excluir" data-id="${id}"> <img src="image/lixo.svg" alt=""></button>
</div>`;

  return produto;
}

async function listarProduto(){
    const produtoApi = await conectaApi.listaProdutos()
    produtoApi.forEach(elemento => divCard.appendChild(constroiCard(elemento.nome, elemento.valor, elemento.imagem, elemento.id)))
}

listarProduto()
