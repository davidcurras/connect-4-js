'use strict'

window.Connect4 = window.Connect4 || {}

Connect4.Handlers = {

  Init: () => {
    Connect4.Render.Board()
    const boardHTML = document.getElementById('board')
    const slots = boardHTML.getElementsByClassName('slot')
    for (let i = 0; i < slots.length; i++) {
      slots[i].onclick = Connect4.Handlers.SlotClick
    }
  },

  SlotClick: evt => {
    const cId = parseInt(evt.target.id.substring(1, 2))
    const sId = parseInt(evt.target.id.substring(3, 4))
    console.log(cId, sId)
  }

}
