// let num = 12;

// if(num > 5) {
//     console.log('Bigger than 5');
//     if(num <= 47){
//         console.log('Betwenn 5 and 47');
//     }
// }

// let age= 17;
// if(age <= 19) {
//     console.log("Take your kindle");
// }

// let score = 98;

// if(score >=100){
//     console.log("Niveau complété :D");
// } else {
//     console.log("essais encore :'(");
// }

// // let color = "green";

// // if (color == "red") {
// //     console.log("1");
// // } else if (color == "green") {
// //     console.log("2");
// // } else (color == "black") {
// //     console.log("3");
// // }

// let color = 'red';
// if (color == 'red'){
//     console.log("1");
// } else if (color == 'green'){
//     console.log('2');
// } else if (color == "black"){
//     console.log('3');
// } else (
//     console.log('unknown')
// )

// let choice = 3;

// switch(choice){
//     case 1://match
//         console.log("Sports");
//         break;
//     case 2:
//         console.log("Business");
//         break;
//     case 3:
//         console.log("Technology");
//         break;
// }

// firstArr = {};
// secondArr = firstArr;

// let coffee = 2;

// switch(coffee){
//     case 1: 
//         console.log("Americano");
//         break;
        
//     case 2: 
//         console.log("Espresso");
//         break;

//     case 3: 
//         console.log("Cappuccino");
//         break;
//     default: 
//      console.log("Unknown")
// }

// let user = {
//     name:"John",
//     age:30
// };


// let j = 5;
// while (j >= 0) {
//     console.log(j);
//     j--;
// }


// for (i = 1; i<5; i++){
//     if(i == 3){
//         break;
//     }
//     console.log(i);
// }

// let sum = 0;
// for(let i=1; i<=3; i++){
//     if (i == 2) {
//         continue;
//     }
//     console.log(i);
//     sum += i;
// }
// console.log(sum);

// let num = 1;

// for (i = 1; i <= 100; i++){
//     num*=i;
//     if(num >  10000){
//         break;
//     }
// }

// console.log(num);

let operation = '+';
let value1 = 4;
let value2 = 7;
function basicOp(operation, value1, value2){
  let calcul = (value1 + operation + value2);
  console.log(calcul);
}

var cuboid = {
  length : 25,
  width : 50,
  height : 200
};

var volume = cuboid.length * cuboid.width * cuboid.height;
document.write(volume);

let operation = "+";
let value1 = 4;
let value2 = 5;
function basicOp(operation, value1, value2){
  let calc = value1 + operation + value2;
  console.log(calc);
}