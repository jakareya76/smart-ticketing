const seatCardList = document.querySelectorAll(".seat_card");
const couponCode = document.getElementById("input_coupon");

let ticketAvailable = 40;
let seatCount = 0;
let ticketPrice = 550;

document.getElementById("available-seats").innerText = ticketAvailable;
document.getElementById("seat-selected-count").innerText = seatCount;

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

      AddBackgroundById(seatId);
    } else {
      alert("You Can Only Select 4 seat at a time!!");
    }
  });
}

function applyCoupon() {
  const coupon = couponCode.value;

  if (coupon === "NEW15") {
    console.log(coupon);
  }
}
