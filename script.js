const form = document.getElementById("sellerForm");
const successMessage = document.getElementById("successMessage");

const webhookUrl = "https://hooks.zapier.com/hooks/catch/12452720/uxtawxu/";

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const payload = {
    full_name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    phone: document.getElementById("phone").value.trim(),
    property_address: document.getElementById("address").value.trim(),
    timeline: document.getElementById("timeline").value,
    notes: document.getElementById("message").value.trim(),
    source: "GitHub Seller Landing Page"
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error("Webhook request failed");
    }

    successMessage.textContent =
      "Thank you. Your request has been received. John will contact you soon.";
    form.reset();
  } catch (error) {
    successMessage.textContent =
      "There was a problem submitting your request. Please try again.";
    console.error(error);
  }
});
