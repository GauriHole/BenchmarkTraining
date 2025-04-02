<?php
    // Multidimensional array 
    $students = array(
        array("name" => "Amit", "age" => 22, "course" => "B.Tech"),
        array("name" => "Gauri", "age" => 25, "course" => "MCA"),
        array("name" => "Neha", "age" => 24, "course" => "MBA")
    );

    echo "Student 1 Name: " . $students[0]["name"] . "<br>"; 
    echo "Student 2 Course: " . $students[1]["course"] . "<br>"; 
?>
