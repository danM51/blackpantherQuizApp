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
const questionTab = document.getElementById('questionTab');
const timer = document.getElementById('countdown');
const refreshBtn = document.getElementById('refreshBtn');
const quote = document.getElementById('quote');
const nice = document.getElementById('nice');
const nope = document.getElementById('nope');

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
const startingTime = 60;
let time =  startingTime * 1; 


const countdown = ()=>{
    if (time > 0) {
        time--;    
        if (time>20) {
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
    question1: '"question1"',
    question2: '"question2"',
    question3: '"question3"',
    question4: '"question4"',
    question5: '"question5"',
    question6: '"question6"',
    question7: '"question7"',
    question8: '"question8"',
    question9: '"question9"',
    question10: '"question10"',
   
}
const changeQuote = ()=>{
    const keys = Object.values(saidStatements);
    let randomActor =  keys[Math.floor(Math.random()*keys.length)];
    return quote.innerText = randomActor;
    
}


// actor onclick/hover select answer functions here -->

const openInfoTab = (position, visibility)=>{
    return position.style.visibility = visibility;
}
const selectActorCorrect = ()=>{
 questionTab.style.border = 'solid lightGreen 3px';
 nice.style.color = 'lightGreen';
 

}
const selectActorIncorrect = ()=>{
   questionTab.style.border = 'solid red 3px';
   nope.style.color = 'red';
}
const revertInitialColor = ()=>{
    setInterval(() => {
        questionTab.style.border = 'solid #c0bfbfce 1px ';
        nice.style.color = 'rgba(146, 146, 146, 0.89)';
        nope.style.color = 'rgba(146, 146, 146, 0.89)';
    }, 3000);

}

// correct answers 
const chadwickAnswers ={
        cAnswer1:saidStatements.question1,
  cAnswer2:saidStatements.question3,
  cAnswer3:saidStatements.question5,
    }
    
const michaelAnswers ={
        mAnswer1:saidStatements.question6,
  mAnswer2:saidStatements.question2,
}
const lupitaAnswers ={
        lAnswer1:saidStatements.question4,
 
    }
    
const letitiaAnswers ={
        letitiaAnswer1:saidStatements.question7,
  letitiaAnswer2:saidStatements.question8,
}
const danaiAnswers ={
        danaiAnswer1:saidStatements.question10,
  
    }
    
const danielAnswers ={
        danielAnswer1:saidStatements.question9,
  
}



// score functions here -->

// does selection match the question if so then correct (green) if not then incorrect (red)
//update the score 
//add the star

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

// functions END-------- -------- -------- -------- -------- -------- -------->




// EventListeners START-------- -------- -------- -------- -------- -------- -------->
if (questionTab.style.border != 'solid #c0bfbfce 1px'||
    nice.style.color != 'grey'||
    nope.style.color != 'grey' ) {
    revertInitialColor()
}
// chadwick START
chadwick.addEventListener('mouseenter', ()=>{
        openInfoTab(actorInfoOne, 'visible');
    console.log('entered!')
})
chadwick.addEventListener('mouseleave', ()=>{
        openInfoTab(actorInfoOne, 'hidden');
    console.log('left!')
})
chadwick.addEventListener('click', ()=>{
// if answer matches question then correct if not then incorrect (use if statement)
    if (quote.innerText === chadwickAnswers.cAnswer1 || 
        quote.innerText === chadwickAnswers.cAnswer2 || 
        quote.innerText === chadwickAnswers.cAnswer3) {
        chadwick.style.backgroundColor = 'green';
        chadwick.style.borderColor = 'lightGreen';
        selectActorCorrect()
        revertInitialColor()

            
    }else{
        selectActorIncorrect();
        chadwick.style.borderColor = 'red';
        revertInitialColor()
    }
 
    console.log('selected!')
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
michael.addEventListener('click', ()=>{
// if answer matches question then correct if not then incorrect (use if statement)
    if (quote.innerText === michaelAnswers.mAnswer1 || 
        quote.innerText === michaelAnswers.mAnswer2 ) {
           selectActorCorrect();
           michael.style.backgroundColor = 'green';
           michael.style.borderColor = 'lightGreen';

    }else{
        selectActorIncorrect();
        michael.style.borderColor = 'red';

    }
 
    console.log('selected!')
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
lupita.addEventListener('click', ()=>{
// if answer matches question then correct if not then incorrect (use if statement)
    if (quote.innerText === lupitaAnswers.lAnswer1) {
           selectActorCorrect();
           lupita.style.backgroundColor = 'green';
           lupita.style.borderColor = 'lightGreen';

    }else{
        selectActorIncorrect();
        lupita.style.borderColor = 'red';

    }
 
    console.log('selected!')
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
letitia.addEventListener('click', ()=>{
// if answer matches question then correct if not then incorrect (use if statement)
    if (quote.innerText === letitiaAnswers.letitiaAnswer1 || 
        quote.innerText === letitiaAnswers.letitiaAnswer2) {
           selectActorCorrect();
           letitia.style.backgroundColor = 'green';
           letitia.style.borderColor = 'lightGreen';

    }else{
        selectActorIncorrect();
        letitia.style.borderColor = 'red';

    }
 
    console.log('selected!')
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
danai.addEventListener('click', ()=>{
// if answer matches question then correct if not then incorrect (use if statement)
    if (quote.innerText === danaiAnswers.danaiAnswer1) {
           selectActorCorrect();
           danai.style.backgroundColor = 'green';
           danai.style.borderColor = 'lightGreen';

    }else{
        selectActorIncorrect();
        danai.style.borderColor = 'red';

    }
 
    console.log('selected!')
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
daniel.addEventListener('click', ()=>{
// if answer matches question then correct if not then incorrect (use if statement)
    if (quote.innerText === danielAnswers.danielAnswer1 ) {
           selectActorCorrect();
           daniel.style.backgroundColor = 'green';
           daniel.style.borderColor = 'lightGreen';

    }else{
        selectActorIncorrect();
        daniel.style.borderColor = 'red';

    }
 
    console.log('selected!')
})        
// daniel END
// EventListeners end-------- -------- -------- -------- -------- -------- -------->

console.log('we are live!')