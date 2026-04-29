document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    const dropbtn = document.querySelector('.dropbtn');

    if (dropbtn && dropdown) {
        dropbtn.addEventListener('click', function(e) {
            // Sayfanın zıplamasını ve tıklamanın dışarı sızmasını engelle
            e.preventDefault();
            e.stopPropagation();

            // KLASİK KONTROL: Sınıf varsa sil, yoksa ekle
            if (dropdown.classList.contains('open')) {
                dropdown.classList.remove('open');
                console.log("Menü Manuel Kapatıldı");
            } else {
                dropdown.classList.add('open');
                console.log("Menü Manuel Açıldı");
            }
        });
    }

    // Sayfada başka bir boşluğa basınca kapatma kuralı
    document.addEventListener('click', function(e) {
        if (dropdown && !dropdown.contains(e.target)) {
            dropdown.classList.remove('open');
        }
    });
});
