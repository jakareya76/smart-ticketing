const seatCardList = document.querySelectorAll(".seat_card");
const couponCode = document.getElementById("input_coupon");

let ticketAvailable = 40;
let seatCount = 0;
let ticketPrice = 550;

document.getElementById("available-seats").innerText = ticketAvailable;
document.getElementById("seat-selected-count").innerText = seatCount;

function createTicketCartElement(value, seatId) {
  const ticketCartContainer = document.getElementById("ticket-cart");

  const element = document.createElement("div");
  element.classList.add("flex", "items-center", "justify-between", "py-4");

  element.innerHTML = `
        <h4 class="font-sans text-[#03071288] font-medium" id="${seatId}">
           ${value}
        </h4>
        <h4 class="ml-16 font-sans text-[#03071288] font-medium">
            Economy
        </h4>
        <h4 class="font-sans text-[#03071288] font-medium">
            550tk
        </h4>
    `;

  ticketCartContainer.appendChild(element);
}

function setInnerTextValue(id, value) {
  document.getElementById(id).innerText = value;
}

function addBackgroundById(elementId) {
  const element = document.getElementById(elementId);

  element.classList.add("bg-[#1DD100]", "text-[#fff]");
  element.classList.remove("bg-[#0307121a]", "text-[#03071273]");
}

for (const seatCard of seatCardList) {
  seatCard.addEventListener("click", function (e) {
    const seat = e.target.innerText;
    const seatId = e.target.id;

    if (seatCount < 4) {
      seatCount++;
      ticketAvailable--;

      createTicketCartElement(seat, seatId);

      setInnerTextValue("grand-total", ticketPrice);
      setInnerTextValue("seat-selected-count", seatCount);
      setInnerTextValue("available-seats", ticketAvailable);
      setInnerTextValue("total-price", ticketPrice);

      ticketPrice = ticketPrice + 550;

      addBackgroundById(seatId);
    } else {
      alert("You Can Only Select 4 seat at a time!!");
    }
  });
}

function applyCoupon() {
  const coupon = couponCode.value;

  if (coupon === "NEW15" || coupon === "Couple20") {
    const totalPriceText = document.getElementById("total-price");
    const grandTotalText = document.getElementById("grand-total");
    const couponContainer = document.getElementById("coupon_input_container");
    const totalPrice = parseInt(totalPriceText.innerText);

    if (totalPrice <= 0) {
      return alert("Please Select A Seat");
    }

    const discount = (totalPrice / 100) * (coupon === "NEW15" ? 15 : 20);
    const grandPrice = totalPrice - discount;

    grandTotalText.innerText = grandPrice;
    couponContainer.classList.add("hidden");
  } else {
    alert("Please Provide A Valid Coupon Code");
  }
}

const passengerName = document.getElementById("name");
const number = document.getElementById("number");
const email = document.getElementById("email");
const submitBtn = document.getElementById("submit-btn");

function enableSubmitBtn() {
  submitBtn.classList.remove("cursor-not-allowed");
  submitBtn.removeAttribute("disabled");
}

function disableSubmitBtn() {
  submitBtn.classList.add("cursor-not-allowed");
  submitBtn.setAttribute("disabled", "true");
}

function isFormValid() {
  return (
    passengerName.value !== "" &&
    number.value !== "" &&
    number.value.length >= 10 &&
    email.value !== ""
  );
}

function updateSubmitBtnState() {
  if (isFormValid()) {
    enableSubmitBtn();
  } else {
    disableSubmitBtn();
  }
}

// Initial state check
updateSubmitBtnState();

// Event listeners for input events
passengerName.addEventListener("input", updateSubmitBtnState);
number.addEventListener("input", updateSubmitBtnState);
email.addEventListener("input", updateSubmitBtnState);
