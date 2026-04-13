document.addEventListener('DOMContentLoaded', function() {
    const narrativeSteps = document.querySelectorAll('.narrative-step');
    const progressFill = document.getElementById('progress-fill');
    const progressPercentage = document.getElementById('progress-percentage');
    const progressLabel = document.getElementById('progress-label');
    const loadingStatus = document.getElementById('loading-status');
    const tensionIndicator = document.getElementById('tension-indicator');
    const sentimentScore = document.getElementById('sentiment-score');
    
    // Get actual sentiment from parent window if available
    let actualSentiment = 50;
    try {
        if (window.opener && window.opener.overallSentiment) {
            actualSentiment = Math.round(window.opener.overallSentiment);
        }
    } catch (e) {
        // Fallback to default if can't access parent
    }
    
    // Update sentiment display
    if (sentimentScore) {
        sentimentScore.textContent = `+${actualSentiment}%`;
    }
    
    // Dramatic narrative step configurations
    const narrativeConfigs = [
        {
            duration: 2500,
            status: 'Encrypting stakeholder feedback...',
            tensionMessage: 'Data transmission in progress...',
            progressLabel: 'Transmitting...'
        },
        {
            duration: 3200,
            status: 'Central Bank board convened - Decision pending...',
            tensionMessage: 'Board reviewing your case...',
            progressLabel: 'Under Review...'
        },
        {
            duration: 2800,
            status: 'Cross-checking international standards...',
            tensionMessage: 'Validation in progress...',
            progressLabel: 'Validating...'
        },
        {
            duration: 3500,
            status: 'AI algorithms calculating risk parameters...',
            tensionMessage: 'Computing risk factors...',
            progressLabel: 'Calculating...'
        },
        {
            duration: 2200,
            status: 'Personalizing loan offers for your profile...',
            tensionMessage: 'Customizing packages...',
            progressLabel: 'Generating...'
        },
        {
            duration: 2000,
            status: 'Governor reviewing final approval...',
            tensionMessage: 'Executive decision imminent...',
            progressLabel: 'Final Approval...'
        }
    ];
    
    let currentStep = 0;
    let totalProgress = 0;
    let isDramaticMoment = false;
    
    // Enhanced progress update with dramatic effects
    function updateProgress(progress, isInstant = false) {
        const duration = isInstant ? 0 : 1200;
        
        progressFill.style.transition = `width ${duration}ms cubic-bezier(0.23, 1, 0.32, 1)`;
        progressFill.style.width = `${progress}%`;
        
        // Animate percentage with dramatic effect
        animateNumber(progressPercentage, parseInt(progressPercentage.textContent) || 0, Math.round(progress), duration);
        
        // Add dramatic glow effect at key milestones
        if (progress >= 50 && progress < 52) {
            progressFill.style.boxShadow = '0 0 30px rgba(255, 215, 0, 0.8)';
        } else if (progress >= 85) {
            progressFill.style.boxShadow = '0 0 30px rgba(50, 205, 50, 0.8)';
        }
    }
    
    // Animate numbers with dramatic effect
    function animateNumber(element, startValue, endValue, duration) {
        const startTime = performance.now();
        
        function updateNumber(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentValue = Math.round(startValue + (endValue - startValue) * easeOutQuart);
            
            element.textContent = `${currentValue}%`;
            
            if (progress < 1) {
                requestAnimationFrame(updateNumber);
            }
        }
        
        requestAnimationFrame(updateNumber);
    }
    
    // Update loading status with dramatic transitions
    function updateStatus(status) {
        loadingStatus.style.opacity = '0';
        loadingStatus.style.transform = 'translateX(-50%) translateY(10px)';
        
        setTimeout(() => {
            loadingStatus.textContent = status;
            loadingStatus.style.opacity = '1';
            loadingStatus.style.transform = 'translateX(-50%) translateY(0)';
        }, 300);
    }
    
    // Update tension indicator
    function updateTensionIndicator(message) {
        const tensionText = tensionIndicator.querySelector('.tension-text');
        tensionText.style.opacity = '0';
        
        setTimeout(() => {
            tensionText.textContent = message;
            tensionText.style.opacity = '1';
        }, 200);
    }
    
    // Update progress label
    function updateProgressLabel(label) {
        progressLabel.style.opacity = '0';
        
        setTimeout(() => {
            progressLabel.textContent = label;
            progressLabel.style.opacity = '1';
        }, 150);
    }
    
    // Activate narrative step with dramatic entrance
    function activateNarrativeStep(stepIndex) {
        if (stepIndex >= narrativeSteps.length) return;
        
        const step = narrativeSteps[stepIndex];
        const config = narrativeConfigs[stepIndex];
        
        // Hide all steps first
        narrativeSteps.forEach(s => {
            s.classList.remove('active', 'completed');
        });
        
        // Add dramatic delay for tension building
        setTimeout(() => {
            step.classList.add('active');
            
            // Update all status elements
            updateStatus(config.status);
            updateTensionIndicator(config.tensionMessage);
            updateProgressLabel(config.progressLabel);
            
            // Add special effects for critical steps
            if (stepIndex === 1) { // Board review
                addBoardReviewEffects();
            } else if (stepIndex === 3) { // Risk calculation
                addRiskCalculationEffects();
            } else if (stepIndex === 5) { // Final approval
                addFinalApprovalEffects();
            }
            
        }, stepIndex === 1 ? 1000 : stepIndex === 5 ? 1500 : 300);
    }
    
    // Complete narrative step with dramatic exit
    function completeNarrativeStep(stepIndex) {
        if (stepIndex >= narrativeSteps.length) return;
        
        const step = narrativeSteps[stepIndex];
        
        // Update progress
        const progressPerStep = 100 / narrativeSteps.length;
        totalProgress = (stepIndex + 1) * progressPerStep;
        updateProgress(totalProgress);
        
        // Add completion effect
        const stepTitle = step.querySelector('.step-title');
        const stepDetail = step.querySelector('.step-detail .highlight');
        
        // Dramatic completion animation
        stepTitle.style.color = 'var(--approval-green)';
        stepTitle.style.textShadow = '0 2px 8px rgba(50, 205, 50, 0.5)';
        
        if (stepDetail) {
            stepDetail.classList.add('success');
            if (stepIndex === 5) { // Final step
                stepDetail.textContent = 'APPROVED!';
            }
        }
        
        // Hide step after completion animation
        setTimeout(() => {
            step.classList.remove('active');
            step.classList.add('completed');
        }, 600);
    }
    
    // Add special effects for board review step
    function addBoardReviewEffects() {
        // Create temporary dramatic overlay
        const overlay = document.createElement('div');
        overlay.className = 'board-review-overlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle, rgba(255, 215, 0, 0.1) 0%, transparent 70%);
            pointer-events: none;
            z-index: 5;
            animation: boardReviewPulse 2s ease-in-out;
        `;
        
        document.body.appendChild(overlay);
        
        setTimeout(() => {
            document.body.removeChild(overlay);
        }, 2000);
        
        // Add CSS for board review pulse
        if (!document.getElementById('board-review-style')) {
            const style = document.createElement('style');
            style.id = 'board-review-style';
            style.textContent = `
                @keyframes boardReviewPulse {
                    0%, 100% { opacity: 0; }
                    50% { opacity: 1; }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    // Add special effects for risk calculation step
    function addRiskCalculationEffects() {
        const processingElements = document.querySelectorAll('.highlight.processing');
        processingElements.forEach(el => {
            el.style.animation = 'processingIntense 1s ease-in-out infinite';
        });
        
        // Add intense processing animation
        if (!document.getElementById('processing-style')) {
            const style = document.createElement('style');
            style.id = 'processing-style';
            style.textContent = `
                @keyframes processingIntense {
                    0%, 100% { 
                        opacity: 1; 
                        transform: scale(1);
                        color: var(--dramatic-gold);
                    }
                    25% { 
                        opacity: 0.7; 
                        transform: scale(1.05);
                        color: var(--tension-color);
                    }
                    50% { 
                        opacity: 0.9; 
                        transform: scale(0.98);
                        color: var(--accent-color);
                    }
                    75% { 
                        opacity: 0.8; 
                        transform: scale(1.02);
                        color: var(--dramatic-gold);
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    // Add special effects for final approval step
    function addFinalApprovalEffects() {
        // Create celebration particles
        createCelebrationParticles();
        
        // Dramatic background change
        const container = document.getElementById('offers-loading-screen');
        container.style.background = `linear-gradient(135deg, 
            var(--secondary-color) 0%, 
            rgba(50, 205, 50, 0.2) 50%, 
            var(--primary-color) 100%
        )`;
        
        // Update tension indicator to success
        setTimeout(() => {
            updateTensionIndicator('SUCCESS! Offers incoming...');
            const tensionText = tensionIndicator.querySelector('.tension-text');
            tensionText.style.color = 'var(--approval-green)';
            
            const heartbeat = tensionIndicator.querySelector('.heartbeat');
            heartbeat.style.background = 'var(--approval-green)';
            heartbeat.style.animation = 'successHeartbeat 1s ease-in-out infinite';
        }, 500);
    }
    
    // Create celebration particles
    function createCelebrationParticles() {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'celebration-particles';
        particlesContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 8;
        `;
        
        document.body.appendChild(particlesContainer);
        
        // Create individual celebration particles
        for (let i = 0; i < 12; i++) {
            const particle = document.createElement('div');
            particle.className = 'celebration-particle';
            particle.style.cssText = `
                position: absolute;
                width: 6px;
                height: 6px;
                background: ${i % 3 === 0 ? 'var(--approval-green)' : i % 3 === 1 ? 'var(--dramatic-gold)' : 'var(--accent-color)'};
                border-radius: 50%;
                left: ${20 + Math.random() * 60}%;
                top: ${20 + Math.random() * 60}%;
                animation: celebrate ${2 + Math.random() * 2}s ease-out forwards;
                animation-delay: ${Math.random() * 1}s;
                box-shadow: 0 0 8px currentColor;
            `;
            
            particlesContainer.appendChild(particle);
        }
        
        // Add celebration animation
        if (!document.getElementById('celebration-style')) {
            const style = document.createElement('style');
            style.id = 'celebration-style';
            style.textContent = `
                @keyframes celebrate {
                    0% {
                        transform: scale(0) rotate(0deg);
                        opacity: 1;
                    }
                    50% {
                        transform: scale(1.5) rotate(180deg);
                        opacity: 0.8;
                    }
                    100% {
                        transform: scale(0.5) rotate(360deg);
                        opacity: 0;
                    }
                }
                @keyframes successHeartbeat {
                    0%, 100% {
                        transform: scale(1);
                        opacity: 1;
                    }
                    50% {
                        transform: scale(1.4);
                        opacity: 0.8;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        // Clean up particles after animation
        setTimeout(() => {
            if (document.body.contains(particlesContainer)) {
                document.body.removeChild(particlesContainer);
            }
        }, 5000);
    }
    
    // Process all narrative steps sequentially with dramatic timing
    function processNarrativeSequence() {
        let stepIndex = 0;
        
        function processNextStep() {
            if (stepIndex >= narrativeSteps.length) {
                // All steps completed
                finishDramaticLoading();
                return;
            }
            
            const config = narrativeConfigs[stepIndex];
            
            // Activate current step
            activateNarrativeStep(stepIndex);
            
            // Add dramatic variation to timing
            let loadingTime = config.duration;
            
            // Add tension to critical steps
            if (stepIndex === 1) { // Board review - extra suspense
                loadingTime += 1500;
            } else if (stepIndex === 5) { // Final approval - maximum drama
                loadingTime += 2000;
            }
            
            // Add random variation for realism
            loadingTime += (Math.random() * 600 - 300);
            
            setTimeout(() => {
                // Complete current step
                completeNarrativeStep(stepIndex);
                
                // Move to next step after dramatic pause
                setTimeout(() => {
                    stepIndex++;
                    processNextStep();
                }, stepIndex === 1 ? 800 : stepIndex === 5 ? 1200 : 400);
                
            }, loadingTime);
        }
        
        // Start the dramatic sequence
        processNextStep();
    }
    
    // Handle dramatic loading completion
    function finishDramaticLoading() {
        updateStatus('All offers successfully received!');
        updateTensionIndicator('Welcome to your loan offers!');
        updateProgressLabel('Complete!');
        updateProgress(100, true);
        
        // Final dramatic effects
        setTimeout(() => {
            loadingStatus.textContent = 'Redirecting to loan offers...';
            
            // Add final completion glow
            const container = document.getElementById('offers-loading-screen');
            container.style.transition = 'all 1s ease';
            container.style.filter = 'brightness(1.1)';
            
            // Fade out the loading screen
            setTimeout(() => {
                container.style.transition = 'opacity 1s ease, transform 1s ease';
                container.style.opacity = '0';
                container.style.transform = 'scale(0.98)';
                
                // Redirect to main application (details tab)
                setTimeout(() => {
                    if (window.opener) {
                        window.opener.focus();
                        window.opener.switchTab('details');
                        window.close();
                    } else {
                        SitePaths.navigateToPage('app', 'details');
                    }
                }, 1000);
                
            }, 1500);
            
        }, 2000);
    }
    
    // Initialize dramatic background effects
    function initializeDramaticEffects() {
        // Add dynamic transmission waves
        const transmissionWaves = document.getElementById('transmission-waves');
        if (transmissionWaves) {
            transmissionWaves.style.animationDelay = '1s';
        }
        
        // Add connection indicator progression
        const connectionIndicator = document.getElementById('connection-indicator');
        if (connectionIndicator) {
            setTimeout(() => {
                const connectionText = connectionIndicator.querySelector('.connection-text');
                connectionText.textContent = 'Secure connection established';
                connectionText.style.color = 'var(--approval-green)';
            }, 3000);
        }
    }
    
    // Handle potential interruptions
    window.addEventListener('beforeunload', function() {
        // Clean up any ongoing animations or timers if needed
    });
    
    // Initialize everything with dramatic timing
    function initialize() {
        initializeDramaticEffects();
        
        // Start narrative sequence after dramatic entrance
        setTimeout(() => {
            processNarrativeSequence();
        }, 2000);
    }
    
    // Start the dramatic loading process
    initialize();
}); 
