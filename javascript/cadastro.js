document.getElementById("enviar").addEventListener('click', function () {
    novo();
});

async function novo() {
    var nome = document.getElementById("nome").value;
    var senha = document.getElementById("senha").value;
    var email = document.getElementById("email").value;
    var nascimento = document.getElementById("nascimento").value;
    var motorista = document.getElementById("motorista").checked ? 1 : 0 // Convertendo o valor booleano para 1 ou 0 (true ou false respectivamente);

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

    if (motorista ==  0) {
        if(resposta.status == "ok") {
            alert("Sucesso! " + resposta.mensagem);
            window.location.href="../viagens/html/index.html";
        } else {
            alert("ERRO! " + resposta.mensagem);
        }

    } else {
        var dataVencimento = document.getElementById("dataVencimento").value;
        var numeroRegistro = document.getElementById("numeroRegistro").value;
        var cpf = document.getElementById("cpf").value;

        const fdMotorista = new FormData();
        fdMotorista.append('dataVencimento', dataVencimento);
        fdMotorista.append('numeroRegistro', numeroRegistro);
        fdMotorista.append('cpf', cpf);

        const retornoMotorista = await fetch("../php/cadastroMotorista.php", {
            method: "POST",
            body: fdMotorista
        });

        const respostaMotorista = await retornoMotorista.json();

        if(respostaMotorista.status == "ok" && resposta.status == "ok") {
            alert("Sucesso! redirecionando você para a página inicial.");
            window.location.href="../viagens/html/index.html";
        } else {
            alert(resposta.mensagem + "/" + respostaMotorista.mensagem);
        }
    }
}

document.getElementById("motorista").addEventListener('change', function () {
    mostrarFormMotorista();
});


function mostrarFormMotorista() {
    var x = document.getElementById("formMotorista");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

}
