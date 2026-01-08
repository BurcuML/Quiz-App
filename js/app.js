const questionList = [
    new Question("Mona Lisa adlı dünyaca ünlü tablo hangi ressama aittir?", {A: "Pablo Picasso", B: "Leonardo da Vinci", C: "Vincent van Gogh", D: "Salvador Dali"}, "B"),
    new Question("Güneş sistemindeki en sıcak gezegen hangisidir?", {A: "Merkür", B: "Mars", C: "Venüs", D: "Jüpiter"}, "C"),
    new Question("İstiklal Marşı'mızın bestecisi kimdir?", {A: "Mehmet Akif Ersoy", B: "Zeki Üngör", C: "Cemal Reşit Rey", D: "Münir Nurettin Selçuk"}, "B"),
    new Question("İnsan vücudundaki en küçük kemik nerede bulunur?", {A: "El parmağı", B: "Burun", C: "Kulak", D: "Ayak bileği"}, "C"),
    new Question("Modern fiziğin temellerinden olan E = mc^2 formülündeki 'c' harfi neyi temsil eder?", {A: "Enerji", B: "Kütle", C: "Işık hızı", D: "Zaman sabiti"}, "C"),
    new Question("Yüzüklerin Efendisi serisinin yazarı aşağıdakilerden hangisidir?", {A: "J.K. Rowling", B: "George R.R. Martin", C: "J.R.R. Tolkien", D: "C.S. Lewis"}, "C"),
    new Question("Bir satranç tahtasında toplam kaç kare bulunur?", {A: "32", B: "64", C: "81", D: "100"}, "B")
]

const quiz = new Quiz(questionList)
const ui = new UI();

document.getElementById("btngetQuestion").addEventListener("click", function(){
    if (quiz.questions.length !== quiz.questionIndex) {
        ui.showQuestion(quiz.getQuestions())
        quiz.questionIndex +=1;
        
    }
})