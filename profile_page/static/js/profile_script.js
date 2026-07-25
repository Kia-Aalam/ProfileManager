document.addEventListener('DOMContentLoaded', () => {
    // --- عناصر منوی کشویی کاربر ---
    const userMenuBtn = document.getElementById('userMenuBtn');
    const dropdownMenu = document.getElementById('dropdownMenu');

    // باز و بسته کردن منوی کشویی نوبار
    if (userMenuBtn && dropdownMenu) {
        userMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdownMenu.classList.toggle('show');
            userMenuBtn.classList.toggle('active');
        });

        // بستن منو با کلیک در بیرون منو
        document.addEventListener('click', (e) => {
            if (!dropdownMenu.contains(e.target) && !userMenuBtn.contains(e.target)) {
                dropdownMenu.classList.remove('show');
                userMenuBtn.classList.remove('active');
            }
        });
    }

    // --- آپلود و پیش‌نمایش تصویر کاربر ---
    const avatarInput = document.getElementById('avatarInput');
    const profileAvatarPreview = document.getElementById('profileAvatarPreview');
    const navAvatar = document.getElementById('navAvatar');

    if (avatarInput) {
        avatarInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    const newImageUrl = event.target.result;
                    if (profileAvatarPreview) profileAvatarPreview.src = newImageUrl;
                    if (navAvatar) navAvatar.src = newImageUrl;
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // --- مدیریت ارسال فرم اطلاعات شخص (جهت تمرین اتصال به بک‌اند) ---
    const profileForm = document.getElementById('profileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // دریافت مقادیر فرم
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const bio = document.getElementById('bio').value;

            const fullName = ${firstName} ${lastName};

            // بروزرسانی متون هدر و نوبار به صورت زنده
            document.getElementById('headerFullName').innerText = fullName;
            document.getElementById('navUserName').innerText = fullName;
            document.getElementById('navEmail').innerText = email;
            document.getElementById('headerBio').innerText = bio;

            alert('اطلاعات با موفقیت ذخیره شد (آماده ارسال به API/بک‌اند)');
        });
    }

    // --- مدیریت ارسال فرم تغییر رمز عبور ---
    const securityForm = document.getElementById('securityForm');
    if (securityForm) {
        securityForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const newPassword = document.getElementById('newPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (newPassword !== confirmPassword) {
                alert('تکرار رمز عبور جدید مطابقت ندارد!');
                return;
            }

            alert('رمز عبور با موفقیت بروزرسانی شد.');
            securityForm.reset();
        });
    }
});

// --- تابع سوئیچ بین تب‌های پروفایل ---
function switchTab(tabId, element) {
    // مخفی کردن تمام تب‌ها
    const tabPanes = document.querySelectorAll('.tab-pane');
    tabPanes.forEach(pane => pane.classList.remove('active'));

    // غیرفعال کردن دکمه‌های تب
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => btn.classList.remove('active'));

    // فعال کردن تب انتخاب شده
    const activePane = document.getElementById(tabId);
    if (activePane) {
        activePane.classList.add('active');
    }
    // اگر کلیک از روی دکمه تب بوده است
    if (element) {
        element.classList.add('active');
    } else {
        // پیدا کردن دکمه معادل بر اساس tabId
        const targetBtn = Array.from(tabBtns).find(btn => btn.getAttribute('onclick').includes(tabId));
        if (targetBtn) targetBtn.classList.add('active');
    }
}