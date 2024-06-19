function isPrime(n){
    for (let i = 2;i < n;i ++){
        if (n % i == 0) return false
    }
    return true
}
console.log("5",isPrime(5))
console.log("6",isPrime(6))
