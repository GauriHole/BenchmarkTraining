<?php
    $pattern = "/bad|ugly/i";  // Match "bad" or "ugly" (case-insensitive)
    $replacement = "nice";
    $text = "This is a bad and ugly day.";

    $new_text = preg_replace($pattern, $replacement, $text);

    echo $new_text;  // Output: This is a nice and nice day.
?>
