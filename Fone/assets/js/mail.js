const reservationForm = document.getElementById("reservationForm");
const submitBtn = document.getElementById("submitBtn");

reservationForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche l'envoi par défaut du formulaire

  // Désactive le bouton d'envoi pour éviter les soumissions multiples
  submitBtn.setAttribute("disabled", "disabled");

  const templateParams = {
    from_name: document.getElementById("name_id").value,
    email: document.getElementById("email_id").value,
    phone: document.getElementById("phone_id").value,
    date: document.getElementById("date_id").value,
    jour: document.getElementById("jour_id").value,
    voiture: document.getElementById("voiture_id").value,
    message: document.getElementById("message_id").value,
  };

  emailjs
    .send("service_brnguie", "template_pnpxfcf", templateParams)
    .then(function (response) {
      // Si l'e-mail est envoyé avec succès
      console.log("Email envoyé avec succès !", response);

      // Rediriger l'utilisateur vers une nouvelle page
      window.location.href = "index.html";
      // Afficher un message de succès à l'utilisateur
      document.getElementById("successMessage").innerText =
        "Votre demande de réservation a été envoyée avec succès !";
      document.getElementById("successMessage").style.display = "block";

      // Effacer les champs du formulaire après l'envoi réussi
      reservationForm.reset();
    })
    .catch(function (error) {
      // Si une erreur se produit lors de l'envoi de l'e-mail
      console.log(
        "Erreur lors de l'envoi de votre demande de réservation :",
        error
      );

      // Afficher un message d'erreur à l'utilisateur
      document.getElementById("errorMessage").innerText =
        "Une erreur s'est produite lors de l'envoi de votre demande de réservation. Veuillez réessayer plus tard.";
      document.getElementById("errorMessage").style.display = "block";

      // Vous pouvez également afficher des détails spécifiques sur l'erreur dans la console pour un débogage ultérieur
      console.error(
        "Erreur lors de l'envoi de votre demande de réservation :",
        error
      );
    })
    .finally(function () {
      // Réactiver le bouton d'envoi une fois que le processus est terminé
      submitBtn.removeAttribute("disabled");
    });
});
