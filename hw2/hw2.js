//Масиви та об'єкти:
//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr;
arr=[2,4,6,8,`dog`,`cat`,`horse`,`shark`,true,false];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1={
   title: `Little women`,
   pageCount:408,
   genre:`novel`
}
console.log(book1);

let book2={
   title: `The Da Vinci Code`,
   pageCount:480,
   genre:`detective`
}
console.log(book2);

let book3={
    title:`Dune`,
    pageCount:546,
   genre:`fantasi`
}
console.log(book3);

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4={
    title: `Little women`,
    pageCount:408,
    genre:`novel`,
    authors:[{
        name:`Louisa May Alcott`,
        age:1832}]
}
console.log(book4);
console.log(book4.authors[0]);

let book5={
    title: `The Da Vinci Code`,
    pageCount:480,
    genre:`detective`,
    authors:[{
        name:`Dan Brown`,
        age:1964}]
}
console.log(book5);
console.log(book5.authors[0]);
let book6={
    title:`Dune`,
    pageCount:546,
    genre:`fantasi`,
    authors:[{
        name:`Frank Herbert`,
        age:1965}]
}
console.log(book6);
console.log(book6.authors[0].name);
//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users=[
    {id:1,name:`Anna`, username:`Aaa`,password:1111},
    {id:2,name:`Vira`, username:`Bbb`,password:2222},
    {id:3,name:`Lena`, username:`Ccc`,password:3333},
    {id:4,name:`Hazar`, username:`Ddd`,password:4444},
    {id:5,name:`Ivan`, username:`Iii`,password:5555},
    {id:6,name:`Taras`, username:`Fff`,password:6666},
    {id:7,name:`Petro`, username:`Ggg`,password:7777},
    {id:8,name:`Alona`, username:`Lll`,password:8888},
    {id:9,name:`Nadia`, username:`Kkk`,password:9999},
    {id:10,name:`Victor`, username:`Mmm`,password:1010}
];
console.log(users);
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);


//Логічні розгалуження:
   // - Є змінна х, якій ви надаєте довільне числове значення.
let x=15;
  //  Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
if (x!==0) {console.log(true);}
else {console.log(false);}
console.log(x);

x=1;
if (x!==0) {console.log(true);}
else {console.log(false);}
console.log(x);

x=0
if (x!==0) {console.log(true);}
else {console.log(false);}
console.log(x);

x=-3
if (x!==0) {console.log(true);}
else {console.log(false);}
console.log(x);

//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//(в першу, другу, третю или четверту частину години).
 let time=+prompt(20);
 if (time>=0 && time<=14) {console.log('В першу частину години');}
 else if (time>=15 && time<=30) {console.log('В другу частину години');}
 else if (time>=31 && time<=45) {console.log('В третю частину години');}
 else if (time>46 && time<=59) {console.log('В четверту частину години');}


//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day=+prompt(8);
if (day>=1 && day<=10) {console.log('В першу декаду');}
else if (day>=11 && day<=20) {console.log('В другу декаду');}
else if (day>=21 && day<=31) {console.log('В третю декаду');}


//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let date=7;
switch (date) {
    case 1:
        console.log(`Monday`);
        break;
    case 2:
        console.log(`Tuesday`);
        break;
    case 3:
        console.log(`Wednesday`);
        break;
    case 4:
        console.log(`Thursday`);
        break;
    case 5:
        console.log(`Friday`);
        break;
    case 6:
        console.log(`Saturday`);
        break;
    case 7:
        console.log(`Sunday`);
        break;
}


  //  - Користувач вводить або має два числа.
let a=8;
let b=3;
    //    Потрібно знайти та вивести максимальне число з тих двох .
if (a>b) {console.log(`"a"більше за "b"`);}
//else if (a<b) {console.log(`"a"менше за "b"`);}
      //  Також потрібно врахувати коли введені рівні числа.
else {console.log(`"a" дорівнює "b"`);}

    //- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
      //  за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

//let x=12


    //- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

//let coursesAndDurationArray = [
    //{title: 'JavaScript Complex', monthDuration: 5},
   // {title: 'Java Complex', monthDuration: 6},
    //{title: 'Python Complex', monthDuration: 6},
    //{title: 'QA Complex', monthDuration: 4},
   // {title: 'FullStack', monthDuration: 7},
   // {title: 'Frontend', monthDuration: 4}
//];
//if (x>5) {
  //  console.log(`Супер`)
//}