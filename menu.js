
//js do menu

//variavel que guarda qual o ativo no momento
let CurrentActive;

const setup = () => {

    //define os event listeners dos botões
    document.getElementById('pizza').addEventListener('click', pizzaHandler);
    document.getElementById('salads').addEventListener('click', saladsHandler);
    document.getElementById('starter').addEventListener('click', starterHandler);

    GeneralHandler('pizza', pizzaTemplate);

};

//callback dos event listeners
const pizzaHandler = () => {
    GeneralHandler('pizza', pizzaTemplate);
};

const saladsHandler = () => {
    GeneralHandler('salads', saladsTemplate);
};

const starterHandler = () => {
    GeneralHandler('starter', starterTemplate);
};

//handler que cuida de todos os event listeners
const GeneralHandler = (idName, arrTemplate) => {

    if (CurrentActive !== idName) {
        apagaHTML();
        renderHtml(idName, arrTemplate);
        CurrentActive = attActive(idName);
    }

};

const apagaHTML = () => {
    document.querySelector('.content-box').textContent = '';
};

//coloca o conteudo correto na tela
const renderHtml = (idName, arrTemplate) => {

    arrTemplate.forEach( el => {

        const markup = `    
            <div class="content">
                <span class="content__price-box">$${el.price.toFixed(2)}</span>

                <h3 class="content__item-name">${el.name} ${ el.greyBox ? `<span class="content__grey-box">${el.text}</span>` : '' } ${ el.redBox ? '<span class="content__red-box">HOT!</span>'  : '' } </h3>
                <p class="content__item-description">${el.description}</p>
            </div>
        `;

        document.querySelector('.content-box').insertAdjacentHTML('beforeend', markup);
    });
};

//função que atualiza a active class
const attActive = (idName) => {
    //seleciona todos os botões do menu
    let ArrButtons = Array.from(document.querySelectorAll('.menu__button'));

    //retira a classe active de todos e coloca só na que foi clicada
    ArrButtons.forEach(el => {
        el.classList.remove('active');

        if (el.id === idName)
            el.classList.add('active');

    });

    return idName;
};

/* 
Objetos a serem usados como template
*/

class Template {
    constructor(name, description, price, greyBox, redBox, text) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.greyBox = greyBox;
        this.redBox = redBox;
        
        if(this.greyBox) {
            this.text = text;
        }
    }
}


const pizzaTemplate = [
    new Template('Margherita', 'FRESH TOMATOES, FRESH MOZZARELLA, FRESH BASIL,', 12.50, false, false),
    new Template('Formaggio', 'FOUR CHEESES (MOZZARELLA, PARMESAN, PECORINO, JARLSBERG)', 15.50, false, false),
    new Template('Chicken', 'FRESH TOMATOES, MOZZARELLA, CHICKEN, ONIONS', 17.00, false, false),
    new Template("Pineapple'o'clock", 'FRESH TOMATOES, MOZZARELLA, FRESH PINEAPPLE, BACON, FRESH BASIL', 16.50, false, false),
    new Template('Meat Town', 'FRESH TOMATOES, MOZZARELLA, HOT PEPPORONI, SAUSAGE, BEEF, CHICKEN', 20.00, false, true),
    new Template('Parma', 'FRESH TOMATOES, MOZZARELLA, PARMA, BACON, FRESH ARUGUIA', 21.50, true, false, 'NEW')
];

const saladsTemplate = [
    new Template('Lasagna', 'SPECIAL SAUCE, MOZZARELLA, PARMESAN, GROUND BEEF', 13.50, true, false, 'POPULAR'),
    new Template('Ravioli', 'RAVIOLI FILLED WITH CHESSE', 14.5, false, false),
    new Template('Spaghetti Classica', 'FRESH TOMATOES, ONIONS, GROUND BEEF', 11, false, false),
    new Template('Seafood Pasta', 'SALMON, SHRIMP, LOBSTER, GARLIC', 25.5, false, false)
];

const starterTemplate = [
    new Template("Today's Soup", 'ASK THE WAITER', 5.5, true, false, 'SEASONAL'),
    new Template('BRUSCHETTA', 'BREAD WITH PESTO, TOMATOES, ONION, GARLIC', 8.5, false, false),
    new Template('Garlic Bread', 'GRILLED CIABATTA, GARLIC BUTTER, ONIONS', 9.5, false, false),
    new Template('Tomozzarella', 'TOMATOES AND MOZZARELLA', 10.5, false, false)
]


setup();
