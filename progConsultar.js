let consultar = document.getElementById('consultar')
let res = document.getElementById('res')

consultar.addEventListener('click', () => {
    let id = Number(document.getElementById('id').value)

    res.innerHTML = ' '

    fetch(`http://localhost:8081/produto/${id}`)
        .then(resp => resp.json())
        .then(dado => {
            console.log(dado)
            res.innerHTML += `Nome: ${dado.nome} <br>`
            res.innerHTML += `Preço: R$ ${dado.preco} <br>`
            res.innerHTML += `Quantidade: ${dado.quantidade} <br>`
            res.innerHTML += `Descrição: ${dado.descricao} <br>`
            res.innerHTML += `Marca: ${dado.marca} <br>`
        })
        .catch((err) => {
            console.error('Erro ao listar os dados!', err)
        })
})


