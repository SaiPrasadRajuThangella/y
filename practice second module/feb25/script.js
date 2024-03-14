// // // // // // // // // // // // // // // // // // // // // let  f1 = () => {
// // // // // // // // // // // // // // // // // // // // //     console.log(a);
// // // // // // // // // // // // // // // // // // // // //     let  f2 = () => {
// // // // // // // // // // // // // // // // // // // // //     console.log(a);
// // // // // // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // // // // // //     f2();
// // // // // // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // // // // // let a = 900;

// // // // // // // // // // // // // // // // // // // // let x = function  hi() {
// // // // // // // // // // // // // // // // // // // //   return 10;
// // // // // // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // // // // // console.log(x());

// // // // // // // // // // // // // // // // // // // var x = 180;

// // // // // // // // // // // // // // // // // // // function callme() {
// // // // // // // // // // // // // // // // // // //   console.log(x);    //    180
// // // // // // // // // // // // // // // // // // //   if (true) {
// // // // // // // // // // // // // // // // // // //     let a = 200;
// // // // // // // // // // // // // // // // // // //     var x = 1000;
// // // // // // // // // // // // // // // // // // //     console.log(a + x); //1200
// // // // // // // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // // // callme();
// // // // // // // // // // // // // // // // // // // console.log(x);

// // // // // // // // // // // // // // // // // // console.log(x)
// // // // // // // // // // // // // // // // // //  var x=20;
// // // // // // // // // // // // // // // // // // console.log(x)

// // // // // // // // // // // // // // // // // // function calculateMinCost() {
// // // // // // // // // // // // // // // // // //   let arr = [4, 2, 7, 6, 9];
// // // // // // // // // // // // // // // // // //   let i = 0;
// // // // // // // // // // // // // // // // // //   let smallest = arr[0];
// // // // // // // // // // // // // // // // // //   let newarr = [];

// // // // // // // // // // // // // // // // // //   for (i = 0; i < arr.length; i++) {
// // // // // // // // // // // // // // // // // //     if (arr[i] < smallest) {
// // // // // // // // // // // // // // // // // //       smallest = arr[i];

// // // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // // //     newarr.push(smallest);
// // // // // // // // // // // // // // // // // //     arr.pop(smallest);

// // // // // // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // // // // //   console.log(newarr);
// // // // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // // // calculateMinCost();
// // // // // // // // // // // // // // // // // let array = [4, 2, 1, 5, 3]; // Predefined array
// // // // // // // // // // // // // // // // // let anotherArray = [];

// // // // // // // // // // // // // // // // // while (array.length > 0) {
// // // // // // // // // // // // // // // // //     let smallest = array[0]; // Assume the first element is the smallest
// // // // // // // // // // // // // // // // //     let index = 0; // Keep track of the index of the smallest element

// // // // // // // // // // // // // // // // //     for (let i = 1; i < array.length; i++) {
// // // // // // // // // // // // // // // // //         if (array[i] < smallest) {
// // // // // // // // // // // // // // // // //             smallest = array[i];
// // // // // // // // // // // // // // // // //             index = i;
// // // // // // // // // // // // // // // // //         }
// // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // //     anotherArray.push(smallest); // Add the smallest element to another array
// // // // // // // // // // // // // // // // //     array.splice(index, 1); // Remove the smallest element from the original array
// // // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // // console.log(anotherArray); // Output: [1, 2, 3, 4, 5]

// // // // // // // // // // // // // // // // let subtract = function(a,b){
// // // // // // // // // // // // // // // //     return a-b;
// // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // let op = function(func){    //func= subtract

// // // // // // // // // // // // // // // //     let x = 2;
// // // // // // // // // // // // // // // //     let y = 3;
// // // // // // // // // // // // // // // //     return func(x,y);
// // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // console.log(op(subtract));

// // // // // // // // // // // // // // // function a(){

