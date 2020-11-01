console.log('Задание 3. Объявить две целочисленные переменные a и b и задать им.......');
// 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. 
// Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.

let a = -5;

let b = -10;

if (a >= 0 && b >= 0) {
	result = a - b;
} else if (a < 0 && b < 0) {
	result = a * b;
} else {
	result = a + b;
}

console.log(result);

console.log('Задание 4. Присвоить переменной а значение.......');
// 4. Присвоить переменной а значение в промежутке [0..15]. 
// С помощью оператора switch организовать вывод чисел от a до 15.

function randomIntNamber(startRande=0, endRange=15) 
{
	return Math.round(Math.random() * (endRange - startRande) + startRande);
}

a = randomIntNamber();
console.log(a);

// куда сюда пихать свич ума не приложу, он же сюда ну никак не подходит и не за чем.


console.log('Задание 5. Реализовать основные 4 арифметические операции');
// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. 
// Обязательно использовать оператор return.

function sumNumber(argOne, argTwo) 
{
	return argOne + argTwo;
}

a = sumNumber(5, 5);
console.log(a);

function differenceNumber(argOne, argTwo) 
{
	return argOne - argTwo;
}

a = differenceNumber(5, 5);
console.log(a);

function multiplicationNumber(argOne, argTwo) 
{
	return argOne * argTwo;
}

a = multiplicationNumber(5, 5);
console.log(a);

function divisionNumber(argOne, argTwo) 
{
	return argOne / argTwo;
}

a = divisionNumber(5, 5);
console.log(a);


console.log('Задание 6. Реализовать функцию с тремя параметрами:.....');
// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
// В зависимости от переданного значения операции выполнить одну из арифметических операций 
// (использовать функции из пункта 3) и вернуть полученное значение (использовать switch)

function mathOperation(arg1, arg2, operation) 
{
	switch (operation) {
		case '+':
			return arg1 + arg2;
		case '-':
			return arg1 - arg2;
		case '*':
			return arg1 * arg2;
		case '/':
			return arg1 / arg2;
		default:
			console.log('оператор не задан');
			return NaN;
	}
}

a = mathOperation(5, 5, '+');
console.log(a);

a = mathOperation(5, 5, '-');
console.log(a);

a = mathOperation(5, 5, '*');
console.log(a);

a = mathOperation(5, 5, '/');
console.log(a);

a = mathOperation(5, 5);
console.log(a);


console.log('Задание 7. Сравнить null и 0. Попробуйте объяснить результат......');
// 7. *Сравнить null и 0. Попробуйте объяснить результат. 

a = null === 0; 
console.log(a); // false === не приводит null к числу, в этом случае оно равно только самое себе

a = null == 0;
console.log(a); // false == не приводит null к числу, в этом случае оно равно undefined, и не равно ничему другому


console.log('Задание 8. *С помощью рекурсии организовать функцию возведения числа в степень......');
// 8. *С помощью рекурсии организовать функцию возведения числа в степень. 
// Формат: function power(val, pow), где val – заданное число, pow – степень.

function power(val, pow) 
{
	return pow ? val * power(val, pow - 1) : 1;
}

a = power(5, 5);
console.log(a);