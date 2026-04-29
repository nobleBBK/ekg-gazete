document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navList = document.getElementById('navList');
    const dropdown = document.querySelector('.dropdown');
    const dropbtn = document.querySelector('.dropbtn');

    // Mobil ana menüyü aç/kapat
    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navList.classList.toggle('is-active');
        });
    }

    // Koleksiyonlar alt menüsünü aç/kapat
    if (dropbtn) {
        dropbtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            dropdown.classList.toggle('is-open');
        });
    }

    // Boşluğa tıklayınca her şeyi kapat
    document.addEventListener('click', (e) => {
        if (navList && !navList.contains(e.target) && !mobileBtn.contains(e.target)) {
            navList.classList.remove('is-active');
            dropdown.classList.remove('is-open');
        }
    });
});
