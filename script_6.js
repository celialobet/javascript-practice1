const arn1 = "CCGUCGUUGCGCUACAGC";
const arn2 = "CCUCGCCGGUACUUCUCG";
protein = "";

let codonToProtein = function (arn) {
  for (let i = 0; i < arn.length; i = i + 3) {
    let codon = arn.substr(i, 3);

    switch (codon) {
      case "UCU":
      case "UCC":
      case "UCA":
      case "UCG":
      case "AGU":
      case "AGC":
        return "Sérine";
        break;
      case "CCU":
      case "CCC":
      case "CCA":
      case "CCG":
        return "Proline";
        break;
      case "UUA":
      case "UUG":
        return "Leucine";
        break;
      case "UUU":
      case "UUC":
        return "Phénylalanine";
        break;
      case "CGU":
      case "CGC":
      case "CGA":
      case "CGG":
      case "AGA":
      case "AGG":
        return "Arginine";
        break;
      case "UAU":
      case "UAC":
        return "Tyrosine";
        break;

      default:
        console.log("Cette entrée n'est pas reconnue");
        break;
    }
  }
  return protein.join("-");
};

console.log(codonToProtein(arn1));
console.log(codonToProtein(arn2));
