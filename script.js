document.addEventListener('click', function (e) {
    // Eğer tıklanan yer Koleksiyonlar butonuysa
    if (e.target.classList.contains('dropbtn')) {
        e.preventDefault();
        e.stopPropagation();
        // Bir üstteki 'dropdown' kutusuna 'active-menu' ismini ekle veya çıkar
        e.target.parentElement.classList.toggle('active-menu');
    } 
    // Başka bir yere basılırsa menüyü kapat
    else {
        const activeMenu = document.querySelector('.active-menu');
        if (activeMenu && !activeMenu.contains(e.target)) {
            activeMenu.classList.remove('active-menu');
        }
    }
});
