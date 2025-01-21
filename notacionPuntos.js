/*1.-Usando el objeto de la tarea anterior , 
registra una cadena como esta en la consola: 
'Finlandia tiene 6 millones de personas que hablan finlandés,
 3 países vecinos y una capital llamada Helsinki'.

2.-Aumente la población del país en dos millones usando 
la notación de puntos y luego disminuyala en dos millones 
usando la notación de corchetes .
*/

const miPais = {
    pais : 'mexico',
    capital : 'cdmx',
    lenguaje : 'español',
    poblacion : '2,000,000',
    vecinos : ['estados_unidos', 'Canada', 'guatamela']
}
console.log(
    `${miPais.pais}tiene ${miPais.poblacion}de personas que hablan 
    ${miPais.lenguaje}tiene como vecinos a: ${miPais.vecinos}
    y una capital llamada ${miPais.capital}`);
    