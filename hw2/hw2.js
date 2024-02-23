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

//let book1={
  // title: `Little women`,
  // pageCount:408,
  // genre:`novel`
//}
//console.log(book1);

//let book2={
  // title: `The Da Vinci Code`,
  // pageCount:480,
  // genre:`detective`
//}
//console.log(book2);

//let book3={
  //  title:`Dune`,
  //  pageCount:546,
  // genre:`fantasi`
//}
//console.log(book3);

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book1={
    title: `Little women`,
    pageCount:408,
    genre:`novel`,
    authors:[{
        name:`Louisa May Alcott`,
        age:1832}]
}
console.log(book1);

let book2={
    title: `The Da Vinci Code`,
    pageCount:480,
    genre:`detective`,
    authors:[{
        name:`Dan Brown`,
        age:1964}]
}
console.log(book2);
console.log(book2.authors[0]);
let book3={
    title:`Dune`,
    pageCount:546,
    genre:`fantasi`,
    authors:[{
        name:`Frank Herbert`,
        age:1965}]
}
console.log(book3);
console.log(book3.authors[0].name);
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
let x=+prompt(15);
  //  Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
if (x!==0) {console.log(true);}
else {console.log(false);}
console.log(x);


//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//(в першу, другу, третю или четверту частину години).






//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
  //  - Користувач вводить або має два числа.
    //    Потрібно знайти та вивести максимальне число з тих двох .
      //  Також потрібно врахувати коли введені рівні числа.

    //- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
      //  за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)


    //- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".