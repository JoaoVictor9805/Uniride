document.getElementById("entrar").addEventListener('click',function(){
    login();
    verificacao();
});

document.getElementById("cadastra").addEventListener('click',function(){
    window.location.href = 'cadastro/cadastro.html'
});

function verificacao(){
    
}

async function login(){
    var email = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
    if (!usuario || !senha === null){
        alert("Preencha seus dados de login!");
        localStorage.clear("sessao");
        window.location.reload;
    } else{
    const fd = new FormData();
    fd.append("usuario", usuario);
    fd.append("senha", senha);

    const retorno = await fetch("php/login.php",{
        method: "POST",
        body: fd
    });
    const resposta = await retorno.json();
    localStorage.setItem("sessao",JSON.stringify(resposta));
    window.location.href = "home/index.html";
    };
};