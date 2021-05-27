let floor = prompt(
  "Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"
);

let pyramidRight = function (floor) {
  for (let i = 1; i <= floor; i++) {
    let str = "";

    //Add the white space to the left
    for (let j = 1; j <= floor - i; j++) {
      str += " ";
    }

    //Add the '#' for each row
    for (let k = 1; k <= i; k++) {
      str += "#";
    }

    //Print the pyramid pattern for each row
    console.log(str);
  }
};
console.log(pyramidRight(floor));
