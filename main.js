
// splice:
// Create an array and use the splice method to remove elements from the middle of the array.
let taskSpliceArr = [ 1, "some", 15, 96, "index", "John", "morning", 45, 74 ];
taskSpliceArr.splice( 3, 2 );
console.log( taskSpliceArr );

// Create a function which takes an array, index, and number of elements, and uses splice to remove elements from the array.
function removeElemSplice( arr, index, quantity ) {
    arr.splice( index, quantity );
    return arr;    
}

console.log( removeElemSplice( taskSpliceArr, 2, 2 ) );




//reverse:
//Create an array and use the reverse method to reverse the reordering of its elements.
let taskReverseArr = [ 6, 15, "lol", "mom", 56, "double", 8889, 78 ];

taskReverseArr.reverse();
console.log( taskReverseArr );

//Create a function which takes an array and uses reverse to reverse the order of elements.
function reverseArr( arr ) {
   return arr.reverse();
}

console.log( reverseArr( taskReverseArr ) );



// concat:
//Create two arrays and use the concat method to combine them into one array.
let taskConcatFirst = [ 2, 5, 8, 15, 65 ];
let taskConcatSecond = [ "apple", "cow", "try" ];

let res = taskConcatFirst.concat( taskConcatSecond );
console.log( res );

//Create a function which takes two arrays and uses concat to combine them into a one array.
function concatArr( arrFirst, arrSecond ) {
    return arrFirst.concat( arrSecond );
}

console.log( concatArr( taskConcatSecond, taskConcatFirst ) );


//includes:
//Create an array and use the includes method to check if the array contains an element.
let taskIncludesArr = [2, 6, 8, 15, "cat", 56, "banana", "drugs", 45, 89 ];
console.log( `The array include item "cat" - ${ taskIncludesArr.includes("cat") }  ` );

//Create a function which takes an array and an element and uses includes to check if element is in array.
function findElem( arr, elem ) {
    return arr.includes( elem );
}

console.log( `The array include number "56" - ${ findElem( taskIncludesArr, 56 ) } ` );



// filters:
//Create an array of numbers and use the filter method to create a new array containing only odd numbers.
let taskFilter = [ 2, 56, 69, 21, 48, 17, 88, 124, 10, 23, 59, 66, 128 ];
let resFilter = [];

taskFilter.filter( item => {
    if( item % 2 !== 0 ) {
        resFilter.push( item );
    }
} )

console.log( resFilter );

//Create a function which takes an array and a callback function and uses a filter to create a new array containing the elements that satisfy the condition.
function getMorefifty ( item ) {
    return item > 50
}

function arrFilter ( arr, callback ) {
    return arr.filter( callback ) 
}

console.log( arrFilter( taskFilter, getMorefifty ) );



// maps:
//Create an array of numbers and use the map method to create a new array that contains the squares of each number.
let taskMapArr = [ 2, 12, 9, 3, 5, 15, 7 ];
let resMap = [];
taskMapArr.map( item => resMap.push( Math.pow( item, 2 ) ) );
console.log( resMap );

//Create a function that takes an array and a converter function and uses map to create a new array in which each element receives a string to value
function changeArr( item ) {
    return item + "abc";
}

function stringTo ( arr, callback ) {
    return arr.map( callback )
}

console.log( stringTo( taskMapArr, changeArr ) );


// Create a function that takes an array of numbers, filters out the even numbers, and then returns a new array in which each even  number is multiplied by 2.
function getEvenMulti( arr ) {
    let res = [];

    arr.map( item => {
        if( item % 2 === 0 ) {
            res.push( item * 2 )
        }
    } )

    return res;
}

console.log( getEvenMulti( [2, 4, 5, 7, 11, 16, 49, 52] ) );


// Create a function that takes an array and two indices and returns a new array containing the elements between those indices in reverse order.
let additTaskReversArr = [ 2, 3, 56, 69, 87, 96, 106, 157, 183, 621, 783, 15, 84 ];
function getReversPick( arr, start, end ) {
    let copy = [ ...arr ];
    let res = copy.splice( start, end - start );
    return res.reverse();
}

console.log( getReversPick( additTaskReversArr, 3, 8 ) );



// Create a function that takes an array of numbers, filters out more than 10, and returns a new array containing the first three elements of the result.
let arrThirdFilter = [ 1, 12, 9, 4, 5, 23, 31, 7, 18, 44, 96 ]
function getMoreThanTen( arr ) {
    let copy = [ ...arr ];
    let moreTenArr = copy.filter( item => item > 10 );
    return moreTenArr.splice( 0,3 );
}

console.log( getMoreThanTen( arrThirdFilter ) );










