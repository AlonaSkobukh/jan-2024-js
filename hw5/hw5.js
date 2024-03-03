// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const calc = (a,b) => a*b;
console.log(calc(5,4));

// створити функцію яка обчислює та повертає площу кола з радіусом r

const circle = (r,pi=3.14) => pi*(r**2);
console.log(circle(3));

// створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const cylinder = (r,h,pi=3.14 ) =>2*pi*r*h;
console.log(cylinder(5,3));

// створити функцію яка приймає масив та виводить кожен його елемент
const elem = (name,age,status) =>
    console.log(` ${name} ; ${age} ; ${status}`)
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
for (const user of users) {
    elem(user.name,user.age,user.status);
}

// створити функцію яка створює параграф з текстом. Текст задати через аргумент
const  writer = text =>
    document.write(`<div>
        <h3>${text}
        </h3>
</div>`);

writer(`Hello my friend`);

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const list = text =>
    document.write(`<ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
</ul>`);

list(`Hello my best friend`);

//////////////////////////////////////////
const listText = text => {
    document.write (`<ul>`)
    for (let i=0;i<3; i++) {
        document.write(`<li>${text}</li>`);}
    document.write (`</ul>`)
}
listText(`Hello my best friend`);

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const lines = (text,count) => {
    document.write (`<ul>`)
    for (let i=0;i<count; i++) {document.write(` <li>${text}</li> `);}
    document.write (`</ul>`)
}
lines(`Goodbye my  friend`,3);


// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

const element = (number,string,bul) => {
    document.write (`<ul>`)
    for (let i=0;i<5;i++) {
        document.write(`<li>${number},${string},${bul}</li>`);}
    document.write (`</ul>`)
}
element(17,`friend`, true)

// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const obj= (id,name,age) =>
    document.write(`<div class="blok"> ${id} ; ${name} ; ${age}</div>`)

let data=[
    {id:`js`,name:`Aa`,age:`20`},
    {id:`js1`,name:`Ab`,age:`21`},
    {id:`js2`,name:`Ac`,age:`22`},
    {id:`js3`,name:`Ad`,age:`23`},
    {id:`js4`,name:`Ai`,age:`24`},
];
for (const datum of data) {
    obj(datum.id,datum.name,datum.age);
}

// створити функцію яка повертає найменьше число з масиву
function min() {
    let min=arguments[0];
    for (const item of arguments) {
        if (item<min){
            min=item;
        }
    }
    console.log(min)
    return min
}
let res1 =min(2,5,8,9,11);

// створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let total=0;
const sum = arr => {
    for (const arrElement of arr) { total+=arrElement;
    }
    return total
}
let num=[6,3,7,5];
console.log(sum(num))
//// створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
//Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let numbers2=[11,22,33,44];
const swap= (arr,index1,index2) => {
    let  num1=arr[index1];
    let  num2=arr[index2];
    arr.splice(index2,1,num1);
    arr.splice(index1,1,num2);
    return console.log(arr)
}
swap(numbers2,0,1)

// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let money=[
    {currency:'USD',value:40},
    {currency:'EUR',value:42}
];
for (const moneyElement of money) {
    console.log(moneyElement)
    for (const key in moneyElement) {
        console.log(key, moneyElement[key]);
    }
}
const exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    if (exchangeCurrency ===currencyValues[0].currency) {
        console.log(sumUAH / currencyValues[0].value)
    }
}
exchange(10000,[{currency:'USD',value:40}],'USD')

