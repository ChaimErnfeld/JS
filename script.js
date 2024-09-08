function arrow(num, bool) {
  let lines = "";
  for (let line = 0; line < num; line++) {
    lines += "-";
  }
  if (bool === true) {
    lines += ">";
  } else {
    lines = "<" + lines;
  }
  return lines;
}
// console.log(arrow(5, false));

function num0() {
  let arr = [];
  let input = prompt("input a number");
  while (input != 0) {
    arr.push(input);
  }
  max = 0;
  const count = console.log(arr.length);
  console.log(
    arr.forEach((element) => {
      if (element > max) {
        max = element;
      }
    })
  );
  const sum = console.log(arr.reduce((acc, curr) => acc + curr, 0));
  const avarge = sum / count;
  const four = -1;
  if (count > 3) {
    four = arr[3];
  } else four = arr[0];
}

function triple(num) {
  for (let n = 0; n < num; n++) {
    console.log("*".repeat(n + 1));
  }
}

function invertedTriangle(num) {
  let result = "";
  for (let n = num; n > 0; n--) {
    result += "*".repeat(n) + "\n";
  }
  return result;
}
// console.log(invertedTriangle(3));

function multiplicationTable(num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      result += i * j;
      result += " ";
    }
    result += "\n";
  }
  return result;
}
// console.log(multiplicationTable(5));

function strings(str) {
  let i = 0;
  for (let j = 0; j < str.length; j++) {
    i += j;
  }
  if (i === 0) {
    return "";
  }
  result = true;
  for (const i in str) {
    if (i != "") {
      result = false;
    }
  }
}
console.log(strings(""));
