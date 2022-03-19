

var num = window.document.getElementById('num1')

var lista = window.document.getElementById('anal')

var res = window.document.getElementById('res')

var valores = []


function isNumero(n){
    if(Number(n)>= 1 && Number(n) <=100){
        return true
    } else{
        return false
    }
}

function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}
function adicionar(){ // a exclamação significa negação
    if(isNumero(num.value) && !inLista(num.value,valores)){
        valores.push(Number(num.value))
        var item = window.document.createElement('option')
        item.text = `O elemento ${(num.value)} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ''


    } else {
        window.alert('Valor invalido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}
function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
    }else{
        var total = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for (var pos in valores){
            soma = soma + valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }else if (valores[pos] < menor){
                menor = valores[0]
            }

            
        }
        media = soma/valores.length
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} elementos cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `A soma dos valores é igual a ${soma}.`
        res.innerHTML += `<p>A media dos valores é igual a ${media.toFixed(2)}.</p>`
    }
}