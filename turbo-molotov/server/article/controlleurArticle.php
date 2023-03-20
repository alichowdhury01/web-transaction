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
        $repArticle = "../database/images/";
        $nouveauNom = "default.png";

        try{
            if($_FILES['image']['tmp_name'] != ""){
                $tmpFile = $_FILES['image']['tmp_name'];
                $nomOriginal = $_FILES['image']['name'];
                $extension = strrchr($nomOriginal,'.');
                $nouveauNom = sha1($nom.time()).$extension;
                @move_uploaded_file($tmpFile, $repArticle.$nouveauNom);
            }  
            global $connexion;
            $requette = "INSERT INTO articles VALUES(0, ?, ?, ?, ?, ?, ?)";
            $stmt = $connexion->prepare($requette);
            $stmt->execute([$nom, $categorie, $description, $prix, $quantiteInventaire, $nouveauNom]);

            $msg = array("status" => "OK","msg" => "Article $nom bien enregistre");
            echo json_encode($msg['msg']);
        }catch(PDOException $e){
            $msg = array("status" => "KO","msg" => "Erreur d'enregistrement de l'article $nom");
            echo json_encode($msg);
        } finally {
            unset($connexion); //Detruire la connexion
        }      		
    }

    function updateArticle(){
        $id = $_POST['id'];
        $nom = $_POST['nom'];
        $categorie = $_POST['categorie'];
        $prix = $_POST['prix'];
        $description = $_POST['descriptions'];
        $quantiteInventaire = $_POST['quantiteInventaire'];
        $repArticle = "../../client/src/assets/cardPicture/";
        $nouveauNom = "default.png";

        try{
            if($_FILES['image']['tmp_name'] != ""){
                $tmpFile = $_FILES['image']['tmp_name'];
                $nomOriginal = $_FILES['image']['name'];
                $extension = strrchr($nomOriginal,'.');
                $nouveauNom = sha1($nom.time()).$extension;
                @move_uploaded_file($tmpFile, $repArticle.$nouveauNom);
            }  
            global $connexion;
            $requette = "UPDATE articles SET nom = ?, categorie = ?, descriptions = ?, prix = ?, quantiteInventaire = ?, images = ? WHERE id = ?";
            $stmt = $connexion->prepare($requette);
            $stmt->execute([ $nom, $categorie, $description, $prix, $quantiteInventaire, $nouveauNom, $id]);

            $msg = array("status" => "OK","msg" => "Article $nom bien enregistre");
            echo json_encode($msg['msg']);
        }catch(PDOException $e){
            $msg = array("status" => "KO","msg" => "Erreur d'enregistrement de l'article $nom");
            echo json_encode($msg);
            echo $e;
        } finally {
            unset($connexion); //Detruire la connexion
        }
    }

    function deleteArticle(){
        $id = $_POST['id'];
        try{
            global $connexion;
            $requette = "DELETE FROM articles WHERE id = ?";
            $stmt = $connexion->prepare($requette);
            $stmt->execute([$id]);

            $msg = array("status" => "OK","msg" => "Article $id bien supprimé");
            echo json_encode($msg['msg']);
        }catch(PDOException $e){
            $msg = array("status" => "KO","msg" => "Erreur de suppression de l'article $id");
            echo json_encode($msg);
        } finally {
            unset($connexion); //Detruire la connexion
        }
    }

    function getArticle(){
        $id = $_POST['id'];
        try{
            global $connexion;
            $requette = "SELECT * FROM articles WHERE id = ?";
            $stmt = $connexion->prepare($requette);
            $stmt->execute([$id]);
            $result = $stmt->fetch(PDO::FETCH_ASSOC);

            $msg = array("status" => "OK","msg" => $result);
            echo json_encode($msg['msg']);
        }catch(PDOException $e){
            $msg = array("status" => "KO","msg" => "Erreur de recuperation de l'article $id");
            echo json_encode($msg);
        } finally {
            unset($connexion); //Detruire la connexion
        }
    }

    function getAllArticle(){
        try{
            global $connexion;
            $requette = "SELECT * FROM articles";
            $stmt = $connexion->prepare($requette);
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

            $msg = array("status" => "OK","data" => $result);
            echo json_encode($msg);
        }catch(PDOException $e){
            $msg = array("status" => "KO","msg" => "Erreur de recuperation des articles");
            echo json_encode($msg);
        } finally {
            unset($connexion); //Detruire la connexion
        }
    }

    function getAllArticleByCategorie(){
        $categorie = $_POST['categorie'];
        try{
            global $connexion;
            $requette = "SELECT * FROM articles WHERE categorie = ?";
            $stmt = $connexion->prepare($requette);
            $stmt->execute([$categorie]);
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

            $msg = array("status" => "OK","msg" => $result);
            echo json_encode($msg['msg']);
        }catch(PDOException $e){
            $msg = array("status" => "KO","msg" => "Erreur de recuperation des articles");
            echo json_encode($msg);
        } finally {
            unset($connexion); //Detruire la connexion
        }
    }

    $action = $_POST['action'];
    switch($action){
        case 'createArticle':
            createArticle();
            break;
        case 'updateArticle':
            updateArticle();
            break;
        case 'deleteArticle':
            deleteArticle();
            break;
        case 'getArticle':
            getArticle();
            break;
        case 'getAllArticle':
            getAllArticle();
            break;
        case 'getAllArticleByCategorie':
            getAllArticleByCategorie();
            break;
        default:
            $msg = array("status" => "KO","msg" => "Erreur du controleur des articles");
            echo json_encode($msg);
            break;
    }
exit();
?>