document.addEventListener('DOMContentLoaded', function () {
    // Mendapatkan mode tema dari local storage atau default jika tidak ada
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

    // Menetapkan tema saat halaman dimuat
    if (currentTheme) {
        document.body.classList.add(currentTheme);
    } else {
        // Default tema terang jika tidak ada preferensi sebelumnya
        document.body.classList.add('light-mode');
    }

    // Mengganti tema saat tombol tema diklik
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', function () {
            document.body.classList.toggle('light-mode');
            document.body.classList.toggle('dark-mode');

            // Menyimpan preferensi tema pada local storage
            const currentTheme = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
            localStorage.setItem('theme', currentTheme);
        });
    }

    // Mendapatkan elemen tombol dan mode tema saat ini dari penyimpanan lokal
    const darkModeToggle = document.getElementById('darkModeToggle');
    let darkMode = localStorage.getItem('darkMode');

    // Fungsi untuk mengubah tema
    const toggleDarkMode = () => {
        document.body.classList.toggle('dark-mode');
        darkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', darkMode);

        // Menyembunyikan/menampilkan logo sesuai dengan mode tema
        const moonIcon = document.getElementById('moonIcon');
        const sunIcon = document.getElementById('sunIcon');
        const footerLogoDark = document.getElementById('footerLogoDark');
        const footerLogoLight = document.getElementById('footerLogoLight');

        moonIcon.classList.toggle('hidden', darkMode);
        sunIcon.classList.toggle('hidden', !darkMode);
        footerLogoDark.classList.toggle('hidden', !darkMode);
        footerLogoLight.classList.toggle('hidden', darkMode);
    };

    // Menambahkan event listener untuk tombol
    darkModeToggle.addEventListener('click', toggleDarkMode);

    // Memeriksa apakah tema gelap diaktifkan pada saat memuat halaman
    if (darkMode === 'true') {
        toggleDarkMode();
    }
});
