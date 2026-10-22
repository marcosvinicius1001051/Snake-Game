const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const tamanho = 20;
const colunas = canvas.width / tamanho;
const linhas = canvas.height / tamanho;
let cobraX = 10;
let cobraY = 10;
let direcaoX = 0;
let direcaoY = -1;
let comidaX = 5;
let comidaY = 5;

function desenhar() {
  ctx.fillStyle = "green";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "lime";
  ctx.fillRect(cobraX * tamanho, cobraY * tamanho, tamanho, tamanho);
  ctx.fillStyle = "brown";
  ctx.fillRect(comidaX * tamanho, comidaY * tamanho, tamanho, tamanho);
}

function atualizar() {
  cobraX += direcaoX;
  cobraY += direcaoY;
  if (cobraX === comidaX && cobraY === comidaY) {
    comidaX = Math.floor(Math.random() * colunas);
    comidaY = Math.floor(Math.random() * linhas);
  }
}

function loop() {
  atualizar();
  desenhar();
}
setInterval(loop, 250);

function teclar(evento) {
  if (evento.key === "ArrowUp") {
    direcaoX = 0;
    direcaoY = -1;
  }
  if (evento.key === "ArrowDown") {
    direcaoX = 0;
    direcaoY = 1;
  }
  if (evento.key === "ArrowLeft") {
    direcaoX = -1;
    direcaoY = 0;
  }
  if (evento.key === "ArrowRight") {
    direcaoX = 1;
    direcaoY = 0;
  }
}
document.addEventListener("keydown", teclar);

