import { conectaApi } from "./conectaApi.js"

const form = document.querySelector('[data-form]')

async function criaProduto(evento){
    evento.preventDefault()

    const nome = document.querySelector('[data-nome]').value
    const valor = document.querySelector('[data-valor]').value
    const img = document.querySelector('[data-imagem]').value

    await conectaApi.postProduto(nome, valor, img)
}

form.addEventListener('submit', e => criaProduto(e))