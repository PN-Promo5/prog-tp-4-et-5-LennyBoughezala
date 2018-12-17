// console.log("bonjour")
var board1 = ["var1","var2","var3","var4","var5","var6","var7","var8","var9","var10", "var11", "var12"];
var board2 = ["var2","var3"];
var board3 = [34,45,46,78,31,12,60,45]
var board4 = [2,4,6,9,34,63,78,189,6,34,60,12]
var board5 = ["atelier","bateau","canard","enfant","papier","internet","four","oie"]
var board6 = ["Radar", "rotor", "kayak","été", "ici", "tôt", "rêver", "ressasser", "réifier", "bonjour", "allo", "coucou"]

// Exercice 1 : Créez une fonction qui prend en paramètre un tableau et qui affiche en console tous les éléments de ce tableau.
function f1(board){
  let i = 0
  let currentElmt
  while (i<board.length) {
    currentElmt = board[i]
    i = i+1
    console.log(currentElmt);
  }
}

// f1(board1)


//Exercice 2 : Créez une fonction qui prend en paramètre un tableau et qui affiche en console les 10 premiers éléments de ce tableau.
function f2(board){
  let i = 0
  let currentElmt
  if (board.length>=10) {
    while (i<10) {
    currentElmt = board[i]
    i = i+1
    console.log(currentElmt);
    }
  }
  else {
    while (i<board.length) {
      currentElmt = board[i]
      i = i+1
      console.log(currentElmt);
    }
  }
}

// f2(board2)


//Exercice 3 : Créez une fonction qui prend en paramètre un tableau et qui affiche en console les 10 derniers éléments de ce tableau.
function f3(board){
  let i = 0
  let j = board.length -1
  let currentElmt
  if (board.length>=10) {
    while (i<10) {
    currentElmt = board[j]
    i = i +1
    j = j -1
    console.log(currentElmt)
    }
  }
  else {
    while (i<board.length) {
    currentElmt = board[j]
    i = i+1
    j = j-1
    console.log(currentElmt);
    }
  }
}

// f3(board2)


//Exercice 4 : Créez une fonction qui prend en paramètre un tableau de nombres et qui renvoie une copie de ce tableau dans laquelle tout les nombres ont été augmentés de 1.
function f4(board){
  let i = 0
  let currentElmt
  var boardBis = []
  while (i<board.length) {
    currentElmt =board[i]
    i = i+1
    currentElmt = currentElmt+1
    boardBis.push(currentElmt)
    console.log(currentElmt);
  }
}

// let a = f4(board3)


//Exercice 5 : Créez une fonction qui prend en paramètre un tableau de nombres et qui, pour tous les éléments de ce tableau, affiche si cet élément est pair ou non.
function f5(board){
  let i =0
  let currentElmt
  while (i<board.length) {
    currentElmt = board[i]
    i = i+1
    if (currentElmt%2==0) {
      console.log(currentElmt + " positif");
    }
    else {
      console.log(currentElmt + " négatif");
    }
  }
}

// f5(board3)


//Exercice 6 : Créez une fonction qui prend en paramètre un tableau de nombres, et qui renvoie la somme des éléments de ce tableau.
function f6(board){
  let i =0
  let j =0
  let currentElmt
  while (i<board.length) {
    currentElmt = board[i]
    i= i+1
    j= j+currentElmt
  }
  currentElmt = j
  console.log(currentElmt)
}

// f6(board3)


//Exercice 7 : Créez une fonction qui prend en paramètre un tableau de nombres et qui renvoie le nombre d’éléments pairs de ce tableau.
function f7(board){
  let i =0
  let j =0
  let currentElmt
  while (i<board.length) {
    currentElmt = board[i]
    i = i+1
    if (currentElmt%2==0) {
      j = j +1
    }
  }
  currentElmt = j
  console.log(currentElmt)
}

// f7(board3)


//Exercice 8 : Créez une fonction qui prend en paramètre un tableau de nombres et qui renvoie la valeur maximum de ce tableau.
function f8(board){
  let i = 0
  let j = 0
  let currentElmt
  while (i<board.length) {
    currentElmt = board[i]
    i = i+1
    if (currentElmt>j) {
      j = currentElmt
    }
  }
  currentElmt = j
  console.log(currentElmt);
}

// f8(board3)


//Exercice 9 : Créez une fonction qui prend en paramètre un tableau de nombres et qui affiche la valeur maximum et minimum de ce tableau.
function f9(board){
  let i = 0
  let j = 0
  let k = 9999
  let currentElmt
  while (i<board.length) {
    currentElmt = board[i]
    i = i+1
    if (currentElmt>j) {
      j = currentElmt
    }
    if (currentElmt<k) {
      k = currentElmt
    }
  }
  currentElmt = (j+" et "+k)
  console.log(currentElmt);
}

