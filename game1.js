var scores , roundscore , activePlayer , gamePlaying;


init() ;


//Roll the dice //

document.querySelector('.btn--roll').addEventListener('click', function(){
 if(gamePlaying){
  // 1 Random Number 
var dice =  Math.floor(Math.random()*6)+1 ;

// 2 - display the result 
var diceDom = document.querySelector('.dice')
diceDom.style.display = 'block';
diceDom.src = 'dice-'+ dice + '.png';



// 3 - update the round result if the rolled number was not 1

   if(dice !== 1){
     // ADD score
     roundscore += dice  ;
     document.querySelector('#current--' + activePlayer).textContent = roundscore ;


   } else{
    
     next_player() ;
   }
 }
})

document.querySelector('.btn--hold').addEventListener('click',function(){

if(gamePlaying)
{
    // Add cur_sr to global  scr ;
 scores[activePlayer] += roundscore ;



 // update the ui 
 document.querySelector('#score--'+ activePlayer).textContent = scores[activePlayer];
 
 
 
 // check if player won the game 
 if(scores[activePlayer] >= 100)
 {
     document.querySelector('#name--'+activePlayer).textContent = 'WINNER!' ;
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player--'+activePlayer + '.player--active').classList.add('player--winner') ;
    document.querySelector('.player--'+activePlayer + '.player--active').classList.remove('player--active');
    gamePlaying = false ; 
 }
 else {
 // next player 
 next_player() ;
 }
}

})


function next_player(){
    // change turn 
    activePlayer ^=  1 ;
    roundscore = 0 ;

    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';



     document.querySelector('.player--0').classList.toggle('player--active');
     document.querySelector('.player--1').classList.toggle('player--active');

        document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn--new').addEventListener('click',init);



function init()
{
    scores = [0,0] ;
activePlayer = 0 ;
roundscore = 0 ;
gamePlaying = true  ;
document.querySelector('.dice').style.display = 'none';

document.getElementById('score--0').textContent = '0';
document.getElementById('score--1').textContent = '0';
document.getElementById('current--0').textContent = '0';
document.getElementById('current--1').textContent = '0';
document.getElementById('name--0').textContent = 'Player 1';
document.getElementById('name--1').textContent = 'Player 2';
 document.querySelector('.player--'+'1').classList.remove('player--winner');
 document.querySelector('.player--'+'0').classList.remove('player--winner');
 document.querySelector('.player--'+'0').classList.add('player--active');

}


