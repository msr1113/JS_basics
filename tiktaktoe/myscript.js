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

function changeMarker()
{
    if(this.textContent === ''){
        this.textContent = 'X';
    }else if(this.textContent === 'X'){
        this.textContent = 'O'
    }else {
        this.textContent =''
    }
}
// for loop to add event listeners to all the squares

for(var i=0;i<squares.length;i++){
    squares[i].addEventListener('click',changeMarker)
}