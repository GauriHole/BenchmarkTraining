<?php
$x = 5; // global scope

function myGlobal() {
  // using x inside this function will generate an error
  echo "<p>Variable x inside function is: $x</p>";
}
myGlobal();

echo "<p>Variable x outside function is: $x</p>";

function myLocal() {
    $x = 5; // local scope
    echo "<p>Variable x inside function is: $x</p>";
  } 
  myLocal();
  
  // using x outside the function will generate an error
  echo "<p>Variable x outside function is: $x</p>";
?>