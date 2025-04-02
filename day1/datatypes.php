<?php 
$name = "Gauri";
$salary = 2500.50;
$age = 23;
$married_Status = false;
$hobbies = array("Dancing", "Traveling", "Cooking");

echo "<center> <b> Hello, My Name is".$name."<br>"."Salary :".$salary."<br>"."Age :".$age."<br>";
echo "Married Status :";
var_dump($married_Status);
echo "<br>";
echo "Hobbies :";
print_r($hobbies);
echo "<b></center>";

// Displaying the data types of the variables
echo "<center>";
echo gettype($name)."<br>"; 
echo gettype($salary)."<br>";
echo gettype($age)."<br>";
echo gettype($married_Status)."<br>";
echo gettype($hobbies)."<br>";
echo "</center>";
?>