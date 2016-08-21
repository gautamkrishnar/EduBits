<?php
if(isset($_POST['bitid'])){$bitid=$_POST['bitid'];}
if(isset($_GET['bitid'])){$bitid=$_GET['bitid'];}
require_once('dbinf.inc.php');
$query="SELECT * FROM `bits` WHERE `bitid`=".$bitid;
$result=$con->query($query);
$bits=array();
while($row=mysqli_fetch_assoc($result))
{
	if($row['biten']==0){continue;}
	$row2=mysqli_fetch_assoc($con->query('SELECT * FROM `cats` WHERE `sid`='.$row['bitcat']));
	$arr['catid']=$row['bitcat'];
	$arr['bitcat']=$row2['sname'];
    $arr['bitid']=$row['bitid'];
    $arr['bittitle']=$row['bittitle'];
    $arr['bitdesc']=$row['bitdesc'];
    $arr['imagurl']=$row['imagurl'];
	$arr{'more'}=$row['more'];
    array_push($bits,$arr);
}
echo json_encode($bits);

?>