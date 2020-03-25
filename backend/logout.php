<?php

header("Content-Type: application/json; charset=UTF-8");
header("HTTP/1.0 200 OK");

session_abort();

echo "Vous êtes déconnecté.";

?>