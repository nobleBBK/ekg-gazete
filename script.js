document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    const dropbtn = document.querySelector('.dropbtn');

    if (dropbtn) {
        dropbtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation(); // Tıklamanın dışarı sızıp menüyü hemen kapatmasını önler
            
            // Toggle işlemi: Varsa siler, yoksa ekler
            if (dropdown.classList.contains('open')) {
                dropdown.classList.remove('open');
            } else {
                dropdown.classList.add('open');
            }
        });
    }

    // Menü dışına tıklandığında/dokunulduğunda kapatma
    document.addEventListener('click', function(e) {
        if (dropdown && !dropdown.contains(e.target)) {
            dropdown.classList.remove('open');
        }
    });
});
