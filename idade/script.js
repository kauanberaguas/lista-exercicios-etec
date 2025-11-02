document.getElementById("calcular").addEventListener("click", function () {
    let idadeMae = parseInt(document.getElementById("idadeMae").value);
    let idadeFilho1 = parseInt(document.getElementById("idadeFilho1").value);
    let idadeFilho2 = parseInt(document.getElementById("idadeFilho2").value);
    let idadeFilho3 = idadeMae - idadeFilho1 - idadeFilho2;
    document.getElementById("resultado").textContent = "A idade do terceiro filho é: " + idadeFilho3;
}
)
