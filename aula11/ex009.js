function pesquisar() {

    var pais = window.document.getElementById('pais')
    var res = window.document.getElementById('res')
    res.innerHTML = `<p>Seu resultado é.</p>`

    if (pais.value == 'Brasil') {
        res.innerHTML += `<p>Você é <strong>Brasileiro(a)</strong>, pois nasceu no <strong>${pais.value}</strong>.</p>`
    } else {
        res.innerHTML += `<p>Você é <strong>Estrangeiro(a)</strong>, pois nasceu no <strong>${pais.value}</strong>.</p>`
    }
}