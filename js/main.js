document.addEventListener('DOMContentLoaded', function() {
    // 获取当前语言
    let currentLang = localStorage.getItem('language') || 'zh';
    
    // 语言切换功能
    const languageBtn = document.getElementById('language-btn');
    const languageMenu = document.getElementById('language-menu');
    const languageOptions = document.querySelectorAll('.language-option');

    // 初始化语言
    setLanguage(currentLang);
    updateLanguageButton(currentLang);

    // 切换语言菜单显示
    languageBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // 阻止事件冒泡
        languageMenu.classList.toggle('show');
    });

    // 点击其他地方关闭菜单
    document.addEventListener('click', (e) => {
        if (!languageBtn.contains(e.target) && !languageMenu.contains(e.target)) {
            languageMenu.classList.remove('show');
        }
    });

    // 语言选择
    languageOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation(); // 阻止事件冒泡
            const lang = option.dataset.lang;
            setLanguage(lang);
            updateLanguageButton(lang);
            languageMenu.classList.remove('show');
        });
    });

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('language', lang);
        
        // 更新所有需要翻译的文本
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.dataset.i18n;
            const keys = key.split('.');
            let translation = translations[lang];
            keys.forEach(k => {
                translation = translation[k];
            });
            if (translation) {
                element.textContent = translation;
            }
        });

        // 更新页面标题
        document.title = `${translations[lang].nav.home} | Wheat`;
    }

    function updateLanguageButton(lang) {
        const text = Array.from(languageOptions).find(opt => opt.dataset.lang === lang).textContent;
        languageBtn.querySelector('span').textContent = text;
    }
}); 