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

        function reqLister(){
                global $connexion;
                
                $requette = "SELECT * FROM membres";
                $stmt = $connexion->prepare($requette);
                $stmt->execute();
                $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

                $msg = array("status" => "OK","msg" => "Membres listé","data" => $result);
                echo json_encode($msg);
                unset($connexion); //Detruire la connexion
        }

        function reqEnreg(){
                global $connexion;
                try{
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
                }catch(PDOException $e){
                        $msg = array("status" => "KO","msg" => "Erreur de controleur enreg mambres");
                        echo json_encode($msg);
                    } finally {
                        unset($connexion); //Detruire la connexion
                    }
                		
        }

        function reqDesActiv() {
                global $connexion;
                try{
                        $id = $_POST['id'];
                
                        $requette = "UPDATE connexion SET statut = 'I' WHERE id=(?)";
                        $stmt = $connexion->prepare($requette);
                        $stmt->execute([$id]);
                        
                        $msg = array("status" => "OK","msg" => "Membre $id désactivé");
                        echo json_encode($msg);    
                }catch(PDOException $e){
                        $msg = array("status" => "KO","msg" => "Erreur de controleur désactivation du member");
                        echo json_encode($msg);
                    } finally {
                        unset($connexion); //Detruire la connexion
                    }
                
        }

        function reqReActiv() {
                global $connexion;
                try{
                       $id = $_POST['id'];
                
                        $requette = "UPDATE connexion SET statut = 'A' WHERE id=(?)";
                        $stmt = $connexion->prepare($requette);
                        $stmt->execute([$id]);
                        
                        $msg = array("status" => "OK","msg" => "Membre $id activé");
                        echo json_encode($msg); 
                }catch(PDOException $e){
                        $msg = array("status" => "KO","msg" => "Erreur de controleur d'activation du member");
                        echo json_encode($msg);
                    } finally {
                        unset($connexion); //Detruire la connexion
                    }
                
        }

        function getAccountInfo() {
                global $connexion;
                $email = $_POST['email'];

                try{
                  $requette = "SELECT * FROM membres WHERE courriel=(?)";
                        $stmt = $connexion->prepare($requette);
                        $stmt->execute([$email]);
                        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
                        
                       
                        echo json_encode(array($rs));   
                }catch(PDOException $e){
                        $msg = array("status" => "KO","msg" => "Erreur de controleur d'account du member");
                        echo json_encode($msg);
                    } finally {
                        unset($connexion); //Detruire la connexion
                    }
                
        }


        function getAdressFacturation() {
                global $connexion;
                $email = $_POST['email'];

                try{
                  $requette = "SELECT * FROM adressefacturation WHERE courriel=(?)";
                        $stmt = $connexion->prepare($requette);
                        $stmt->execute([$email]);
                        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
                        
                       
                        echo json_encode(array($rs));   
                }catch(PDOException $e){
                        $msg = array("status" => "KO","msg" => "Erreur de controleur d'account du member");
                        echo json_encode($msg);
                    } finally {
                        unset($connexion); //Detruire la connexion
                    }
                
        }

        function updateAdressFacturation() {
                global $connexion;
                $email = $_POST['email'];

                try{
                  $requette = "UPDATE adressefacturation SET adresse = (?), ville = (?), province = (?), cp = (?) WHERE courriel=(?)";
                        $stmt = $connexion->prepare($requette);
                        $stmt->execute([$_POST['adresse'], $_POST['ville'], $_POST['province'], $_POST['cp'], $email]);
                        
                       
                        $msg = array("status" => "success","msg" => "Adresse facturation mise à jour");
                        echo json_encode($msg);   
                }catch(PDOException $e){
                        $msg = array("status" => "KO","msg" => "Erreur de controleur d'account du members");
                        echo json_encode($msg);
                    } finally {
                        unset($connexion); //Detruire la connexion
                    }
                
        }

        function getAdressLivraison() {
                global $connexion;
                $email = $_POST['email'];

                try{
                  $requette = "SELECT * FROM adresselivraison WHERE courriel=(?)";
                        $stmt = $connexion->prepare($requette);
                        $stmt->execute([$email]);
                        $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
                        
                       
                        echo json_encode(array($rs));   
                }catch(PDOException $e){
                        $msg = array("status" => "KO","msg" => "Erreur de controleur d'account du member");
                        echo json_encode($msg);
                    } finally {
                        unset($connexion); //Detruire la connexion
                    }
                
        }

        function updateAdresselivraison() {
            global $connexion;
            $email = $_POST['email'];

            try{
              $requette = "UPDATE adresselivraison SET adresse = (?), ville = (?), province = (?), cp = (?) WHERE courriel=(?)";
                    $stmt = $connexion->prepare($requette);
                    $stmt->execute([$_POST['adresse'], $_POST['ville'], $_POST['province'], $_POST['cp'], $email]);
                    
                   
                    $msg = array("status" => "success","msg" => "Adresse facturation mise à jour");
                    echo json_encode($msg);   
            }catch(PDOException $e){
                    $msg = array("status" => "KO","msg" => "Erreur de controleur d'account du members");
                    echo json_encode($msg);
                } finally {
                    unset($connexion); //Detruire la connexion
                }
            
    }

        function updatePwd() {
            global $connexion;
            $email = $_POST['email'];

            try{
              $requette = "UPDATE connexion SET pass = (?) WHERE courriel=(?)";
                    $stmt = $connexion->prepare($requette);
                    $stmt->execute([$_POST['password'], $email]);
                    $rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
                    
                   
                    $msg = array("success");
                    echo json_encode($msg);
            }catch(PDOException $e){
                    $msg = array("status" => "KO","msg" => "Erreur de controleur d'account du member");
                    echo json_encode($msg);
                } finally {
                    unset($connexion); //Detruire la connexion
                }
        }

        $action = $_POST['action'];
        switch($action){
                case 'lister':
                        reqLister();
                break;
                case 'enreg':
                        reqEnreg();
                break;
                case 'desActiv':
                        reqDesActiv();
                break;
                case 'reActiv':
                        reqReActiv();
                break;
                case 'getAccount':
                        getAccountInfo();
                break;
                case 'getAdresssFacturation':
                        getAdressFacturation();
                break;
                case 'updateAdressFacturation':
                    updateAdressFacturation();
                    break;
                case 'updateAdressLivraison':
                    updateAdresselivraison();
                    break;
                case 'getAdresssLivraison':
                        getAdressLivraison();
                break;
                case 'updatePwd':
                        updatePwd();
                break;
                default:
                $msg = array("status" => "KO","msg" => "Erreur du controleur des membres");
                echo json_encode($msg);
                break;
        }
        
        
        exit();
        ?>