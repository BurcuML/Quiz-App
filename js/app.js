const questionList = [
    new Question("Mona Lisa adlı dünyaca ünlü tablo hangi ressama aittir?", { A: "Pablo Picasso", B: "Leonardo da Vinci", C: "Vincent van Gogh", D: "Salvador Dali" }, "B"),
    new Question("Güneş sistemindeki en sıcak gezegen hangisidir?", { A: "Merkür", B: "Mars", C: "Venüs", D: "Jüpiter" }, "C"),
    new Question("İstiklal Marşı'mızın bestecisi kimdir?", { A: "Mehmet Akif Ersoy", B: "Zeki Üngör", C: "Cemal Reşit Rey", D: "Münir Nurettin Selçuk" }, "B"),
    new Question("İnsan vücudundaki en küçük kemik nerede bulunur?", { A: "El parmağı", B: "Burun", C: "Kulak", D: "Ayak bileği" }, "C"),
    new Question("Modern fiziğin temellerinden olan E = mc^2 formülündeki 'c' harfi neyi temsil eder?", { A: "Enerji", B: "Kütle", C: "Işık hızı", D: "Zaman sabiti" }, "C"),
    new Question("Yüzüklerin Efendisi serisinin yazarı aşağıdakilerden hangisidir?", { A: "J.K. Rowling", B: "George R.R. Martin", C: "J.R.R. Tolkien", D: "C.S. Lewis" }, "C"),
    new Question("Bir satranç tahtasında toplam kaç kare bulunur?", { A: "32", B: "64", C: "81", D: "100" }, "B")
]

const quiz = new Quiz(questionList)
const ui = new UI();

ui.btnStart.addEventListener("click", function () {
    StartTimer(10)
    startTimerLine()
    ui.quizBox.classList.add("active")
    ui.btnBox.classList.remove("active")
    ui.btnNext.classList.remove("show")
    ui.showQuestion(quiz.getQuestions())
    ui.showQuestionNumber(quiz.questionIndex + 1, quiz.questions.length)
})

ui.btnNext.addEventListener("click", function () {
    if (quiz.questions.length !== quiz.questionIndex) {
        StartTimer(10)
        startTimerLine()
        ui.showQuestion(quiz.getQuestions())
        ui.showQuestionNumber(quiz.questionIndex + 1, quiz.questions.length)
        ui.btnNext.classList.remove("show")
    } else {
        ui.scoreBox.classList.add("active")
        ui.quizBox.classList.remove("active")
        ui.showScore(quiz.correctAnswerNum, quiz.questions.length)
    }
})

function optionSelected(e) {

    clearInterval(counter)
    clearInterval(counterLine)

    const selectedElement = e.target;

    if (selectedElement == "span") {
        selectedElement = selectedElement.parentElement;
    }

    const answer = e.target.textContent[0]
    const question = quiz.getQuestions()

    if (question.checkAnswer(answer)) {
        quiz.correctAnswerNum += 1;
        selectedElement.classList.add("correct")
        selectedElement.insertAdjacentHTML("beforeend", ui.correctIcon)
    }
    else {
        selectedElement.classList.add("incorrect")
        selectedElement.insertAdjacentHTML("beforeend", ui.incorrectIcon)
    }

    quiz.questionIndex += 1;
    ui.disableAllOption()
    ui.btnNext.classList.add("show")
}

ui.btnReplay.addEventListener("click", function () {
    quiz.questionIndex = 0;
    quiz.correctAnswerNum = 0;
    ui.btnStart.click();
    ui.scoreBox.classList.remove("active")
})

ui.btnQuit.addEventListener("click", function () {
    window.location.reload();
})

function StartTimer(time) {
    let counter = setInterval(timer, 1000);

    function timer() {
        ui.timeSecond.textContent = time
        time--

        if (time < 0) {
            clearInterval(counter)
            ui.timeText.textContent = "Süre Bitti"

            ui.disableAllOption();
            quiz.questionIndex += 1;
            ui.btnNext.classList.add("show")

        }
    }
}

let counterLine

function startTimerLine() {
    let lineWidth=0;
    
    counterLine = setInterval(timer,20)

    function timer(){
        lineWidth+=1;

        ui.timeLine.style.width = lineWidth + "px"

        if (lineWidth>549) {
            clearInterval(counterLine)
        }
    }
}