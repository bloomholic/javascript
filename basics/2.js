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
btn2.addEventListener ('mouseover', (e) => {
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

const newTag = document.createElement('div');
console.log (newTag);
newTag.className = "new";
const newTextNode = document.createTextNode('text-node');
newTag.appendChild(newTextNode);
const newHtml = document.createElement('div');
newHtml.className = 'html';
newHtml.innerHTML = "<div class=\"1\"><div class=\"2\"></div></div>"
console.log(newHtml);

const buttonClick = () => {
    console.log ('button click');
}




// box.addEventListener ('mousemove', (e) => {
//     console.log('event listner');
//     console.log (e);
//     console.log('Event Type: ' + e.offsetX);
// });
// function changeColor (e) {
//     console.log('Event Type: ' + e.pageX);    
// }
const position = document.querySelector('.position');

// function eventValue (e) {
//     console.log(e.clientX);
//     console.log(e.offsetY);
//     position.innerText = `${e.clientX} : X, ${e.clientY} : Y`;
//     document.body.style.background = `rgb(${e.offsetX}, ${e.offsetY}, 10)`;
//     // console.log(`rgb(${e.clientX}, ${e.clientY}, 10)`);
//     const cssProperties = [
//         { property: 'textAlign', value: 'center' },
//         { property: 'fontSize', value: '3rem' },
//         { property: 'width', value: '90%' },
//         { property: 'margin', value: '0 auto' }
//     ];
    
//     // Loop through each element
//         // Loop through each CSS property and apply it to the element
//         for (let j = 0; j < cssProperties.length; j++) {
//             let property = cssProperties[j].property;
//             let value = cssProperties[j].value;
    
//             // Apply CSS property to the element
//             position.style[property] = value;
//         }
    
// };


function eventValue (e) {
    console.log(e.clientX);
    console.log(e.offsetY);
    position.innerText = `${e.clientX} : X, ${e.clientY} : Y`;
    document.body.style.background = `rgb(${e.offsetX}, ${e.offsetY}, 10)`;
};

// Define the throttle function
function throttle(func, delay) {
    let lastCalledTime = 0;
    return function(...args) {
        const now = new Date().getTime();
        if (now - lastCalledTime >= delay) {
            func.apply(this, args);
            lastCalledTime = now;
        }
    };
}

// Wrap your event handler with the throttle function
const throttledEventValue = throttle(eventValue, 100); // Adjust delay as needed
box.addEventListener('mousemove', e => {
    throttledEventValue(e);
});





const box2 = document.querySelector('#box');

function functionName (e) {
    
}

box2.addEventListener('click', (e) => {
    functionName(e);
})


box2.addEventListener (

)












box2.addEventListener('event', (e) => {
    position.innerText = `${e.offsetX} ${e.clientX}`;
});



