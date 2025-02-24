        // Variables globales pour la taille de l'image
        let imageWidth, imageHeight;
        let goldPieceArea = { x: 0.86, y: 0.50, width: 0.1, height: 0.1 }; // Zone relative de la pièce d'or (en pourcentage)

        // Initialiser la taille de l'image et recalculer les zones
        function updateImageSize() {
            const image = document.getElementById('gameImage');
            imageWidth = image.clientWidth;
            imageHeight = image.clientHeight;

            // Calculer les coordonnées de la pièce d'or en fonction de l'image
            goldPieceArea.x = 0.86 * imageWidth; // Position X de la pièce
            goldPieceArea.y = 0.50 * imageHeight; // Position Y de la pièce
            goldPieceArea.width = 0.1 * imageWidth; // Largeur de la zone
            goldPieceArea.height = 0.1 * imageHeight; // Hauteur de la zone

        }

        // Ajouter un événement de clic sur l'image
        document.getElementById('gameImage').addEventListener('click', function(event) {
            // Récupérer les coordonnées du clic avec les méthodes correctes
            const rect = event.target.getBoundingClientRect();
            const x = event.clientX - rect.left; // Coordonnée X du clic relative à l'image
            const y = event.clientY - rect.top;  // Coordonnée Y du clic relative à l'image

            // Vérifier si le clic est dans la zone de la pièce d'or
            if (x > goldPieceArea.x && x < goldPieceArea.x + goldPieceArea.width &&
                y > goldPieceArea.y && y < goldPieceArea.y + goldPieceArea.height) {
                // Afficher le message de félicitations
                showCustomPopup("Bravo, détectives !", "Vous avez récupéré cette pièce d’or. Pour la récupérer, piochez la carte","60");
            } else {
                // Si le clic n'est pas sur la pièce d'or
                showCustomPopupInfo("Ce n'est pas la bonne zone.", "Essayez encore mais vous avez une pénalité de 1 mn!");
                addPenalty();
            }
        });

        // Mettre à jour la taille de l'image à chaque fois que la fenêtre est redimensionnée
        window.addEventListener('resize', updateImageSize);

        // Initialiser la taille dès que le DOM est prêt
        window.onload = updateImageSize;