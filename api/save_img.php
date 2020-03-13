<?php
    header("Content-Type: application/json; charset=UTF-8");

    $upload_folder = "img/";

    if(isset($_FILES) && !empty($_FILES)) {
        $file = $_FILES['img'];
        $extensions = array('.jpg', '.JPG', '.jpeg', '.JPEG', '.png', '.PNG');
        
        $file_name = $file['name'];
        $file_extension = strrchr($file_name, '.');
        $file_tmp_name = $file['tmp_name'];
        $file_name_encode = $file_name;
        
        $count = 0;
        $upload_folder_content = scandir($upload_folder);
        
        while (in_array($file_name_encode . $file_extension, $upload_folder_content)) {
            $count = $count + 1;
            $file_name_encode = $file_name . "(" . $count . ")";
        }

        $file_dest = $upload_folder . $file_name_encode . $file_extension;

        if(in_array($file_extension, $extensions)) {
            if(move_uploaded_file($file_tmp_name, $file_dest)) {
                $array = array("path" => "img/" . $file_name_encode);
                echo json_encode($array);
            } else {
                echo "Une erreur est survenue lors de l'envoi du fichier";
            }
        } else {
            echo "Seuls les images sont autorisées.";
        }
    }

?>