function calcularDesconto(idade, valorDiaria) {
    if (idade < 6) {
        return "gratuidade";
    } else if (idade > 60) {
        return "meia";
    }
    return "normal";
}

function cadastrarHospede() {
    let gratuidades = 0;
    let meias = 0;
    let valorTotal = 0;

    let valorDiaria = parseFloat(prompt("Qual o valor padrão da diária? R$"));

    while (true) {
        let nomeHospede = prompt("Qual o nome do Hóspede? (Digite PARE para finalizar)");

        if (nomeHospede.toUpperCase() === "PARE") {
            break;
        }

        let idade = parseInt(prompt("Qual a idade do Hóspede?"));

        let tipoDesconto = calcularDesconto(idade, valorDiaria);

        let desconto = 0;
        if (tipoDesconto === "gratuidade") {
            gratuidades++;
        } else if (tipoDesconto === "meia") {
            meias++;
            desconto = valorDiaria / 2;
        } else {
            desconto = valorDiaria;
        }

        valorTotal += desconto;
        alert(`${nomeHospede} cadastrada(o) com sucesso.`);
    }

    alert(`O valor total das hospedagens é: R$${valorTotal}; ${gratuidades} gratuidade(s); ${meias} meia(s)`);
}

cadastrarHospede();
