let menuOptions = document.getElementById("menu");
menuOptions.className = 'btn-group-horizontal';

let header = document.getElementById("header");
header.style.cssText =
    'background-color: #6b757e;' +
    'color: white;' +
    'text-align: end;';

let elements = document.getElementsByTagName("a");
const buttons = Array.from(elements)
buttons.push(elements)
console.log(buttons)
buttons.forEach(button => {
    button.onmouseover = (e) => {
        e.target.style.backgroundColor = '#27a844';
        e.target.style.border = 'solid 1px #27a844'
    }
    button.onmouseout = (e) => {
        e.target.style.backgroundColor = '#007aff';
        e.target.style.border = 'solid 1px #007aff'
    }
});


let list = document.getElementById("list");
const first = list.querySelector("li");
console.log(first)
first.className = "list-group-item";

list.innerHTML += `
    <li class='list-group-item active'>Quarto item</li>
    <li class='list-group-item'>Quinto item</li>
    `
