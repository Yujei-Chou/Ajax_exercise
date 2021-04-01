<?php

$student_json = file_get_contents("./students.json");
$student_data = json_decode($student_json, true);
//file_put_contents('./students.json', json_encode($student_data));

$add_name = $_POST["add_name"];
$add_ID = $_POST["add_ID"];
$search_ID = $_POST["search_ID"];
$delete_ID = $_POST["delete_ID"];
$list_all = $_POST["list_all_clicked"];


if(!empty($delete_ID)){
  unset($student_data[$delete_ID]);
  file_put_contents('./students.json', json_encode($student_data));
  echo json_encode($student_data);


}

if(!empty($search_ID)){
  if(isset($student_data[$search_ID])){
    echo "<h3>Hello, {$student_data[$search_ID]}</h3>";
  }else{
    echo "<h3>Can't find this student</h3>";
  }
}

if(!empty($add_ID) && !empty($add_name)){
  $student_data[$add_ID] = $add_name;
  file_put_contents('./students.json', json_encode($student_data));
  echo json_encode($student_data);
}

if($list_all == "yes"){
  echo json_encode($student_data);
}

?>
