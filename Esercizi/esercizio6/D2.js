/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 30;
let num2 = 20;
let maggiore;
if(num1 < num2) {
  maggiore = num2;
}else {
  maggiore = num1;
}
console.log("il maggiore tra " + num1 + " e " + num2 + " è " + maggiore);


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
num1=7;
if(num1!=5){
  console.log("not equal");
}


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
num1=30;
if(num1%5==0){
  console.log("divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
num1=16;
num2=8;
if(num1==8){
  console.log("il primo numero è uguale a 8");
}
if(num2==8){
  console.log("il secondo numero è uguale a 8");
}
if(num1+num2==8){
  console.log("la somma tra " + num1 + " e " + num2 + " è uguale a 8");
}
if(num1-num2==8){  
  console.log("la differenza tra " + num1 + " e " + num2 + " è uguale a 8");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 40;
let spedizione = 10;
const limiteSpedizione = 50;

if(totalShoppingCart > limiteSpedizione){
  spedizione = 0;
  console.log("la spedizione è gratuita");
}
  let totaleCheckout = totalShoppingCart + spedizione;
  console.log("il totale del checkout è " + totaleCheckout)

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const sconto = 0.2;
totaleCheckout = totaleCheckout - (totaleCheckout * sconto);
  console.log("il totale del checkout con lo sconto del black friday è " + totaleCheckout);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
num1 = 80
num2 = 40
let num3 = 70
let appoggio
if(num1 < num2){
  appoggio = num2;
  num2 = num1;
  num1 = appoggio;
}
if(num2 < num3){
  appoggio = num3;
  num3 = num2;
  num2 = appoggio;
}
if(num1 < num2){
  appoggio = num2;
  num2 = num1;
  num1 = appoggio;
}
console.log(num1,num2,num3);
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let valore = 3;
if(typeof valore === "number"){
  console.log("il valore inserito è un numero");
}else{
    console.log("il valore inserito non è un numero");
}

 

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
num1=30;
if(num1%2==0){
  console.log(num1 + " è pari");
}else{
   console.log(num1 + " è dispari");
}


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
 let val = 10
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = "Toronto"
console.log(me.city)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName
console.log(me.lastName)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.skills[2];
console.log(me.skills[2]);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numeri = [];
numeri[0] = 1;
numeri[1] = 2;
numeri[2] = 3;
numeri[3] = 4;
numeri[4] = 5;
numeri[5] = 6;
numeri[6] = 7;
numeri[7] = 8;
numeri[8] = 9;
numeri[9] = 10;
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
numeri[9] = 100;