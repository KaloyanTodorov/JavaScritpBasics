function solve(arr1, arr2, arr3) {
    const arrWithLeastNumbers = Math.min(arr1.length, arr2.length, arr3.length);
    const unsortedArr = [];
    let arrSum = 0;
    for (let i = 0; i < arr1.length; i++) {
        const element = arr1[i];
        if(arr2.indexOf(element) > -1 && arr3.indexOf(element) > -1) {
            unsortedArr.push(element);
            arrSum += element;
        }
    }
    
    const finalArray = unsortedArr.sort();
    const average = arrSum / finalArray.length;
    const arrLenght = finalArray.length;
    let median = 0;
    if(finalArray.length % 2 === 0) {
        median = (finalArray[arrLenght / 2] + finalArray[(arrLenght / 2) - 1]) / 2 ;
    } else {
        median = finalArray[Math.round(arrLenght / 2 - 1)] ;
    }
    
    console.log(`The common elements are ${finalArray.join(', ')}.`);
    console.log(`Average: ${average}.`);
    console.log(`Median: ${median}.`);
}

solve([5, 6, 50, 10, 1, 2],
    [5, 4, 8, 50, 2, 10], 
    [5, 2, 50]);

solve([1, 2, 3, 4, 5],
    [3, 2, 1, 5, 8],
    [2, 5, 3, 1, 16]);