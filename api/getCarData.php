<?php
$userName = $_POST['userName'];

$con=mysqli_connect('localhost','root','123456','test');

$sql = "SELECT * FROM `toutiao` WHERE `id` in (SELECT `collection_id` FROM `collection` WHERE `username` = '$userName')";

$res = mysqli_query($con,$sql);

if(!$res){
    die('数据库链接错误' . mysqli_error($con));
}

$arr = array();

$row = mysqli_fetch_assoc($res);
while($row){
    array_push($arr,$row);
    $row = mysqli_fetch_assoc($res);
}

echo json_encode(array(
    "list"=>$arr,
    "code"=>1,
    "message"=>"获取列表数据成功"
));

?>