let text = 'Hello World!';

let root = document.getElementById('root');

let Axe = {
    race: 'Orc', 
    cl: 'Warrior',
    color: 'red'
};



// root.innerHTML = text + (Axe.race);


// Start practice
let mainList;
mainList = {
    Money: '',
    ShopName: '',
    shopGoods: [],
    employers: '',
    open: true
};

let country = {

    name: "Швейцария",
    languages: ["немецкий", "французский", "итальянский"],
    capital:{

        name: "Берн",
        population: 126598
    },
    cities: [
        { name: "Цюрих", population: 378884},
        { name: "Женева", population: 188634},
        { name: "Базель", population: 164937}
    ]
};

Money = prompt("Ваш бюджет?", '100');
ShopName = prompt("Название вашего магазина?", 'Маргаритка');


console.log(country);