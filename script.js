document.addEventListener('DOMContentLoaded', () => {
    const dropbtn = document.querySelector('.dropbtn');
    const dropdown = document.querySelector('.dropdown');

    if (dropbtn) {
        // Dokunma veya tıklama anında çalışır
        dropbtn.addEventListener('click', (e) => {
            e.preventDefault(); // Sayfa zıplamasını engelle
            e.stopPropagation(); // Diğer tıklamalarla karışmasın
            dropdown.classList.toggle('show');
        });
    }

    // Ekranın herhangi bir yerine dokunulursa menüyü kapat
    document.body.addEventListener('click', (e) => {
        if (dropdown && !dropdown.contains(e.target)) {
            dropdown.classList.remove('show');
        }
    });
});
