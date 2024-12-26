let one = document.querySelectorAll(".nums");
let display = document.querySelector(".calculation-showing");
let finalresult = document.querySelector(".equal");
let accountclear = document.querySelector(".accountclear");
let delnum = document.querySelector(".num-del");

let add = document.querySelector(".add");
let multi = document.querySelector(".multi");
let sub = document.querySelector(".sub");
let divide = document.querySelector(".divide");

let leftpart = "";
let rightpart = "";
let doneoperation = "";
let totalcalculation = 0;
let start = true;
let delstart = true;

delnum.addEventListener("click", function () {
  if (start) {
    leftpart = leftpart.slice(0, -1);
    display.innerHTML = leftpart || "0";
  } else {
    rightpart = rightpart.slice(0, -1);
    display.innerHTML = rightpart || "0";
  }
});

add.addEventListener("click", function (operation) {
  doneoperation = operation.target.innerHTML;
  display.innerHTML = "";
  start = false;
});
multi.addEventListener("click", function (operation) {
  doneoperation = operation.target.innerHTML;
  display.innerHTML = "";
  start = false;
});
sub.addEventListener("click", function (operation) {
  doneoperation = operation.target.innerHTML;
  display.innerHTML = "";
  start = false;
});
divide.addEventListener("click", function (operation) {
  doneoperation = operation.target.innerHTML;
  display.innerHTML = "";
  start = false;
});
finalresult.addEventListener("click", function (event) {
  console.log(leftpart);
  console.log(rightpart);
  console.log(doneoperation);
  let leftpartnum = parseInt(leftpart);
  let rightpartnum = parseInt(rightpart);

  if (doneoperation === "+") {
    display.innerHTML = leftpartnum + rightpartnum;
    leftpart = display.innerHTML;
    rightpart = "";
  } else if (doneoperation === "-") {
    display.innerHTML = leftpartnum - rightpartnum;
    leftpart = display.innerHTML;
    rightpart = "";
  } else if (doneoperation === "*") {
    display.innerHTML = leftpartnum * rightpartnum;
    leftpart = display.innerHTML;
    rightpart = "";
  } else if (doneoperation === "/") {
    display.innerHTML = leftpartnum / rightpartnum;
    leftpart = display.innerHTML;
    rightpart = "";
  }
});
accountclear.addEventListener("click", function (event) {
  leftpart = "";
  rightpart = "";
  doneoperation = "";
  totalcalculation = 0;
  start = true;
  display.innerHTML = "0";
});

one.forEach(function (key) {
  key.addEventListener("click", function (event) {
    let apart = event.target.innerHTML;
    if (start) {
      leftcombine(apart);
    } else {
      rightcombine(apart);
    }
  });
});

function leftcombine(num) {
  leftpart = leftpart.concat(num);
  display.innerHTML = leftpart;
}
function rightcombine(num) {
  rightpart = rightpart.concat(num);
  display.innerHTML = rightpart;
}

