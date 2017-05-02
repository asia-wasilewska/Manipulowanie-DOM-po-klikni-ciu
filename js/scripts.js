var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
  var listNumber = document.getElementsByTagName('li').length;
  list.innerHTML += '<li>item ' + listNumber + '</li>';
});

