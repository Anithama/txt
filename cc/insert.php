<?php

include "connectdb.php"
$data=json_decode(file_get_contents("php://input")) ;
$firstname=$dbhandle->real_escape_string($data->firstname);
$lastname=$dbhandle->real_escape_string($data->lastname);
$email=$dbhandle->real_escape_string($data->email);
$password=$dbhandle->real_escape_string($data->password);
$query="INSERT INTO `participants` VALUES($firstname,'".$lastname."','".$email."','".$password."')";
$dbhandle->query($query);
?>