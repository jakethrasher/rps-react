export function getRandomThrow(){
    let number = Math.ceil(Math.random()*3)

    if(number === 1) return 'rock';
    if(number === 2) return 'paper';
    if(number === 3) return 'scissors';
}
export function didUserWin(player, computer){
    if (player === 'rock' && computer === 'scissors') return 'You win!';
    if (player === 'paper' && computer === 'rock') return 'You win!';
    if (player === 'scissors' && computer === 'paper') return 'You win!';
    if (player === computer) return 'It\'s a draw!';
    else return 'You lost!!';
}
export function getImage (string, array){
    for(let item of array){
      if(string === item.value){
        return item.src 
      }
    }
  }
