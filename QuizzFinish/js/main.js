let answer = document.querySelectorAll("input");
const question = document.querySelectorAll(".blockForm");

//Détecte les bonnes réponses et les fausses

function correctResponse() {
    if (this.classList.contains("false")) {
        this.parentNode.parentNode.classList.add("false");
    } else {
        this.parentNode.parentNode.classList.add("true");
    }
}

for (let i = 0; i < answer.length; i++) {
    answer[i].addEventListener("click", correctResponse);
}

//Va dire combien de bonne réponse la personne a eux

const numberOfResponse = document.querySelector(".numberOfResponse");
let counterTrue = 0;
numberOfResponse.innerHTML = `Vous avez ${counterTrue}/${question.length}`;

function onClick() {
    const countOfNumber = document.querySelector(".countOfNumbers");
    let counterTrue = 0;
    const response = document.querySelector(".response");

    for (let i = 0; i < question.length; i++) {
        const WrongError = document.createElement("p");

        function correctResponse() {
            WrongError.textContent = "Veuillez entrez la bonne réponse";
            question[i].append(WrongError);
            question[i].classList.add("wrongAnswer");
            question[i].classList.remove("correctAnswer");
            question[i].classList.remove("true");
            question[i].classList.add("wrongEffect");
        }
        WrongError.setAttribute("class", "WrongError");

        //Va détecter si la personne a répondu correctement 

        if (question[i].classList.contains("true")) {
            question[i].classList.add("all")
            question[i].classList.remove("wrongAnswer");
            question[i].classList.remove("false");
            question[i].classList.add("correctAnswer");
            countOfNumber.innerHTML = "Vous devez remplir le formulaire !";
            if (question[i].children[4]) {
                question[i].children[4].remove(question[i].children[4]);
            }
            counterTrue++;

            //Va détecter si la personne a eux faux

        } else if (question[i].classList.contains("false") && !question[i].children[4]) {
            correctResponse();
        } else if (question[i].classList.contains("wrongAnswer") && question[i].children[4]) {
            correctResponse();
            if (question[i].children[4]) {
                question[i].children[4].remove(question[i].children[4]);
            }
        }

        if (question[i].classList.contains("false")) {
            WrongError.textContent = "Veuillez entrez la bonne réponse";
            question[i].append(WrongError);
            question[i].classList.add("wrongAnswer");
            question[i].classList.remove("correctAnswer");
            question[i].classList.remove("true");
            question[i].classList.add("wrongEffect");
            console.log(question[i]);
        } else if (question[i].classList.contains("true")) {
            question[i].classList.remove("wrongAnswer");
            question[i].classList.add("correctAnswer");
            question[i].classList.add("true");
            question[i].classList.remove("wrongEffect");
            console.log(WrongError.textContent);
        } else {
            WrongError.textContent = "Veuillez remplir correctement la question ci-dessus";
            question[i].append(WrongError);
            question[i].classList.add("wrongAnswer");
            question[i].classList.remove("correctAnswer");
            question[i].classList.remove("true");
            question[i].classList.add("wrongEffect");
            console.log(WrongError.textContent);
        }

        let max = 3;
        let z = 0;
        let checkboxes = document.getElementsByClassName("case");
        for (let y = 0; y < checkboxes.length; y++) {
            if (checkboxes.item(y).checked == true) {
                z++
                if (z > max) {
                    console.log(checkboxes.item(y).checked = false)
                }
            }
        }
    }

    //Va détecter si la personne n'a qu'une erreurs, plusieurs erreurs ou aucune

    const numberOfFalse = document.querySelectorAll(".false");
    for (let i = 0; i < numberOfFalse.length; i++) {
        if (numberOfFalse.length === 1) {
            countOfNumber.innerHTML = "Vous avez une erreur.";
        } else {
            countOfNumber.innerHTML = "Vous avez des erreurs.";
        }
    }

    //Va afficher le résultas si la personne a 10/10 cela affichera un gif de félicitation

    response.classList.replace("hide", ["show"]);
    response.classList.remove("wrongAnswer");
    numberOfResponse.innerHTML = `Vous avez ${counterTrue}/${question.length} bonne réponses`;

    const main = document.querySelector("main");
    const finishForm = document.querySelector(".finishForm");
    const winNote = document.querySelector(".winNote");

    if (counterTrue === question.length) {
        console.log(counterTrue);
        main.classList.replace("show", ["hide"]);
        finishForm.classList.replace("hide", ["show"]);
        winNote.innerHTML = `Vous avez eux ${counterTrue}/${question.length} bravo !!!`;
    }
}

const button = document.querySelector(".btn");
button.addEventListener("click", onClick);

//Va forcer le reload de la page à l'appuie du bouton recommencer

const retry = document.querySelector(".retry").addEventListener("click", () => window.location.reload());