// // // // // // // // // // // // // // //     console.log("inside a");
// // // // // // // // // // // // // // //     function b(){
// // // // // // // // // // // // // // //         console.log("inside b");
// // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // //     return b;
// // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // a()();
// // // // // // // // // // // // // // // // inside a
// // // // // // // // // // // // // // let f = ['a','b','c','d']
// // // // // // // // // // // // // // f.slice(4,1,'x')
// // // // // // // // // // // // // // console.log(f);

// // // // // // // // // // // // // let numbers = [-23, 12, -17, 19, -20, 0, 1, -12, -5, 5, 20];
// // // // // // // // // // // // // let even = numbers.filter((value) => value % 2 == 0);
// // // // // // // // // // // // // console.log(even);

// // // // // // // // // // // // let words=['one','two','three','four'];

// // // // // // // // // // // // words.forEach(function(word){

// // // // // // // // // // // //     console.log(word);
// // // // // // // // // // // //     if(word==='two'){
// // // // // // // // // // // //         words.shift();
// // // // // // // // // // // //     }
// // // // // // // // // // // // })

// // // // // // // // // // // // Your Script here.

// // // // // // // // // // // // Your Script here.

// // // // // // // // // // // const lookup = {
// // // // // // // // // // //     A: "N",
// // // // // // // // // // //     B: "O",
// // // // // // // // // // //     C: "P",
// // // // // // // // // // //     D: "Q",
// // // // // // // // // // //     E: "R",
// // // // // // // // // // //     F: "S",
// // // // // // // // // // //     G: "T",
// // // // // // // // // // //     H: "U",
// // // // // // // // // // //     I: "V",
// // // // // // // // // // //     J: "W",
// // // // // // // // // // //     K: "X",
// // // // // // // // // // //     L: "Y",
// // // // // // // // // // //     M: "Z",
// // // // // // // // // // //     N: "A",
// // // // // // // // // // //     O: "B",
// // // // // // // // // // //     P: "C",
// // // // // // // // // // //     Q: "D",
// // // // // // // // // // //     R: "E",
// // // // // // // // // // //     S: "F",
// // // // // // // // // // //     T: "G",
// // // // // // // // // // //     U: "H",
// // // // // // // // // // //     V: "I",
// // // // // // // // // // //     W: "J",
// // // // // // // // // // //     X: "K",
// // // // // // // // // // //     Y: "L",
// // // // // // // // // // //     Z: "M",
// // // // // // // // // // //     "?": "?",
// // // // // // // // // // //     ",": ",",
// // // // // // // // // // //   };

// // // // // // // // // // //   function rot13(encodedStr) {
// // // // // // // // // // //     let decodedArr = []; // Your Result goes here
// // // // // // // // // // //     // Only change code below this line
// // // // // // // // // // //     function rot13(encodedStr) {
// // // // // // // // // // //         let decodedArr = [];
// // // // // // // // // // //         for (let i = 0; i < encodedStr.length; i++) {
// // // // // // // // // // //           const char = encodedStr[i];
// // // // // // // // // // //           if (lookup[char] !== undefined) {
// // // // // // // // // // //             decodedArr.push(lookup[char]);
// // // // // // // // // // //           } else {
// // // // // // // // // // //             decodedArr.push(char);
// // // // // // // // // // //           }
// // // // // // // // // // //         }
// // // // // // // // // // //         return decodedArr.join("");
// // // // // // // // // // //       }}

// // // // // // // // // // //   // You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// // // // // // // // // // //   // console.log(rot13("SERR YBIR? NPPVBWBO"));

// // // // // // // // // // //   // Do not change this line
// // // // // // // // // // //   window.rot13 = rot13;

// // // // // // // // // // // function sqSum(a) {
// // // // // // // // // // //   function square(x) {
// // // // // // // // // // //     return x * x;
// // // // // // // // // // //   }
// // // // // // // // // // //   return square(a);
// // // // // // // // // // // }
 
// // // // // // // // // // // let x = sqSum(10);
// // // // // // // // // // // console.log(x);
// // var a = 1;

// // function b()
// // {
// //     a=10;
    
