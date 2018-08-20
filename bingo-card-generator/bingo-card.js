window.onload = initAll;

// do I even know javascript?
var banquetStrings = ["\"Welcome to ___ on this most excellent of all ___\"",
"\"___-ness of ___\"",
"\"Ambitious without being competitive\"",
"The great EHP experiment",
"The greatest resource engineering students have is their peers",
"\"And there you have that\"",
"\"Deeply deeply\"",
"\"What does it mean to ___?\"",
"\"And again\" or \"and another thing\"",
"Integration over small life events/sum of infinite infinitesimally small moments",
"Blind chance",
"Any Russian word",
"\"Being about ___\"",
"Westworld",
"Harry Potter",
"Lord of the Rings",
"\"For those of you...\"",
"Mentions conflict with Housing",
"Mentions bowtie count",
"\"Dominate your exams\"",
"Any Greek word, other than &#913&#915&#921&#927&#925 &#931&#922&#933&#914&#913&#923&#927&#925",
"\"Totally\" as the only response to a student's answer",
"HFFM",
"Dating unit",
"Emotional bandwidth or emotional units",
"Speaks highly of 3 or more EHP alumni",
"\"Failing better\"",
"\"SO, ...\" where \"so\" is 10x louder than the rest",
"\"___ of ___ fame\"",
"Plato reference",
"\"We don't talk about statistics, but... (insert statistic here)\"",
"\"Geworfenheit\"",
"Uses physics/math metaphor to explain philosophical concept",
"2 or more random/pointless EHP statistics or records",
"\"I sincerely hope\"",
"Any swear word",
"\"Wasting valuable tuition dollars\"",
"\"Beat the snot out of...\""
]

var bbqStrings = ["\"Welcome to ___ on this most excellent of all ___\"",
"\"___-ness of ___\"",
"\"Ambitious without being competitive\"",
"The great EHP experiment",
"The greatest resource engineering students have is their peers",
"\"And there you have that\"",
"\"Deeply deeply\"",
"\"What does it mean to ___?\"",
"\"And again\" or \"and another thing\"",
"Integration over small life events/sum of infinite infinitesimally small moments",
"Blind chance",
"\"Being about ___\"",
"Westworld",
"Harry Potter",
"Lord of the Rings",
"\"For those of you...\"",
"Mentions conflict with Housing",
"Any Greek word, other than &#913&#915&#921&#927&#925 &#931&#922&#933&#914&#913&#923&#927&#925",
"HFFM",
"Mentions 10th year of the program",
"Draws similarity between himself and students' parents"
"Emotional bandwidth or emotional units",
"Speaks highly of 3 or more EHP alumni",
"Goes over what other EHP events we do",
"\"Failing better\"",
"\"SO, ...\" where \"so\" is 10x louder than the rest",
"\"___ of ___ fame\"",
"\"We don't talk about statistics, but... (insert statistic here)\"",
"Uses physics/math metaphor to explain philosophical concept",
"2 or more random/pointless EHP statistics or records",
"\"I sincerely hope\"",
"Any swear word",
]

var hardcodedStrings = bbqStrings.slice()

var usedNums = new Array(hardcodedStrings.length);

function initAll() {
  if (document.getElementById) {
    // document.getElementById("reload").onclick = anotherCard;
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
