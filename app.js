// accessing elements in Dom
// play START
const playBtn = document.getElementById('playBtn');
const gameContainer = document.getElementById('gameContainer');
// play END
const questionTab = document.getElementById('questionTab');
const timer = document.getElementById('countdown');

// const nextBtn = document.getElementById('nextBtn');
const startBtn = document.getElementById('startBtn');
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
const actorInfoOne = document.getElementById('actorInfoOne');
const actorInfoTwo = document.getElementById('actorInfoTwo');
const actorInfoThree = document.getElementById('actorInfoThree');
const actorInfoFour = document.getElementById('actorInfoFour');
const actorInfoFive = document.getElementById('actorInfoFive');
const actorInfoSix = document.getElementById('actorInfoSix');
// end of actor Info tabs
const scoreNumber = document.getElementById('scoreNumber');

const starBar = document.getElementById('starContainer');

// functions START-------- -------- -------- -------- -------- -------- -------->
const playGame = ()=>{
    // gameContainer.style.visibility = 'visible';
    gameContainer.style.position = 'unset';
    gameContainer.style.marginLeft = 'unset';

}
// shows/ redirects user to the game container once the button is clicked
// end of play function


// question functions here -->
const saidStatements = {
    // Chadwick Start
    question1: `"In Times Of Crisis, The Wise Build Bridges While The Foolish Build Barriers."`,
    question3: `who got killed first battling for the throne?`,
    question5: ``,
    // -------->

    // Michael Start
    question2: `who rocks the iconic dreads?`,
    question6: `who wore the golden black panther suite?`,
    question14:`"Burry me in the ocean...because they knew death was better than death"`,
    // -------->

    // lupita Start
    question4: `"You Get To Decide What Kind Of King You Are Going To Be."`,
    // -------->

    // Letitia questions start
    question7: `"Did he freeze?"`,
    question8: `"The real question is, what are those?"`,
    question11: `"Just because it something works doesn't mean it can't be improved."`,
    question12:`"You Said You Would Take Me To California For The First Time, I Thought You Meant Coachella."`,
    // -------->

    // Dani Start
    question10: `who did the rhino lick?"`,
    question13: `who thinks guns are primitive?`,
    // -------->

    // Daniel Start
    question9: `who nearly gets hit by a rhino?`,
    // -------->
}
const changeQuote = ()=>{
    const keys = Object.values(saidStatements);
    let randomActor =  keys[Math.floor(Math.random()*keys.length)];
    return quote.innerText = randomActor;
    
}


// actor onclick/hover select answer functions here -->
let currentScore = 0;
// let newScore = currentScore + 1;
  const pointScore = ()=>{
   return  currentScore += 1 ;
  }

const openInfoTab = (position, visibility)=>{
    return position.style.visibility = visibility;
}




// correct answers 
const chadwickAnswers ={
    cAnswer1:saidStatements.question1,
    cAnswer2:saidStatements.question3,
    cAnswer3:saidStatements.question5
    }
    
const michaelAnswers ={
    mAnswer1:saidStatements.question6,
    mAnswer2:saidStatements.question2,
    mAnswer3: saidStatements.question14
}
const lupitaAnswers ={
    lAnswer1:saidStatements.question4,
    }
    
const letitiaAnswers ={
    letitiaAnswer1:saidStatements.question7,
    letitiaAnswer2:saidStatements.question8,
    letitiaAnswer3:saidStatements.question11,
    letitiaAnswer4:saidStatements.question12
}
const danaiAnswers ={
    danaiAnswer1:saidStatements.question10,
    danaiAnswer2:saidStatements.question13
    }
    
const danielAnswers ={
    danielAnswer1:saidStatements.question9,
}



// score functions here -->

// does selection match the question if so then (green) if not then incorrect (red)
//update the score 
//add the star

// end of toggling info tab function


// functions START-------- -------- -------- -------- -------- -------- -------->


playBtn.addEventListener('click', ()=>{
    // gameContainer.animate();
    return playGame();
    
})

// Timer and reset functions here -->
let startingTime = 60;
let time =  startingTime ; 


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
    // let seconds = time;
    
    let newInnerTime = `${time}`;
    return timer.innerText = newInnerTime;
  
}


const revertInitialColor = ()=>{
    setInterval(() => {
        questionTab.style.border = 'solid #c0bfbfce 1px ';
        nice.style.color = 'rgba(146, 146, 146, 0.036)';
        nope.style.color = 'rgba(146, 146, 146, 0.036)';
        // nextBtn.style.border = 'none';
        // nextBtn.style.fontSize = '0.8rem';



        
    }, 3000);

}


