
document.addEventListener("DOMContentLoaded", () => {
    //valida_sessao();

    if (document.getElementById("lista")) {
        carregarDados();
    }
});

const botaoNovo = document.getElementById("novaViagem");
if (botaoNovo) {
    botaoNovo.addEventListener("click", () => {
        window.location.href = '../html/novaViagem.html';
    });
}

async function carregarDados() {
    const retorno = await fetch("../php/getViagem.php");
    const resposta = await retorno.json();

    if (resposta.status == "ok") {
        const registros = resposta.data;

        var html = `<table>
        <tr>
            <th>Título</th>
            <th>Descrição</th>
            <th>Ponto de Partida</th>
            <th>Ponto de Chegada</th>
            <th>Data e Hora</th>
        </tr>`;

        for (var i = 0; i < registros.length; i++) {
            var objeto = registros[i]

            html += `<tr>
                        <td> 
                            <a href='alterar_evento.html?id=${objeto.id}' class='alterar'>Alterar</a>
                            <a href='#' onclick='excluir(${objeto.id})' class='excluir'>Excluir</a>
                        </td>
                        <td>${objeto.titulo}</td>
                        <td>${objeto.descricao}</td>
                        <td>${objeto.pontoPartida}</td>
                        <td>${objeto.pontoChegada}</td>
                        <td>${objeto.dataHora}</td>
                    </tr>`;
        }
        html += "</table>"

        document.getElementById("lista").innerHTML = html;

    } else {
        alert("Erro: " + resposta.mensagem);
    }
};