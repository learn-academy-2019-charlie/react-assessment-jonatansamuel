// React Assessments

// 1. Write a simple React component that simply prints "I am a component" to the screen. Be sure to include all necessary imports, exports, etc...

// import React, {Component} from 'react';
// class Display extends Component {
//       render (){
//         return (
//           <div>
//           <h1>I AM A COMPONENT</h1>
//           );
//       }
// }

// export default Display;


// 2. Practice With Loops: In React, we often use the map function to iterate over an array held in state. To get more practice with this, write a vanilla javascript for loop that outputs the same thing as the map function below. 


var stuffArray = [42, "Arthur Dent", 1978, "Zaphod", "Vogon", "Marvin, the Paranoid Android"]
for (let i = 0; i<stuffArray.length; i++)
stuffArray.map(function(el, i){
  console.log([i] + " is at index: " + i)
})

// your for loop here, you can use the same stuffArray array
var stuffArray = [42, "Arthur Dent", 1978, "Zaphod", "Vogon", "Marvin, the Paranoid Android"]
for (let i = 0; i<stuffArray.length; i++)
stuffArray.map(function(el, i){
  console.log([i] + " is at index: " + i)
})

// 3. Basic sorting: Find the cheapest price -- you are given a list of prices and need to find the signle lowest price from the array. Write a function that takes in an array of numbers, and returns the lowest price

var steal = function(){

  // your logic here
Array.min = function (steal){
  return Math.min.apply ( Math, array );
};
var minimum = Array.min(steal);
  
}
