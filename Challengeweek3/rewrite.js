/**
 * Rewriting the massive code blocks from the script.js as a series of functions to call
 * And compressing the createElement style document generation into innerHTML
 * 
 */

// change background function, receives the img name and an indicator if the font needs to be white

function changeBackground(image, font, h1, result, question) {
    let background = document.querySelector(".contentArea");
    image = ""
    background.style.backgroundImage = `url("./media/${image}.jpg")` ;
    background.style.backgroundSize = "100% 100%";
    if (font === "white") {
        h1.style.color = "white";
        result.style.color ="white";
        question.style.color = "white";
    } else {
        h1.style.color = "black";
        result.style.color ="black";
        question.style.color = "black";
      }
}

// function to generate the form for each button page

function createForm(buttonNumber, numberInputs, labelArray, contentForm) {
    let form =document.createElement("form");
    form.id = "form";
    let n = 0;
    while (n < numberInputs){
        let label = document.createElement("label");
        label.innerText = labelArray[buttonNumber-1][n];
        label.for = labelArray[buttonNumber-1][n];
        let input = document.createElement("input");
        input.type = "text";
        input.id = labelArray[buttonNumber-1][n]
        form.appendChild(label);
        form.appendChild(input);
        if (n != numberInputs -1){
            let line = document.createElement("br");
            form.appendChild(line);
        }
        n++;
    }
    let submit = document.createElement("input");
    submit.value = "Submit";
    submit.type = "submit";
    submit.id = "submitButton";
    form.appendChild(submit);
    contentForm.appendChild(form);
    
}