// MovingDay Language Configuration
// This file contains all translations and language-specific assets

const LANGUAGES = {
    zh: {
        name: '繁體中文',
        code: 'zh',
        flag: '🇹🇼',
        direction: 'ltr'
    },
    en: {
        name: 'English',
        code: 'en',
        flag: '🇺🇸',
        direction: 'ltr'
    },
    kr: {
        name: '한국어',
        code: 'kr',
        flag: '🇰🇷',
        direction: 'ltr'
    },
    jp: {
        name: '日本語',
        code: 'jp',
        flag: '🇯🇵',
        direction: 'ltr'
    }
};

// Image asset mappings for different languages
const IMAGE_MAPPINGS = {
    zh: {
        // App store badges
        'badge_appstore_zh.png': 'assets/badge_appstore_zh.png',
        'badge_appstore_zh 1.png': 'assets/badge_appstore_zh 1.png',
        // App names
        'app_name.png': 'assets/app_name.png',
        // Other assets remain the same
        'app_icon.png': 'assets/app_icon.png',
        'app_icon 1.png': 'assets/app_icon 1.png'
    },
    en: {
        // App store badges
        'badge_appstore_zh.png': 'assets/badge_appstore_en.png',
        'badge_appstore_zh 1.png': 'assets/badge_appstore_en.png',
        // App names
        'app_name.png': 'assets/app_name_en.png',
        // Other assets remain the same
        'app_icon.png': 'assets/app_icon.png',
        'app_icon 1.png': 'assets/app_icon 1.png'
    },
    kr: {
        // App store badges
        'badge_appstore_zh.png': 'assets/badge_appstore_kr.png',
        'badge_appstore_zh 1.png': 'assets/badge_appstore_kr.png',
        // App names
        'app_name.png': 'assets/app_name_kr.png',
        // Other assets remain the same
        'app_icon.png': 'assets/app_icon.png',
        'app_icon 1.png': 'assets/app_icon 1.png'
    },
    jp: {
        // App store badges
        'badge_appstore_zh.png': 'assets/badge_appstore_jp.png',
        'badge_appstore_zh 1.png': 'assets/badge_appstore_jp.png',
        // App names
        'app_name.png': 'assets/app_name_jp.png',
        // Other assets remain the same
        'app_icon.png': 'assets/app_icon.png',
        'app_icon 1.png': 'assets/app_icon 1.png'
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LANGUAGES, IMAGE_MAPPINGS };
} else {
    // Browser environment
    window.MovingDayLanguages = {
        LANGUAGES,
        IMAGE_MAPPINGS
    };
}
