// function helloSomeone(name="Frankie"){
//     console.log("Hello "+name)
// }

// function formal(name="Sam",title='Sir'){
//     return(title+" "+name)
// }

// function timesFive(numInput) {
//     var result = numInput * 5
//     return result
// }
//
// //global scope
// var v = "GLOBAL V"
// var stuff = "GLOBAL STUFF"
//
// function fun(stuff) {
//     console.log(v);
//     stuff = "Reassign stuff inside func"
//     console.log(stuff)
// }
//
// fun()
// console.log(stuff)

// function sleepIn(weekday,vacation) {
//     return (!weekday || vacation)
// }


// function monkeyTrouble(aSmile,bSmile) {
//     return (aSmile && bSmile)  || (!aSmile && !bSmile)
// }

function stringTimes(str,n) {
    console.log('function called')
    var returnStr = "";
    var i = 0;
    while (i<n){
        returnStr=returnStr+str

        i=i+1
    }
    return returnStr
}

a = stringTimes("hi",3)
console.log(a)