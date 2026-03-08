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
      if (successMessage) {
        successMessage.textContent = "Form configuration error. Please check the field IDs.";
      }
      return;
    }

    const formData = new FormData();
    formData.append("full_name", nameField.value.trim());
    formData.append("email", emailField.value.trim());
    formData.append("phone", phoneField.value.trim());
    formData.append("property_address", addressField.value.trim());
    formData.append("timeline", timelineField.value);
    formData.append("notes", messageField.value.trim());
    formData.append("source", "GitHub Seller Landing Page");

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        body: formData
      });

      if (!response.ok) {
        throw new Error("Webhook request failed with status " + response.status);
      }

      if (successMessage) {
        successMessage.textContent =
          "Thank you. Your request has been received. John will contact you soon.";
      }

      form.reset();
    } catch (error) {
      console.error("Submission error:", error);

      if (successMessage) {
        successMessage.textContent =
          "There was a problem submitting your request. Please try again.";
      }
    }
  });
});
