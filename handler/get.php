<?php

require "../dbBroker.php";
require "../model/muzicar.php";

if(isset($_POST['id'])) {
    $myArray = Muzicar::getById($_POST['id'], $conn);
    echo json_encode($myArray);
}
