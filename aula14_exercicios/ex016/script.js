function contar(){
    let txtni = document.getElementById('txtni')
    let txtnf = document.getElementById('txtnf')
    let txtpasso = document.getElementById('txtpasso')
    let res = document.getElementById('res')

    if(txtni.value.length == 0 || txtnf.value.length == 00 || txtpasso.value.length ==0) {
        res.innerHTML = 'Impossível contar!'
        // window.alert('[ERRO] Faltam dados!') 
    } else {
        res.innerHTML = 'Contando:<br>'
        let inicio = Number(txtni.value)
        let fim = Number(txtnf.value)
        let passo = Number(txtpasso.value)
        if (passo <= 0 ) {
            alert('Passo inválido! Considerando PASSO 1')
            passo = 1        }
        if(inicio < fim){
            // contagem crescente
            for(let c = inicio; c <= fim; c = c + passo){
                res.innerHTML += `${c} \u{1F449} `
            }

        } else {
            // contagem decrescente
            for (let c = inicio; c >= fim; c = c - passo){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}