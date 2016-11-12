const remote = require('electron').remote;
const main = remote.require('./main.js');

$(function(){
  $(".personNode").draggable();
});

function createPerson(firstName, lastName){
  var person = document.createElement("div");
  person.setAttribute("class", "personNode");
  var t = document.createTextNode(firstName + " " + lastName);
  person.appendChild(t);
  return person;
}

var elem2 = createPerson("David", "Culbreth");

document.body.appendChild(elem2);
