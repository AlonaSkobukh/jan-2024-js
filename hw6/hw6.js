//- Знайти та вивести довижину настипних стрінгових значень
//'hello world', 'lorem ipsum', 'javascript is cool'

let str='hello world';
let s=str.length;
console.log(s)

let str1='lorem ipsum';
let s1=str1.length;
console.log(s1)

let str2='javascript is cool';
let s2=str2.length;
console.log(s2)


//- Перевести до великого регістру наступні стрінгові значення
//'hello world', 'lorem ipsum', 'javascript is cool'

console.log(str.toUpperCase());
console.log(str1.toUpperCase());
console.log(str2.toUpperCase());


//- Перевести до нижнього регістру настипні стрінгові значення
//'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let str3='HELLO WORLD';
console.log(str3.toLowerCase());

let str4='LOREM IPSUM';
console.log(str4.toLowerCase());

let str5='JAVASCRIPT IS COOL';
console.log(str5.toLowerCase());




//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
let str6=' dirty string   ';
console.log(str6.trim());


//- Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
//    let str = 'Ревуть воли як ясла повні';
//let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str7 = 'Ревуть воли як ясла повні';
let arr=str7.split(` `);
console.log(arr)



//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numbers=[10,8,-7,55,987,-1011,0,1050,0];

let arr1=numbers.toString();
console.log(arr1)


//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
    let nums = [11,21,3];

    let sort=(arr,direction) => {

        if (direction === 'ascending') {
            arr.sort((a, b) => {
                return a - b

            });
        } else if (direction === 'descending') {
            arr.sort((a, b) => {
                return b - a
            });
        }
        return arr;
    }
        console.log(sort(nums,`descending`)  )


//sortNums(nums,'ascending') // [3,11,21]
//sortNums(nums,'descending') // [21,11,3]
//
//==========================
//- є масив
let coursesAndDurationArray = [
   {title: 'JavaScript Complex', monthDuration: 5},
   {title: 'Java Complex', monthDuration: 6},
   {title: 'Python Complex', monthDuration: 6},
   {title: 'QA Complex', monthDuration: 4},
   {title: 'FullStack', monthDuration: 7},
   {title: 'Frontend', monthDuration: 4}
    ]
;
//-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filter=coursesAndDurationArray.filter((
    coursesAndDurationArrayKey)=>coursesAndDurationArrayKey.monthDuration>5);
console.log(filter);


//-- відсортувати його за спаданням за monthDuration
coursesAndDurationArray.sort(
    (a,b
    )=>b.monthDuration-a.monthDuration);

console.log(coursesAndDurationArray)

//-- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let map=coursesAndDurationArray.map((coursesAndDurationArrayKey,index)=>{
    let m= {
        title:coursesAndDurationArrayKey.title,
        monthDuration:coursesAndDurationArrayKey.monthDuration,
        id:index
}
return m;
});
console.log(map)
//------------------------------------------------------
//   let map=coursesAndDurationArray.map((coursesAndDurationArrayKey,index)=>{
//       coursesAndDurationArrayKey.id=index+1;
//       return coursesAndDurationArrayKey
//   });
//console.log(map)
//console.log(coursesAndDurationArray)


//=========================


//    описати колоду карт (від 6 до туза без джокерів)

