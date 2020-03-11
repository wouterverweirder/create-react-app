import { createContext } from "react";

import { Board, Led } from "johnny-five";

const board = new Board({
  repl: false
});

board.on("ready", () => {
  const led = new Led(13);
  led.blink(500);
});

window.board = board;

export const boardContext = createContext(board);