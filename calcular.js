function calcularIMC() {
    // Capturar os valores inseridos nos inputs
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    
    if (!peso || !altura) {
        // Exibe mensagem de erro, caso usuário preencher incorretamente (.textContent)
        document.getElementById('resultado').textContent = "Por favor, preencha ambos os campos corretamente."; 
        document.getElementById('classificacao').textContent = "";
        return;
    }
    
    // Calcular o IMC
    const imc = peso / (altura * altura);
    // Interpolação de variáveis ${}, .to fixed(2) formata um número para duas casas decimais
    document.getElementById('resultado').textContent = `Seu IMC é: ${imc.toFixed(2)}`;
    
    let classificacao = "";
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 24.9) {
        classificacao = "Peso normal";
    } else if (imc < 29.9) {
        classificacao = "Sobrepeso";
    } else if (imc < 34.9) {
        classificacao = "Obesidade grau 1";
    } else if (imc < 39.9) {
        classificacao = "Obesidade grau 2";
    } else {
        classificacao = "Obesidade grau 3";
    }
    
    // Exibir a classificação 
    document.getElementById('classificacao').textContent = `Classificação: ${classificacao}`;
}