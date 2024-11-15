//Etape1:
//fonction va prendre en paramètre du texte et retourner un tableau contenant chaque caractère

function getLatinCharacterList(Mytexte) {
  let myTexteArray = Mytexte.split("");
    console.log(myTexteArray);
  }
getLatinCharacterList("Hello,world");
//Etape2:
//une fonction qui prend en paramètre un caractère et renvoie sa correspondance en morse
const latinToMorse = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};
function translateLatinCharacter(myLatinChar) {
  if (myLatinChar in latinToMorse) {
    let myMorseChar = latinToMorse[myLatinChar];
    console.log(myMorseChar);
  } else {
    console.log(myLatinChar + " n'est pas reconnu");
  }
}
translateLatinCharacter("A");
