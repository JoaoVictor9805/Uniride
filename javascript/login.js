//import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

document.getElementById("enviar").addEventListener("click", () => {
    login();
});

/*
const supabase = createClient(
  'https://rxawoqfetbtmatirrfth.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4YXdvcWZldGJ0bWF0aXJyZnRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyMjQyOTgsImV4cCI6MjA5MDgwMDI5OH0.MhSDiPlieIOZIwO6YYjZbaIk2S6EZuAspXDjrRywPJY'
);
*/

async function login(){
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    const fd = new FormData();
    fd.append("email", email);
    fd.append("senha", senha);
    const retorno = await fetch("../php/login.php",{
            method: "POST",
            body: fd
        }
    );
    const resposta = await retorno.json();

    if(resposta.status == "ok"){
        window.location.href="../viagens/html/index.html";
/*        await enviarLink();
        document.getElementById("etapa-login").style.display = "none";
        document.getElementById("etapa-codigo").style.display = "block";
*/
    }else{
        alert("Credenciais invalidas.");
    }
};

/*
async function enviarLink(){
  const email = document.getElementById("email").value;

  const { error } = await supabase.auth.signInWithOtp({
    email: email,
    options: {
        emailRedirectTo: "http://localhost/Uniride/viagens/html/index.html"
    }
  });

    if (error) {alert("Erro ao enviar");
    } else alert("Link enviado para seu email!");
};
*/