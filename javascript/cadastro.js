document.getElementById("enviar").addEventListener('click', function () {
    novo();
});

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

async function novo() {
    var nome = document.getElementById("nome").value;
    var senha = document.getElementById("senha").value;
    var email = document.getElementById("email").value;
    var nascimento = document.getElementById("nascimento").value;
    var motorista = document.getElementById("motorista").checked;

    
    if (this.motorista == true) {
        await cadastrarMotorista();
        var dataVencimento = document.getElementById("dataVencimento").value;
        var numeroRegistro = document.getElementById("numeroRegistro").value;
        var cpf = document.getElementById("cpf").value;

        const fdMotorista = new FormData();
        fdMotorista.append('dataVencimento', dataVencimento);
        fdMotorista.append('numeroRegistro', numeroRegistro);
        fdMotorista.append('cpf', cpf);

        const retornoMotorista = await fetch("../php/cadastro_motorista.php", {
            method: "POST",
            body: fdMotorista
        });

        const respostaMotorista = await retornoMotorista.json();
    }

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

