function verificarDisponibilidadeRestaurante(diaSemana, hora) {
    diaSemana = diaSemana.toLowerCase(); 

    if (diaSemana === "sabado" || diaSemana === "domingo") {
        if (hora >= 7 && hora <= 15) {
            return true;
        } else {
            return false;
        }
    } else {
        if (hora >= 7 && hora <= 23) {
            return true;
        } else {
            return false;
        }
    }
}

function main() {
    let diaSemana = prompt("Qual o dia do seu evento?"); 
    let hora = parseInt(prompt("Qual a hora do seu evento?"));

    if (verificarDisponibilidadeRestaurante(diaSemana, hora)) {
        let nomeEmpresa = prompt("Qual o nome da empresa?");
        alert(`Restaurante reservado para ${nomeEmpresa}: ${diaSemana} às ${hora}hs.`);
    } else {
        alert("Restaurante indisponível");
    }
}

main();