const onNext = ()=>{
        
        // nextBtn.style.border = 'inset rgb(32, 32, 32) 1.5px';
        // nextBtn.style.fontSize = '0.7rem';
        // nextBtn.innerText = 'next';
        console.log('event listener activated');
        // actors
       
        chadwick.style.borderColor = '#ffd100';
        michael.style.borderColor = '#ffd100';
        lupita.style.borderColor = '#ffd100';
        letitia.style.borderColor = '#ffd100';
        danai.style.borderColor = '#ffd100';
        daniel.style.borderColor = '#ffd100';

    if (questionTab.style.border != 'solid #c0bfbfce 1px'||
    nice.style.color != 'grey'||
    nope.style.color != 'grey' ) {
    revertInitialColor();
    }
}

const selectActorCorrect = ()=>{
    nice.style.display = 'unset';
 questionTab.style.border = 'solid lightGreen 3px';
 nice.style.color = 'lightGreen';
  nope.style.color = 'rgba(146, 146, 146, 0.036)';
  nope.style.display = 'none';


let starNode = document.createElement('div');
starBar.appendChild(starNode);
starNode.classList.add('starTwo');

// starBar.style.animationName = 'flashBar';


//   starBar.
// ---------------------------------------------------------------------->





const score = ()=>{
 scoreNumber.innerText = `${pointScore()}/14`
}
score();

changeQuote();
onNext();

if (questionTab.style.border != 'solid #c0bfbfce 1px'||
nice.style.color != 'grey'||
nope.style.color != 'grey' ) {
revertInitialColor();
}
 



}
const selectActorIncorrect = ()=>{
    nope.style.display = 'unset';
   questionTab.style.border = 'solid red 3px';
   nope.style.color = 'red';

    nice.style.color = 'rgba(146, 146, 146, 0.036)';
    nice.style.display = 'none';
    
}



// functions END-------- -------- -------- -------- -------- -------- -------->




// EventListeners START-------- -------- -------- -------- -------- -------- -------->
startBtn.addEventListener('click', ()=>{
    // nextBtn.style.display = 'unset';
    startBtn.style.display = 'none';
    changeQuote();
    setInterval(countdown, 1000);
    clearInterval(countdown);
    starBar.style.animationName = 'flashBar';


},{once:true})



// quote.addEventListener('click', ()=>{
//     onQuoteChange();
//     console.log('onQuoteChange is working!')
// })

// if (questionTab.style.border != 'solid #c0bfbfce 1px'||
//     nice.style.color != 'grey'||
//     nope.style.color != 'grey' ) {
//     revertInitialColor()
// }

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
        // chadwick.style.backgroundColor = 'green';
        selectActorCorrect();
        chadwick.style.borderColor = 'lightGreen';
        // chadwick.style.border= 'solid lightGreen 3px';
 

            
    }else{
        selectActorIncorrect();
        chadwick.style.borderColor = 'red';
        // chadwick.style.border= 'solid red 3px';
        // chadwick.style.backgroundColor = 'red';

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
        quote.innerText === michaelAnswers.mAnswer2 ||
        quote.innerText === michaelAnswers.mAnswer3) {
            //    michael.style.backgroundColor = 'green';
            selectActorCorrect();
            michael.style.borderColor = 'lightGreen';
         

    }else{
        selectActorIncorrect();
        michael.style.borderColor = 'red';
        //   michael.style.backgroundColor = 'red';

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
        //    lupita.style.backgroundColor = 'green';
        selectActorCorrect();
        lupita.style.borderColor = 'lightGreen';
        
           

    }else{
        selectActorIncorrect();
        lupita.style.borderColor = 'red';
        // lupita.style.backgroundColor = 'red';

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
        quote.innerText === letitiaAnswers.letitiaAnswer2 ||
        quote.innerText === letitiaAnswers.letitiaAnswer3 ||
        quote.innerText === letitiaAnswers.letitiaAnswer4)
         {
            //    letitia.style.backgroundColor = 'green';
            selectActorCorrect();
            letitia.style.borderColor = 'lightGreen';
      

    }else{
        selectActorIncorrect();
        letitia.style.borderColor = 'red';
        // letitia.style.backgroundColor = 'red';

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
    if (quote.innerText === danaiAnswers.danaiAnswer1 ||
        quote.innerText === danaiAnswers.danaiAnswer2) {
        //    danai.style.backgroundColor = 'green';
        selectActorCorrect();
        danai.style.borderColor = 'lightGreen';
        

    }else{
        selectActorIncorrect();
        danai.style.borderColor = 'red';
        // danai.style.backgroundColor = 'red';

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
        //    daniel.style.backgroundColor = 'green';
        selectActorCorrect();
        daniel.style.borderColor = 'lightGreen';
        

    }else{
        selectActorIncorrect();
        daniel.style.borderColor = 'red';
        // daniel.style.backgroundColor = 'red';

    }
 
    console.log('selected!')
})        

// nextBtn.addEventListener('click', (e)=>{
//     if (e) {     
        
//      onNextBtn();
//     changeQuote();
    
//     }else{
//     clearInterval(countdown)
//     }

// });
// daniel END
// EventListeners end-------- -------- -------- -------- -------- -------- -------->

console.log('we are live!')