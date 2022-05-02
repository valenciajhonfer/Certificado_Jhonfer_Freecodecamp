const rot13 = (str) => {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

 
  let answer = "";
  for (let i = 0; i < str.length; i++) {
   
    if (alphabet.indexOf(str[i]) < 13 && alphabet.indexOf(str[i]) > -1) {
      
      answer += alphabet[alphabet.indexOf(str[i]) + 13];
    } else if (alphabet.indexOf(str[i]) >= 13) {
      
      answer += alphabet[alphabet.indexOf(str[i]) - 13];
    } else {
     
      answer += str[i];
    }
  }
  return answer;
};

console.log(rot13("SERR PBQR PNZC"));
