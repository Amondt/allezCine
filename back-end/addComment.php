<?php
    require './headersettings.php';
    require './pdo.php';

    $stmt = $pdo->prepare("INSERT INTO todo (todoTitle, todoDescription) VALUES (:todoTitle, :todoDescription)");
    $todoTitle = $_GET['todoTitle'];
    $todoDescription = $_GET['todoDescription'];
    $stmt->execute([
        'todoTitle' => $todoTitle,
        'todoDescription' => $todoDescription,
    ]);
    print json_encode($_GET);
?>