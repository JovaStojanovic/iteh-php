<?php

class Instrument{

    public $instrumentID;
    public $nazivInstrumenta;


    public function __construct($instrumentID=null, $nazivInstrumenta=null)
    {
        $this->instrumentID = $instrumentID;
        $this->nazivInstrumenta = $nazivInstrumenta;
    }

    public static function getById($id, mysqli $conn)
    {
        $q = "SELECT * FROM instrument WHERE id=$id";
        $myArray = array();
        if ($result = $conn->query($q)) {

            while ($row = $result->fetch_array(1)) {
                $myArray[] = $row;
            }
        }
        return $myArray;
    }

    public static function getByName($instrument, mysqli $conn)
    {
        $q = "SELECT * FROM instrument WHERE instrument='$instrument'";
        $myArray = array();
        if ($result = $conn->query($q)) {

            while ($row = $result->fetch_array(1)) {
                $myArray[] = $row;
            }
        }
        return $myArray;
    }

    public static function getAll(mysqli $conn)
    {
        $q = "SELECT * FROM instrument";
        return $conn->query($q);
    }

    public static function add($instrument, mysqli $conn)
    {

        $q = "INSERT INTO instrument(instrument) VALUES('$instrument')";
        return $conn->query($q);
    }
}
?>