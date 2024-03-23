const qOne = document.querySelector(".q-one");

const qTwo = document.querySelector(".q-two");

const qThree = document.querySelector(".q-three");

const qFour = document.querySelector(".q-four");

const ansOne = document.querySelector(".answer-one");

const ansTwo = document.querySelector(".answer-two");

const ansThree = document.querySelector(".answer-three");

const ansFour = document.querySelector(".answer-four");

const plusIcon = document.querySelector(".plus");

const minusIcon = document.querySelector(".minus");

const plusIconTwo = document.querySelector(".plus2");

const minusIconTwo = document.querySelector(".minus2");

const plusIconThree = document.querySelector(".plus3");

const minusIconThree = document.querySelector(".minus3");

const plusIconFour = document.querySelector(".plus4");

const minusIconFour = document.querySelector(".minus4");

ansOne.style.display = "block";
ansTwo.style.display = "none";
ansThree.style.display = "none";
ansFour.style.display = "none";

minusIcon.style.display = "block ";
minusIconTwo.style.display = "none";
minusIconThree.style.display = "none";
minusIconFour.style.display = "none";

qOne.addEventListener("click", function () {
  if (ansOne.style.display == "none") {
    ansOne.style.display = "block";
    minusIcon.style.display = "block";
    plusIcon.style.display = "none";
  } else if (ansOne.style.display == "block") {
    ansOne.style.display = "none";
    minusIcon.style.display = "none";
    plusIcon.style.display = "block";
  }
});

qTwo.addEventListener("click", function () {
  if (ansTwo.style.display == "none") {
    ansTwo.style.display = "block";
    minusIconTwo.style.display = "block";
    plusIconTwo.style.display = "none";
  } else if (ansTwo.style.display == "block") {
    ansTwo.style.display = "none";
    minusIconTwo.style.display = "none";
    plusIconTwo.style.display = "block";
  }
});

qThree.addEventListener("click", function () {
  if (ansThree.style.display == "none") {
    ansThree.style.display = "block";
    minusIconThree.style.display = "block";
    plusIconThree.style.display = "none";
  } else if (ansThree.style.display == "block") {
    ansThree.style.display = "none";
    minusIconThree.style.display = "none";
    plusIconThree.style.display = "block";
  }
});

qFour.addEventListener("click", function () {
  if (ansFour.style.display == "none") {
    ansFour.style.display = "block";
    minusIconFour.style.display = "block";
    plusIconFour.style.display = "none";
  } else if (ansFour.style.display == "block") {
    ansFour.style.display = "none";
    minusIconFour.style.display = "none";
    plusIconFour.style.display = "block";
  }
});
