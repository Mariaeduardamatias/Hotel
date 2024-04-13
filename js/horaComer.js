function calcularCustoTotal(convidados) {
    const precoCafePorLitro = 0.80;
    const precoAguaPorLitro = 0.40;
    const precoSalgadosPorCento = 34.00;

    const litrosCafe = convidados * 0.2;
    const litrosAgua = convidados * 0.5;
    const quantidadeSalgados = convidados * 7;

    const custoCafe = litrosCafe * precoCafePorLitro;
    const custoAgua = litrosAgua * precoAguaPorLitro;
    const custoSalgados = (quantidadeSalgados / 100) * precoSalgadosPorCento;

    return custoCafe + custoAgua + custoSalgados;
}

function main() {
    let convidados = parseInt(prompt("Qual o número de convidados para o evento?"));

    if (convidados > 350) {
        alert("Quantidade de convidados superior à capacidade máxima.");
        return;
    }

    let litrosCafe = convidados * 0.2;
    let litrosAgua = convidados * 0.5;
    let quantidadeSalgados = convidados * 7;

    alert(`O evento precisará de ${litrosCafe} litros de café, ${litrosAgua} litros de água, ${quantidadeSalgados} salgados. `);

    let custoTotal = calcularCustoTotal(convidados);
    alert(`O custo total do evento será de R$${custoTotal.toFixed(2)}`);

    let confirmacao = prompt("Gostaria de efetuar a reserva? S/N").toUpperCase();
    if (confirmacao === 'S') {
        alert("Reserva efetuada com sucesso.");
    } else {
        alert("Reserva não efetuada.");
    }
}

main();