// f9(board3)


// Exercice 10 : Créez une fonction qui prend en paramètre un tableau de nombres et qui renvoie vrai si ce tableau est ordonné dans l’ordre croissant, faux si ce n’est pas le cas.
function f10(board){
  let i = 0
  let j = 1
  let currentElmt
  let currentElmt1
  let currentElmt2
  while (j<board.length){
    currentElmt1 = board[i]
    currentElmt2 = board[j]
    i = i+1
    j = j+1
    if(currentElmt1<currentElmt2){
      currentElmt = true
    }
    else {
      currentElmt = false
    }
    console.log(currentElmt);
  }
}

// f10(board4)


// Exercice 11 :Créez une fonction qui prend en paramètre un tableau de nombres et qui retourne un autre tableau de nombres constitué des éléments du tableau passé en paramètre. Dans le tableau retourné, chaque élément n'a qu'une seule occurrence.
function f11(board) {
let i = 0;
let currentElement;
let newBoard = [];
while (i < board.length) {
  currentElement = board[i]
  if (newBoard.indexOf(currentElement) === -1) {
    newBoard.push(currentElement);
  }
  i++
  }
  return newBoard
}

// console.log(f11(board4));



// Exercice 12 :Créez une fonction qui prend en paramètre un tableau de nombres et qui retourne un autre tableau de nombres constitué des éléments du tableau passé en paramètre. Dans le tableau retourné, l'ordre des éléments est inversé.
function f12(board) {
 let i = 0;
 let j = board.length - 1;
 let currentElement;
 let boardReverse = [];
 while (i < board.length) {
   currentElement = board[j];
   i = i + 1;
   j = j - 1;
   boardReverse.push(currentElement);
 }
 console.log(boardReverse);
};

// f12(board4);



//Exercice 13 : Créez une fonction qui prend en paramètres deux tableaux de nombres et qui retourne un tableau correspondant à la concaténation des deux tableaux d'entiers passés en paramètres.
function f13(boardA, boardB) {
 let i = 0;
 let j = boardA.length;
 let currentElement;
 let boardConcat = [];
 while (i < j) {
   i = i + 1;
   currentElement = boardA[i];
 }
 if (i = j) {
   currentElement = boardA.concat(boardB);
   boardConcat.push(currentElement);
 }
 console.log(boardConcat);
};

// f13(board3, board1)


//Exercice 14 : Créez une fonction qui prend en paramètre un tableau de chaînes de caractères, qui copie dans un nouveau tableau tous les éléments du tableau passé en paramètre commençant par une voyelle.
function f14(board) {
 let currentElement;
 let boardVowel = []
 for (let i = 0; i < board.length; i = i + 1) {
   currentElement = board[i];
   if (currentElement.charAt(0) === "a" | currentElement.charAt(0) === "e" | currentElement.charAt(0) === "i" | currentElement.charAt(0) === "o" | currentElement.charAt(0) === "u" | currentElement.charAt(0) === "y" ) {
     boardVowel.push(currentElement)
   }
 }
 console.log(boardVowel);
};

// f14(board5);


// Exercice 15 : Créez une fonction qui prend en paramètre une chaîne de caractères, qui renvoie vrai si la chaîne est un palindrome, ou qui renvoie faux si ce n’est pas le cas.
function f15(word){
  let j = word.length-1
  let i = 0
  let reverseWord = []
  let tbl =[]
  while (j>=0){
    reverseWord[i] = word[j]
    j--
    i++
  }
  i = 0
  while (i<word.length) {
    if (reverseWord[i]==word[i]) {
      tbl[i] = reverseWord[i]
    }
    i++
  }
  if (tbl.length==word.length) {
    return true
  }
  else {
    return false
  }
}

// console.log(f15("ici"));


//Exercice 15 : Créez une fonction qui prend en paramètre deux chaînes de caractères, qui renvoie vrai si la 1ère chaîne est un anagramme de la 2ème chaîne, ou qui renvoie faux si ce n’est pas le cas.
function f16(wordA, wordB){
  let i = 0
  let j;
  let k = 0
  let tbl =[];

  while (i<wordA.length) {
    console.log("a");
    j = 0;
    while (j<wordA.length) {
    if(wordA[i] == wordB[j]&&tbl.indexOf(wordA[i]) === -1){
       // index of r
       tbl.push(wordA[i])


}
    console.log("B");
      j++
    }
    i++
  }

  if (tbl.length == wordA.length) {
    return true
  }
  else {
    return false
  }
}

// console.log(f16("heoviapl", "hoiapxel"));
