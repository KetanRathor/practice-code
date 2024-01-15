<<<<<<< HEAD

=======
>>>>>>> 2d5f1cec63269f80bdd173534c77f23e2cecd3ca
let dataState = {
    enterText: "",
    selectColor: ""
};

function renderUI() {
<<<<<<< HEAD
    let main_div=document.getElementById('root')
    main_div.innerHTML="";
=======

>>>>>>> 2d5f1cec63269f80bdd173534c77f23e2cecd3ca

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


<<<<<<< HEAD
    main_div.appendChild(div1);

=======
    document.getElementById("root").appendChild(div1);
>>>>>>> 2d5f1cec63269f80bdd173534c77f23e2cecd3ca

    let textdiv = document.createElement("div");

    textdiv.setAttribute("id", "textdiv");
<<<<<<< HEAD
    div1.appendChild(textdiv);

    let divParent = document.createElement("div");
    divParent.setAttribute("id", "divParent");
    div1.appendChild(divParent);
=======
    document.body.appendChild(textdiv);

    let divParent = document.createElement("div");
    divParent.setAttribute("id", "divParent");
    document.body.appendChild(divParent);
>>>>>>> 2d5f1cec63269f80bdd173534c77f23e2cecd3ca

    let div2 = document.createElement("div");
    div2.setAttribute("id", "div2");
    divParent.appendChild(div2);
    div2.onclick = function() {
<<<<<<< HEAD
        handleDivClick("div2");
        updateTextColor();
=======
        handleDivClick("div2")
>>>>>>> 2d5f1cec63269f80bdd173534c77f23e2cecd3ca
    };


    let div3 = document.createElement("div");
    div3.setAttribute("id", "div3");
    divParent.appendChild(div3);
    div3.onclick = function() {
<<<<<<< HEAD
        handleDivClick("div3");
        updateTextColor();
=======
        handleDivClick("div3")
>>>>>>> 2d5f1cec63269f80bdd173534c77f23e2cecd3ca
    };

    let div4 = document.createElement("div");
    div4.setAttribute("id", "div4");
    divParent.appendChild(div4);
    div4.onclick = function() {
<<<<<<< HEAD
        handleDivClick("div4");
        updateTextColor();
=======
        handleDivClick("div4")
>>>>>>> 2d5f1cec63269f80bdd173534c77f23e2cecd3ca
    };

}


function handleDivClick(divId) {

<<<<<<< HEAD
    // if text entered div cannot be clicked 
    if (dataState.enterText !== "") {
        
        return;
    }
    //if div clicked do nothing
    // if (dataState.selectColor === divId) {
       
    //     return;
    // }
=======
>>>>>>> 2d5f1cec63269f80bdd173534c77f23e2cecd3ca


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
<<<<<<< HEAD
        updateTextColor();
    }
    
=======
    }
>>>>>>> 2d5f1cec63269f80bdd173534c77f23e2cecd3ca
}


function handleSubmit() {
<<<<<<< HEAD
    let userInput = document.getElementById("enterAnything").value;
    dataState.enterText = userInput;
  
    let textdiv = document.getElementById("textdiv");
    textdiv.innerHTML = `Entered Data: ${userInput}`;
    let emptyInput = document.getElementById("enterAnything").value = " ";
    dataState.selectColor.innerHTML = "";

  }
  


function updateTextColor() {
    let textdiv = document.getElementById("textdiv")
    if(dataState.selectColor){
        if(dataState.selectColor==="div2"){
            textdiv.style.color = "yellow";
    }
        
            else if(dataState.selectColor==="div3"){
                textdiv.style.color = "green";

        }
        else if (dataState.selectColor==="div4"){
           
            textdiv.style.color = "red";

    }
}
else{
    textdiv.style.color = "black";
}
}

function handleReset() {
    
    dataState.enterText = "";

   
    dataState.selectColor = "";
    renderUI();
    
}






=======


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
>>>>>>> 2d5f1cec63269f80bdd173534c77f23e2cecd3ca
