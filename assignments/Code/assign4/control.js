//if

let x = 20;
for (let i = 0; i < x; i++) {
  if (x - i == 10) {
    console.log("We are midway.");
  }
}

//if else

let y = 20;
for (let i = 0; i < y; i++) {
  if (y - i == 10) {
    console.log("We are midway.");
  } else {
    console.log("We are on our way.");
  }
}

//if elseif

let z = 20;
for (let i = 0; i < y; i++) {
  if (z - i == 10) {
    console.log("We are midway.");
  } else if (i > 15) {
    console.log("We are few steps away");
  } else {
    console.log("We are on our way.");
  }
}

//switch

let day = 2;
switch (day) {
  case 2:
    console.log("It's Monday");
    break;
  case 4:
    console.log("It's Wednesday");
    break;
  case 6:
    console.log("It's Friday");
    break;
  default:
    console.log("It's another day");
    break;
}

//while

let p = 2;
let text = "";
while (p < 20) {
  text += "The number is " + p + "\n";
  console.log(text);
  p++;
}

// do while

let res = "";
let q = 2;
do {
  res += "The number is " + q + "\n";
  console.log(res);
  q++;
} while (q < 10);
