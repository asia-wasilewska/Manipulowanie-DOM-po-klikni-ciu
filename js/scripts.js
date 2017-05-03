var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
  var listId = document.getElementById('list'),
      liElem = document.getElementsByTagName('li').length;
  list.innerHTML += '<li>item '+ liElem + '</li>'
 });