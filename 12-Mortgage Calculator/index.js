function getMortage(principalAmount, downPayment = 0, interestRate, tenure) {
  const amount = principalAmount - downPayment;
  const interestAmount = (principalAmount * interestRate) / 100;
  return (interestAmount + amount) / tenure;
}

const mortage = getMortage(10000, 0, 16, 12);
console.log(mortage);
