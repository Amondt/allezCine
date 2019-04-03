<?php 
    require './headersettings.php';
    require './pdo.php';

    $sql = "SELECT * FROM cine";
    $result = $pdo->query($sql);
    $rows = array();
     while($r = $result->fetch(PDO::FETCH_ASSOC)) {
         array_push($rows, $r);
    }
   print json_encode($rows);
   //resort le tableau en json
?>