<?php
    $collection_id = $_POST['collection_id'];
    $userName = $_POST['userName'];

    $con = mysqli_connect('localhost','root','123456','test');

    // 先去判断 这个用户对应的这个goods_id是否存在，如果存在直接修改这条数据的goods_num
    // 如果不存在  才把这个条数据添加到购物车数据表中

    $sql = "SELECT *  FROM `collection` WHERE `username` = '$userName' AND `collection_id` = '$collection_id'";

    $res = mysqli_query($con,$sql);

    if(!$res){
        die('数据库链接错误' . mysqli_error($con));
    }
    $row = mysqli_fetch_assoc($res);

    if(!$row){
        // 说明不存在 这个用户名对应的这个条goods_id
        // 把这条数据添加到购物车表
        $addSql = "INSERT INTO `collection` VALUES (null, '$userName', '$collection_id')";

        $addRes = mysqli_query($con,$addSql);
        if(!$addRes){
            die('数据库链接错误' . mysqli_error($con));
        }else{
        echo json_encode(array(
            "msg"=>"添加成功"
        ));
        }
    }else{
        echo json_encode(array(
            "msg"=>"已收藏"
        ));
    }
?>