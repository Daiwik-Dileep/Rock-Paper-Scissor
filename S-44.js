var userChoice;
var ans;

var computerChoice;

var sound;

function returnImge(i)
{
    if(i === "rock")
        return "<img class='img' src='Rock.png' alt='rock' '/>"
    if( i=== "paper")
        return "<img class='img' src='Paper.jpg' alt='rock' />"
    if(i==="scisor")
        return "<img class='img' src='Scissors.jpg' alt='rock'  />"
    
}

function returnComputerImge(i)
{
    if(i === "rock")
        return "<img class='img' src='Rock-2.png' alt='rock' '/>"
    if( i=== "paper")
        return "<img class='img' src='Paper-2.jpg' alt='rock' />"
    if(i==="scisor")
        return "<img class='img' src='Scissors-2.jpg' alt='rock'  />"
    
}

async function finalChange()
{
    document.getElementById("first").innerHTML = returnImge(userChoice)
    document.getElementById("second").innerHTML = "";
    document.getElementById("third").innerHTML = "";
    await new Promise(r => setTimeout(r, 1000));
    playSound("cardput")
    document.getElementById("third").innerHTML = returnComputerImge(computerChoice)
    await new Promise(r => setTimeout(r, 1000));
    playSound(sound)
    document.getElementById("second").innerHTML = "<h1 class='ans mt-5'> " + ans + "<h1>"

 
   
}

function reset()
{
    playSound("cardput")
    document.getElementById("first").innerHTML = '<img onclick="rock()" class="img" src="Rock.png" alt="">'
    document.getElementById("second").innerHTML = '    <img onclick="paper()" class="img" src="Paper.jpg" alt="">'
    document.getElementById("third").innerHTML = '  <img onclick="scisor()" class="img" src="Scissors.jpg" alt="">'
}

function playSound(id)
{
    var s = document.getElementById(id);
    s.play();
}

function calCulate()
{
  
    if(userChoice === computerChoice)
    {
        ans = "Draw"
        sound  = "cardput";
        return
    }
    if(userChoice==="rock")
    {
        if(computerChoice === "paper")
        {
            ans = "YouLose";
            sound  = "loose";
        }

        if(computerChoice === "scisor")
        {
            ans = "You Won";
            sound  = "win";
            return
        }

    }

    if(userChoice === "paper")
    {
        if(computerChoice === "scisor")
        {
            ans = "You Lose"

            sound  = "loose";
            return
        }

        if(computerChoice === "rock")
        {

            ans = "You Won"
            sound  = "win";
            return
        }
        
    }
    if(userChoice === "scisor")
    {
        if(computerChoice === "paper")
        {
            ans = "You Won"
            sound  = "win";
            return
        }
        if(computerChoice === "rock")
        {
            ans = "You Lose"
            sound  = "loose";
        }
    }


}

function setComputerChoice()
{
    var arr = ["rock","paper","scisor"]
    computerChoice = arr[Math.floor(Math.random() * arr.length)]
    calCulate()
    finalChange()
   
}

function rock()
{
 playSound("cardput")
 userChoice = "rock"
 setComputerChoice()
}

function paper()
{
    playSound("cardput")
    userChoice = "paper"
    setComputerChoice()

}

function scisor()
{
    playSound("cardput")
    userChoice = "scisor"
    setComputerChoice()
}
