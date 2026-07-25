document.addEventListener('DOMContentLoaded', () => {
    const userMenuBtn = document.getElementById('userMenuBtn');
    const dropdownMenu = document.getElementById('dropdownMenu');

    // کلیک روی دکمه کاربر برای باز/بسته کردن منو
    userMenuBtn.addEventListener('click', (event) => {
        event.stopPropagation(); // جلوگیری از بسته شدن آنی هنگام کلیک روی دکمه
        dropdownMenu.classList.toggle('show');
        userMenuBtn.classList.toggle('active');
    });

    // بستن منو در صورت کلیک روی هر نقطه دیگری از صفحه
    document.addEventListener('click', (event) => {
        if (!dropdownMenu.contains(event.target) && !userMenuBtn.contains(event.target)) {
            dropdownMenu.classList.remove('show');
            userMenuBtn.classList.remove('active');
        }
    });
});