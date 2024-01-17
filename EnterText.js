
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
    nameInput.onchange = function (event) {
        dataState.enterText = event.target.value;
        // console.log("22222", dataState.enterText)
        // console.log("3333", event)
        // console.log("4444", event.target)
        // console.log("555", event.target.value)
    }
    div1.appendChild(nameInput);

   

    let submitButton = document.createElement("button");
    submitButton.setAttribute("name", "submit");
    submitButton.textContent = "Submit";
    submitButton.onclick =function(){
        // handleSubmit();
        // updateTextColor();
        let res = document.getElementById("textdiv")
        res.textContent = `Entered Data: ${dataState.enterText}`;
        res.style.color = dataState.selectColor;
    };
    div1.appendChild(submitButton);

    let resetButton = document.createElement("button");
    resetButton.setAttribute("name", "reset");
    resetButton.textContent = "Reset";
    resetButton.onclick = handleReset;
    div1.appendChild(resetButton);
    


    


    let textdiv = document.createElement("div");

    textdiv.setAttribute("id", "textdiv");
    div1.appendChild(textdiv);

    // let divParent = document.createElement("div");
    // divParent.setAttribute("id", "divParent");
    // div1.appendChild(divParent);

    let div2 = document.createElement("div");
    div2.setAttribute("id", "yellow");
    div2.style.backgroundColor = "yellow";
    div1.appendChild(div2);
    div2.onclick = function() {
        handleDivClick(div2.id);
        // updateTextColor(event);
    };


    let div3 = document.createElement("div");
    div3.setAttribute("id", "green");
    div3.style.backgroundColor = "green";
    div1.appendChild(div3);
    div3.onclick = function() {
        handleDivClick(div3.id);
        // updateTextColor(event);
    };

    let div4 = document.createElement("div");
    div4.setAttribute("id", "red");
    div4.style.backgroundColor = "red";
    div1.appendChild(div4);
    div4.onclick = function() {
        handleDivClick(div4.id);
        // updateTextColor(event);
    };

    main_div.appendChild(div1);
}


function handleDivClick(color) {

    // if (dataState.enterText !== "") {
        
    //     return;
    // }
    // if (dataState.selectColor === divId) {
    //     // If the clicked div is already selected, do nothing
    //     return;
    // }


    if (dataState.selectColor) {
        let previousDiv = document.getElementById(dataState.selectColor);
        if (previousDiv) {
            previousDiv.style.border = "";
        }
    }


    // let divClicked = document.getElementById(divId);
    // if (divClicked) {
    //     divClicked.style.border = "5px solid blue"
    //     dataState.selectColor = divId;
        
    //     // updateTextColor();
    // }

    document.getElementById(color).style.border = "5px solid blue";
    dataState.selectColor = color;
    
    // console.log("11111",dataState.selectColor)    
}


function handleReset() {
    
    dataState.enterText = "";

   
    dataState.selectColor = "";
    
    renderUI();
    
}



























// function handleSubmit() {
//     // let userInput = document.getElementById("enterAnything").value;
//     // dataState.enterText = userInput;
//     dataState.enterText = document.getElementById("enterAnything").value;
  
//     let textdiv = document.getElementById("textdiv");
//     // textdiv.innerHTML = `Entered Data: ${userInput}`;
//     textdiv.innerHTML = `Entered Data: ${dataState.enterText}`;


//     // console.log(dataState.enterText);
//     // let emptyInput = document.getElementById("enterAnything").value = " ";
//     // dataState.selectColor.innerHTML = "";
//     // handleSubmit();

//   }



  


  


// function updateTextColor(event) {
//     dataState.selectColor = event.target.id
    
// //     let textdiv = document.getElementById("textdiv")
// //     if(dataState.selectColor){
// //         if(dataState.selectColor==="div2"){
// //             textdiv.style.color = "yellow";
// //     }
        
// //             else if(dataState.selectColor==="div3"){
// //                 textdiv.style.color = "green";

// //         }
// //         else if (dataState.selectColor==="div4"){
           
// //             textdiv.style.color = "red";

// //     }
// // }
// // else{
// //     textdiv.style.color = "black";
// // }
// }



// function updateTextColor() {
//     let textdiv = document.getElementById("textdiv");
  
//     if (dataState.selectColor) {
//       if (dataState.selectColor === "div2") {
//         dataState.enterText = "yellow";
//       } else if (dataState.selectColor === "div3") {
//         dataState.enterText = "green";
//       } else if (dataState.selectColor === "div4") {
//         dataState.enterText = "red";
//       }
//     } else {
//       dataState.enterText = "black";
//     }
//     textdiv.textContent = `Entered Data: ${dataState.enterText}`;
//   textdiv.style.color = dataState.enterText;
// }












