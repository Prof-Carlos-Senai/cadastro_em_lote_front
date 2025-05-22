let atualizar = document.getElementById('atualizar')
let consultar = document.getElementById('consultar')
let res2 = document.getElementById('res2')
let res = document.getElementById('res')

let id = document.getElementById('id')
let nome = document.getElementById('nome')
let preco = document.getElementById('preco')
let quantidade = document.getElementById('quantidade')
let descricao = document.getElementById('descricao')
let marca = document.getElementById('marca')

consultar.addEventListener('click', (e) => {
    e.preventDefault()
    id = Number(document.getElementById('id').value)

    res.innerHTML = ' '

    fetch(`http://localhost:8081/produto/${id}`)
        .then(resp => resp.json())
        .then(dado => {
            console.log(dado)
            nome.value = dado.nome
            preco.value = dado.preco
            quantidade.value = dado.quantidade
            descricao.value = dado.descricao
            marca.value = dado.marca
            
        })
        .catch((err) => {
            console.error('Erro ao listar os dados!', err)
        })

    
})

atualizar.addEventListener('click', (e)=>{
    e.preventDefault()
    const valores = {
        nome: nome.value,
        preco: preco.value,
        quantidade: quantidade.value,
        descricao: descricao.value,
        marca: marca.value
    }

    console.log(valores)


    res.innerHTML = ' '

    fetch(`http://localhost:8081/produto/${id}`,{
        method: 'PUT',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.json())
    .then(dadosGrav => {
        console.log(dadosGrav)
            res.innerHTML += `Nome: ${dadosGrav.nome} <br>`
            res.innerHTML += `Preço: R$ ${dadosGrav.preco} <br>`
            res.innerHTML += `Quantidade: ${dadosGrav.quantidade} <br>`
            res.innerHTML += `Descrição: ${dadosGrav.descricao} <br>`
            res.innerHTML += `Marca: ${dadosGrav.marca} <br>`
    })
    .catch((err)=>{
        console.error('Erro ao gravar os dados no banco de dados!',err)
    })

})