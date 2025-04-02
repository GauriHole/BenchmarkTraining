<?php
$email = $url = "";
$emailErr = $urlErr = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty($_POST["email"])) {
        $emailErr = "Email is required";
    } else {
        $email = test_input($_POST["email"]);
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $emailErr = "Invalid email format";
        }
    }

    if (empty($_POST["url"])) {
        $urlErr = "URL is required";
    } else {
        $url = test_input($_POST["url"]);
        if (!filter_var($url, FILTER_VALIDATE_URL)) {
            $urlErr = "Invalid URL format";
        }
    }
    if($_SERVER["REQUEST_METHOD"]=="POST" && $email && $url && !$emailErr && !$urlErr) {
        echo "<h3> Validation Successful </h3>";
    }
}

function test_input($data) {
    return htmlspecialchars(stripslashes(trim($data)));
}
?>
<!DOCTYPE html>
<html>
<body>
<form method="POST">
    Email: <input type="text" name="email"> <span style="color:red;"><?php echo $emailErr; ?></span><br><br>
    Website: <input type="text" name="url"> <span style="color:red;"><?php echo $urlErr; ?></span><br><br>
    <input type="submit" value="Submit">
</form>
</body>
</html>
