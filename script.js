function check() {
    var c=0
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var q5=document.quiz.question5.value;
    var result=document.getElementById("result")
    var quiz=document.getElementById("quiz")
    if (q1=="Europe") {c++}
    if (q2=="Oceania") {c++}
    if (q3=="South America") {c++}
    if (q4=="Africa") {c++}
    if (q5=="Pineapple") {c++}

    quiz.style.display="none"

        document.write(c)
        document.write("/5. Refresh the page to try again!")
}