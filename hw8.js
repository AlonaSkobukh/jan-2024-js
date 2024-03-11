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
//створити пустий масив, наповнити його 10 об'єктами Client
//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
//
//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

function Car(model,manufacturer, year,speed ,volume) {
    this.model= model;
    this.manufacturer= manufacturer;
    this.year= year;
    this. speed = speed;
    this. volume = volume
}

let car= new Car(`Audi Q7`,`Germany`,`2005`,`216`,`2.0`);
console.log(car);

//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//- (Те саме, тільки через клас)
//Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
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