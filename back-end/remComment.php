<?php 
    require './headersettings.php';
    require './pdo.php';

    if (isset($_GET['id'])){
        $req = $pdo -> prepare ('DELETE FROM `cine` WHERE id=:commentId');
        $req -> execute ([
            ':commentId' => htmlspecialchars($_GET['id']),
        ]);
    }
    print json_encode($_GET);
?>