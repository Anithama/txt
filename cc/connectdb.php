<?php
deine("hostname","localhost");
deine("username","root");
deine("password","");
deine("database","newname");

$dbhandle=new mysqli(hostname,username,password,database) or die("unable to connect")
?>