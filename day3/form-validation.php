<?php
$name = $email = "";
$nameErr = $emailErr = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty($_POST["name"])) {
        $nameErr = "Name is required";
    } else {
        $name = test_input($_POST["name"]);
    }

    if (empty($_POST["email"])) {
        $emailErr = "Email is required";
    } else {
        $email = test_input($_POST["email"]);
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $emailErr = "Invalid email format";
        }
    }
}
if ($_SERVER["REQUEST_METHOD"] == "POST" && $name && $email && !$nameErr && !$emailErr) {
    echo "<h3>Your Input:</h3>";
    echo "Name: " . $name . "<br>";
    echo "Email: " . $email . "<br>";
}

function test_input($data) {
    return htmlspecialchars(stripslashes(trim($data)));
}
?>
<!DOCTYPE html>
<html>
<body>
<form method="POST">
    Name: <input type="text" name="name"> <span style="color:red;"><?php echo $nameErr; ?></span><br><br>
    Email: <input type="email" name="email"> <span style="color:red;"><?php echo $emailErr; ?></span><br><br>
    <input type="submit" value="Submit">
</form>
</body>
</html>
