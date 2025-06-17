// Dark Mode & Enhanced Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Theme Management
  const initTheme = () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Create theme toggle
    const themeToggle = document.createElement('div');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = `
      <button class="toggle-switch" aria-label="Toggle dark mode">
        <span class="toggle-icon sun-icon">☀️</span>
        <span class="toggle-icon moon-icon">🌙</span>
      </button>
    `;
    
    document.body.appendChild(themeToggle);
    
    const toggleButton = themeToggle.querySelector('.toggle-switch');
    toggleButton.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      
      // Add ripple effect
      const ripple = document.createElement('div');
      ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
      `;
      
      const rect = toggleButton.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = (rect.width / 2 - size / 2) + 'px';
      ripple.style.top = (rect.height / 2 - size / 2) + 'px';
      
      toggleButton.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  };
  
  // Mobile Navigation
  const initMobileNav = () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
      navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Animate hamburger menu
        const spans = navToggle.querySelectorAll('span');
        spans.forEach((span, index) => {
          if (navMenu.classList.contains('active')) {
            if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
            if (index === 1) span.style.opacity = '0';
            if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
          } else {
            span.style.transform = '';
            span.style.opacity = '';
          }
        });
      });
      
      // Close mobile menu when clicking on a link
      const navLinks = document.querySelectorAll('.nav-link');
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            const spans = navToggle.querySelectorAll('span');
            spans.forEach(span => {
              span.style.transform = '';
              span.style.opacity = '';
            });
          }
        });
      });
    }
  };
  
  // Lazy Loading with Intersection Observer
  const initLazyLoading = () => {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            
            // Add loading skeleton
            img.classList.add('loading-skeleton');
            
            // Create new image to preload
            const newImg = new Image();
            newImg.onload = () => {
              img.src = img.dataset.src;
              img.classList.remove('loading-skeleton');
              img.style.opacity = '0';
              img.style.transition = 'opacity 0.3s ease';
              setTimeout(() => img.style.opacity = '1', 50);
            };
            newImg.src = img.dataset.src;
            
            imageObserver.unobserve(img);
          }
        });
      }, {
        rootMargin: '50px'
      });
      
      // Observe all images with data-src
      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
      
      // Convert existing images to lazy loading
      document.querySelectorAll('img:not([data-src])').forEach(img => {
        if (img.src) {
          img.dataset.src = img.src;
          img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InRyYW5zcGFyZW50Ii8+PC9zdmc+';
          imageObserver.observe(img);
        }
      });
    }
  };
  
  // Reading Progress Indicator
  const initReadingProgress = () => {
    const article = document.querySelector('.post-content');
    if (!article) return;
    
    const progressBar = document.createElement('div');
    progressBar.innerHTML = `
      <div style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background: rgba(30, 59, 44, 0.1);
        z-index: 1000;
        transition: opacity 0.3s ease;
      ">
        <div style="
          height: 100%;
          background: linear-gradient(90deg, #1E3B2C, #2C4A3B);
          width: 0%;
          transition: width 0.1s ease;
        " class="progress-fill"></div>
      </div>
    `;
    
    document.body.appendChild(progressBar);
    const progressFill = progressBar.querySelector('.progress-fill');
    
    let ticking = false;
    const updateProgress = () => {
      const articleTop = article.offsetTop;
      const articleHeight = article.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      
      const articleBottom = articleTop + articleHeight - windowHeight;
      const progress = Math.max(0, Math.min(100, ((scrollTop - articleTop) / (articleBottom - articleTop)) * 100));
      
      progressFill.style.width = progress + '%';
      ticking = false;
    };
    
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    });
  };
  
  // Floating Action Buttons
  const initFloatingActions = () => {
    const fabContainer = document.createElement('div');
    fabContainer.className = 'floating-actions';
    fabContainer.innerHTML = `
      <button class="fab back-to-top" aria-label="Back to top" title="Back to top">
        ↑
      </button>
    `;
    
    document.body.appendChild(fabContainer);
    
    const backToTopBtn = fabContainer.querySelector('.back-to-top');
    
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    let scrollTimeout;
    window.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
      
      // Hide on scroll stop
      scrollTimeout = setTimeout(() => {
        if (window.scrollY > 300) {
          backToTopBtn.style.opacity = '0.7';
        }
      }, 1000);
    });
    
    // Show on hover
    fabContainer.addEventListener('mouseenter', () => {
      backToTopBtn.style.opacity = '1';
    });
  };
  
  // Enhanced Card Interactions
  const initCardInteractions = () => {
    const cards = document.querySelectorAll('.post-card, .category-card');
    
    cards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = '';
      });
      
      // Add click ripple effect
      card.addEventListener('click', function(e) {
        const ripple = document.createElement('div');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        
        ripple.style.cssText = `
          position: absolute;
          border-radius: 50%;
          background: rgba(30, 59, 44, 0.1);
          transform: scale(0);
          animation: ripple 0.6s linear;
          pointer-events: none;
          width: ${size}px;
          height: ${size}px;
          left: ${e.clientX - rect.left - size/2}px;
          top: ${e.clientY - rect.top - size/2}px;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
      });
    });
  };
  
  // Smooth Scrolling for Anchor Links
  const initSmoothScrolling = () => {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          const headerHeight = document.querySelector('.site-header')?.offsetHeight || 0;
          const targetPosition = target.offsetTop - headerHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  };
  
  // Add Author Avatars
  const initAuthorAvatars = () => {
    const authorInfos = document.querySelectorAll('.author-info');
    authorInfos.forEach(info => {
      if (!info.querySelector('.author-avatar')) {
        const authorName = info.textContent.trim();
        const initials = authorName.split(' ').map(n => n[0]).join('').toUpperCase();
        
        const avatar = document.createElement('div');
        avatar.className = 'author-avatar';
        avatar.textContent = initials;
        
        info.insertBefore(avatar, info.firstChild);
      }
    });
  };
  
  // Add Reading Time to Cards
  const addReadingTime = () => {
    document.querySelectorAll('.post-card').forEach(card => {
      const excerpt = card.querySelector('.post-card-excerpt');
      const meta = card.querySelector('.post-card-meta');
      
      if (excerpt && meta && !meta.querySelector('.reading-time')) {
        const wordCount = excerpt.textContent.split(' ').length;
        const readingTime = Math.max(1, Math.ceil(wordCount / 200));
        
        const timeElement = document.createElement('span');
        timeElement.className = 'reading-time';
        timeElement.textContent = `${readingTime} min read`;
        
        meta.appendChild(timeElement);
      }
    });
  };
  
  // Keyboard Navigation Enhancement
  const initKeyboardNav = () => {
    document.addEventListener('keydown', (e) => {
      // Escape key closes mobile menu
      if (e.key === 'Escape') {
        const navMenu = document.querySelector('.nav-menu');
        const navToggle = document.querySelector('.nav-toggle');
        if (navMenu && navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          const spans = navToggle.querySelectorAll('span');
          spans.forEach(span => {
            span.style.transform = '';
            span.style.opacity = '';
          });
        }
      }
      
      // Ctrl/Cmd + D toggles dark mode
      if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
        e.preventDefault();
        const toggleButton = document.querySelector('.toggle-switch');
        if (toggleButton) {
          toggleButton.click();
        }
      }
    });
  };
  
  // Initialize all features
  initTheme();
  initMobileNav();
  initLazyLoading();
  initReadingProgress();
  initFloatingActions();
  initCardInteractions();
  initSmoothScrolling();
  initAuthorAvatars();
  addReadingTime();
  initKeyboardNav();
  
  // Add CSS animations
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
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
    
    .post-card,
    .category-card {
      animation: fadeInUp 0.6s ease forwards;
    }
    
    .post-card:nth-child(2) { animation-delay: 0.1s; }
    .post-card:nth-child(3) { animation-delay: 0.2s; }
    .post-card:nth-child(4) { animation-delay: 0.3s; }
    .post-card:nth-child(5) { animation-delay: 0.4s; }
    .post-card:nth-child(6) { animation-delay: 0.5s; }
  `;
  document.head.appendChild(style);
});

// Performance optimization
if ('requestIdleCallback' in window) {
  requestIdleCallback(() => {
    // Preload critical resources
    const criticalImages = document.querySelectorAll('img[data-src]');
    criticalImages.forEach((img, index) => {
      if (index < 3) { // Preload first 3 images
        const preloadImg = new Image();
        preloadImg.src = img.dataset.src;
      }
    });
  });
}

// Service Worker Registration (for future PWA features)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Uncomment when service worker is ready
    // navigator.serviceWorker.register('/sw.js');
  });
}