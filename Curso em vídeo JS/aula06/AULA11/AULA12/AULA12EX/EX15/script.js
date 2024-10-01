function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade < 10 ){
                //CRIANÇA
                
            } else if (idade < 21){
                //JOVEM
                img.setAttribute('src', 'jovemhomem-modelojs.png')
            } else if (idade < 50){
                //ADULTO
                img.setAttribute('src', 'homemadulto-modelojs.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'idoso-modelojs.png')
            }      
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10 ){
                //CRIANÇA
                img.setAttribute('src', 'bebemenina-modelojs.png')
            } else if (idade < 21){
                //JOVEM
                img.setAttribute('src', 'jovemmulher-modelojs.png')
            } else if (idade < 50){
                //ADULTO
                img.setAttribute('src', 'mulheradulta-modelojs.png')
            } else {
                //IDOSA
                img.setAttribute('src', 'idosa-modelojs.png')
            }      
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}