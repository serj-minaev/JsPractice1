// let text = 'Hello World!';
//
// let root = document.getElementById('root');
//
// let Axe = {
//     race: 'Orc',
//     cl: 'Warrior',
//     color: 'red'
// };



// root.innerHTML = text + (Axe.race);


// Start practice
mainList = {
    Money: '',
    ShopName: '',
    shopGoods: [],
    employers: '',
    open: true
};

// mainList.Money = prompt("Ваш бюджет?", '100');
// mainList.ShopName = prompt("Название вашего магазина?", 'Маргаритка');

document.getElementById('name').value = mainList.ShopName;
document.getElementById('budget').value = mainList.Money;
document.getElementById('budget2').value = mainList.Money / 30;

// mainList.shopGoods[0] = document.getElementById('goods1').value;

mainList.shopGoods = [1, 3, 18, 'hello'];


console.log(mainList);

let cifra = 33721;

let divNum = document.querySelector('.num');

if(divNum){
    divNum.innerHTML = cifra.toString();
}


let NumUmn = document.querySelector('.num-umn');

if(NumUmn) {
    cifra = cifra.toString();
    unmojenie = cifra[0] * cifra[1] * cifra[2] * cifra[3] * cifra[4];
    NumUmn.innerHTML = unmojenie;
}

let mathpow = document.querySelector('.mathpow');

if(mathpow){
    mathpow.innerHTML = Math.pow(unmojenie,3)//;
}