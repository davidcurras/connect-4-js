'use strict'

window.Connect4 = window.Connect4 || {}

Connect4.Render = {

  Board: () => {
    let html = []
    for (let i = 0; i < Connect4.Board.Slots.length; i++) {
      const row = Connect4.Board.Slots[i]
      for (let j = 0; j < row.length; j++) {
        const slot = Connect4.Board.Slots[i][j]
        // Open column div
        if(!html[j]) html[j] = '<div class="column flex-col-a">'
        // Fill in slots
        html[j] += '<div class="slot inner-shadow '
        html[j] += slot ? slot : ''
        html[j] += '"></div>'
      }
    }
    // Close column div
    for (let j = 0; j < html.length; j++) {
      html[j] += '</div>'
    }
    document.getElementById('board').innerHTML = html.join()
  }

}
