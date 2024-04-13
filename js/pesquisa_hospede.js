function cadastrarHospede(hospedes) {
    if (hospedes.length >= 15) {
        alert("Máximo de cadastros atingido");
        return;
    }

    let nomeHospede = prompt("Qual o nome do Hóspede?");
    hospedes.push(nomeHospede);
    alert(`Hóspede ${nomeHospede} foi cadastrada(o) com sucesso!`);
}

function pesquisarHospede(hospedes) {
    let nomeHospede = prompt("Qual o nome do Hóspede?");
    if (hospedes.includes(nomeHospede)) {
        alert(`Hóspede ${nomeHospede} foi encontrada(o)!`);
    } else {
        alert(`Hóspede ${nomeHospede} não foi encontrada(o)!`);
    }
}

function main() {
    let hospedes = [];

    while (true) {
        let opcao = parseInt(prompt("Selecione uma opção: 1. Cadastrar - 2. Pesquisar - 3. Sair"));

        switch (opcao) {
            case 1:
                cadastrarHospede(hospedes);
                break;
            case 2:
                pesquisarHospede(hospedes);
                break;
            case 3:
                return;
            default:
                alert("Opção inválida. Por favor, escolha novamente.");
        }
    }
}

main();
