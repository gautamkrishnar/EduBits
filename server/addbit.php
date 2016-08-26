<?php
if(isset($_POST['bitcat'])){$bitcat=$_POST['bitcat'];}
if(isset($_POST['bitttl'])){$bitttl=$_POST['bitttl'];}
if(isset($_POST['bitdesc'])){$bitdesc=$_POST['bitdesc'];}
if(isset($_GET['bitcat'])){$bitcat=$_GET['bitcat'];}
if(isset($_GET['bitttl'])){$bitttl=$_GET['bitttl'];}
if(isset($_GET['bitdesc'])){$bitdesc=$_GET['bitdesc'];}
require_once('dbinf.inc.php');
$query="INSERT INTO `edubits`.`bits` (`bitcat`, `bittitle`, `bitdesc`) VALUES ('".$bitcat."', '".$bitttl."', '".$bitdesc."')";
if(isset($_GET['moreurl'])){$more=$_GET['moreurl'];
$query="INSERT INTO `edubits`.`bits` (`bitcat`, `bittitle`, `bitdesc`, `more`) VALUES ('".$bitcat."', '".$bitttl."', '".$bitdesc."', '".$more."')";
}
if(isset($_POST['moreurl'])){$more=$_POST['moreurl'];
$query="INSERT INTO `edubits`.`bits` (`bitcat`, `bittitle`, `bitdesc`, `more`) VALUES ('".$bitcat."', '".$bitttl."', '".$bitdesc."', '".$more."')";
}
$result=$con->query($query);
?>