// 初始化导航栏显示状态
function updateNavVisibility() {
    const navLinks = document.querySelector('.navbar .nav-links');
    if (window.innerWidth <= 768) {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
}

// 初始化时设置导航栏状态
updateNavVisibility();

// 窗口大小变化时更新导航栏状态
window.addEventListener('resize', () => {
    updateNavVisibility();
});