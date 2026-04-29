document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    const dropbtn = document.querySelector('.dropbtn');

    if (dropbtn) {
        dropbtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // Eğer zaten açıksa kapat, kapalıysa aç
            const isOpen = dropdown.classList.contains('open');
            if (isOpen) {
                dropdown.classList.remove('open');
            } else {
                dropdown.classList.add('open');
            }
        });
    }

    // Dışarıya tıklandığında menüyü kapat
    document.addEventListener('click', (e) => {
        if (dropdown && !dropdown.contains(e.target)) {
            dropdown.classList.remove('open');
        }
    });
});
