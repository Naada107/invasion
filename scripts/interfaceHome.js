        /*///////////////////////////////  popup 1 (BIDULE)  /////////////////////////////////////*/

    // Code à 2 chiffres
    const codeInputBidule = document.getElementById("display-input-bidule");
    const digitButtonsBidule = document.querySelectorAll(".digit-bidule");
    const clearButtonBidule = document.getElementById("clear-button-bidule");
    const submitButtonBidule = document.getElementById("submit-button-bidule");

    let enteredCodeBidule = "";

    // Fonction pour ajouter les numéros dans l'affichage
    digitButtonsBidule.forEach(btn => {
    btn.addEventListener("click", () => {
    if (enteredCodeBidule.length < 2) {
    enteredCodeBidule += btn.dataset.number;
    codeInputBidule.value = enteredCodeBidule;
    }
    });
    });

    // Fonction pour effacer l'affichage
    clearButtonBidule.addEventListener("click", () => {
    enteredCodeBidule = "";
    codeInputBidule.value = "";
    });

    // Fonction pour valider le code
    submitButtonBidule.addEventListener("click", () => {

    if (enteredCodeBidule.length === 2) {

        if (enteredCodeBidule === "81") { // Par exemple, code correct = "12"
            window.location.href = "memory.html";
        }
        else if (enteredCodeBidule === "02") {
            window.location.href = "piece.html";
        }
        else if (enteredCodeBidule === "58") {
            window.location.href = "elimination-1.html";
        }
        else if (enteredCodeBidule === "78") {
            window.location.href = "elimination-2.html";
        }
        else if (enteredCodeBidule === "20") {
            window.location.href = "hiro.html";
        }
        else {
            showCustomPopupInfo("Code incorrect", "Essayez encore.");
        }

    } else {
            showCustomPopupInfo("Code incorrect", "Veuillez entrer un code à 2 chiffres.");
    }

    // Réinitialisation du champ après validation
    enteredCodeBidule = "";
    codeInputBidule.value = "";

    });


    /*///////////////////////////////  popup 2 (CODE)  /////////////////////////////////////*/

    // Sélectionnez le champ input
    const codeInputCode = document.getElementById('display-input-code');
    const digitButtonsCode = document.querySelectorAll('.digit-code');
    const clearButtonCode = document.getElementById('clear-button-code');
    const submitButtonCode = document.getElementById('submit-button-code');

    let enteredCodeCode = "";

    // Quand on clique sur un chiffre
    digitButtonsCode.forEach(button => {
    button.addEventListener('click', function() {
        const num = this.getAttribute('data-num');
        if (num !== null) {
            if (codeInputCode.value.length < 4) {
                codeInputCode.value += num;
            }
        }
    });
    });

    // Quand on clique sur le bouton "Effacer"
    clearButtonCode.addEventListener('click', function() {
    codeInputCode.value = '';
    });

    // Quand on clique sur le bouton "Valider"
    submitButtonCode.addEventListener('click', function() {
    const enteredCodeCode = codeInputCode.value;
    if (enteredCodeCode.length === 4) {
        if (enteredCodeCode === "3561") {            
            showCustomPopupInfo("Bien joué !", "Parlez avec Abigaëlle pour qu’elle vous aide. Piochez la carte", "22");

        } else if (enteredCodeCode === "3416") {
            showCustomPopupInfo("Félicitations, détectives !", 
                "Vous avez trouvé le coupable et l’avez mis derrière les barreaux. Grâce à vous, l’écosystème est sauvé et Romain peut retrouver son arbre en paix.", 
                null, 'image/Ecureuil_De_Fin.png');
            
            // Lancer les confettis
            confetti({
                particleCount: 600,
                spread: 120,
                origin: { y: 0.2 },
                zIndex: 9999,
            });
            
            // Jouer le son de réussite
            const successSound = new Audio('./victory.m4a'); // Assurez-vous d'avoir ce fichier
            successSound.play();
        
        } else {
            showCustomPopupInfo("Code incorrect !"," Réessayez.");
        }
        // Réinitialiser le champ après validation
        codeInputCode.value = '';
    } else {
        showCustomPopupInfo("Code incorrect", "Veuillez entrer un code à 4 chiffres.");        
    }
    });

    /*///////////////////////////////  popup 3 (INDICE) /////////////////////////////////////*/

    // Code à 2 chiffres
    const codeInputIndice = document.getElementById("display-input-indice");
    const digitButtonsIndice = document.querySelectorAll(".digit-indice");
    const clearButtonIndice = document.getElementById("clear-button-indice");
    const submitButtonIndice = document.getElementById("submit-button-indice");

    let enteredCodeIndice = "";

    // Fonction pour ajouter les numéros dans l'affichage
    digitButtonsIndice.forEach(btn => {
    btn.addEventListener("click", () => {
    if (enteredCodeIndice.length < 2) {
    enteredCodeIndice += btn.dataset.number;
    codeInputIndice.value = enteredCodeIndice;
    }
    });
    });

    // Fonction pour effacer l'affichage
    clearButtonIndice.addEventListener("click", () => {
    enteredCodeIndice = "";
    codeInputIndice.value = "";
    });

    // Fonction pour valider le code
    submitButtonIndice.addEventListener("click", () => {

    if (enteredCodeIndice.length === 2) {

        if (enteredCodeIndice === "00") {
            showCustomPopupInfo("Indice", "Rendez-vous à l’endroit dessiné sur la carte.");            
        }
        else if (enteredCodeIndice === "01") {
            showCustomPopupInfoInfo("Indice", "Regardez attentivement la carte, trouvez un numéro caché et piochez la carte correspondante.");  
        }else if (enteredCodeIndice === "58") {
            showCustomPopupInfo("Indice", "Lequel de ces animaux ne possède pas de poils et peut donc être éliminé ?");  
        }else if (enteredCodeIndice === "62") {
            showCustomPopupInfo("Indice", "Rendez-vous à l’endroit dessiné sur la carte, cherchez un numéro caché et piochez la carte associée.");  
        }else if (enteredCodeIndice === "14") {
            showCustomPopupInfo("Indice", "Piochez la carte", "02");
        }else if (enteredCodeIndice === "01") {
            showCustomPopupInfo("Indice", "Regardez attentivement la carte, trouvez un numéro caché et piochez la carte correspondante.");  
        }else if (enteredCodeIndice === "02") {
            showCustomPopupInfo("Indice", "Trouvez la pièce cachée dans l’image.");  
        }else if (enteredCodeIndice === "17") {
            showCustomPopupInfo("Indice", "Trouvez une carte à additionner à la vôtre.");  
        }else if (enteredCodeIndice === "33") {
            showCustomPopupInfo("Indice", "Trouvez une carte à additionner à la vôtre.");  
        }else if (enteredCodeIndice === "60") {
            showCustomPopupInfo("Indice", "Trouvez une carte à additionner à la vôtre.");  
        }else if (enteredCodeIndice === "81") {
            showCustomPopupInfo("Indice", "Réalisez ce memory pour découvrir un indice.");  
        }else if (enteredCodeIndice === "78") {
            showCustomPopupInfo("Indice", "Regardez les cartes des suspects pour connaître ce qu’ils mangent.");  
        }else if (enteredCodeIndice === "52") {
            showCustomPopupInfo("Indice", "Rendez-vous à l’endroit dessiné sur la carte.");  
        }else if (enteredCodeIndice === "11") {
            showCustomPopupInfo("Indice", "Sortez du labyrinthe en évitant les essaims de guêpes.");  
        }else if (enteredCodeIndice === "22") {
            showCustomPopupInfo("Indice", "Trouvez une carte à additionner à la vôtre.");  
        }else if (enteredCodeIndice === "39") {
            showCustomPopupInfo("Indice", "Reliez les chiffres en ligne droite par ordre croissant pour faire apparaître un nombre. Piochez la carte correspondante.");  
        }else if (enteredCodeIndice === "4") {
            showCustomPopupInfo("Indice", "Scannez la carte pour découvrir l’empreinte du coupable.");  
        }else if (enteredCodeIndice === "101") {
            showCustomPopupInfo("Indice", "Retrouvez le numéro du coupable sur sa carte et associez-le au numéro que vous venez d’obtenir.");  
        } else {
            showCustomPopupInfo("Code incorrect !", "Essayez encore.");  

        }

    } else {
            showCustomPopupInfo("Code incorrect", "Veuillez entrer un code à 2 chiffres.");
    }

    // Réinitialisation du champ après validation
    enteredCodeIndice = "";
    codeInputIndice.value = "";
    });

    /*///////////////////////////////  popup 4 (PENALITE) /////////////////////////////////////*/

    document.getElementById('penalty').addEventListener('click', function() {
        document.getElementById('buzzer-sound').play();
        showCustomPopupInfo("Domage", "Une pénalité de 1 minute a été ajoutée au timer.");
        addPenalty();
    });
  
    
    /*///////////////////////////////  Popups avec clavier  /////////////////////////////////////*/
    
  
    function togglePopup(num) {
        const popup = document.getElementById(`popup${num}`);
        const isActive = popup.classList.contains('active');
        const appHeader = document.querySelector('header.appHeader');
    
        if (!isActive) {
            // Activer le popup sélectionné
            popup.classList.add('active');
            appHeader.classList.add('popup-active');
    
            // Désactiver les autres popups
            document.querySelectorAll('.popup').forEach(p => {
                if (p !== popup) {
                    p.classList.add('inactive');
                    p.classList.remove('active');
                }
            });
        } else {
            // Désactiver le popup sélectionné et réinitialiser tous les popups
            popup.classList.remove('active');
            appHeader.classList.remove('popup-active');
    
            document.querySelectorAll('.popup').forEach(p => {
                p.classList.remove('inactive');
            });
        }
    }
    
    function openIcon(num) {
        togglePopup(num);
    }

