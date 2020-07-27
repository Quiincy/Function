// 1. Функция которая выводит наибольшее число.
function getMaxDigit(number){
    const arr = number.toString().split("");
    return Math.max(...arr);
}
 

// 2. Функция которая приводит число в степень 
function specifyPower(number , power){
    let result = 1;
    for (
        let i = 0;
        i < power;
        i++
    ){
        result = result * number;
    }
    return result;
}


// 3. Функция которая перепишит слово с большой буквы 
function capitalizeFirstLetter(name){
    return name[0].toUpperCase() + name.slice(1).toLowerCase();
  }

// 4. Функция которая вычислит остаток после оплаты налога
function calculateSumAfterTax(salary, tax1, tax2){
    const netSalary = salary -(salary * 0.01 * (tax1 + tax2));
    return netSalary;
}

// 5.Функция которая возвращает случайное число в диапазоне от N до M
function getRandomInteger(N, M) {
    let integer = Math.round(Math.random() * (M - N)) + N;
    return integer;
  }

// 6.Функция которая пощитает одинаковые буквы
function countLetter(text, letter) {
    let counter = 0;
    for(let i = 0; i < text.length; i++) {
        if(text[i].toLowerCase() === letter.toLowerCase()) {
            counter++;
        }
    }
    return counter;
}

// 7. Функция конвертации валюты
function convertCurrency(currencyWalue) {
    let convert = '';
    if (currencyWalue.toLowerCase().includes('uah')) {
      convert = (parseInt(currencyWalue).toString() / 28) + '$';
    } else if (currencyWalue.includes('$')) {
      convert = (parseInt(currencyWalue).toString() * 28) + 'UAH';
    } else {
      return 'Dont Know how to convert';
    }
    return convert;
  }

  // 8.Случайній пароль
  function randomPassword(passLenght = 8) {
    let password = '';
    for(let i = 0; i < passLenght; i++) {
      password += Math.floor(Math.random() * 10);
    }
    return password;
}

// 9.Функция которая удаляет определенную букву из рядка
function deleteLetter (text, letter) {
  let newText = '';
  for (let i = 0; i < text.length; i++) {
    if (letter.toUpperCase() !== text[i].toUpperCase())
      newText += text[i]
    }
  return newText;
}

// 10. Функция проверки на палиндромность
function isPalyndrom(str) {
  let str1 = str.replace(/\s/g, '').toLowerCase();
  let str2 = str1.split('').reverse().join('');
  if (str1 === str2) {
    return `"${str}" is a palyndrom`;
  } else {
    return `"${str}" is not a palyndrom`;
  }
}

// 11. Функция которая удаляет буквы которые встречаються больше 1 раза
function deleteDuplicateLetter(str) {
    let str1 = str.toLowerCase();
    let newStr = "";
    for(let i = 0; i < str.length; i++) {
        if(str1.indexOf(str1[i]) === str1.lastIndexOf(str1[i])) {
            newStr += str[i];
        }
    }
  return newStr;
}

// Вызов функции
document.write('<pre>');

document.writeln(`
Функция1: ${getMaxDigit(+prompt("Enter number, in which our function will find max-number!"))}
Функция2: ${specifyPower((+prompt("Enter number, and then...")),(+prompt("enter it's power!")))}
Функция3: ${capitalizeFirstLetter('mYkhaiLo')}
Функция4: ${calculateSumAfterTax((+prompt("Enter your salary")),(+prompt("Enter Tax1 from your salary!")),(+prompt("Enter Tax2 from your salary!")))}
Функция5: ${getRandomInteger((+prompt("Enter integer N")),(+prompt("Enter integer M")))}
Функция6: ${countLetter('qweqweQQQqfqpokdf','q')}
Функция7: ${convertCurrency('155$')}, ${convertCurrency('36570UaH')}, ${convertCurrency('1000€')}
Функция8: ${randomPassword(+prompt("Enter number  which is equal to your random passLenght"))}
Функция9: ${deleteLetter("AbracadabrA", "a")}
Функция10: ${isPalyndrom('Мадам')}, ${isPalyndrom('кокос')}, ${isPalyndrom('Я несу гусеня')}
Функция11: ${deleteDuplicateLetter('Бісквіт був дуже ніжним')}
 `);

