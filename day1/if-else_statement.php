<?php
    $age = 83;
    
    if ($age < 18) {
        echo "You are Not allowed for voting.";
    } elseif ($age >= 18 && $age <= 60) {
        echo "You are allowed for Voting";
    } else {
        echo "You are a senior citizen. Don't Missed the Voting";
    }
?>
