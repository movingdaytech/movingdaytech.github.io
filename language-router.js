// MovingDay Language Router
// Handles URL-based language switching using paths like /tc, /en, /kr, /jp

class LanguageRouter {
    constructor() {
        this.languages = {
            'tc': 'zh', // Traditional Chinese
            'sc': 'zh', // Simplified Chinese (same as traditional for now)
            'en': 'en', // English
            'kr': 'kr', // Korean
            'jp': 'jp'  // Japanese
        };
        
        this.currentLang = this.detectLanguageFromURL();
        console.log(this.currentLang, "this.currentLang")
        this.init();
    }
    
    init() {
        // Set initial language
        this.setLanguage(this.currentLang);
        
        // Listen for browser back/forward navigation
        window.addEventListener('popstate', (event) => {
            const newLang = this.detectLanguageFromURL();
            if (newLang !== this.currentLang) {
                this.setLanguage(newLang);
            }
        });
        
        // Update language cards UI
        this.updateLanguageUI();
    }
    
    detectLanguageFromURL() {
        const path = window.location.pathname;
        const langCode = path.split('/')[1]; // Get first path segment

        if (this.languages[langCode]) {
            return this.languages[langCode];
        }
        
        // Default to Traditional Chinese if no language in URL
        return 'zh';
    }
    
    setLanguage(langCode) {
        this.currentLang = langCode;
        
        // Update page content
        this.updateTextContent(langCode);
        this.updateImages(langCode);
        this.updatePageMeta(langCode);
        
        // Update URL without page reload
        this.updateURL(langCode);
        
        // Update UI
        this.updateLanguageUI();
        
        // Save preference
        localStorage.setItem('movingday-language', langCode);
    }
    
    updateURL(langCode) {
        const langPath = this.getLangPath(langCode);
        const currentPath = window.location.pathname;
        
        if (currentPath !== langPath) {
            const newURL = langPath + window.location.search + window.location.hash;
            // window.history.pushState({ lang: langCode }, '', newURL);
        }
    }
    
    getLangPath(langCode) {
        // Map language codes to URL paths
        const pathMap = {
            'zh': '/tc',
            'en': '/en',
            'kr': '/kr',
            'jp': '/jp'
        };
        return pathMap[langCode] || '/tc';
    }
    
    updateTextContent(langCode) {
        const elements = document.querySelectorAll(`[data-${langCode}]`);
        
        elements.forEach(element => {
            const newContent = element.getAttribute(`data-${langCode}`);
            if (newContent) {
                element.innerHTML = newContent;
            }
        });
    }
    
    updateImages(langCode) {
        // Define language-specific image mappings
        const imageMappings = {
            zh: {
                'badge_appstore_zh.png': 'assets/badge_appstore_zh.png',
                'badge_appstore_zh 1.png': 'assets/badge_appstore_zh 1.png',
                'app_name.png': 'assets/app_name.png',
                'text_zh.png': 'assets/text_zh.png',
                'text.png': 'assets/text_zh.png'
            },
            en: {
                'badge_appstore_zh.png': 'assets/badge_appstore_en.png',
                'badge_appstore_zh 1.png': 'assets/badge_appstore_en.png',
                'app_name.png': 'assets/app_name_en.png',
                'text_zh.png': 'assets/text_en.png',
                'text.png': 'assets/text_en.png'
            },
            kr: {
                'badge_appstore_zh.png': 'assets/badge_appstore_kr.png',
                'badge_appstore_zh 1.png': 'assets/badge_appstore_kr.png',
                'app_name.png': 'assets/app_name_kr.png',
                'text_zh.png': 'assets/text_kr.png',
                'text.png': 'assets/text_kr.png'
            },
            jp: {
                'badge_appstore_zh.png': 'assets/badge_appstore_jp.png',
                'badge_appstore_zh 1.png': 'assets/badge_appstore_jp.png',
                'app_name.png': 'assets/app_name_jp.png',
                'text_zh.png': 'assets/text_jp.png',
                'text.png': 'assets/text_jp.png'
            }
        };
        
        const mappings = imageMappings[langCode];
        if (!mappings) return;
        
        // Update images based on language
        Object.keys(mappings).forEach(oldSrc => {
            const newSrc = mappings[oldSrc];
            const images = document.querySelectorAll(`img[src*="${oldSrc}"]`);
            
            images.forEach(img => {
                if (img.src.includes(oldSrc)) {
                    img.src = newSrc;
                }
            });
        });
    }
    
    updatePageMeta(langCode) {
        // Update page title and meta description based on language
        const titleMappings = {
            zh: 'MovingDay - 您的倒數好夥伴',
            en: 'MovingDay - Your Countdown Companion',
            kr: 'MovingDay - 당신의 카운트다운 동반자',
            jp: 'MovingDay - あなたのカウントダウン仲間'
        };
        
        const descMappings = {
            zh: 'MovingDay 與您一起倒數重要日子，記錄美好回憶，製作願望清單',
            en: 'MovingDay counts down with you to important days, records beautiful memories, and creates wish lists',
            kr: 'MovingDay이 중요한 날까지 카운트다운을 함께하고, 아름다운 추억을 기록하고, 소원 목록을 만듭니다',
            jp: 'MovingDayが大切な日までカウントダウンをお手伝いし、美しい思い出を記録し、願いリストを作成します'
        };
        
        // Update title
        if (titleMappings[langCode]) {
            document.title = titleMappings[langCode];
        }
        
        // Update meta description
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && descMappings[langCode]) {
            metaDesc.setAttribute('content', descMappings[langCode]);
        }
    }
    
    updateLanguageUI() {
        const languageCards = document.querySelectorAll('.language-card');
        
        languageCards.forEach(card => {
            const lang = card.getAttribute('data-lang');
            if (lang === this.currentLang) {
                card.classList.add('active');
                card.style.borderColor = '#667eea';
                card.style.background = 'rgba(102, 126, 234, 0.05)';
            } else {
                card.classList.remove('active');
                card.style.borderColor = '#e5ded1';
                card.style.background = 'transparent';
            }
        });
    }
    
    // Public method to change language programmatically
    changeLanguage(langCode) {
        if (this.languages[langCode] || Object.values(this.languages).includes(langCode)) {
            this.setLanguage(langCode);
        }
    }
    
    // Get current language
    getCurrentLanguage() {
        return this.currentLang;
    }
}

// Initialize language router when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.languageRouter = new LanguageRouter();
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LanguageRouter;
}
