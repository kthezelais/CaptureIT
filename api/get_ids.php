<?php

    header("Content-Type: application/json; charset=UTF-8");

    $upload_folder = "img/";

    echo json_encode(scandir($upload_folder));

?>