<?php
    // Creating an array
    $fruits = array("Apple", "Banana", "Mango");

    // count() 
    echo "<br>"."Total fruits: " . count($fruits) . "<br>"; 

    // array_push() 
    array_push($fruits, "Orange", "Grapes");
    echo "<br>"."New Array After adding Orange & Grapes: ";
    print_r($fruits);
    echo "<br>";

    // array_pop() 
    $removedFruit = array_pop($fruits);
    echo "<br>"."Removed Fruit: " . $removedFruit . "<br>";
    echo "<br>"."New Array After removing last element: ";
    print_r($fruits);
    echo "<br>";

    // array_merge() 
    $vegetables = array("Carrot", "Tomato", "Potato");
    $food = array_merge($fruits, $vegetables);
    echo "<br>"."Final Merged Array (Fruits + Vegetables): ";
    print_r($food);
?>
