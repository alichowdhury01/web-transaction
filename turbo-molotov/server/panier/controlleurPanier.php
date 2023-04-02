<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:3000');

require_once('../includes/connexionBDD.inc.php');

// Create
function createPanier() {
        $idarticle = $_POST['idarticle'];
        $idmembre = $_POST['idmembre'];
        $qty = $_POST['qty'];
    try{
        global $connexion;
        $datecreation = date('Y-m-d');
        $requette = "INSERT INTO panier VALUES(?, ?, ?, ?)";
        $stmt = $connexion->prepare($requette);
        $stmt->execute([$idmembre, $idarticle, $qty, $datecreation]);
        $msg = array("status" => "OK","msg" => "Article ID $idarticle bien enregistre");
        echo json_encode($msg['msg']);
    }
    catch(PDOException $e){
        $msg = array("status" => "KO","msg" => "Erreur d'enregistrement de l'article ID $idarticle");
        echo json_encode($msg);
    } finally {
        unset($connexion); //Detruire la connexion
    }
}

// Read
function getPanier(){
    
}

$action = $_POST['action'];
switch($action){
    case 'createPanier':
        createPanier();
        break;
    case 'getPanier':
        getPanier();
        break;
    case 'updatePanier':
        updatePanier();
        break;
    case 'deletePanier':
        deletePanier();
        break;
    default:
        $msg = array("status" => "KO","msg" => "Erreur du controleur deu Panier");
        echo json_encode($msg);
        break;
}
exit();
?>
