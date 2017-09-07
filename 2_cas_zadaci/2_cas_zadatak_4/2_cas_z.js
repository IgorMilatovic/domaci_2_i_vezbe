//resenje 1
do {
var racun = prompt("stanje vaseg racuna");
var cena = prompt("cena proizvoda");
}
while (isNaN(racun) || isNaN(cena) || racun.length == 0 || cena.length == 0);

var ostatak = racun % cena;
var komada = (racun - ostatak) / cena;

console.log("mozete kupiti " + komada + " komada proizvoda i ostaje vam jos " + ostatak + " dinara na racunu");


// //resenje 2 (za zadate vrednosti)
// while (x=325) {
// 	var z = 325%14;
// 	var y = (x-z)/14;
// 	break;
// } 

// console.log("mozete kupiti " + y + " komada proizvoda i ostaje vam jos " + z + " dinara na racunu");






	


