<?php
if(isset($_POST['bitid'])){$bitid=$_POST['bitid'];}
if(isset($_POST['bitcat'])){$bitcat=$_POST['bitcat'];}
if(isset($_POST['bitttl'])){$bitttl=$_POST['bitttl'];}
if(isset($_POST['bitdesc'])){$bitdesc=$_POST['bitdesc'];}
if(isset($_GET['bitid'])){$bitid=$_GET['bitid'];}
if(isset($_GET['bitcat'])){$bitcat=$_GET['bitcat'];}
if(isset($_GET['bitttl'])){$bitttl=$_GET['bitttl'];}
if(isset($_GET['bitdesc'])){$bitdesc=$_GET['bitdesc'];}
require_once('dbinf.inc.php');
$query="UPDATE `edubits`.`bits` SET `bitcat` =".$bitcat.", `bittitle` = '".$bitttl."', `bitdesc` = '".$bitdesc."' WHERE `bits`.`bitid` = ".$bitid;
$result=$con->query($query);
?>