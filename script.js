const inputField = document.querySelector('.inputField');
const btn = document.querySelector('.btn');
const list = document.querySelector ('.list');


document.addEventListener('keydown', function(e) {
if (event.keyCode === 13) {
const item =  document.createElement('li');
item.innerText = inputField.value;
item.classList.add('aded');
list.appendChild(item)
inputField.value = " ";


item.addEventListener('click', () => { 
    item.classList.add('complited');
})

item.addEventListener('dblclick', () => {
    list.removeChild(item);
})
}
});

btn.addEventListener('click', () => {
    const item =  document.createElement('li');
    item.innerText = inputField.value;
    item.classList.add('aded');
    list.appendChild(item)
    inputField.value = " ";

item.addEventListener('click', () => { 
    item.classList.add('complited');
})

item.addEventListener('dblclick', () => {
    list.removeChild(item);
})
})

