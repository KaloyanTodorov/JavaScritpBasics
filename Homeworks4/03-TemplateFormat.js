function templateFormat(array) {
    console.log("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
    "<quiz>");
    for (let i = 0; i < array.length; i += 2) {
        let questionText = array[i];
        let answerText = array[i + 1];

        printQuestion(questionText);
        printAnswer(answerText);
    }

    console.log("</quiz>");

    function printQuestion(question) {
        console.log("  <question>\n" +
            "    " + question + "\n" +
            "  </question>");
    }

    function printAnswer(answer) {
        console.log("  <answer>\n" +
            "    " + answer + "\n" +
            "  </answer>");
    }
}

templateFormat(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]
);