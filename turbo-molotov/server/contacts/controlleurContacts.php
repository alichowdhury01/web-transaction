<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    header('Content-Type: application/json');
    require_once('../includes/connexionBDD.inc.php');

    function createContact(){
        $id = $_POST['id'];
        $nom = $_POST['nom'];
        $prenom = $_POST['prenom'];
        $telephone = $_POST['telephone'];

        try{
            global $connexion;
            $requette = "INSERT INTO contacts VALUES(?, ?, ?, ?)";
            $stmt = $connexion->prepare($requette);
            $stmt->execute([$id, $nom, $prenom, $telephone]);

            $msg = array("status" => "OK","msg" => "Contact $nom bien enregistre");
            echo json_encode($msg['msg']);
        }catch(PDOException $e){
            $msg = array("status" => "KO","msg" => "Erreur d'enregistrement du contact $nom");
            echo json_encode($msg);
        } finally {
            unset($connexion); //Detruire la connexion
        }

    }
    

    function deleteContact(){
        $telephone = $_POST['telephone'];
        try{
            global $connexion;
            $requette = "DELETE FROM contacts WHERE telephone = ?";
            $stmt = $connexion->prepare($requette);
            $stmt->execute([$telephone]);

            $msg = array("status" => "OK","msg" => "Contact $telephone bien supprimé");
            echo json_encode($msg['msg']);
        }catch(PDOException $e){
            $msg = array("status" => "KO","msg" => "Erreur de suppression du contact $telephone");
            echo json_encode($msg);
        } finally {
            unset($connexion); //Detruire la connexion
        }
    }

    function getContact(){
        $telephone = $_POST['telephone'];
        try{
            global $connexion;
            $requette = "SELECT * FROM contacts WHERE telephone = ?";
            $stmt = $connexion->prepare($requette);
            $stmt->execute([$telephone]);
            $result = $stmt->fetch(PDO::FETCH_ASSOC);

            $msg = array("status" => "OK","msg" => $result);
            echo json_encode($msg['msg']);
        }catch(PDOException $e){
            $msg = array("status" => "KO","msg" => "Erreur de recuperation du contact $telephone");
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

            echo json_encode(array($result));
        }catch(PDOException $e){
            $msg = array("status" => "KO","msg" => "Erreur de recuperation des articles");
            echo json_encode($msg);
        } finally {
            unset($connexion); //Detruire la connexion
        }
    }

    function getAllContact(){
        try{
            global $connexion;
            $requette = "SELECT * FROM contacts";
            $stmt = $connexion->prepare($requette);
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

            echo json_encode(array($result));
        }catch(PDOException $e){
            $msg = array("status" => "KO","msg" => "Erreur de recuperation des contacts");
            echo json_encode($msg);
        } finally {
            unset($connexion); //Detruire la connexion
        }
    }


    $action = $_POST['action'];
    switch($action){
        case 'createContact':
            createContact();
            break;
        case 'deleteContact':
            deleteContact();
            break;
    
        case 'getContact':
            getContact();
            break;
        case 'getAllContact':
            getAllContact();
            break;
        default:
            $msg = array("status" => "KO","msg" => "Erreur du controleur des articles");
            echo json_encode($msg);
            break;
    }
exit();
?>