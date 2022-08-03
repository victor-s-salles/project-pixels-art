function createPixels(tamanho) {
  const board = document.getElementById('pixel-board');
  const newBord = document.createElement('section');
  newBord.id = 'newbord';
  board.appendChild(newBord);

  for (let index2 = 0; index2 < tamanho; index2 += 1) {
    for (let index = 0; index < tamanho; index += 1) {
      const pixel = document.createElement('div');
      const board = document.getElementById('newbord');
      pixel.classList.add('pixel');
      board.appendChild(pixel);
    }

    const blockLine = document.createElement('div');
    blockLine.classList.add('blockLine');
    const board = document.getElementById('newbord');
    board.appendChild(blockLine);
  }
}
createPixels(5);

function clearPixels() {
  const board = document.getElementById('newbord');
  board.remove();
}
function takeBord() {
  const botao = document.getElementById('generate-board');
  botao.addEventListener('click', () => {
    const sizeBord = document.getElementById('board-size');
    if (sizeBord.value == '') {
      alert('Board inválido!');
    } else {
      clearPixels();
      if (sizeBord.value < 5) {
        createPixels(5);
      } else if (sizeBord.value > 50) {
        createPixels(50);
      } else createPixels(sizeBord.value);
    }
  });
}
takeBord();

function selectedColor() {
  const colors = document.querySelectorAll('.color');
  const paletaCores = document.getElementById('color-palette');
  paletaCores.addEventListener('click', (event) => {
    const colorClicked = event.target;
    if (colorClicked.classList == 'color') {
      for (let index = 0; index < 4; index += 1) {
        colors[index].classList.remove('selected');
      }

      colorClicked.classList.add('selected');
    }
  });
}
selectedColor();

function pintarPixels() {
  const pixelBord = document.getElementById('pixel-board');
  pixelBord.addEventListener('click', (event) => {
    const pixelSelected = event.target;
    console.log(pixelSelected);
    const colorSelecionada = document.querySelector('.selected');
    console.log(colorSelecionada);
    if (pixelSelected.classList == 'pixel') {
      pixelSelected.style.backgroundColor = colorSelecionada.style.backgroundColor;
    }
  });
}
pintarPixels();

function clearAll() {
  const button = document.getElementById('clear-board');
  const pixels = document.querySelectorAll('.pixel');
  button.addEventListener('click', () => {
    clearPixels()
    createPixels(5);
  });
}

clearAll();

function gerar_cor_hexadecimal() {
  return `#${parseInt((Math.random() * 0xFFFFFF))
    .toString(16)
    .padStart(6, '0')}`;
}
function genColors() {
  const color1 = document.getElementById('red');
  const color2 = document.getElementById('yellow');
  const color3 = document.getElementById('blue');
  const colorBlack = document.getElementById('black');

  color1.style.backgroundColor = gerar_cor_hexadecimal();
  color2.style.backgroundColor = gerar_cor_hexadecimal();
  color3.style.backgroundColor = gerar_cor_hexadecimal();
  colorBlack.style.backgroundColor = 'black';
}
genColors();
