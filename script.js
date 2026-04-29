document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    const dropbtn = document.querySelector('.dropbtn');

    if (dropbtn) {
        dropbtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            // Menüyü aç/kapat
            dropdown.classList.toggle('open');
            console.log("Menü durumu: " + dropdown.classList.contains('open')); // Test için
        });
    }

    // Boşluğa tıklayınca kapat
    document.addEventListener('click', (e) => {
        if (dropdown && !dropdown.contains(e.target)) {
            dropdown.classList.remove('open');
        }
    });
});
