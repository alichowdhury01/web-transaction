<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    header('Content-Type: application/json');
    require_once('../includes/connexionBDD.inc.php');
    $email = $_POST['email'];
    $password = $_POST['password'];

    function validerMDP(){
        global $connexion, $email, $password;
        $requette = "SELECT pass, `role` FROM connexion WHERE courriel = (?)";
        $stmt = $connexion->prepare($requette);
        $stmt->execute([$email]);
        while ($row = $stmt->fetch()) {
            if($row['pass'] === $password){
                if($row['role'] === "M"){
                    session_start();
                    $reponse = array(
                        "status" => "OK",
                        "reponse" => "Vous etes connecté en temps que membre!",
                        "session" => session_id(),
                        "page" => "membre",
                        'email' => $email
                    );
                    echo json_encode($reponse);
                    
                }else if($row['role'] === "A"){
                    session_start();
                    $reponse = array(
                        "status" => "OK",
                        "reponse" => "Vous etes connecté en temps qu'administrateur'!",
                        "session" => session_id(),
                        "page" => "admin"
                    );
                    echo json_encode($reponse);
                    
                }else{
                    $reponse = array("Erreur de mot de passe!");
                    echo json_encode($reponse);
                }
            }
        }
        exit();
    }

    function validerEmail(){
        global $connexion, $email, $password;
        $requette = "SELECT courriel FROM connexion";
        $stmt = $connexion->prepare($requette);
        $stmt->execute();
        $trouve = false;
        while ($row = $stmt->fetch()) {
            if($row['courriel'] !== $email ){
                
            }
            else{
                $trouve = true;
                break;
            }
        }
        if($trouve === false){
            echo json_encode("email non-valide réessayer de nouveaux ");
        }else{
            validerMDP();
            echo json_encode("email valide");
        }
        unset($connexion); //Detruire la connexion		
    }
    
    validerEmail();
    exit();
?>