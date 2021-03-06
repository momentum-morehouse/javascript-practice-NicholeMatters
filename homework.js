
// 1. Create a function called "remove" that takes an array and a potential
// member of the array, and returns a new array with that member removed.
// For example, `remove(['Cadence', 'Ordel', 'Marion'], 'Marion')` results
// in `['Cadence', 'Ordel']`.
//
// If the potential member is not in the array, return the array unchanged.
// If the potential member is in the array, remove all instances of it from the array.


function remove (nameArray, newMember){
let idx = nameArray.indexOf(newMember);
let newArray = nameArray.filter(name => name !== nameArray[idx]);
//nameArray.splice(idx, 1);
console.log(nameArray[idx]);
return newArray;


}
//[0, 1, 2, 3]
//nameArray[0]

//const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

//const result = words.filter(word => word.length > 6);



// 2. Revisit your "remove" function. Make sure that it does not change the original
// array but instead returns a new array.

// 3. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.

function sum(array, number){
  let total = 0;
  for (let number of array){
    total = total + number;
  }
  return total;
}

// 4. Create a function called "average" that takes an array of numbers
// and returns the average of those numbers.


function average (array){
  let total = 0;
  for (let number of array){
    total = total + number;
  }
  return total/array.length || undefined;
  
}



//can all an previous function sum
// total + number SAME as += number
//Solution
// fucntion average(nums){

//   return sum(nums)/nums.length || undefined;
// }

// 5. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.

function minimum (array){    
let min = undefined;
  for (let number of array){
    if (min < number || min === number) {
      min = min;
    } else {
    min = number;
    }
  }
  return min;
}

// return is the last command, define min every step of the way
// function minimum (numbers) {
//   if (numbers.length) {
//   let minimum = numbers.reduce((min, number) => lesser(min, number));
//   return minimum;
//   }
// }

// function minmum (numberArray){
//   let smallestNumber = numberArray[0];
//   for (let number of numberArray){
//     if (number <= smallestNumber){
//       smallestNumber = number;
//     };
//   };
//   return smallestNumber;
// }

// 6. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
//
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//

function selectionSort(unsortedArray) {
	let unsorted = unsortedArray.slice(0);
	let minNumber = unsorted[0];
	let indexOfMinNumber = 0;
	let sorted = [];

	if (unsortedArray.length >= 0 && unsorted.length <= 1) {
		return unsortedArray;
	}

	while (sorted.length != unsortedArray.length) {
    	for (var index = 0; index < unsorted.length; index++) {
			let number = unsorted[index];

        	if (minNumber > number) { 
				minNumber = number;
				indexOfMinNumber = index;
			}
        }
		
        sorted.unshift(minNumber);
		unsorted = unsorted.splice(indexOfMinNumber);
	}

    return sorted;
}

// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// let arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.

// 7. Create a function called `textList` that takes an array and joins its elements
// into a string separated by commas.
//
// For example, `textList(['Cadence', 'Ordel', 'Marion'])` results in the string
// `"Cadence,Ordel,Marion"`.

function textList (string){
//let newString = []; //naming a new array
let newString = string.join();
return newString;
}


//google: how to string elements in an array