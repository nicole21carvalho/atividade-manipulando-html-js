var area = document.getElementById('area');

function entrar() {
  var nome = prompt("Digite seu nome:");
  var curso = prompt("Digite seu curso:");

  if (nome === '' || nome === null || curso === '' || curso === null) {
    alert("Ops, algo deu errado!");
    area.innerHTML = "Clique no botão para acessar...";
  } else {
    area.innerHTML = "Bem-vindo, " + nome + ", ao curso de " + curso + "! ";

    var botaoSair = document.createElement("button");
    botaoSair.innerText = "Sair da conta";
    botaoSair.classList.add("botao-sair");
    botaoSair.onclick = sair;

    area.appendChild(botaoSair);
  }
}

function sair() {
  alert("Até mais!");
  area.innerHTML = "Você saiu!";
}

function mediaTresNotas(nota1, nota2, nota3) {
  var media = (nota1 + nota2 + nota3) / 3;

  console.log("Média do aluno: " + media.toFixed(2));

  if (media >= 7) {
    console.log("Aluno aprovado!");
    return "Média: " + media.toFixed(2) + " - Aluno aprovado!";
  } else {
    console.log("Aluno reprovado!");
    return "Média: " + media.toFixed(2) + " - Aluno reprovado!";
  }
}

document.getElementById('formNotas').addEventListener('submit', function(event) {
  event.preventDefault();

  var nota1 = parseFloat(document.getElementById('nota1').value);
  var nota2 = parseFloat(document.getElementById('nota2').value);
  var nota3 = parseFloat(document.getElementById('nota3').value);

  var resultado = mediaTresNotas(nota1, nota2, nota3);

  document.getElementById('resultadoMedia').innerHTML = resultado;
});