let cards=[

{cardSuit: 'spades', value: 6, color: 'black'},
{cardSuit: 'spades', value: 7, color: 'black'},
{cardSuit: 'spades', value: 8, color: 'black'},
{cardSuit: 'spades', value: 9, color: 'black'},
{cardSuit: 'spades', value: 10, color: 'black'},
{cardSuit: 'spades', value: 'ace', color: 'black'},
{cardSuit: 'spades', value: 'jack', color: 'black'},
{cardSuit: 'spades', value: 'queen', color: 'black'},
{cardSuit: 'spades', value: 'king', color: 'black'},



{cardSuit: 'diamonds', value: 6, color: 'red'},
{cardSuit: 'diamonds', value: 7, color: 'red'},
{cardSuit: 'diamonds', value: 8, color: 'red'},
{cardSuit: 'diamonds', value: 9, color: 'red'},
{cardSuit: 'diamonds', value: 10, color: 'red'},
{cardSuit: 'diamonds', value: 'ace', color: 'red'},
{cardSuit: 'diamonds', value: 'jack', color: 'red'},
{cardSuit: 'diamonds', value: 'queen', color: 'red'},
{cardSuit: 'diamonds', value: 'king', color: 'red'},



{cardSuit: 'hearts', value: 6, color: 'red'},
{cardSuit: 'hearts', value: 7, color: 'red'},
{cardSuit: 'hearts', value: 8, color: 'red'},
{cardSuit: 'hearts', value: 9, color: 'red'},
{cardSuit: 'hearts', value: 10, color: 'red'},
{cardSuit: 'hearts', value: 'ace', color: 'red'},
{cardSuit: 'hearts', value: 'jack', color: 'red'},
{cardSuit: 'hearts', value: 'queen', color: 'red'},
{cardSuit: 'hearts', value: 'king', color: 'red'},


{cardSuit: 'clubs', value: 6, color: 'black'},
{cardSuit: 'clubs', value: 7, color: 'black'},
{cardSuit: 'clubs', value: 8, color: 'black'},
{cardSuit: 'clubs', value: 9, color: 'black'},
{cardSuit: 'clubs', value: 10, color: 'black'},
{cardSuit: 'clubs', value: 'ace', color: 'black'},
{cardSuit: 'clubs', value: 'jack', color: 'black'},
{cardSuit: 'clubs', value: 'queen', color: 'black'},
{cardSuit: 'clubs', value: 'king', color: 'black'},
    ]

//---------------------------------------------------------

let cardSuits=['spades', 'diamonds','hearts', 'clubs'];
let values=[6,7,8,9,10, 'ace','jack','queen','king'];


let desk=() =>{
    let desks=[];
    for (const  cardSuit of cardSuits) {
        for (const value of values) {
           desks.push({  cardSuit: cardSuit,value:value  })

        }

    }
    desks.map(item=>item.cardSuit === 'diamonds'||item.cardSuit === 'hearts' ? item.color = `red` :item.color = `black`)
return desks
}
console.log(desk());


//- знайти піковий туз
let ace=cards.filter(card=>card.value===`ace`&& card.cardSuit==='spades');
console.log(ace)


//- всі шістки

let six=cards.filter(card=>card.value===6);
console.log(six)


//- всі червоні карти

let red=cards.filter(card=>card.color==='red');
console.log(red)

//- всі буби
let Diamond=cards.filter(card=>card.cardSuit==='diamonds');
console.log(Diamond)

//- всі трефи від 9 та більше
let club=cards.filter(card=>card.cardSuit==='clubs').splice(3);
console.log(club)


//
//{
//    cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//        value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//    color:'', // 'red','black'
//}
//
//=========================
//
//    Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
//{
//    spades:[],
//        diamonds:[],
//    hearts:[],
//    clubs:[]
//}
let reduce=cards.reduce(
    (accumulator, card) => {
        if (card.cardSuit===`spades`) {
            accumulator[0].push(card);
        }
        else if (card.cardSuit===`diamonds`) {
            accumulator[1].push(card);
        }
        else if (card.cardSuit===`hearts`) {
            accumulator[2].push(card);
        }
        else if (card.cardSuit===`clubs`) {
            accumulator[3].push(card);
        }
        return accumulator;
    },
    [[],[],[],[]]
);
console.log(reduce);

//=========================

//    взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

//--написати пошук всіх об'єктів, в який в modules є sass
let modulesSass = (arr) => {
    return arr.find((item)=> item.modules.includes(`sass` )

    );

}
console.log(modulesSass(coursesArray));


//--написати пошук всіх об'єктів, в який в modules є docker

const modulesDocker = (arr) => {
    return arr.filter((item)=> item.modules.includes(`docker` )

    );

}
console.log(modulesDocker(coursesArray));

//const modulesDocker = (arr) => {
//    return arr.filter((item)=> item.modules.some(elem => elem===`docker` )
//
//    );
//
//}
//console.log(modulesDocker(coursesArray));


