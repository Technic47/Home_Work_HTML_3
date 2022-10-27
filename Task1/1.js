const number = Number.parseInt(prompt("Введите температуру в градусах Цельсия:"));

if (Number.isInteger(number)) {
    alert(`Температура в Цельсиях = ${number}, Температура в Фаренгейтах = ${celToFar(number)}`)
} else {
    alert('Не правильный ввод')
}


function celToFar(number) {
    let farenheit = Math.round((9 / 5) * number + 32);
    return farenheit;
}
