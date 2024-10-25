console.log("Snack Array e Oggetti")

/* Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

 // Creo array di oggetti
 const bici = [
     {
         nome: 'BMX',
         kg: 10
     },

     {
         nome: 'Cargo bike',
         kg: 7,
     },

     {
         nome: 'Bici da corsa',
         kg: 5,
     },

     {
         nome: 'Gravel bike',
         kg: 12,
     },

     {
         nome: 'Tandem',
         kg: 20,
     },

     {
         nome: 'Mountain bike',
         kg: 15,
     }

 ]

// RISULTATO FINALE -> BICI DA CORSA 5kg

// Ciclo per scorrere tutto l'array
// Condizione che verifichi il peso inferiore

let biciLeggera = bici[0]

for (let i = 0; i < bici.length; i++) {
    // console.log (i)
    const elementoCorrente = bici[i]
    // console.log (elementoCorrente)
    if (elementoCorrente.kg < biciLeggera.kg) {
       biciLeggera = elementoCorrente 
    }
}

console.log (biciLeggera)
//  console.log (bici)


/* Snack2
Creare un array di oggetti di squadre di calcio.
 Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

// creare array di oggetti
//  - proprietà: nome, punti fatti, falli subiti (tutte a 0 tranne nome)
 const squadre = [
    {
        nome: 'Inter',
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: 'Milan',
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: 'Juve',
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: 'Roma',
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: 'Atalanta',
        puntiFatti: 0,
        falliSubiti: 0
    }

 ]

//  console.log (squadre)

// creo ciclo for per assegnare numeri random

const datiSquadra = []

for (let i = 0; i < squadre.length; i++) {
  const totSquadre = squadre[i]
  totSquadre.puntiFatti = (Math.floor(Math.random()*50)+1)
  totSquadre.falliSubiti = (Math.floor(Math.random()*50)+1)

  console.log (totSquadre)
  console.log("Punti fatti:",totSquadre.puntiFatti)
  console.log("Falli subiti:",totSquadre.falliSubiti)

  datiSquadra.push(totSquadre.nome)
  datiSquadra.push(totSquadre.falliSubiti)

// stampo nome e falli subiti
  console.log("Nome e falli subiti:",datiSquadra)
}




