<?php

header("Content-Type: application/json; charset=UTF-8");

// Takes raw data from the request
$json = file_get_contents('php://input');

// Converts it into a PHP object
$data = json_decode($json);

$url = "http://10.0.2.15:8000/trax/ws/xapi/statements?statementId=xxxxx-xxx-xxxxx";
//$url = "http://10.0.2.15:8000/trax/ws/xapi/about";


$options = array(
    'http' => array(
      'method'  => 'GET',
      'header'=>  "Content-Type: application/json\r\n" .
                  "Authorization: Basic " . $data->content . "\r\n" .
                  "X-Experience-API-Version: 1.0.0\r\n"

      )
  );

$context = stream_context_create($options);

$result = file_get_contents($url, false, $context);

// Afficher l'erreur code : var_dump($http_response_header);


if($http_response_header[0] == "HTTP/1.0 401 Unauthorized") {
  echo "Login ou mot de passe incorrect.";
} else if($http_response_header[0] == "HTTP/1.0 400 Bad Request") {
  echo "Vous êtes connectés";
} else if($http_response_header[0] == "HTTP/1.0 404 Not Found") {
  echo "Une erreur s'est produite. Vérifier que votre serveur TRAX-LRS fonctionne correctement.";
} else if($http_response_header == null) {
  echo "Une erreur s'est produite. Vérifier que votre serveur TRAX-LRS fonctionne correctement.";
} else {
  echo "Une erreur s'est produite. Réessayez ou revenez plus tard.";
}
?>