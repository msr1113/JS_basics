
var roster = []

function addNew() {
    var newName = prompt("What name would you like to add?")
    roster.push(newName)
}

function remove() {
    var remName = prompt("What name would you like to remove?")
    console.log('remname1',remName)
    var index = roster.indexOf(remName)
    console.log('index',index)
    roster.splice(index,1)
    console.log('remname2',remName)
}

function display() {
    console.log(roster)
}

var start = prompt("Would you like to start the roster web app? y/n")
var request = "empty";


if(start === 'y') {
    while (request !== "quit") {
        request = prompt("Please select an action: add,remove,display or quit")
        if (request === 'add'){
            addNew()
        } else if (request === 'display') {
            display()
        }else if (request === 'remove'){
            remove()
        }else {
            alert("Not recognzied,will quit")
            request = "quit"
        }
    }
}
alert("thanks for usign web app! please refresh to start over!")
