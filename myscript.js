var firstName = prompt("first name please:")
var lastName = prompt("last name please")
var age = prompt("how old are you")
var height = prompt("what is your height")
var petName = prompt("what is your pet name?")
alert("Thank you so much for the information")


var nameCond = null
var ageCond = null
var heightCond = null
var petCond = null

//named condition
if (firstName[0]  === lastName[0]) {
    nameCond = this;
}
else {
    nameCond = false
}

//age condition

if(age>20 && age<30){
    ageCond = true
}else{
    ageCond = false
}

// height condition

if(height>=170){
    heightCond = true
}else{
    heightCond = false
}

//penCond
if (petName[petName.length-1] === 'y' ){
    petCond = true
}
else{
    petCond = false
}

// check all conditions

if (nameCond && ageCond && heightCond && petCond) {
    console.log('welcome spy')
}
else{
    console.log('nothing to see here')
}

