function calcularDiaria(valorDiaria, quantidadeDias) {
    return valorDiaria * quantidadeDias;
}

function fazerReserva() {
    while (true) {
        let valorDiaria = parseFloat(prompt("Qual o valor padrão da diária? R$"));
        if (isNaN(valorDiaria) || valorDiaria <= 0) {
            alert("Valor inválido.");
            continue;
        }

        let quantidadeDias = parseInt(prompt("Quantas diárias serão necessárias?"));
        if (isNaN(quantidadeDias) || quantidadeDias <= 0 || quantidadeDias > 30) {
            alert("Quantidade de dias inválida.");
            continue;
        }

        let nomeHospede = prompt("Qual o nome do hóspede?");
        let confirmacao = prompt(`${nomeHospede}, você confirma a hospedagem por ${quantidadeDias} dias? (S/N)`).toUpperCase();

        if (confirmacao === 'S') {
            let valorTotal = calcularDiaria(valorDiaria, quantidadeDias);
            alert(`Reserva efetuada para ${nomeHospede}. O valor total é de R$${valorTotal.toFixed(2)}.`);
        } else {
            alert("Reserva não efetuada.");
        }

        let continuar = prompt("Deseja fazer outra reserva? (S/N)").toUpperCase();
        if (continuar !== 'S') {
            break;
        }
    }
}

fazerReserva();
