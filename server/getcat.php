<?php
require_once('dbinf.inc.php');
$query="SELECT * FROM `cats` WHERE 1";
$result=$con->query($query);
$cats=array();
while($row=mysqli_fetch_assoc($result))
{
    //echo $row['sid']." : ".$row['sname']."<br/><br/>";
    $category['id']=$row['sid'];
    $category['name']=$row['sname'];
    array_push($cats,$category);
}
echo json_encode($cats);
?>