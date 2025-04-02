<?php
    session_start();
    $_SESSION["user"] = "Gauri";
    echo "<h1> Session variable is set.</h1>"."<h2>".$_SESSION["user"]."</h2>"."</h1>";
?>
