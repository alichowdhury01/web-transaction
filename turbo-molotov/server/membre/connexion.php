<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    header('Content-Type: application/json');
    require_once('../includes/connexionBDD.inc.php');
    $email = $_POST['email'];
    $password = $_POST['password'];

    function validerMDP(){
        global $connexion, $email, $password;
        $requette = "SELECT pass, 'role' FROM connexion WHERE courriel = (?)";
        $stmt = $connexion->prepare($requette);
        $stmt->execute([$email]);
        while ($row = $stmt->fetch()) {
            if($row['pass'] === $password){
                if($row['role'] === "M"){
                    session_start();
                    echo encode_json("msg" => "Vous etes connecté!");
                    header("Location: http://localhost:3000/membre");
                }else if($row['role'] === "A"){
                    echo json_encode("msg" => "Vous etes connecté!");
                    session_start();
                    header("Location: http://localhost:3000/admin");
                }
                
            }else{
                echo encode_json("msg" => "Mot de passe non-valide!");
            }
        }
        exit();
    }

    function validerEmail(){
        global $connexion, $email, $password;
        $requette = "SELECT courriel FROM connexion";
        $stmt = $connexion->prepare($requette);
        $stmt->execute();
        while ($row = $stmt->fetch()) {
            if($row['courriel'] === $email){
                validerMDP();
            }
            echo json_encode("msg" => "email non-valide réessayer de nouveaux \n");
        }
        unset($connexion); //Detruire la connexion		
    }
    validerEmail();
    exit();
?>