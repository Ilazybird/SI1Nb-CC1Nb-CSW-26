function calcular () {
    let AnoNascimento = parseInt(document.getElementById("inserir").value)
    let idade = 0;
    let Ano_Atual = new Date().getFullYear()

    idade = Ano_Atual - AnoNascimento
    
    if ( AnoNascimento == 0) {
        alert("Digite um ano válido")
        return
    }

    document.getElementById("painel").innerHTML = "Sua Idade é: " + idade
}