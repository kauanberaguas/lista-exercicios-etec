function classificar() {
    const t1 = parseFloat(document.getElementById("tempo1").value);
    const t2 = parseFloat(document.getElementById("tempo2").value);
    const t3 = parseFloat(document.getElementById("tempo3").value);
    const resultado = document.getElementById("resultado");
    let tempos = [t1, t2, t3];
    let rank = [1, 2, 3];
    let ordenados = [...tempos].sort((a, b) => a - b);
    if (ordenados[0] === ordenados[1] && ordenados[1] === ordenados[2]) {
        resultado.textContent = "Empate!";
        return;
    }
    let posicoes = tempos.map(function (tempo) {
        return ordenados.indexOf(tempo) + 1;
    });
    resultado.textContent = "Classificação: " + posicoes.join(", ");
}
