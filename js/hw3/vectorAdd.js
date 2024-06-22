function vectorAdd(a, b){
    var c = []
    for (let i = 0;i < a.length;i ++){
        c[i] = a[i] + b[i]
    }
    console.log(c)
}
var a = [1,2],b = [5,6]
console.log(vectorAdd(a,b))
