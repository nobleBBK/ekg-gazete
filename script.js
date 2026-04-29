document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navList = document.getElementById('navList');
    const dropdown = document.querySelector('.dropdown');
    const dropbtn = document.querySelector('.dropbtn');

    // Mobil Burger Buton Kontrolü
    if (mobileBtn) {
        mobileBtn.onclick = function(e) {
            e.stopPropagation();
            navList.classList.toggle('is-active');
        };
    }

    // Koleksiyonlar Buton Kontrolü
    if (dropbtn) {
        dropbtn.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            dropdown.classList.toggle('is-open');
        };
    }

    // Herhangi bir yere basınca menüleri kapat
    document.onclick = function(e) {
        if (navList && !navList.contains(e.target) && !mobileBtn.contains(e.target)) {
            navList.classList.remove('is-active');
            dropdown.classList.remove('is-open');
        }
    };
});
