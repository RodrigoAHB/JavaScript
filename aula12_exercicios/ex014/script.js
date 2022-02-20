function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 7
    msg.innerHTML = `Agora são ${hora} horas. `
    if (hora >= 0 && hora < 12){
        msg.innerHTML += '<p>Bom dia!</p>'
        img.src = 'foto-manha.png'
        document.body.style.background = '#f0ec76'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML += '<p>Boa Tarde!</p>'
        img.src = 'foto-tarde.png'
        document.body.style.background ='#b9846f'
    } else {
        msg.innerHTML += '<p>Boa noite!</p>'
        img.src = 'foto-noite.png'
        document.body.style.background = '#051719'
    }
}