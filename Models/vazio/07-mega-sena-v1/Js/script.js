var board = [];
var currentGame = [1, 5, 11, 13, 15, 17];
var saveGames = [];

var state = { board: [], currentGames: [], savedGames: [] };

function start() {
  createBoard();
  newGame();
}

function createBoard() {
  state.board = [];

  for (var i = 1; i <= 60; i++) {
    state.board.push(i);
  }
}

function newGame() {
  resetGames();
  render();

  console.log(state.currentGames);
}

function render() {
  renderBoard();
  renderButtons();
  renderSavedGames();
}

function renderBoard() {
  var divBoard = document.querySelector('#Megasena-board');
  divBoard.innerHTML = '';

  var ulNumbers = document.createElement('ul');
  ulNumbers.classList.add('numbers');

  for (var i = 0; i < state.board.length; i++) {
    var currentNumber = state.board[i];

    var liNumber = document.createElement('li');
    liNumber.textContent = currentNumber;
    liNumber.classList.add('number');

    liNumber.addEventListener('click', handleNumberClick);

    if (isNumberInGame(currentNumber)) {
      liNumber.classList.add('selected-number');
    }

    ulNumbers.appendChild(liNumber);
  }
  divBoard.appendChild(ulNumbers);
}

function handleNumberClick(event) {
  var value = Number(event.currentTarget.textContent);

  if (isNumberInGame(value)) {
    removeNumberFromGame(value);
  } else {
    addNumberToGame(value);
  }

  console.log(state.currentGames);
  render();
}

function renderButtons() {
  var divButtons = document.querySelector('#Megasena-buttons');
  divButtons.innerHTML = '';

  var buttonNewGame = createNewGameButton();
  var buttonRandomGame = createRandomGameButton();
  var buttonSaveGame = createSaveGameButton();

  divButtons.appendChild(buttonNewGame);
  divButtons.appendChild(buttonRandomGame);
  divButtons.appendChild(buttonSaveGame);
}

function createSaveGameButton() {
  var button = document.createElement('button');
  button.textContent = 'Salvar jogo';

  button.disabled = !isGameComplete();

  button.addEventListener('click', saveGame);

  return button;
}

function createRandomGameButton() {
  var button = document.createElement('button');
  button.textContent = 'Jogo aleat??rio';

  button.addEventListener('click', randomGame);

  return button;
}

function createNewGameButton() {
  var button = document.createElement('button');
  button.textContent = 'Novo Jogo';

  button.addEventListener('click', newGame);

  return button;
}

function renderSavedGames() {
  var divSavedGames = document.querySelector('#Megasena-saved-games');
  divSavedGames.innerHTML = '';

  if (state.savedGames.length === 0) {
    divSavedGames.innerHTML = '<p>Nenhum jogo salvo</p>';
  } else {
    var ulSavedGames = document.createElement('ul');

    for (var i = 0; i < state.savedGames.length; i++) {
      var currentGame = state.savedGames[i];

      var liGame = document.createElement('li');
      liGame.textContent = currentGame.join(', ');

      ulSavedGames.appendChild(liGame);
    }
    divSavedGames.appendChild(ulSavedGames);
  }
}

function addNumberToGame(numberToAdd) {
  if (numberToAdd < 1 || numberToAdd > 60) {
    console.error('N??mero inv??lido', numberToAdd);
    return;
  }

  if (state.currentGames.length >= 6) {
    console.error('O jogo ja est?? completo');
    return;
  }

  if (isNumberInGame(numberToAdd)) {
    console.error('Este n??mero j?? est?? no jogo. ', numberToAdd);
    return;
  }

  state.currentGames.push(numberToAdd);
}

function removeNumberFromGame(numberToRemove) {
  if (numberToRemove < 1 || numberToRemove > 60) {
    console.error('N??mero inv??lido', numberToRemove);
    return;
  }

  var newGame = [];

  for (var i = 0; i < state.currentGames.length; i++) {
    var currentNumber = state.currentGames[i];

    if (currentNumber === numberToRemove) {
      continue;
    }

    newGame.push(currentNumber);
  }
  state.currentGames = newGame;
}

function isNumberInGame(numberToCheck) {
  // if (state.currentGames.includes(numberToCheck)) {
  //   return true;
  // }
  // return false;

  return state.currentGames.includes(numberToCheck);
}

function saveGame() {
  if (!isGameComplete()) {
    console.error('O jogo n??o est?? completo!');
    return;
  }

  state.savedGames.push(state.currentGames);
  newGame();

  console.log(state.savedGames);
}

function isGameComplete() {
  return state.currentGames.length === 6;
}

function resetGames() {
  state.currentGames = [];
}

function randomGame() {
  resetGames();

  while (!isGameComplete()) {
    var randomNumber = Math.ceil(Math.random() * 60);
    addNumberToGame(randomNumber);
  }
  console.log(state.currentGames);
  render();
}
start();
