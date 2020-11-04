let a = document.getElementById("a");
let b = document.getElementById("b");
let result = document.getElementById("result");

function cong() {
  result.innerHTML = "Kết quả:" + (Number(a.value) + Number(b.value));
}
function tru() {
  result.innerHTML = "Kết quả:" + (Number(a.value) - Number(b.value));
}
function nhan() {
  result.innerHTML = "Kết quả:" + Number(a.value) * Number(b.value);
}
function chia() {
  result.innerHTML = "Kết quả:" + Number(a.value) / Number(b.value);
}
