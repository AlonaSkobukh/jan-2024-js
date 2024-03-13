//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email,

//let users = {
//        id,
//        name,
//        surname,
//        email,
//    greeting(){
//            console.log(`hello` + this.name)
//    },
//        };

function User(id, name, surname , email) {
    this.id= id;
    this.name= name;
    this.surname= surname;
    this. email= email

}

//створити пустий масив, наповнити його 10 об'єктами new User(....)

//let u1= new User(12,`aaa`,`sss`,`gmail`);
//console.log(u1);
let users=[
    new User(10,`aaa`,`sss`,`gmail`),
    new User(13,`bbb`,`sss`,`gmail`),
    new User(14,`ccc`,`sss`,`gmail`),
    new User(15,`ddd`,`sss`,`gmail`),
    new User(16,`iii`,`sss`,`gmail`),
    new User(107,`fff`,`sss`,`gmail`),
    new User(18,`ggg`,`sss`,`gmail`),
    new User(109,`kkk`,`sss`,`gmail`),
    new User(201,`lll`,`sss`,`gmail`),
    new User(21,`mmm`,`sss`,`gmail`)

] ;
console.log(users);

//
//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let car1=users.filter(user=>user.id % 2===0);
console.log(car1)


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
    new Client(1,`Alona`,`Skobukh`,`gmail`,`0981757645`,[7]),
    new Client(2,`Vasia`,`iu`,`gmail`,`0981757677`,[9]),
    new Client(3,`Petro`,`fkfk`,`gmail`,`0981757666`,[33]),
    new Client(4,`Roman`,`Sffh`,`gmail`,`0981757655`,[22]),
    new Client(5,`Svitlana`,`Sffgh`,`gmail`,`0981757699`,[11]),
    new Client(6,`Polina`,`re`,`gmail`,`0981757600`,[6]),
    new Client(7,`Keyt`,`kl`,`gmail`,`0981757665`,[57]),
    new Client(8,`Dima`,`pkp`,`gmail`,`0981757633`,[13]),
    new Client(9,`Ira`,`be`,`gmail`,`0981757222`,[2]),
    new Client(10,`Vova`,`dllk`,`gmail`,`0981751111`,[5])
] ;
console.log(clients);

//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
clients.sort(
     (a,b
   )=>a.order-b.order);

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
        this.year=2017
        }
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    this.increaseMaxSpeed =function (newSpeed){
        this.maxSpeed+=newSpeed;

    }

}
let car= new Car(`Audi Q7`,`Germany`,`2005`,`216`,`2.0`);
console.log(car);
car.info();
car.drive();
car.addDriver(`Vasya`);
car.changeYear()
car.increaseMaxSpeed(10)
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

    }

}

let auto= new Car1(`Audi Q7`,`Germany`,`2005`,`216`,`2.0`);
console.log(auto);




//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
//Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//    За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//    Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку