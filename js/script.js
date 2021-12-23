//funzione per generare 5 numeri random
function createRandomNumbers(min, max, nNumeri){
    let listNum=[];
    for(i=1; i<=nNumeri; i++){
        listNum.push(Math.floor(Math.random() * ((max + 1) - min)) + min);
    }

    return listNum;
}

//funzione per trasformare una lista in una stringa
function stamp(list){
    let stamp="";
    for(let i=0; i<list.length; i++){
        stamp+=`${list[i]} `;
    }
    return stamp;
}

//creo una funzione che riceverà come parametri
//una lista di numeri generati random e una lista
//di numeri inseriti dall'utente le confronterà e
//restiturà una lista di numeri matchati
function game(listRandom, listInseriti){
    const indovinati=[];
    for(i=0; i<listInseriti.length; i++){
        if(listRandom.includes(listInseriti[i])){
            indovinati.push(listInseriti[i]);
        }  
    }
    return indovinati;
}

const startGame=document.querySelector('.start');
const boxNum=document.querySelector('.box-text');

startGame.addEventListener('click', function (){
    boxNum.innerHTML="";
    //creo le strutture dati
    const listNumGenerati=createRandomNumbers(1, 100, 5);
    let listNumUtente=[];
    let listNumIndovinati=[];

    
    boxNum.innerHTML=stamp(listNumGenerati);
    

    setTimeout(async function () {
        boxNum.innerHTML="";

        //metto un piccolo intervallo di 10 ms altrimenti non
        //fa sparire i numeri da ricordare prima di chiedere
        //quelli ricordati
        await new Promise(r => setTimeout(r, 10));

        //chiedo al'utente di inserire 5 numeri
        for(i=1; i<=5; i++){
            const nInserito=parseInt(prompt("Inserisci un numero"));
            listNumUtente.push(nInserito);
        }

        //parte la funzione gioco
        listNumIndovinati=game(listNumGenerati, listNumUtente);

        //stampo la lista dei numeri indovinati
        boxNum.innerHTML=`Hai indovinato i numeri: ${stamp(listNumIndovinati)}`
        
    }, 10000)
})

