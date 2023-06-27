let menuOptions = document.getElementById("menu");
menuOptions.className = 'btn-group-horizontal';

let header = document.getElementById("header");
header.style.cssText =
    'background-color: #6b757e;' +
    'color: white;' +
    'text-align: end;';

let button = document.getElementsByTagName("a");
console.log(button[0]);
button[0].addEventListener('mouseenter', function (event) {
    event.target.style.backgroundColor = '#27a844;'
})

let list = document.getElementById("list");
const first = list.querySelector("li");
console.log(first)
first.className = "list-group-item";

list.innerHTML += `
<li class='list-group-item active'>Quarto item</li>
<li class='list-group-item'>Quinto item</li>
`
