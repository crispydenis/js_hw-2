/*Создайте переменные: name, age, city, phone, email, company; и получите через ф-цию
prompt() соответствующие значения: ваше имя, возраст, город проживания и т.д.
Выведите на экран фразу: «Меня зовут %Имя%. Мне %Возраст% лет. Я проживаю в
городе %Город% и работаю в компании %Компания%. Мои контактные данные:
%Телефон%, %Почта%.». */

// let name = prompt("Введите ваше имя:");
// let age = prompt("Введите ваш возраст:");
// let city = prompt("Введите город проживания:");
// let phone = prompt("Введите ваш номер телефона:");
// let email = prompt("Введите ваш адрес электронной почты:");
// let company = prompt("Введите название вашей компании:");

// console.log(`Меня зовут ${name}. Мне ${age} лет. Я проживаю в городе ${city} и работаю в компании ${company}. Мои контактные данные: ${phone}, ${email}.`);

/*Определите по введенному возрасту (исп. значение из задания 1) год рождения.
Выведите на экран «%Имя% родился в %Год% году.». */11


// let currentYear = new Date().getFullYear(); 
// let birthYear = currentYear - age; 

// console.log(`${name} родился в ${birthYear} году.`);


/*Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме
вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.*/

// let string = prompt ('Введите шестизначное число');
// if ((string[0] + string[1] + string[2]) == (string[3] + string[4] + string[5])) {
//     console.log('да');
// } else  {
//     console.log ('нет');
// }

/*Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'.
Проверьте работу скрипта при a, равном 1, 0, -3. */

// let a = prompt('ввкдите число');
// if(a>0){
//   console.log('больше')
// } else{
//   console.log('меньше')
// };

/*Создайте переменные a=10 и b=2. Выведите их сумму, разность, произведение,
частное, а также, если сумма этих чисел больше 1, то возведите полученную сумму в
квадрат. */

// let a = 10,
//     b = 2,
//     sum = a + b,
//     difference = a - b,
//     product = a * b,
//     quotient = a / b;

// console.log(sum);
// console.log(difference);
// console.log(product);
// console.log(quotient);

// if (sum > 1) {
//     let squaredSum = sum ** 2;
//     console.log("Квадрат суммы:", squaredSum);
// }

/* Если переменная a (из задания 5) больше 2 и меньше 11, или переменная b (из задания
  5) больше или равна 6 и меньше 14, то выведите 'Верно', в противном случае выведите
  'Неверно'. */

  // let a = 5,
  //     b = 2;

  //     if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
  //       console.log('Верно');
  //   } else {
  //       console.log('Неверно');
  //   }

  /*В переменной n лежит число от 0 до 59. Определите в какую четверть часа попадает
это число (в первую, вторую, третью или четвертую). */

// let n = 30;
// if (n >= 0 && 15 >=n) {
//     console.log ('1 четверть');
// }else  if (n > 15 && 30 >= n) {
//     console.log ('2 четверть');
// }else  if (n > 30 && 45 >= n) {
//     console.log ('3 четверть');
// } else { (n > 45 && 59 >=n)
//     console.log ('4 четверть');
// }

/*В переменной day лежит число из интервала от 1 до 31. Определите в какую декаду
месяца попадает это число (в первую, вторую или третью). */


// let day = 5; 

// if (day >= 1 && day <= 10) {
//     console.log("Число", day, "попадает в первую декаду месяца");
// } else if (day >= 11 && day <= 20) {
//     console.log("Число", day, "попадает во вторую декаду месяца");
// } else if (day >= 21 && day <= 31) {
//     console.log("Число", day, "попадает в третью декаду месяца");
// } else {
//     console.log("Некорректное значение");
// }

/*Напишите скрипт, который переводит дни в года (условно 1г = 365дн), в месяцы
(условно 1м = 31день), в недели, в часы, в минуты и в секунды. Дробные результаты
вычислений принимаются. Если кол-ва дней не хватает до полного года, месяца,
недели, вывести сообщение «Меньше года», «Меньше месяца» и «Меньше недели»,
соответственно. */

// let days = 500; 


// let years = days / 365;
// if (days < 365) {
//     console.log("Меньше года");
// } else {
//     console.log("Лет:", years);
// }


// let months = days / 31;
// if (days < 31) {
//     console.log("Меньше месяца");
// } else {
//     console.log("Месяцев:", months);
// }


// let weeks = days / 7;
// if (days < 7) {
//     console.log("Меньше недели");
// } else {
//     console.log("Недель:", weeks);
// }


// let hours = days * 24;
// console.log("Часов:", hours);


// let minutes = days * 24 * 60;
// console.log("Минут:", minutes);


// let seconds = days * 24 * 60 * 60;
// console.log("Секунд:", seconds);


/*Напишите скрипт, который по введенному дню (исп. значение переменной из 8
  задания) в году (например, 256) определит месяц (от 1 до 12) и пору года (зима, лето и
  т.д.). Скрипт определение поры года написать через switch. */


  let dayOfYear = 256; 

// Определение месяца
let months = [
  "Январь", "Февраль", "Март",
  "Апрель", "Май", "Июнь",
  "Июль", "Август", "Сентябрь",
  "Октябрь", "Ноябрь", "Декабрь"
];
let month;
if (dayOfYear <= 31) {
    month = months[0];
} else if (dayOfYear <= 59) {
    month = months[1];
} else if (dayOfYear <= 90) {
    month = months[2];
} else if (dayOfYear <= 120) {
    month = months[3];
} else if (dayOfYear <= 151) {
    month = months[4];
} else if (dayOfYear <= 181) {
    month = months[5];
} else if (dayOfYear <= 212) {
    month = months[6];
} else if (dayOfYear <= 243) {
    month = months[7];
} else if (dayOfYear <= 273) {
    month = months[8];
} else if (dayOfYear <= 304) {
    month = months[9];
} else if (dayOfYear <= 334) {
    month = months[10];
} else {
    month = months[11];
}
console.log("Месяц:", month);

// Определение поры года
switch (month) {
    case "Декабрь":
    case "Январь":
    case "Февраль":
        console.log("Зима");
        break;
    case "Март":
    case "Апрель":
    case "Май":
        console.log("Весна");
        break;
    case "Июнь":
    case "Июль":
    case "Август":
        console.log("Лето");
        break;
    case "Сентябрь":
    case "Октябрь":
    case "Ноябрь":
        console.log("Осень");
        break;
    default:
        console.log("Невозможно определить пору года");
}
