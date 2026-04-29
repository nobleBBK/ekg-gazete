document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    const dropbtn = document.querySelector('.dropbtn');

    if (dropbtn) {
        // Hem tıklama hem dokunma için en güvenli yöntem
        const toggleMenu = (e) => {
            e.preventDefault();
            e.stopPropagation();
            dropdown.classList.toggle('open');
        };

        dropbtn.addEventListener('click', toggleMenu);
    }

    // Dışarı dokunulursa kapat
    document.addEventListener('click', (e) => {
        if (dropdown && !dropdown.contains(e.target)) {
            dropdown.classList.remove('open');
        }
    });
});
