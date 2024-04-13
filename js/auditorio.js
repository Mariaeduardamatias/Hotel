function verificarAuditório(convidados) {
    if (convidados > 350 || convidados < 0) {
        return "Número de convidados inválido";
    } else if (convidados <= 150 + 70) {
        let cadeirasAdicionais = Math.max(0, convidados - 150);
        return `Use o auditório Laranja (inclua mais ${cadeirasAdicionais} cadeiras)`;
    } else {
        return "Use o auditório Colorado";
    }
}

function main() {
    let convidados = parseInt(prompt("Qual o número de convidados para o seu evento?"));

    let mensagem = verificarAuditório(convidados);
    alert(mensagem);

    if (mensagem !== "Número de convidados inválido") {
        let confirmacao = prompt("Gostaria de efetuar a reserva? S/N").toUpperCase();
        if (confirmacao === 'S') {
            alert("Reserva efetuada com sucesso.");
        } else {
            alert("Reserva não efetuada.");
        }
    }
}

main();
