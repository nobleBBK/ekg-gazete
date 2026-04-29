document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    const dropbtn = document.querySelector('.dropbtn');

    if (dropbtn) {
        dropbtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // Klasik Kontrol: Açıksa kapat, kapalıysa aç
            if (dropdown.classList.contains('is-open')) {
                dropdown.classList.remove('is-open');
            } else {
                dropdown.classList.add('is-open');
            }
        });
    }

    // Dışarı tıklayınca menüyü kapat
    document.addEventListener('click', (e) => {
        if (dropdown && !dropdown.contains(e.target)) {
            dropdown.classList.remove('is-open');
        }
    });
});
