<?php
    $x = 45;
    $y = 12.34;

    if (is_numeric($x)) {
        echo "X is a number.".$x."<br>";
        echo "Y is float number.".$y."<br>";
    }

    echo "New Y : ".intval($y)."<br>";  // Output: 12
    echo "New X : ".floatval($x); // Output: 45.0
?>
