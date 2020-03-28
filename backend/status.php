<?php

if (isset($_SESSION)) {
        header("HTTP/1.0 200 0K");
        $data = array(
            'login'  => $_SESSION['login'],
        );
        echo json_encode($data);
    } else {
        header("HTTP/1.0 440 Login Time-out");
        echo "La session a expiré.";
    }

?>