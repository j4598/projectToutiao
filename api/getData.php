<?php
    $con = mysqli_connect('localhost','root','123456','test');

    $start = $_POST['start'];
    $len = $_POST['len'];

    $s = ($start-1)*$len;

    $sql = "SELECT * FROM `toutiao` LIMIT $s,$len";

    $res = mysqli_query($con,$sql);

    if(!$res){
        die('error' . mysqli_error());
    }

    $dataArr = array();
    $row = mysqli_fetch_assoc($res);
    while($row){
        array_push($dataArr,$row);
        $row = mysqli_fetch_assoc($res);
    }
    $sql2= "SELECT COUNT(*) `count` FROM `toutiao`";
    $res2= mysqli_query($con,$sql2);

    if(!$res2){
        die('error for mysqli:' . mysqli_error());
    }
    $row2= mysqli_fetch_assoc($res2);

    echo json_encode(array(
        "total"=>$row2['count'],
        "list"=>$dataArr,
        "code"=>1,
        "message"=>"获取列表数据成功"
    ));
?>