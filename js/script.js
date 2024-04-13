document.getElementById("hotelForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let nome_hotel = document.getElementById("hotelName").value;
    let nome_usuario = document.getElementById("userName").value;
    let senha = document.getElementById("password").value;
    
    if (senha !== "2678") {
        document.getElementById("output").innerText = "Senha incorreta. Acesso negado.";
        return;
    }
    
    document.getElementById("output").innerText = `Bem-vindo ao Hotel ${nome_hotel}, ${nome_usuario}. É um imenso prazer ter você por aqui!`;

    // Adicionando menu de opções
    let menu = "Escolha uma opção:\n";
    menu += "1. Reservar quartos\n";
    menu += "2. Cadastrar Hóspedes\n";
    menu += "3. Cadastrar e pesquisar hóspedes\n";
    menu += "4. Eventos\n";
    menu += "5. Buffet do hotel\n";
    menu += "6. Auditório\n";
    menu += "7. Abastecimento do Carro\n";
    menu += "8. ....\n";
    menu += "9. Sair do sistema\n";

    let escolha = prompt(menu);
    
    switch(escolha) {
        case "1":
            reservarQuartos(nome_hotel, nome_usuario);
            break;
        case "2":
            cadastrarHospedes(nome_hotel, nome_usuario);
            break;
        case "3":
            pesquisarHospedes(nome_hotel, nome_usuario);
            break;
        case "4":
            eventos(nome_hotel, nome_usuario);
            break;
        case "9":
            alert(`Muito obrigado e até logo, ${nome_usuario}.`);
            break;
        default:
            erro();
    }
});

// Funções para cada opção do menu
function reservarQuartos(nome_hotel, nome_usuario) {
    alert(`Verificando reservas de quartos no Hotel ${nome_hotel}, ${nome_usuario}`);
    // Código para verificar disponibilidade de quartos
}

function cadastrarHospedes(nome_hotel, nome_usuario) {
    alert(`Cadastrando hóspedes no Hotel ${nome_hotel}, ${nome_usuario}`);
    // Código para fazer reserva de quartos
}

function pesquisarHospedes(nome_hotel, nome_usuario) {
    alert(`Pesquisando hóspedes no Hotel ${nome_hotel}, ${nome_usuario}`);
    // Código para verificar as reservas do usuário
}

// Função para lidar com escolha inválida
function erro() {
    alert("Opção inválida. Por favor, escolha uma opção válida.");
}

