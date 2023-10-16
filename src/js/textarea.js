import { refs } from "./keyboard";
import { insertedText,objCounter,restInsertedText } from "./keyboard";

export const textRefs = {
    textArea: document.querySelector(".textArea"),
    input: document.querySelector(".text_input"),
    button: document.querySelector(".text_btn"),
    buttonClear: document.querySelector(".text_btn_clear")
}

textRefs.button.addEventListener("click", onBtnClick)
textRefs.buttonClear.addEventListener("click", onClearBtnClic)

export let text = "";

function onBtnClick() {
    refs.firstPart.textContent = ""
    refs.secondPart.textContent = ""
    textRefs.textArea.textContent = textRefs.input.value
    text = textRefs.input.value;
     textRefs.textArea.classList.add("inserted")
    textRefs.input.value = ""
}

function onClearBtnClic() {
    refs.firstPart.textContent = ""
    refs.secondPart.textContent = ""
    textRefs.textArea.textContent = ""  
    textRefs.textArea.classList.remove("inserted")
    textRefs.textArea.classList.remove("hide")
    text = ""
    objCounter.counter = 1
    objCounter.textCounter = 0
    insertedText = ""
    restInsertedText = ""
}

