// 初始化导航栏显示状态
function updateNavVisibility() {
    const navLinks = document.querySelector('.navbar .nav-links');
    const bottomNav = document.querySelector('.bottom-nav');
    
    if (window.innerWidth <= 768) {
        // 移动端显示底部导航栏
        if (bottomNav) {
            bottomNav.style.display = 'flex';
        }
        // 隐藏侧边导航栏
        if (navLinks) {
            navLinks.style.display = 'none';
        }
    } else {
        // 桌面端显示侧边导航栏
        if (navLinks) {
            navLinks.style.display = 'flex';
        }
        // 隐藏底部导航栏
        if (bottomNav) {
            bottomNav.style.display = 'none';
        }
    }
}

// 初始化时设置导航栏状态
updateNavVisibility();

// 窗口大小变化时更新导航栏状态
window.addEventListener('resize', () => {
    updateNavVisibility();
});

// 移动端菜单按钮点击事件
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        const navLinks = document.querySelector('.navbar .nav-links');
        if (navLinks) {
            navLinks.classList.toggle('show');
            mobileMenuBtn.setAttribute('aria-expanded',
                navLinks.classList.contains('show'));
        }
    });
}