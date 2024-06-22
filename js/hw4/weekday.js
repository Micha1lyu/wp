var d2i = {
    Sunday:0,
    Monday:1,
    Tuesday:2,
    Wednesday:3,
    Thursday:4,
    Friday:5,
    Saturday:6,
}
function weekday(day){
    return d2i[day]
}
let day = Deno.args[0]
console.log(day, '=', weekday(day))
