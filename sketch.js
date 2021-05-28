function setup() {
  createCanvas(400, 400);
  
  //Um dado do tipo string
  name = "Hermoine";
  
  //Um dado do tipo número
  num = 31;
  
  //Um dado do tipo matriz
  newArray = ["Item1", 32, name, num];
  
  //acessar o 1º ítem na matriz e inscrevê-lo no console
  console.log(newArray[0]);
  
  //acessar o 3º ítem na matriz e inscrevê-lo no console
  console.log(newArray[2]);

  //encontrar o comprimento (length) da matriz
  console.log(newArray.length);

}

function draw() {
  background(220);
  
}