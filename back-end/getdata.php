<?php 
    require './headersettings.php';
    require './pdo.php';

    if (isset($_GET['filmId'])){
        $req = $pdo -> prepare ('SELECT * FROM `cine` WHERE filmId=:filmId');
        $req -> execute ([':filmId' => htmlspecialchars($_GET['filmId'])]);
    }

    $rows = array();
     while($r = $req->fetch(PDO::FETCH_ASSOC)) {
         array_push($rows, $r);
    }
   print json_encode($rows);
   //resort le tableau en json
?>