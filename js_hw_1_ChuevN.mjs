
const [, , arg1, arg2, arg3, arg4, arg5, arg6] = process.argv;
// Вводим значения системы
let determinant = arg1 * arg5 - arg2 * arg4; // Расчет определителя
let deltaX = arg3 * arg5 - arg2 * arg6;
let deltaY = arg1 * arg6 - arg3 * arg4;
let solutionX = deltaX / determinant; // Записываем результат для x
let solutionY = deltaY / determinant; 
determinant === 0 ? console.log('Корней бесконечное множество или нет') : console.log(solutionX, solutionY);
