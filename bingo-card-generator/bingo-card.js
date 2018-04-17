window.onload = initAll;

var hardcodedStrings = ["Welcome to X on this most excellent of all Y",
"\"Scot-ness\" of Scot (or similar)",
"Ambitious without being competitive",
"4",
"5",
"6",
"7",
"8",
"9",
"10",
"11",
"12",
"13",
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
