document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    const dropbtn = document.querySelector('.dropbtn');

    // Koleksiyonlar'a tıklayınca aç/kapat
    dropbtn.addEventListener('click', (e) => {
        e.preventDefault(); // Sayfa zıplamasını engelle
        e.stopPropagation(); 
        dropdown.classList.toggle('show');
    });

    // Sayfada başka yere tıklayınca zorla kapat
    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('show');
        }
    });
});
