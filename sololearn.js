//Premières notion de JS via Sololearn
//Cool, encore des trucs que je connait -_-
console.log("ça va la vie ?");
//alert("Ceci est une alerte, tu ferais mieux de la quitter");
console.log((60*60)*(24*30));

// let sum = 0;
// while(true) {
//     let value = +prompt("Entrez un nombre", '');
//     if(!value)break; //(*)

//     sum += value;
// }

// alert('Sum: ' + sum);

let name; 
name = "James";
let age = 42;
age = 50;
console.log(age)

// const dimanche = "weekend";
// console.log(dimanche);
// dimanche = travail; //Celà créera un message d'erreur.

let x = 54;
let y = 9;
let z = 1/2;
console.log(y**z)
// console.log(x*y);
// console.log(x/y);

let isActive = true;
let isHoliday = false;


function showMessage(){
    alert("Bonjour l'univers")
}
showMessage();

let count = 0;
count++; //Ici, count++ est le raccourcie de count = count+1
count--;
console.log(count)

let v = 10;
console.log(--v);
// console.log(v);
let items = 200;
let distrib = 7;
console.log(items % distrib);
let num = 5;

// let a = 5, b = 6, c = 8;

let score = 100;
score = score + 10;
console.log(score);

let quinze = 10;
quinze += 5; // quinze = quinze + 5;
quinze -= 5; // quinze = quinze - 5;
quinze *= 5; // quinze = quinze * 5;
quinze /= 5; // quinze = quinze / 5;
quinze %= 5; // quinze = quinze % 5;
console.log(quinze) 

let d = 8;
d++;
d/=3;
console.log(d);

let price = 50;
let rate = 1.2;
price *= rate;
console.log(price)

let balance = 416500;
let withdraw = 160000;
balance -= withdraw;
console.log(balance);
//Un callback est une fonction de rappelle

let six = 5;
six++;
console.log(six);

let surname = "John";
let text = `Bienvenue ${surname}`;
console.log(text);

//Qu'est ce que l'orienté Objet ?

console.log("Welcome, " + surname + "!");
console.log(`Welcome, ${surname}!`);

console.log('I\'ll be back');

let e = 3;
let f = e;

let user = {            //Un objet
    nom: "John",        //Par clé "nom" valeur de stockage "John"
    age: 30,            //Par clé "age" valeur de stockage 30
    boulot: "Serveur en restauration"
};
console.log(user.boulot);

let fruit = prompt("Quel fruit acheter ?", "Des fraises");
let panier = {
    [fruit]: 5,
};
alert(panier.fruit);