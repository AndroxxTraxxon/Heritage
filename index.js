const remote = require('electron').remote
const main = remote.require('./main.js')

var button = document.createElement('button')
button.textContent = 'Open Window'
button.addEventListener('click', function(){
  main.openOtherWin()
}, false)
document.body.appendChild(button)
