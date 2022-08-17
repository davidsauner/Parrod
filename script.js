let numeroDeCarta = prompt("quantas cartas vc quer")
function colocaCarta(){
    let contador = 0
    while (contador != 10 ){
        console.log("entrou")
        document.querySelector('.carta').innerHTML += `
        <div class="cartinha "> olha a carta aqui</div>`
        contador++
    }
    }
    