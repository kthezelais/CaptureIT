<?php
    header("Content-Type: application/json; charset=UTF-8");

    $upload_folder = "img/";

    error_log("\$_FILES is set : " . (!empty($_FILES)));

    if(isset($_FILES) && !empty($_FILES)) {
        $file = $_FILES['img'];
        $extensions = array('.jpg', '.JPG', '.jpeg', '.JPEG', '.png', '.PNG');
        
        $file_name = explode(".", $file['name'])[0];
        $file_extension = "." . explode(".", $file['name'])[1];
        $file_tmp_name = $file['tmp_name'];
        $file_name_full = $file_name . $file_extension;

        error_log("file_name_full : " . $file_name_full);
        
        $count = 0;
        $upload_folder_content = scandir($upload_folder);
                
        while (in_array($file_name_full, $upload_folder_content)) {
            $count = $count + 1;
            $file_name_full = $file_name . "(" . $count . ")" . $file_extension;
        }

        $file_dest = $upload_folder . $file_name_full;

        if(in_array($file_extension, $extensions)) {
            if(move_uploaded_file($file_tmp_name, $file_dest)) {
                $array = array("path" => "img/" . $file_name_full);
                echo json_encode($array);
            } else {
                echo "Une erreur est survenue lors de l'envoi du fichier";
            }
        } else {
            echo "Seuls les images sont autorisées.";
        }
    }

?>