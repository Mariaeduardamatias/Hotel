function calcularValorServico(valorPorAparelho, quantidadeAparelhos, desconto, quantidadeMinimaDesconto) {
    let valorTotal = valorPorAparelho * quantidadeAparelhos;
    
    if (quantidadeAparelhos >= quantidadeMinimaDesconto) {
        let valorDesconto = (desconto / 100) * valorTotal;
        valorTotal -= valorDesconto;
    }
    
    return valorTotal;
}

function main() {
    let empresas = []; // Array para armazenar os dados das empresas
    let menorValor = Number.MAX_VALUE; // Variável para armazenar o menor valor encontrado
    
    while (true) {
        let nomeEmpresa = prompt("Qual o nome da empresa?");
        let valorPorAparelho = parseFloat(prompt("Qual o valor por aparelho?"));
        let quantidadeAparelhos = parseInt(prompt("Qual a quantidade de aparelhos?"));
        let desconto = parseFloat(prompt("Qual a porcentagem de desconto?"));
        let quantidadeMinimaDesconto = parseInt(prompt("Qual o número mínimo de aparelhos para conseguir o desconto?"));
        
        let valorTotal = calcularValorServico(valorPorAparelho, quantidadeAparelhos, desconto, quantidadeMinimaDesconto);
        
        empresas.push({ nome: nomeEmpresa, valor: valorTotal }); // Armazenando os dados da empresa
        
        if (valorTotal < menorValor) {
            menorValor = valorTotal; // Atualizando o menor valor
        }
        
        let continuar = prompt("Deseja informar novos dados? (S/N)").toUpperCase();
        if (continuar === 'N') {
            break;
        }
    }
    
    // Exibindo o valor total para cada empresa
    empresas.forEach(function(empresa) {
        alert(`O serviço de ${empresa.nome} custará R$${empresa.valor.toFixed(2)}`);
    });
    
    // Encontrando o nome da empresa com o menor valor
    let empresaMenorValor = empresas.find(empresa => empresa.valor === menorValor).nome;
    
    alert(`O orçamento de menor valor é o de ${empresaMenorValor} por R$${menorValor.toFixed(2)}`);
}

main();
