
<?php 
    require './headersettings.php';
    require './pdo.php';

    if (isset($_GET['filmId']) && isset($_GET['title']) && isset($_GET['comment'])){
        $req = $pdo -> prepare ('INSERT INTO `cine` (filmId, titleComment, descriptionComment, counterComment) VALUES (:filmId, :titleComment, :descriptionComment, :counterComment)');
        $req -> execute ([
            ':filmId' => htmlspecialchars($_GET['filmId']),
            ':titleComment' => htmlspecialchars($_GET['title']),
            ':descriptionComment' => htmlspecialchars($_GET['comment']),
            ':counterComment' => htmlspecialchars(0)
        ]);
    }
    print json_encode($_GET);
?>