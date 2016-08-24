<?php
$con = mysqli_connect("localhost","root","","edubits");
if(mysqli_connect_error())
{
	echo "Database connection error! Check your database connection 
settings. Error code:".mysqli_connect_errno();
	die();
}
?>
