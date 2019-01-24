function solve() {
    const buttons = document.querySelectorAll('button');
    let nextButton = buttons[0];
    let cancelButton = buttons[1];
    let content = document.getElementById('content');
    let firstStepDivElement = document.getElementById('firstStep');
    let secondStepDivElement = document.getElementById('secondStep');
    let thirdStepDivElement = document.getElementById('thirdStep');

    cancelButton.addEventListener('click', hideContainer);
    nextButton.addEventListener('click', showFirstStep);

    function hideContainer() {
        let container = document.getElementById('exercise');
        container.style.visibility = 'hidden';
    }

    function showFirstStep() {
        content.style.backgroundImage = 'none';
        firstStepDivElement.style.display = 'block';
        nextButton.removeEventListener('click', showFirstStep);
        nextButton.addEventListener('click', showSecondStep);
    }

    function showSecondStep() {
        const inputs = document.querySelectorAll('input');
        let agreeInput = inputs[0];
        let disagreeInput = inputs[1];

        if(disagreeInput.checked) {
            
        } else if(agreeInput.checked) {
            firstStepDivElement.style.display = 'none';
            secondStepDivElement.style.display = 'block';

            nextButton.removeEventListener('click', showSecondStep);
            nextButton.addEventListener('click', showThirdStep);
            //Hide Next button
            nextButton.style.display = 'none';
            setTimeout(() => {
                nextButton.style.display = 'inline';
            }, 3000);
        }
    }

    function showThirdStep() {
        secondStepDivElement.style.display = 'none';
        thirdStepDivElement.style.display = 'block';
        nextButton.style.display = 'none';
        cancelButton.textContent = "Finish";
    }
}