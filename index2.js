//Sentencia if...else

var nombre = 'Emilio';
var esCasado = false;
var edad = 15;

if(esCasado == true){
    console.log(nombre + ' es casado');

}else{
    console.log(nombre + ' es soltero');


}

if (edad<12){
    console.log(nombre + ' es un niño');
}else if ((edad > 11) && (edad < 18)){
    console.log(nombre + ' es un adolescente');
}else if((edad > 17) && (edad < 60)){
    console.log(nombre + ' es un adulto');
}else{
    console.log(nombre + ' es un anciano');
}


var mes = 3;

switch(mes){
    case 1:
        console.log('Enero');
        break;
    case 2:
        console.log('febrero');
        break;
    case 3:
        console.log('marzo');
        break;
    case 4:
        console.log('abril');
        break;
    case 5:
        console.log('mayo'); 
        break;
    default:
        console.log('Mes no encontrado')
}