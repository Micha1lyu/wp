function gcd(a, b){
    while(b !== 0){
        let temp = b
        b = a % b
        a = temp
    }
    return a
}
function lcm(a,b){
    return (a * b) / gcd(a,b)
}
console.log(lcm(7, 5))
console.log(lcm(3, 15))
