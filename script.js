document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navList = document.getElementById('navList');
    const dropdown = document.querySelector('.dropdown');
    const dropbtn = document.querySelector('.dropbtn');

    // MOBİL MENÜ AÇ/KAPAT
    if (mobileBtn && navList) {
        mobileBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navList.classList.toggle('is-active');
        });
    }

    // KOLEKSİYONLAR AÇ/KAPAT
    if (dropbtn && dropdown) {
        dropbtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            dropdown.classList.toggle('is-open');
        });
    }

    // DIŞARI TIKLAYINCA KAPAT
    document.addEventListener('click', (e) => {
        if (navList && navList.classList.contains('is-active')) {
            if (!navList.contains(e.target) && !mobileBtn.contains(e.target)) {
                navList.classList.remove('is-active');
            }
        }
        if (dropdown && dropdown.classList.contains('is-open')) {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('is-open');
            }
        }
    });
});
