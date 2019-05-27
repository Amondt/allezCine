<?php 
try
{
    // On se connecte à MySQL
    $pdo = new PDO('mysql:host=localhost;dbname=allez-cine;charset=utf8', 'allezCine', 'allezCine');
    }

catch(Exception $e)
{
    // En cas d'erreur, on affiche un message et on arrête tout
    die('Erreur : '.$e->getMessage());
}
?>