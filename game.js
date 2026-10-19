const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d")
const tamanho = 20;
const colunas = canvas.width / tamanho;
const linhas = canvas.height / tamanho;
let cobraX = 0;
let cobraY = 10;

console.log(colunas);

console.log(ctx);
ctx.fillStyle = "green";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "lime";
ctx.fillRect(cobraX * tamanho, cobraY * tamanho, tamanho, tamanho);


    