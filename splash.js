document.addEventListener('DOMContentLoaded', function() {
    const splashScreen = document.getElementById('splash-screen');
    const enterButton = document.getElementById('enter-button');
    const aboutButton = document.getElementById('about-button');
    const aboutModal = document.getElementById('about-modal');
    const modalClose = document.getElementById('modal-close');
    const logoText = document.querySelector('.logo-text h1');
    const spotlight = document.getElementById('spotlight');
    const financeGrid = document.getElementById('finance-grid');
    const loadingValue = document.getElementById('loading-value');
    
    // Development finance metrics for animation
    const financeMetrics = [
        'GDP Growth +4.2%',
        'FDI $2.8B',
        'Debt-GDP 52%',
        'Aid Flow $1.2B',
        'ROI 15.3%',
        'Grant $450M',
        'SDG Impact 8.4',
        'ESG Score 72',
        'Dev Index 0.72',
        'Risk Rate 3.2%'
    ];

    // Animate the spotlight
    function animateSpotlight() {
        // Random movement for spotlight
        setInterval(() => {
            const randomX = 50 + (Math.random() - 0.5) * 20;
            const randomY = 50 + (Math.random() - 0.5) * 20;
            spotlight.style.top = `${randomY}%`;
            spotlight.style.left = `${randomX}%`;
        }, 4000);
    }
    
    // SVG Logo Animation Sequence
    function animateSVGLogo() {
        // Logo subtle pulse effect
        const logoSvg = document.getElementById('logo-svg');
        setTimeout(() => {
            // Remove continuous animations for logo
            if (logoSvg) {
                logoSvg.style.animation = 'none';
            }
        }, 2000);
    }
    
    // Add subtle interactive effects to logo text
    function setupLogoTextEffects() {
        if (logoText) {
            const spans = logoText.querySelectorAll('span');
            
            spans.forEach((span) => {
                // Add subtle hover animation
                span.addEventListener('mouseover', function() {
                    this.style.transform = 'translateY(-2px)';
                    this.style.textShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
                });
                
                span.addEventListener('mouseout', function() {
                    this.style.transform = '';
                    this.style.textShadow = '';
                });
            });
        }
        
        // Add hover effect to logo image
        const logoImg = document.querySelector('.logo-text img');
        if (logoImg) {
            logoImg.addEventListener('mouseover', function() {
                this.style.transform = 'translateY(-8px) scale(1.05)';
                this.style.filter = 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.5)) brightness(1.2)';
                this.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            });
            
            logoImg.addEventListener('mouseout', function() {
                this.style.transform = '';
                this.style.filter = 'drop-shadow(0 5px 15px rgba(0, 0, 0, 0.3))';
                this.style.transition = 'all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1)';
            });
        }
    }
    
    // Add interactive hover effects to cards
    function setupCardInteractions() {
        const dualityItems = document.querySelectorAll('.duality-item');
        
        dualityItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) scale(1.03)';
                this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
                this.style.background = 'rgba(255, 255, 255, 0.08)';
                this.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                this.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = '';
                this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.1)';
                this.style.background = 'rgba(255, 255, 255, 0.05)';
                this.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                this.style.transition = 'all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1)';
            });
        });
        
        // Add hover effects to feature items in modal
        const featureItems = document.querySelectorAll('.feature-item');
        
        featureItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
                this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
                this.style.background = 'rgba(255, 255, 255, 0.08)';
                this.style.borderColor = 'rgba(255, 255, 255, 0.15)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = '';
                this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                this.style.background = 'rgba(255, 255, 255, 0.06)';
                this.style.borderColor = 'rgba(255, 255, 255, 0.08)';
            });
        });
    }
    
    // Enhanced button effects
    function setupButtonEffects() {
        // Add hover effects to buttons
        const buttons = document.querySelectorAll('.action-button');
        
        buttons.forEach(button => {
            button.addEventListener('mouseenter', function() {
                // Add glow effect
                const buttonGlow = this.querySelector('.button-glow');
                if (buttonGlow) {
                    buttonGlow.style.opacity = '1';
                }
                
                if (this.classList.contains('enter-button')) {
                    this.style.boxShadow = '0 10px 30px rgba(0, 191, 165, 0.3)';
                } else {
                    this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
                }
                
                // Animate the button content and icon
                const buttonContent = this.querySelector('.button-content');
                const buttonIcon = this.querySelector('.button-icon');
                
                if (buttonContent) buttonContent.style.transform = 'translateX(-4px)';
                if (buttonIcon) buttonIcon.style.transform = 'translateX(8px)';
                
                // Add transform
                this.style.transform = 'translateY(-5px) scale(1.03)';
                this.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            });
            
            button.addEventListener('mouseleave', function() {
                // Reset styles
                const buttonGlow = this.querySelector('.button-glow');
                if (buttonGlow) {
                    buttonGlow.style.opacity = '0';
                }
                
                if (this.classList.contains('enter-button')) {
                    this.style.boxShadow = '0 6px 20px rgba(0, 191, 165, 0.2)';
                } else {
                    this.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.1)';
                }
                
                // Reset animations
                const buttonContent = this.querySelector('.button-content');
                const buttonIcon = this.querySelector('.button-icon');
                
                if (buttonContent) buttonContent.style.transform = '';
                if (buttonIcon) buttonIcon.style.transform = '';
                
                // Reset transform
                this.style.transform = '';
                this.style.transition = 'all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1)';
            });
        });
    }
    
    // Create finance grid
    function createFinanceGrid() {
        if (!financeGrid) return;
        financeGrid.innerHTML = '';
        
        const totalCells = 400;
        const metricFrequency = 0.15;
        
        for (let i = 0; i < totalCells; i++) {
            const cell = document.createElement('div');
            cell.className = 'finance-cell';
            
            if (Math.random() < metricFrequency) {
                const metric = document.createElement('div');
                metric.className = 'finance-metric';
                metric.textContent = financeMetrics[Math.floor(Math.random() * financeMetrics.length)];
                cell.appendChild(metric);
            }
            
            financeGrid.appendChild(cell);
        }
    }

    // Animate finance grid
    function animateFinanceGrid() {
        if (!financeGrid) return;
        
        const cells = financeGrid.querySelectorAll('.finance-cell');
        const metrics = financeGrid.querySelectorAll('.finance-metric');
        
        // Animate cells in a wave pattern from center
        cells.forEach((cell, index) => {
            const row = Math.floor(index / 20);
            const col = index % 20;
            const centerRow = 10;
            const centerCol = 10;
            const distance = Math.sqrt(
                Math.pow(row - centerRow, 2) + 
                Math.pow(col - centerCol, 2)
            );
            const delay = distance * 40; // Faster wave effect
            
            setTimeout(() => {
                cell.classList.add('animate');
            }, 400 + delay); // Start earlier in the sequence
        });

        // Animate metrics with a cascade effect
        metrics.forEach((metric, index) => {
            const row = Math.floor(index / 20);
            const col = index % 20;
            const centerRow = 10;
            const centerCol = 10;
            const distance = Math.sqrt(
                Math.pow(row - centerRow, 2) + 
                Math.pow(col - centerCol, 2)
            );
            const delay = distance * 50 + Math.random() * 200; // Add slight randomness
            
            setTimeout(() => {
                metric.classList.add('animate');
            }, 800 + delay); // Start after cells begin animating
        });
    }

    // Enhanced loading animation
    function updateLoadingProgress(progress) {
        const loadingProgress = document.getElementById('loading-progress');
        loadingProgress.style.width = `${progress}%`;
        loadingValue.textContent = `${Math.round(progress)}%`;
        loadingValue.classList.add('visible');
    }

    // Button click handlers
    function transitionToMainApp() {
        // Fade out the splash screen
        const splashScreen = document.getElementById('splash-screen');
        splashScreen.style.opacity = '0';
        splashScreen.style.transition = 'opacity 0.5s ease';

        // Preload the loading screen
        const loadingScreen = new XMLHttpRequest();
        loadingScreen.open('GET', 'loading.html', true);
        loadingScreen.onload = function() {
            if (loadingScreen.status === 200) {
                // After fade out, redirect to loading screen
                setTimeout(() => {
                    window.location.href = 'loading.html';
                }, 500);
            }
        };
        loadingScreen.send();
    }

    function setupButtonHandlers() {
        if (enterButton) {
            enterButton.addEventListener('click', () => {
                transitionToMainApp();
            });
        }

        if (aboutButton) {
            aboutButton.addEventListener('click', () => {
                aboutModal.classList.add('visible');
            });
        }

        if (modalClose) {
            modalClose.addEventListener('click', () => {
                aboutModal.classList.remove('visible');
            });
        }

        // Close modal when clicking on backdrop
        if (aboutModal) {
            aboutModal.addEventListener('click', (e) => {
                if (e.target === aboutModal) {
                    aboutModal.classList.remove('visible');
                }
            });
        }
    }
    
    // Function to add triangle float animation
    function addTriangleFloatAnimation() {
        // This function is a placeholder for potential future triangle animation
        // If logo contains SVG triangles, you can animate them here
    }
    
    // Start animation sequence
    function startAnimationSequence() {
        createFinanceGrid();
        animateFinanceGrid();
        setupButtonHandlers();
    }

    // Finish loading sequence
    function finishLoading() {
        // Fade out finance metrics
        const metrics = document.querySelectorAll('.finance-metric');
        metrics.forEach(metric => {
            metric.style.transition = 'opacity 0.5s ease';
            metric.style.opacity = '0';
        });
    }
    
    // Initialize the splash screen
    function initializeSplash() {
        // Set up all interactive elements
        setupLogoTextEffects();
        setupCardInteractions();
        setupButtonEffects();
        
        // Trigger the main animation sequence
        startAnimationSequence();
    }
    
    // Window resize handler for responsive adjustments
    window.addEventListener('resize', function() {
        // Any responsive adjustments can be made here
    });
    
    // Initialize the splash screen
    initializeSplash();
});