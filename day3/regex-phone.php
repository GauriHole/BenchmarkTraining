<?php
    $phone = "+91-9876543210";
    $pattern = "/^\+91-\d{10}$/"; // Matches Indian numbers like +91-9876543210

    if (preg_match($pattern, $phone)) {
        echo "Valid phone number!";
    } else {
        echo "Invalid phone number!";
    }
// Regex- for email
    $email = "user@example.com";
    $pattern = "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/";

    if (preg_match($pattern, $email)) {
        echo "Valid email!";
    } else {
        echo "Invalid email!";
    }
?>
