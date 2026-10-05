import Header from "./components/header.js";
import GameBoard from "./components/game-board.js";
import NewGameBtn from "./components/new-game-btn.js";
import LeaderBoardBtn from "./components/leaderboard.js";
import StepsCounter from "./components/steps-counter.js";
import Timer from "./components/timer.js";

const header = new Header();
const gameBoard = new GameBoard();
const newGameBtn = new NewGameBtn();
const stepsCounter = new StepsCounter();
const leaderBBoard = new LeaderBoardBtn();
const timer = new Timer();

document.body.append(header.getHtmlElement());
header.appendChildNode(newGameBtn);
header.appendChildNode(stepsCounter);
header.appendChildNode(timer);
header.appendChildNode(leaderBBoard);

document.body.append(gameBoard.getHtmlElement());
gameBoard.generateBoard(gameBoard.getHtmlElement());
timer.startTimer();
