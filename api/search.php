<?php
    $con = mysqli_connect('localhost','root','123456','test');

    $findsth = $_POST['findsth'];

    $sql = "SELECT * FROM `toutiao` WHERE `title` LIKE '%$findsth%' ORDER BY `id` DESC";

    $res = mysqli_query($con,$sql);

    if(!$res){
        die('数据库错误' . mysqli_error($con));
    }

    $dataArr = array();
    $row = mysqli_fetch_assoc($res);
    while($row){
        array_push($dataArr,$row);
        $row = mysqli_fetch_assoc($res);
    }
    
    echo json_encode(array(
        "total"=>count($dataArr),
        "list"=>$dataArr,
        "code"=>1,
        "message"=>"获取列表数据成功"
    ));
?>