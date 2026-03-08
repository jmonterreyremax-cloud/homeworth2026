document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("sellerForm");
  const successMessage = document.getElementById("successMessage");

  const webhookUrl = "https://hooks.zapier.com/hooks/catch/12452720/uxtawxu/";

  if (!form) {
    console.error('Form with id "sellerForm" was not found.');
    return;
  }

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const phoneField = document.getElementById("phone");
    const addressField = document.getElementById("address");
    const timelineField = document.getElementById("timeline");
    const messageField = document.getElementById("message");

    if (!nameField || !emailField || !phoneField || !addressField || !timelineField || !messageField) {
      console.error("One or more form fields were not found. Check your HTML ids.");
      return;
    }

    const payload = {
      full_name: nameField.value.trim(),
      email: emailField.value.trim(),
      phone: phoneField.value.trim(),
      property_address: addressField.value.trim(),
      timeline: timelineField.value,
      notes: messageField.value.trim(),
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

      if (successMessage) {
        successMessage.textContent =
          "Thank you. Your request has been received. John will contact you soon.";
      }

      form.reset();
    } catch (error) {
      if (successMessage) {
        successMessage.textContent =
          "There was a problem submitting your request. Please try again.";
      }
      console.error("Submission error:", error);
    }
  });
});
