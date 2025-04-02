<?php
    // Indexed Array
    $numbers = array(8, 3, 1, 6, 7);

    echo "Original Indexed Array: ";
    print_r($numbers);
    echo "<br>";

    // Sort in Ascending Order
    sort($numbers);
    echo "Sorted (Ascending Order): ";
    print_r($numbers);
    echo "<br>";

    // Sort in Descending Order
    rsort($numbers);
    echo "Sorted (Descending Order): ";
    print_r($numbers);
    echo "<br><br>";

    // Associative Array
    $people = array("Gauri" => 25, "Amit" => 22, "Neha" => 28);

    echo "Original Associative Array: ";
    print_r($people);
    echo "<br>";

    // Sort by Values (Ascending)
    asort($people);
    echo "Sorted by Value (Ascending): ";
    print_r($people);
    echo "<br>";

    // Sort by Keys (Ascending)
    ksort($people);
    echo "Sorted by Key (Ascending): ";
    print_r($people);
    echo "<br>";

    // Sort by Values (Descending)
    arsort($people);
    echo "Sorted by Value (Descending): ";
    print_r($people);
    echo "<br>";

    // Sort by Keys (Descending)
    krsort($people);
    echo "Sorted by Key (Descending): ";
    print_r($people);
?>
