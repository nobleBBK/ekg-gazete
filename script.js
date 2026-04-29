document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    const dropbtn = document.querySelector('.dropbtn');

    if (dropbtn) {
        // 'click' olayını yakalıyoruz
        dropbtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // Sınıfı manuel olarak aç/kapat
            if (dropdown.classList.contains('is-open')) {
                dropdown.classList.remove('is-open');
            } else {
                dropdown.classList.add('is-open');
            }
        });
    }

    // Menü dışında bir yere basılırsa kapatma
    document.addEventListener('click', (e) => {
        if (dropdown && !dropdown.contains(e.target)) {
            dropdown.classList.remove('is-open');
        }
    });
});
