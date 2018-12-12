'use strict'

window.Connect4 = window.Connect4 || {}

Connect4.Board = {
  Slots: [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, 'yellow', 'red', null, null],
    [null, null, null, 'yellow', 'yellow', 'red', null],
    [null, 'red', 'yellow', 'red', 'red', 'yellow', null]
  ],
  PlayerTurn: 1
}
