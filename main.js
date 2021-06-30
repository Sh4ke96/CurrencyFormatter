const btn = document.getElementById("btn");
const p = document.querySelectorAll(".output-p");

let dollars = document.getElementById("output1");
let yen = document.getElementById("output2");
let euro = document.getElementById("output3");
let pound = document.getElementById("output4");
let rupees = document.getElementById("output5");

let formatter1 = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

let formatter2 = new Intl.NumberFormat("ja-JP", {
  style: "currency",
  currency: "JPY",
});

let formatter3 = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "EUR",
});

let formatter4 = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
});

let formatter5 = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
});

function currencyShow() {
  const amount = document.getElementById("amount").value;
  dollars.innerHTML = `<span>US Dollars:</span> ${formatter1.format(amount)}`;
  yen.innerHTML = `<span>Japanese Yen:</span> ${formatter2.format(amount)}`;
  euro.innerHTML = `<span>Euro:</span> ${formatter3.format(amount)}`;
  pound.innerHTML = `<span>British Pound:</span> ${formatter4.format(amount)}`;
  rupees.innerHTML = `<span>Indian Rupees:</span> ${formatter5.format(amount)}`;
  p.forEach((p) => (p.style.display = "block"));
}

btn.addEventListener("click", () => {
  currencyShow();
});

amount.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    currencyShow();
  }
});

window.onload = function () {
  document.getElementById("amount").value = "";
};
