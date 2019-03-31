// A Puedes contar cuantas letras tiene tu nombre?
var myName="Albert";
console.log(myName.length);

//B Anade tu apellido e indica en que posiión del string empieza:
myName="Albert Fuente";
console.log(myName.indexOf("F"));

//C Ahora con tu apellido y nombre en la misma variable, muestra sole el nombre:
console.log(myName.slice(0,6));

//D Ahora, solo tu apellido
console.log(myName.slice(7,));

//D1 Iguala el resultado a auna variable nueva e imprimela por pantalla
var myFirstString="Albert Fuente";
var myNewString=myName.slice(7,);
console.log((myFirstString+", " + myNewString));

// E Ahora, reemplaza tu nombre por "Mr/Ms" y vuelve a mostrar la variable ocn los camios,
var myNewString="Mr " + myName.slice(7,);
console.log(("Hello " + myNewString));

//F Selecciona tu apellido y transformalo a MAYUSCULAS
var apellido=(myName.slice(7,));
console.log(apellido.toUpperCase());

//G Ahora declara una variable nueva e igualala a la anterior variable sumándole,además, un mensaje
var something=(myFirstString+" is awesome");
console.log((something));

//H Ahora, puedes seleccionar la inicial de tu nombre y apellido y mostrarlas por pantalla
console.log(myName.slice(0,1)+myName.slice(7,8));

//A Declara tu nombre completo en una array y muéstralo por pantalla separando cada letra por "/"
console.log(myName.toUpperCase().split("").join("/"));

//B Ahora solo selecciona tu apellido y muestra cada letra separada por "|"
console.log(myName.slice(7,).toUpperCase().split("").join("|"));

//C Ahora muestra cada letra de tu nombre con su posiciónote
for(var i=0;i<myName.slice(0,6).length;i++){
  console.log(i+1+"# "+myName[i]);
}

//D Como en el ejercicio anterior, pero seleccionando tu apellido
for(var i=0;i<myName.length;i++){
  if(i>myName.indexOf("F")-1){
      console.log(i+1+"# "+myName[i]);
  }
}

//E PUedes indicarme las iniciales de tu nombre y apellido?
var myInitials=(myName.slice(0,1)+myName.slice(7,8));
console.log(myInitials);

//F Ahora, reformula la array, introduciendo tu nombre en primera posición, tu apellido en segunda, y además añade en otra posicion tu edad. Muestra por pantalla solo tu nombre y tu edad en un solo mensaje.
var mySelector=["Albert","Fuente",31];
console.log(`My name is ${mySelector[0]} and I'm ${mySelector[2]} years old`);

//G Prepara una función para ñadir tu City a la array, muestra un mensaje mostrando el contenido de toda la array, así aseguraremos los cambios
function addCity(city){
  mySelector.push(city);
}
addCity("Vic");
console.log(mySelector);

//H Crea ahora, una función para eliminar la variable City y asegura los cambios
function myCityDelete(){
  mySelector.pop();
}
myCityDelete();
console.log(mySelector);

//J Ahora, elimina el nombre y asegura los cambios
mySelector.shift();
console.log(mySelector);

//K Quiere volver a introducir mi nombre pero si lo introduzco utilizando push() estará en la última posición, como podria hacer para introducirlo en la primera posición?
mySelector.unshift("Albert");
console.log(mySelector);

//I Ahora, declara una array con los números del 0 a 10 y muestra cad número multiplicado por dos
var numbers=[0,1,2,3,4,5,6,7,8,9,10];
var multiplyByTwo=numbers.map(number=>{
  return number*2;
})
console.log(multiplyByTwo);

//I1 Reformula la función para  que puedas especificar por cula número debería multiplicar cada elemento de la array
var num=3;
var multiplyByThree=numbers.map(number=>{
  return number*num;
})
console.log(multiplyByThree);

//M Podrias mostrarlos en el orden inverso?
console.log(numbers.reverse());

//N Puedes indicarme que letras se repiten de tu nombre y cuantas veces?
//H1 PAhora muestra por consola que letras NO se repiten y muestra tu nombre sin esas letras

//A Que hora es?
var myHour=10.45;
var myHourString=myHour.toString();
console.log(`It is ${myHour} of morning`);

//B Nono, que hora exactamente? Sin minutos
var onlyHour=myHourString.slice(0,2);
console.log(`It is around ${onlyHour} of morning`);

//C Ahora, declara tu hora y muestrala redondeada
var myHour=9.45;
var roundHour=Math.round(myHour);
console.log(roundHour);

//D Hagamos una calculadora. Primero, la suma.Crea variables con valores distintos y súmalos
var x=7;
var y=3;
console.log(`The sume of ${x} + ${y} is ${x+y}`)
var sum=(`The sume of ${x} + ${y} is ${x+y}`).toString();

// D1 Añade la resta..
console.log(sum+ " and "+ (x-y));

//D1 Añade la multiplicación...
console.log(sum+ " and "+ (x*y));

//D3 Y por ultimo la división...
console.log(sum+ " and "+ (x/y));

//D4 Ahora intenta multiplicar un número por una string, que devuelve?===> NAN
console.log(sum*(x));

//E Podemos controlar este error con un condicional if?
if(sum*(x)){
  console.log("you can't do this operation!");
}
