let counter = 0
let totalPrice = 0

function createCard (arr){
    const li = document.createElement('li');
    const tag = document.createElement('span');
    const img = document.createElement('img');
    const div = document.createElement('div'); 
        const nameItem = document.createElement('span');
        const description = document.createElement('span');
        const price = document.createElement('span');
        const button = document.createElement('button');

    button.id =  arr.id
    div.className = 'styleLi'
    li.className = 'cards'
    tag.className = arr.tag[0]
    tag.style = `
    background:#1971c2;
    color: white;
    padding: 6px;
    `
    tag.append(arr.tag[0])
    div.append(tag, nameItem, description, price, button)
    img.src = arr.img;
    img.alt = arr.nameItem
    nameItem.append(arr.nameItem)
    nameItem.style = `
    font-size: 22px`
    description.append(arr.description);
    description.style = `
    font-size: small
    `
    price.append(`R$ ${arr.value},00`);
    button.innerText = 'Adicionar ao carrinho'
    button.className = 'btn'
    li.append(img, div)

    button.addEventListener('click', function(event){

        counter += 1
        document.querySelector('.quantities').children[1].innerText = counter

        totalPrice += arr.value
        document.querySelector('.totalPrice').children[1].innerText = `R$ ${totalPrice},00` 

        const cartEmpty = document.querySelector('#empty')
        const withoutDetails = document.querySelector('#details')

        if (cartEmpty.className != null && 
            withoutDetails.className !=null ){
        cartEmpty.className = 'cart-empty-hidden';
        withoutDetails.className = 'cart-details';
        }
        cartCard(arr) 
    })
    return li
}
function cartCard(arr){
    const li = document.createElement('li');
    const img = document.createElement('img');
    const div = document.createElement('div')
    const name = document.createElement('span');
    const price = document.createElement('span');
    const button = document.createElement('button');
    
    li.className = 'cartLi'

    img.src = arr.img;
    img.className = 'cartImg'
    img.alt = arr.nameItem
    img.style = 'width: 120px'

    name.append(arr.nameItem)
    name.style = 'font-weight: bold'

    price.append(`R$ ${arr.value},00`)
    price.className = 'priceCart'
    price.style = `color: #1c7ed6`

    button.innerText = 'Remover produto'
    button.className = 'removeButton'

    div.className = 'div-cartProducts'
    div.append(name, price, button)
    
    li.append(img, div)

    const ul = document.querySelector('.cart-list')
    ul.append(li)

    button.addEventListener('click', function(){ //Botão de remove
        counter -= 1
        document.querySelector('.quantities').children[1].innerText = counter

        totalPrice -= arr.value 
        document.querySelector('.totalPrice').children[1].innerText = `R$ ${totalPrice},00`

        li.remove()

        if (document.querySelector('.cartLi') == null){
        const cartEmpty = document.querySelector('#empty')
        cartEmpty.className = 'cart-empty'
        const withoutDetails = document.querySelector('#details')
        withoutDetails.className = 'cart-details-hidden'
        }
    })
}
function listCards(list){
    const ul = document.querySelector('#containerUl')
    ul.innerHTML = ''
    for (let i = 0; i<list.length; i++){
        const li = createCard(list[i])
        ul.appendChild(li)
    }
}
function filteredCards(type){
    if (type == 'Todos'){
        return listCards(data)
    }
    let itensFiltereds = []
    for (let i=0; i < data.length; i++){
        if(data[i].tag == type){
            itensFiltereds.push(data[i])
        }
    } 
    listCards(itensFiltereds)
}
const buttonsFilters = document.querySelectorAll('.filter')
for (let i = 0; i<buttonsFilters.length; i++){
    buttonsFilters[i].addEventListener('click', function(){
    filteredCards(buttonsFilters[i].innerText);
    })
}
const searchButton = document.querySelector('.search-button')
    searchButton.addEventListener('click', function(){
    const search = document.querySelector('.search-input').value;
    let aux = [];
    if (search != ''){
        for(let j = 0; j < data.length; j++){
            if (data[j].nameItem.includes(search) ||
            data[j].tag[0].includes(search)) {
            aux.push(data[j]);  
            }
        }
        listCards(aux);
    }
})

listCards(data)