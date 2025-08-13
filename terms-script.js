// MovingDay Terms of Use Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initTableOfContents();
    initSmoothScrolling();
    initScrollEffects();
    initHeaderEffects();
    initAccessibility();
});

// Table of Contents functionality
function initTableOfContents() {
    const tocToggle = document.getElementById('tocToggle');
    const tocList = document.getElementById('tocList');
    const toc = document.getElementById('toc');
    
    if (!tocToggle || !tocList) return;
    
    // Toggle TOC on mobile
    tocToggle.addEventListener('click', function() {
        tocList.classList.toggle('show');
        tocToggle.classList.toggle('active');
    });
    
    // Handle TOC navigation
    const tocLinks = tocList.querySelectorAll('a');
    const sections = document.querySelectorAll('.term-section');
    
    // Update active TOC item on scroll
    function updateActiveTOCItem() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all links
                tocLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to current section link
                if (tocLinks[index]) {
                    tocLinks[index].classList.add('active');
                }
            }
        });
    }
    
    // Smooth scroll to sections
    tocLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close TOC on mobile after clicking
                if (window.innerWidth <= 1200) {
                    tocList.classList.remove('show');
                    tocToggle.classList.remove('active');
                }
            }
        });
    });
    
    // Update TOC on scroll
    window.addEventListener('scroll', throttle(updateActiveTOCItem, 100));
    
    // Initialize active state
    updateActiveTOCItem();
}

// Smooth scrolling for all internal links
function initSmoothScrolling() {
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll effects and animations
function initScrollEffects() {
    const sections = document.querySelectorAll('.term-section');
    
    // Intersection Observer for fade-in effects
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe sections for animation
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Parallax effect for logo section
    const logoSection = document.querySelector('.logo-section');
    if (logoSection) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.3;
            logoSection.style.transform = `translateY(${rate}px)`;
        });
    }
}

// Header effects
function initHeaderEffects() {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add/remove scrolled class for styling
        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide/show header on scroll down/up
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Accessibility features
function initAccessibility() {
    // Add skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #667eea;
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 10000;
        transition: top 0.3s ease;
    `;
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Show skip link on focus
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    // Add main content id
    const main = document.querySelector('main');
    if (main) {
        main.id = 'main';
    }
    
    // Keyboard navigation for TOC
    const tocToggle = document.getElementById('tocToggle');
    if (tocToggle) {
        tocToggle.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    }
}

// Utility function: Throttle
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

// Add CSS for additional effects
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    .scrolled {
        background: rgba(255, 255, 255, 0.98);
        backdrop-filter: blur(15px);
    }
    
    .skip-link:focus {
        top: 6px !important;
    }
    
    /* Smooth transitions for sections */
    .term-section {
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    /* Highlight effect for active TOC item */
    .toc-list a.active {
        background: rgba(102, 126, 234, 0.1);
        color: #667eea;
        border-left-color: #667eea;
        font-weight: 500;
    }
    
    /* Hover effects for interactive elements */
    .term-title:hover .section-number {
        transform: scale(1.1);
        transition: transform 0.3s ease;
    }
    
    .info-category:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 25px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
    }
    
    /* Focus indicators */
    .term-section:focus-within {
        outline: 2px solid rgba(102, 126, 234, 0.3);
        outline-offset: 4px;
        border-radius: 8px;
    }
    
    /* Print optimization */
    @media print {
        .term-section {
            break-inside: avoid;
            page-break-inside: avoid;
        }
        
        .page-title {
            break-after: avoid;
            page-break-after: avoid;
        }
    }
`;

document.head.appendChild(additionalStyles);

// Performance optimization: Debounced scroll handler
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(function() {
    // Handle scroll-based effects here
}, 16);

window.addEventListener('scroll', debouncedScrollHandler);

// Add some interactive enhancements
document.addEventListener('DOMContentLoaded', function() {
    // Add click effects to section numbers
    const sectionNumbers = document.querySelectorAll('.section-number');
    sectionNumbers.forEach(number => {
        number.addEventListener('click', function() {
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
    
    // Add copy functionality for contact email
    const contactLink = document.querySelector('.contact-link');
    if (contactLink) {
        contactLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            const email = this.textContent;
            navigator.clipboard.writeText(email).then(() => {
                // Show feedback
                const originalText = this.textContent;
                this.textContent = 'Copied!';
                this.style.color = '#28a745';
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.color = '';
                }, 2000);
            }).catch(() => {
                // Fallback for older browsers
                window.location.href = `mailto:${email}`;
            });
        });
    }
    
    // Add progress indicator
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #667eea, #764ba2);
        z-index: 1001;
        transition: width 0.1s ease;
    `;
    
    document.body.appendChild(progressBar);
    
    // Update progress bar on scroll
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        progressBar.style.width = scrollPercent + '%';
    });
});

// Add some fun interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Add floating animation to logo
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.style.animation = 'float 4s ease-in-out infinite';
        
        const floatAnimation = document.createElement('style');
        floatAnimation.textContent = `
            @keyframes float {
                0%, 100% {
                    transform: translateY(0px);
                }
                50% {
                    transform: translateY(-8px);
                }
            }
        `;
        document.head.appendChild(floatAnimation);
    }
    
    // Add Easter egg: Click logo multiple times
    let logoClickCount = 0;
    if (logo) {
        logo.addEventListener('click', function() {
            logoClickCount++;
            if (logoClickCount === 5) {
                this.style.animation = 'rainbow 2s linear infinite';
                
                const rainbowStyles = document.createElement('style');
                rainbowStyles.textContent = `
                    @keyframes rainbow {
                        0% { filter: hue-rotate(0deg); }
                        100% { filter: hue-rotate(360deg); }
                    }
                `;
                document.head.appendChild(rainbowStyles);
                
                setTimeout(() => {
                    this.style.animation = 'float 4s ease-in-out infinite';
                }, 5000);
                
                logoClickCount = 0;
            }
        });
    }
});

// Handle window resize
window.addEventListener('resize', debounce(function() {
    // Update TOC position on resize
    const toc = document.getElementById('toc');
    if (toc && window.innerWidth <= 1200) {
        toc.style.position = 'static';
        toc.style.width = '100%';
    } else if (toc && window.innerWidth > 1200) {
        toc.style.position = 'fixed';
        toc.style.width = '280px';
    }
}, 250));

// Add some accessibility improvements
document.addEventListener('DOMContentLoaded', function() {
    // Add ARIA labels
    const tocToggle = document.getElementById('tocToggle');
    if (tocToggle) {
        tocToggle.setAttribute('aria-label', 'Toggle table of contents');
        tocToggle.setAttribute('aria-expanded', 'false');
        
        tocToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
        });
    }
    
    // Add ARIA labels to sections
    const sections = document.querySelectorAll('.term-section');
    sections.forEach((section, index) => {
        section.setAttribute('aria-labelledby', `section-${index + 1}`);
        const title = section.querySelector('.term-title');
        if (title) {
            title.id = `section-${index + 1}`;
        }
    });
});
