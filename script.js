document.addEventListener('click', function (e) {
    const dropdown = document.querySelector('.dropdown');
    const btn = document.querySelector('.dropbtn');

    if (e.target === btn) {
        e.preventDefault();
        e.stopPropagation();
        dropdown.classList.toggle('is-open');
    } else {
        if (dropdown) dropdown.classList.remove('is-open');
    }
});
