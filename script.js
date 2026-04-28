document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    const dropbtn = document.querySelector('.dropbtn');

    // Koleksiyonlar'a tıklandığında/dokunulduğunda
    dropbtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Tıklamanın dışarı sızmasını önler
        dropdown.classList.toggle('show');
    });

    // Sayfada başka bir yere tıklandığında menüyü kapat
    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('show');
        }
    });
});
