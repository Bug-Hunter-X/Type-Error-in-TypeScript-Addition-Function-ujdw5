function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number | string {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    return "Error: Inputs must be numbers";
  }
}

let result1 = addSafe(1, "2"); //Return error message
let result2 = addSafe(1, 2);   //Return 3
console.log(result1, result2)