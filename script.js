document.getElementById('font-select').addEventListener('change', function() {
    const selectedFont = this.value;
    const previewText = document.getElementById('preview-text');
    
    // Wenn der Nutzer "Meine Schrift" auswählt, setzen wir die entsprechende Schriftart
    if (selectedFont === 'meine-schrift') {
        previewText.style.fontFamily = 'MeineSchrift, sans-serif';
    }
});
