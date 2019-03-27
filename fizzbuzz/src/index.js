

exports.returnName = function () {
    return 'diego 123'
}

exports.multiploDe3 = function (numero) {
    return numero % 3 == 0;
}

exports.multiploDe5 = function (numero) {
    return numero % 5 == 0;
}

exports.multiploDe3e5 = function (multiplicador) {
    var mult3 = exports.multiploDe3(multiplicador);
    var mult5 = exports.multiploDe5(multiplicador);
    return (mult3 && mult5)
}

exports.print = function (numero){
    if(numero%15 == 0){
        return 'fizzbuzz'
    }
    if(numero%3 == 0){
        return 'fizz'
    }
    if(numero%5 == 0){
        return 'buzz'
    }
    return numero
}

exports.fizz = (numero) => {
    return 'fizz'
}

exports.buzz = (numero) => {
    return 'buzz'
}

exports.fizzbuzz = (numero) => {
    return 'fizzbuzz'
}

exports.numero = (numero) => {
    return numero
}



let tableSelector = {
    resultDefault:exports.numero,
    result3:exports.fizz,
    result5:exports.buzz,
    result3e5:exports.fizzbuzz
}

exports.selectFunction = (numero) => {
    let result3 = numero % 3
    let result5 = numero % 5
    let result3e5 = numero%15
    let resultDefault = numero
}

