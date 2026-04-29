document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navList = document.getElementById('navList');
    const dropdown = document.querySelector('.dropdown');
    const dropbtn = document.querySelector('.dropbtn');

    // 1. Burger Buton: Ana Menüyü Aç/Kapat
    if (mobileBtn) {
        mobileBtn.onclick = function(e) {
            e.stopPropagation();
            navList.classList.toggle('is-active');
        };
    }

    // 2. Koleksiyonlar Buton: Alt Menüyü Aç/Kapat
    if (dropbtn) {
        dropbtn.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            dropdown.classList.toggle('is-open');
        };
    }

    // 3. Dışarı Tıklayınca Her Şeyi Kapat (Temizlik)
    document.addEventListener('click', (e) => {
        // Eğer tıklanan yer menünün kendisi değilse
        if (navList && !navList.contains(e.target) && !mobileBtn.contains(e.target)) {
            navList.classList.remove('is-active');
            dropdown.classList.remove('is-open'); // Koleksiyonları da kapat
        }
    });
});
