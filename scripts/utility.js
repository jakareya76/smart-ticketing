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

function AddBackgroundById(elementId) {
  const element = document.getElementById(elementId);

  element.classList.add("bg-[#1DD100]", "text-[#fff]");
  element.classList.remove("bg-[#0307121a]", "text-[#03071273]");
}
