const graf = document.getElementById('graf')

let gerarGrafico = document.getElementById('gerarGrafico')

console.log(gerarGrafico)

let vetProd = []
let vetQtde = []

gerarGrafico.addEventListener('click', () => {
    vetProd = []
    vetQtde = []

    fetch(`http://localhost:8081/produto`)
    .then(resp => resp.json())
    .then(dados => {
        console.log(dados)
        
        dados.forEach(dad => {
            vetProd.push(dad.nome)
            vetQtde.push(dad.quantidade)
        })
        console.log('vetProd = ',vetProd)
        console.log('vetQtde = ',vetQtde)

        Chart.defaults.color = '#ffffff'
        Chart.defaults.font.size = 28


        if(Chart.getChart(graf)){
            Chart.getChart(graf).destroy()
        }
    
        
        new Chart(graf, {
            type: 'bar',
            data: {
                labels: vetProd, // nomes do produto
                datasets: [{
                    // label: 'Produto',
                    data: vetQtde,  // quantidade ou preço
                    borderWidth: 3,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 205, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                    ],
                    borderColor: [
                        'rgb(251, 135, 160)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)'
                    ],
                }]
            },
            options:{
                plugins:{
                    legend: {
                        display: false
                    }
                }
            }
        })
    })
    .catch((err)=>{
        console.error('Erro ao listar os dados!',err)
    })
})

