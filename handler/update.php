<?php

require "../dbBroker.php";
require "../model/muzicar.php";
require "../model/instrument.php";

if (isset($_POST['id']) && isset($_POST['ime']) && isset($_POST['prezime']) && isset($_POST['instrument'])) {
    $instrumentID = Instrument::getByName($_POST['instrument'], $conn)[0]["id"];
    $status = Muzicar::update($_POST['id'], $_POST['ime'], $_POST['prezime'],$instrumentID, $conn);
    if ($status) {
        echo 'Success';
    } else {
        echo $status;
        echo 'Failed';
    }
}