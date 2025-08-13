// MovingDay Landing Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initSmoothScrolling();
    initAnimations();
    initImageLazyLoading();
});

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Intersection Observer for animations
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .feature-detail, .language-card, .question');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Lazy loading for images
function initImageLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

// Parallax effect for hero section
function initParallax() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        hero.style.transform = `translateY(${rate}px)`;
    });
}

// Add CSS for scroll progress bar
const progressStyles = document.createElement('style');
progressStyles.textContent = `
    .scroll-progress {
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #667eea, #764ba2);
        z-index: 1001;
        transition: width 0.1s ease;
    }
    
    .animate-in {
        animation: fadeInUp 0.8s ease-out forwards;
    }
    
    .scrolled {
        background: rgba(255, 255, 255, 0.98);
        backdrop-filter: blur(15px);
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .feature-card:hover .feature-icon {
        transform: scale(1.1);
        transition: transform 0.3s ease;
    }
    
    .question {
        position: relative;
        overflow: hidden;
    }
    
    .question::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(231, 76, 60, 0.1), transparent);
        transition: left 0.5s ease;
    }
    
    .question:hover::before {
        left: 100%;
    }
`;

document.head.appendChild(progressStyles);

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add click effects to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px)';
            }, 150);
        });
    });
    
    // Add typing effect to questions (optional)
    // const questions = document.querySelectorAll('.question');
    // questions.forEach((question, index) => {
    //     const text = question.textContent;
    //     question.textContent = '';
        
    //     setTimeout(() => {
    //         typeWriter(question, text, 0);
    //     }, index * 1000);
    // });
    
    // Language switching is now handled by language-router.js
});

// Typewriter effect function
function typeWriter(element, text, i) {
    if (i < text.length) {
        element.textContent += text.charAt(i);
        setTimeout(() => {
            typeWriter(element, text, i + 1);
        }, 50);
    }
}

// Add smooth reveal animation for sections
function revealOnScroll() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('revealed');
        }
    });
}

// Call reveal function on scroll
window.addEventListener('scroll', revealOnScroll);

// Add CSS for reveal animation
const revealStyles = document.createElement('style');
revealStyles.textContent = `
    section {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease;
    }
    
    section.revealed {
        opacity: 1;
        transform: translateY(0);
    }
    
    .hero {
        opacity: 1;
        transform: translateY(0);
    }
`;

document.head.appendChild(revealStyles);

// Initialize reveal on load
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        revealOnScroll();
    }, 100);
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(function() {
    // Scroll-based animations and effects
}, 16)); // 60fps


// Language switching functionality
function initLanguageSwitching() {
    const languageCards = document.querySelectorAll('.language-card');
    let currentLang = 'zh'; // Default language
    
    // Load saved language preference
    const savedLang = localStorage.getItem('movingday-language');
    if (savedLang) {
        currentLang = savedLang;
        updateLanguageUI(currentLang);
        changeLanguage(currentLang);
    }
    
    // Add click event to language cards
    languageCards.forEach(card => {
        card.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            if (lang && lang !== currentLang) {
                currentLang = lang;
                localStorage.setItem('movingday-language', lang);
                updateLanguageUI(lang);
                changeLanguage(lang);
                
                // Add click effect
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
            }
        });
    });
}

function updateLanguageUI(selectedLang) {
    const languageCards = document.querySelectorAll('.language-card');
    
    languageCards.forEach(card => {
        const lang = card.getAttribute('data-lang');
        if (lang === selectedLang) {
            card.classList.add('active');
            card.style.transform = 'scale(1.05)';
        } else {
            card.classList.remove('active');
            card.style.transform = 'scale(1)';
        }
    });
}

function changeLanguage(lang) {
    // Update text content
    updateTextContent(lang);
    
    // Update images based on language
    updateImages(lang);
    
    // Update page title and meta description
    updatePageMeta(lang);
    
    // Show language change notification
    showLanguageNotification(lang);
}

function updateTextContent(lang) {
    const elements = document.querySelectorAll('[data-' + lang + ']');
    
    elements.forEach(element => {
        const newContent = element.getAttribute('data-' + lang);
        if (newContent) {
            element.innerHTML = newContent;
        }
    });
}

function updateImages(lang) {
    // Define language-specific image mappings
    const imageMappings = {
        zh: {
            'app_name.png': 'assets/app_name.png',
            'badge_appstore_zh.png': 'assets/badge_appstore_zh.png',
            'badge_appstore_zh 1.png': 'assets/badge_appstore_zh 1.png'
        },
        en: {
            'app_name.png': 'assets/app_name_en.png',
            'badge_appstore_zh.png': 'assets/badge_appstore_en.png',
            'badge_appstore_zh 1.png': 'assets/badge_appstore_en.png'
        },
        kr: {
            'app_name.png': 'assets/app_name_kr.png',
            'badge_appstore_zh.png': 'assets/badge_appstore_kr.png',
            'badge_appstore_zh 1.png': 'assets/badge_appstore_kr.png'
        },
        jp: {
            'app_name.png': 'assets/app_name_jp.png',
            'badge_appstore_zh.png': 'assets/badge_appstore_jp.png',
            'badge_appstore_zh 1.png': 'assets/badge_appstore_jp.png'
        }
    };
    
    const mappings = imageMappings[lang];
    if (mappings) {
        Object.keys(mappings).forEach(oldSrc => {
            const images = document.querySelectorAll(`img[src*="${oldSrc}"]`);
            images.forEach(img => {
                const newSrc = mappings[oldSrc];
                if (newSrc && img.src.includes(oldSrc)) {
                    img.src = newSrc;
                }
            });
        });
    }
}

function updatePageMeta(lang) {
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
    
    if (titleMappings[lang]) {
        document.title = titleMappings[lang];
    }
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && descMappings[lang]) {
        metaDesc.setAttribute('content', descMappings[lang]);
    }
}

function showLanguageNotification(lang) {
    const langNames = {
        zh: '繁體中文',
        en: 'English',
        kr: '한국어',
        jp: '日本語'
    };
    
    // Remove existing notification
    const existingNotification = document.querySelector('.lang-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = 'lang-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <span>🌍 Language changed to ${langNames[lang]}</span>
            <button class="notification-close">&times;</button>
        </button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        transform: translateX(400px);
        transition: transform 0.5s ease;
        max-width: 300px;
    `;
    
    // Add notification styles
    const notificationStyles = document.createElement('style');
    notificationStyles.textContent = `
        .notification-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: background 0.3s ease;
        }
        
        .notification-close:hover {
            background: rgba(255, 255, 255, 0.2);
        }
    `;
    
    document.head.appendChild(notificationStyles);
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            notification.remove();
        }, 500);
    });
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                notification.remove();
            }, 500);
        }
    }, 5000);
}
