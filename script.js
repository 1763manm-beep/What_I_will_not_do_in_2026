/* ==========================================
   CSS RESET & ROOT VARIABLES
   ========================================== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    /* Color Palette - Calm & Editorial */
    --color-bg: #fafafa;
    --color-white: #ffffff;
    --color-text-primary: #1a1a1a;
    --color-text-secondary: #666666;
    --color-text-muted: #999999;
    --color-accent: #2563eb;
    --color-border: #e5e5e5;
    --color-shadow: rgba(0, 0, 0, 0.05);
    --color-shadow-hover: rgba(0, 0, 0, 0.1);
    
    /* Typography */
    --font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    --font-weight-light: 300;
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    
    /* Spacing */
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 2rem;
    --spacing-lg: 4rem;
    --spacing-xl: 6rem;
    
    /* Layout */
    --max-width: 1200px;
    --content-width: 900px;
    
    /* Transitions */
    --transition-base: all 0.3s ease;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-family);
    background-color: var(--color-bg);
    color: var(--color-text-primary);
    line-height: 1.7;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

/* ==========================================
   NAVIGATION BAR
   ========================================== */

.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--color-border);
    z-index: 1000;
    padding: 1.2rem 0;
}

.nav-container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 var(--spacing-md);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-logo {
    font-weight: var(--font-weight-semibold);
    font-size: 1rem;
    color: var(--color-text-primary);
}

.nav-links {
    display: flex;
    gap: var(--spacing-md);
}

.nav-links a {
    text-decoration: none;
    color: var(--color-text-secondary);
    font-size: 0.95rem;
    font-weight: var(--font-weight-medium);
    transition: color 0.2s ease;
}

.nav-links a:hover {
    color: var(--color-accent);
}

/* ==========================================
   HERO SECTION
   ========================================== */

.hero {
    min-height: 85vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: var(--spacing-xl) var(--spacing-md);
    margin-top: 60px;
}

.hero-content {
    max-width: 900px;
}

.hero h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: var(--font-weight-bold);
    line-height: 1.2;
    margin-bottom: var(--spacing-md);
    letter-spacing: -0.03em;
    color: var(--color-text-primary);
}

.hero-subtitle {
    font-size: clamp(1.1rem, 2vw, 1.3rem);
    color: var(--color-text-secondary);
    font-weight: var(--font-weight-normal);
    line-height: 1.8;
    max-width: 700px;
    margin: 0 auto;
}

/* ==========================================
   INTRO SECTION
   ========================================== */

.intro-section {
    padding: var(--spacing-lg) var(--spacing-md);
    background: var(--color-white);
    border-top: 1px solid var(--color-border);
    border-bottom: 1px solid var(--color-border);
}

.container {
    max-width: var(--content-width);
    margin: 0 auto;
}

.intro-text {
    text-align: center;
}

.intro-text p {
    font-size: 1.2rem;
    color: var(--color-text-secondary);
    line-height: 1.9;
    font-weight: var(--font-weight-light);
}

.intro-text em {
    font-style: italic;
    color: var(--color-text-primary);
    font-weight: var(--font-weight-medium);
}

/* ==========================================
   COMMITMENTS SECTION
   ========================================== */

.commitments-section {
    padding: var(--spacing-xl) var(--spacing-md);
}

.section-title {
    font-size: clamp(2rem, 4vw, 3rem);
    text-align: center;
    margin-bottom: var(--spacing-lg);
    font-weight: var(--font-weight-bold);
    letter-spacing: -0.02em;
}

.commitments-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
    max-width: var(--content-width);
    margin: 0 auto;
}

/* Commitment Card Styling */
.commitment-card {
    background: var(--color-white);
    border: 1px solid var(--color-border);
    border-radius: 8px;
    padding: var(--spacing-md);
    transition: var(--transition-base);
    position: relative;
}

.commitment-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px var(--color-shadow-hover);
    border-color: var(--color-accent);
}

.card-number {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: var(--font-weight-semibold);
    color: var(--color-text-muted);
    letter-spacing: 0.15em;
    margin-bottom: var(--spacing-sm);
    text-transform: uppercase;
}

.commitment-card h3 {
    font-size: 1.35rem;
    font-weight: var(--font-weight-semibold);
    line-height: 1.4;
    margin-bottom: var(--spacing-sm);
    color: var(--color-text-primary);
}

