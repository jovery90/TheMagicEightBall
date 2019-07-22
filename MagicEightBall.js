var dieRoll;

function rollDie(){
  dieRoll = Math.floor(Math.random() * 42)+1;
}


function playGame(){
  if (document.getElementById("questionText").value != ''){
    rollDie();
    document.getElementById("questionText").value = '';
    document.getElementById("ballAnswer").style.display = "block";
    if (dieRoll == 1){
      document.getElementById("ballAnswer").innerText = 'My sources say no, but they also said Hillary would win';
    }
    if (dieRoll == 2){
      document.getElementById("ballAnswer").innerText = 'Please shake again';
    }
    if (dieRoll == 3){
      document.getElementById("ballAnswer").innerText = 'Shake harder';
    }
    if (dieRoll == 4){
      document.getElementById("ballAnswer").innerText = "HA....HAHAHAHAHA THAT'S THE FUNNIEST THING I HEARD ALL DAY!";
    }
    if (dieRoll == 5){
      document.getElementById("ballAnswer").innerText = 'Gone to lunch, back in 15 minutes';
    }
    if (dieRoll == 6){
      document.getElementById("ballAnswer").innerText = 'The cake is a lie';
    }
    if (dieRoll == 7){
      document.getElementById("ballAnswer").innerText = "I'm not here to judge...";
    }
    if (dieRoll == 8){
      document.getElementById("ballAnswer").innerText = 'Whuh? What am I doing in this ball? Who are you?';
    }
    if (dieRoll == 9){
      document.getElementById("ballAnswer").innerText = 'DO A BARREL ROLL!';
    }
    if (dieRoll == 10){
      document.getElementById("ballAnswer").innerText = "I don't know, ask the ouija board?";
    }
    if (dieRoll == 11){
      document.getElementById("ballAnswer").innerText = "Just take a look, it's in a book, a reading rainbow";
    }
    if (dieRoll == 12){
      document.getElementById("ballAnswer").innerText = 'FALCON PUNCH';
    }
    if (dieRoll == 13){
      document.getElementById("ballAnswer").innerText = 'Try asking in Spanish';
    }
    if (dieRoll == 14){
      document.getElementById("ballAnswer").innerText = 'This magic 8 ball will explode in 8 seconds';
    }
    if (dieRoll == 15){
      document.getElementById("ballAnswer").innerText = 'That question is incompatible with your current operating system. Would you like to search for a solution online?';
    }
    if (dieRoll == 16){
      document.getElementById("ballAnswer").innerText = "Well, if you don't know then i'm not going to tell you.";
    }
    if (dieRoll == 17){
      document.getElementById("ballAnswer").innerText = 'I dunno, what do you think?';
    }
    if (dieRoll == 18){
      document.getElementById("ballAnswer").innerText = "I'm plastic and you think I'm smarter than you?  You're right ;)";
    }
    if (dieRoll == 19){
      document.getElementById("ballAnswer").innerText = 'Well, do you think we landed on the moon?';
    }
    if (dieRoll == 20){
      document.getElementById("ballAnswer").innerText = 'I see your question and raise you one.  WHY???';
    }
    if (dieRoll == 21){
      document.getElementById("ballAnswer").innerText = "It's cuz you ate your breakfast.";
    }
    if (dieRoll == 22){
      document.getElementById("ballAnswer").innerText = 'Absolutely.';
    }
    if (dieRoll == 23){
      document.getElementById("ballAnswer").innerText = "Well, doesn't everyone love nacho sauce??";
    }
    if (dieRoll == 24){
      document.getElementById("ballAnswer").innerText = 'I would say yes.';
    }
    if (dieRoll == 25){
      document.getElementById("ballAnswer").innerText = "On a scale of 1-10, I give it an 11.";
    }
    if (dieRoll == 26){
      document.getElementById("ballAnswer").innerText = 'Things are looking up!';
    }
    if (dieRoll == 27){
      document.getElementById("ballAnswer").innerText = 'Is water made of two Hydrogen atoms bonded with one Oxygen?';
    }
    if (dieRoll == 28){
      document.getElementById("ballAnswer").innerText = 'Def totes.';
    }
    if (dieRoll == 29){
      document.getElementById("ballAnswer").innerText = 'I dig it.';
    }
    if (dieRoll == 30){
      document.getElementById("ballAnswer").innerText = 'Yes.';
    }
    if (dieRoll == 31){
      document.getElementById("ballAnswer").innerText = 'Things are definitely in motion.';
    }
    if (dieRoll == 32){
      document.getElementById("ballAnswer").innerText = 'Make it happen.';
    }
    if (dieRoll == 33){
      document.getElementById("ballAnswer").innerText = 'Just do it.';
    }
    if (dieRoll == 34){
      document.getElementById("ballAnswer").innerText = 'A wild and terrific YES';
    }
    if (dieRoll == 35){
      document.getElementById("ballAnswer").innerText = 'Of course!';
    }
    if (dieRoll == 36){
      document.getElementById("ballAnswer").innerText = 'Never';
    }
    if (dieRoll == 37){
      document.getElementById("ballAnswer").innerText = "Don't ever ask that again.";
    }
    if (dieRoll == 38){
      document.getElementById("ballAnswer").innerText = "It ain't looking so hot.";
    }
    if (dieRoll == 39){
      document.getElementById("ballAnswer").innerText = 'Not a chance.';
    }
    if (dieRoll == 40){
      document.getElementById("ballAnswer").innerText = 'No.';
    }
    if (dieRoll == 41){
      document.getElementById("ballAnswer").innerText = 'Just no.';
    }
    if (dieRoll == 42){
      document.getElementById("ballAnswer").innerText = 'What did I say before?  No.';
  }
  }
  else {
    alert("Ask a question!")
}
}
