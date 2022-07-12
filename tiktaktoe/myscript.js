// restart game button
var restart = document.querySelector("#b")

//grabs all the squares
var squares = document.querySelectorAll('td')
console.log('squares',squares)
//clear all the squares
function clearBoard() {
    for (var i=0;i<squares.length;i++){
        squares[i].textContent = ''
    }
}

restart.addEventListener('click',clearBoard)

//check the square marker

var cellOne = document.querySelector('#one')
cellOne.addEventListener('click',function() {
    if(cellOne.textContent === ''){
        cellOne.textContent ='X'
    }else if(cellOne.textContent === 'X'){
        cellOne.textContent ='O'
    }else{
        cellOne.textContent = ''
    }
})

// for loop to add event listeners to all the squares