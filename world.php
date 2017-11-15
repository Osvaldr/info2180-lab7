<?php

$host = getenv('IP');
$username = getenv('C9_USER');
$password = '';
$dbname = 'world';

$conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

$query = $_GET['q'];

if ($query != 'true' && !empty($query) ){
    $stmt = $conn->query("SELECT * FROM countries where name like '%$query%'");
}elseif ($query=="true") {
    $stmt = $conn->query("SELECT * FROM countries");
}else{
    die();
}


$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo '<ul>';
foreach ($results as $row) {
  echo '<li>' . $row['name'] . ' is ruled by ' . $row['head_of_state'] . '</li>';
}
echo '</ul>';
?>