///////////////////////////////////////Array numeri interi, sommo solo quelli in posizione pari.
var array = [1,2,3,4,5,6,7,8,9,0];
var somma = 0;

for (var i = 0; i < array.length; i++) {
  var check = i%2;
  if (check != 0) {
    somma += array[i];
  }
}

console.log(somma);


/////////////////////////////////////////////////////////////////Con funzione
//
// function sommaDispari() {
//   var array = [1,2,3,4,5,6,7,8,9,0];
//   var somma = 0;
//
//   for (var i = 0; i < array.length; i++) {
//     var check = i%2;
//     if (check != 0) {
//       somma += array[i];
//     }
//   }
//   return somma;
// }
//
// console.log(sommaDispari());
