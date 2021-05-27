let message = prompt("Que veux-tu dire à notre Acné-bot?");

let acneBotResponse = function (string) {
  if (string.slice(-1) === "?") {
    return "Ouais Ouais...";
  } else if (string === string.toUpperCase()) {
    return "Pwa, calme-toi...";
  } else if (string.includes("fortnite")) {
    return "on s' fait une partie soum-soum ?";
  } else if (string == null || string === "") {
    return "t'es en PLS ?";
  } else {
    return "Balek";
  }
};
console.log(acneBotResponse(message));
