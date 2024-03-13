//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email,phone


function User(id, name, surname , email,phone) {
    this.id= id;
    this.name= name;
    this.surname= surname;
    this. email= email;
    this.phone= phone

}

//створити пустий масив, наповнити його 10 об'єктами new User(....)

let u1= new User(12,`aaa`,`sss`,`gmail`,`phone`);
console.log(u1);
let users=[
    new User(10,`aaa`,`sss`,`gmail`,`0981757645`),
    new User(13,`bbb`,`sss`,`gmail`,`0981757645`),
    new User(14,`ccc`,`sss`,`gmail`,`0981757645`),
    new User(15,`ddd`,`sss`,`gmail`,`0981757645`),
    new User(16,`iii`,`sss`,`gmail`,`0981757645`),
    new User(107,`fff`,`sss`,`gmail`,`0981757645`),
    new User(18,`ggg`,`sss`,`gmail`,`0981757645`),
    new User(109,`kkk`,`sss`,`gmail`,`0981757645`),
    new User(201,`lll`,`sss`,`gmail`,`0981757645`),
    new User(21,`mmm`,`sss`,`gmail`,`0981757645`)

] ;
console.log(users);

//
//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let users1=users.filter(user=>user.id % 2===0);
console.log(users1)


//
//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
users.sort(
    (a,b
    )=>a.id-b.id);

console.log(users)


//
//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order=[]) {
        this.id=id;
        this.name=name;
        this.surname=surname;
        this.email=email;
        this.phoneid=phone;
        this. order= order;

       //this.addOrder=function (order){
          // this.order.push({order})

       //}

    }

}

//створити пустий масив, наповнити його 10 об'єктами Client
let client= new Client(1,`Alona`,`Skobukh`,`gmail`,`0981757645`,[]);
console.log(client)

//let arr=[];
//for (let i=0;i<10;i++) {
//    arr.push(new Client(i+1,`Name${i}`,`Skobukh`,`gmail`,`0981757645`,[]))
//
//}
//
//console.log(arr)
//
let clients=[
    new Client(1,`Alona`,`Skobukh`,`gmail`,`0981757645`,[`milk`,`butter`,`sausage`]),
    new Client(2,`Vasia`,`iu`,`gmail`,`0981757677`,[`milk`,`butter`,`sausage`,`yogurt`,`ice`,`bread`]),
    new Client(3,`Petro`,`fkfk`,`gmail`,`0981757666`,[`milk`,`butter`,`yogurt`,`wine`]),
    new Client(4,`Roman`,`Sffh`,`gmail`,`0981757655`,[`milk`,`butter`,`sausage`]),
    new Client(5,`Svitlana`,`Sffgh`,`gmail`,`0981757699`,[`milk`,`butter`,`wine`]),
    new Client(6,`Polina`,`re`,`gmail`,`0981757600`,[`milk`,`sausage`]),
    new Client(7,`Keyt`,`kl`,`gmail`,`0981757665`,[`milk`]),
    new Client(8,`Dima`,`pkp`,`gmail`,`0981757633`,[`milk`,`butter`,`sausage`,`bread`]),
    new Client(9,`Ira`,`be`,`gmail`,`0981757222`,[`milk`,`butter`,`sausage`,`yogurt`]),
    new Client(10,`Vova`,`dllk`,`gmail`,`0981751111`,[`milk`,`ice`,`sausage`])
] ;
console.log(clients);

//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
clients.sort(
     (a,b
   )=>a.order.length-b.order.length);

 console.log(clients);
//
//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

function Car(model,company, year,maxSpeed ,volume,driver=[]) {
    this.model = model;
    this.company = company;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
    this.driver=driver;


//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    this.info = function () {
        //console.log(`${this.model};${this.company}; ${ this.year}; ${this. maxSpeed}; ${this. volume} `)
        for (const key in this) {
            if (typeof this[key] === `function`) continue;
            console.log(key.toUpperCase() + `: `, this[key]);
        }
    };
