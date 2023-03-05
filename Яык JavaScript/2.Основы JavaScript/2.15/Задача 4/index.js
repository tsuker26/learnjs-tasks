function pow(x,n){
    if(!Number.isInteger(n)||n<1){
        console.log('Введите целое число больше 3.1 ')
        return
    }
    return x**n

}

console.log(pow(4, 2));


