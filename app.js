// const blackPanther = document.getElementById('blackPanther');
// const el = document.querySelector('.mainContent');

// el.addEventListener("mousemove", (e) => {
//   el.style.backgroundPositionX = -e.offsetX + "px";
//   el.style.backgroundPositionY = -e.offsetY + "px";


// });
// // blackPanther.addEventListener("mousemove", (e) => {
// //   el.style.backgroundPositionX = -e.offsetX + "px";
// //   el.style.backgroundPositionY = -e.offsetY + "px";
// // });


// create the quotes in an object in another js file (we'll use the module method)

// accessing elements in Dom
// play START
const playBtn = document.getElementById('playBtn');
const gameContainer = document.getElementById('gameContainer');
// play END
const timer = document.getElementById('countdown');
const refreshBtn = document.getElementById('refreshBtn');
const quote = document.getElementById('quote');

// timer END

const chadwick = document.getElementById('actorOne');
const michael = document.getElementById('actorTwo');
const lupita = document.getElementById('actorThree');
const letitia = document.getElementById('actorFour');
const danai = document.getElementById('actorFive');
const daniel = document.getElementById('actorSix');
// end of actors
const actorInfoOne = document.getElementById('actorInfoOne')
const actorInfoTwo = document.getElementById('actorInfoTwo')
const actorInfoThree = document.getElementById('actorInfoThree')
const actorInfoFour = document.getElementById('actorInfoFour')
const actorInfoFive = document.getElementById('actorInfoFive')
const actorInfoSix = document.getElementById('actorInfoSix')
// end of actor Info tabs

// functions START-------- -------- -------- -------- -------- -------- -------->
const playGame = ()=>{
    // gameContainer.style.visibility = 'visible';
    gameContainer.style.position = 'unset';
    gameContainer.style.marginLeft = 'unset';

}
// shows/ redirects user to the game container once the button is clicked
// end of play function


// Timer and reset functions here -->
const startingTime = 20;
let time =  startingTime * 1; 


const countdown = ()=>{
    if (time > 0) {
        time--;    
        if (time>10) {
            timer.style.color = '#ffd100';
        }else{
             timer.style.color = 'white';  
             timer.style.backgroundColor = 'red' ;
            //  timer.style.backgroundColor= 'white';
             timer.style.backgroundImage = 'unset';
        }
    }else{
        let timesUp = `${time}!`;
        timesUp;
    }
    
    // let minutes = 0;
    let seconds = time;
    
    let newInnerTime = `${seconds}`;
    return timer.innerText = newInnerTime;
  
}



// question functions here -->
const saidStatements = {
    chadwick: '"i am the actual king"',
    michael: '"i will be king!"',
    Lupita: '"yes my king"',
    letitia: '"no brother!"',
    danai: '"you annoy  me"',
    daniel: '"i will protect you my king!"',
}
const changeQuote = ()=>{
    const keys = Object.values(saidStatements);
    let randomActor =  keys[Math.floor(Math.random()*keys.length)];
    return quote.innerText = randomActor;
    
}


// actor onclick/select answer functions here -->

const openInfoTab = (position, visibility)=>{
    return position.style.visibility = visibility;
}

// score functions here -->



// end of toggling info tab function


// functions START-------- -------- -------- -------- -------- -------- -------->


playBtn.addEventListener('click', ()=>{
    gameContainer.animate()
    return playGame();
    
})



  refreshBtn.addEventListener('click', ()=>{
      changeQuote();
 let decreaseCountdown =  setInterval(countdown, 1000);
     decreaseCountdown;
    
    
     
    })


// chadwick START
chadwick.addEventListener('mouseenter', ()=>{
        openInfoTab(actorInfoOne, 'visible');
    console.log('entered!')
})
chadwick.addEventListener('mouseleave', ()=>{
        openInfoTab(actorInfoOne, 'hidden');
    console.log('left!')
})
// chadwick END


// chadwick START
michael.addEventListener('mouseenter', ()=>{
    openInfoTab(actorInfoTwo, 'visible');
    console.log('we are working!')
})
michael.addEventListener('mouseleave', ()=>{
    openInfoTab(actorInfoTwo, 'hidden')
})
// michael END

lupita.addEventListener('mouseenter', ()=>{
    openInfoTab(actorInfoThree, 'visible');
    console.log('we are working!')
})
lupita.addEventListener('mouseleave', ()=>{
    openInfoTab(actorInfoThree, 'hidden');
    console.log('we are working!')
})
// lupita END

letitia.addEventListener('mouseenter', ()=>{
    openInfoTab(actorInfoFour, 'visible');
    console.log('we are working!')
})
letitia.addEventListener('mouseleave', ()=>{
    openInfoTab(actorInfoFour, 'hidden');
    console.log('we are working!')
})
// letitia END

danai.addEventListener('mouseenter', ()=>{
    openInfoTab(actorInfoFive, 'visible');
    console.log('we are working!')
})
danai.addEventListener('mouseleave', ()=>{
    openInfoTab(actorInfoFive, 'hidden');
    console.log('we are working!')
})
// danai END

daniel.addEventListener('mouseenter', ()=>{
    openInfoTab(actorInfoSix, 'visible');
    console.log('we are working!')
})          
daniel.addEventListener('mouseleave', ()=>{
    openInfoTab(actorInfoSix, 'hidden');
    console.log('we are working!')
})          
// daniel END

console.log('we are live!')