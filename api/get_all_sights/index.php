<?php
    $link = mysqli_connect('localhost', 'garfilbj_1', 'Sabina83', 'garfilbj_1');
    $result = mysqli_query($link, 'SELECT * FROM Sights WHERE TRUE');
    $arr = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $arr[] = $row;
    }
    echo json_encode($arr, JSON_UNESCAPED_UNICODE | JSON_NUMERIC_CHECK);
?>
