let button = document.querySelectorAll(".button__container button");
let userImage = document.querySelector(".container__userImg");
let comImage = document.querySelector(".container__comImg");
let userPoint = document.querySelector(".container__score--user");
let comPoint = document.querySelector(".container__score--com");
let result = document.querySelector(".result__game");
let userScore = 0;
let comScore = 0;



for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function() {
        // image names and button names are same. 
        // so when clicking button image added to the user container
        userImage.src = `./images/${this.innerText}.svg`;
        // computer choice (array)
        comTurn = ["stone", "paper", "scissor"];
        computerRandom = comTurn[Math.floor(Math.random() * 3)];
        // add computerRandom to computer image src
        comImage.src = `./images/${computerRandom}.svg`;

        // button name updated to user image container
        let userChoice = this.innerText;
        // comTurn array values updated to computer image container
        let comChoice = computerRandom;

        // callback function for updating score
        let update = () => {
            userPoint.innerText = userScore;
            comPoint.innerText = comScore;
        }


        switch (true) {
            // if game tie
            case userChoice === comChoice:
                result.innerHTML = `It's Draw`;
                break;

            // user select stone
            case userChoice == "stone" && comChoice == "scissor":
                result.innerHTML = "User Win";
                userScore++;
                update();
                break;

            case userChoice == "stone" && comChoice == "paper":
                result.innerHTML = "Computer Win"
                comScore++;
                update();
                break;

            // user select paper
            case userChoice == "paper" && comChoice == "stone":
                result.innerHTML = "User Win";
                userScore++;
                update();
                break;

            case userChoice == "paper" && comChoice == "scissor":
                result.innerHTML = "Computer Win";
                comScore++;
                update();
                break;

            // user select scissorr
            case userChoice == "scissor" && comChoice == "paper":
                result.innerHTML = "User Win";
                userScore++;
                update();
                break;

            case userChoice == "scissor" && comChoice == "stone":
                result.innerHTML = "Computer Win";
                comScore++;
                update();
                break;
        }
    });
}