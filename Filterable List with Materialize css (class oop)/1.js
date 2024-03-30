const search = document.getElementById('search');
const ul = document.querySelector('ul');
// const list = Array.from(document.querySelector('.collection.with-header').children);
const list = document.querySelectorAll('.collection-item');
document.addEventListener('DOMContentLoaded',(e)=>{
    console.log(search.value);
    console.log(list);
})

// Below code functional. Made without any class 

// search.addEventListener('input',(e)=>{
//     console.log('event');
//     console.log(list);
//             console.log(e);
//             console.log(e.target.value);
//     list.forEach(element => {
//         if(element.textContent.toUpperCase().indexOf(e.target.value.toUpperCase()) !== -1){
//             element.style.display = "block";
//         }
//         else {
//             element.style.display = "none";
            
//             console.log(element.textContent);
//         }
//     });
// })


// Below code is with class, classes are used extensively for learning purpose. Most of them are not really required for this small use case 
class Search {
    // static value(){
    //     return search.value;
    // }
    static list() {
        // returns array of list (of items to be searched)
        return list;
    }
    static textUpperCase(i){
        i.forEach(element => {
            console.log(element.textContent.toUpperCase());
            return element.textContent.toUpperCase();
        })
        console.log(i);
        
    }

    static value() {
        console.log(search);
        console.log(search.value);
        console.log(search.value.toUpperCase());
        return search.value.toUpperCase();
    }
    // static listTextUpper(i){
        
    // }
    static listSearch(listValue){
        listValue.forEach(i => {
            // using Search.value() method 
            console.log(i.textContent.toUpperCase());
            if(i.textContent.toUpperCase().indexOf(Search.value()) !== -1){
                i.style.display="block";
            }
            else{
                i.style.display="none";
            }
        });
    }
}
// Event listner to call function 
search.addEventListener('input', (e) => {
    Search.listSearch(Search.list());
});

