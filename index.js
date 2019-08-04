// Code your solutions in this file

function writeCards(name, event) {
  let cards = []
  for (let i = 0; i <  name.length  ; i++){
    cards.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
  }
  return cards;
}

  function countdown(count){
    while(count >0){
      console.log (count);
      count -= 1;
    }
    console.log(count)
  }




