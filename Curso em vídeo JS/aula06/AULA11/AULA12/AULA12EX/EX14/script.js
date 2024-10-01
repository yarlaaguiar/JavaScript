function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementsById('foto')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 16
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 &&  12) {
        img.src = 'fotomanha-modelosjs.png'
        document.body.style.background = '#e8a353'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'fototarde-modelojs.png'
        document.body.style.background = '#e8a353'
    } else {
        img.src = 'fotonoite-modelojs.png'
        document.body.style.background = '#110a0d'
    }

}
