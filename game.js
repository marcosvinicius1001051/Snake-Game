const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d")
const tamanho = 20;
console.log(ctx);
ctx.fillStyle = "green";
ctx.fillRect(0, 0, 400, 400);
ctx.fillStyle = "lime";
ctx.fillRect(200, 200, tamanho, tamanho);
    