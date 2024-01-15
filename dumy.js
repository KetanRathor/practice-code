
let dataState = {
    enterText: "",
    selectColor: ""
};

function renderUI() {
    let main_div=document.getElementById('root')
    main_div.innerHTML="";

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
    resetButton.onclick = function() {
    renderUI()
    };
    div1.appendChild(resetButton);


    main_div.appendChild(div1);


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
        handleDivClick("div2");
        updateTextColor();
    };


    let div3 = document.createElement("div");
    div3.setAttribute("id", "div3");
    divParent.appendChild(div3);
    div3.onclick = function() {
        handleDivClick("div3");
        updateTextColor();
    };

    let div4 = document.createElement("div");
    div4.setAttribute("id", "div4");
    divParent.appendChild(div4);
    div4.onclick = function() {
        handleDivClick("div4");
        updateTextColor();
    };

}


function handleDivClick(divId) {

    if (dataState.enterText !== "") {
        
        return;
    }
    if (dataState.selectColor === divId) {
        // If the clicked div is already selected, do nothing
        return;
    }


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
        updateTextColor();
    }
}


function handleSubmit() {
    let userInput = document.getElementById("enterAnything").value;
    dataState.enterText = userInput;
  
    let textdiv = document.getElementById("textdiv");
    textdiv.innerHTML = `Entered Data: ${userInput}`;
    let emptyInput = document.getElementById("enterAnything").value = " ";
    dataState.selectColor.innerHTML = "";

  }
  

// function handleSubmit() {


//     let userInput = document.getElementById("enterAnything").value;
//     dataState.enterText = userInput;

//     let txt = document.getElementById("textdiv").innerHTML = `Entered Data: ${userInput}`;

//     let emptyInput = document.getElementById("enterAnything").value = " ";
//     dataState.selectColor.innerHTML = "";

// }
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

// reset.onclick = function() {
//     renderUI()
// }

// function handleReset() {

//     let reset = document.getElementById("textdiv");
//     reset.innerHTML = "";

//     if (dataState.selectColor) {
//         let selectedColor = document.getElementById(dataState.selectColor);
//         if (selectedColor) {
//             selectedColor.style.border = "";
//             dataState.selectColor = "";
//             textdiv.style.color = "black";

//         }
        

//     }
//     renderUI();
    

// }

// function handleReset() {
    
//     let resetTextdiv = document.getElementById("textdiv");


    
//     if (dataState.selectColor) {
//         let selectedColor = document.getElementById(dataState.selectColor);
//         if (selectedColor) {
//             selectedColor.style.border = "";
//             dataState.selectColor = "";
//         }
//     }

    
//     resetTextdiv.style.color = "black";
//     renderUI();


    
    
// }






  




