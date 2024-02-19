document
  .getElementById("contact-link")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    var icons = document.querySelectorAll(".social a span"); // Sélectionne toutes les icônes
    icons.forEach(function (icon) {
      icon.classList.add("blue"); // Ajoute la classe 'blue' pour changer la couleur
    });
    setTimeout(function () {
      icons.forEach(function (icon) {
        icon.classList.remove("blue"); // Supprime la classe 'blue' après 2 secondes
      });
    }, 2000);
  });
