'use strict'

window.Connect4 = window.Connect4 || {}

Connect4.Handlers = {

  Init: () => {
    Connect4.Render.Board()
    Connect4.Render.Turn()
    const boardHTML = document.getElementById('board')
    const columns = boardHTML.getElementsByClassName('column')
    for (let i = 0; i < columns.length; i++) {
      columns[i].onclick = Connect4.Handlers.SlotClick
    }
    const resetHTML = document.getElementById('reset')
    resetHTML.onclick = Connect4.Reset
  },

  SlotClick: evt => {
    const cId = parseInt(evt.target.id.substring(1, 2))
    Connect4.FillSlot(cId)
  }

}
