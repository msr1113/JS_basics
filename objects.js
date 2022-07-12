
// var employee = {
//     name:"John Smith",
//     job:"Programmer",
//     age:31,
//     nameLength: function(){
//         console.log(this.name.length)
//     }
// }
//
// employee.nameLength()



// var employee = {
//     name:"John Smith",
//     job:"Programmer",
//     age:31,
//     report:function (){
//         alert("Name is "+this.name+"job is "+this.job+"age is "+this.age)
//     }
// }
//
// employee.report()


var employee = {
    name:"John Smith",
    job:"Programmer",
    age:31,
    lastName:function(){
        var a = this.name.split(' ')
        console.log("last name is ",a[1])
    }

}

employee.lastName()

