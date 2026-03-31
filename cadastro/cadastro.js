document.getElementById('cadastrar').addEventListener('click', function(){
    cadastrar()
});

function cadastrar(){
    const chaveLocalStorage = "cadastrar";

    const cadastrar = JSON.parse(localStorage.getItem(chaveLocalStorage)) || [];

    const email = document.getElementById("email").value;

    const senha = document.getElementById("senha").value;

    const numero = document.getElementById("numero").value;

    const nascimento = document.getElementById("nascimento").value;

    let sexo = ""
    if (document.getElementById('masculino').checked){
        sexo = "Masculino"
    } else if(document.getElementById('feminino').checked){
        sexo = "Feminino"
    } else{
        sexo = "não consta"
    };

    let novidades = document.getElementById("novidades").checked
    if (novidades){
        novidades = "Sim"
    } else{
        novidades = "Não"
    }

    if (!email || !senha || !numero || !nascimento === null) {
        alert("Por favor, preencha todos os campos antes de cadastrar");
        
    }else{
        const cadastro = {
        email: email,
        senha: senha,
        numero: numero, 
        nascimento: nascimento,
        sexo: sexo,
        novidades: novidades
    }

    localStorage.setItem(chaveLocalStorage, JSON.stringify(cadastro));
    alert("Cadastro concluído com sucesso!")
    console.log(localStorage)
    window.location.href = "../index.html"
    
    return true;
    }
};