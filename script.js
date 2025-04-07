document.addEventListener("DOMContentLoaded", function () {
    const inputText = document.getElementById("input-text");
    const fontSelect = document.getElementById("font-select");
    const preview = document.getElementById("preview");

    function updatePreview() {
        preview.style.fontFamily = fontSelect.value;
        preview.textContent = inputText.value || "Gib deinen Text hier ein...";
    }

    inputText.addEventListener("input", updatePreview);
    fontSelect.addEventListener("change", updatePreview);

    // Initiale Vorschau aktualisieren
    updatePreview();
});
