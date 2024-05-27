async function listaProdutos(){
    const conexao = await fetch('http://localhost:3000/produtos');
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida;
}

async function postProduto(nome, valor, imagem){
    const conexao = await fetch('http://localhost:3000/produtos', {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            valor: valor,
            imagem: imagem
        })
    });
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function deleteProduto(id) {
    const conexao = await fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'DELETE'
    });

    if (!conexao.ok) {
        alert('não foi possível deletar o produto')
        throw new Error('Erro ao deletar o produto');
    } else {
        alert('produto deletado')
    }

    const conexaoConvertida = await conexao.json()
    return conexaoConvertida
}

export const conectaApi = {
    listaProdutos,
    postProduto,
    deleteProduto
};
