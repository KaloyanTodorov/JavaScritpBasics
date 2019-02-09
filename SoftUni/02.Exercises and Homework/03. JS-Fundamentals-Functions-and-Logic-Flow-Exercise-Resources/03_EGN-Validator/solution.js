function validate() {

    // 50 out of 100 :(
    
    let button = document.querySelector('button');
    button.addEventListener('click', (e) => {
        const year = document.querySelector('#year');
        
        const month = document.querySelector('#month');
        const day = document.querySelector('#date');
        const gender = document.querySelector('input[name="gender"]:checked');
        const regionCode = document.querySelector('#region');
        
        if(Number(year.value) < 1900 || Number(year.value) > 2100 ||
        Number(regionCode.value) < 43 || Number(regionCode.value > 999) ||
        gender.value === null ||
        day.value === '' ||
        month.value === ''
        ) {
            clearAllFields();
            return;
        }

        const yearToCode = year.value.slice(2);
        const monthToObj = {
            January: '01',
            February: '02',
            March: '03',
            April: '04',
            May: '05',
            June: '06',
            July: '07',
            August: '08',
            September: '09',
            October: '10',
            November: '11',
            December: '12',
        }
        const monthToCode = monthToObj[month.value];
        const dayToCode = day.value >= 10 || day.value.length > 1 ? day.value : '0' + day.value;
        const genderToObj = {
            Male: 2,
            Female: 1,
        }
        const genderToCode = genderToObj[gender.value];
        let regionCodeToCode;
        if(regionCode.value >= 43 && regionCode.value <= 99) {
            regionCodeToCode = regionCode.value;
        } else {
            regionCodeToCode = regionCode.value.slice(0, -1);
        }
        const numberToFindLastDigit = yearToCode + 
        monthToCode + 
        dayToCode + 
        regionCodeToCode + 
        genderToCode;

        const EGN = findLastNumber(numberToFindLastDigit);

        let egnPElement = document.querySelector('#egn');
        egnPElement.textContent = `Your EGN is: ${EGN}`;

        clearAllFields();

        function findLastNumber(numberToStr) {
            let sum = 0;
            const weights = [2, 4, 8, 5, 10, 9, 7, 3, 6];
            for (let i = 0; i < numberToStr.length; i++) {
                const currentNumber = numberToStr[i];
                const currentWeight = weights[i];

                sum += currentNumber * currentWeight;
            }

            let remainder = sum % 11;
            if(remainder === 10) {
                remainder = 0;
            }
            return numberToStr + remainder;
       }

       function clearAllFields() {
           year.value = '';
           month.value = '';
           date.value = '';
           document.getElementById('male').checked = false;
           document.getElementById('female').checked = false;
           
           regionCode.value = '';

       }
    })
}