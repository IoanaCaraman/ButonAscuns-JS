function handleForm() {
    event.preventDefault();

    let input = document.getElementById("formInput");
    let buttonsContainer = document.getElementById("buttonsContainer");

    for (let i = 0; i < input.value; ++i) {
        let button = document.createElement("button");

        button.classList.add("pressButton");
        buttonsContainer.appendChild(button);
        button.classList.add("press.SubmitButton");
    }
    handleButtons();
}

function handleButtons() {
    let buttons = document.getElementsByClassName("pressButton");
    let winnerIndex = Math.floor(Math.random() * buttons.length);

    for (let i = 0; i < buttons.length; ++i) {
        buttons[i].addEventListener("click", function(){
            if (this === buttons[winnerIndex]){
                this.textContent = "castigator";
            } else {
                this.textContent = "necastigator";
            }
        });
    }
}