// //     console.log(a)
// //     function a(){
        

// //     }
// // }
// // b();
// // console.log(a);


// // // // // // // // // var add= function(a,b){
// // // // // // // // //     return a+b;
// // // // // // // // // }

// // // // // // // // // var op = function(func){
// // // // // // // // //     var x = 2;
// // // // // // // // //     var y =3;
// // // // // // // // //     return func(x,y);
// // // // // // // // // // }
// // // // // // // // // // console.log(op(add))

// // // // // // // // // function test(a,b,c,d){
// // // // // // // // //     let res1=a*c;
// // // // // // // // //     let res2=b/d;
// // // // // // // // //     return res1%res2;
// // // // // // // // // }
// // // // // // // // // console.log(test(2,3,4,0));
// // // // // // // // let a= 10;
// // // // // // // // function test(){
// // // // // // // //     a=20;
// // // // // // // //     return;
// // // // // // // //     function a(){}
// // // // // // // // }
// // // // // // // // test();
// // // // // // // // console.log(a);


// // // // // // // let arr = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
// // // // // // // let regex = /\bthe\b|\ban\b|\ba\b/gi
// // // // // // // let articlelessarray =[];
// // // // // // // let mp={};
// // // // // // // for(let i in arr){
// // // // // // //     let articlelessitem=arr[i].replace(regex,"").trim();
// // // // // // //     articlelessarray.push(articlelessitem)
// // // // // // //     mp[articlelessitem]=arr[i];
// // // // // // // }

// // // // // // // articlelessarray.sort();

// // // // // // // let ans=[]
// // // // // // // for(let j=0;j<articlelessarray.length;j++){
// // // // // // //     ans.push(mp[articlelessarray[j]]);
// // // // // // // }

// // // // // // // console.log(ans);
// // // // // // // [5, 1, 2, 13, 4]
// // // // // //           i  

// // // function secondHighest(vrr) {
   
// // //                   //i
// // //     let a=vrr[0];//5
// // //     let b=vrr[1];//1

// // //     for(let i=2;i<vrr.length;i++){
// // //         let currentmax= a>b?a:b; //5
// // //         let currentmin= a<b?a:b; //1

// // //         if(currentmin< vrr[i]){
// // //             b=vrr[i]
// // //             a= currentmax               // cuurent min = 2,current max =5
// // //         }

    
// // //     }
// // //     return(a<b?a:b);
    
    
// // // }

// // // function Main() {
// // //     var n = prompt("Enter the number of elements");
// // //     var arr = [];
// // //     for (var i = 0; i < n; i++) {
// // //         arr[i] = prompt("Enter element " + (i+1));
// // //     }
// // //     alert(secondHighest(arr));
// // // }
// // // Main();
// function callme(){
//     console.log(this);
// }
// console.log(window.callme)

// let arr=[5,787,82,6,1,2,5]
// function reverse(arr) {
//     let k=arr.length;

//     for(let i=0;i<arr.length;i++){
//         let k=arr.length;
//         arr[i]=arr[k]
//         i++;
//         k--;
//     }
//     console.log(arr);
//     // return the reverse array
//    }
//    reverse(arr);
   /*Do not change the code below */
   
//    var readline = require("readline").createInterface(process.stdin);
   
//    let inputArr = [];
//    var lineNumber = -1;
//    var inputSize;
   
//    //multipleline input from User
//    readline.on("line", readInputs);
   
//    function readInputs(line) {
//      inputArr.push(line);
//      lineNumber++;
   
//      //Exit Condition
//      if (lineNumber == 0) {
//        logic("s");
//        readline.close();
//      }
//    }
   
//    function logic(input) {
//      let str = JSON.parse(inputArr[0].trim());
//      console.log(reverse(str).join(" ").trim());
//    }
   

function reverse(arr) {
    let k = arr.length - 1;
    for(let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[k];
        arr[k] = temp;
        k--;
    }
    return arr;
}

let arr = [5, 787, 82, 6, 1, 2, 5];
console.log(reverse(arr));


