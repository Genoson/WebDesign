/** Putting too much effort into practicing the DOM
 * Stephen Squire
 * November 3, 2021
 */

// defining an array of arrays to contain the labels for each button page

let labelArray = [
  ["Radius"],
  ["Celsius"],
  ["Temperature", "Type"],
  ["Number"],
  ["Number1", "Number2", "Number3", "Number4", "Number5"],
  ["Number"],
  ["Number"],
  ["Number1", "Number2", "Number3", "Number4", "Number5"],
  ["Number1", "Number2"],
  ["Number", "Lower", "Upper", "Inclusive"],
];

// defining the functions to be used later

function changeBackground(image, font, h1, result, question) {
  let background = document.querySelector(".contentArea");
  background.style.backgroundImage = `url("./media/${image}.jpg")`;
  background.style.backgroundSize = "100% 100%";
  if (font === "white") {
    h1.style.color = "white";
    result.style.color = "white";
    question.style.color = "white";
  } else {
    h1.style.color = "black";
    result.style.color = "black";
    question.style.color = "black";
  }
}

function createForm(buttonNumber, numberInputs, labelArray, contentForm) {
  let form = document.createElement("form");
  form.id = "form";
  let n = 0;
  while (n < numberInputs) {
    let label = document.createElement("label");
    label.innerText = labelArray[buttonNumber - 1][n];
    label.for = labelArray[buttonNumber - 1][n];
    let input = document.createElement("input");
    input.type = "text";
    input.id = labelArray[buttonNumber - 1][n];
    form.appendChild(label);
    form.appendChild(input);
    if (n != numberInputs - 1) {
      let line = document.createElement("br");
      form.appendChild(line);
    }
    n++;
  }
  let submit = document.createElement("input");
  submit.value = "Submit";
  submit.type = "submit";
  submit.id = "submitButton";
  form.appendChild(submit);
  contentForm.appendChild(form);
}

// Defining the functions from the assignment set below

function area(r) {
  let a = 3.1415 * r * r;
  return a;
}

function celToFahr(celsius) {
  let fahrenheit = 1.8 * celsius + 32;
  return fahrenheit;
}

function conversion(temperature, scale) {
  let converted;
  if (scale.toUpperCase() === "C") {
    converted = (9 / 5) * temperature + 32;
  } else if (scale.toUpperCase() === "F") {
    converted = ((temperature - 32) * 5) / 9;
  } else {
    converted = "Second parameter must be either C or F";
  }
  return converted;
}

function isUnder50(numbers) {
  let solution;
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] >= 50) {
      solution = false;
      break;
    } else {
      solution = true;
    }
  }
  return solution;
}

