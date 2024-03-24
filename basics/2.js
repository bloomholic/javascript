// Use only getelementbyId and querySelector or querySelectorAll they give nodelist similar to array, older ones gives html list on which array functions dont work 
console.log(window);
const items = document.querySelectorAll('.item');
console.log(items);
items.forEach(function(item) {
    console.log(item);
})
items.forEach((item) => 
    console.log(item));

const ul = document.querySelector('.items');
// ul.children[1].remove();
ul.firstElementChild.textContent = "yo";
ul.lastElementChild.innerText = "<h1>Bold Text</h1>";
document.querySelector('.btn').style.background = 'red';
const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
 
});
btn.addEventListener('click', b => {

})
const cons = () => {console.log('abc')};

btn.addEventListener('click', cons);

btn.addEventListener('click', e => {
    e.preventDefault();
    console.log('abc'); 
    console.log(e);
    console.log(e.target);
    console.log(e.target.className);
    console.log(e.target.tagName);
})


const btn2 = document.querySelector('.btn');
btn2.addEventListener ('mousehover', (e) => {
    e.preventDefault;
    document.querySelector('#my-form').style.background = '#333';
    document.querySelector('.container').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1 style=\'font-size: 3rem\'> Hello </h1>';
})
// abc.addEventListener (a, b => {

// })

// function abc (a, b) {

// }
// const abc = (a, b) => {

// }
// const abc = (a, b => {

// })