<?php

class Muzicar{
    public $muzicarID;
    public $ime;
    public $prezime;
    public $instrumentID;

    public function __construct($muzicarID=null, $ime=null, $prezime=null, $instrumentID=null)
    {
        $this->muzicarID = $muzicarID;
        $this->ime = $ime;
        $this->prezime = $prezime;
        $this->instrumentID = $instrumentID;
    }


    public static function getAll(mysqli $conn)
    {
        $q = "SELECT * FROM muzicar";
        return $conn->query($q);
    }

    public static function add($ime, $prezime, $instrumentID, mysqli $conn)
    {

        $q = "INSERT INTO muzicar(ime, prezime, instrument_id) VALUES('$ime', '$prezime', $instrumentID)";
        return $conn->query($q);
    }

    public static function deleteById($id, mysqli $conn)
    {
        $q = "DELETE FROM muzicar WHERE id=$id";
        return $conn->query($q);
    }

    public static function update($id, $ime, $prezime, $instrumentID, mysqli $conn)
    {
        $q = "UPDATE muzicar set ime='$ime', prezime='$prezime', instrument_id=$instrumentID where id=$id";
        return $conn->query($q);
    }

    public static function getById($id, mysqli $conn)
    {
        $q = "SELECT * FROM muzicar WHERE id=$id";
        $myArray = array();
        if ($result = $conn->query($q)) {

            while ($row = $result->fetch_array(1)) {
                $myArray[] = $row;
            }
        }
        return $myArray;
    }

}




?>