<?php
    // Associative array of a person
    $person = array(
        "name" => "Gauri",
        "age" => 25,
        "city" => "Kopargaon"
    );
    $university = array(
        "Enrollno"=> 123456234,
        "UnivName"=> "SCOE Kopargaon",
        "Branch"=> "Computer Science",
        "Location" => "Kopargaon"
    );

    // Accessing array values
    echo "Name: ". $person["name"] . "<br>";
    echo "Age: " . $person["age"] . "<br>";
    echo "City: " . $person["city"] . "<br>";

    // Accessing University array values
    echo "University Name : ".$university["UnivName"]."<br>";
    echo "Enrollment No : ".$university["Enrollno"]."<br>";
    echo "Branch : ".$university["Branch"]."<br>";
    echo "Location : ".$university["Location"]."<br>";
?>
