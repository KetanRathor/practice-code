let dataState = {
    enterText: "",
    selectColor: ""
};

function renderUI() {

    let main_div = document.getElementById("root");
    main_div.innerHTML = "";
    let div1 = document.createElement("div");
    div1.setAttribute("id", "div1");

    let enterAnythinglabel = document.createElement("label");
    enterAnythinglabel.textContent = "Enter Anything:";
    div1.appendChild(enterAnythinglabel);

    let inputText = document.createElement("input");
    inputText.setAttribute("id", "inputText");
    inputText.setAttribute("name", "inputText ");
    inputText.onchange = function(event) {
        dataState.enterText = event.target.value;
    };
    div1.appendChild(inputText);


    let textDiv = document.createElement("div");
    textDiv.setAttribute("id", "textDiv");
    div1.appendChild(textDiv);

    let submitButton = document.createElement("button");
    submitButton.setAttribute("name", "submit");
    submitButton.textContent = "Submit";
    submitButton.onclick = function() {
        let res = document.getElementById("textDiv")
        res.textContent = `Entered Data: ${dataState.enterText}`;
        res.style.color = dataState.selectColor;

    };
    div1.appendChild(submitButton);

    let resetButton = document.createElement("button");
    resetButton.setAttribute("name", "reset");
    resetButton.textContent = "Reset";
    resetButton.onclick = handleRsest;
    div1.appendChild(resetButton);


    let yellow = document.createElement("div");
    yellow.style.backgroundColor = "yellow"
    yellow.setAttribute("id", "yellow");
    yellow.onclick = function() {
        handleDivClick(yellow.id)
    };
    div1.appendChild(yellow);


    let green = document.createElement("div");
    green.style.backgroundColor = "green"
    green.setAttribute("id", "green");
    green.onclick = function() {
        handleDivClick(green.id)
    };
    div1.appendChild(green);

    let orange = document.createElement("div");
    orange.setAttribute("id", "orange");
    orange.style.backgroundColor = "orange";
    orange.onclick = function() {
        handleDivClick(orange.id)
    };
    div1.appendChild(orange);


    main_div.appendChild(div1);

}

function handleDivClick(divID) {
    
}

function handleRsest() {
    dataState.enterText = "";
    dataState.selectColor = "";
    renderUI();
}