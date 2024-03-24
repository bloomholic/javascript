const name = document.querySelector('#name');
// name.value = "name";
const email = document.querySelector('#email');
// email.value = "email";
const msg = document.querySelector('.msg');
const submit = document.querySelector('.btn');
const form = document.querySelector('#my-form');
const user = document.querySelector('#users');
// console.log (name.value + 'abc');
function validation (name, email) {
    if(name.value.trim() !== '' && email.value.trim() !== '') {
        msg.textContent =  'User added'; 
        // user.style.padding = "2rem";
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`User ${name.value} with email ${email.value} added`));
        user.appendChild(li); 
        name.value ='';
        email.value = '';
    }
    else {
        msg.textContent =  'Please fill all details'; 
    }
    setTimeout (function() {
        msg.textContent = '';
    }, 3000);
    // messageTimeout = setTimeout(() => {
    //     msg.textContent = '';
    //   }, 3000);
}
submit.addEventListener('click', (e) => {
    e.preventDefault();
    validation(name, email);
});

// submit.addEventListener('click', (e) => {
//     e.preventDefault();
//     if(name.value.trim() !== '' || email.value.trim() !== '') {
//         msg.textContent =  'User added';      
//         msg.style.color = "green";
//     }
//     else {
//         msg.textContent =  'Please fill all details'; 
//         msg.style.color = "red";
//     }
//     setTimeout (function() {
//         msg.textContent = '';
//     }), 3000;
// })

// form.addEventListener(
//     if {

//     }
//     'submit', (e) => {
//     console.log('form submitted');
//     user.style.padding = "2rem";
//     user.textContent = `User ${name.value} with email ${email.value} added`;
//     e.preventDefault();
//     setTimeout(function(){
//         user.textContent ='';
//         user.style.padding = "0rem";
//     }, 3000);
// });