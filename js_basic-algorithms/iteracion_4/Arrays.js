//1.1 consigue el valor "HULK" del aqrray de caqrs y muestralo por consola
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);

//1.2 Cambia el primer elemento de avengers a "IRONMAN"
avengers['0'] = "IRON MAN";
console.log(avengers);

//1.3 alert numero de elementos en el array usando la propiedad correcta de Array
console.log(avengers.length);

//1.4 Añade 2 elementos al array: "Morty" y "Summer"
//Muestra en consola el último personaje del array
avengers.push("Morty");
avengers.push("Summer");
console.log(avengers[avengers.length]);

//1.5 Elimina el último elemento del array y muestra el primero y último por consola
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz"];
rickAndMortyCharacters.pop();
console.log(rickAndMortyCharacters[0], rickAndMortyCharacters[rickAndMortyCharacters.length-1])

//1.6 Elimina el segundo elemento del array y muestra el array por consola
avengers.splice(1,1);
console.log(avengers);
