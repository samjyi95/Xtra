var paper = document.getElementById('paper')
var rock = document.getElementById('rock')
var scissors = document.getElementById('scissors')
//maybe create a class that grabs all the elems of the gameBoard (rock, paper, scissor, triangle)??

//this is for dom manipulation to change the board when a choice is picked
const something = document.querySelector('#triangle')

//click events for each choice 
paper.addEventListener('click', gamePlay)
rock.addEventListener('click', gamePlay)
scissors.addEventListener('click', gamePlay)

//rather than a checkWin function I should have it go to gameplay functino that manipulates the DOM?
//OR i could manipulate the DOM and checking the win condtions all in the checkWin? 

function gamePlay() {
//setting the whole gameboard so we can manip. based on player's choice 
    var gameBoard = document.getElementById('container2') 
    
    //setting the clicked icon to be the DOM manipulated choice so we can set the choice to be shown
    var chose = this.id
    var player1 = this.innerHTML
    document.getElementById('container2').innerHTML = player1
    
    //I need to grab the attribute and set the attribute as the new gameboard within this function 
    //var choice = chose.
    //set choice as the selected icon to be displayed "with styling as well" *make room for house's choice
    //console.log(choice)
    console.log(player1) //not sure why .content is coming up as undefined resaerch more into this 
    console.log(chose)
    
}

//Gameplay function 
function checkWin() {
    //console.log('your event listens are triggering the checkWin function', event.target.id )
}


// Get the modal
var modal = document.getElementById("rulezModal");
// Get the button that opens the modal
var btn = document.getElementById("rulez");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

