const form = document.querySelector("form");
const squareNumber = number => {
  let result = (number ** 2).toFixed(2);
  console.log(`The result of squaring the number ${number} is ${result}.`);
  return result;
};

const halfNumber = number => {
  let result = (number / 2).toFixed(2);
  console.log(`Half of ${number} is ${result}.`);
  return result;
};

const percentOf = (a, b) => {
  if (1 / b === Infinity) {
    console.log("Your should not have 0 as denominator");
    return "Make sure you second input is not 0";
  }
  let result = ((a / b) * 100).toFixed(2);
  console.log(`${a} is ${result}% of ${b}.`);
  return result;
};

const areaOfCircle = radius => {
  let result = (Math.PI * radius ** 2).toFixed(2);
  console.log(`The area for a circle with radius ${radius} is ${result}.`);
  return result;
};

function calculator(number) {
  let halfResult = halfNumber(number);
  let squareResult = squareNumber(halfResult);
  let areaResult = areaOfCircle(squareResult);
  alert(percentOf(areaResult, squareResult));
}

form.addEventListener("submit", e => {
  e.preventDefault();
  //NB:get value converting to number in case
  // someone by pass the html type number
  let number = +e.target[0].value;
  if (isNaN(number)) {
    alert("Oga abeg you Enter Number nau");
    return;
  }
  calculator(number);
});
