//Etape1:
//fonction va prendre en paramètre du texte et retourner un tableau contenant chaque caractère

function getLatinCharacterList(Mytexte) {
  let myTexteArray = Mytexte.split("");
  return myTexteArray;
}
//getLatinCharacterList("Hello,world");

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
    return myMorseChar;
  } else {
    console.log(myLatinChar + " n'est pas reconnu");
  }
}
//translateLatinCharacter("A")

//Etape 3:
//une 3eme fonction qui utilise la fonc1 et fonc2 pour traduire du texte latin en morse

function encode(texte) {
  let morseTexte = '';
  const texteMaj = texte.toUpperCase();
  //console.log(texteMaj);
  let latinArray = getLatinCharacterList(texteMaj);
  //console.log(latinArray);
  for(i=0; i<latinArray.length;i++){
  morseTexte += (translateLatinCharacter(latinArray[i]));
}
console.log(morseTexte);
}
encode("Bonjour");
