
let count = [0,0,0,0,0,0,0,0,0,0,0,0,0]

let divResultados = document.querySelector('.resultados')
for (let i = 0; i < 1000; i++) {
    let dice1 = Math.floor(Math.random() * 6 + 1);
    let dice2 = Math.floor(Math.random() * 6 + 1);

    divResultados.insertAdjacentHTML('beforeend',`
    <p>Lançamento: ${i}   /   Primeiro Dado: ${dice1}   /   Segundo Dado: ${dice2}   /   Soma: ${dice1 + dice2}</p>
    `)

    // console.log(dice1)
    // console.log(dice2)
    count[dice1 + dice2] += 1
    
}

console.log(count)

let divGrafico = document.querySelector('.grafico')
divGrafico.insertAdjacentHTML('afterbegin', `<h1>Gráfico de Rolagens</h1>`)

for(let i = 2 ; i < count.length; i++){
    divGrafico.insertAdjacentHTML('beforeend',`
    <p style="background-color:#000000; height: 15px; width: ${count[i]*3}px;color: #ffffff; font-size: 10px">Soma ${i} (${count[i]}x)</p>
    `)
    
}
