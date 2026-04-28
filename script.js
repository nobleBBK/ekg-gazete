document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    const dropdownLink = document.querySelector('.dropdown > a');

    // Dokunmatik cihazlar için tıklama kontrolü
    dropdownLink.addEventListener('click', function(e) {
        // Eğer ekran genişliği 1024px'den küçükse (Mobil/Tablet)
        if (window.innerWidth <= 1024) {
            e.preventDefault(); // Sayfanın en üste zıplamasını engeller
            dropdown.classList.toggle('active'); // Aç/Kapat yapar
        }
    });

    // Sayfada başka bir yere dokunulursa menüyü kapat
    document.addEventListener('click', function(e) {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('active');
        }
    });
});
