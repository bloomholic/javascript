// Light dark mode toggle 
const light = document.getElementById('light');
const dark = document.getElementById('dark');
const htmlElement = document.querySelector('html');

const dropDownButton = document.getElementById('dropDownButton');
const dropDownMenu = document.getElementById('dropdown-menu3');
dropDownButton.addEventListener('click', (e) => {
    if(dropDownMenu.style.display == "none"){
        dropDownMenu.style.display = "block";
        // Assuming 'element' is the element you want to set the style to
        // dropDownMenu.style.setProperty('display', 'block', 'important');

    }
    else{
        dropDownMenu.style.display = "none"
        // dropDownMenu.style.setProperty('display', 'hidden', 'important');
    }
});


document.addEventListener('DOMContentLoaded', () => {
    if(htmlElement.getAttribute('data-theme')==='dark'){
        dark.style.backgroundColor = 'blue';
        dark.style.color = "white";
        light.style.backgroundColor = 'inherit';
        light.style.color = "inherit";
    }
    else{
        light.style.backgroundColor = 'blue';
        light.style.color = "white";
        dark.style.backgroundColor = 'inherit';
        dark.style.color = "inherit";
    }
})

light.addEventListener('click', () => {
    htmlElement.setAttribute('data-theme', 'light');
    dark.classList.remove("is-active");
    light.classList.add("is-active");
    dropDownMenu.style.display = "none"
    light.style.backgroundColor = 'blue';
    light.style.color = "white";
    dark.style.backgroundColor = 'inherit';
    dark.style.color = "inherit";
})
dark.addEventListener('click', () => {
    htmlElement.setAttribute('data-theme', 'dark');
    dark.classList.add("is-active");
    light.classList.remove("is-active");
    dropDownMenu.style.display = "none"
    dark.style.backgroundColor = 'blue';
    dark.style.color = "white";
    light.style.backgroundColor = 'inherit';
    light.style.color = "inherit";
})




// main js code 

const input = document.getElementById('input');
const gramValue = document.querySelector('#gram>div')
const poundValue = document.querySelector('#pound>div')
const ounceValue = document.querySelector('#ounce>div')
console.log(gramValue);
class Ui {
    static gram(i) {
        gramValue.textContent = i*1000 + "gm";
    }
    static pound(i) {
        poundValue.textContent = i*2.20462262 + "gm";
    }
    static ounce(i) {
        ounceValue.textContent = i*35.2739619 + "gm";
    }
    static setValue(i){
        Ui.gram(i);
        Ui.pound(i);
        Ui.ounce(i);
    }
}
input.addEventListener('input', (e)=>{
    console.log(e.target.value);
    Ui.setValue(e.target.value);
})