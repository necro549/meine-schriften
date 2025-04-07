<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Schriftgenerator mit Live-Vorschau</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Schriftgenerator mit Live-Vorschau</h1>
        <div class="input-group">
            <label for="input-text">Text eingeben:</label>
            <input type="text" id="input-text" placeholder="Gib deinen Text hier ein...">
        </div>
        <div class="input-group">
            <label for="font-select">Schriftart auswählen:</label>
            <select id="font-select">
                <option value="Arial">Arial</option>
                <option value="Courier New">Courier New</option>
                <option value="Georgia">Georgia</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Verdana">Verdana</option>
                <option value="MeineSchrift1">Meine Schrift 1</option> <!-- Beispiel -->
                <option value="MeineSchrift2">Meine Schrift 2</option> <!-- Beispiel -->
                <!-- Hier weitere Schriften hinzufügen -->
            </select>
        </div>
        <div class="output">
            <h2>Live-Vorschau:</h2>
            <div id="preview"></div>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
