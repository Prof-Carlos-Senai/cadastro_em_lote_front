let carregar = document.getElementById('carregar')
let cadastrar = document.getElementById('cadastrar')
let res = document.getElementById('res')

let nome = document.getElementById('nome')
let preco = document.getElementById('preco')
let quantidade = document.getElementById('quantidade')
let descricao = document.getElementById('descricao')
let marca = document.getElementById('marca')

carregar.addEventListener('click', (e) => {
    e.preventDefault()
    let codigo = Number(document.getElementById('codigo').value)


    fetch(`https://api.npoint.io/3ec59e6d68516979fbad/`)
        .then(resp => resp.json())
        .then(dados => {
            console.log(dados)
            dados.forEach(dad => {
                if (dad.codigo === codigo) {
                    nome.value = dad.nome
                    preco.value = dad.preco
                    quantidade.value = dad.quantidade
                    descricao.value = dad.descricao
                    marca.value = dad.marca
                }
            })
        })
        .catch((err) => {
            console.error('Erro ao buscar os dados', err)
        })
})

cadastrar.addEventListener('click', (e)=>{
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

    fetch(`http://localhost:8081/produto`,{
        method: 'POST',
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