document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("sellerForm");
  const successMessage = document.getElementById("successMessage");
  const webhookUrl = "https://hooks.zapier.com/hooks/catch/12452720/uxtawxu/";

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("full_name", document.getElementById("name").value.trim());
    formData.append("email", document.getElementById("email").value.trim());
    formData.append("phone", document.getElementById("phone").value.trim());
    formData.append("property_address", document.getElementById("address").value.trim());
    formData.append("timeline", document.getElementById("timeline").value);
    formData.append("notes", document.getElementById("message").value.trim());
    formData.append("source", "GitHub Seller Landing Page");

    successMessage.textContent = "Submitting...";

    try {
      await fetch(webhookUrl, {
        method: "POST",
        mode: "no-cors",
        body: formData
      });

      successMessage.textContent =
        "Thank you. Your request has been submitted.";
      form.reset();
    } catch (error) {
      console.error("Submission error:", error);
      successMessage.textContent =
        "There was a problem submitting your request. Please try again.";
    }
  });
});
