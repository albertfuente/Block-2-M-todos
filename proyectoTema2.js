var flights = [
    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },
    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
];
var finalCost=[];
var averageCost="";

function startAirlines(){
  //Bienvenida
  var user=prompt("enter a name:");
  alert("Welcome to Skylab Airlines " + user);

  //Visualización de todos los vuelos:
  //array a 0 para los costes:
  // var finalCost=[];
  //array de destinos:
  var destinations=[];
  //for para buscar cada id
  for(var i=0;i<flights.length;i++){

    var escalas="";
    if(flights[i].scale===true){
      escalas=("y tiene escalas.");
    }else if(flights[i].scale===false){
      escalas=("y no realiza ninguna escala.");
    }else{
      console.log("error");
    }
    console.log(`El vuelo con origen: ${flights[i].from}, y destino: ${flights[i].to} tiene un coste de ${flights[i].cost} € y ${escalas}`);
    //coste vuelos, se guardan en el array final Cost para todos los costes, cambiando el string por integer:
    costOne=Number(flights[i].cost);
    finalCost.push(costOne);
    //destinaciones, se guardan en el array destinations para todos los vuelos
    destination=(flights[i].to);
    destinations.push(destination);
  }
  //Coste medio de vuelos del array finalCost:
  //
  var total=0;
  for(var i in finalCost) { total += finalCost[i]; }
  console.log("This is the total cost of all flights: "+total+"€");
  averageCost= total/(flights.length);
  console.log("This is the average cost of all flight: "+Math.round(averageCost)+"€");

  //Destinos de los últmos 5 vuelos:
  console.log("Los últimos destinos de hoy són: "+ destinations.slice(-5,));
}

startAirlines();


// PRO
var user=prompt("Por favor seleccione el usuario: ADMIN o USER");
//Si eres ADMIN
if(user==="ADMIN"){
  //funcion para crear vuelos mediante un objeto constructor
  function createFlight(){
    if(flights.length<=15){
      const factory=(id,to,from,cost,scale)=>{
        return{
          id,
          to,
          from,
          cost,
          scale,
          }
      }
      var id1=prompt("Crea un id:");
      var to1=prompt("Crea un destino:");
      var from1=prompt("Crea un aeropuerto de salida:");
      var cost1=prompt("Coste:");
      var scale1=prompt("Selecciona escala: true o false");

      const newFlight=factory(id1,to1,from1,cost1,scale1);
      console.log(newFlight);
      flights.push(newFlight);

    }else{
      console.log("Alerta has llegado al maximo de vuelos");
    }
  }
  //Poder eliminar vuelos mediante ID
  function eliminateFlights(){
    var eliminate=prompt("Quieres eliminar un vuelo: si / no");
    if(eliminate==="si"){
      var eliminateFlight=prompt("que ID quieres eliminar?");
      eliminateFlight=Number(eliminateFlight);

      for(var i=0;i<flights.length;i++){
        if(flights[i].id===eliminateFlight){
          delete flights[i];
        }else{
          console.log("id no es definida");
        }
      }
      console.log(flights);
    }else if(eliminate==="no"){
      console.log("no hay vuelos eliminados");
    }else{
      console.log("error");
    }
  }
  //do while loop para parar el array nuevo cuando hemos llegado a 15 vuelos
  do{
    createFlight();
  }while(flights.length<=15);
  console.log(flights);
  //call la función para eliminar vuelos
  eliminateFlights();




// Si eres USER:
}else if(user==="USER"){
  var search=prompt("Por favor seleccione busqueda de precio: ALTO IGUAL BAJO");
  if(search==="ALTO"){
    console.log("Este es el coste maximo: "+Math.max(...finalCost));
  }else if(search==="IGUAL"){
    console.log("Este es el coste medio: "+averageCost);
  }else if(search==="BAJO"){
    console.log("Este es el coste minimo: "+Math.min(...finalCost));
  }else{
    console.log("error");
  }
  console.log("Gracias por su compra, vuelva pronto");

}
