const Price = {
  VND: 23000,
  USD: 1,
  EUR: 0.85,
};
const amount = document.getElementById("amount");
const From = document.getElementById("From");
const To = document.getElementById("To");
const result = document.getElementById("result");

function convert() {
  let fromto = From.value + "_" + To.value;
  switch (fromto) {
    case "VND_VND":
      result.innerHTML = "=" + amount.value + " " + "VNĐ";
      break;
    case "VND_USD":
      result.innerHTML = "=" + amount.value / 23000 + " " + "USD";
      break;
    case "VND_EUR":
      result.innerHTML = "=" + amount.value / 27285 + " " + "EUR";
      break;
    case "USD_VND":
      result.innerHTML = "=" + amount.value * 23000 + " " + "VND";
      break;
    case "USD_USD":
      result.innerHTML = "=" + amount.value + " " + "USD";
      break;
    case "USD_EUR":
      result.innerHTML = "=" + amount.value / 0.85 + " " + "EUR";
      break;
    case "EUR_VND":
      result.innerHTML = "=" + amount.value * 27200 + " " + "VND";
      break;
    case "EUR_USD":
      result.innerHTML = "=" + amount.value * 0.85 + " " + "USD";
      break;
    case "EUR_EUR":
      result.innerHTML = "=" + amount.value + " " + "VND";
      break;
  }
}

// function convert() {
//   result.innerHTML = (
//     (amount.value * Price[To.value]) /
//     Price[From.value]
//   ).toFixed(2);
// }
