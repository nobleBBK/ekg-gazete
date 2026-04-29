window.onload = function() {
    const dropdown = document.querySelector('.dropdown');
    const dropbtn = document.querySelector('.dropbtn');

    if (dropbtn && dropdown) {
        dropbtn.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            // Menüyü aç/kapat
            dropdown.classList.toggle('open');
        };
    }

    // Boşluğa basınca kapat
    document.onclick = function(e) {
        if (dropdown && !dropdown.contains(e.target)) {
            dropdown.classList.remove('open');
        }
    };
};
