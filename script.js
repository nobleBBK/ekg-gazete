document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navList = document.getElementById('navList');
    const dropdown = document.querySelector('.dropdown');
    const dropbtn = document.querySelector('.dropbtn');

    // 1. Burger Buton Tetikleyici
    if (mobileBtn) {
        mobileBtn.onclick = function(e) {
            e.stopPropagation();
            navList.classList.toggle('is-active');
            console.log("Burger Basıldı");
        };
    }

    // 2. Koleksiyonlar Buton Tetikleyici
    if (dropbtn) {
        dropbtn.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            dropdown.classList.toggle('is-open');
            console.log("Koleksiyonlar Basıldı");
        };
    }

    // 3. Temizlik: Dışarı basınca kapat
    document.onclick = function(e) {
        if (navList && !navList.contains(e.target) && !mobileBtn.contains(e.target)) {
            navList.classList.remove('is-active');
            dropdown.classList.remove('is-open');
        }
    };
});
