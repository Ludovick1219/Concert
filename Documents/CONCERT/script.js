
const ticketTypes = [
  { name: "VVIP", price: 13000, perks: "Complimentary drinks + Security + Free Hookah + Spacious Lounge + 1-on-1 Artist Meetup" },
  { name: "VIP", price: 5000, perks: "Fast entry + VIP area access" },
  { name: "REGULAR", price: 3000, perks: "General admission" },
  { name: "EARLY BIRD", price: 2500, perks: "Limited offer – while stocks last!", limited: true },
  { name: "GATE PASS", price: 4000, perks: "Day-of entry only" }
];


document.querySelectorAll(".tickets").forEach(container => {
  ticketTypes.forEach(ticket => {
    const ticketHTML = `
      <div class="ticket-option ${ticket.limited ? 'early-bird' : ''}">
        <h3>${ticket.name}</h3>
        <div class="price">KES ${ticket.price.toLocaleString()}</div>
        <div class="perks">${ticket.perks}</div>
        <button class="buy-btn" onclick="buyTicket('${ticket.name}', ${ticket.price})">
          ${ticket.limited ? 'GRAB EARLY BIRD' : 'BUY NOW'}
        </button>
      </div>
    `;
    container.innerHTML += ticketHTML;
  });
});


function buyTicket(type, price) {
  const name = prompt("Enter your Full Name:");
  if (!name) return;

  const phone = prompt("Enter your Phone Number (e.g. 0712345678):");
  if (!phone || phone.length < 9) {
    alert("Please enter a valid phone number");
    return;
  }

  alert(`
    Thank you ${name}! 
    You selected: ${type} Ticket – KES ${price.toLocaleString()}
    An M-Pesa STK Push will be sent to ${phone} shortly.
    See you at the show! 
  `);

  
  console.log("Ticket purchased:", { name, phone, type, price });
}