document.getElementById("formPersonagem").addEventListener("submit", function(event) {
event.preventDefault();

const nome = document.getElementById("nome").value;
const email = document.getElementById("email").value;
const ano = document.getElementById("ano").value;
const classe = document.getElementById("classe").value;
const descricao = document.getElementById("descricao").value;
const imagem = document.getElementById("imagem").value;

const mensagem = document.getElementById("mensagem");
const resultado = document.getElementById("resultado");

mensagem.innerHTML = "";
resultado.innerHTML = "";

const nomeSemEspacos = nome.trim();
const palavras = nomeSemEspacos.split(" ");

let quantidadePalavras = 0;

for (let i = 0; i < palavras.length; i++) {
    if (palavras[i] != "") {
        quantidadePalavras++;
    }
}

if (quantidadePalavras < 3) {
    mensagem.innerHTML = "<div class='alert alert-danger'>O nome deve ter no mínimo 3 palavras.</div>";
    return;
}

const anoAtual = new Date().getFullYear();
const idade = anoAtual - Number(ano);

if (ano == "" || idade < 18) {
    mensagem.innerHTML = "<div class='alert alert-danger'>O personagem precisa ter 18 anos ou mais.</div>";
    return;
}

if (descricao.trim().length <= 20) {
    mensagem.innerHTML = "<div class='alert alert-danger'>A descrição precisa ter mais de 20 caracteres.</div>";
    return;
}

resultado.innerHTML = "<h2>Personagem cadastrado</h2>";

resultado.innerHTML += "<p><strong>Nome:</strong> " + nome + "</p>";
resultado.innerHTML += "<p><strong>Email:</strong> " + email + "</p>";
resultado.innerHTML += "<p><strong>Ano de Nascimento:</strong> " + ano + "</p>";
resultado.innerHTML += "<p><strong>Idade:</strong> " + idade + " anos</p>";
resultado.innerHTML += "<p><strong>Classe:</strong> " + classe + "</p>";
resultado.innerHTML += "<p><strong>Descrição:</strong> " + descricao + "</p>";

if (imagem != "") {
    resultado.innerHTML += "<p><strong>Imagem:</strong></p>";
    resultado.innerHTML += "<img src='" + imagem + "' width='200'>";
} else {
    resultado.innerHTML += "<p><strong>Imagem:</strong> Nenhuma imagem informada.</p>";
}
});
