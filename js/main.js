
let numericArray = [14, 3, 0, 9, 123, 567];
console.log(numericArray)


// 1. The smallest //

function smallestElement (arr) {
    let smallest = arr[0];
    for (let i=1; i < arr.length; i+=1) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}

console.log('The smallest element: ', smallestElement(numericArray));


// 2. The biggest //

function biggestElement (arr) {
    let biggest = arr[0];
    for (let i=1; i<arr.length; i+=1) {
        if (arr[i] > biggest) {
            biggest = arr[i];
        }
    }
    return biggest;
}

console.log('The biggest element: ', biggestElement(numericArray));


// 3. Sum //

function getSum (arr) {
    let sum = 0;
    for (let i=0; i<arr.length; i+=1) {
        sum += arr[i];
    }
    return sum;
}

console.log('Sum: ', getSum(numericArray));


// 4. Average //

function getAverage (arr) {
    return getSum(arr) / arr.length;
}

console.log('Nr. of elements: ', numericArray.length);
console.log('Average: ', getAverage(numericArray))


// 5. Even numbers

function evenNumbers (arr) {
    let counter = 0
    for (let i=0; i<arr.length; i+=1) {
        if (arr[i] % 2 === 0) {
            counter +=1
        }
    }
    return counter
}

console.log('Even numbers: ', evenNumbers(numericArray))


// 2nd smallest

let smallest2 = numericArray[0];

function smallestElement2 () {
    for (let i=0; i < numericArray.length; i+=1) {
        if (numericArray[i] < smallest2) {
            smallest2 = numericArray[i];
        }
    }
};

smallestElement2()
console.log('The smallest element: ')
console.log(smallest2)
console.log(numericArray)
numericArray.splice(numericArray.indexOf(smallest2), 1)
console.log(numericArray)
smallest2 = numericArray[0];
smallestElement2()
console.log('The 2nd smallest element: ', smallest2)

// 3rd (+2nd) biggest

let biggest2 = numericArray[0];

function biggestElement2 () {
    for (let i=0; i<numericArray.length; i+=1) {
        if (numericArray[i] > biggest2) {
            biggest2 = numericArray[i];
        }
    }
}

biggestElement2();
console.log('The biggest element: ', biggest2)
console.log(numericArray)
numericArray.splice(numericArray.indexOf(biggest2), 1)
console.log(numericArray)
biggest2 = numericArray[0];
biggestElement2();
console.log('The 2nd biggest element: ', biggest2)
numericArray.splice(numericArray.indexOf(biggest2), 1)
console.log(numericArray)
biggest2 = numericArray[0];
biggestElement2();
console.log('The 3rd biggest element: ', biggest2)

// Linear search (task 8.)

let mixedArray = [14, null, 3, 0, 'string', 9, true, 123, 567, 23];

let contains = false

function contains23 () {
    for (let i=0; i < mixedArray.length && contains == false; i+=1) {
        if (mixedArray[i] == 23) {
            contains = true;
        }
    }
}

contains23();
console.log('This array contains 23: ', contains)