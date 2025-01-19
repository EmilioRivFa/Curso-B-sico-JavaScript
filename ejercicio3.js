/*Desafío #3
Hay dos equipos de gimnasia: delfines y koalas. Compiten entre sí tres veces. 
¡El ganador con la puntuación media más alta gana un trofeo!

Tus tareas:
1. Calcule la puntuación media de cada equipo, utilizando los datos de prueba 
incluidos a continuación. La puntuación media de los delfines debe asignarse a 
la scoreDolphins variable,y la puntuación media de los koalas debe asignarse a 
la scoreKoalasvariable.
2. Compara los puntajes promedio del equipo para determinar el ganador 
de la competencia e imprime en la consola:
"Dolphins win the trophy"Si los Dolphins ganan, o
"Koalas win the trophy"Si los koalas ganan, o
"Both win the trophy"si sus puntuaciones medias son iguales.
DATOS DE LA PRUEBA: Los delfines obtuvieron 96, 108 y 89 puntos. 
Los koalas obtuvieron 88, 91 y 110 puntos.*/
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if(scoreDolphins > scoreKoalas) {
    console.log('delfines ganaron');
}else if(scoreDolphins < scoreKoalas){
    console.log('koalas ganaron');
}else if(scoreDolphins === scoreKoalas){
    console.log('ninguno gana');
}


