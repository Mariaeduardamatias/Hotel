function calcularPrecoCombustivel(quantidadeLitros, precoLitro) {
    return quantidadeLitros * precoLitro;
}

function verificarCombustivelMaisAtraente(precoAlcoolWayne, precoGasolinaWayne, precoAlcoolStark, precoGasolinaStark) {
    const capacidadeTanque = 42; 

    let custoAlcoolWayne = calcularPrecoCombustivel(capacidadeTanque, precoAlcoolWayne);
    let custoGasolinaWayne = calcularPrecoCombustivel(capacidadeTanque, precoGasolinaWayne);
    let custoAlcoolStark = calcularPrecoCombustivel(capacidadeTanque, precoAlcoolStark);
    let custoGasolinaStark = calcularPrecoCombustivel(capacidadeTanque, precoGasolinaStark);

    let custoAlcoolMaisBaratoWayne = custoAlcoolWayne * 0.7; // Álcool precisa ser 30% mais barato que a gasolina
    let custoAlcoolMaisBaratoStark = custoAlcoolStark * 0.7;

    if (custoAlcoolMaisBaratoWayne < custoGasolinaWayne && custoAlcoolMaisBaratoWayne < custoAlcoolMaisBaratoStark && custoAlcoolMaisBaratoWayne < custoGasolinaStark) {
        return "é mais barato abastecer com álcool no posto Wayne Oil";
    } else if (custoAlcoolMaisBaratoStark < custoGasolinaStark) {
        return "é mais barato abastecer com álcool no posto Stark Petrol";
    } else {
        return "é mais barato abastecer com gasolina";
    }
}

function main() {
    let precoAlcoolWayne = parseFloat(prompt("Qual o valor do álcool no posto Wayne Oil?"));
    let precoGasolinaWayne = parseFloat(prompt("Qual o valor da gasolina no posto Wayne Oil?"));
    let precoAlcoolStark = parseFloat(prompt("Qual o valor do álcool no posto Stark Petrol?"));
    let precoGasolinaStark = parseFloat(prompt("Qual o valor da gasolina no posto Stark Petrol?"));

    let resultado = verificarCombustivelMaisAtraente(precoAlcoolWayne, precoGasolinaWayne, precoAlcoolStark, precoGasolinaStark);
    alert(resultado);
}

main();

