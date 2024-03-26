
// search button 

const searchInput = document.querySelector('#searchInput');
const searchButton = document.getElementById('searchButton');
console.log(searchButton);


searchButton.addEventListener('click', (e) => {

    const itemGroup = document.getElementById('itemGroup');

    const liGroup = itemGroup.getElementsByTagName('li');

    const arrayLiGroup = Array.from(liGroup);
    
    let searchInputValue = searchInput.value.trim().toLowerCase();
    console.log(searchInputValue);
    if(searchInputValue !== "") {
        arrayLiGroup.forEach(element => {
            let liText = element.firstChild.textContent.toLowerCase();
            if(liText.indexOf(searchInputValue) !== -1) {
                console.log(liText);
                console.log(element);
                element.style.display = "flex";
              }
              else {
                element.style.display = "none";
                element.style.setProperty('display', 'none', 'important');
              }
        });
      
    }
    else{
        arrayLiGroup.forEach(element=> {
            element.style.display = "flex";
        })
    }
})


// show all button 

const showAll = document.querySelector('#showAll');
showAll.addEventListener('click', (e) => {
    const itemGroup = document.getElementById('itemGroup');

    const liGroup = itemGroup.getElementsByTagName('li');

    const arrayLiGroup = Array.from(liGroup);
    let searchInputValue = searchInput.value.trim().toLowerCase();

    arrayLiGroup.forEach(element => {
        let liText = element.firstChild.textContent.toLowerCase();

        element.style.display = "flex";       
});
});


// add list 
const addItemInput = document.querySelector('#addItemInput');
const addItemBtn = document.querySelector('#addItemBtn');
console.log(addItemBtn);

addItemBtn.addEventListener('click', (e) => {
    console.log(addItemInput.value.trim());
    if (addItemInput.value.trim() !== "") {
        const newElement = document.createElement('li');
        newElement.classList.add('list-group-item', 'd-flex', 'flex-row', 'justify-content-between');
        newElement.innerHTML = addItemInput.value+"<button class=\"btn btn-danger btn-sm delete\">X</button>";
        
        itemGroup.appendChild(newElement);

        
    }
});


// delete button

itemGroup.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')){
        console.log(e);
        console.log(e.target.parentElement);
        e.target.parentElement.remove();
    }
});