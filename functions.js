document.getElementById('toggle-button').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        this.textContent = 'Šviesus režimas';
        localStorage.setItem('theme', 'dark');
    } else {
        this.textContent = 'Tamsus režimas';
        localStorage.setItem('theme', 'light');
    }
});

window.addEventListener('load', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('toggle-button').textContent = 'Šviesus režimas';
    }
});