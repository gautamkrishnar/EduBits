<?php
if(isset($_POST['cid'])){$cid=$_POST['cid'];}
if(isset($_GET['cid'])){$cid=$_GET['cid'];}
require_once('dbinf.inc.php');
$query="SELECT * FROM `bits` WHERE `bitcat`=".$cid;
$result=$con->query($query);
$bits=array();
while($row=mysqli_fetch_assoc($result))
{
	if($row['biten']==0){continue;}
    $arr['bitid']=$row['bitid'];
    $arr['bittitle']=$row['bittitle'];
    $arr['bitdesc']=$row['bitdesc'];
    $arr['imagurl']=$row['imagurl'];
    array_push($bits,$arr);
}
echo json_encode($bits);
?>