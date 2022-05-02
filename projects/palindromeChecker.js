const palindrome = (str) => {
  
  str = str.replace(/\W|_/g, "").toLowerCase();

  
  let strReverse = str.split("").reverse().join("");
  if (str === strReverse) {
    return true;
  } else {
    return false;
  }
};

console.log(palindrome("&_%Eye#&%*%$_"));
