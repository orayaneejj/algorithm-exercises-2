function validatePIN(pin) {
  const regex = /^\d+$/;
  if (regex.test(pin) && (pin.length === 4 || pin.length === 6)) {
    return true;
  } else {
    return false;
  }
}

let result1 = validatePIN("1234");
console.log(result1); // true

let result2 = validatePIN("12345");
console.log(result2); // false

let result3 = validatePIN("a234");
console.log(result3); // false
