<?php
    $pattern = "/\d+/";  // Matches any number 
    $text = "My order numbers are 123 and 4567.";
    
    preg_match_all($pattern, $text, $matches);
    
    print_r($matches[0]);  
    print_r($matches[1]);  
?>
