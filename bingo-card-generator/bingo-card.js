window.onload = initAll;

// do I even know javascript?
var hardcodedStrings = ["Welcome to X on this most excellent of all Y",
"\"Scot-ness\" of Scot (or similar)",
"Ambitious without being competitive",
"The great EHP experiment",
"The greatest resource engineering students have is their peers",
"And there you have that",
"Deeply deeply",
"What does it mean to X?",
"And another thing",
"Mentions integration over small life events",
"Blind chance",
"Any Russian word",
"Being about X",
"14",
"15",
"16",
"17",
"18",
"19",
"20",
"21",
"22",
"23",
"24"]

var usedNums = new Array(hardcodedStrings.length);

function initAll() {
  if (document.getElementById) {
    document.getElementById("reload").onclick = anotherCard;
    newCard();

  }
  else{
    alert("Your browser does not support this script.");
  }
}

function newCard() {
  for(var i=0 ; i<24 ; i++){
      setSquare(i);
    }
}

function setSquare(thisSquare){
  var currentSquare = "square" + thisSquare;
  // var colPlace = new Array(0,1,2,3,4,0,1,2,3,4,0,1,3,4,0,1,2,3,4,0,1,2,3,4);
  // var colBasis = colPlace[thisSquare] * 15;
  var newNum = getNewNum();

  do{
    newNum = getNewNum();
  }while(usedNums[newNum]);

  usedNums[newNum] = true;
  document.getElementById(currentSquare).innerHTML =  hardcodedStrings[newNum];
  document.getElementById(currentSquare).addEventListener("click", function() {
    this.className = this.className == "white" ? "green" : "white";
  });
}

function getNewNum() {
  return Math.floor(Math.random() * hardcodedStrings.length);
}

function anotherCard() {
  for (var i = 1; i < usedNums.length; i++) {
    usedNums[i] = false;
  };

  newCard();
  return false;
}
