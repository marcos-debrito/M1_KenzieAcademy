let itens = [
    produto1 = {
        image: './assets/img/painting/clock.jpg',
        name: 'Smartwatch',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto2 = {
        image: './assets/img/painting/gamepad.jpg',
        name: 'Controle Playstation',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto3 = {
        image: './assets/img/painting/personagem.jpg',
        name: 'Robot',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto4 = {
        image: './assets/img/actions/animewoman.jpg',
        name: 'Anime Woman',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto5 = {
        image: './assets/img/actions/dragonballpersonagem.jpg',
        name: 'Goku Super Saiyajin',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto6 = {
        image: './assets/img/actions/starwarspersonagem.jpg',
        name: 'Sr Yoda',
        price: 'R$100,00',
        type: 'Action Figures'
    }
    
    
];

let listFrames = [ 

];

let listFigures =[ 

];

function separateItens (arr){ 
    for (let i = 0; i<arr.length; i++ ){
        if (itens[i].type == 'Painting'){
            listFrames.push(itens[i])
        } else if (itens[i].type == 'Action Figures') {
            listFigures.push(itens[i])
        }
    }
}

separateItens(itens)

let secListFrames = document.getElementsByClassName('decorativeFrames')[0] //class UL(1)
let secListFigures = document.getElementsByClassName('actionFigures')[0] //class UL(2)

let sectionsList = [listFrames, listFigures]

for (let j = 0; j < sectionsList.length; j++){

    for (let i = 0; i < sectionsList[j].length; i++){

        //criando card padronizado
        const elementoLista = document.createElement('li'); 
        elementoLista.className = 'item-card'
        const nome = document.createElement('span');  
        nome.innerText = `${sectionsList[j][i].name}`;
        nome.style = `
        font-size: 20px;
        font-weight: bold;`
        const imgCard = document.createElement('img')
        const priceCard = document.createElement('p')
        priceCard.style = `
        font-size: 16px;`
        imgCard.src = sectionsList[j][i].image
        imgCard.alt = sectionsList[j][i].name 
        imgCard.className = 'cards'
        priceCard.innerText = sectionsList[j][i].price

        elementoLista.append(imgCard, nome, priceCard);


        if (sectionsList[j] == listFrames){
            secListFrames.appendChild(elementoLista)
        } else {
            secListFigures.appendChild(elementoLista)
        }
    }
}