let listar = document.getElementById('listar')
let res = document.getElementById('res')

listar.addEventListener('click', ()=>{
    res.innerHTML = ' '

    fetch(`http://localhost:8081/produto`)
    .then(resp => resp.json())
    .then(dados => {
        console.log(dados)
        
        dados.forEach(dad => {
            res.innerHTML += `Nome: ${dad.nome} <br>`
            res.innerHTML += `Preço: R$ ${dad.preco} <br>`
            res.innerHTML += `Quantidade: ${dad.quantidade} <br>`
            res.innerHTML += `Descrição: ${dad.descricao} <br>`
            res.innerHTML += `Marca: ${dad.marca} <br>`
            res.innerHTML += `<hr>`
        })
    })
    .catch((err)=>{
        console.error('Erro ao listar os dados!',err)
    })
})


