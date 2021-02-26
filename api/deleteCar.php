<?php
    $username = $_POST['username'];
    $id = $_POST['id'];
    
    $con = mysqli_connect('localhost','root','123456','test');

    $sql = "DELETE FROM `collection` WHERE `username` = '$username' AND `collection_id` = '$id'";

    $res = mysqli_query($con,$sql);

    if(!$res){
        die('数据库链接错误' . mysqli_error($con));
    }

    echo json_encode(array(
        'code'=>$res,
        'msg'=>'删除成功'
    ));
?>