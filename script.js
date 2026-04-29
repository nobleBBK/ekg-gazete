document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    const dropbtn = document.querySelector('.dropbtn');

    if (dropbtn) {
        dropbtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation(); // Tıklamanın dışarı sızmasını engeller
            
            // "open" sınıfı varsa kaldırır, yoksa ekler (Gerçek Toggle)
            if (dropdown.classList.contains('open')) {
                dropdown.classList.remove('open');
            } else {
                dropdown.classList.add('open');
            }
        });
    }

    // Menü dışındaki boş bir yere tıklandığında/dokunulduğunda kapat
    document.addEventListener('click', function(e) {
        if (dropdown && !dropdown.contains(e.target)) {
            dropdown.classList.remove('open');
        }
    });
});
