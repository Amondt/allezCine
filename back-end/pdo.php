<?php 
try
{
    // On se connecte à MySQL
    $pdo = new PDO('mysql:host=10.20.1.37;dbname=allez-cine;charset=utf8', 'allezCine', 'allezCine');
    }

catch(Exception $e)
{
    // En cas d'erreur, on affiche un message et on arrête tout
    die('Erreur : '.$e->getMessage());
}
?>