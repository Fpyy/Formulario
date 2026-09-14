const form = document.getElementById("form");

form.onsubmit = function(event)
{
    event.preventDefault();

    const nome = document.getElementById("inputNome").value;
    const descricao = document.getElementById("inputDescricao").value;
    const ano = document.getElementById("inputAnoNascimento").value;
    const classe = document.getElementById("inputClasse").value;
    const email = document.getElementById("inputEmail").value;

    form.style.display = 'none';

    const campoNome = document.getElementById("campoNome");
    const campoEmail = document.getElementById("campoEmail");

    campoNome.textContent = nome;
    campoEmail.textContent = email;

}
