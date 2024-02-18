const seatCardList = document.querySelectorAll(".seat_card");

function createTicketCartElement(value) {
  const ticketCartContainer = document.getElementById("ticket-cart");

  const element = document.createElement("div");
  element.classList.add("flex", "items-center", "justify-between", "py-4");

  element.innerHTML = `
        <h4 class="font-sans text-[#03071288] font-medium" id="seat">
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

for (const seatCard of seatCardList) {
  seatCard.addEventListener("click", function (e) {
    const seat = e.target.innerText;

    createTicketCartElement(seat);
  });
}
