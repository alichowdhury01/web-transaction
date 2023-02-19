<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    header('Content-Type: application/json');
    require_once('../includes/connexionBDD.inc.php');
    
    function createArticle(){
        $nom = $_POST['nom'];
        $categorie = $_POST['categorie'];
        $prix = $_POST['prix'];
        $description = $_POST['description'];
        $quantiteInventaire = $_POST['quantiteInventaire'];
        $image = $_POST['image'];

        $repArticle = "../../client/src/assets/cardPicture/";
        $nouveauNom = "avatar.png";
        try{
            if($_FILES['article']['tmp_name'] != ""){
                $tmpFile = $_FILES['article']['tmp_name'];
                $nomOriginal = $_FILES['avatars']['name'];
                $extension = strrchr($nomOriginal,'.');
                $nouveauNom = sha1($nom.time()).$extension;
                @move_uploaded_file($tmpFile, $repArticle.$nouveauNom);
            }  
            global $connexion, $categorie, $nom, $description, $prix, $quantiteInventaire, $image;
            $requette = "INSERT INTO articles VALUES(0, ?, ?, ?, ?, ?, ?)";
            $stmt = $connexion->prepare($requette);
            $stmt->execute([$categorie, $nom, $description, $prix, $quantiteInventaire, $image]);

            $msg = array("status" => "OK","msg" => "Article $nom bien enregistre");
                
            echo json_encode($msg);
        }catch(PDOException $e){
            $msg = array("status" => "KO","msg" => "Erreur d'enregistrement de l'article $nom");
            echo json_encode($msg);
        } finally {
            unset($connexion); //Detruire la connexion
        }

                		
    }
        
        // header("Location : localhost:3000");
exit();
?>