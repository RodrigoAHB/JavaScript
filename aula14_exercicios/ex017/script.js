function gerar(){
    let txtn = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(txtn.value.length == 0){
        window.alert('Por favor. digite um número!')
    } else {
        let number = Number(txtn.value)
        let contador = 1
        tab.innerHTML = ''
        while (contador <= 10){
            let item = document.createElement('option') // como se tivesse indo no HTML e criando um option
            item.text = `${number} X ${contador} = ${number*contador}`
            item.value = `tab${contador}`
            tab.appendChild(item) // adiciona um elemento filho
            contador++
        }    
    }
}
let res = document.getElementById('res')