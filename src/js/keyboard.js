import { textRefs } from "./textarea"
import { text } from "./textarea";

export const refs = {
    keyboard: document.querySelector(".keyboard"),
    firstPart: document.querySelector(".first_part"),
    secondPart: document.querySelector(".second_part"),
}

let string = "";

refs.keyboard.addEventListener('mousedown', onKeyBtnDown)
refs.keyboard.addEventListener('mouseup', onKeyBtnUp)
document.addEventListener('keydown', onBtnDown)
document.addEventListener('keyup', onBtnUp)

function onKeyBtnDown(evt) {
    if (evt.target.matches("div.key_btn")) {
evt.target.classList.add("key_btn_active")
    }
    if (evt.target.matches("p.key_btn_text_en")) {
evt.target.parentElement.classList.add("key_btn_active")
    }
}


function onKeyBtnUp(evt) {
    if (evt.target.matches("div.key_btn")) {
evt.target.classList.remove("key_btn_active")
    }
        if (evt.target.matches("p.key_btn_text_en")) {
evt.target.parentElement.classList.remove("key_btn_active")
        }
}

export let insertedText = "";
export let restInsertedText = "";
export let objCounter = {
    counter: 1,
    textCounter: 0,
};


function onBtnDown(evt) {
    if (textRefs.textArea.classList.contains("inserted")) {
 
        insertedText = text.substring(0, objCounter.counter)
        console.log(objCounter.textCounter)
        console.log(evt.key)
        restInsertedText = text.substring(objCounter.counter)
        console.log(restInsertedText)
        console.log(insertedText[objCounter.textCounter])

        if (evt.key.toLowerCase() === insertedText[objCounter.textCounter].toLowerCase()) {
                textRefs.textArea.classList.add("hide")
                refs.firstPart.textContent = insertedText
            refs.secondPart.textContent = restInsertedText    
            objCounter.counter += 1   
            objCounter.textCounter += 1
            const key = document.getElementById(`${evt.key.toLowerCase()}`)
                key.parentElement.classList.add("key_btn_active")
               }
    }
   else if (evt.key.length === 1 && evt.code !== "Space") {
    const key = document.getElementById(`${evt.key.toLowerCase()}`)
    string += evt.key
    textRefs.textArea.textContent = string
    key.parentElement.classList.add("key_btn_active")
    }
   else if (evt.code === "Space") {
    const key = document.getElementById(`${evt.code.toLowerCase()}`)
    string+=evt.key
    textRefs.textArea.textContent = string
        key.classList.add("key_btn_active")
    }
 
}

function onBtnUp(evt) {
    if (evt.key.length === 1 && evt.code !== "Space" || textRefs.textArea.classList.contains("inserted")) {
        const key = document.getElementById(`${evt.key.toLowerCase()}`)
        key.parentElement.classList.remove("key_btn_active")
    }  else if (evt.code === "Space") {
    const key = document.getElementById(`${evt.code.toLowerCase()}`)
    string+=evt.key
    textRefs.textArea.textContent = string
        key.classList.remove("key_btn_active")
    }

}
