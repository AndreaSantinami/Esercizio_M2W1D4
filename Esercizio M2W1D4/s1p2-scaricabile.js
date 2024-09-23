/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*  In JavaScript, immaginiamo ogni cosa come una "scatola" dove possiamo mettere diversi tipi di oggetti. Ogni "scatola" ha una funzione diversa,  a seconda di quello che ci mettiamo dentro, la scatola si comporterà in un certo modo. 
    1. Numero (Number)
        I numeri possono essere sia interi che con la virgola 
    2. Testo o Stringa (String)
        Serve per mettere parole, frasi o lettere. Se vuoi scrivere il tuo nome o un messaggio, lo metti in una stringa. Le stringhe sono sempre racchiuse tra virgolette.
    3. Vero o Falso (Boolean)
        Può contenere solo due risposte: vero o falso. Serve per prendere decisioni. 
    4. Null (Null)
        Questa è una “scatola” che è vuota di proposito. 
    5. Undefined
        Questa è una “scatola” che non è stata ancora usata. 
    6. Oggetto (Object)
        È un grande contenitore dove puoi mettere diverse cose insieme. Può contenere numeri, stringhe, altri oggetti.
    7. Array (Array)
        Un array può contenere più cose ordinate in fila, come una lista.  */

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* È un grande contenitore dove puoi mettere diverse cose insieme. Può contenere numeri, stringhe, altri oggetti. */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* let numero_uno = 12;
   let numero_due = 20;
   let somma= numero_uno + numero_due ;*/

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* let x = 12 */

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* let name = "Andrea" */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* let x = 12;
   let risultato = 4 - x;
   console.log(risultato); */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* 
    let name1 = john ; 
    let name2 = John ; 

    console.log(name1 !== name2);  Output: true

    Verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase
    console.log(name1 === name2.toLowerCase()); Output: true
*/
