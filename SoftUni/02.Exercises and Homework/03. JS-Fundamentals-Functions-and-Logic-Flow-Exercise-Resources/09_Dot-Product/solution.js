function solve() {
    let firstArrInput = document.querySelector('#mat1');
    let secondArrInput = document.querySelector('#mat2');

    let firstMatr = JSON.parse(firstArrInput.value);
    let secondMatr = JSON.parse(secondArrInput.value);

    let finalMatrix = [];
    for (let firstRow = 0; firstRow < firstMatr.length; firstRow++) {
        for (let secondRow = 0; secondRow < secondMatr.length; secondRow++) {
            for (let col = 0; col < secondMatr[secondRow].length; col++) {
                const firstMatrEl = firstMatr[firstRow][col];
                const secondMatrEl = secondMatr[secondRow][col];
                debugger;
            }
            
        }
        
    }
}