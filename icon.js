function Rankicon(){
x = document.getElementsByTagName('span')
for(y=0;y<x.length;y++){
var oldHTML = x[y].innerHTML;
if ((x[y].style.color=="rgb(250, 5, 47)")||(x[y].style.color=="#ff052f")) {icon = "<img src='http://i.imgur.com/FgLCOqF.gif'>";x[y].innerHTML = icon + oldHTML;}
}
}
Rankicon();