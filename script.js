// function Sayhello(){
//     let you = prompt("what is your name ? ");
//     console.log("hello",you + "!");
// }
// Sayhello();

//------------------------------------------------------

// let varContainingFunction=function(){
//     let varInFunction="I'm in a function.";
//     console.log("Hi there!",varInFunction);
// };
// varContainingFunction();

//------------------------------------------------------

// function tester(para1, para2){
//     return para1 + " " + para2;
// }
// const arg1 = "argument 1";
// const arg2 = "argument 2"
// tester(arg1, arg2);

//--------------------------------------------------------------------------

// class Area {
//     int length;
//     int breadth;
//     Area()
//     {
//         System.out.println("Welcome to the area class");
//     }
//     Area(int x,int y){
//         this.length=x;
//         this.length=y;
//     }
//     void calculate()
//     {
//         System.out.println("Area="+length*breadth);
//     }
// }
// class Calculation
// {
//     public static void main(String args[])
//     {
//         Area a1= new Area();
//         Area a2= new Area(7,8);
//           a1.calculate();
//           a2.calculate();
//     }
// }


// function myFunc(para1,para2){
//     return para1 + "" + para2
// }
// const arg1 = "argument 1";
// const arg2 = "argument 2";
// console.log(tester(arg1,arg2));



// function addTwoNumbers(x,y){
// console.log(x+y)
// }


// function addTwoNumbers(x=2,y=3){
//     console.log(x+y);
// }
// addTwoNumbers();
// addTwoNumbers(6,6);
// addTwoNumbers(10);



//                               Special Functions 




// function doingStuff(x){
//     console.lohg(x)
// }


// const doingStuff = (x) => {
//     console.log(x);
//   };
  


// let addTwoNumbers = (x+y) => console.log(x+y);


// const arr = ["squirrel", "alpscs", "buddy"];
// arr.forEach(e => console.log(e));




//                           Spread Operator  [ used in the function invoke ]


// let spread = ["so", "much", "fun"];
// let message = ["javascript", "is", ...spread.push.apply.spread, "and", "very", "powerful"];
// console.log(message);


// function addTwoNumbers(x,y){
//     console.log(x+y);
// }
// let arr[5,9];
// addTwoNumbers(...arr);


// function addFourNumbers(x,y){
//     console.log(x+y);
// }
// let arr[5,9];
// let arr2[6,7];
// addFourNumbers(...arr, ...arr2);




//             Rest parameter [ used in function spreding ]


// function someFunction(para1, ...para2){
//     console.log(para1, para2);
// }
// console.log("Hi","there","How are you ?");






//       Returning Function Values   


// let result  addTwoNumbers(4,5);
// console.log(result);



// let resultsArr = [];
// for (let i=0; i<10; i++){
//     let result = addTwoNumbers(i, 2*i);
//     resultsArr.push(result);
// }
// console.log(resultsArr);

                        // Returning with arrow functions



// let addTwonumbers = (x,y) => x+y;
// let result = addTwonumbers(12,15);
// console.log(result)


                    //    Variable scope in function     // 

// function testAvailability(x){
//     console.log("Available here: ",x);
// }
// testAvailability("Hi");
// console.log("Not Available here: ",x);



// function testAvailability(){
//     let y = "Local variable";
//     console.log("Availability here: ",y);
//     return y;
// }
// let z = testAvailability();
// console.log("Outside the function: ",z);
// console.log("Able here: ",y)

// function doingStuff(){
//     if(true){
//         console.log(x);
//         let x = *local;
//     }
//     ImageTrack(

//     )
// }



// function doingStuff(){
//     if(true){
//         console.log(x);
//         var x = "local"

//     }
// }



// function doingStuff(){
//     if(true){
//         console.log(x);
//         const x = "local"

//     }
// }


// let globalVar = "Accessible everywhere!";
// console.log("Outside function: ",globalVar);
// function creatingNewScope(x){
//     console.log("Access to global vars inside function",globalVar);
// }


// let x ="Global";
// function doingStuff(){
//     let x = "local";
//     console.log(x);
// }
// doingStuff();
// console.log(x);
//doingstuff("Param");







//   11/04/2025

//  IIFE { Immediately invoked function expression }





// (function(){
//     console.log("IIFE");
// })();


// (()=>{
// console.log("Run right away");
// })();


//   Recursive  function 


// function getRecursive(nr){
//     console.log(nr);
//     getRecursive(--nr);
// }
// getRecursive(3);



// function getRecursive(nr){
//     console.log(nr);
//     if(nr > 0){
//         getRecursive(--nr);
//     }
// }
// getRecursive(3);



// function logRecursive(nr){
//     console.log("Started function: ",nr);
//     if(nr>0){
//         logRecursive(nr-1);
//     }
//     else{
//         console.log("Done with recursion");
//     }
//     console.log("Ended functioon: ",nr);
// }
// logRecursive(3);

// The performance of the recursion is slightly worse than the performance of regular iteration using a loop. so if this causes a bottleneck situation that will really slow 



// function doOuterFunctionStuff(nr){
//     console.log("Outer Function");
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x){
//         console.log(x+7);
//         console.log("I acn access outer variables: ",nr);
//     }
// }



// function doOuterFunctionStuff(nr){
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x){
//     let z =10;
// }                                                      //  This shows error
// }
// doInnerFunctionStuff(3);



//  Anonymous Functions  

// let functionVariable = function(){
//     console.log("Not so secret though.");
// };



// Function callbacks
// callbacks  : when the function pass  an argument inside the another function.

// let functionVariable = function(){
//     console.log("Not so secret though.");
// };
// function doFlexibbleStuff(executesStuff){
//     executesStuff();
//     console.log("Inside doFlexibleStuffFunction.");
// }
// doFlexibbleStuff(funnctionVariables);



// let youGotThis = function(){
//     console.log("You are doing really well, keep coding!");
// };
// setTimeout(youGotThis, 1000);
// //it is going to wait  for 1000ms(1 second) and the print.


//  let youGotThis = function(){
//     console.log("You are doing really well, keep coding!");
//     };
//     setTimeout(youGotThis, 1000);
//     setInterval(youGotThis,1000);


// let val = 10;
// function tester(val){
//     val += 10;
//     if(val<100){
//         return tester(val);
//     }
//     return val;
// }
// tester(val);
// console.log(val);



// let testFunction = function(){
//     console.log("Hello");
// }();



// (function (){
//     console.log("Welcome");
// })();
// (function(){
//     let firstname = "Lokendra";
// })();
// let result = (function (){
//     let firstname = "Lokendra";
//     return firstname;
// })();
// console.log(result);
// (function(firstname){
//     console.log("My Name is " + firstname);
// })("Lokendra");



// let test2 = (num) => num+5;
// console.log(test2(14));

var addFive1 = function addFive1(num){
    return num+2;
};
let addFive2 = (num)=> num+2;
console.log(addFive1(14));