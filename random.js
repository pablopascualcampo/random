// Math.ramdom() devuelve número aleatorio entre 0 y 1.
var numero = Math.random();

var str = "Mayor que 0.5";

if(numero <= 0.5){
	str = "Menor que 0.5";
}

console.log('\n' + numero + str + '\n');