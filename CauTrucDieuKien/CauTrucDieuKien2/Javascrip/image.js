let totalImg = document.getElementsByTagName("img");

// let position1 = document.getElementById("position-1");
let contain = document.getElementById("contain");
contain.addEventListener("click", insertImages);

let saveImg = [
  [
    "panda_swap_part1x1.jpg",
    "monkey_part1x1.jpg",
    "funny-cat1_part1x1.jpg",
  ],
  [
    "panda_swap_part2x1.jpg",
    "monkey_part2x1.jpg",
    "funny-cat1_part2x1.jpg",
  ],
  [
    "panda_swap_part3x1.jpg",
    "monkey_part3x1.jpg",
    "funny-cat1_part3x1.jpg",
  ],
  [
    "panda_swap_part4x1.jpg",
    "monkey_part4x1.jpg",
    "funny-cat1_part4x1.jpg",
  ],
  [
    "panda_swap_part5x1.jpg",
    "monkey_part5x1.jpg",
    "funny-cat1_part5x1.jpg",
  ],
];
let arrCheck = [];

function init() {
  for (let i = 0; i < totalImg.length; i++) {
    let random = Math.floor(Math.random() * 3);
    // console.log(Math.random() * 3);
    arrCheck.push(random);
    totalImg[i].src = `image/${saveImg[i][random]}`;
  }
}
//insert images
function insertImages(e) {
  let random = Math.floor(Math.random() * 3);
  let temp1 = e.target.id.charAt(e.target.id.length - 1);
  e.target.src = `image/${saveImg[temp1 - 1][random]}`;
  arrCheck[temp1 - 1] = random;
  console.log(arrCheck);
  // console.log(checkPuzzle());
  if (checkPuzzle() == true) {
    for (let i = 0; i < totalImg.length; i++) {
      totalImg[i].classList.add("red");
    }
  } else {
    for (let i = 0; i < totalImg.length; i++) {
      totalImg[i].classList.remove("red");
    }
  }
}
//puzzle
function checkPuzzle() {
  let check = false;
  if (arrCheck.length < 5) {
    return false;
  }
  for (let i = 0; i < arrCheck.length - 1; i++) {
    if (arrCheck[i] == arrCheck[i + 1]) {
      check = true;
    } else {
      check = false;
      return check;
    }
  }
  return check;
}
init();