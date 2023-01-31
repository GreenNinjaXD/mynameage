let a = prompt('Введите имя')
let b = +prompt('Введите год рождения')
let c = +prompt('Введите нынешный год')

function func(name, year, now){
    let yn = now - year;
    alert(name + ' Ваш возраст ' + yn)
}

func(a, b, c);