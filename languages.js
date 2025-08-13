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

// Text content translations
const TRANSLATIONS = {
    // Page titles and meta
    pageTitle: {
        zh: 'MovingDay - 您的倒數好夥伴',
        en: 'MovingDay - Your Countdown Companion',
        kr: 'MovingDay - 당신의 카운트다운 동반자',
        jp: 'MovingDay - あなたのカウントダウン仲間'
    },
    pageDescription: {
        zh: 'MovingDay 與您一起倒數重要日子，記錄美好回憶，製作願望清單',
        en: 'MovingDay counts down with you to important days, records beautiful memories, and creates wish lists',
        kr: 'MovingDay이 중요한 날까지 카운트다운을 함께하고, 아름다운 추억을 기록하고, 소원 목록을 만듭니다',
        jp: 'MovingDayが大切な日までカウントダウンをお手伝いし、美しい思い出を記録し、願いリストを作成します'
    },
    
    // Main content
    solutionTitle: {
        zh: 'MovingDay 與您一起<span class="highlight">倒數</span>重要日子',
        en: 'MovingDay counts down with you to <span class="highlight">important days</span>',
        kr: 'MovingDay이 중요한 날까지 <span class="highlight">카운트다운</span>을 함께합니다',
        jp: 'MovingDayが大切な日まで<span class="highlight">カウントダウン</span>をお手伝いします'
    },
    solutionDescription: {
        zh: '一步一步走向每個重要時刻的 D-day，儘管過程漫長及辛苦，也陪伴在您的身旁，一起等待這份美好 :)',
        en: 'Step by step towards each important D-day moment. Even though the process is long and hard, we\'ll be by your side, waiting for this beautiful moment together :)',
        kr: '각각의 중요한 D-day 순간을 향해 한 걸음씩 나아갑니다. 과정이 길고 힘들지만, 우리는 당신 곁에서 이 아름다운 순간을 함께 기다립니다 :)',
        jp: 'それぞれの大切なD-dayの瞬間に向かって一歩ずつ進んでいきます。過程が長く辛くても、私たちはあなたのそばでこの美しい瞬間を一緒に待っています :)'
    },
    
    // Feature titles
    featureLove: {
        zh: '戀愛',
        en: 'Love',
        kr: '사랑',
        jp: '恋愛'
    },
    featureTravel: {
        zh: '旅行',
        en: 'Travel',
        kr: '여행',
        jp: '旅行'
    },
    featureBirthday: {
        zh: '生日',
        en: 'Birthday',
        kr: '생일',
        jp: '誕生日'
    },
    featureOther: {
        zh: '其他重要日子',
        en: 'Other Important Days',
        kr: '기타 중요한 날',
        jp: 'その他の大切な日'
    },
    
    // Feature descriptions
    featureLoveDesc: {
        zh: '您與另一半的紀念日及所有甜蜜日子',
        en: 'Anniversaries and all sweet days with your partner',
        kr: '연인과의 기념일과 모든 달콤한 날들',
        jp: 'パートナーとの記念日とすべての甘い日々'
    },
    featureTravelDesc: {
        zh: '令人期待及放鬆的旅行',
        en: 'Exciting and relaxing trips to look forward to',
        kr: '기대되고 편안한 여행',
        jp: '楽しみでリラックスできる旅行'
    },
    featureBirthdayDesc: {
        zh: '每年您與摯愛的生日',
        en: 'Birthdays of you and your loved ones every year',
        kr: '매년 당신과 사랑하는 사람들의 생일',
        jp: '毎年あなたと大切な人の誕生日'
    },
    featureOtherDesc: {
        zh: '考試、畢業、升職等人生中重要的事',
        en: 'Exams, graduation, promotion and other important life events',
        kr: '시험, 졸업, 승진 등 인생의 중요한 일들',
        jp: '試験、卒業、昇進など人生の重要な出来事'
    },
    
    // Section titles
    sectionThemeCelebration: {
        zh: '以不同<span class="highlight">主題慶祝</span> D-day',
        en: 'Celebrate D-day with different <span class="highlight">themes</span>',
        kr: '다양한 <span class="highlight">테마</span>로 D-day를 축하합니다',
        jp: '異なる<span class="highlight">テーマ</span>でD-dayを祝います'
    },
    sectionShareFeelings: {
        zh: '像日記一樣<span class="highlight">分享感受</span>',
        en: 'Share feelings like a <span class="highlight">diary</span>',
        kr: '일기처럼 <span class="highlight">감정을 공유</span>합니다',
        jp: '日記のように<span class="highlight">気持ちを共有</span>します'
    },
    sectionWishList: {
        zh: '製作你的<span class="highlight">願望清單</span>',
        en: 'Create your <span class="highlight">wish list</span>',
        kr: '당신의 <span class="highlight">소원 목록</span>을 만듭니다',
        jp: 'あなたの<span class="highlight">願いリスト</span>を作成します'
    },
    sectionWidget: {
        zh: 'iOS主畫面<span class="highlight">倒數小工具(Widget)</span>',
        en: 'iOS Home Screen <span class="highlight">Countdown Widget</span>',
        kr: 'iOS 홈 화면 <span class="highlight">카운트다운 위젯</span>',
        jp: 'iOSホーム画面<span class="highlight">カウントダウンウィジェット</span>'
    },
    
    // Section descriptions
    sectionThemeCelebrationDesc: {
        zh: '不同的倒數類別，以不同的主題動畫慶祝 D-day 的來臨，為每個特別日子增添儀式感。',
        en: 'Different countdown categories celebrate D-day with themed animations, adding ceremony to each special day.',
        kr: '다양한 카운트다운 카테고리가 테마 애니메이션으로 D-day를 축하하여 각 특별한 날에 의식을 더합니다.',
        jp: '異なるカウントダウンカテゴリーがテーマアニメーションでD-dayを祝い、各特別な日に儀式感を加えます。'
    },
    sectionShareFeelingsDesc: {
        zh: '留下說不出的感受及真心，與摯愛共同分享及回憶這些珍貴的瞬間，令關係變得更加密切。',
        en: 'Share unspoken feelings and sincerity with loved ones, creating precious memories and strengthening relationships.',
        kr: '말로 표현할 수 없는 감정과 진심을 사랑하는 사람과 공유하고 이 소중한 순간들을 추억하며 관계를 더욱 돈독하게 만듭니다.',
        jp: '言葉にできない気持ちと真心を大切な人と共有し、これらの貴重な瞬間を思い出として残し、関係をより親密にします。'
    },
    sectionWishListDesc: {
        zh: '記錄你不同的願望，逐一實現它們，令人生旅途更加閃亮。',
        en: 'Record your different wishes and achieve them one by one, making your life journey brighter.',
        kr: '다양한 소원을 기록하고 하나씩 실현하여 인생 여정을 더욱 빛나게 만듭니다.',
        jp: 'あなたの様々な願いを記録し、一つずつ実現して、人生の旅をより輝かしくします。'
    },
    sectionWidgetDesc: {
        zh: '讓你能夠在手機桌面上輕鬆查看倒數活動，不再忘記重要日子。',
        en: 'Easily view countdown activities on your phone\'s home screen, never forgetting important days.',
        kr: '휴대폰 홈 화면에서 쉽게 카운트다운 활동을 확인하여 중요한 날을 잊지 않습니다.',
        jp: '携帯電話のホーム画面でカウントダウン活動を簡単に確認でき、大切な日を忘れることがありません。'
    },
    
    // Questions
    question1: {
        zh: '"您在忙碌生活中是否常常忘記重要日子？"',
        en: '"Do you often forget important days in your busy life?"',
        kr: '"바쁜 일상에서 중요한 날을 자주 잊어버리시나요?"',
        jp: '"忙しい生活の中で大切な日をよく忘れてしまいますか？"'
    },
    question2: {
        zh: '"等待的時間是否覺得很漫長？"',
        en: '"Does waiting time feel very long?"',
        kr: '"기다리는 시간이 매우 길게 느껴지시나요?"',
        jp: '"待つ時間がとても長く感じますか？"'
    },
    
    // Language section
    languageSectionTitle: {
        zh: '支援語言',
        en: 'Supported Languages',
        kr: '지원 언어',
        jp: '対応言語'
    },
    languageNote: {
        zh: '點擊語言切換內容和資源',
        en: 'Click on a language to switch content and assets',
        kr: '언어를 클릭하여 콘텐츠와 자산을 전환하세요',
        jp: '言語をクリックしてコンテンツとアセットを切り替えます'
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
    module.exports = { LANGUAGES, TRANSLATIONS, IMAGE_MAPPINGS };
} else {
    // Browser environment
    window.MovingDayLanguages = {
        LANGUAGES,
        TRANSLATIONS,
        IMAGE_MAPPINGS
    };
}
