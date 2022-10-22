const input_1 = document.querySelector('.addition-table__input-1 input'),
    input_2 = document.querySelector('.addition-table__input-2 input');

const actionBtn = document.querySelector('.addition-table__btn'),
    actionOption = document.querySelector('.addition-table__options .list');

const listOfItems = document.querySelector('.item-table'),
    allItems = document.getElementsByClassName('item-table__item');

const textOfActBtn = document.querySelector('.addition-table__btn a')

let numOfAct;

input_2.disabled = true;

let itemsArr = ['задача номер 1'];

const printList = () => {
    listOfItems.innerHTML = '';
    for (item of itemsArr) {
        listOfItems.innerHTML += `
            <div class="item-table__item">
                <span>${item}</span> 
            </div>
        `;
    }
}


const addItem = () => {
    itemsArr.push(input_1.value);
    printList();
}


const deleteItem = () => {
    let itemIndex = itemsArr.findIndex(ind => ind == input_1.value);
    if (itemsArr.includes(input_1.value)) {
        itemsArr.splice(itemIndex, 1);
        printList();
    }
    else {
        alert('Такого элемента в списке нету!');
    }
}


const editItem = () => {
    let itemIndex = itemsArr.findIndex(ind => ind == input_1.value);
    if (itemsArr.includes(input_1.value)) {
        itemsArr.splice(itemIndex, 1, input_2.value);
        printList();
    }
    else {
        alert('Такого элемента в списке нету!');
    }
}


actionOption.addEventListener('click', () => {
    numOfAct = actionOption.selectedIndex;
    switch (numOfAct) {
        case 0:
            textOfActBtn.innerHTML = actionOption[numOfAct].text;
            input_1.placeholder = 'Введите новый элемент';
            input_1.classList.remove('delete', 'edit');
            input_1.classList.add('add');
            input_2.classList.remove('edit');
            input_2.disabled = true;
            break;
        case 1:
            textOfActBtn.innerHTML = actionOption[numOfAct].text;
            input_1.placeholder = 'Введите удаляемый элемент';
            input_1.classList.remove('add', 'edit');
            input_1.classList.add('delete');
            input_2.classList.remove('edit');
            input_2.disabled = true;
            break;
        case 2:
            textOfActBtn.innerHTML = actionOption[numOfAct].text;
            input_1.placeholder = 'Введите редактируемый элемент';
            input_1.classList.remove('add', 'delete');
            input_1.classList.add('edit');
            input_2.classList.add('edit');
            input_2.disabled = false;
            break;
        default:
            alert('неизвестная ошибка!');
    }
    input_1.value = '';
    input_2.value = '';
});


actionBtn.addEventListener('click', () => {
    numOfAct = actionOption.selectedIndex;
    if (input_1.value == '') {
        alert('Строка для ввода пуста!');
        numOfAct = -1;
    }
    switch (numOfAct) {
        case 0:
            addItem();
            break;
        case 1:
            deleteItem();
            break;
        case 2:
            if (input_2.value == '') {
                alert('Одна из строк ввода пуста!');
                break;
            }
            editItem();
            break;
    }
    input_1.value = '';
    input_2.value = '';
});

printList();