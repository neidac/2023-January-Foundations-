var questions = document.getElementsByClassName("questions");

for(var i = 0; i < questions.length; i++){
    questions[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var chevron = this.firstElementChild;

        chevron.classList.toggle("fa-chevron-down");
        chevron.classList.toggle("fa-chevron-up");

        
        var answers = this.nextElementSibling;
        if  (answers.style.maxHeight) {
            answers.style.maxHeight = null;
        } else {
            answers.style.maxHeight = answers.scrollHeight + "px";
        }
    });
}
