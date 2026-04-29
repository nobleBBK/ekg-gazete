document.addEventListener('click', function(e) {
    const dropdown = document.querySelector('.dropdown');
    const btn = document.querySelector('.dropbtn');

    // Eğer basılan yer Koleksiyonlar butonuysa
    if (e.target === btn || btn.contains(e.target)) {
        e.preventDefault();
        e.stopPropagation();
        dropdown.classList.toggle('is-open');
    } 
    // Başka bir yere basılırsa kapat
    else {
        if (dropdown) {
            dropdown.classList.remove('is-open');
        }
    }
});
