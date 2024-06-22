function filter(a, f){
    var result = []
    for (let i = 0;i < a.length;i ++){
        if (f(a[i])){
            result.push(a[i])
        }
    }
    return result;
}
console.log(filter([1, 2, 3, 4], function(x){ return x % 2 == 1; }))
console.log(filter([10, 15, 20, 25], function(x){ return x > 15; }))


