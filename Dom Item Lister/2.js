// Light dark mode toggle 
const light = document.getElementById('light');
const dark = document.getElementById('dark');
const htmlElement = document.querySelector('html');

light.addEventListener('click', () => {
    htmlElement.dataset.bsTheme = 'light';
    dark.classList.remove("active");
    light.classList.add("active");
})
dark.addEventListener('click', () => {
    htmlElement.dataset.bsTheme = 'dark';
    dark.classList.add("active");
    light.classList.remove("active");
})


// add Item 
const addForm = document.getElementById('addForm');
const addItemInput = document.getElementById('addItemInput');
const itemGroup = document.getElementById('itemGroup');

console.log('addItemInput');

addForm.addEventListener('submit', (e) => {
    if(addItemInput.value.trim() !== ""){
        const newElement = document.createElement('li');
        newElement.className = "list-group-item d-flex flex-row justify-content-between";
        newElement.innerHTML = addItemInput.value.trim() + "<button class=\"btn btn-danger btn-sm delete\">X</button>";
        itemGroup.appendChild(newElement);
    }
    else {
         // Empty block indicating nothing to execute
    };
});


// delete function 
itemGroup.addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target.classList.contains('delete')) {
        if(confirm("Sure?")){
            e.target.parentElement.remove();
        }
       
    }
    else {
         // Empty block indicating nothing to execute
    };
});

// search 

const searchInput = document.getElementById('searchInput');
console.log(searchInput);

searchInput.addEventListener('keyup', (e) => {
    console.log(e.target.value.toLowerCase());
    const inputValue = e.target.value.toLowerCase();
    console.log(inputValue + "inputvalue");
    const li = Array.from(itemGroup.getElementsByTagName('li'));
    console.log(li[0].childNodes[0]);
    li.forEach(i => {
        console.log(i.childNodes[0].textContent);
        if(i.childNodes[0].textContent.toLowerCase().indexOf(inputValue) !== -1) {
            console.log(i + 'yes');
            i.style.display = "flex";
        }
        else {
            i.style.display = "none";
            i.style.setProperty("display", "none", "important");
        }
    });
});

// show all button 
const showAll = document.getElementById('showAll');

showAll.addEventListener('click', (e) => {
    const li = Array.from(itemGroup.getElementsByTagName('li'));
    li.forEach(i=> {
        i.style.display = "flex";
    })
})
