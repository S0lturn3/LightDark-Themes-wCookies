// Executa ao iniciar a página
verificarTema(document.cookie)

function verificarTema(cookie) {
    if (cookie == "tema=escuro") {
        document.body.style.backgroundColor = "#1b1b1c";
        document.body.style.color = "#fff";

        for (let e of document.getElementsByClassName('subtitle')) {
            e.style.color = "#DA3287";
        }

        document.getElementById('main-title').style.color = "#fc0f87";
    } else {
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#1b1b1c";

        for (let e of document.getElementsByClassName('subtitle')) {
            e.style.color = "blue";
        }

        document.getElementById('main-title').style.color = "#1b1b1c";
    }
}


// Executam ao realizar um evento (como por exemplo, neste caso, um evento de click em um botão)
function temaEscuro() {
    document.cookie = "tema=escuro";

    document.body.style.backgroundColor = "#1b1b1c";
    document.body.style.color = "#fff";

    for (let e of document.getElementsByClassName('subtitle')) {
        e.style.color = "#DA3287";
    }

    document.getElementById('main-title').style.color = "#fc0f87";
}
function temaClaro() {
    document.cookie = "tema=claro";

    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#1b1b1c";

    for (let e of document.getElementsByClassName('subtitle')) {
        e.style.color = "blue";
    }

    document.getElementById('main-title').style.color = "#1b1b1c";
}
