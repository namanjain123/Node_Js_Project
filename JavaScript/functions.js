function addTwoNumbers() {
    let numOne = 2
    let numTwo = 3
    let total = numOne + numTwo
    return total

}

console.log(addTwoNumbers())
//with parameters
function functionName(parm1) {
    //code goes her
  }
  functionName(parm1) // during calling or invoking one argument needed
  
  function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
  }
  
  console.log(areaOfCircle(10)) // should be called with one argument
  
  //
  function sumArrayValues(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  }
  const numbers = [1, 2, 3, 4, 5];
      //calling a function
  console.log(sumArrayValues(numbers));

  function square(n) {
    return n * n
  }
  console.log(square(2)) // 4
  const square = n => {
    return n * n
  }
  console.log(square(2))