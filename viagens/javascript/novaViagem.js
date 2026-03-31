
document.getElementById("enviar").addEventListener('click', function () {
    novo();
});

async function novo() {
    var titulo = document.getElementById("titulo").value;
    var descricao = document.getElementById("descricao").value;
    var pontoPartida = document.getElementById("pontoPartida").value;
    var pontoChegada = document.getElementById("pontoChegada").value;
    var dataHora = document.getElementById("dataHora").value;

    // if para saber se usuário é motorista;

    if (!dataHora || !titulo || !descricao || !pontoPartida || !pontoChegada) {
        alert("ERRO: Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    const fd = new FormData();
    fd.append('titulo', titulo);
    fd.append('descricao', descricao);
    fd.append('pontoPartida', pontoPartida);
    fd.append('pontoChegada', pontoChegada);
    fd.append('dataHora', dataHora);


    const retorno = await fetch("../php/novaViagem.php/", {
        method: "POST",
        body: fd
    });

    const resposta = await retorno.json();

    if(resposta.status == "ok") {
        alert("Sucesso! " + resposta.mensagem);
        window.location.href="../html/index.html";
    } else {
        alert("ERRO! " + resposta.mensagem);
    }

};