.commitment-card p {
    font-size: 1rem;
    color: var(--color-text-secondary);
    line-height: 1.7;
    font-weight: var(--font-weight-light);
}

/* ==========================================
   ACCOUNTABILITY SECTION
   ========================================== */

.accountability-section {
    padding: var(--spacing-xl) var(--spacing-md);
    background: var(--color-white);
    border-top: 1px solid var(--color-border);
}

.accountability-box {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
    padding: var(--spacing-lg);
    background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
    border-radius: 12px;
    border: 1px solid #bfdbfe;
}

.accountability-icon {
    font-size: 3rem;
    margin-bottom: var(--spacing-sm);
}

.accountability-box h3 {
    font-size: 1.75rem;
    font-weight: var(--font-weight-bold);
    margin-bottom: var(--spacing-sm);
    color: var(--color-text-primary);
}

.accountability-text {
    font-size: 1.25rem;
    color: var(--color-text-primary);
    margin-bottom: var(--spacing-sm);
    line-height: 1.6;
}

.accountability-text strong {
    font-weight: var(--font-weight-bold);
    color: var(--color-accent);
}

.accountability-subtext {
    font-size: 1rem;
    color: var(--color-text-secondary);
    font-style: italic;
    font-weight: var(--font-weight-light);
}

/* ==========================================
   FOOTER
   ========================================== */

.footer {
    padding: var(--spacing-lg) var(--spacing-md);
    text-align: center;
    border-top: 1px solid var(--color-border);
    background: var(--color-white);
}

.footer-content {
    max-width: var(--max-width);
    margin: 0 auto;
}

.footer-year {
    font-size: 0.95rem;
    color: var(--color-text-secondary);
    margin-bottom: var(--spacing-xs);
    font-weight: var(--font-weight-medium);
}

.footer-tagline {
    font-size: 0.9rem;
    color: var(--color-text-muted);
    font-weight: var(--font-weight-light);
}

/* ==========================================
   ANIMATIONS
   ========================================== */

.fade-in {
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 0.8s ease forwards;
}

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Stagger animations for commitment cards */
.commitment-card:nth-child(1) { animation-delay: 0.05s; }
.commitment-card:nth-child(2) { animation-delay: 0.1s; }
.commitment-card:nth-child(3) { animation-delay: 0.15s; }
.commitment-card:nth-child(4) { animation-delay: 0.2s; }
.commitment-card:nth-child(5) { animation-delay: 0.25s; }
.commitment-card:nth-child(6) { animation-delay: 0.3s; }
.commitment-card:nth-child(7) { animation-delay: 0.35s; }
.commitment-card:nth-child(8) { animation-delay: 0.4s; }
.commitment-card:nth-child(9) { animation-delay: 0.45s; }
.commitment-card:nth-child(10) { animation-delay: 0.5s; }
.commitment-card:nth-child(11) { animation-delay: 0.55s; }

/* ==========================================
   RESPONSIVE DESIGN
   ========================================== */

@media (max-width: 768px) {
    .nav-links {
        display: none;
    }
    
    .nav-logo {
        font-size: 0.9rem;
    }
    
    .hero {
        min-height: 70vh;
        padding: var(--spacing-lg) var(--spacing-md);
    }
    
    .hero h1 {
        font-size: 2.2rem;
    }
    
    .hero-subtitle {
        font-size: 1.05rem;
    }
    
    .intro-text p {
        font-size: 1.05rem;
    }
    
    .commitment-card {
        padding: 1.5rem;
    }
    
    .commitment-card h3 {
        font-size: 1.2rem;
    }
    
    .accountability-box {
        padding: var(--spacing-md);
    }
    
    .accountability-box h3 {
        font-size: 1.4rem;
    }
    
    .accountability-text {
        font-size: 1.1rem;
    }
}

@media (max-width: 480px) {
    :root {
        --spacing-md: 1.5rem;
        --spacing-lg: 3rem;
        --spacing-xl: 4rem;
    }
    
    .hero h1 {
        font-size: 1.9rem;
    }
    
    .commitment-card {
        padding: 1.25rem;
    }
}

/* ==========================================
   ACCESSIBILITY IMPROVEMENTS
   ========================================== */

@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
}

:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
}
