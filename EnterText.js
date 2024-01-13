let dataState = {
    enterText: "",
    selectColor: ""
};

function renderUI() {


    let div1 = document.createElement("div");
    div1.setAttribute("id", "div1");

    let enterAnythingLabel = document.createElement("label");
    enterAnythingLabel.textContent = "Enter Anything: ";
    div1.appendChild(enterAnythingLabel);

    let nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("name", "enterAnything");
    nameInput.setAttribute("id", "enterAnything")
    div1.appendChild(nameInput);

    let submitButton = document.createElement("button");
    submitButton.setAttribute("name", "submit");
    submitButton.textContent = "Submit";
    submitButton.onclick = handleSubmit;
    div1.appendChild(submitButton);

    let resetButton = document.createElement("button");
    resetButton.setAttribute("name", "reset");
    resetButton.textContent = "Reset";
    resetButton.onclick = handleReset;
    div1.appendChild(resetButton);


    document.getElementById("root").appendChild(div1);

    let textdiv = document.createElement("div");

    textdiv.setAttribute("id", "textdiv");
    document.body.appendChild(textdiv);

    let divParent = document.createElement("div");
    divParent.setAttribute("id", "divParent");
    document.body.appendChild(divParent);

    let div2 = document.createElement("div");
    div2.setAttribute("id", "div2");
    divParent.appendChild(div2);
    div2.onclick = function() {
        handleDivClick("div2")
    };


    let div3 = document.createElement("div");
    div3.setAttribute("id", "div3");
    divParent.appendChild(div3);
    div3.onclick = function() {
        handleDivClick("div3")
    };

    let div4 = document.createElement("div");
    div4.setAttribute("id", "div4");
    divParent.appendChild(div4);
    div4.onclick = function() {
        handleDivClick("div4")
    };

}


function handleDivClick(divId) {



    if (dataState.selectColor) {
        let previousDiv = document.getElementById(dataState.selectColor);
        if (previousDiv) {
            previousDiv.style.border = "";
        }
    }


    let divClicked = document.getElementById(divId);
    if (divClicked) {
        divClicked.style.border = "5px solid blue"
        dataState.selectColor = divId;
    }
}


function handleSubmit() {


    let userInput = document.getElementById("enterAnything").value;
    dataState.enterText = userInput;

    let txt = document.getElementById("textdiv").innerHTML = `Entered Data: ${userInput}`;

    let emptyInput = document.getElementById("enterAnything").value = " ";
    dataState.selectColor.innerHTML = "";
}

// reset.onclick = function() {
//     renderUI()
// }

function handleReset(divId) {

    let reset = document.getElementById("textdiv").innerHTML = " ";

    if (dataState.selectColor) {
        let selectedColor = document.getElementById(dataState.selectColor);
        if (selectedColor) {
            selectedColor.style.border = "";
            dataState.selectColor = "";
        }

    }

}
