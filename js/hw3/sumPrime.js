function isprime(n) {
    for (let i = 2;i < n;i ++){
        if (n % i == 0) return false
    }
    return true
}

let a=0
function sumprime(n){
    for(let i = 2;i <= n;i ++){
        if (isprime(i)){
            a += i;
        }
    }
}
sumprime(7)
console.log(a)
