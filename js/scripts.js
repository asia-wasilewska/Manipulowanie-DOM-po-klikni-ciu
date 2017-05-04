var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {

var liElem = list.getElementsByTagName('li').length;
list.innerHTML += '<li>item '+ liElem + '</li>'
});