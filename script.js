console.log("Snack Array e Oggetti")

/* Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

 // Creo array di oggetti
 const bici = [
     bici1 = {
         nome: 'BMX',
         kg: 10
     },

     bici2 = {
         nome: 'Cargo bike',
         kg: 7,
     },

     bici3 = {
         nome: 'Bici da corsa',
         kg: 5,
     },

     bici4 = {
         nome: 'Gravel bike',
         kg: 12,
     },

     bici5 = {
         nome: 'Tandem',
         kg: 20,
     },

     bici6 = {
         nome: 'Mountain bike',
         kg: 15,
     },

 ]

//  console.log (bici)

// creo costante
const kgBici = bici [0];

// ciclo for per stabilire peso inferiore
for (let i = 1; i < bici.length; i++) {
    if (bici[i].kg < kgBici.kg) {
        kgBici == bici[i]
    }
}

console.log (`La bici ${kgBici.nome} è la più leggera e pesa ${kgBici.kg} kg`)

// PROVA
// const bici = {
//     nome: 'Mountain Bike',
//     kg: 6
// }
// console.log (bici.kg)






