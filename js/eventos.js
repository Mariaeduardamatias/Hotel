function calcularCustoTotal(numGarcons, horasEvento) {
    const custoPorHoraGarcom = 10.50;
    return numGarcons * custoPorHoraGarcom * horasEvento;
}

function main() {
    let horasEvento = parseInt(prompt("Qual a duração do evento em horas?"));
    let numGarcons = parseInt(prompt("Quantos garçons serão necessários?"));

    let custoTotal = calcularCustoTotal(numGarcons, horasEvento);
    alert(`Custo total: R$${custoTotal.toFixed(2)}`);

    let confirmacao = prompt("Gostaria de efetuar a reserva? S/N").toUpperCase();
    if (confirmacao === 'S') {
        alert("Reserva efetuada com sucesso.");
    } else {
        alert("Reserva não efetuada.");
    }
}

main();
