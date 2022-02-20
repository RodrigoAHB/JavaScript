let txtn = document.getElementById('txtn')
let tab = document.getElementById('tabela')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumero(txtn.value) && !inLista(txtn.value, valores)){
        valores.push(Number(txtn.value))
        let item = document.createElement('option')
        item.text= `Valor ${Number(txtn.value)} adicionado.`
        tab.appendChild(item)
        res.innerHTML = ''
    } else{
        alert('Valor inválido ou já encontrado na lista')
    }
    txtn.value = ''
    txtn.focus()
}

function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar.')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior){
                maior = valores[pos]
            }
            if (valores[pos]< menor){
                menor = valores[pos]
            }
        }
        media = soma/tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.`
        res.innerHTML += `<p>A soma de todos os valores informados é ${soma}.</p>`
        res.innerHTML += `<p>A média de todos os valores informados é ${media}</p>`

    }
}

