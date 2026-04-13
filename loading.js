document.addEventListener('DOMContentLoaded', function() {
    const loadingSteps = document.querySelectorAll('.loading-step');
    const progressFill = document.getElementById('progress-fill');
    const progressPercentage = document.getElementById('progress-percentage');
    const loadingStatus = document.getElementById('loading-status'); // May be null if element is removed
    
    // Loading step configurations
    const stepConfigs = [
        {
            duration: 1800,
            status: 'Establishing secure connection...'
        },
        {
            duration: 2200,
            status: 'Parsing project data...'
        },
        {
            duration: 2500,
            status: 'Analyzing market conditions...'
        },
        {
            duration: 2000,
            status: 'Processing benchmark data...'
        },
        {
            duration: 1500,
            status: 'Finalizing simulation setup...'
        }
    ];
    
    let currentStep = 0;
    let totalProgress = 0;
    
    // Update overall progress
    function updateProgress(progress) {
        progressFill.style.width = `${progress}%`;
        if (progressPercentage) {
            progressPercentage.textContent = `${Math.round(progress)}%`;
        }
    }
    
    // Update loading status
    function updateStatus(status) {
        if (loadingStatus) {
            loadingStatus.textContent = status;
            
            // Add a subtle fade effect
            loadingStatus.style.opacity = '0.7';
            setTimeout(() => {
                loadingStatus.style.opacity = '1';
            }, 200);
        }
    }
    
    // Activate a loading step
    function activateStep(stepIndex) {
        if (stepIndex >= loadingSteps.length) return;
        
        const step = loadingSteps[stepIndex];
        const config = stepConfigs[stepIndex];
        
        // Hide all steps first
        loadingSteps.forEach(s => {
            s.classList.remove('active', 'completed');
        });
        
        // Activate current step with animation
        step.classList.add('active');
        
        // Update status
        updateStatus(config.status);
    }
    
    // Complete a loading step
    function completeStep(stepIndex) {
        if (stepIndex >= loadingSteps.length) return;
        
        const step = loadingSteps[stepIndex];
        
        // Update progress
        const progressPerStep = 100 / loadingSteps.length;
        totalProgress = (stepIndex + 1) * progressPerStep;
        updateProgress(totalProgress);
        
        // Add completion effect - make title briefly turn green
        const stepTitle = step.querySelector('.step-title');
        stepTitle.style.color = 'var(--loading-complete)';
        
        // Hide step after brief completion animation
        setTimeout(() => {
            step.classList.remove('active');
            step.classList.add('completed');
        }, 400);
    }
    
    // Process all loading steps sequentially
    function processLoadingSequence() {
        let stepIndex = 0;
        
        function processNextStep() {
            if (stepIndex >= loadingSteps.length) {
                // All steps completed
                finishLoading();
                return;
            }
            
            const config = stepConfigs[stepIndex];
            
            // Activate current step
            activateStep(stepIndex);
            
            // Simulate loading time with random variation
            const loadingTime = config.duration + (Math.random() * 800 - 400);
            
            setTimeout(() => {
                // Complete current step
                completeStep(stepIndex);
                
                // Move to next step after a brief pause
                setTimeout(() => {
                    stepIndex++;
                    processNextStep();
                }, 300);
                
            }, loadingTime);
        }
        
        // Start the sequence
        processNextStep();
    }
    
    // Handle loading completion
    function finishLoading() {
        updateStatus('Loading complete');
        updateProgress(100);
        
        // Add completion effects
        setTimeout(() => {
            if (loadingStatus) {
                loadingStatus.textContent = 'Launching simulation...';
            }
            
            // Fade out the loading screen
            const loadingContainer = document.getElementById('loading-screen');
            loadingContainer.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            loadingContainer.style.opacity = '0';
            loadingContainer.style.transform = 'scale(0.95)';
            
            // Redirect to main application
            setTimeout(() => {
                SitePaths.navigateToPage('app');
            }, 800);
            
        }, 1000);
    }
    
    // Initialize loading animation effects
    function initializeLoadingEffects() {
        // Add subtle hover effects to active step
        loadingSteps.forEach(step => {
            step.addEventListener('mouseenter', function() {
                if (this.classList.contains('active')) {
                    this.style.transform = 'translateY(0) scale(1.02)';
                    this.style.transition = 'all 0.3s ease';
                }
            });
            
            step.addEventListener('mouseleave', function() {
                if (this.classList.contains('active')) {
                    this.style.transform = 'translateY(0) scale(1)';
                }
            });
        });
    }
    
    // Add dynamic background effects
    function addDynamicEffects() {
        // Create floating particles effect
        createFloatingParticles();
        
        // Add subtle pulsing to the loading grid
        const loadingGrid = document.getElementById('loading-grid');
        if (loadingGrid) {
            loadingGrid.style.animationDelay = '0.5s';
        }
    }
    
    // Create floating particles for enhanced visual appeal
    function createFloatingParticles() {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles-container';
        particlesContainer.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 5;
        `;
        
        document.getElementById('loading-screen').appendChild(particlesContainer);
        
        // Create individual particles
        for (let i = 0; i < 8; i++) {
            const particle = document.createElement('div');
            particle.className = 'floating-particle';
            particle.style.cssText = `
                position: absolute;
                width: 3px;
                height: 3px;
                background: rgba(0, 191, 165, 0.6);
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: floatParticle ${8 + Math.random() * 4}s ease-in-out infinite;
                animation-delay: ${Math.random() * 2}s;
                box-shadow: 0 0 6px rgba(0, 191, 165, 0.4);
            `;
            
            particlesContainer.appendChild(particle);
        }
        
        // Add particle animation styles
        const style = document.createElement('style');
        style.textContent = `
            @keyframes floatParticle {
                0%, 100% {
                    transform: translate(0, 0) scale(1);
                    opacity: 0.6;
                }
                25% {
                    transform: translate(20px, -30px) scale(1.2);
                    opacity: 0.8;
                }
                50% {
                    transform: translate(-15px, -60px) scale(0.8);
                    opacity: 0.4;
                }
                75% {
                    transform: translate(30px, -30px) scale(1.1);
                    opacity: 0.7;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Add realistic loading variations
    function addLoadingVariations() {
        // Simulate network delays and processing variations
        stepConfigs.forEach((config, index) => {
            // Add random factors based on step complexity
            if (index === 2) { // Market search step
                config.duration += Math.random() * 1000; // More variable
            }
            if (index === 3) { // Benchmark data step
                config.duration += Math.random() * 800; // Slightly variable
            }
        });
    }
    
    // Initialize everything
    function initialize() {
        initializeLoadingEffects();
        addDynamicEffects();
        addLoadingVariations();
        
        // Start loading sequence after a brief delay
        setTimeout(() => {
            processLoadingSequence();
        }, 1500);
    }
    
    // Handle potential interruptions or errors
    window.addEventListener('beforeunload', function() {
        // Clean up any ongoing animations or timers if needed
    });
    
    // Start the loading process
    initialize();
}); 
