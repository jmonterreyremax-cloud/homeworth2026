const form = document.getElementById("sellerForm");
const successMessage = document.getElementById("successMessage");
const webhookUrl = "https://hooks.zapier.com/hooks/catch/12452720/uxtawxu/";
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();

  successMessage.textContent =
    `Thank you, ${name}. Your request has been received. John will contact you soon.`;

  form.reset();
});
