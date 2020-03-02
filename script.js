let nomes = ['whesley', 'aline', 'joão'];
let listElement = document.querySelector('ul');
let inputElement = document.querySelector('input');


document.getElementById('btn').addEventListener('click',()=>{
    addItem(inputElement.value);
    inputElement.value = '';
})