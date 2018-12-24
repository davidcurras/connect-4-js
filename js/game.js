'use strict'

window.Connect4 = window.Connect4 || {}

Connect4.FillSlot = columnId => {
  const count = Connect4.Board.Slots.length - 1
  // Do a reverse for so we can find the first empty slot
  for (let i = count; i >= 0; i--) {
    if(!Connect4.Board.Slots[i][columnId]) {
      const turn = Connect4.Board.PlayerTurn
      const player1 = Connect4.Board.Player1
      const player2 = Connect4.Board.Player2
      Connect4.Board.Slots[i][columnId] = turn
      Connect4.Board.PlayerTurn = turn === player1 ? player2 : player1
      return Connect4.Handlers.Init()
    }
  }
}

Connect4.Reset = () => {
  for (let i = 0; i < Connect4.Board.Slots.length; i++) {
    const row = Connect4.Board.Slots[i]
    for (let j = 0; j < row.length; j++) {
      row[j] = null
    }
  }
  return Connect4.Handlers.Init()
}

window.onload = Connect4.Handlers.Init
