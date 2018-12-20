// Let the page load first{
    $(document).ready(function () {

var trivia = [
    {
        question: "What is Spider-Man's real identity?",
        choice: ['A. Peter Porker', 'B. Peter Parker', 'C. Reed Richards', 'D. Peter Griffin'],
        answer: 1,
    },
    {
        question: "Who takes care of Spider-Man while he's in High School?",
        choice: ['A. Professor Xavier', 'B. Doctor Conners', 'C. Sue and Reed Richards', 'D. Aunt May'],
        answer: 3,

    },
    {
        question: "Who calls Spider-Man, 'Tiger'?",
        choice: ['A. Mary-Jane Watson', 'B. Pepper Potts', 'C. Gwen Stacey', 'D. Felicia Hardy'],
        answer: 0,
    },
    {
        question: "What is the name of the first symbiote introduced?",
        choice: ['A. Carnage', 'B. Venom', 'C. Poison' , 'D. Vengeance'],
        answer: 1,
    },

    {
        question: "Where does Spider-Man typically web-sling?",
        choice: ['A. Los Angeles', 'B. Chicago', 'C. New York City' , 'D. Miami'],
        answer: 2,
    },
    {
        question: "Which Fantastic Four member does Spider-Man temporarily replace?",
        choice: ['A. Mr. Fantastic', "B. Invisible Woman" , 'C. The Thing' , 'D. The Human Torch'],
        answer: 3,
    },
    {
        question: "The Original Sinister Six is made up of: Doctor Octopus, Kraven the Hunter, Electro, Mysterio, Sand-Man, and ?",
        choice: ['A. Vulture' , 'B. Kingpin' , 'C. Scorpion' , 'D. Rhino'],
        answer: 0

    }
]
    for( var i = 0; i < trivia.length; i++ ){
        var text = $("<p class='box'>");

        $(text).text(trivia[i].question);
        $(".spideyTrivia").append(text);

        for(var v = 0; v < trivia[i].choice.length; v++){
            
            var choices = $("<button>");
            $(choices).text(trivia[i].choice[v]);
            $(".spideyTrivia").append(choices);
            let currentQuestion = trivia[i];
            let currentChoice = currentQuestion.choice[v];
            choices.on("click" , function(){
                console.log(currentChoice);
                if(currentChoice == currentQuestion.choice[currentQuestion.answer]){
                    alert("Correct!");

                }else{
                    alert("Incorrect");
                }

            });


        }

        


    }





console.log(trivia);



});
// console.log(spiderQuestions);