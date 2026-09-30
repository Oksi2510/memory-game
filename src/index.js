import Header from "./components/header.js";
import GameBoard from "./components/game-board.js";

const header = new Header();
const gameBoard = new GameBoard();

document.body.append(header.getHtmlElement());
document.body.append(gameBoard.getHtmlElement());
gameBoard.generateBoard(gameBoard.getHtmlElement())

