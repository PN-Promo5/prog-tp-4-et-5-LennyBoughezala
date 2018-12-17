var boardInfo =[
  ["Mathias", "Ritrono", "34", "Nantes", "mr@yopmail.com", 1],
  ["Salif", "Bamogo", "25", "Brest", "sb@yopmail.com", 2],
  ["Kristina","Pavlov","20", "Villeurbanne", "kp@yopmail.com",3],
  ["Elise", "Seti", "30", "Grenoble", "es@yopmail.com", 4],
  ["Pierrick", "Di Angelo", "18", "Strasbourg", "pd@yopmail.com", 5],
  ["Mohamed", "Khaoui", "23", "Lille", "mh@yopmail.com", 6],
  ["Paige", "Anderson", "42", "Evry" , "pa@yopmail.com", 7],
]

// console.log(newBoardInfo);

function f1(name, firstName, age, city, mail){ //Function qui prend en parametre(name, firstName, age, city, mail)
  let i = 0
  let login
  let newBoardInfo = []
  newBoardInfo.push(name)
  newBoardInfo.push(firstName)
  newBoardInfo.push(age)
  newBoardInfo.push(city)
  newBoardInfo.push(mail)
  while (i< boardInfo.length) {
    i = i+1
    login = i+1
  }
  newBoardInfo.push(login)
  boardInfo.push(newBoardInfo)
}

f1("Lenny", "Boughezala", "23", "Marignane", "lenny@yopmail.com")
f1("Brigitte", "Bardeau", "78", "Saint-Malo", "bri@yopmail.com")
f1("Alain", "Afflelou", "71", "Caen", "aa@yopmail.com")

// console.log(boardInfo);

// function f2(board[3]){
//   board.indexOf()
//
// }

function f2(board){
var indices = [];
var élément = 'Marignane';
var idx = board.indexOf(élément);
while (idx != -1) {
  indices.push(idx);
  idx = board.indexOf(élément, idx + 1);
}
console.log(indices);
}
// [0, 2, 4]
f2(boardInfo)