function sum(numbers) {
  let sum = 0;
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

function multiple3(number) {
  let temp;
  if (number % 3 === 0) {
    temp = true;
  } else {
    temp = false;
  }
  return temp;
}

function addHST(cost) {
  let total = cost * 0.13;
  return total;
}

function flip(numbers) {
  let temp;
  let accumulate = "";
  for (i = arguments.length - 1; i >= 0; i--) {
    temp = arguments[i].toString();
    accumulate += `${temp} `;
  }
  return accumulate;
}

function intSum(a, b) {
  let sum = a + b;
  sum = parseInt(sum);
  return sum;
}

function betweenCheck(number, bottom, top, inclusive) {
  let state;
  if (inclusive === true) {
    if (bottom <= number <= top) {
      state = true;
    } else {
      state = false;
    }
  } else {
    if (bottom < number && number < top) {
      state = true;
    } else {
      state = false;
    }
  }
  return state;
}

// defining variables for the containers and the button

let contentHead = document.getElementById("contentHead");
let contentForm = document.getElementById("contentForm");
let contentResult = document.getElementById("contentResult");

let version1Button = document.getElementById("version1");
let version2Button = document.getElementById("version2");
let version3Button = document.getElementById("version3");
let version4Button = document.getElementById("version4");
let version5Button = document.getElementById("version5");
let version6Button = document.getElementById("version6");
let version7Button = document.getElementById("version7");
let version8Button = document.getElementById("version8");
let version9Button = document.getElementById("version9");
let version10Button = document.getElementById("version10");

// defining the button functionality

version1Button.addEventListener("click", function (e) {
  contentHead.innerHTML = "";
  contentForm.innerHTML = "";
  contentResult.innerHTML = "";
  let h1 = document.createElement("h1");
  h1.innerText = "Question 1: Area of a Circle";
  contentHead.appendChild(h1);
  let question = document.createElement("p");
  question.innerText =
    "Enter the radius of a circle and click submit to see the Area below.";
  contentForm.appendChild(question);
  createForm(1, 1, labelArray, contentForm);
  let result = document.createElement("article");
  result.innerText = "The answer will appear here";
  contentResult.appendChild(result);
  changeBackground("circle", "white", h1, result, question);
  e.preventDefault();
  form.addEventListener("submit", function (e) {
    let r = document.querySelector("#Radius").value;
    let answer = area(r);
    result.innerText = `The answer is: ${answer}`;
    e.preventDefault();
    console.log(answer);
  });
});

version2Button.addEventListener("click", function (e) {
  contentHead.innerHTML = "";
  contentForm.innerHTML = "";
  contentResult.innerHTML = "";
  let h1 = document.createElement("h1");
  h1.innerText = "Question 2: Convert Celsius to Fahrenheit";
  contentHead.appendChild(h1);
  let question = document.createElement("p");
  question.innerText =
    "Enter the temperature in Celsius and click submit to see the temperature in Fahrenheit below.";
  contentForm.appendChild(question);
  createForm(2, 1, labelArray, contentForm);
  let result = document.createElement("article");
  result.innerText = "The answer will appear here";
  contentResult.appendChild(result);
  changeBackground("celsius", "", h1, result, question);
  e.preventDefault();
  form.addEventListener("submit", function (e) {
    let c = document.querySelector("#Celsius").value;
    let answer = celToFahr(c);
    result.innerText = `The answer is: ${answer}`;
    e.preventDefault();
    console.log(answer);
  });
});

version3Button.addEventListener("click", function (e) {
  contentHead.innerHTML = "";
  contentForm.innerHTML = "";
  contentResult.innerHTML = "";
  let h1 = document.createElement("h1");
  h1.innerText = "Question 3: Convert Temperatures with Specified Type";
  contentHead.appendChild(h1);
  let question = document.createElement("p");
  question.innerText =
    "Enter the temperature and specify the type (c or f) to perform the conversion.";
  contentForm.appendChild(question);
  createForm(3, 2, labelArray, contentForm);
  let result = document.createElement("article");
  result.innerText = "The answer will appear here";
  contentResult.appendChild(result);
  changeBackground("conversion", "white", h1, result, question);
  e.preventDefault();
  form.addEventListener("submit", function (e) {
    let t = document.querySelector("#Temperature").value;
    let type = document.querySelector("#Type").value;
    let answer = conversion(t, type);
    result.innerText = `The answer is: ${answer}`;
    e.preventDefault();
    console.log(answer);
  });
});

version4Button.addEventListener("click", function (e) {
  contentHead.innerHTML = "";
  contentForm.innerHTML = "";
  contentResult.innerHTML = "";
  let h1 = document.createElement("h1");
  h1.innerText = "Question 4: Less than 50 check";
  contentHead.appendChild(h1);
  let question = document.createElement("p");
  question.innerText =
    "Enter a number and click submit to see if it is less than 50.";
  contentForm.appendChild(question);
  createForm(4, 1, labelArray, contentForm);
  let result = document.createElement("article");
  result.innerText = "The answer will appear here";
  contentResult.appendChild(result);
  changeBackground("fifty", "", h1, result, question);
  e.preventDefault();
  form.addEventListener("submit", function (e) {
    let n = document.querySelector("#Number").value;
    let answer = isUnder50(n);
    result.innerText = `The answer is: ${answer}`;
    e.preventDefault();
    console.log(answer);
  });
});

version5Button.addEventListener("click", function (e) {
  contentHead.innerHTML = "";
  contentForm.innerHTML = "";
  contentResult.innerHTML = "";
  let h1 = document.createElement("h1");
  h1.innerText = "Question 5: Sum of up to 5 Integers";
  contentHead.appendChild(h1);
  let question = document.createElement("p");
  question.innerText =
    "Enter up to 5 integers and click submit to see the sum of the numbers.";
  contentForm.appendChild(question);
  createForm(5, 5, labelArray, contentForm);
  let result = document.createElement("article");
  result.innerText = "The answer will appear here";
  contentResult.appendChild(result);
  changeBackground("sum1", "white", h1, result, question);
  e.preventDefault();
  form.addEventListener("submit", function (e) {
    let n1 = document.querySelector("#Number1").value;
    if (n1 === "") {
      n1 = 0;
    } else n1 = parseInt(n1);
    let n2 = document.querySelector("#Number2").value;
    if (n2 === "") {
      n2 = 0;
    } else n2 = parseInt(n2);
    let n3 = document.querySelector("#Number3").value;
    if (n3 === "") {
      n3 = 0;
    } else n3 = parseInt(n3);
    let n4 = document.querySelector("#Number4").value;
    if (n4 === "") {
      n4 = 0;
    } else n4 = parseInt(n4);
    let n5 = document.querySelector("#Number5").value;
    if (n5 === "") {
      n5 = 0;
    } else n5 = parseInt(n5);
    let answer = sum(n1, n2, n3, n4, n5);
    result.innerText = `The answer is: ${answer}`;
    e.preventDefault();
    console.log(answer);
  });
});

version6Button.addEventListener("click", function (e) {
  contentHead.innerHTML = "";
  contentForm.innerHTML = "";
  contentResult.innerHTML = "";
  let h1 = document.createElement("h1");
  h1.innerText = "Question 6: Check for Multiple of Three";
  contentHead.appendChild(h1);
  let question = document.createElement("p");
  question.innerText =
    "Enter a number and click submit to see if it is a multiple of 3.";
  contentForm.appendChild(question);
  createForm(6, 1, labelArray, contentForm);
  let result = document.createElement("article");
  result.innerText = "The answer will appear here";
  contentResult.appendChild(result);
  changeBackground("multiples", "", h1, result, question);
  e.preventDefault();
  form.addEventListener("submit", function (e) {
    let n = document.querySelector("#Number").value;
    if (n === "") {
      n = 0;
    } else n = parseInt(n);
    let answer = multiple3(n);
    result.innerText = `The answer is: ${answer}`;
    e.preventDefault();
    console.log(answer);
  });
});

version7Button.addEventListener("click", function (e) {
  contentHead.innerHTML = "";
  contentForm.innerHTML = "";
  contentResult.innerHTML = "";
  let h1 = document.createElement("h1");
  h1.innerText = "Question 7: Calculate HST";
  contentHead.appendChild(h1);
  let question = document.createElement("p");
  question.innerText = "Enter a number and click submit to see the HST @ 13%.";
  contentForm.appendChild(question);
  createForm(7, 1, labelArray, contentForm);
  let result = document.createElement("article");
  result.innerText = "The answer will appear here";
  contentResult.appendChild(result);
  changeBackground("taxes", "white", h1, result, question);
  e.preventDefault();
  form.addEventListener("submit", function (e) {
    let n = document.querySelector("#Number").value;
    if (n === "") {
      n = 0;
    } else n = parseFloat(n);
    let answer = addHST(n);
    result.innerText = `The answer is: ${answer.toFixed(2)}`;
    e.preventDefault();
    console.log(answer);
  });
});

version8Button.addEventListener("click", function (e) {
  contentHead.innerHTML = "";
  contentForm.innerHTML = "";
  contentResult.innerHTML = "";
  let h1 = document.createElement("h1");
  h1.innerText = "Question 8: Return in Reverse";
  contentHead.appendChild(h1);
  let question = document.createElement("p");
  question.innerText =
    "Enter up to 5 inputs and have them returned in reverse order";
  contentForm.appendChild(question);
  createForm(8, 5, labelArray, contentForm);
  let result = document.createElement("article");
  result.innerText = "The answer will appear here";
  contentResult.appendChild(result);
  changeBackground("backwards", "white", h1, result, question);
  e.preventDefault();
  form.addEventListener("submit", function (e) {
    let n1 = document.querySelector("#Number1").value;
    let n2 = document.querySelector("#Number2").value;
    let n3 = document.querySelector("#Number3").value;
    let n4 = document.querySelector("#Number4").value;
    let n5 = document.querySelector("#Number5").value;
    let answer = flip(n1, n2, n3, n4, n5);
    result.innerText = `The answer is: ${answer}`;
    e.preventDefault();
    console.log(answer);
  });
});

version9Button.addEventListener("click", function (e) {
  contentHead.innerHTML = "";
  contentForm.innerHTML = "";
  contentResult.innerHTML = "";
  let h1 = document.createElement("h1");
  h1.innerText = "Question 9: Sum Rounded to Integer";
  contentHead.appendChild(h1);
  let question = document.createElement("p");
  question.innerText =
    "Enter two numbers and receive the sum as the nearest lower integer.";
  contentForm.appendChild(question);
  createForm(9, 2, labelArray, contentForm);
  let result = document.createElement("article");
  result.innerText = "The answer will appear here";
  changeBackground("numberRound", "white", h1, result, question);
  contentResult.appendChild(result);
  e.preventDefault();
  form.addEventListener("submit", function (e) {
    let n1 = document.querySelector("#Number1").value;
    if (n1 === "") {
      n1 = 0;
    } else n1 = parseFloat(n1);
    let n2 = document.querySelector("#Number2").value;
    if (n2 === "") {
      n2 = 0;
    } else n2 = parseFloat(n2);
    let answer = intSum(n1, n2);
    result.innerText = `The answer is: ${answer}`;
    e.preventDefault();
    console.log(answer);
  });
});

version10Button.addEventListener("click", function (e) {
  contentHead.innerHTML = "";
  contentForm.innerHTML = "";
  contentResult.innerHTML = "";
  let h1 = document.createElement("h1");
  h1.innerText = "Question 10: Checking Between State";
  contentHead.appendChild(h1);
  let question = document.createElement("p");
  question.innerText =
    "Enter three numbers and an indicator if the check is inclusive and receive a boolean value of true or false to indicate if the first number is between the second two.";
  contentForm.appendChild(question);
  createForm(10, 4, labelArray, contentForm);
  let result = document.createElement("article");
  result.innerText = "The answer will appear here";
  contentResult.appendChild(result);
  e.preventDefault();
  changeBackground("between", "white", h1, result, question);
  form.addEventListener("submit", function (e) {
    let n1 = document.querySelector("#Number").value;
    if (n1 === "") {
      n1 = 0;
    } else n1 = parseFloat(n1);
    let n2 = document.querySelector("#Lower").value;
    if (n2 === "") {
      n2 = 0;
    } else n2 = parseFloat(n2);
    let n3 = document.querySelector("#Upper").value;
    if (n3 === "") {
      n3 = 0;
    } else n3 = parseFloat(n3);
    let inclusive = document.querySelector("#Inclusive").value;
    if (inclusive === "") {
      inclusive = false;
    } else if (inclusive === "true") {
      inclusive = true;
    } else if (inclusive === "false") {
      inclusive = false;
    } else {
      inclusive = false;
    }
    let answer = betweenCheck(n1, n2, n3, inclusive);
    result.innerText = `The answer is: ${answer}`;
    e.preventDefault();
    console.log(answer);
  });
});
