/* تنظیمات پایه */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #f4f7fb;
    color: #2c3e50;
    direction: rtl;
    line-height: 1.6;
}

/* ------------------- نوبار ------------------- */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    padding: 10px 30px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    position: sticky;
    top: 0;
    z-index: 100;
}

.nav-brand {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 700;
    color: #3b82f6;
    font-size: 1.2rem;
}

.nav-links {
    display: flex;
    gap: 20px;
}

.nav-link {
    text-decoration: none;
    color: #64748b;
    font-weight: 600;
    padding: 6px 12px;
    border-radius: 6px;
    transition: all 0.2s;
}

.nav-link:hover, .nav-link.active {
    color: #3b82f6;
    background-color: #eff6ff;
}

/* دکمه کاربر */
.user-menu-container {
    position: relative;
}

.user-menu-btn {
    display: flex;
    align-items: center;
    gap: 12px;
    background: none;
    border: 1px solid #e2e8f0;
    padding: 6px 14px;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.2s;
}

.user-menu-btn:hover {
    background-color: #f8fafc;
    border-color: #cbd5e1;
}

.avatar-wrapper {
    position: relative;
}

.avatar-sm {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    object-fit: cover;
}

.status-indicator {
    position: absolute;
    bottom: 2px;
    right: 0;
    width: 10px;
    height: 10px;
    background-color: #10b981;
    border: 2px solid #fff;
    border-radius: 50%;
}

.user-info-text {
    display: flex;
    flex-direction: column;
    text-align: right;
}

.user-name {
    font-weight: 700;
    font-size: 0.9rem;
    color: #1e293b;
}

.user-role {
    font-size: 0.75rem;
    color: #64748b;
}

.arrow-icon {
    font-size: 0.75rem;
    color: #94a3b8;
    transition: transform 0.3s;
}

.user-menu-btn.active .arrow-icon {
    transform: rotate(180deg);
}

/* منوی عمودی کشویی */
.dropdown-menu {
    position: absolute;
    left: 0;
    top: 55px;
    background-color: #ffffff;
    width: 230px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    border: 1px solid #f1f5f9;
    display: none;
    flex-direction: column;
    z-index: 1000;
    animation: fadeIn 0.2s ease-in-out;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(-8px); }
    to { opacity: 1; transform: translateY(0); }
}

.dropdown-menu.show {
    display: flex;
}

.dropdown-header {
    padding: 12px 16px;
    display: flex;
    flex-direction: column;
}

.dh-title {
    font-weight: bold;
    font-size: 0.85rem;
    color: #1e293b;
}

.dh-email {
    font-size: 0.75rem;
    color: #64748b;
}

.dropdown-divider {
    height: 1px;
    background-color: #f1f5f9;
}

.dropdown-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 16px;
    color: #475569;
    text-decoration: none;
    font-size: 0.88rem;
    transition: background-color 0.2s;
}

.dropdown-item:hover {
    background-color: #f8fafc;
    color: #3b82f6;
}

.dropdown-item.logout {
    color: #ef4444;
}

.dropdown-item.logout:hover {
    background-color: #fef2f2;
}

/* ------------------- کارت هدر پروفایل ------------------- */
.main-container {
    max-width: 950px;
    margin: 30px auto;
    padding: 0 20px;
}

.profile-header-card {
    background-color: #ffffff;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
    margin-bottom: 25px;
}

.cover-image {
    height: 140px;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
}

.profile-header-content {
    padding: 0 30px 20px 30px;
    display: flex;
    align-items: flex-end;
    gap: 20px;
    margin-top: -50px;
    position: relative;
}

.avatar-upload-container {
    position: relative;
}
.avatar-lg {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #ffffff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.avatar-upload-btn {
    position: absolute;
    bottom: 5px;
    left: 0;
    background-color: #3b82f6;
    color: white;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    transition: background 0.2s;
}

.avatar-upload-btn:hover {
    background-color: #2563eb;
}

.header-user-details h2 {
    font-size: 1.4rem;
    color: #0f172a;
}

.header-user-details p {
    color: #64748b;
    font-size: 0.9rem;
    margin-top: 2px;
}

.badges {
    display: flex;
    gap: 8px;
    margin-top: 8px;
}

.badge {
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
}

.badge-primary { background-color: #dbeafe; color: #1e40af; }
.badge-secondary { background-color: #f1f5f9; color: #475569; }

/* تب‌ها */
.profile-tabs {
    display: flex;
    border-top: 1px solid #f1f5f9;
    padding: 0 20px;
    background-color: #fafafa;
}

.tab-btn {
    padding: 14px 20px;
    background: none;
    border: none;
    border-bottom: 3px solid transparent;
    font-weight: 600;
    color: #64748b;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.2s;
}

.tab-btn:hover, .tab-btn.active {
    color: #3b82f6;
    border-bottom-color: #3b82f6;
    background-color: #ffffff;
}

/* ------------------- فرم‌ها و تب‌ها ------------------- */
.tab-pane {
    display: none;
}

.tab-pane.active {
    display: block;
}

.form-card {
    background-color: #ffffff;
    border-radius: 16px;
    padding: 30px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
}

.form-title {
    font-size: 1.1rem;
    color: #1e293b;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    border-bottom: 1px solid #f1f5f9;
    padding-bottom: 10px;
}

.form-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 18px;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 12px;
}

.form-group.full-width {
    grid-column: 1 / -1;
}

.form-group label {
    font-size: 0.85rem;
    font-weight: 600;
    color: #475569;
}

.form-group input,
.form-group textarea {
    padding: 10px 14px;
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    font-size: 0.9rem;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
}

.form-group input:focus,
.form-group textarea:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
}

.disabled-input {
    background-color: #f8fafc;
    color: #94a3b8;
    cursor: not-allowed;
}

.form-actions {
    display: flex;
    gap: 10px;
    margin-top: 15px;
}

.btn {
    padding: 10px 20px;
    border-radius: 8px;
    border: none;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.2s;
}

.btn-primary { background-color: #3b82f6; color: white; }
.btn-primary:hover { background-color: #2563eb; }

.btn-light { background-color: #f1f5f9; color: #475569; }
.btn-light:hover { background-color: #e2e8f0; }

/* ------------------- سوییچ‌های اعلانات ------------------- */
.toggle-list {
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.toggle-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 12px;
    border-bottom: 1px solid #f1f5f9;
}

.toggle-item h4 {
    font-size: 0.95rem;
    color: #1e293b;
}

.toggle-item p {
    font-size: 0.8rem;
    color: #64748b;
}

/* UI سوییچ Toggle */
.switch {
    position: relative;
    display: inline-block;
    width: 46px;
    height: 24px;
}

.switch input { opacity: 0; width: 0; height: 0; }
.slider {
    position: absolute;
    cursor: pointer;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: #cbd5e1;
    transition: .3s;
    border-radius: 24px;
}

.slider:before {
    position: absolute;
    content: "";
    height: 18px; width: 18px;
    left: 3px; bottom: 3px;
    background-color: white;
    transition: .3s;
    border-radius: 50%;
}

input:checked + .slider { background-color: #3b82f6; }
input:checked + .slider:before { transform: translateX(22px); }

/* responsive */
@media (max-width: 650px) {
    .profile-header-content {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    .user-info-text { display: none; }
}