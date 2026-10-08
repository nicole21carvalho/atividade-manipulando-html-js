# 🖐️ Atividade - Manipulando Elementos HTML e Funções em JavaScript

Este projeto resolve a atividade solicitada no material da aula.

## ✅ O que foi feito

A função `entrar()` foi modificada para pedir:

- Nome do usuário
- Curso do usuário

A mensagem exibida ficou:

```text
Bem-vindo, [nome], ao curso de [curso]!
```

Foi criada a função `mediaTresNotas(nota1, nota2, nota3)`. Ela calcula a média das três notas e informa no console:

- **Aluno aprovado**, se a média for maior ou igual a 7
- **Aluno reprovado**, se a média for menor que 7

A página foi estilizada com CSS:

- Cor de fundo
- Fonte
- Botões maiores
- Conteúdo centralizado

## 🔒 Cuidado com o que o usuário digita

A mensagem de boas-vindas é colocada na página com `textContent`, e não com `innerHTML`. Assim, se alguém digitar um código HTML no lugar do nome (por exemplo `<img src=x onerror=alert(1)>`), ele aparece como texto em vez de ser executado. Nomes e cursos com só espaços em branco também são recusados.

## 💻 Como abrir no VS Code

1. Clone ou baixe este repositório.
2. Abra o VS Code.
3. Clique em `File > Open Folder`.
4. Selecione a pasta `atividade-manipulando-html-js`.
5. Abra o arquivo `index.html`.
6. Clique com o botão direito no `index.html` e escolha **Open with Live Server**.

Caso não tenha o Live Server, basta abrir o arquivo `index.html` no navegador.