//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
    //-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    this.addDriver = function (driver) {
        this.driver.push({name:driver,surname: `driver`,id:1})

    }

    //-- changeYear (newValue) - змінює рік випуску на значення newValue
    this.changeYear = function (newValue) {
        this.year=newValue
        }
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    this.increaseMaxSpeed =function (newSpeed){
        this.maxSpeed+=newSpeed;

    }

}
let car= new Car(`Audi Q7`,`Germany`,2005,220,`2.0`);
console.log(car);
car.info();
car.drive();
car.addDriver(`Vasya`);
car.increaseMaxSpeed(50);
car.changeYear(2017);
car.info();


//
//- (Те саме, тільки через клас)
//Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
class Car1{
    constructor(model,company, year,maxSpeed ,volume,driver=[]) {
            this.model = model;
            this.company = company;
            this.year = year;
            this.maxSpeed = maxSpeed;
            this.volume = volume;
            this.driver=driver;


        this.info = function () {
            //console.log(`${this.model};${this.company}; ${ this.year}; ${this. maxSpeed}; ${this. volume} `)
            for (const key in this) {
                if (typeof this[key] === `function`) continue;
                console.log(key.toUpperCase() + `: `, this[key]);
            }
        };
        this.drive = function () {
            console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
        };

        this.addDriver = function (driver) {
            this.driver.push({name:driver,surname: `driver`,id:2})

        };

        this.changeYear = function (newValue) {
            this.year=newValue
        };

        this.increaseMaxSpeed =function (newSpeed){
            this.maxSpeed+=newSpeed;

        };

    }

}

let auto= new Car1(`BMW x5`,`Germany`,2020,280,`2.0`);
console.log(auto);
auto.info()
auto.drive();
auto.addDriver(`Vira`);
auto.increaseMaxSpeed(50);
auto.changeYear(2023);
auto.info();


//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.


function Cinderella( name,age,footSize) {
    this.name= name;
    this.age= age;
    this. footSize= footSize;

}

let cinderella= new Cinderella(`Cinderella`,`17`,`39`);
console.log(cinderella);


//let arr1=[];
//for (let i=0;i<10;i++) {
//   arr1.push(new Cinderella(i+1,`Name${i}`,``))
//
//}
//
//console.log(arr1)


let cinderellas=[
    new Cinderella(`Cinderella`,`17`,`35`),
    new Cinderella(`Cinderella1`,`16`,`37`),
    new Cinderella(`Cinderella2`,`18`,`37`),
    new Cinderella(`Cinderella3`,`19`,`42`),
    new Cinderella(`Cinderella4`,`20`,`40`),
    new Cinderella(`Cinderella5`,`22`,`39`),
    new Cinderella(`Cinderella6`,`25`,`38`),
    new Cinderella(`Cinderella7`,`40`,`35`),
    new Cinderella(`Cinderella8`,`45`,`38`),
    new Cinderella(`Cinderella8`,`65`,`31`)
    ] ;
console.log(cinderellas);



//Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;

    }
    greeting(){
        return`Hello my name is ${this.name}`;
    }
}
    let prince= new Prince(`Petya`,`80`,`30`);
    console.log(prince);
    console.log(prince.greeting())


//class Prince extends Cinderella {
//    constructor(name,age,shoe) {
//        super(name,age);
//        this.shoe=shoe;
//
//
//    }
//
//}
//console.log(new Prince(`Petya`,80,30))

//Cinderella.prototype.info=function () {
//    for (const key in this) {
//        if (typeof this[key] === `function`) continue;
//        console.log(key.toUpperCase() + `: `, this[key]);
//
//    }
//
//}
//console.log(prince);
//    За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const cinderella of cinderellas) {
    if (cinderella.footSize === `30`) {
        console.log(cinderella,`Wedding`)}
        else if(cinderella.footSize !== `30`){
            console.log(`Good bye,you are not my princess`)

        }


}
//   Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let findFootSize=(cinderella)=>cinderella.footSize===`31`;
let result=cinderellas.find( findFootSize);
console.log(result)