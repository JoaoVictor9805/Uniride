document.getElementById("enviar").addEventListener('click', function () {
    novo();
});

async function novo() {
    var nome = document.getElementById("nome").value;
    var senha = document.getElementById("senha").value;
    var email = document.getElementById("email").value;
    var nascimento = document.getElementById("nascimento").value;
    var motorista = document.getElementById("motorista").checked;

    const fd = new FormData();
    fd.append('nome', nome);
    fd.append('senha', senha);
    fd.append('email', email);
    fd.append('nascimento', nascimento);
    fd.append('motorista', motorista);

    const retorno = await fetch("../php/cadastro.php", {
        method: "POST",
        body: fd
    }); 

    const resposta = await retorno.json();

    if(resposta.status == "ok") {
        alert("Sucesso! " + resposta.mensagem);
        window.location.href="../home/index.html";
    } else {
        alert("ERRO! " + resposta.mensagem);
    }

}