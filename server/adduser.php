<?php
if(isset($_POST['usn'])){$usn=$_POST['usn'];}
if(isset($_GET['usn'])){$usn=$_GET['usn'];}
if(isset($_POST['pss'])){$pss=$_POST['pss'];}
if(isset($_GET['pss'])){$pss=$_GET['pss'];}
if(isset($_POST['email'])){$email=$_POST['email'];}
if(isset($_GET['email'])){$email=$_GET['email'];}
if(isset($_POST['name'])){$name=$_POST['name'];}
if(isset($_GET['name'])){$name=$_GET['name'];}
require_once('dbinf.inc.php');
$query="SELECT * FROM `edubits`.`users` where `uname`='".$usn."'";
$result=$con->query($query);
if(mysqli_num_rows($result)>0)
{
	echo json_encode("user_found");
}
else
{
$query="INSERT INTO `edubits`.`users` (`name`, `uname`, `password`, `email`) VALUES ('".$name."', '".$usn."', '".$pss."', '".$email."')";
$result=$con->query($query);
}
?>