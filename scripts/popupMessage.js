/*//////////////////////////////////////////// Popups Messages /////////////////////////////////////////////////////*/
function showCustomPopup(title, message, number) {
    // Fonction pour afficher le popup
    const popup = document.getElementById("custom-popup");
    const popupTitle = popup.querySelector("h1");
    const popupMessage = popup.querySelector("p");
    const popupNumber = document.getElementById("popup-number");
    const cardNumberDiv = document.getElementById("cardNumber");

    // Mettre à jour le titre et le message
    popupTitle.textContent = title;
    popupMessage.textContent = message;

    // Mettre à jour le numéro s'il est fourni
    if (number) {
        popupNumber.textContent = number;
        cardNumberDiv.style.display = 'block'; // Assurez-vous que l'élément est visible
    } else {
        cardNumberDiv.style.display = 'none'; // Masquer l'élément si aucun numéro n'est fourni
    }

    // Afficher le popup
    popup.classList.remove("hidden");

    // Ajouter un gestionnaire d'événement au bouton OK
    const okButton = document.getElementById("popup-ok-btn");
    okButton.addEventListener("click", () => {
        popup.classList.add("hidden");
        window.location.href = "index.html"; // Redirection vers la page index.html
    });
}

function showCustomPopupInfo(title, message, number, imageUrl = null) {
    // Fonction pour afficher le popup
    const popup = document.getElementById("custom-popup");
    const popupTitle = popup.querySelector("h1");
    const popupMessage = popup.querySelector("p");
    const popupNumber = document.getElementById("popup-number");
    const cardNumberDiv = document.getElementById("cardNumber");

    // Mettre à jour le titre et le message
    popupTitle.textContent = title;
    
    // Créer le contenu avec le message et l'image
    if (imageUrl) {
        popupMessage.innerHTML = `${message}<br><img src="${imageUrl}" alt="Image de victoire" style="width: 100%; margin-top: 10px;">`;
    } else {
        popupMessage.innerHTML = message;
    }

    // Mettre à jour le numéro s'il est fourni
    if (number) {
        popupNumber.textContent = number;
        cardNumberDiv.style.display = 'block';
    } else {
        cardNumberDiv.style.display = 'none';
    }

    // Afficher le popup
    popup.classList.remove("hidden");

    // Ajouter un gestionnaire d'événement au bouton OK
    const okButton = document.getElementById("popup-ok-btn");
    okButton.addEventListener("click", () => {
        popup.classList.add("hidden");
    });
}
/*

//appel popup sans retour accueil 
showCustomPopupInfo("Information", "Votre opération a été effectuée avec succès.");

//appel popup avec retour accueil 
showCustomPopup("Erreur", "Une erreur s'est produite.");

// avec nombre
showCustomPopup("Erreur", "Une erreur s'est produite.", 404); 
ou showCustomPopup("Erreur", "Une erreur s'est produite.", "404");
 */