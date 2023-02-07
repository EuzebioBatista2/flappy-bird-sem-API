var passaro = document.getElementById('bird')
var move = document.querySelector('[wm-flappy]')
var h2 = document.querySelector('h2')

var contgeral = 0 // Contador de disparo dos obstaculos
var cont = 0 // Contador de altura
var contb0 = 800 // Contador de movimento do 1° obstaculo
var contb1 = 800 // Contador de movimento do 2° obstaculo
var contb2 = 800 // Contador de movimento do 3° obstaculo
var contb3 = 800 // Contador de movimento do 4° obstaculo
var parou = false // Travar o click após o fim do game.
var ponto = 0 // Verificar se o ponto foi valido
var pontot = 0 // Pontuação total


let myInterval = setInterval(e => {
    
    passaro.style.top = `${cont}px`

    // Contador geral(Chamar cada obstaculo)
    
    if (contgeral >= 0) {
        const obstaculo0 = move.querySelector('.obs0')
        obstaculo0.style.marginLeft = `${contb0}px`
        contb0 -= 1
    }
    if (contgeral >= 250) {
        const obstaculo1 = move.querySelector('.obs1')
        obstaculo1.style.marginLeft = `${contb1}px`
        contb1 -= 1
    }
    if (contgeral >= 500) {
        const obstaculo2 = move.querySelector('.obs2')
        obstaculo2.style.marginLeft = `${contb2}px`
        contb2 -= 1
    }
    if (contgeral >= 750) {
        const obstaculo3 = move.querySelector('.obs3')
        obstaculo3.style.marginLeft = `${contb3}px`
        contb3 -= 1
    }
    contgeral +=1

    // Fim contador geral de obstaculos


    // Limites de salto
 
    if (cont < 250) {
        cont += 1
        if (cont >= 250) {
            cont = 250
        }   
    } 
    move.onclick = function(a) {
        cont -= 50
        if ( cont <= -230) {
            cont = -230
        }
        if ( parou == false ){
            passaro.style.top = `${cont}px`
        }
        
    }

    // Fim limites de salto

    // Verificador de passagem
    
    if (contb0 >= 322 && contb0 <= 407) {
        
        if (cont <= -30 || cont >= 51) {
            if (cont <= -30 && contb0 > 324 ) {
                cont = -30
                passaro.style.top = `${cont}px`
            }
            clearInterval(myInterval)
            parou = true
        }
            
        ponto += 1
    } 
    if (contb1 >= 322 && contb1 <= 407) {
        
        if (cont <= 0 || cont >= 81) {
            if (cont <= 0 && contb1 > 324 ) {
                cont = 0
                passaro.style.top = `${cont}px`
            }
            clearInterval(myInterval)
            parou = true
        }

        ponto += 1
    }
    if (contb2 >= 322 && contb2 <= 407) {
        
        if (cont <= 70 || cont >= 151) {
            if (cont <= 70 && contb2 > 324 ) {
                cont = 70
                passaro.style.top = `${cont}px`
            }
            clearInterval(myInterval)
            parou = true
        }

        ponto += 1
    }

    if (contb3 >= 322 && contb3 <= 407) {
        
        if (cont >= 21 || cont <= -61) {
            if (cont <= 20 && contb2 > 324 ) {
                cont = 20
                passaro.style.top = `${cont}px`
            }
            clearInterval(myInterval)
            parou = true
        }

        ponto += 1
    }

    // Fim verificado

    // Loop de obstaculo

    if ( contb0 <= -60 ) {
        if ( contb3 == 550 ) {
            contb0 = 800
        }
        else {
            contb0 = -60
        }
    }

    if ( contb1 <= -60 ) {
        if ( contb0 == 550 ) {
            contb1 = 800
        }
        else {
            contb1 = -60
        }
    }

    if ( contb2 <= -60 ) {
        if ( contb1 == 550 ) {
            contb2 = 800
        }
        else {
            contb2 = -60
        }
    }

    if ( contb3 <= -60 ) {
        if ( contb2 == 550 ) {
            contb3 = 800
        }
        else {
            contb3 = -60
        }
    }

    // Fim Loop


        
    // Placar

    if ( ponto == 86 ) {
        pontot += 1
        ponto = 0
        h2.innerText = `${pontot}`
    }

    // Fim Placar
    
},5)
