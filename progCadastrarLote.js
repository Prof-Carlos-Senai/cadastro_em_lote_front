let cadastrarLote = document.getElementById('cadastrarLote')
let res = document.getElementById('res')


cadastrarLote.addEventListener('click', (e) => {
    e.preventDefault()


    fetch(`https://api.npoint.io/3ec59e6d68516979fbad/`)
        .then(resp => resp.json())
        .then(dados => {
            console.log(dados)
            dados.forEach(dad => {
                fetch(`http://localhost:8081/produto`,{
                    method: 'POST',
                    headers: {
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify(dad)
                })
                .then(resp => resp.json())
                .then(dadosGrav => {
                    console.log(dadosGrav)
                        res.innerHTML += `Nome: ${dadosGrav.nome} <br>`
                        res.innerHTML += `Preço: R$ ${dadosGrav.preco} <br>`
                        res.innerHTML += `Quantidade: ${dadosGrav.quantidade} <br>`
                        res.innerHTML += `Descrição: ${dadosGrav.descricao} <br>`
                        res.innerHTML += `Marca: ${dadosGrav.marca} <br>`
                        res.innerHTML += `<hr>`
                })
                .catch((err)=>{
                    console.error('Erro ao gravar os dados no banco de dados!',err)
                })
            })
        })
        .catch((err) => {
            console.error('Erro ao buscar os dados', err)
        })
})

