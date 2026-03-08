const form = document.getElementById("sellerForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();

  successMessage.textContent =
    `Thank you, ${name}. Your request has been received. John will contact you soon.`;

  form.reset();
});
