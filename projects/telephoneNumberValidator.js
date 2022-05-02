const telephoneCheck = (str) => {
  // Validate phone number using regular expression
  let regex = /^1?\s?(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}$/gm;

  // Test for a match between the regex and str
  return regex.test(str);
};

console.log(telephoneCheck("555-555-5555"));
