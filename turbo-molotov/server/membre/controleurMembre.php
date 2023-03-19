<?php
        header('Access-Control-Allow-Origin: http://localhost:3000');
        header('Content-Type: application/json');
        require_once('../includes/connexionBDD.inc.php');
        
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

        function reqEnreg(){
                global $connexion;
                $firstName = $_POST['firstName'];
                $lastName = $_POST['lastName'];
                $gender = $_POST['gender'];
                $dateNaissance = $_POST['dateNaissance'];
                $email = $_POST['email'];
                $password = $_POST['password'];
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
                
                $msg = array("status" => "OK","msg" => "Membre $email bien enregistre");
                echo json_encode($msg);
                unset($connexion); //Detruire la connexion		
        }

        function reqDesActiv() {
                global $connexion;
                $id = $_POST['id'];
                
                $requette = "UPDATE connexion SET statut = 'I' WHERE id=(?)";
                $stmt = $connexion->prepare($requette);
                $stmt->execute([$id]);
                
                $msg = array("status" => "OK","msg" => "Membre $id désactivé");
                echo json_encode($msg);
                unset($connexion); //Detruire la connexion
        }

        function reqReActiv() {
                global $connexion;
                $id = $_POST['id'];
                
                $requette = "UPDATE connexion SET statut = 'A' WHERE id=(?)";
                $stmt = $connexion->prepare($requette);
                $stmt->execute([$id]);
                
                $msg = array("status" => "OK","msg" => "Membre $id activé");
                echo json_encode($msg);
                unset($connexion); //Detruire la connexion
        }

        $action = $_POST['action'];
        switch($action){
                case 'enreg':
                        reqEnreg();
                break;
                case 'desActiv':
                        reqDesActiv();
                break;
                case 'reActiv':
                        reqReActiv();
                break;
                default:
                $msg = array("status" => "KO","msg" => "Erreur du controleur des membres");
                echo json_encode($msg);
                break;
        }
        
        
        exit();
        ?>