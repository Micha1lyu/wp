function gcd(a, b){
    while(b !== 0){
        let temp = b
        b = a % b
        a = temp
    }
    return a
}
console.log(gcd(6, 42))
console.log(gcd(13, 17))
