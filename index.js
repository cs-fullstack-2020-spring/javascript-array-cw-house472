// // ### Exercise 1

// // - Create the following array ```["John", "Paul", "George", "Pete"]```
// let names=['John','Paul', 'George', 'Pete']
// // - Console.log ONLY Pete’s name from the list
// console.log(names[3])
// // - Change Pete’s name to ‘Ringo’
// names.splice([3])
// console.log(names)
// names.push('Ringo')
// // - Console.log the list
// console.log(names)
// // - Add the name ‘Yoko’ to the list
// names.push('Yoko')
// // - Console.log the list
// console.log(names)







// ### Exercise 2
// // - Write a program that asks the user to enter 4 ages. Save each of the ages into an array.
// let userInput1=prompt("Enter your age")
// let userInput2=prompt("Enter another age")
// let userInput3=prompt("Enter another age")
// let userInput4=prompt("Enter another age")

// let userInformation=[userInput1,userInput2,userInput3,userInput4]

// // - Console.log the list of names
// console.log(userInformation)
// // - Delete the third age.
// userInformation.splice(2,1)
// alert(userInformation)
// // index of and splice
// // - Change the second element (NOT index 2, the second element) to a different age.

// // - Console.log the list of names
// console.log(userInformation)

// ### Exercise 3
// Write a program that asks the user to enter any four names into an array. If they enter the name Kenn, ignore it and don't enter it in the array. Console.log the resulting array.

let userInput1=prompt("Enter a name")
let userInput2=prompt("Enter another name")
let userInput3=prompt("Enter another name")
let userInput4=prompt("Enter another name")
 
let userInformation=[userInput1,userInput2,userInput3,userInput4]

if(userInformation == "Kenn") {
    console.log(userInformation)
}
// ```javascript
// Example 1
// Enter the first name: Kevin
// Enter the second name: Erin
// Enter the third name: Meka
// Enter the fourth name: Autumn

// console.log Results:
// [Kevin, Erin, Meka, Autumn]

// Example 2
// Enter the first name: Kenn
// Enter the second name: Erin
// Enter the third name: Kenn
// Enter the fourth name: Autumn

// console.log Results:
// [Erin, Autumn]