/* Animation au clique du contact Partie Fournisseur */

document.addEventListener("DOMContentLoaded", function () {
  // Ajoutez un écouteur d'événements au clic sur le lien "Contactez"
  document
    .getElementById("contact-link")
    .addEventListener("click", displaySocialIcons);

  // Définissez la fonction pour afficher les icônes sociales
  function displaySocialIcons() {
    var socialIconsContainer = document.getElementById(
      "social-icons-container"
    );
    socialIconsContainer.style.display = "block";
    socialIconsContainer.classList.add("animate-icons"); // Ajoutez la classe pour l'animation
  }
});
