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