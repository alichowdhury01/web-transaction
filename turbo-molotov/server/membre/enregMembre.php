<?php
        header('Access-Control-Allow-Origin: http://localhost:3000');
        header('Content-Type: application/json');
        require_once('../includes/connexionBDD.inc.php');
        $firstName = $_POST['firstName'];
        $lastName = $_POST['lastName'];
        $gender = $_POST['gender'];
        $dateNaissance = $_POST['dateNaissance'];
        $email = $_POST['email'];
        $password = $_POST['password'];

        // $repAvatar = "../avatars/";
        // $nouveauNom = "avatar.png";

                // Si un fichier a été uploadé
        // if($_FILES['avatars']['tmp_name'] != ""){
        //     $tmpFic = $_FILES['avatars']['tmp_name'];
        //     $nomOriginal = $_FILES['avatars']['name'];
        //     $extension = strrchr($nomOriginal,'.');
        //     // $nouveauNom = sha1($email.time()).$extension;
        // @move_uploaded_file($tmpFic, /*$repAvatar.$nouveauNom*/);
        // }

        function executerRequette(){
                global $connexion, $firstName, $lastName, $gender, $dateNaissance, $email, $password;/* , $nouveauNom*/ 
                $requette = "INSERT INTO membres VALUES(0, ?, ?, ?, ?, ?)";
                $stmt = $connexion->prepare($requette);
                $stmt->execute([$firstName, $lastName, $email, $gender, $dateNaissance]);

                $requette = "SELECT id FROM membres WHERE courriel = (?)";
                $stmt = $connexion->prepare($requette);
                $stmt->execute([$email]);
                $rs = $stmt->fetch();
                $id = $rs["id"];

                $requette = "INSERT INTO connexion  VALUES(?, ?, ?, 'M', 'A')";
                $stmt = $connexion->prepare($requette);
                $stmt->execute([$id,$email, $password]);        
                echo json_encode("Membre $email bien enregistre");
                unset($connexion); //Detruire la connexion		
        }
        executerRequette();
        header("Location: http://localhost:3000");
        exit();
        ?>