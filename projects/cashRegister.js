
const checkCashRegister = (price, cash, cid) => {
 
  let change = cash * 100 - price * 100;
  let totalCash = 0;

 
  for (let element of cid) {
   
    totalCash += element[1] * 100;
    
  }

  // If change is greater than total amount of cash
  if (change > totalCash) {
    return {
      status: "INSUFFICIENT_FUNDS",
      change: [],
    };
  } else if (change === totalCash) {
    // If change is exactly equal to total cash
    return {
      status: "CLOSED",
      change: cid,
    };
  } else {
    // There are two possible outcomes
    // Sort array from highest to lowest
    cid = cid.reverse();

    // Each denomination in pennies
    let moneyDenoms = {
      "ONE HUNDRED": 10000,
      TWENTY: 2000,
      TEN: 1000,
      FIVE: 500,
      ONE: 100,
      QUARTER: 25,
      DIME: 10,
      NICKEL: 5,
      PENNY: 1,
    };

    let changeDue = [];

    // Amount of each denomination in the cash register
    for (let element of cid) {
      // Store the denominations withdrawn from the cash register
      let withdrawnDenoms = [element[0], 0];
      // console.log(element);

      element[1] *= 100;
      // console.log(element);

      // While change is greater or equal to a denomination, and there is cash in the cash register
      while (change >= moneyDenoms[element[0]] && element[1] > 0) {
        // console.log(moneyDenoms[element[0]], element[1]);
        change -= moneyDenoms[element[0]];
        // console.log(change);

        element[1] -= moneyDenoms[element[0]];
        // console.log(element[1]);

        // Divide by 100 to convert back to dollar
        withdrawnDenoms[1] += moneyDenoms[element[0]] / 100;
        // console.log(withdrawnDenoms[1]);
      }
      // Add all the values that are not zero to changeDue
      if (withdrawnDenoms[1] > 0) {
        changeDue.push(withdrawnDenoms);
        // console.log(changeDue);
      }
    }

    if (change > 0) {
      return {
        status: "INSUFFICIENT_FUNDS",
        change: [],
      };
    } else {
      return {
        status: "OPEN",
        change: changeDue,
      };
    }
  }
};

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
