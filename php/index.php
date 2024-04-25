<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
</head>    
<body>
    <nav>
        <div class= "navbar">
            <ul>
                <li><a href="../html/home.html">Home</a></li>
                <li><a href="../php/index.php">Contact</a></li>
                <li><a href="../html/login.html">Inloggen</a></li>
            </ul>
        </div>
    </nav>
   
<body>
    <h1 class="title">Neem contact op met je familie</h1>
        <div class="gegevens">
    <div class="input-gegevens">
                <form action="https://formspree.io/f/mjvnjpja"
                     method="POST" class="contact-input">
                    <input type="text" name="Name" placeholder="Jouw Naam" required>
                        <input type="email" name="email" placeholder="Jouw Email" required>
                        <textarea name="Message" rows="6" placeholder="Jouw Bericht"></textarea>
                    <button type="submit" class="contact-button">Versturen</button>
                 </form>
        </div>
    </div>
</body>
</html>
