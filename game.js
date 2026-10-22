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
let corpo = [{ x: 10, y: 10 }];
let pontos = 0;
const pontosTela = document.getElementById("pontos");

function desenhar() {
  ctx.fillStyle = "green";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "lime";
  for (let i = 0; i < corpo.length; i++) {
    ctx.fillRect(corpo[i].x * tamanho, corpo[i].y * tamanho, tamanho, tamanho);
  }
  ctx.fillStyle = "brown";
  ctx.fillRect(comidaX * tamanho, comidaY * tamanho, tamanho, tamanho);
}

function reiniciar() {
  cobraX = 10;
  cobraY = 10;
  direcaoX = 0;
  direcaoY = -1;
  corpo = [{ x: 10, y: 10 }];
  pontos = 0;
  pontosTela.textContent = pontos;
}

function atualizar() {
  cobraX += direcaoX;
  cobraY += direcaoY;

  if (cobraX < 0 || cobraX >= colunas || cobraY < 0 || cobraY >= linhas) {
    reiniciar();
    return;
  }

  for (let i = 0; i < corpo.length; i++) {
    if (corpo[i].x === cobraX && corpo[i].y === cobraY) {
      reiniciar();
      return;
    }
  }

  corpo.unshift({ x: cobraX, y: cobraY });

  if (cobraX === comidaX && cobraY === comidaY) {
    pontos++;
    pontosTela.textContent = pontos;
    comidaX = Math.floor(Math.random() * colunas);
    comidaY = Math.floor(Math.random() * linhas);
  } else {
    corpo.pop();
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
