let arrProduct = [];
function drawProduct() {
  document.getElementById("table-body").innerHTML = "";
  for (let i = 0; i < arrProduct.length; i++) {
    document.getElementById(
      "table-body"
    ).innerHTML += `<tr><td>${arrProduct[i]}</td><td>Edit</td><td>Delete</td></tr>`;
  }
}
drawProduct();
function addProduct() {
  let newProduct = document.getElementById("input-new-product").value;
  arrProduct.push(newProduct);
  drawProduct();
}