<?php
    // PHP Basic Functions
    function sayHello() {
        echo "Hello, World!<br>"."<br><br>";
    }
    
    sayHello();

    //Function with Parameters
    function greet($name) {
        echo "Hello, $name<br>";
    }

    greet("Gauri");
    greet("PHP Developer"."<br><br>");

    //Function with Return value 
    function addNumbers($a, $b) {
        return $a + $b;
    }

    $sum = addNumbers(5, 10);
    echo "Sum: $sum";

?>
