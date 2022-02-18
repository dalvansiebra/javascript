var intervald = window.setInterval(() => {carregar()
        
},1000);

function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    msg.innerHTML = `Agora são ${hora}:${minuto}:${segundo}.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#FC7C6F'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = 'fototarde.jpg'
        document.body.style.background = '#fdd3a3'
    } else {
        //BOA NOITE
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#012C3D'
    }
}

