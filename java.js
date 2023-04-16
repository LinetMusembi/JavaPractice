// Write a function that accepts an array of strings and console.logs each element using
//  a for loop.

function containMany(arrays){
    forEach(arrays in arrays)
        console.log(arrays)
    }


let arrays = ["learn","live","JavaScript","Kotlin","Python"]
console.log(arrays)

// Write a function that accepts an array of numbers and uses the forEach() method
//  to console.log each number multiplied by 2.

function multiply(num){
    num.forEach(num =>{
    console.log(num*2)
    })
  
     
    
}
let num = [2,3,4,5,6]
multiply(num)

// Write a function that takes in an array of numbers and consoles the first four
//  items multiplied by 8 and the last two added by 5. Console the array with the new values

function add(numbers){;
  for( let i = 0;i < 4;i++){;
    numbers[i] *=8;
  }
  for(let i = numbers.length-2;i<numbers.length;i++){
    numbers[i]+=5
  }
  console.log(numbers)
}
let numbers = [8,7,6,5,4,3,2]
add(numbers)

// Write a function that takes in the following array and use a while loop to iterate 
// and break when the item is equal to the fourth index
let arrNum = [1,2,3,4,5,6,7,8,9];

function item(arrNum){
  let i = 0
  while(i<arrNum.length){
    if(i === 4){
      break;
    }

    
  }
 
  console.log(arrNum[i])
  i++

}

// Write a function that takes in an array of strings and use a continue statement 
// when the item is at the second index.
// let fruits= ['apple','plum','banana','strawberries','kiwi']let fruits = ["apple","plum","banana","strawberries","kiwi"]
let fruits = ["apple","plum","banana","stawberries","kiwi"];
for(let i=0; i<fruits.length;i++){
    console.log(fruits[i]);
}
for(let i=0; i<fruits.length;i++){
    if(i === 3){
    continue;
    }
    console.log("continue",fruits[i]);
 }


//  Find the last element of the following arrays.
 // arr1 = [3,7,34,90,12]
 // // arr2 = [true, "green", "where",12,56]
 
 let arr1 = [3,7,34,90,12];
let arr = arr1.slice(-1);
console.log(arr)


let arr2 = [true,"green","where",12,56];
let arr3 =arr2.shift();
console.log(arr3);

// write a JS program that will join the following array elements into a string
// myPets = ["Cow", "Python", "Snake", "Dog"];

myPets = ["Cow","Python","Snake","Dog"]
console.log(myPets.join())


// write a JS script to sort the following array items
// var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];

var arr4 = [-5,9,5,3,2,-3,6,8,4,1]
arr5 = (arr4.sort())
console.log(arr5)



// Write a program to remove duplicates from the following array.
// Console the array without duplicates, and console another array that only contains the duplicates
// var arr = ["apple", "mango", "apple",
//             "orange", "mango", "mango"];


var arr6 = ["apple","mango","apple","orange","mango","mango"];
var arr7 = [];
arr6.forEach(item => {
    if(!arr7.includes(item)){
        arr7.push(item)
    }
})
console.log(arr7);

// Write a JS script to search for the following word in the array.
// 4
// If the word is present, console it else console "the search word was not found"
// let arr5 = ["the", "way", "x", 4, 23];


let arr5 = ["the","way","x",23];
if(arr5.includes(4)){;
    console.log(4);
}else{

    console.log("the search word was not found");
}


//  Write a JS script to sort the following string
// let word = "lufituaeb"


 let word = "lufituaeb"
 console.log(word.split("").sort().join(""));



