function calcularidade() {
    let diaNascimento = parseInt(document.getElementById('dia').value);
    let mesNascimento = parseInt(document.getElementById('mes').value);
    let anoNascimento = parseInt(document.getElementById('ano').value);

    if (isNaN(diaNascimento) || isNaN(anoNascimento)) {
        alert("Por favor, preencha o dia e o ano corretamente!");
        return; 
    }

    let diaAtual = new Date().getDate(); 
    let mesAtual = new Date().getMonth() + 1; 
    let anoAtual = new Date().getFullYear(); 

    let idade = anoAtual - anoNascimento;

    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
        idade--; 
    }

    alert(`Você tem ${idade} anos!`);
}