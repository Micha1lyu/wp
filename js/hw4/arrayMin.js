function arrayMin(a)
{
    var min = a[0]
    for(let i = 1;i < a.length;i ++){
        if(min > a[i]){
            min = a[i]
        }
    }
    return min
}

var a = [4, 3, 7, 5, 11, 9]
console.log("arrayMin is=", arrayMin(a))
