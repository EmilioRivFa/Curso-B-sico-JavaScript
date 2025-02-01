/* Arreglos*/
var nombres = ['Emilio', 'Carlos', 'Ana', 'luis']
var vegetales = new Array('Toamte','lechuga', 'Zanahoria');
/*
console.log(nombres[3]);
console.log(vegetales[1]);

nombres[0] = 'JOse',
vegetales[2] = 'Nabo';

console.log(nombres[0]);
console.log(vegetales[2]);

console.log(nombres.length);
for(var i = 0; i<= nombres.length + 1; i++){
    console.log(nombres[i])
}
vegetales.forEach(function(elemento, fun){
    console.log(elemento, fun)
})
*/
//Imprime el arreglo
console.log(nombres);

// Agrega y imprime un nuevo dato al final del arreglo
nombres.push('pedro');
console.log(nombres);

// Agrega y imprime un nuevo dato al principio del arreglo
nombres.unshift('lili');
console.log(nombres);

// Elimina el ultimo dato del arreglo
nombres.pop();
console.log(nombres);

// Elimina el primer dato del arreglo
nombres.shift();
console.log(nombres);


// Saber el indice de los elementos

var pos = nombres.indexOf('Carlos');
console.log(pos);

//Elimina cualquier elemento de cualquier posicion

nombres .splice(1, 2);
console.log(nombres);