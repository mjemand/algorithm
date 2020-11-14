
let numericArray = [14, 3, 0, 9, 123, 567];
console.log(numericArray)

// The smallest //

let smallest = numericArray[0];

function smallestElement () {
    for (let i=0; i < numericArray.length; i+=1) {
        if (numericArray[i] < smallest) {
            smallest = numericArray[i];
        }
    }
};

smallestElement();
console.log('The smallest element: ', smallest)


// The biggest //

let biggest = numericArray[0];

function biggestElement () {
    for (let i=0; i<numericArray.length; i+=1) {
        if (numericArray[i] > biggest) {
            biggest = numericArray[i];
        }
    }
}

biggestElement();
console.log('The biggest element: ', biggest)

// Average //

let sum = 0

function average () {
    for (let i=0; i<numericArray.length; i+=1) {
        sum += numericArray[i];
    } 
    console.log('Sum: ', sum);
    return sum / numericArray.length;
}

console.log('Sum: ', sum);
console.log('Nr. of elements: ', numericArray.length);
console.log('Average: ', average())
console.log('Sum: ', sum);

// Sum //

let sum2 = 0;

function sumFn () {
    for (let i=0; i<numericArray.length; i+=1) {
        sum2 += numericArray[i];
    }
    console.log('Sum: ', sum2)
}

console.log('Sum: ', sum2)
sumFn();
console.log('Sum: ', sum2)

// Even numbers

let db = 0

function evenNumbers () {
    for (let i=0; i<numericArray.length; i+=1) {
        if (numericArray[i] % 2 == 0) {
            db +=1
        }
    }
}

evenNumbers()
console.log('Even numbers: ', db)

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