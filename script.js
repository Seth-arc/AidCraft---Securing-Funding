// AidData Training Demo
// Enhanced JavaScript with improved user experience

// Utility function to debounce function calls
function debounce(func, wait = 300) {
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

// Data structure for loan options remains unchanged
const loanData = [
    {
        id: 1,
        lender: "Eastern Development Bank (EDB)",
        name: "Standard Infrastructure Loan",
        amount: 300000000,
        interestRateType: "Fixed",
        interestRate: 3.2,
        maturity: 20,
        gracePeriod: 5,
        repaymentFrequency: "Semi-annual",
        managementFee: 0.5,
        commitmentFee: 0.25,
        insuranceFee: 1.0,
        currency: "USD",
        repaymentProfile: "Equal Principal",
        totalUsers: 2854,
        sector: "Transport",
        nationalClients: 45,
        discountRate: 5.2,
        repaymentType: "Equal Installments",
        escrowAccount: true,
        revenuePercentage: 35,
        yearEstablished: 1985,
        creditRating: "AAA",
        disbursementPeriod: "5 years",
        prepaymentPenalty: "1.5% of prepaid amount",
        technicalAssistance: true,
        environmentalRequirements: "Full EIA required",
        procurementType: "International Competitive Bidding",
        description: "Standard EDB infrastructure loan with moderate terms offering market-comparable rates for transport infrastructure. Features include:" +
            "• Established in 1985 with strong track record in infrastructure financing" +
            "• Regional presence in 15 Asian countries" +
            "• AAA credit rating from major agencies" +
            "• Specialized port development expertise with 25+ successful projects" +
            "• Technical assistance package worth $5M included" +
            "• Environmental and social safeguards support" +
            "• Procurement flexibility with international competitive bidding" +
            "• Currency hedging options available" +
            "• Performance monitoring system included" +
            "• Capacity building program for port staff" +
            "• Project preparation facility available"
    },
    {
        id: 2,
        lender: "Global Infrastructure Fund (GIF)",
        name: "Coastal Development Program",
        amount: 300000000,
        interestRateType: "Fixed",
        interestRate: 2.1,
        maturity: 25,
        gracePeriod: 7,
        repaymentFrequency: "Annual",
        managementFee: 0.75,
        commitmentFee: 0.15,
        insuranceFee: 0.8,
        currency: "USD",
        repaymentProfile: "Equal Installments",
        totalUsers: 2960,
        sector: "Transport",
        nationalClients: 78,
        discountRate: 4.8,
        repaymentType: "Equal Installments",
        escrowAccount: true,
        revenuePercentage: 40,
        yearEstablished: 1992,
        creditRating: "AA+",
        disbursementPeriod: "7 years",
        prepaymentPenalty: "None",
        technicalAssistance: true,
        environmentalRequirements: "Enhanced EIA with climate resilience",
        procurementType: "Flexible with local preference",
        description: "Concessional finance program specifically designed for coastal infrastructure with favorable terms and extended grace period. Features include:" +
            "• Global leader in maritime infrastructure financing since 1992" +
            "• Portfolio of 150+ ports and coastal projects worldwide" +
            "• Integrated climate resilience components" +
            "• Free technical advisory services worth $2M" +
            "• Capacity building program for port authority staff" +
            "• Green port certification support" +
            "• Access to global best practices network" +
            "• Flexible disbursement schedule" +
            "• Climate adaptation funding available" +
            "• Marine ecosystem protection support" +
            "• Coastal community development program"
    },
    {
        id: 3,
        lender: "Northland Export Credit Agency (NECA)",
        name: "Export Buyer's Credit",
        amount: 300000000,
        interestRateType: "Variable",
        interestRate: 4.0,
        referenceRate: "LIBOR",
        margin: 2.75,
        maturity: 15,
        gracePeriod: 3,
        repaymentFrequency: "Quarterly",
        managementFee: 1.0,
        commitmentFee: 0.5,
        insuranceFee: 1.25,
        currency: "USD",
        repaymentProfile: "Equal Principal",
        totalUsers: 1870,
        sector: "Transport",
        nationalClients: 32,
        discountRate: 5.5,
        repaymentType: "Equal Principal",
        escrowAccount: false,
        revenuePercentage: 45,
        yearEstablished: 1978,
        creditRating: "A+",
        disbursementPeriod: "3 years",
        prepaymentPenalty: "2% of prepaid amount",
        technicalAssistance: true,
        environmentalRequirements: "Basic EIA required",
        procurementType: "Tied to Northland suppliers",
        description: "Export buyer's credit tied to equipment purchases from Northland with competitive commercial terms. Features include:" +
            "• Direct access to premium port equipment manufacturers" +
            "• Fast-track procurement process" +
            "• Equipment maintenance support package" +
            "• Staff training programs included" +
            "• Insurance coverage for equipment" +
            "• Spare parts guarantee for 10 years" +
            "• 24/7 technical support" +
            "• Performance guarantee on equipment" +
            "• Equipment upgrade options" +
            "• Local service center establishment" +
            "• Operator training program"
    },
    {
        id: 4,
        lender: "Southern Regional Bank (SRB)",
        name: "Regional Integration Facility",
        amount: 300000000,
        interestRateType: "Fixed",
        interestRate: 2.8,
        maturity: 22,
        gracePeriod: 6,
        repaymentFrequency: "Semi-annual",
        managementFee: 0.4,
        commitmentFee: 0.2,
        insuranceFee: 0.9,
        currency: "USD",
        repaymentProfile: "Equal Installments",
        totalUsers: 2340,
        sector: "Transport",
        nationalClients: 56,
        discountRate: 5.0,
        repaymentType: "Equal Installments",
        escrowAccount: true,
        revenuePercentage: 38,
        yearEstablished: 1990,
        creditRating: "AA",
        disbursementPeriod: "6 years",
        prepaymentPenalty: "1% of prepaid amount",
        technicalAssistance: true,
        environmentalRequirements: "Regional EIA required",
        procurementType: "Regional competitive bidding",
        description: "Regional integration infrastructure facility with favorable terms for projects enhancing regional connectivity. Features include:" +
            "• Regional economic integration support" +
            "• Cross-border trade facilitation expertise" +
            "• Regional environmental impact assessment" +
            "• Multi-country project coordination" +
            "• Regional trade analysis support" +
            "• Customs modernization assistance" +
            "• Regional logistics planning" +
            "• Trade policy advisory services" +
            "• Regional connectivity studies" +
            "• Border facility optimization" +
            "• Regional capacity building"
    },
    {
        id: 5,
        lender: "Western Commercial Bank Consortium (WCBC)",
        name: "Syndicated Commercial Loan",
        amount: 300000000,
        interestRateType: "Variable",
        interestRate: 5.2,
        referenceRate: "SOFR",
        margin: 3.75,
        maturity: 12,
        gracePeriod: 2,
        repaymentFrequency: "Quarterly",
        managementFee: 1.5,
        commitmentFee: 0.75,
        insuranceFee: 1.5,
        currency: "USD",
        repaymentProfile: "Equal Principal",
        totalUsers: 1580,
        sector: "Transport",
        nationalClients: 28,
        discountRate: 6.0,
        repaymentType: "Equal Principal",
        escrowAccount: false,
        revenuePercentage: 50,
        yearEstablished: 1995,
        creditRating: "A",
        disbursementPeriod: "2 years",
        prepaymentPenalty: "2.5% of prepaid amount",
        technicalAssistance: false,
        environmentalRequirements: "Basic assessment",
        procurementType: "No restrictions",
        description: "Syndicated commercial loan facility with standard market terms and relatively shorter maturity. Features include:" +
            "• Rapid approval process (60 days)" +
            "• Flexible prepayment options" +
            "• No procurement restrictions" +
            "• Multiple currency options" +
            "• Interest rate hedging available" +
            "• Refinancing possibility after 5 years" +
            "• No environmental assessment required" +
            "• Minimal reporting requirements" +
            "• Multi-currency drawdown option" +
            "• Revolving facility option" +
            "• Market-based pricing"
    },
    {
        id: 6,
        lender: "Azuria National Development Bank (ENDB)",
        name: "Domestic Financing Option",
        amount: 300000000,
        interestRateType: "Fixed",
        interestRate: 3.5,
        maturity: 18,
        gracePeriod: 4,
        repaymentFrequency: "Semi-annual",
        managementFee: 0.3,
        commitmentFee: 0.1,
        insuranceFee: 0.7,
        currency: "USD",
        repaymentProfile: "Equal Installments",
        totalUsers: 2105,
        sector: "Transport",
        nationalClients: 89,
        discountRate: 5.3,
        repaymentType: "Equal Installments",
        escrowAccount: true,
        revenuePercentage: 42,
        yearEstablished: 1980,
        creditRating: "AA-",
        disbursementPeriod: "4 years",
        prepaymentPenalty: "0.5% of prepaid amount",
        technicalAssistance: true,
        environmentalRequirements: "National standards compliance",
        procurementType: "National competitive bidding",
        description: "Domestic financing option with sovereign guarantee, offering competitive terms with reduced fees. Features include:" +
            "• Local currency financing available" +
            "• Fast-track approval process" +
            "• Local content preference" +
            "• Direct government oversight" +
            "• Integration with national development plan" +
            "• Local contractor support program" +
            "• Domestic capacity building focus" +
            "• Simplified procurement procedures" +
            "• Government coordination support" +
            "• Local employment requirements" +
            "• National standards compliance"
    }
];

// Constants for calculations
const DISCOUNT_RATE = 0.10; // 10% discount rate for NPV calculations
const DAYS_IN_YEAR = 365;

// Chart drawing constants
const chartColors = {
    text: '#333333',
    grid: 'rgba(1, 71, 49, 0.1)',
    background: '#ffffff'
};

// Add this at the top with other constants
const chartFontFamily = 'Roboto, sans-serif';

// Utility functions for financial calculations remain unchanged but adding a helper function for animations
function calculateNPV(cashFlows, rate = DISCOUNT_RATE) {
    return cashFlows.reduce((npv, cashFlow, year) => {
        return npv + (cashFlow / Math.pow(1 + rate, year));
    }, 0);
}

function calculateGrantElement(loan) {
    // Calculate face value (loan amount)
    const faceValue = loan.amount;
    
    // Generate repayment schedule
    const schedule = generateRepaymentSchedule(loan);
    
    // Calculate present value of future payments
    const cashFlows = [loan.amount]; // Initial inflow
    for (let i = 0; i < schedule.length; i++) {
        cashFlows.push(-schedule[i].totalPayment); // Outflows are negative
    }
    
    const npv = calculateNPV(cashFlows);
    
    // Grant element = (face value - PV of future payments) / face value
    const grantElement = (faceValue - (npv - faceValue)) / faceValue * 100;
    
    return parseFloat(grantElement.toFixed(2));
}

function calculateAllInCost(loan) {
    // Generate repayment schedule
    const schedule = generateRepaymentSchedule(loan);
    
    // Sum up all payments (principal + interest + fees)
    let totalPayments = 0;
    for (const payment of schedule) {
        totalPayments += payment.totalPayment;
    }
    
    // Initial fees
    const initialFees = (loan.managementFee / 100 * loan.amount) + 
                        (loan.commitmentFee / 100 * loan.amount) +
                        (loan.insuranceFee / 100 * loan.amount);
    
    totalPayments += initialFees;
    
    // All-in cost as percentage of loan amount
    const allInCost = (totalPayments - loan.amount) / loan.amount * 100;
    
    return parseFloat(allInCost.toFixed(2));
}

function calculateTotalRepayment(loan) {
    const schedule = generateRepaymentSchedule(loan);
    let totalPayment = 0;
    
    for (const payment of schedule) {
        totalPayment += payment.totalPayment;
    }
    
    // Add initial fees
    const initialFees = (loan.managementFee / 100 * loan.amount) + 
                       (loan.commitmentFee / 100 * loan.amount) +
                       (loan.insuranceFee / 100 * loan.amount);
    
    totalPayment += initialFees;
    
    return totalPayment;
}

function calculateNPVOfRepayment(loan) {
    const schedule = generateRepaymentSchedule(loan);
    const cashFlows = [];
    
    // Initial fees (paid at time 0)
    const initialFees = (loan.managementFee / 100 * loan.amount) + 
                       (loan.commitmentFee / 100 * loan.amount) +
                       (loan.insuranceFee / 100 * loan.amount);
    
    cashFlows.push(initialFees);
    
    // Add all future payments
    for (const payment of schedule) {
        cashFlows.push(payment.totalPayment);
    }
    
    const npv = calculateNPV(cashFlows);
    
    return parseFloat(npv.toFixed(2));
}

function generateRepaymentSchedule(loan) {
    const schedule = [];
    let outstandingBalance = loan.amount;
    const totalYears = loan.maturity;
    const gracePeriod = loan.gracePeriod;
    const repaymentYears = totalYears - gracePeriod;
    
    // Calculate annual principal payment after grace period
    const annualPrincipalPayment = loan.amount / repaymentYears;
    
    for (let year = 1; year <= totalYears; year++) {
        const isGracePeriod = year <= gracePeriod;
        const principalPayment = isGracePeriod ? 0 : annualPrincipalPayment;
        
        // Calculate interest based on rate type
        let interestPayment;
        if (loan.interestRateType === 'Fixed') {
            interestPayment = outstandingBalance * (loan.interestRate / 100);
        } else {
            // For floating rate, use reference rate + margin
            interestPayment = outstandingBalance * ((loan.referenceRate + loan.margin) / 100);
        }
        
        // Calculate fees
        const fees = calculateAnnualFees(loan, outstandingBalance, year === 1);
        
        // Calculate total payment and update outstanding balance
        const totalPayment = principalPayment + interestPayment + fees;
        outstandingBalance -= principalPayment;
        
        schedule.push({
            year,
            principalPayment,
            interestPayment,
            fees,
            totalPayment,
            outstandingBalance,
            gracePeriod: loan.gracePeriod
        });
    }
    
    return schedule;
}

function calculateAnnualFees(loan, outstandingBalance, isFirstYear) {
    let fees = 0;
    
    // Add management fee (one-time, first year only)
    if (isFirstYear) {
        fees += (loan.managementFee / 100) * loan.amount;
    }
    
    // Add commitment fee on undrawn balance (during grace period)
    if (loan.commitmentFee) {
        fees += (loan.commitmentFee / 100) * outstandingBalance;
    }
    
    // Add insurance fee if applicable
    if (loan.insuranceFee) {
        fees += (loan.insuranceFee / 100) * outstandingBalance;
    }
    
    return fees;
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

function formatPercentage(value) {
    return new Intl.NumberFormat('en-US', {
        style: 'percent',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(value / 100);
}

// Calculate all metrics for loans
function calculateLoanMetrics() {
    loanData.forEach(loan => {
        loan.grantElement = calculateGrantElement(loan);
        loan.npvOfRepayment = calculateNPVOfRepayment(loan);
        loan.allInCost = calculateAllInCost(loan);
        loan.totalRepayment = calculateTotalRepayment(loan);
    });
}

// Enhanced UI Interaction Handlers
function setupTabNavigation() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    function switchTab(targetId) {
        // Remove active class from all tabs and contents
        tabButtons.forEach(button => button.classList.remove('active'));
        tabContents.forEach(content => {
            if (content.classList.contains('active')) {
                content.classList.add('fade-out');
                setTimeout(() => {
                    content.classList.remove('active', 'fade-out');
                }, 200);
            }
        });

        // Add active class to target button and content
        const targetButton = document.querySelector(`[data-tab="${targetId}"]`);
        const targetContent = document.getElementById(targetId);

        if (targetButton && targetContent) {
            targetButton.classList.add('active');
            
            setTimeout(() => {
                targetContent.classList.add('active');
                
                // Animate content elements
                animateTabContent(targetContent);
                
                // Update progress bar
                updateProgressBar(targetId);
            }, 200);
        }
    }

    function animateTabContent(targetContent) {
        // Animate table rows if present
        const tableRows = targetContent.querySelectorAll('tbody tr');
        tableRows.forEach((row, index) => {
            setTimeout(() => {
                row.style.opacity = '1';
                row.style.transform = 'translateY(0)';
            }, index * 30);
        });
        
        // Animate chart container if present
        const chartContainer = targetContent.querySelector('.chart-container');
        if (chartContainer) {
            setTimeout(() => {
                chartContainer.style.opacity = '1';
                chartContainer.style.transform = 'translateY(0)';
            }, 100);
        }
        
        // Animate form groups if present
        const formGroups = targetContent.querySelectorAll('.form-group');
        formGroups.forEach((group, index) => {
            setTimeout(() => {
                group.style.opacity = '1';
                group.style.transform = 'translateY(0)';
            }, 50 + index * 50);
        });
    }

    // Set up tab button click handlers
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-tab');
            switchTab(targetId);
        });
    });

    // Export switchTab function for use by other components
    window.switchTab = switchTab;
}

// Add this after the existing setupTabNavigation function
function validateTabProgress(currentTab, targetTab) {
    // Define tab order and requirements
    const tabOrder = [
        'overview',
        'details',
        'comparison',
        'charts',
        'recommendation'
    ];

    // Get current and target indices
    const currentIndex = tabOrder.indexOf(currentTab);
    const targetIndex = tabOrder.indexOf(targetTab);

    // Allow backward navigation
    if (targetIndex < currentIndex) {
        return true;
    }

    // Validate forward progression
    switch (currentTab) {
        case 'overview':
            // Always allow moving to details after overview
            return true;
        case 'details':
            // Can only move to comparison if loan analysis is complete
            return targetTab === 'comparison' && checkLoanAnalysisComplete();
        case 'comparison':
            // Can only move to charts if metrics review is complete
            return targetTab === 'charts' && checkMetricsReviewComplete();
        case 'charts':
            // Can only move to recommendation if visual analysis is complete
            return targetTab === 'recommendation' && checkVisualsAnalysisComplete();
        default:
            return false;
    }
}

// Helper functions to check completion status
function checkLoanAnalysisComplete() {
    // Check if user has completed required loan analysis steps
    const progressItems = document.querySelectorAll('#details .progress-item');
    return Array.from(progressItems).every(item => item.dataset.status === 'completed');
}

function checkMetricsReviewComplete() {
    // Check if metrics review steps are complete
    const progressItems = document.querySelectorAll('#comparison .progress-item');
    return Array.from(progressItems).every(item => item.dataset.status === 'completed');
}

function checkVisualsAnalysisComplete() {
    // Check if visual analysis steps are complete
    const progressItems = document.querySelectorAll('#charts .progress-item');
    return Array.from(progressItems).every(item => item.dataset.status === 'completed');
}

function setupLoanComparison() {
    const loanSelect = document.getElementById('loan-select');
    if (!loanSelect) return;
    
    // Populate loan selector
    loanSelect.innerHTML = '<option value="">Choose a loan...</option>';
    loanData.forEach(loan => {
        const option = document.createElement('option');
        option.value = loan.id;
        option.textContent = `${loan.lender} - ${loan.name}`;
        loanSelect.appendChild(option);
    });

    // Handle loan selection
    loanSelect.addEventListener('change', function() {
        const selectedLoanId = parseInt(this.value);
        if (!selectedLoanId) {
            clearCalculations();
            return;
        }
        
        const selectedLoan = loanData.find(loan => loan.id === selectedLoanId);
        if (!selectedLoan) return;
        
        updateLoanCalculations(selectedLoan);
    });
    
    // Select first loan by default for better UX
    if (loanData.length > 0) {
        loanSelect.value = loanData[0].id;
        const event = new Event('change');
        loanSelect.dispatchEvent(event);
    }
}

function clearCalculations() {
    // Clear repayment schedule
    document.getElementById('repayment-body').innerHTML = '';

    // Clear cost breakdown
    document.getElementById('principal-amount').textContent = '-';
    document.getElementById('total-interest').textContent = '-';
    document.getElementById('total-fees').textContent = '-';
    document.getElementById('total-cost').textContent = '-';
        
    // Clear grant element details
    document.getElementById('face-value').textContent = '-';
    document.getElementById('pv-payments').textContent = '-';
    document.getElementById('grant-element-amount').textContent = '-';
    document.getElementById('grant-element-percentage').textContent = '-';
        
    // Clear NPV details
    document.getElementById('discount-rate').textContent = '-';
    document.getElementById('npv-inflows').textContent = '-';
    document.getElementById('npv-outflows').textContent = '-';
    document.getElementById('net-present-value').textContent = '-';
}

function updateLoanCalculations(loan) {
    // Generate repayment schedule
    const schedule = generateRepaymentSchedule(loan);
    
    // Update repayment schedule table
    updateRepaymentSchedule(schedule);
    
    // Calculate and update cost breakdown
    updateCostBreakdown(loan, schedule);
    
    // Calculate and update grant element
    updateGrantElement(loan, schedule);
    
    // Calculate and update NPV analysis
    updateNPVAnalysis(loan, schedule);
}

function updateRepaymentSchedule(schedule) {
    const tbody = document.getElementById('repayment-body');
    tbody.innerHTML = '';

    schedule.forEach((payment, index) => {
                const row = document.createElement('tr');
        if (index < payment.gracePeriod) {
            row.classList.add('grace-period');
        }
        if (index >= schedule.length - 5) {
            row.classList.add('final-period');
        }
                
                row.innerHTML = `
            <td>${payment.year}</td>
            <td>${formatCurrency(payment.principalPayment)}</td>
            <td>${formatCurrency(payment.interestPayment)}</td>
            <td>${formatCurrency(payment.fees)}</td>
            <td>${formatCurrency(payment.totalPayment)}</td>
            <td>${formatCurrency(payment.outstandingBalance)}</td>
        `;
        tbody.appendChild(row);
    });
}

function updateCostBreakdown(loan, schedule) {
    const totalPrincipal = loan.amount;
    const totalInterest = schedule.reduce((sum, payment) => sum + payment.interestPayment, 0);
    const totalFees = (loan.managementFee + loan.commitmentFee + loan.insuranceFee) / 100 * loan.amount +
                     schedule.reduce((sum, payment) => sum + payment.fees, 0);
    const totalCost = totalPrincipal + totalInterest + totalFees;

    document.getElementById('principal-amount').textContent = formatCurrency(totalPrincipal);
    document.getElementById('total-interest').textContent = formatCurrency(totalInterest);
    document.getElementById('total-fees').textContent = formatCurrency(totalFees);
    document.getElementById('total-cost').textContent = formatCurrency(totalCost);
}

function updateGrantElement(loan, schedule) {
    const faceValue = loan.amount;
    const cashFlows = [loan.amount]; // Initial inflow
    
    schedule.forEach(payment => {
        cashFlows.push(-(payment.principalPayment + payment.interestPayment + payment.fees));
            });
            
    const npv = calculateNPV(cashFlows);
    const grantElementAmount = faceValue - (npv - faceValue);
    const grantElementPercentage = (grantElementAmount / faceValue) * 100;

    document.getElementById('face-value').textContent = formatCurrency(faceValue);
    document.getElementById('pv-payments').textContent = formatCurrency(npv - faceValue);
    document.getElementById('grant-element-amount').textContent = formatCurrency(grantElementAmount);
    document.getElementById('grant-element-percentage').textContent = formatPercentage(grantElementPercentage);
}

function updateNPVAnalysis(loan, schedule) {
    const discountRate = DISCOUNT_RATE;
            
    // Calculate inflows and outflows
    const inflows = [loan.amount];
    const outflows = schedule.map(payment => 
        payment.principalPayment + payment.interestPayment + payment.fees
    );
    
    const npvInflows = calculateNPV(inflows);
    const npvOutflows = calculateNPV(outflows.map(o => -o));
    const netPresentValue = npvInflows + npvOutflows;

    document.getElementById('discount-rate').textContent = formatPercentage(discountRate * 100);
    document.getElementById('npv-inflows').textContent = formatCurrency(npvInflows);
    document.getElementById('npv-outflows').textContent = formatCurrency(-npvOutflows);
    document.getElementById('net-present-value').textContent = formatCurrency(netPresentValue);
}

function setupLoanDetails() {
    const loanDetailsSelect = document.getElementById('details-loan-select');
    if (!loanDetailsSelect) {
        console.error('Loan details select element not found');
        return;
    }

    loanDetailsSelect.innerHTML = '<option value="">Select a loan</option>';
    
    loanData.forEach(loan => {
        const option = document.createElement('option');
        option.value = loan.id;
        option.textContent = `${loan.lender} - ${loan.name}`;
        loanDetailsSelect.appendChild(option);
    });
    
    loanDetailsSelect.addEventListener('change', function(e) {
        e.preventDefault(); // Prevent default behavior
        const selectedLoanId = parseInt(this.value);
        if (!selectedLoanId) return;
        
        const selectedLoan = loanData.find(loan => loan.id === selectedLoanId);
        if (!selectedLoan) return;
        
        const loanDetails = document.getElementById('selected-loan-details');
        
        // Fade out without scrolling
        loanDetails.style.opacity = '0.5';
        
        setTimeout(() => {
            // Update content
            displayLoanDetails(selectedLoan);
            
            // Fade in without scrolling
            loanDetails.style.opacity = '1';
        }, 300);
    });

    // Select first loan by default for better UX
    if (loanData.length > 0) {
        loanDetailsSelect.value = loanData[0].id;
        const event = new Event('change');
        loanDetailsSelect.dispatchEvent(event);
    }
}

function displayLoanDetails(loan) {
    if (!loan) {
        console.error('No loan data provided to displayLoanDetails');
        return;
    }

    // Helper function to get initials from lender name
    function getLenderInitials(lenderName) {
        return lenderName
            .split('(')[0] // Remove anything in parentheses
            .trim()
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase();
    }

    const loanTitle = document.getElementById('loan-title');
    const generalInfo = document.getElementById('general-info');
    const financialTerms = document.getElementById('financial-terms');

    if (!loanTitle || !generalInfo || !financialTerms) {
        console.error('One or more loan detail elements not found');
        return;
    }

    // Helper function to create narrative description
    function createNarrative(loan) {
        const features = loan.description.split('\n')
            .filter(line => line.trim())
            .map(line => line.replace('• ', '').trim())
            .filter(line => line);

        // Group features into categories
        const expertise = features.filter(f => f.includes('expertise') || f.includes('experience') || f.includes('track record'));
        const financial = features.filter(f => f.includes('fee') || f.includes('cost') || f.includes('pricing') || f.includes('funding'));
        const technical = features.filter(f => f.includes('technical') || f.includes('support') || f.includes('training') || f.includes('assistance'));
        const environmental = features.filter(f => f.includes('environmental') || f.includes('climate') || f.includes('green'));
        const other = features.filter(f => 
            !expertise.includes(f) && 
            !financial.includes(f) && 
            !technical.includes(f) && 
            !environmental.includes(f));

        return `
            <div class="loan-narrative">
                <div class="narrative-section">
                    <h6>Institutional Background</h6>
                    <p>Established in ${loan.yearEstablished}, ${loan.lender} has earned a ${loan.creditRating} credit rating 
                    and built a strong presence in the infrastructure financing sector. With ${loan.nationalClients} national clients 
                    and ${loan.totalUsers} total users, they have demonstrated significant expertise in managing complex infrastructure projects.</p>
                    ${expertise.length > 0 ? `<p>${expertise.join(' ')}</p>` : ''}
                </div>

                <div class="narrative-grid">
                    ${financial.length > 0 ? `
                        <div class="narrative-section">
                            <h6>Financial Benefits</h6>
                            <p>${financial.join(' ')}</p>
                        </div>
                    ` : ''}

                    ${technical.length > 0 ? `
                        <div class="narrative-section">
                            <h6>Technical Support</h6>
                            <p>${technical.join(' ')}</p>
                        </div>
                    ` : ''}

                    ${environmental.length > 0 ? `
                        <div class="narrative-section">
                            <h6>Environmental Considerations</h6>
                            <p>${environmental.join(' ')}</p>
                        </div>
                    ` : ''}

                    ${other.length > 0 ? `
                        <div class="narrative-section">
                            <h6>Additional Features</h6>
                            <p>${other.join(' ')}</p>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }

    // Title and Key Features with narrative
    loanTitle.innerHTML = `
        <div class="loan-header">
            <div class="lender-title">
                <div class="lender-logo">
                    <span class="logo-initials">${getLenderInitials(loan.lender)}</span>
                </div>
                <div class="lender-info">
                    <h4>${loan.lender}</h4>
                    <p class="loan-name">${loan.name}</p>
                </div>
            </div>
            ${createNarrative(loan)}
        </div>
    `;

    // General Information
    generalInfo.innerHTML = `
        <div class="content-wrapper">
            <div class="detail-item">
                <span class="detail-label">Amount</span>
                <span class="detail-value">${formatCurrency(loan.amount)}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Currency</span>
                <span class="detail-value">${loan.currency}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Management Fee</span>
                <span class="detail-value">${loan.managementFee}% (${formatCurrency(loan.managementFee / 100 * loan.amount)})</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Commitment Fee</span>
                <span class="detail-value">${loan.commitmentFee}% (${formatCurrency(loan.commitmentFee / 100 * loan.amount)})</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Insurance Fee</span>
                <span class="detail-value">${loan.insuranceFee}% (${formatCurrency(loan.insuranceFee / 100 * loan.amount)})</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Sector</span>
                <span class="detail-value">${loan.sector}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Disbursement Period</span>
                <span class="detail-value">${loan.disbursementPeriod}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Technical Assistance</span>
                <span class="detail-value">${loan.technicalAssistance ? 'Included' : 'Not Included'}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Environmental Requirements</span>
                <span class="detail-value">${loan.environmentalRequirements}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Procurement Type</span>
                <span class="detail-value">${loan.procurementType}</span>
            </div>
        </div>
    `;
    
    // Financial Terms
    financialTerms.innerHTML = `
        <div class="content-wrapper">
            <div class="detail-item">
                <span class="detail-label">Interest Rate Type</span>
                <span class="detail-value">${loan.interestRateType}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Interest Rate</span>
                <span class="detail-value highlight">${loan.interestRate}%${loan.interestRateType === 'Variable' ? 
                    ` (${loan.referenceRate} + ${loan.margin}%)` : ''}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Maturity</span>
                <span class="detail-value">${loan.maturity} years</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Grace Period</span>
                <span class="detail-value">${loan.gracePeriod} years</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Repayment Frequency</span>
                <span class="detail-value">${loan.repaymentFrequency}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Repayment Type</span>
                <span class="detail-value">${loan.repaymentType}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Prepayment Penalty</span>
                <span class="detail-value">${loan.prepaymentPenalty}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Escrow Account Required</span>
                <span class="detail-value">${loan.escrowAccount ? 'Yes' : 'No'}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Revenue Percentage</span>
                <span class="detail-value">${loan.revenuePercentage}%</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Discount Rate</span>
                <span class="detail-value">${loan.discountRate}%</span>
            </div>
        </div>
    `;
    
    // Update loan clauses
    const clauses = loanClausesData[loan.id];
    if (clauses) {
        updateClauseContent('disbursement-conditions', clauses.disbursementConditions);
        updateClauseContent('repayment-terms', clauses.repaymentTerms);
        updateClauseContent('environmental-standards', clauses.environmentalStandards);
        updateClauseContent('social-requirements', clauses.socialRequirements);
        updateClauseContent('financial-covenants', clauses.financialCovenants);
        updateClauseContent('reporting-requirements', clauses.reportingRequirements);
        updateClauseContent('default-remedies', clauses.defaultRemedies);
        updateClauseContent('additional-requirements', clauses.additionalRequirements);

        // Add animation effect
        document.querySelectorAll('.clause-section').forEach((section, index) => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            setTimeout(() => {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }
}

function updateClauseContent(elementId, clauses) {
    const element = document.getElementById(elementId);
    if (!element || !clauses) return;

    element.innerHTML = `
        <ul>
            ${clauses.map(clause => `<li>${clause}</li>`).join('')}
        </ul>
    `;
}

// Add these styles to your CSS
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    .lender-header {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-bottom: 10px;
        padding: 15px;
        background: rgba(2, 100, 71, 0.05);
        border-radius: var(--border-radius);
    }

    .lender-logo {
        font-size: 2.5rem;
        background: white;
        width: 65px;
        height: 65px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 20px;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .lender-stats {
        flex: 1;
    }

    .lender-stats p {
        margin: 5px 0;
    }

    .loan-description {
        margin-top: 20px;
        padding: 20px;
        background: rgba(2, 100, 71, 0.03);
        border-radius: var(--border-radius);
        border-left: 3px solid var(--primary-color);
    }

    .loan-description h6 {
        color: var(--primary-color);
        margin: 0 0 15px 0;
        font-size: 1rem;
        font-weight: 600;
    }

    .loan-description p {
        margin: 8px 0;
        line-height: 1.6;
    }

    .loan-header {
        margin-bottom: 10px;
    }

    .loan-header h4 {
        color: var(--primary-color);
        margin-bottom: 10px;
        margin-left: 40px;
        font-weight: 600;
        letter-spacing: 0.5px;
        padding-bottom: 10px;
        border-bottom: 2px solid rgba(2, 100, 71, 0.1);
        font-size: 1.4rem;
    }

    .loan-summary {
        font-size: 1.1rem;
        color: var(--dark-text);
        margin-bottom: 20px;
        line-height: 1.6;
        padding: 15px;
        background: linear-gradient(135deg, rgba(2, 100, 71, 0.03) 0%, rgba(0, 191, 165, 0.03) 100%);
        border-radius: var(--border-radius);
        border-left: 3px solid var(--primary-color);
    }

    .key-features {
        background: white;
        border-radius: var(--border-radius);
        padding: 25px;
        margin-top: 20px;
        border: 1px solid rgba(2, 100, 71, 0.1);
        box-shadow: 0 2px 8px rgba(2, 100, 71, 0.05);
    }

    .key-features h6 {
        color: var(--primary-color);
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: 20px;
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(2, 100, 71, 0.1);
    }

    .feature-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 15px;
        list-style: none;
        padding: 0;
    }

    .feature-item {
        padding-left: 20px;
        position: relative;
        line-height: 1.6;
    }

    .feature-item::before {
        content: '';
        position: absolute;
        left: 0;
        top: 10px;
        width: 6px;
        height: 6px;
        background: var(--accent-color);
        border-radius: 50%;
    }

    @media screen and (max-width: 768px) {
        .feature-list {
            grid-template-columns: 1fr;
        }

        .loan-summary {
            font-size: 1rem;
            padding: 12px;
        }
    }

    .loan-header {
        margin-bottom: 10px;
    }

    .lender-title {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 10px;
    }

    .lender-logo {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        box-shadow: 0 2px 8px rgba(2, 100, 71, 0.15);
    }

    .logo-initials {
        color: white;
        font-size: 1.2rem;
        font-weight: 600;
        letter-spacing: 0.5px;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    }

    .lender-title h4 {
        color: var(--primary-color);
        margin: 0;
        padding-bottom: 10px;
        border-bottom: 2px solid rgba(2, 100, 71, 0.1);
        font-size: 1.4rem;
        font-weight: 600;
        letter-spacing: 0.5px;
        flex-grow: 1;
    }

    .loan-narrative {
        margin-top: 25px;
        background: white;
        border-radius: var(--border-radius);
        overflow: hidden;
        font-size: 0.95rem; /* Match detail label font size */
    }

    .narrative-section {
        padding: 25px;
        border-bottom: 1px solid rgba(2, 100, 71, 0.1);
    }

    .narrative-section:last-child {
        border-bottom: none;
    }

    .narrative-section.main-description {
        background: linear-gradient(135deg, rgba(2, 100, 71, 0.05) 0%, rgba(0, 191, 165, 0.05) 100%);
        border-left: 4px solid var(--primary-color);
    }

    .narrative-section.main-description p {
        font-size: 0.95rem; /* Match detail label font size */
        line-height: 1.6;
        color: var(--dark-text);
        margin: 0;
    }

    .narrative-section h6 {
        color: var(--primary-color);
        font-size: 1rem;
        font-weight: 600;
        margin: 0 0 15px 0;
        letter-spacing: 0.3px;
    }

    .narrative-section p {
        margin: 0 0 12px 0;
        line-height: 1.6;
        color: var(--dark-text);
        font-size: 0.95rem; /* Match detail label font size */
    }

    .narrative-section p:last-child {
        margin-bottom: 0;
    }

    .narrative-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1px;
        background: rgba(2, 100, 71, 0.1);
        border-radius: var(--border-radius);
        overflow: hidden;
    }

    .narrative-grid .narrative-section {
        background: white;
        border: none;
        height: 100%;
    }

    @media screen and (max-width: 768px) {
        .narrative-grid {
            grid-template-columns: 1fr;
        }

        .narrative-section {
            padding: 20px;
        }

        .narrative-section.main-description p,
        .narrative-section p {
            font-size: 0.95rem; /* Maintain consistent font size on mobile */
        }
    }

    .lender-info {
        display: flex;
        flex-direction: column;
        gap: 3px;
    }

    .lender-info h4 {
        margin: 0;
        color: var(--primary-color);
        font-size: 1.4rem;
        font-weight: 600;
        letter-spacing: 0.5px;
    }

    .loan-name {
        margin: 0;
        color: var(--dark-text);
        font-size: 1rem;
        opacity: 0.8;
        font-weight: 400;
    }

    .loan-header {
        margin-bottom: 15px;
    }

    .lender-logo {
        width: 42px;
        height: 42px;
        border-radius: 8px;
        background: linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        box-shadow: 0 2px 6px rgba(2, 100, 71, 0.15);
        margin-right: 5px;
        margin-top: 3px;
    }

    .logo-initials {
        color: white;
        font-size: 1.1rem;
        font-weight: 600;
        letter-spacing: 0.5px;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    }

    .lender-title {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        margin-bottom: 10px;
    }

    .lender-info {
        display: flex;
        flex-direction: column;
        gap: 2px;
    }

    .narrative-section {
        margin-top: 0;
    }

    .narrative-section h6 {
        margin-top: 0;
    }
`;
document.head.appendChild(styleSheet);

function displayRepaymentSchedule(loan) {
    const schedule = generateRepaymentSchedule(loan);
    const repaymentBody = document.getElementById('repayment-body');
    repaymentBody.innerHTML = '';
    
    // Add initial fees as year 0
    const initialFees = (loan.managementFee / 100 * loan.amount) + 
                       (loan.commitmentFee / 100 * loan.amount) +
                       (loan.insuranceFee / 100 * loan.amount);
    
    if (initialFees > 0) {
        const feeRow = document.createElement('tr');
        feeRow.innerHTML = `
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>${formatCurrency(initialFees)}</td>
            <td>${formatCurrency(initialFees)}</td>
            <td>${formatCurrency(loan.amount)}</td>
        `;
        repaymentBody.appendChild(feeRow);
    }
    
    // Group schedule by year
    const yearlySchedule = {};
    schedule.forEach(payment => {
        if (!yearlySchedule[payment.year]) {
            yearlySchedule[payment.year] = {
                principalPayment: 0,
                interestPayment: 0,
                fees: 0,
                totalPayment: 0,
                outstandingBalance: payment.outstandingBalance
            };
        }
        
        yearlySchedule[payment.year].principalPayment += payment.principalPayment;
        yearlySchedule[payment.year].interestPayment += payment.interestPayment;
        yearlySchedule[payment.year].fees += payment.fees;
        yearlySchedule[payment.year].totalPayment += payment.totalPayment;
    });
    
    // Highlight grace period and major repayment phases
    Object.keys(yearlySchedule).forEach(year => {
        const payment = yearlySchedule[year];
        const row = document.createElement('tr');
        
        // Add special classes based on the payment phase for better visualization
        if (year <= loan.gracePeriod) {
            row.classList.add('grace-period');
        } else if (year > loan.maturity - 5) {
            row.classList.add('final-period');
        }
        
        row.innerHTML = `
            <td>${year}</td>
            <td>${formatCurrency(payment.principalPayment)}</td>
            <td>${formatCurrency(payment.interestPayment)}</td>
            <td>${formatCurrency(payment.fees)}</td>
            <td>${formatCurrency(payment.totalPayment)}</td>
            <td>${formatCurrency(payment.outstandingBalance)}</td>
        `;
        repaymentBody.appendChild(row);
    });
}

function setupChartDisplay() {
    const chartTypeSelect = document.getElementById('chart-type');
    const canvas = document.getElementById('chart-canvas');
    const chartContainer = document.querySelector('.chart-container');
    
    // Ensure canvas is properly sized
    function resizeCanvas() {
        const containerWidth = chartContainer.clientWidth;
        const containerHeight = chartContainer.clientHeight;
        
        // Set canvas dimensions with proper scaling for high DPI displays
        const dpr = window.devicePixelRatio || 1;
        canvas.width = containerWidth * dpr;
        canvas.height = containerHeight * dpr;
        canvas.style.width = containerWidth + 'px';
        canvas.style.height = containerHeight + 'px';
        
        const ctx = canvas.getContext('2d');
        ctx.scale(dpr, dpr);
        
        // Redraw chart if needed
        const selectedLoans = Array.from(document.querySelectorAll('#loan-checkboxes input[type="checkbox"]:checked'))
            .map(checkbox => parseInt(checkbox.value))
            .map(id => loanData.find(loan => loan.id === id))
            .filter(loan => loan);
            
        if (selectedLoans.length > 0) {
            drawChart(chartTypeSelect.value, selectedLoans);
        }
    }

    // Create loan checkboxes
    const checkboxContainer = document.getElementById('loan-checkboxes');
    checkboxContainer.innerHTML = ''; // Clear existing checkboxes
    
    loanData.forEach(loan => {
        const label = document.createElement('label');
        label.className = 'chart-checkbox-label';
        label.innerHTML = `
            <input type="checkbox" class="chart-loan-checkbox" value="${loan.id}">
            <span class="checkbox-text">${loan.lender}</span>
        `;
        checkboxContainer.appendChild(label);
    });

    // Auto-select first loan by default
    const firstCheckbox = checkboxContainer.querySelector('input[type="checkbox"]');
    if (firstCheckbox) {
        firstCheckbox.checked = true;
    }

    function updateChart() {
        const selectedLoans = Array.from(document.querySelectorAll('#loan-checkboxes input[type="checkbox"]:checked'))
            .map(checkbox => parseInt(checkbox.value))
            .map(id => loanData.find(loan => loan.id === id))
            .filter(loan => loan);
            
        if (selectedLoans.length === 0) {
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.font = '14px Montserrat';
            ctx.fillStyle = '#014731';
            ctx.fillText('Please select at least one loan to visualize', canvas.width / (2 * (window.devicePixelRatio || 1)), canvas.height / (2 * (window.devicePixelRatio || 1)));
            return;
        }

        drawChart(chartTypeSelect.value, selectedLoans);
    }

    // Add event listeners
    chartTypeSelect.addEventListener('change', updateChart);
    checkboxContainer.addEventListener('change', updateChart);
    window.addEventListener('resize', debounce(resizeCanvas, 250));

    // Handle tab changes
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.getAttribute('data-tab') === 'charts') {
                setTimeout(() => {
                    resizeCanvas();
                    updateChart();
                }, 100);
            }
        });
    });

    // Initial setup
    resizeCanvas();
    
    // Check if charts tab is active and initialize if it is
    if (document.querySelector('.tab-button[data-tab="charts"]').classList.contains('active')) {
        setTimeout(updateChart, 100);
    }

    // Force initial chart render
    setTimeout(updateChart, 200);
}

function drawChart(chartType, loans) {
    const canvas = document.getElementById('chart-canvas');
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Set up chart dimensions
    const width = canvas.width / dpr;
    const height = canvas.height / dpr;
    const padding = 60;
    const chartWidth = width - 2 * padding;
    const chartHeight = height - 2 * padding;
    
    // Define colors
    const colors = [
        '#026447', // Primary green
        '#00BFA5', // Accent teal
        '#038455', // Accent tertiary green
        '#FFC107', // Accent secondary amber
        '#014731', // Secondary dark green
        '#4DB6AC'  // Light teal
    ];

    // Draw axes
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(1, 71, 49, 0.2)';
    ctx.lineWidth = 2;
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.stroke();

    switch(chartType) {
        case 'grant-element-comparison':
            drawBarChart(ctx, loans, 'grantElement', 'Grant Element (%)', colors, padding, chartWidth, chartHeight);
            break;
        case 'total-cost-comparison':
            drawBarChart(ctx, loans, 'totalRepayment', 'Total Repayment ($)', colors, padding, chartWidth, chartHeight);
            break;
        case 'repayment-profile':
            drawLineChart(ctx, loans, colors, padding, chartWidth, chartHeight);
            break;
        case 'yearly-payments':
            drawYearlyPaymentsChart(ctx, loans, colors, padding, chartWidth, chartHeight);
            break;
    }
}

function drawBarChart(ctx, loans, metric, yLabel, colors, padding, chartWidth, chartHeight) {
    const maxValue = Math.max(...loans.map(loan => loan[metric])) * 1.1;
    const barWidth = (chartWidth / loans.length) * 0.8;
    const barSpacing = (chartWidth / loans.length) * 0.2;
    
    // Draw y-axis labels and grid lines
    for (let i = 0; i <= 5; i++) {
        const y = padding + chartHeight - (i / 5) * chartHeight;
        const value = (i / 5) * maxValue;
        
        // Grid line
        ctx.beginPath();
        ctx.strokeStyle = chartColors.grid;
        ctx.setLineDash([5, 5]);
        ctx.moveTo(padding, y);
        ctx.lineTo(padding + chartWidth, y);
        ctx.stroke();
        ctx.setLineDash([]);
        
        // Label
        ctx.fillStyle = chartColors.text;
        ctx.font = `12px ${chartFontFamily}`;
        ctx.textAlign = 'right';
        ctx.fillText(
            metric === 'totalRepayment' ? 
            formatCurrency(value).slice(0, -3) + 'M' :
            value.toFixed(1) + '%',
            padding - 10,
            y + 4
        );
    }
    
    // Draw bars
    loans.forEach((loan, i) => {
        const x = padding + i * (barWidth + barSpacing);
        const barHeight = (loan[metric] / maxValue) * chartHeight;
        const y = padding + chartHeight - barHeight;
        
        // Create gradient
        const gradient = ctx.createLinearGradient(x, y, x, padding + chartHeight);
        gradient.addColorStop(0, colors[i % colors.length]);
        gradient.addColorStop(1, adjustColorBrightness(colors[i % colors.length], -20));
        
        // Draw bar
        ctx.fillStyle = gradient;
        ctx.fillRect(x, y, barWidth, barHeight);
        
        // Add value label
        ctx.fillStyle = chartColors.text;
        ctx.font = `bold 12px ${chartFontFamily}`;
        ctx.textAlign = 'center';
        const value = metric === 'totalRepayment' 
            ? formatCurrency(loan[metric]).slice(0, -3) + 'M'
            : loan[metric].toFixed(1) + '%';
        ctx.fillText(value, x + barWidth / 2, y - 10);
        
        // Add value label inside bar if bar is tall enough
        if (barHeight > 30) {
            ctx.fillStyle = 'white';
            ctx.fillText(value, x + barWidth / 2, y + barHeight / 2);
        }
        
        // Add loan name label
        ctx.save();
        ctx.translate(x + barWidth / 2, padding + chartHeight + 15);
        ctx.rotate(Math.PI / 4);
        ctx.textAlign = 'left';
        ctx.font = `12px ${chartFontFamily}`;
        ctx.fillStyle = chartColors.text;
        ctx.fillText(loan.lender.split(' ')[0], 0, 0);
        ctx.restore();
    });
    
    // Add title
    ctx.textAlign = 'center';
    ctx.font = `bold 16px ${chartFontFamily}`;
    ctx.fillStyle = '#026447';
    ctx.fillText(
        metric === 'grantElement' ? 'Grant Element Comparison' : 'Total Repayment Comparison',
        padding + chartWidth / 2,
        padding - 25
    );
}

function drawLineChart(ctx, loans, colors, padding, chartWidth, chartHeight) {
    const maxYears = Math.max(...loans.map(loan => loan.maturity));
    
    // Draw grid lines and labels for years
    for (let year = 0; year <= maxYears; year += 5) {
        const x = padding + (year / maxYears) * chartWidth;
        
        // Grid line
        ctx.beginPath();
        ctx.strokeStyle = chartColors.grid;
        ctx.setLineDash([5, 5]);
        ctx.moveTo(x, padding);
        ctx.lineTo(x, padding + chartHeight);
        ctx.stroke();
        ctx.setLineDash([]);
        
        // Label
        ctx.fillStyle = chartColors.text;
        ctx.font = `12px ${chartFontFamily}`;
        ctx.textAlign = 'center';
        ctx.fillText(year.toString(), x, padding + chartHeight + 20);
    }
    
    // Draw grid lines and labels for percentages
    for (let i = 0; i <= 5; i++) {
        const y = padding + chartHeight - (i / 5) * chartHeight;
        const value = (i / 5) * 100;
        
        // Grid line
        ctx.beginPath();
        ctx.strokeStyle = chartColors.grid;
        ctx.setLineDash([5, 5]);
        ctx.moveTo(padding, y);
        ctx.lineTo(padding + chartWidth, y);
        ctx.stroke();
        ctx.setLineDash([]);
        
        // Label
        ctx.fillStyle = chartColors.text;
        ctx.font = `12px ${chartFontFamily}`;
        ctx.textAlign = 'right';
        ctx.fillText(value.toFixed(0) + '%', padding - 10, y + 5);
    }
    
    // Draw y-axis label
    ctx.save();
    ctx.translate(padding - 45, padding + chartHeight / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = 'center';
    ctx.font = `bold 14px ${chartFontFamily}`;
    ctx.fillStyle = chartColors.text;
    ctx.fillText('Principal Remaining (%)', 0, 0);
    ctx.restore();
    
    // Draw lines for each loan
    loans.forEach((loan, i) => {
        const points = [];
        const schedule = generateRepaymentSchedule(loan);
        const totalAmount = loan.amount;
        
        // Collect points first
        schedule.forEach((payment, year) => {
            const x = padding + (year / maxYears) * chartWidth;
            const remainingPrincipal = payment.outstandingBalance;
            const y = padding + chartHeight - (remainingPrincipal / totalAmount) * chartHeight;
            const percentage = (remainingPrincipal / totalAmount * 100).toFixed(1);
            points.push({ x, y, percentage });
        });
        
        // Draw line
        ctx.beginPath();
        points.forEach((point, idx) => {
            if (idx === 0) {
                ctx.moveTo(point.x, point.y);
            } else {
                ctx.lineTo(point.x, point.y);
            }
        });
        ctx.strokeStyle = colors[i % colors.length];
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Add data points and labels
        points.forEach((point, idx) => {
            // Show points and labels at start, end, and every 5 years
            if (idx === 0 || idx === points.length - 1 || idx % 5 === 0) {
                // Draw point
                ctx.fillStyle = colors[i % colors.length];
                ctx.beginPath();
                ctx.arc(point.x, point.y, 4, 0, Math.PI * 2);
                ctx.fill();
                
                // Add percentage label
                ctx.fillStyle = chartColors.text;
                ctx.font = `11px ${chartFontFamily}`;
                ctx.textAlign = 'center';
                ctx.fillText(point.percentage + '%', point.x, point.y - 10);
            }
        });
    });
    
    // Add legend
    const legendY = padding + 20;
    loans.forEach((loan, i) => {
        const x = padding + chartWidth - 150;
        const y = legendY + i * 25;
        
        ctx.fillStyle = colors[i % colors.length];
        ctx.fillRect(x, y, 20, 3);
        
        ctx.fillStyle = chartColors.text;
        ctx.font = `12px ${chartFontFamily}`;
        ctx.textAlign = 'left';
        ctx.fillText(loan.lender.split(' ')[0], x + 30, y + 5);
    });
    
    // Add title
    ctx.textAlign = 'center';
    ctx.font = `bold 16px ${chartFontFamily}`;
    ctx.fillStyle = '#026447';
    ctx.fillText('Repayment Profile', padding + chartWidth / 2, padding - 25);
}

function drawYearlyPaymentsChart(ctx, loans, colors, padding, chartWidth, chartHeight, gridColor, textColor) {
    // Find max years across all loans and max yearly payment
    const maxYears = Math.max(...loans.map(loan => loan.maturity));
    let maxYearlyPayment = 0;
    
    const yearlyPayments = {};
    
    // Calculate yearly payments for each loan
    loans.forEach(loan => {
        const schedule = generateRepaymentSchedule(loan);
        
        // Group payments by year
        const loanYearlyPayments = {};
        schedule.forEach(payment => {
            if (!loanYearlyPayments[payment.year]) {
                loanYearlyPayments[payment.year] = 0;
            }
            loanYearlyPayments[payment.year] += payment.totalPayment;
        });
        
        // Add initial fees to year 0
        const initialFees = (loan.managementFee / 100 * loan.amount) + 
                           (loan.commitmentFee / 100 * loan.amount) +
                           (loan.insuranceFee / 100 * loan.amount);
        
        if (initialFees > 0) {
            loanYearlyPayments[0] = initialFees;
        }
        
        // Find max yearly payment
        const maxForLoan = Math.max(...Object.values(loanYearlyPayments));
        if (maxForLoan > maxYearlyPayment) {
            maxYearlyPayment = maxForLoan;
        }
        
        yearlyPayments[loan.id] = loanYearlyPayments;
    });
    
    // Add 10% to max for padding
    maxYearlyPayment *= 1.1;
    
    // Draw axes and grid with enhanced styling
    for (let i = 0; i <= maxYears; i += 5) {
        const x = padding + (i / maxYears) * chartWidth;
        
        // Grid line
        ctx.beginPath();
        ctx.strokeStyle = gridColor;
        ctx.setLineDash([5, 5]); // Dashed grid lines
        ctx.moveTo(x, padding);
        ctx.lineTo(x, padding + chartHeight);
        ctx.stroke();
        ctx.setLineDash([]); // Reset
        
        // X-axis label
        ctx.fillStyle = textColor;
        ctx.font = `12px ${chartFontFamily}`;
        ctx.textAlign = 'center';
        ctx.fillText('Year ' + i, x, padding + chartHeight + 20);
    }
    
    // Y-axis label (payment amount)
    for (let i = 0; i <= 5; i++) {
        const y = padding + chartHeight - (i / 5) * chartHeight;
        const amount = (i / 5) * maxYearlyPayment;
        
        // Grid line
        ctx.beginPath();
        ctx.strokeStyle = gridColor;
        ctx.setLineDash([5, 5]); // Dashed grid lines
        ctx.moveTo(padding, y);
        ctx.lineTo(padding + chartWidth, y);
        ctx.stroke();
        ctx.setLineDash([]); // Reset
        
        // Label
        ctx.fillStyle = textColor;
        ctx.font = `12px ${chartFontFamily}`;
        ctx.textAlign = 'right';
        ctx.fillText(formatCurrency(amount).slice(0, -3) + 'M', padding - 10, y + 5);
    }
    
    // Y-axis label
    ctx.save();
    ctx.translate(padding - 45, padding + chartHeight / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = 'center';
    ctx.font = `bold 14px ${chartFontFamily}`;
    ctx.fillStyle = textColor;
    ctx.fillText('Yearly Payment ($)', 0, 0);
    ctx.restore();
    
    // Draw area chart for each loan with enhanced styling
    loans.forEach((loan, loanIndex) => {
        const loanPayments = yearlyPayments[loan.id];
        const color = colors[loanIndex % colors.length];
        const lightColor = adjustColorBrightness(color, 70);
        
        // Create points for area chart
        const points = [];
        for (let year = 0; year <= loan.maturity; year++) {
            const payment = loanPayments[year] || 0;
            const x = padding + (year / maxYears) * chartWidth;
            const y = padding + chartHeight - (payment / maxYearlyPayment) * chartHeight;
            
            points.push({ x, y });
        }
        
        // Add baseline points to close the shape
        points.push({ x: padding + (loan.maturity / maxYears) * chartWidth, y: padding + chartHeight });
        points.push({ x: padding, y: padding + chartHeight });
        
        // Animate area chart drawing
        setTimeout(() => {
            // Create gradient
            const gradient = ctx.createLinearGradient(padding, padding, padding, padding + chartHeight);
            gradient.addColorStop(0, hexToRgba(color, 0.7));
            gradient.addColorStop(1, hexToRgba(color, 0.1));
            
            // Draw area
            ctx.beginPath();
            ctx.moveTo(points[0].x, points[0].y);
            
            for (let i = 1; i < points.length - 2; i++) {
                ctx.lineTo(points[i].x, points[i].y);
            }
            
            ctx.lineTo(points[points.length - 2].x, points[points.length - 2].y);
            ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
            ctx.closePath();
            
            ctx.fillStyle = gradient;
            ctx.fill();
            
            // Draw the payment line
            ctx.beginPath();
            ctx.moveTo(points[0].x, points[0].y);
            
            for (let i = 1; i < points.length - 2; i++) {
                ctx.lineTo(points[i].x, points[i].y);
            }
            
            ctx.strokeStyle = color;
            ctx.lineWidth = 2;
            ctx.stroke();
            
            // Add dots for key years
            for (let year = 0; year <= loan.maturity; year += 5) {
                if (loanPayments[year] !== undefined) {
                    const x = padding + (year / maxYears) * chartWidth;
                    const y = padding + chartHeight - (loanPayments[year] / maxYearlyPayment) * chartHeight;
                    
                    ctx.beginPath();
                    ctx.arc(x, y, 4, 0, Math.PI * 2);
                    ctx.fillStyle = color;
                    ctx.fill();
                    ctx.strokeStyle = '#fff';
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        }, loanIndex * 200); // Stagger animations
    });
    
    // Add legend with enhanced styling
    const legendX = padding + 20;
    const legendY = padding + 30;
    
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.fillRect(legendX - 10, legendY - 20, 180, 30 + loans.length * 25);
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.strokeRect(legendX - 10, legendY - 20, 180, 30 + loans.length * 25);
    
    ctx.textAlign = 'left';
    ctx.font = `bold 14px ${chartFontFamily}`;
    ctx.fillStyle = textColor;
    ctx.fillText('Legend:', legendX, legendY);
    
    loans.forEach((loan, i) => {
        const y = legendY + 25 + i * 20;
        
        // Colored line
        ctx.beginPath();
        ctx.strokeStyle = colors[i % colors.length];
        ctx.lineWidth = 3;
        ctx.moveTo(legendX, y);
        ctx.lineTo(legendX + 30, y);
        ctx.stroke();
        
        // Label
        ctx.fillStyle = textColor;
        ctx.font = `12px ${chartFontFamily}`;
        ctx.fillText(loan.lender.split(' ')[0], legendX + 40, y + 4);
    });
    
    // Title
    ctx.textAlign = 'center';
    ctx.font = `bold 16px ${chartFontFamily}`;
    ctx.fillStyle = '#026447';
    ctx.fillText('Yearly Payments Comparison', padding + chartWidth / 2, padding - 25);
}

// New function for line comparison charts
function drawLineComparisonChart(ctx, loans, metric, yLabel, colors, padding, chartWidth, chartHeight, gridColor, textColor) {
    const maxValue = Math.max(...loans.map(loan => loan[metric])) * 1.1;
    const xStep = chartWidth / (loans.length - 1);
    
    // Draw grid lines and labels for y-axis
    for (let i = 0; i <= 5; i++) {
        const y = padding + chartHeight - (i / 5) * chartHeight;
        const value = (i / 5) * maxValue;
        
        ctx.beginPath();
        ctx.strokeStyle = gridColor;
        ctx.setLineDash([5, 5]);
        ctx.moveTo(padding, y);
        ctx.lineTo(padding + chartWidth, y);
        ctx.stroke();
        ctx.setLineDash([]);
        
        ctx.fillStyle = textColor;
        ctx.font = `12px ${chartFontFamily}`;
        ctx.textAlign = 'right';
        ctx.fillText(
            metric === 'totalRepayment' ? 
            formatCurrency(value).slice(0, -3) + 'M' :
            value.toFixed(1) + '%',
            padding - 10,
            y + 5
        );
    }
    
    // Draw y-axis label
    ctx.save();
    ctx.translate(padding - 45, padding + chartHeight / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = 'center';
    ctx.font = `bold 14px ${chartFontFamily}`;
    ctx.fillStyle = textColor;
    ctx.fillText(yLabel, 0, 0);
    ctx.restore();
    
    // Draw the line
    ctx.beginPath();
    ctx.moveTo(padding, padding + chartHeight - (loans[0][metric] / maxValue) * chartHeight);
    loans.forEach((loan, i) => {
        const x = padding + i * xStep;
        const y = padding + chartHeight - (loan[metric] / maxValue) * chartHeight;
        
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
        
        // Draw points
        ctx.fillStyle = colors[i % colors.length];
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fill();
        
        // Add loan name labels
        ctx.save();
        ctx.translate(x, padding + chartHeight + 15);
        ctx.rotate(Math.PI / 4);
        ctx.textAlign = 'left';
        ctx.font = `12px ${chartFontFamily}`;
        ctx.fillStyle = textColor;
        ctx.fillText(loan.lender.split(' ')[0], 0, 0);
        ctx.restore();
    });
    
    ctx.strokeStyle = colors[0];
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Title
    ctx.textAlign = 'center';
    ctx.font = `bold 16px ${chartFontFamily}`;
    ctx.fillStyle = '#026447';
    ctx.fillText(
        metric === 'grantElement' ? 'Grant Element Comparison' : 'Total Repayment Comparison',
        padding + chartWidth / 2,
        padding - 25
    );
}

// New function for scatter plots
function drawScatterChart(ctx, loans, colors, padding, chartWidth, chartHeight, gridColor, textColor) {
    // Find max values for scaling
    const maxInterestRate = Math.max(...loans.map(loan => loan.interestRate));
    const maxGrantElement = Math.max(...loans.map(loan => calculateGrantElement(loan)));
    
    // Draw grid lines and labels for x-axis (interest rate)
    for (let rate = 0; rate <= maxInterestRate; rate += 1) {
        const x = padding + (rate / maxInterestRate) * chartWidth;
        
        // Grid line
        ctx.beginPath();
        ctx.strokeStyle = gridColor;
        ctx.setLineDash([5, 5]);
        ctx.moveTo(x, padding);
        ctx.lineTo(x, padding + chartHeight);
        ctx.stroke();
        ctx.setLineDash([]);
        
        // Label
        ctx.fillStyle = textColor;
        ctx.font = `12px ${chartFontFamily}`;
        ctx.textAlign = 'center';
        ctx.fillText(rate.toFixed(1) + '%', x, padding + chartHeight + 20);
    }
    
    // Draw grid lines and labels for y-axis (grant element)
    for (let i = 0; i <= 5; i++) {
        const y = padding + chartHeight - (i / 5) * chartHeight;
        const value = (i / 5) * maxGrantElement;
        
        // Grid line
        ctx.beginPath();
        ctx.strokeStyle = gridColor;
        ctx.setLineDash([5, 5]);
        ctx.moveTo(padding, y);
        ctx.lineTo(padding + chartWidth, y);
        ctx.stroke();
        ctx.setLineDash([]);
        
        // Label
        ctx.fillStyle = textColor;
        ctx.font = `12px ${chartFontFamily}`;
        ctx.textAlign = 'right';
        ctx.fillText(value.toFixed(1) + '%', padding - 10, y + 5);
    }
    
    // Draw axis labels
    // X-axis
    ctx.textAlign = 'center';
    ctx.font = `bold 14px ${chartFontFamily}`;
    ctx.fillStyle = textColor;
    ctx.fillText('Interest Rate (%)', padding + chartWidth / 2, padding + chartHeight + 45);
    
    // Y-axis
    ctx.save();
    ctx.translate(padding - 45, padding + chartHeight / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = 'center';
    ctx.fillText('Grant Element (%)', 0, 0);
    ctx.restore();
    
    // Plot points with labels
    loans.forEach((loan, i) => {
        const grantElement = calculateGrantElement(loan);
        const x = padding + (loan.interestRate / maxInterestRate) * chartWidth;
        const y = padding + chartHeight - (grantElement / maxGrantElement) * chartHeight;
        
        // Draw point
        ctx.beginPath();
        ctx.fillStyle = colors[i % colors.length];
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fill();
        
        // Add white border to point
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Add value labels
        ctx.fillStyle = textColor;
        ctx.font = `11px ${chartFontFamily}`;
        ctx.textAlign = 'left';
        
        // Format values
        const irText = `IR: ${loan.interestRate.toFixed(1)}%`;
        const geText = `GE: ${grantElement.toFixed(1)}%`;
        const lenderText = loan.lender.split(' ')[0];
        
        // Position labels
        const labelX = x + 10;
        ctx.fillText(lenderText, labelX, y - 20);
        ctx.fillText(irText, labelX, y - 8);
        ctx.fillText(geText, labelX, y + 4);
    });
    
    // Add title
    ctx.textAlign = 'center';
    ctx.font = `bold 16px ${chartFontFamily}`;
    ctx.fillStyle = '#026447';
    ctx.fillText('Interest Rate vs Grant Element', padding + chartWidth / 2, padding - 25);
}

// New function for radar charts
function drawRadarChart(ctx, loans, metrics, labels, colors, padding, chartWidth, chartHeight, textColor) {
    const centerX = padding + chartWidth / 2;
    const centerY = padding + chartHeight / 2;
    const radius = Math.min(chartWidth, chartHeight) / 2.5;
    const angleStep = (Math.PI * 2) / metrics.length;
    
    // Draw axes
    metrics.forEach((metric, i) => {
        const angle = i * angleStep - Math.PI / 2;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(
            centerX + radius * Math.cos(angle),
            centerY + radius * Math.sin(angle)
        );
        ctx.strokeStyle = 'rgba(1, 71, 49, 0.2)';
        ctx.stroke();
        
        // Add labels
        ctx.fillStyle = textColor;
        ctx.font = `bold 12px ${chartFontFamily}`;
        ctx.textAlign = 'center';
        ctx.fillText(
            labels[i],
            centerX + (radius + 20) * Math.cos(angle),
            centerY + (radius + 20) * Math.sin(angle)
        );
    });
    
    // Draw data
    loans.forEach((loan, loanIndex) => {
        ctx.beginPath();
        metrics.forEach((metric, i) => {
            const angle = i * angleStep - Math.PI / 2;
            const value = loan[metric];
            const maxValue = Math.max(...loans.map(l => l[metric]));
            const distance = (value / maxValue) * radius;
            
            const x = centerX + distance * Math.cos(angle);
            const y = centerY + distance * Math.sin(angle);
            
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });
        ctx.closePath();
        ctx.strokeStyle = colors[loanIndex % colors.length];
        ctx.stroke();
        ctx.fillStyle = hexToRgba(colors[loanIndex % colors.length], 0.2);
        ctx.fill();
    });
    
    // Add legend
    const legendY = padding;
    loans.forEach((loan, i) => {
        const x = padding + chartWidth - 150;
        const y = legendY + i * 25;
        
        ctx.fillStyle = colors[i % colors.length];
        ctx.fillRect(x, y, 20, 3);
        
        ctx.fillStyle = textColor;
        ctx.font = `12px ${chartFontFamily}`;
        ctx.textAlign = 'left';
        ctx.fillText(loan.lender.split(' ')[0], x + 30, y + 5);
    });
}

// New function for yearly payments line chart
function drawYearlyPaymentsLineChart(ctx, loans, colors, padding, chartWidth, chartHeight, gridColor, textColor) {
    const maxYears = Math.max(...loans.map(loan => loan.maturity));
    const yearlyPayments = loans.map(loan => {
        const schedule = generateRepaymentSchedule(loan);
        return schedule.map(payment => payment.totalPayment);
    });
    const maxPayment = Math.max(...yearlyPayments.flat()) * 1.1;
    
    // Draw grid lines and labels
    for (let year = 0; year <= maxYears; year += 5) {
        const x = padding + (year / maxYears) * chartWidth;
        
        ctx.beginPath();
        ctx.strokeStyle = gridColor;
        ctx.setLineDash([5, 5]);
        ctx.moveTo(x, padding);
        ctx.lineTo(x, padding + chartHeight);
        ctx.stroke();
        ctx.setLineDash([]);
        
        ctx.fillStyle = textColor;
        ctx.font = `12px ${chartFontFamily}`;
        ctx.textAlign = 'center';
        ctx.fillText(year.toString(), x, padding + chartHeight + 20);
    }
    
    // Draw payment amount grid lines and labels
    for (let i = 0; i <= 5; i++) {
        const y = padding + chartHeight - (i / 5) * chartHeight;
        const payment = (i / 5) * maxPayment;
        
        ctx.beginPath();
        ctx.strokeStyle = gridColor;
        ctx.setLineDash([5, 5]);
        ctx.moveTo(padding, y);
        ctx.lineTo(padding + chartWidth, y);
        ctx.stroke();
        ctx.setLineDash([]);
        
        ctx.fillStyle = textColor;
        ctx.font = `12px ${chartFontFamily}`;
        ctx.textAlign = 'right';
        ctx.fillText(formatCurrency(payment).slice(0, -3) + 'M', padding - 10, y + 5);
    }
    
    // Draw lines for each loan
    loans.forEach((loan, i) => {
        const schedule = generateRepaymentSchedule(loan);
        ctx.beginPath();
        schedule.forEach((payment, year) => {
            const x = padding + (year / maxYears) * chartWidth;
            const y = padding + chartHeight - (payment / maxPayment) * chartHeight;
            
            if (year === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });
        
        ctx.strokeStyle = colors[i % colors.length];
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Add points at each year
        schedule.forEach((payment, year) => {
            const x = padding + (year / maxYears) * chartWidth;
            const y = padding + chartHeight - (payment / maxPayment) * chartHeight;
            
            ctx.fillStyle = colors[i % colors.length];
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, Math.PI * 2);
            ctx.fill();
        });
    });
    
    // Add legend
    const legendY = padding + 20;
    loans.forEach((loan, i) => {
        const x = padding + chartWidth - 150;
        const y = legendY + i * 25;
        
        ctx.fillStyle = colors[i % colors.length];
        ctx.fillRect(x, y, 20, 3);
        
        ctx.fillStyle = textColor;
        ctx.font = `12px ${chartFontFamily}`;
        ctx.textAlign = 'left';
        ctx.fillText(loan.lender.split(' ')[0], x + 30, y + 5);
    });
    
    // Add axis labels
    ctx.save();
    ctx.translate(padding - 45, padding + chartHeight / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = 'center';
    ctx.font = `bold 14px ${chartFontFamily}`;
    ctx.fillStyle = textColor;
    ctx.fillText('Yearly Payment ($)', 0, 0);
    ctx.restore();
    
    ctx.textAlign = 'center';
    ctx.font = 'bold 14px Montserrat';
    ctx.fillStyle = textColor;
    ctx.fillText('Year', padding + chartWidth / 2, padding + chartHeight + 45);
}

// Helper function for color manipulation
function adjustColorBrightness(hex, percent) {
    // Convert hex to RGB
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);

    // Adjust brightness
    r = Math.max(0, Math.min(255, r + percent));
    g = Math.max(0, Math.min(255, g + percent));
    b = Math.max(0, Math.min(255, b + percent));

    // Convert back to hex
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

// Helper function to convert hex to rgba
function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function setupRecommendationForm() {
    // Populate loan options for recommendation
    const recommendedLoanSelect = document.getElementById('recommended-loan');
    recommendedLoanSelect.innerHTML = '<option value="">Select a loan</option>';
    
    loanData.forEach(loan => {
        const option = document.createElement('option');
        option.value = loan.id;
        option.textContent = `${loan.lender} - ${loan.name}`;
        recommendedLoanSelect.appendChild(option);
    });
    
    // Setup submit button with enhanced feedback
    const submitButton = document.getElementById('submit-recommendation');
    submitButton.addEventListener('click', function() {
        const selectedLoanId = parseInt(recommendedLoanSelect.value);
        const rationale = document.getElementById('recommendation-rationale').value.trim();
        
        // Validate form with better feedback
        if (!selectedLoanId) {
            alert('Please select a recommended loan to proceed.');
            recommendedLoanSelect.focus();
            return;
        }
        
        if (!rationale) {
            alert('Please provide a rationale for your recommendation to complete the exercise.');
            document.getElementById('recommendation-rationale').focus();
            return;
        }
        
        if (rationale.length < 50) {
            alert('Please provide a more detailed rationale for your recommendation (at least 50 characters).');
            document.getElementById('recommendation-rationale').focus();
            return;
        }
        
        const selectedLoan = loanData.find(loan => loan.id === selectedLoanId);
        
        // Show button loading state
        this.textContent = 'Submitting...';
        this.disabled = true;
        
        // Simulate request delay for better UX
        setTimeout(() => {
            // Provide feedback based on selection
            showFeedbackModal(selectedLoan, rationale);
            
            // Reset button
            this.textContent = 'Submit Recommendation';
            this.disabled = false;
        }, 800);
    });
}

function showFeedbackModal(selectedLoan, rationale) {
    const modal = document.getElementById('feedback-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    // Set modal title
    modalTitle.textContent = 'Recommendation Feedback';
    
    // Prepare feedback content based on loan selection
    let feedbackContent = '';
    let feedbackClass = '';
    
    // Enhanced feedback with more detailed analysis
    if (selectedLoan.id === 2) { // Global Infrastructure Fund option
        feedbackContent = `
            <div class="feedback-success">
                <h4>Excellent Choice!</h4>
                <p>The Global Infrastructure Fund's Coastal Development Program offers the best overall value for Azuria:</p>
                <ul>
                    <li>Highest grant element (${selectedLoan.grantElement.toFixed(2)}%) indicating strong concessionality</li>
                    <li>Extended grace period (7 years) perfectly aligns with port revenue timeline, allowing revenue generation to begin before major repayments</li>
                    <li>Lowest interest rate (${selectedLoan.interestRate}%) among all options, significantly reducing long-term financing costs</li>
                    <li>Favorable repayment profile ("Equal Installments") provides predictable payment schedule for long-term fiscal planning</li>
                    <li>25-year maturity offers longest repayment horizon, reducing annual payment burden</li>
                </ul>
                <p>Your rationale demonstrates a strong understanding of concessional financing advantages and alignment with project needs.</p>
            </div>
        `;
        feedbackClass = 'text-success';
    } else if (selectedLoan.id === 4) { // Southern Regional Bank option
        feedbackContent = `
            <div class="feedback-good">
                <h4>Good Choice</h4>
                <p>The Southern Regional Bank's Regional Integration Facility is a solid option with several strengths:</p>
                <ul>
                    <li>Second-highest grant element (${selectedLoan.grantElement.toFixed(2)}%) indicating good concessionality</li>
                    <li>6-year grace period works reasonably well with project timeline, covering most of the construction and early operational phase</li>
                    <li>Competitive fixed interest rate (${selectedLoan.interestRate}%) provides certainty in repayment planning</li>
                    <li>Lower fees compared to commercial options (total ${(selectedLoan.managementFee + selectedLoan.commitmentFee + selectedLoan.insuranceFee).toFixed(2)}% vs. up to 3.75%)</li>
                    <li>22-year maturity provides extended repayment timeline</li>
                </ul>
                <p>However, the Global Infrastructure Fund offers slightly better terms overall with lower interest rate and longer grace period.</p>
            </div>
        `;
        feedbackClass = 'text-success';
    } else if (selectedLoan.id === 5) { // Western Commercial Bank option
        feedbackContent = `
            <div class="feedback-poor">
                <h4>Consider Other Options</h4>
                <p>The Western Commercial Bank Consortium's terms are relatively unfavorable for this type of long-term infrastructure project:</p>
                <ul>
                    <li>Highest interest rate (${selectedLoan.interestRate}% + variable rate risk) exposing the project to interest rate volatility</li>
                    <li>Shortest grace period (only ${selectedLoan.gracePeriod} years) requiring substantial repayments before the port reaches full operational capacity</li>
                    <li>Highest fee structure (total ${(selectedLoan.managementFee + selectedLoan.commitmentFee + selectedLoan.insuranceFee).toFixed(2)}%) adding significant upfront costs</li>
                    <li>Shortest maturity (${selectedLoan.maturity} years) creating higher annual payment burden</li>
                    <li>Negative grant element (${selectedLoan.grantElement.toFixed(2)}%) indicating commercial rather than concessional terms</li>
                </ul>
                <p>For infrastructure projects with long development timelines and gradual revenue generation like this port development, concessional financing typically offers better value and aligns better with project cash flows.</p>
            </div>
        `;
        feedbackClass = 'text-danger';
    } else {
        feedbackContent = `
            <div class="feedback-neutral">
                <h4>Acceptable Choice</h4>
                <p>The ${selectedLoan.lender} offer has some notable advantages:</p>
                <ul>
                    <li>${selectedLoan.gracePeriod}-year grace period (compared to benchmark of 5-7 years for similar projects)</li>
                    <li>${selectedLoan.interestRate}% interest rate (market average for similar projects ranges from 2.5-4.0%)</li>
                    <li>Grant element of ${selectedLoan.grantElement.toFixed(2)}% (benchmark for transport sector is 21.5%)</li>
                    <li>${selectedLoan.maturity}-year maturity (typical range for such projects is 15-25 years)</li>
                </ul>
                <p>Your rationale demonstrates consideration of important factors. For future analysis, consider comparing this option more closely with the Global Infrastructure Fund and Southern Regional Bank offers, which provide more concessional terms and better alignment with port revenue timelines.</p>
            </div>
        `;
        feedbackClass = 'text-warning';
    }
    
    // Add user's rationale
    feedbackContent += `
        <div class="user-rationale">
            <h4>Your Rationale:</h4>
            <p>${rationale}</p>
        </div>
        <p class="recommendation-next-steps">Based on this feedback, you might want to:<br>
        1. Review the key metrics again<br>
        2. Compare the repayment schedule with the port's expected revenue timeline<br>
        3. Consider how this financing choice aligns with Azuria's long-term development strategy</p>
    `;
    
    // Set modal content
    modalBody.innerHTML = feedbackContent;
    
    // Show modal with animation
    modal.style.display = 'block';
    
    // Add animation class after a slight delay for better effect
    setTimeout(() => {
        modal.classList.add('visible');
    }, 10);
    
    // Setup close buttons
    const closeButton = document.querySelector('.close-button');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    
    const closeModal = function() {
        // Add closing animation
        modal.classList.remove('visible');
        
        // Hide after animation completes
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    };
    
    closeButton.addEventListener('click', closeModal);
    modalCloseBtn.addEventListener('click', closeModal);
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Highlight the selected loan in the comparison table
    const checkboxes = document.querySelectorAll('.loan-select-checkbox');
    checkboxes.forEach(checkbox => {
        const checkboxLoanId = parseInt(checkbox.getAttribute('data-loan-id'));
        if (checkboxLoanId === selectedLoan.id) {
            checkbox.checked = true;
            const row = checkbox.closest('tr');
            
            // Highlight effect
            row.style.backgroundColor = 'rgba(0, 191, 165, 0.2)';
            setTimeout(() => {
                row.style.backgroundColor = '';
            }, 2000);
        }
    });
}

function updateSelectedLoanMetrics(loanId) {
    const selectedLoan = loanData.find(loan => loan.id === loanId);
    if (!selectedLoan) {
        document.getElementById('selected-loan-metrics').innerHTML = `
            <div class="metric-item">
                <h5>Select a loan to view its metrics</h5>
            </div>
        `;
        return;
    }

    const metrics = [
        { label: 'Grant Element', value: formatPercentage(calculateGrantElement(selectedLoan)) },
        { label: 'NPV of Repayment', value: formatCurrency(calculateNPVOfRepayment(selectedLoan)) },
        { label: 'All-in Cost', value: formatPercentage(calculateAllInCost(selectedLoan)) },
        { label: 'Total Repayment', value: formatCurrency(calculateTotalRepayment(selectedLoan)) }
    ];

    const metricsHtml = metrics.map(metric => `
        <div class="metric-item">
            <h5>${metric.label}</h5>
            <p>${metric.value}</p>
        </div>
    `).join('');

    document.getElementById('selected-loan-metrics').innerHTML = metricsHtml;
}

function setupRecommendationTab() {
    const recommendedLoanSelect = document.getElementById('recommended-loan');
    const rationale = document.getElementById('recommendation-rationale');
    const submitButton = document.getElementById('submit-recommendation');

    // Populate loan options
    const options = loanData.map(loan => `
        <option value="${loan.id}">${loan.lender} - ${loan.name}</option>
    `);
    recommendedLoanSelect.innerHTML = '<option value="">Choose the best loan option...</option>' + options.join('');

    // Auto-save functionality for rationale
    rationale.addEventListener('input', debounce(() => {
        localStorage.setItem('savedRationale', rationale.value);
    }, 500));

    // Load saved rationale if exists
    const savedRationale = localStorage.getItem('savedRationale');
    if (savedRationale) {
        rationale.value = savedRationale;
    }

    // Handle form submission
    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (!recommendedLoanSelect.value) {
            alert('Please select a loan before submitting your recommendation.');
            return;
        }

        if (!rationale.value.trim()) {
            alert('Please provide a rationale for your recommendation.');
            return;
        }

        const selectedLoan = loanData.find(loan => loan.id === recommendedLoanSelect.value);
        showFeedbackModal(selectedLoan, rationale.value);
    });
}

// Initialize the application with enhanced loading sequence
function init() {
    // Calculate metrics for all loans
    calculateLoanMetrics();
    
    // Setup UI components with a staggered initialization for better performance
    setupTabNavigation();
    
    // Ensure overview tab is active by default
    const overviewTab = document.querySelector('[data-tab="overview"]');
    const overviewContent = document.getElementById('overview');
    if (overviewTab && overviewContent) {
        document.querySelectorAll('.tab-button').forEach(button => button.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        overviewTab.classList.add('active');
        overviewContent.classList.add('active');
    }
    
    setTimeout(() => setupLoanComparison(), 200);
    setTimeout(() => setupLoanDetails(), 300);
    setTimeout(() => setupRecommendationTab(), 500);
    setTimeout(() => setupOfficialCards(), 600);
    
    // Initialize comparison functionality
    populateComparisonLoanSelector();
    updateComparisonTables();
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize other components first
    init();
    
    // Initialize onboarding modal
    setupOnboardingModal();
    
    // Initialize glossary modal
    setupGlossaryModal();
    
    // Remove loading state and show content
    document.body.classList.remove('loading');
    document.body.classList.add('loaded');
});

function setupOnboardingModal() {
    const modal = document.getElementById('onboarding-modal');
    const closeButton = modal.querySelector('.close-button');
    const nextButton = document.getElementById('next-step');
    const prevButton = document.getElementById('prev-step');
    const steps = modal.querySelectorAll('.onboarding-step');
    const dots = modal.querySelectorAll('.step-dot');
    const minimizedButton = document.getElementById('minimized-onboarding');
    let currentStep = 0;

    // Show modal immediately on page load
    modal.style.display = 'block';
    setTimeout(() => {
        modal.classList.add('visible');
    }, 100);

    // Update step display
    function updateStep() {
        steps.forEach((step, index) => {
            step.classList.toggle('active', index === currentStep);
        });
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentStep);
        });
        prevButton.disabled = currentStep === 0;
        nextButton.textContent = currentStep === steps.length - 1 ? 'Get Started' : 'Next';
    }

    function hideModal() {
        modal.classList.remove('visible');
        setTimeout(() => {
            minimizedButton.classList.add('visible');
            modal.style.display = 'none';
        }, 300);
    }

    function showModal() {
        minimizedButton.classList.remove('visible');
        modal.style.display = 'block';
        setTimeout(() => {
            modal.classList.add('visible');
            currentStep = 0;
            updateStep();
        }, 100);
    }

    // Event listeners
    nextButton.addEventListener('click', () => {
        if (currentStep === steps.length - 1) {
            hideModal();
        } else {
            currentStep++;
            updateStep();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentStep > 0) {
            currentStep--;
            updateStep();
        }
    });

    closeButton.addEventListener('click', hideModal);

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            hideModal();
        }
    });

    // Show modal when clicking minimized button
    minimizedButton.addEventListener('click', showModal);

    // Initialize first step
    updateStep();
}
// Initialize drawer functionality
document.addEventListener('DOMContentLoaded', function() {
    const drawerToggles = document.querySelectorAll('.drawer-toggle');
    
    drawerToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', !isExpanded);
        });
    });
});

// Add loan clauses data
const loanClausesData = {
    1: { // Eastern Development Bank (EDB)
        disbursementConditions: [
            "Environmental Impact Assessment approval required",
            "Land acquisition completion verification",
            "Technical feasibility study acceptance",
            "Staged disbursement based on construction milestones",
            "Independent engineer verification for each stage"
        ],
        repaymentTerms: [
            "Semi-annual repayment schedule",
            "Equal principal installments",
            "5-year grace period on principal",
            "Interest payable during grace period",
            "Prepayment allowed with 1.5% penalty"
        ],
        environmentalStandards: [
            "World Bank Environmental Standards compliance",
            "Quarterly environmental monitoring reports",
            "Marine ecosystem protection measures",
            "Waste management plan implementation",
            "Annual environmental audit requirement"
        ],
        socialRequirements: [
            "Local employment minimum quota of 60%",
            "Community development program requirement",
            "Stakeholder engagement plan",
            "Grievance redress mechanism",
            "Indigenous peoples protection measures"
        ],
        financialCovenants: [
            "Debt Service Coverage Ratio > 1.2x",
            "Current Ratio > 1.1x",
            "Maximum leverage ratio of 70:30",
            "Minimum working capital requirements",
            "Debt to EBITDA ratio < 4.5x"
        ],
        reportingRequirements: [
            "Quarterly financial statements",
            "Annual audited reports",
            "Monthly construction progress reports",
            "Environmental compliance reports",
            "Social impact monitoring reports"
        ],
        defaultRemedies: [
            "30-day cure period for financial defaults",
            "Cross-default provisions with other loans",
            "Step-in rights after 60-day default",
            "Security enforcement process defined",
            "Material adverse change clauses"
        ],
        additionalRequirements: [
            "Technical assistance package utilization",
            "Procurement through competitive bidding",
            "Insurance requirements",
            "Change in ownership restrictions",
            "Asset maintenance standards"
        ]
    },
    2: { // Global Infrastructure Fund (GIF)
        disbursementConditions: [
            "Enhanced environmental clearance required",
            "Climate resilience assessment completion",
            "Detailed project timeline approval",
            "Flexible disbursement schedule",
            "Green port certification initiation"
        ],
        repaymentTerms: [
            "Annual repayment schedule",
            "Equal installments structure",
            "7-year grace period",
            "No prepayment penalty",
            "Interest capitalization option during grace period"
        ],
        environmentalStandards: [
            "Climate change adaptation measures",
            "Zero net carbon emission target",
            "Biodiversity protection plan",
            "Green technology adoption requirements",
            "Environmental management system implementation"
        ],
        socialRequirements: [
            "Community benefit sharing program",
            "Local business integration plan",
            "Skills development program",
            "Cultural heritage protection",
            "Gender equality initiatives"
        ],
        financialCovenants: [
            "Debt Service Coverage Ratio > 1.3x",
            "Environmental expenditure commitments",
            "Green investment allocations",
            "Sustainability-linked metrics",
            "Climate risk reserve requirements"
        ],
        reportingRequirements: [
            "Sustainability impact reports",
            "Climate action progress reports",
            "Community engagement updates",
            "Green certification progress",
            "Environmental KPI tracking"
        ],
        defaultRemedies: [
            "Extended cure periods (45 days)",
            "Sustainability target breach remedies",
            "Collaborative problem-solving approach",
            "Technical support during difficulties",
            "Restructuring options available"
        ],
        additionalRequirements: [
            "Climate resilience standards",
            "Green technology adoption",
            "Sustainability certifications",
            "Knowledge sharing obligations",
            "Best practice implementation"
        ]
    },
    3: { // Northland Export Credit Agency (NECA)
        disbursementConditions: [
            "Equipment procurement verification",
            "Northland supplier contracts",
            "Import documentation approval",
            "Phased equipment delivery schedule",
            "Quality inspection certificates"
        ],
        repaymentTerms: [
            "Quarterly repayment schedule",
            "Equal principal payments",
            "3-year grace period",
            "Variable interest rate adjustments",
            "2% prepayment penalty"
        ],
        environmentalStandards: [
            "Basic environmental compliance",
            "Equipment emissions standards",
            "Waste handling procedures",
            "Noise pollution controls",
            "Local environmental regulations"
        ],
        socialRequirements: [
            "Local workforce training program",
            "Equipment operation certification",
            "Safety standards compliance",
            "Worker protection measures",
            "Skills transfer requirements"
        ],
        financialCovenants: [
            "Debt Service Coverage Ratio > 1.15x",
            "Asset coverage ratio > 1.25x",
            "Equipment maintenance reserve",
            "Insurance requirements",
            "Working capital maintenance"
        ],
        reportingRequirements: [
            "Equipment utilization reports",
            "Maintenance records",
            "Quarterly financial updates",
            "Insurance coverage verification",
            "Performance metrics tracking"
        ],
        defaultRemedies: [
            "15-day cure period",
            "Equipment repossession rights",
            "Accelerated payment provisions",
            "Cross-default clauses",
            "Performance guarantee calls"
        ],
        additionalRequirements: [
            "Northland maintenance contracts",
            "Spare parts inventory",
            "Training program completion",
            "Equipment upgrade options",
            "Service center establishment"
        ]
    },
    4: { // Southern Regional Bank (SRB)
        disbursementConditions: [
            "Regional development plan alignment",
            "Cross-border coordination approval",
            "Regional impact assessment",
            "Staged funding release",
            "Multi-country clearances"
        ],
        repaymentTerms: [
            "Semi-annual repayment schedule",
            "Equal installments",
            "6-year grace period",
            "Fixed interest rate",
            "1% prepayment fee"
        ],
        environmentalStandards: [
            "Regional environmental standards",
            "Trans-boundary impact assessment",
            "Ecosystem protection measures",
            "Regional pollution controls",
            "Joint monitoring system"
        ],
        socialRequirements: [
            "Regional employment quotas",
            "Cross-border community programs",
            "Cultural heritage preservation",
            "Regional stakeholder engagement",
            "Multi-country benefits sharing"
        ],
        financialCovenants: [
            "Debt Service Coverage Ratio > 1.25x",
            "Regional economic indicators",
            "Currency risk management",
            "Cross-border revenue sharing",
            "Regional development metrics"
        ],
        reportingRequirements: [
            "Regional impact reports",
            "Cross-border coordination updates",
            "Multi-country financial statements",
            "Regional development indicators",
            "Joint monitoring reports"
        ],
        defaultRemedies: [
            "40-day cure period",
            "Regional mediation process",
            "Multi-country consultation",
            "Graduated remedy approach",
            "Regional arbitration provisions"
        ],
        additionalRequirements: [
            "Regional integration measures",
            "Cross-border trade facilitation",
            "Multi-country coordination",
            "Regional capacity building",
            "Joint operational standards"
        ]
    },
    5: { // Western Commercial Bank Consortium (WCBC)
        disbursementConditions: [
            "Standard due diligence completion",
            "Security documentation",
            "Insurance coverage verification",
            "Quick disbursement timeline",
            "Market condition provisions"
        ],
        repaymentTerms: [
            "Quarterly repayment schedule",
            "Equal principal payments",
            "2-year grace period",
            "Variable rate (SOFR + margin)",
            "2.5% prepayment penalty"
        ],
        environmentalStandards: [
            "Basic environmental compliance",
            "Standard impact assessment",
            "Local regulations adherence",
            "Minimal monitoring requirements",
            "Annual environmental review"
        ],
        socialRequirements: [
            "Basic labor standards",
            "Local employment laws",
            "Standard safety requirements",
            "Minimal community engagement",
            "Regular compliance reporting"
        ],
        financialCovenants: [
            "Debt Service Coverage Ratio > 1.35x",
            "Leverage ratio limits",
            "Working capital requirements",
            "Security maintenance",
            "Market value maintenance"
        ],
        reportingRequirements: [
            "Monthly financial statements",
            "Quarterly performance reports",
            "Annual audited accounts",
            "Security value updates",
            "Market condition reports"
        ],
        defaultRemedies: [
            "10-day cure period",
            "Immediate security enforcement",
            "Acceleration rights",
            "Market-based resolution",
            "Quick recovery process"
        ],
        additionalRequirements: [
            "Market standard insurance",
            "Security perfection",
            "Standard representations",
            "Change of control provisions",
            "Market disruption clauses"
        ]
    },
    6: { // Azuria National Development Bank (ENDB)
        disbursementConditions: [
            "National development plan alignment",
            "Government approval process",
            "Local authority clearances",
            "National priority verification",
            "Domestic procurement requirements"
        ],
        repaymentTerms: [
            "Semi-annual repayment schedule",
            "Equal installments",
            "4-year grace period",
            "Fixed interest rate",
            "0.5% prepayment fee"
        ],
        environmentalStandards: [
            "National environmental standards",
            "Local ecosystem protection",
            "Domestic regulations compliance",
            "National monitoring system",
            "Local impact assessment"
        ],
        socialRequirements: [
            "National employment priority",
            "Local community development",
            "Domestic workforce training",
            "National stakeholder engagement",
            "Local content requirements"
        ],
        financialCovenants: [
            "Debt Service Coverage Ratio > 1.2x",
            "National economic indicators",
            "Local currency management",
            "Domestic revenue targets",
            "National development metrics"
        ],
        reportingRequirements: [
            "Government progress reports",
            "National impact assessment",
            "Local authority updates",
            "Domestic financial statements",
            "National development indicators"
        ],
        defaultRemedies: [
            "35-day cure period",
            "Government mediation process",
            "National arbitration",
            "Local resolution process",
            "Domestic legal framework"
        ],
        additionalRequirements: [
            "National coordination",
            "Local capacity building",
            "Domestic supplier preference",
            "National standards compliance",
            "Local development goals"
        ]
    }
};

function setupLoanClauses() {
    const clauseLoanSelect = document.getElementById('clause-loan-select');
    if (!clauseLoanSelect) return;

    // Populate loan selector
    clauseLoanSelect.innerHTML = '<option value="">Choose a loan...</option>';
    loanData.forEach(loan => {
        const option = document.createElement('option');
        option.value = loan.id;
        option.textContent = `${loan.lender} - ${loan.name}`;
        clauseLoanSelect.appendChild(option);
    });

    // Handle loan selection
    clauseLoanSelect.addEventListener('change', function() {
        const selectedLoanId = parseInt(this.value);
        if (!selectedLoanId) return;

        const clauses = loanClausesData[selectedLoanId];
        if (!clauses) return;

        // Update clause contents
        updateClauseContent('disbursement-conditions', clauses.disbursementConditions);
        updateClauseContent('repayment-terms', clauses.repaymentTerms);
        updateClauseContent('environmental-standards', clauses.environmentalStandards);
        updateClauseContent('social-requirements', clauses.socialRequirements);
        updateClauseContent('financial-covenants', clauses.financialCovenants);
        updateClauseContent('reporting-requirements', clauses.reportingRequirements);
        updateClauseContent('default-remedies', clauses.defaultRemedies);
        updateClauseContent('additional-requirements', clauses.additionalRequirements);

        // Add animation effect
        document.querySelectorAll('.clause-item').forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 100);
        });
    });
}

function updateClauseContent(elementId, clauses) {
    const element = document.getElementById(elementId);
    if (!element || !clauses) return;

    element.innerHTML = `
        <ul>
            ${clauses.map(clause => `<li>${clause}</li>`).join('')}
        </ul>
    `;
}

// Loan comparison functionality
let selectedLoans = new Set();
const MAX_COMPARISONS = 3;

function handleLoanComparison(loanId) {
    const checkbox = document.querySelector(`input[data-loan-id="${loanId}"]`);
    if (!checkbox) return;

    if (checkbox.checked) {
        if (selectedLoans.size >= MAX_COMPARISONS) {
            checkbox.checked = false;
            alert(`You can compare up to ${MAX_COMPARISONS} loans at a time.`);
            return;
        }
        selectedLoans.add(loanId);
    } else {
        selectedLoans.delete(loanId);
    }

    updateComparisonTables();
}

function populateComparisonLoanSelector() {
    const selectorContainer = document.getElementById('comparison-loan-selector');
    if (!selectorContainer) return;

    selectorContainer.innerHTML = loanData.map(loan => `
        <div class="loan-checkbox-item">
            <input type="checkbox" 
                   id="compare-loan-${loan.id}" 
                   data-loan-id="${loan.id}" 
                   onchange="handleLoanComparison(${loan.id})">
            <label for="compare-loan-${loan.id}">${loan.lender} - ${loan.name}</label>
        </div>
    `).join('');

    // Select first loan by default
    if (loanData.length > 0) {
        const firstCheckbox = selectorContainer.querySelector('input[type="checkbox"]');
        if (firstCheckbox) {
            firstCheckbox.checked = true;
            handleLoanComparison(loanData[0].id);
        }
    }
}

function updateComparisonDifferences(selectedLoanData) {
    const summaryDiv = document.getElementById('comparison-differences');
    if (!summaryDiv) return;

    if (selectedLoanData.length < 2) {
        summaryDiv.innerHTML = '<p class="empty-state">Select multiple loans to see key differences</p>';
        return;
    }

    const differences = [];

    // Interest Rate Analysis
    const rates = selectedLoanData.map(loan => ({
        lender: loan.lender.split(' ')[0],
        rate: loan.interestRate,
        type: loan.interestRateType
    }));
    const rateDiff = Math.max(...rates.map(r => r.rate)) - Math.min(...rates.map(r => r.rate));
    if (rateDiff > 0.1) {
        differences.push({
            category: 'Interest Rates',
            detail: rates.map(r => `${r.lender}: ${r.rate}% (${r.type})`).join(' vs. '),
            impact: `${rateDiff.toFixed(1)}% difference in rates`,
            significance: rateDiff > 2 ? 'high' : rateDiff > 1 ? 'medium' : 'low'
        });
    }

    // Grace Period Analysis
    const gracePeriods = selectedLoanData.map(loan => ({
        lender: loan.lender.split(' ')[0],
        period: loan.gracePeriod
    }));
    const graceDiff = Math.max(...gracePeriods.map(g => g.period)) - Math.min(...gracePeriods.map(g => g.period));
    if (graceDiff > 0) {
        differences.push({
            category: 'Grace Periods',
            detail: gracePeriods.map(g => `${g.lender}: ${g.period} years`).join(' vs. '),
            impact: `${graceDiff} year${graceDiff > 1 ? 's' : ''} difference in grace period`,
            significance: graceDiff > 3 ? 'high' : graceDiff > 1 ? 'medium' : 'low'
        });
    }

    // Grant Element Analysis
    const grantElements = selectedLoanData.map(loan => ({
        lender: loan.lender.split(' ')[0],
        element: loan.grantElement
    }));
    const grantDiff = Math.max(...grantElements.map(g => g.element)) - Math.min(...grantElements.map(g => g.element));
    if (grantDiff > 2) {
        differences.push({
            category: 'Grant Elements',
            detail: grantElements.map(g => `${g.lender}: ${g.element.toFixed(1)}%`).join(' vs. '),
            impact: `${grantDiff.toFixed(1)}% difference in concessionality`,
            significance: grantDiff > 10 ? 'high' : grantDiff > 5 ? 'medium' : 'low'
        });
    }

    // Maturity Analysis
    const maturities = selectedLoanData.map(loan => ({
        lender: loan.lender.split(' ')[0],
        years: loan.maturity
    }));
    const maturityDiff = Math.max(...maturities.map(m => m.years)) - Math.min(...maturities.map(m => m.years));
    if (maturityDiff > 2) {
        differences.push({
            category: 'Loan Maturity',
            detail: maturities.map(m => `${m.lender}: ${m.years} years`).join(' vs. '),
            impact: `${maturityDiff} year${maturityDiff > 1 ? 's' : ''} difference in maturity`,
            significance: maturityDiff > 8 ? 'high' : maturityDiff > 4 ? 'medium' : 'low'
        });
    }

    // Fee Structure Analysis
    const fees = selectedLoanData.map(loan => ({
        lender: loan.lender.split(' ')[0],
        total: (loan.managementFee + loan.commitmentFee + loan.insuranceFee).toFixed(2)
    }));
    const feeDiff = Math.max(...fees.map(f => parseFloat(f.total))) - Math.min(...fees.map(f => parseFloat(f.total)));
    if (feeDiff > 0.25) {
        differences.push({
            category: 'Fee Structure',
            detail: fees.map(f => `${f.lender}: ${f.total}%`).join(' vs. '),
            impact: `${feeDiff.toFixed(2)}% difference in total fees`,
            significance: feeDiff > 1 ? 'high' : feeDiff > 0.5 ? 'medium' : 'low'
        });
    }

    // Generate HTML for differences
    if (differences.length > 0) {
        const differencesHtml = differences.map(diff => `
            <div class="difference-item ${diff.significance}">
                <div class="difference-header">
                    <h5>${diff.category}</h5>
                    <span class="significance-badge">${diff.significance}</span>
                </div>
                <div class="difference-content">
                    <div class="difference-detail">${diff.detail}</div>
                    <div class="difference-impact">
                        <span class="impact-icon">📊</span>
                        ${diff.impact}
                    </div>
                </div>
            </div>
        `).join('');

        summaryDiv.innerHTML = `
            <div class="differences-grid">
                ${differencesHtml}
            </div>
        `;
    } else {
        summaryDiv.innerHTML = '<p class="empty-state">No significant differences found in key terms</p>';
    }
}

// Update the updateComparisonTables function to use the new differences function
function updateComparisonTables() {
    const comparisonTables = {
        'financial-terms': document.querySelector('.comparison-section:nth-child(1) table tbody'),
        'disbursement-repayment': document.querySelector('.comparison-section:nth-child(2) table tbody'),
        'requirements': document.querySelector('.comparison-section:nth-child(3) table tbody')
    };

    // Clear existing table headers and content
    Object.values(comparisonTables).forEach(table => {
        if (!table) return;
        table.innerHTML = '';
    });

    // Clear table headers and show empty state when no loans selected
    if (selectedLoans.size === 0) {
        // Clear all table headers
        document.querySelectorAll('.comparison-section table thead tr').forEach(headerRow => {
            headerRow.innerHTML = '<th>Feature</th>';
        });

        // Show empty state message in each table
        Object.values(comparisonTables).forEach(table => {
            if (!table) return;
            table.innerHTML = '<tr><td class="empty-state">Select loans above to compare their offers</td></tr>';
        });

        // Clear the differences section
        const summaryDiv = document.getElementById('comparison-differences');
        if (summaryDiv) {
            summaryDiv.innerHTML = '<p class="empty-state">Select loans above to see differences</p>';
        }
        return;
    }

    // Get selected loan data
    const selectedLoanData = Array.from(selectedLoans).map(id => loanData.find(loan => loan.id === id));

    // Update table headers
    document.querySelectorAll('.comparison-section table thead tr').forEach(headerRow => {
        headerRow.innerHTML = `
            <th>Feature</th>
            ${selectedLoanData.map(loan => `<th>${loan.lender}</th>`).join('')}
        `;
    });

    // Financial Terms Table
    if (comparisonTables['financial-terms']) {
        comparisonTables['financial-terms'].innerHTML = `
            <tr>
                <td>Interest Rate</td>
                ${selectedLoanData.map(loan => `
                    <td>${loan.interestRateType === 'Fixed' ? 
                        loan.interestRate + '%' : 
                        loan.interestRate + '% (' + loan.referenceRate + ' + ' + loan.margin + '%)'}</td>
                `).join('')}
            </tr>
            <tr>
                <td>Loan Amount</td>
                ${selectedLoanData.map(loan => `<td>${formatCurrency(loan.amount)}</td>`).join('')}
            </tr>
            <tr>
                <td>Maturity</td>
                ${selectedLoanData.map(loan => `<td>${loan.maturity} years</td>`).join('')}
            </tr>
            <tr>
                <td>Total Fees</td>
                ${selectedLoanData.map(loan => {
                    const totalFees = (loan.managementFee + loan.commitmentFee + loan.insuranceFee);
                    return `<td>${totalFees.toFixed(2)}%</td>`;
                }).join('')}
            </tr>
            <tr>
                <td>Grant Element</td>
                ${selectedLoanData.map(loan => `<td>${loan.grantElement.toFixed(2)}%</td>`).join('')}
            </tr>
        `;
    }

    // Disbursement & Repayment Table
    if (comparisonTables['disbursement-repayment']) {
        comparisonTables['disbursement-repayment'].innerHTML = `
            <tr>
                <td>Grace Period</td>
                ${selectedLoanData.map(loan => `<td>${loan.gracePeriod} years</td>`).join('')}
            </tr>
            <tr>
                <td>Repayment Frequency</td>
                ${selectedLoanData.map(loan => `<td>${loan.repaymentFrequency}</td>`).join('')}
            </tr>
            <tr>
                <td>Repayment Type</td>
                ${selectedLoanData.map(loan => `<td>${loan.repaymentType}</td>`).join('')}
            </tr>
            <tr>
                <td>Prepayment Terms</td>
                ${selectedLoanData.map(loan => `<td>${loan.prepaymentPenalty}</td>`).join('')}
            </tr>
        `;
    }

    // Requirements Table
    if (comparisonTables['requirements']) {
        comparisonTables['requirements'].innerHTML = `
            <tr>
                <td>Environmental Requirements</td>
                ${selectedLoanData.map(loan => `<td>${loan.environmentalRequirements}</td>`).join('')}
            </tr>
            <tr>
                <td>Technical Assistance</td>
                ${selectedLoanData.map(loan => `<td>${loan.technicalAssistance ? 'Included' : 'Not Included'}</td>`).join('')}
            </tr>
            <tr>
                <td>Procurement Type</td>
                ${selectedLoanData.map(loan => `<td>${loan.procurementType}</td>`).join('')}
            </tr>
            <tr>
                <td>Escrow Account</td>
                ${selectedLoanData.map(loan => `<td>${loan.escrowAccount ? 'Required' : 'Not Required'}</td>`).join('')}
            </tr>
        `;
    }

    // Update the differences section
    updateComparisonDifferences(selectedLoanData);
}

// Initialize comparison functionality when the page loads
document.addEventListener('DOMContentLoaded', () => {
    setupLoanComparison();
});

function setupLoanComparison() {
    const loanSelect = document.getElementById('loan-select');
    if (!loanSelect) return;

    // Populate loan selector
    loanSelect.innerHTML = '<option value="">Choose a loan...</option>';
    loanData.forEach(loan => {
        const option = document.createElement('option');
        option.value = loan.id;
        option.textContent = `${loan.lender} - ${loan.name}`;
        loanSelect.appendChild(option);
    });

    // Handle loan selection
    loanSelect.addEventListener('change', function() {
        const selectedLoanId = parseInt(this.value);
        if (!selectedLoanId) {
            clearCalculations();
            return;
        }

        const selectedLoan = loanData.find(loan => loan.id === selectedLoanId);
        if (!selectedLoan) return;

        updateLoanCalculations(selectedLoan);
    });

    // Select first loan by default for better UX
    if (loanData.length > 0) {
        loanSelect.value = loanData[0].id;
        const event = new Event('change');
        loanSelect.dispatchEvent(event);
    }
}

function clearCalculations() {
    // Clear repayment schedule
    document.getElementById('repayment-body').innerHTML = '';

    // Clear cost breakdown
    document.getElementById('principal-amount').textContent = '-';
    document.getElementById('total-interest').textContent = '-';
    document.getElementById('total-fees').textContent = '-';
    document.getElementById('total-cost').textContent = '-';

    // Clear grant element details
    document.getElementById('face-value').textContent = '-';
    document.getElementById('pv-payments').textContent = '-';
    document.getElementById('grant-element-amount').textContent = '-';
    document.getElementById('grant-element-percentage').textContent = '-';

    // Clear NPV details
    document.getElementById('discount-rate').textContent = '-';
    document.getElementById('npv-inflows').textContent = '-';
    document.getElementById('npv-outflows').textContent = '-';
    document.getElementById('net-present-value').textContent = '-';
}

function updateLoanCalculations(loan) {
    // Generate repayment schedule
    const schedule = generateRepaymentSchedule(loan);
    
    // Update repayment schedule table
    updateRepaymentSchedule(schedule);
    
    // Calculate and update cost breakdown
    updateCostBreakdown(loan, schedule);
    
    // Calculate and update grant element
    updateGrantElement(loan, schedule);
    
    // Calculate and update NPV analysis
    updateNPVAnalysis(loan, schedule);
}

function updateRepaymentSchedule(schedule) {
    const tbody = document.getElementById('repayment-body');
    tbody.innerHTML = '';

    schedule.forEach((payment, index) => {
        const row = document.createElement('tr');
        if (index < payment.gracePeriod) {
            row.classList.add('grace-period');
        }
        if (index >= schedule.length - 5) {
            row.classList.add('final-period');
        }

        row.innerHTML = `
            <td>${payment.year}</td>
            <td>${formatCurrency(payment.principalPayment)}</td>
            <td>${formatCurrency(payment.interestPayment)}</td>
            <td>${formatCurrency(payment.fees)}</td>
            <td>${formatCurrency(payment.totalPayment)}</td>
            <td>${formatCurrency(payment.outstandingBalance)}</td>
        `;
        tbody.appendChild(row);
    });
}

function updateCostBreakdown(loan, schedule) {
    const totalPrincipal = loan.amount;
    const totalInterest = schedule.reduce((sum, payment) => sum + payment.interestPayment, 0);
    const totalFees = (loan.managementFee + loan.commitmentFee + loan.insuranceFee) / 100 * loan.amount +
                     schedule.reduce((sum, payment) => sum + payment.fees, 0);
    const totalCost = totalPrincipal + totalInterest + totalFees;

    document.getElementById('principal-amount').textContent = formatCurrency(totalPrincipal);
    document.getElementById('total-interest').textContent = formatCurrency(totalInterest);
    document.getElementById('total-fees').textContent = formatCurrency(totalFees);
    document.getElementById('total-cost').textContent = formatCurrency(totalCost);
}

function updateGrantElement(loan, schedule) {
    const faceValue = loan.amount;
    const cashFlows = [loan.amount]; // Initial inflow
    
    schedule.forEach(payment => {
        cashFlows.push(-(payment.principalPayment + payment.interestPayment + payment.fees));
    });
    
    const npv = calculateNPV(cashFlows);
    const grantElementAmount = faceValue - (npv - faceValue);
    const grantElementPercentage = (grantElementAmount / faceValue) * 100;

    document.getElementById('face-value').textContent = formatCurrency(faceValue);
    document.getElementById('pv-payments').textContent = formatCurrency(npv - faceValue);
    document.getElementById('grant-element-amount').textContent = formatCurrency(grantElementAmount);
    document.getElementById('grant-element-percentage').textContent = formatPercentage(grantElementPercentage);
}

function updateNPVAnalysis(loan, schedule) {
    const discountRate = DISCOUNT_RATE;
    
    // Calculate inflows and outflows
    const inflows = [loan.amount];
    const outflows = schedule.map(payment => 
        payment.principalPayment + payment.interestPayment + payment.fees
    );
    
    const npvInflows = calculateNPV(inflows);
    const npvOutflows = calculateNPV(outflows.map(o => -o));
    const netPresentValue = npvInflows + npvOutflows;

    document.getElementById('discount-rate').textContent = formatPercentage(discountRate * 100);
    document.getElementById('npv-inflows').textContent = formatCurrency(npvInflows);
    document.getElementById('npv-outflows').textContent = formatCurrency(-npvOutflows);
    document.getElementById('net-present-value').textContent = formatCurrency(netPresentValue);
}

// Risk Assessment Data
const riskAssessmentData = {
    clauseRisk: {
        negativePledge: {
            name: 'Negative Pledge',
            details: 'Clause restricting additional pledges of assets',
            riskLevels: {
                1: { level: 'high', icon: '🔴' },
                2: { level: 'medium', icon: '🟡' },
                3: { level: 'low', icon: '🟢' }
            }
        },
        crossDefault: {
            name: 'Cross-Default',
            details: 'Triggers default if borrower defaults elsewhere',
            riskLevels: {
                1: { level: 'high', icon: '🔴' },
                2: { level: 'medium', icon: '🟡' },
                3: { level: 'low', icon: '🟢' }
            }
        },
        restructuringTerms: {
            name: 'Restructuring Terms',
            details: 'Terms allowing flexibility in repayment during stress',
            riskLevels: {
                1: { level: 'high', icon: '🔴' },
                2: { level: 'medium', icon: '🟡' },
                3: { level: 'low', icon: '🟢' }
            }
        }
    },
    financialRisk: {
        gracePeriod: {
            name: 'Grace Period',
            riskLevels: {
                1: { level: 'high', icon: '🔴', threshold: 2 },
                2: { level: 'medium', icon: '🟡', threshold: 4 },
                3: { level: 'low', icon: '🟢', threshold: Infinity }
            }
        },
        interestRate: {
            name: 'Interest Rate',
            riskLevels: {
                1: { level: 'high', icon: '🔴', threshold: 5 },
                2: { level: 'medium', icon: '🟡', threshold: 3 },
                3: { level: 'low', icon: '🟢', threshold: 0 }
            }
        },
        grantElement: {
            name: 'Grant Element',
            riskLevels: {
                1: { level: 'high', icon: '🔴', threshold: 15 },
                2: { level: 'medium', icon: '🟡', threshold: 25 },
                3: { level: 'low', icon: '🟢', threshold: Infinity }
            }
        },
        allInCost: {
            name: 'All-in-cost',
            riskLevels: {
                1: { level: 'high', icon: '🔴', threshold: 15 },
                2: { level: 'medium', icon: '🟡', threshold: 10 },
                3: { level: 'low', icon: '🟢', threshold: 0 }
            }
        }
    }
};

function setupRiskDashboard() {
    const loanSelect = document.getElementById('risk-loan-select');
    if (!loanSelect) return;

    // Populate loan selector
    loanSelect.innerHTML = '<option value="">Choose a loan...</option>';
    loanData.forEach(loan => {
        const option = document.createElement('option');
        option.value = loan.id;
        option.textContent = `${loan.lender} - ${loan.name}`;
        loanSelect.appendChild(option);
    });

    // Handle loan selection
    loanSelect.addEventListener('change', function() {
        const selectedLoanId = parseInt(this.value);
        if (!selectedLoanId) {
            clearRiskAssessment();
            return;
        }

        const selectedLoan = loanData.find(loan => loan.id === selectedLoanId);
        if (!selectedLoan) {
            clearRiskAssessment();
            return;
        }

        updateRiskAssessment(selectedLoan);
    });

    // Select first loan by default for better UX
    if (loanData.length > 0) {
        loanSelect.value = loanData[0].id;
        const event = new Event('change');
        loanSelect.dispatchEvent(event);
    }
}

function clearRiskAssessment() {
    // Clear tables
    const clauseTable = document.getElementById('clause-risk-table');
    if (clauseTable) {
        clauseTable.querySelector('tbody').innerHTML = '';
    }

    const financialTable = document.getElementById('financial-risk-table');
    if (financialTable) {
        financialTable.querySelector('tbody').innerHTML = '';
    }

    // Clear risk summary
    const riskSummary = document.getElementById('risk-summary');
    if (riskSummary) {
        riskSummary.innerHTML = '<p class="empty-state">Select a loan to view risk assessment</p>';
    }

    // Clear benchmark comparisons
    const benchmarkComparisons = document.getElementById('benchmark-comparisons');
    if (benchmarkComparisons) {
        benchmarkComparisons.innerHTML = '<p class="empty-state">Select a loan to view benchmark comparisons</p>';
    }
}

function updateRiskAssessment(loan) {
    if (!loan) {
        clearRiskAssessment();
        return;
    }

    // Update clause risk table
    updateClauseRiskTable(loan);
    
    // Update financial risk table
    updateFinancialRiskTable(loan);
    
    // Update risk summary
    updateRiskSummary(loan);
    
    // Update benchmark comparisons
    updateBenchmarkComparisons(loan);
}

function updateClauseRiskTable(loan) {
    const tbody = document.querySelector('#clause-risk-table tbody');
    if (!tbody) return;

    const clauseRisks = assessClauseRisks(loan);
    tbody.innerHTML = '';

    Object.entries(clauseRisks).forEach(([clause, assessment]) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${assessment.name}</td>
            <td>${assessment.details}</td>
            <td>
                <span class="risk-level ${assessment.risk.level}">
                    ${assessment.risk.icon} ${assessment.risk.level.charAt(0).toUpperCase() + assessment.risk.level.slice(1)}
                </span>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function updateFinancialRiskTable(loan) {
    const tbody = document.querySelector('#financial-risk-table tbody');
    if (!tbody) return;

    const financialRisks = assessFinancialRisks(loan);
    tbody.innerHTML = '';

    Object.entries(financialRisks).forEach(([term, assessment]) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${assessment.name}</td>
            <td>${assessment.value}</td>
            <td>
                <span class="risk-level ${assessment.risk.level}">
                    ${assessment.risk.icon} ${assessment.risk.level.charAt(0).toUpperCase() + assessment.risk.level.slice(1)}
                </span>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function updateRiskSummary(loan) {
    const clauseRisks = assessClauseRisks(loan);
    const financialRisks = assessFinancialRisks(loan);

    // Calculate average risk levels
    const clauseRiskScore = Object.values(clauseRisks)
        .reduce((sum, risk) => sum + getRiskScore(risk.risk.level), 0) / Object.keys(clauseRisks).length;

    const financialRiskScore = Object.values(financialRisks)
        .reduce((sum, risk) => sum + getRiskScore(risk.risk.level), 0) / Object.keys(financialRisks).length;

    const summaryHtml = `
        <div class="risk-summary-content">
            <div class="risk-summary-item">
                <h5>Overall Clause Risk</h5>
                <p>${getRiskLevelFromScore(clauseRiskScore).icon} ${formatRiskScore(clauseRiskScore)}</p>
            </div>
            <div class="risk-summary-item">
                <h5>Overall Financial Risk</h5>
                <p>${getRiskLevelFromScore(financialRiskScore).icon} ${formatRiskScore(financialRiskScore)}</p>
            </div>
            <div class="risk-summary-item">
                <h5>Risk Assessment Summary</h5>
                <p>${generateRiskSummary(clauseRiskScore, financialRiskScore)}</p>
            </div>
        </div>
    `;

    const riskSummary = document.getElementById('risk-summary');
    if (riskSummary) {
        riskSummary.innerHTML = summaryHtml;
    }
}

// Initialize the dashboard when the page loads
document.addEventListener('DOMContentLoaded', () => {
    setupRiskDashboard();
});

function assessClauseRisks(loan) {
    // This would normally be based on actual clause data from the loan
    // For demo purposes, we'll use some example assessments
    return {
        negativePledge: {
            name: riskAssessmentData.clauseRisk.negativePledge.name,
            details: riskAssessmentData.clauseRisk.negativePledge.details,
            risk: riskAssessmentData.clauseRisk.negativePledge.riskLevels[Math.floor(Math.random() * 3) + 1]
        },
        crossDefault: {
            name: riskAssessmentData.clauseRisk.crossDefault.name,
            details: riskAssessmentData.clauseRisk.crossDefault.details,
            risk: riskAssessmentData.clauseRisk.crossDefault.riskLevels[Math.floor(Math.random() * 3) + 1]
        },
        restructuringTerms: {
            name: riskAssessmentData.clauseRisk.restructuringTerms.name,
            details: riskAssessmentData.clauseRisk.restructuringTerms.details,
            risk: riskAssessmentData.clauseRisk.restructuringTerms.riskLevels[Math.floor(Math.random() * 3) + 1]
        }
    };
}

function assessFinancialRisks(loan) {
    return {
        gracePeriod: {
            name: riskAssessmentData.financialRisk.gracePeriod.name,
            value: `${loan.gracePeriod} years`,
            risk: assessRiskLevel(loan.gracePeriod, riskAssessmentData.financialRisk.gracePeriod.riskLevels)
        },
        interestRate: {
            name: riskAssessmentData.financialRisk.interestRate.name,
            value: `${loan.interestRate}%`,
            risk: assessRiskLevel(loan.interestRate, riskAssessmentData.financialRisk.interestRate.riskLevels)
        },
        grantElement: {
            name: riskAssessmentData.financialRisk.grantElement.name,
            value: `${loan.grantElement.toFixed(1)}%`,
            risk: assessRiskLevel(loan.grantElement, riskAssessmentData.financialRisk.grantElement.riskLevels)
        },
        allInCost: {
            name: riskAssessmentData.financialRisk.allInCost.name,
            value: `${loan.allInCost.toFixed(1)}%`,
            risk: assessRiskLevel(loan.allInCost, riskAssessmentData.financialRisk.allInCost.riskLevels)
        }
    };
}

function assessRiskLevel(value, riskLevels) {
    for (let level = 3; level >= 1; level--) {
        if (value <= riskLevels[level].threshold) {
            return riskLevels[level];
        }
    }
    return riskLevels[1]; // Default to high risk
}

function generateRiskSummary(clauseRiskScore, financialRiskScore) {
    const overallRisk = (clauseRiskScore + financialRiskScore) / 2;
    let summary = '';

    if (overallRisk >= 2.5) {
        summary = 'High overall risk profile. Consider additional due diligence and risk mitigation measures.';
    } else if (overallRisk >= 1.5) {
        summary = 'Moderate risk profile. Standard monitoring and controls recommended.';
    } else {
        summary = 'Low risk profile. Maintain standard oversight procedures.';
    }

    return summary;
}

function updateBenchmarkComparisons(loan) {
    const benchmarkDiv = document.getElementById('benchmark-comparisons');
    if (!benchmarkDiv) return;

    // Calculate risk scores for the selected loan
    const loanClauseRiskScore = calculateClauseRiskScore(loan);
    const loanFinancialRiskScore = calculateFinancialRiskScore(loan);

    // Compare with each benchmark
    const benchmarkHTML = Object.entries(lenderBenchmarks).map(([key, benchmark]) => {
        const benchmarkClauseScore = calculateBenchmarkClauseScore(benchmark);
        const benchmarkFinancialScore = calculateBenchmarkFinancialScore(benchmark);

        const clauseDiff = loanClauseRiskScore - benchmarkClauseScore;
        const financialDiff = loanFinancialRiskScore - benchmarkFinancialScore;

        return `
            <div class="benchmark-item">
                <div class="benchmark-header">
                    <span class="benchmark-name">${benchmark.name}</span>
                    <span class="benchmark-type">${getBenchmarkType(benchmark.name)}</span>
                </div>
                <div class="benchmark-details">
                    <div class="risk-comparison">
                        <div class="comparison-item ${clauseDiff > 0 ? 'higher-risk' : 'lower-risk'}">
                            <span class="comparison-label">Clause Risk:</span>
                            <span class="comparison-value">
                                ${Math.abs(clauseDiff).toFixed(1)} points ${clauseDiff > 0 ? 'higher' : 'lower'}
                            </span>
                        </div>
                        <div class="comparison-item ${financialDiff > 0 ? 'higher-risk' : 'lower-risk'}">
                            <span class="comparison-label">Financial Risk:</span>
                            <span class="comparison-value">
                                ${Math.abs(financialDiff).toFixed(1)} points ${financialDiff > 0 ? 'higher' : 'lower'}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    benchmarkDiv.innerHTML = `
        <div class="benchmark-overview">
            <div class="benchmark-grid">
                ${benchmarkHTML}
            </div>
        </div>
    `;
}

function calculateClauseRiskScore(loan) {
    const clauseRisks = assessClauseRisks(loan);
    return Object.values(clauseRisks).reduce((sum, risk) => {
        return sum + getRiskNumericValue(risk.risk.level);
    }, 0) / Object.keys(clauseRisks).length;
}

function calculateFinancialRiskScore(loan) {
    const financialRisks = assessFinancialRisks(loan);
    return Object.values(financialRisks).reduce((sum, risk) => {
        return sum + getRiskNumericValue(risk.risk.level);
    }, 0) / Object.keys(financialRisks).length;
}

function calculateBenchmarkClauseScore(benchmark) {
    return Object.values(benchmark.clauseRisk).reduce((sum, risk) => {
        return sum + getRiskNumericValue(risk.level);
    }, 0) / Object.keys(benchmark.clauseRisk).length;
}

function calculateBenchmarkFinancialScore(benchmark) {
    return Object.values(benchmark.financialRisk).reduce((sum, risk) => {
        return sum + getRiskNumericValue(risk.level);
    }, 0) / Object.keys(benchmark.financialRisk).length;
}

function getRiskNumericValue(level) {
    switch (level) {
        case 'high': return 3;
        case 'medium': return 2;
        case 'low': return 1;
        default: return 2;
    }
}

function getBenchmarkType(name) {
    if (name.includes('World Bank') || name.includes('IMF')) {
        return 'Multilateral Institution';
    }
    if (name.includes('Paris Club')) {
        return 'Official Bilateral';
    }
    if (name.includes('China')) {
        return 'Emerging Bilateral';
    }
    return 'Commercial';
}

function getComparisonIcon(diff) {
    if (diff > 0) {
        return '⬆️';
    } else if (diff < 0) {
        return '⬇️';
    }
    return '➡️';
}

function generateKeyDifferences(loan, benchmark) {
    const differences = [];

    // Compare interest rates
    if (benchmark.financialRisk.interestRate.value !== loan.interestRate) {
        differences.push(`Interest rate: ${loan.interestRate}% vs ${benchmark.financialRisk.interestRate.value}%`);
    }

    // Compare grace period
    if (benchmark.financialRisk.gracePeriod.value !== loan.gracePeriod) {
        differences.push(`Grace period: ${loan.gracePeriod} vs ${benchmark.financialRisk.gracePeriod.value} years`);
    }

    // Generate HTML for differences
    return differences.length > 0 
        ? `<div class="key-differences-list">
            <span class="differences-label">Key Differences:</span>
            <ul>
                ${differences.map(diff => `<li>${diff}</li>`).join('')}
            </ul>
           </div>`
        : '';
}

function setupRiskMap() {
    const canvas = document.getElementById('risk-map-canvas');
    if (!canvas) return;

    function resizeCanvas() {
        const container = canvas.parentElement;
        const rect = container.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;
        
        // Set display size
        canvas.style.width = rect.width + 'px';
        canvas.style.height = rect.height + 'px';
        
        // Set actual size in memory
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        
        // Scale context to ensure correct drawing operations
        const ctx = canvas.getContext('2d');
        ctx.scale(dpr, dpr);
        
        // Draw the map
        drawRiskMap();
    }

    // Initial setup
    resizeCanvas();
    
    // Handle window resize
    window.addEventListener('resize', debounce(resizeCanvas, 250));

    // Handle loan selection change
    const loanSelect = document.getElementById('risk-loan-select');
    if (loanSelect) {
        loanSelect.addEventListener('change', drawRiskMap);
    }
}

function drawRiskMap() {
    const canvas = document.getElementById('risk-map-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const width = canvas.width / dpr;
    const height = canvas.height / dpr;
    const padding = 60;
    const chartWidth = width - 2 * padding;
    const chartHeight = height - 2 * padding;

    // Clear canvas with white background
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, width, height);

    // Draw grid lines
    drawGrid(ctx, padding, chartWidth, chartHeight);

    // Draw axes and labels
    drawAxes(ctx, padding, width, height);

    // Plot selected loan and benchmarks
    const selectedLoanId = document.getElementById('risk-loan-select')?.value;
    if (selectedLoanId) {
        const selectedLoan = loanData.find(loan => loan.id === parseInt(selectedLoanId));
        if (selectedLoan) {
            plotRiskPoints(ctx, selectedLoan, padding, chartWidth, chartHeight);
        }
    }
}

function drawGrid(ctx, padding, chartWidth, chartHeight) {
    const gridLines = 5;
    ctx.strokeStyle = 'rgba(2, 100, 71, 0.1)';
    ctx.lineWidth = 1;

    // Vertical grid lines
    for (let i = 0; i <= gridLines; i++) {
        const x = padding + (chartWidth * i) / gridLines;
        ctx.beginPath();
        ctx.moveTo(x, padding);
        ctx.lineTo(x, padding + chartHeight);
        ctx.stroke();
    }

    // Horizontal grid lines
    for (let i = 0; i <= gridLines; i++) {
        const y = padding + (chartHeight * i) / gridLines;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(padding + chartWidth, y);
        ctx.stroke();
    }
}

function drawAxes(ctx, padding, width, height) {
    // Draw axes
    ctx.beginPath();
    ctx.strokeStyle = '#026447';
    ctx.lineWidth = 2;
    
    // X-axis
    ctx.moveTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    
    // Y-axis
    ctx.moveTo(padding, height - padding);
    ctx.lineTo(padding, padding);
    ctx.stroke();

    // Add labels
    ctx.fillStyle = '#026447';
    ctx.font = 'bold 12px Montserrat';
    
    // X-axis label
    ctx.textAlign = 'center';
    ctx.fillText('Clause Risk Level', width / 2, height - padding / 3);
    
    // Y-axis label
    ctx.save();
    ctx.translate(padding / 3, height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = 'center';
    ctx.fillText('Financial Risk Level', 0, 0);
    ctx.restore();

    // Add axis markers
    const riskLevels = ['Low', 'Medium', 'High'];
    const markerCount = riskLevels.length;
    
    // X-axis markers
    riskLevels.forEach((level, i) => {
        const x = padding + ((width - 2 * padding) * i) / (markerCount - 1);
        ctx.fillText(level, x, height - padding + 20);
    });
    
    // Y-axis markers
    riskLevels.reverse().forEach((level, i) => {
        const y = padding + ((height - 2 * padding) * i) / (markerCount - 1);
        ctx.textAlign = 'right';
        ctx.fillText(level, padding - 10, y + 4);
    });
}

function plotRiskPoints(ctx, loan, padding, chartWidth, chartHeight) {
    // Calculate risk scores
    const clauseRisks = assessClauseRisks(loan);
    const financialRisks = assessFinancialRisks(loan);

    const clauseRiskScore = Object.values(clauseRisks)
        .reduce((sum, risk) => sum + getRiskScore(risk.risk.level), 0) / Object.keys(clauseRisks).length;
    const financialRiskScore = Object.values(financialRisks)
        .reduce((sum, risk) => sum + getRiskScore(risk.risk.level), 0) / Object.keys(financialRisks).length;

    // Convert scores to coordinates (normalize to 0-1 range)
    const normalizedX = (clauseRiskScore - 1) / 2; // Score range is 1-3
    const normalizedY = (financialRiskScore - 1) / 2;

    const x = padding + chartWidth * normalizedX;
    const y = padding + chartHeight * (1 - normalizedY); // Invert Y axis

    // Draw point with gradient
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, 10);
    gradient.addColorStop(0, '#026447');
    gradient.addColorStop(1, 'rgba(2, 100, 71, 0.3)');

    // Draw outer circle
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(2, 100, 71, 0.1)';
    ctx.fill();

    // Draw inner circle
    ctx.beginPath();
    ctx.arc(x, y, 6, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();

    // Add loan label
    ctx.fillStyle = '#026447';
    ctx.font = 'bold 12px Montserrat';
    ctx.textAlign = 'left';
    ctx.fillText(loan.lender.split(' ')[0], x + 15, y + 4);

    // Plot benchmark points
    Object.entries(lenderBenchmarks).forEach(([key, benchmark], index) => {
        const benchmarkClauseScore = calculateBenchmarkClauseScore(benchmark);
        const benchmarkFinancialScore = calculateBenchmarkFinancialScore(benchmark);

        const benchX = padding + chartWidth * ((benchmarkClauseScore - 1) / 2);
        const benchY = padding + chartHeight * (1 - (benchmarkFinancialScore - 1) / 2);

        // Draw benchmark point
        ctx.beginPath();
        ctx.arc(benchX, benchY, 5, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(128, 128, 128, 0.5)';
        ctx.setLineDash([2, 2]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Add benchmark label
        ctx.fillStyle = 'rgba(128, 128, 128, 0.8)';
        ctx.font = '11px Montserrat';
        ctx.textAlign = 'left';
        ctx.fillText(benchmark.name, benchX + 8, benchY + 4);
    });
}

// Make sure to initialize the risk map when the page loads
document.addEventListener('DOMContentLoaded', () => {
    setupRiskMap();
});

// Add benchmark data
const lenderBenchmarks = {
    japan: {
        name: "Japan",
        clauseRisk: {
            negativePledge: { level: 'medium', details: 'Standard negative pledge with exceptions' },
            crossDefault: { level: 'medium', details: 'Limited cross-default provisions' },
            restructuringTerms: { level: 'low', details: 'Flexible restructuring approach' }
        },
        financialRisk: {
            gracePeriod: { value: 5, level: 'low' },
            interestRate: { value: 1.8, level: 'low' },
            grantElement: { value: 32, level: 'low' },
            allInCost: { value: 2.8, level: 'low' }
        }
    },
    parisClub: {
        name: "Paris Club",
        clauseRisk: {
            negativePledge: { level: 'medium', details: 'Standard negative pledge clause' },
            crossDefault: { level: 'medium', details: 'Cross-default with other official creditors' },
            restructuringTerms: { level: 'low', details: 'Flexible restructuring terms' }
        },
        financialRisk: {
            gracePeriod: { value: 5, level: 'low' },
            interestRate: { value: 2.5, level: 'low' },
            grantElement: { value: 35, level: 'low' },
            allInCost: { value: 3.5, level: 'low' }
        }
    },
    worldBank: {
        name: "World Bank",
        clauseRisk: {
            negativePledge: { level: 'high', details: 'Strict negative pledge requirements' },
            crossDefault: { level: 'high', details: 'Comprehensive cross-default provisions' },
            restructuringTerms: { level: 'medium', details: 'Standardized restructuring approach' }
        },
        financialRisk: {
            gracePeriod: { value: 5, level: 'low' },
            interestRate: { value: 2.8, level: 'low' },
            grantElement: { value: 25, level: 'medium' },
            allInCost: { value: 3.8, level: 'low' }
        }
    },
    imf: {
        name: "IMF",
        clauseRisk: {
            negativePledge: { level: 'high', details: 'Strict conditionality' },
            crossDefault: { level: 'high', details: 'Comprehensive cross-default terms' },
            restructuringTerms: { level: 'medium', details: 'Program-based restructuring' }
        },
        financialRisk: {
            gracePeriod: { value: 3, level: 'medium' },
            interestRate: { value: 1.5, level: 'low' },
            grantElement: { value: 30, level: 'low' },
            allInCost: { value: 2.5, level: 'low' }
        }
    },
    china: {
        name: "China",
        clauseRisk: {
            negativePledge: { level: 'low', details: 'Limited restrictions' },
            crossDefault: { level: 'low', details: 'Limited cross-default provisions' },
            restructuringTerms: { level: 'high', details: 'Case-by-case restructuring' }
        },
        financialRisk: {
            gracePeriod: { value: 2, level: 'high' },
            interestRate: { value: 4.5, level: 'high' },
            grantElement: { value: 15, level: 'high' },
            allInCost: { value: 6.0, level: 'high' }
        }
    }
};

// Update the risk map drawing function to include benchmarks
function drawRiskMap() {
    const canvas = document.getElementById('risk-map-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const width = canvas.width / dpr;
    const height = canvas.height / dpr;
    const padding = 60;
    const chartWidth = width - 2 * padding;
    const chartHeight = height - 2 * padding;

    // Clear canvas with white background
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, width, height);

    // Draw background grid
    drawGrid(ctx, padding, chartWidth, chartHeight);

    // Draw axes
    drawAxes(ctx, padding, width, height);

    // Plot benchmarks first (as reference points)
    plotBenchmarks(ctx, padding, chartWidth, chartHeight);

    // Plot selected loan
    const selectedLoanId = document.getElementById('risk-loan-select').value;
    if (selectedLoanId) {
        plotLoans(ctx, padding, chartWidth, chartHeight);
    }
}

function plotBenchmarks(ctx, padding, chartWidth, chartHeight) {
    Object.values(lenderBenchmarks).forEach((benchmark, index) => {
        // Calculate average risk scores
        const clauseRiskScore = Object.values(benchmark.clauseRisk)
            .reduce((sum, risk) => sum + getRiskScore(risk.level), 0) / Object.keys(benchmark.clauseRisk).length;
        
        const financialRiskScore = Object.values(benchmark.financialRisk)
            .reduce((sum, risk) => sum + getRiskScore(risk.level), 0) / Object.keys(benchmark.financialRisk).length;

        // Convert scores to coordinates (normalize to 0-1 range)
        const normalizedX = (3 - clauseRiskScore) / 2;
        const normalizedY = (3 - financialRiskScore) / 2;

        const x = padding + chartWidth * normalizedX;
        const y = padding + chartHeight * normalizedY;

        // Draw benchmark point
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(128, 128, 128, 0.5)';
        ctx.setLineDash([2, 2]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Add benchmark label
        ctx.fillStyle = 'rgba(128, 128, 128, 0.8)';
        ctx.font = '11px Montserrat';
        ctx.textAlign = 'left';
        ctx.fillText(benchmark.name, x + 8, y + 4);
    });
}

// Add these missing functions
function getRiskScore(level) {
    switch (level) {
        case 'low': return 3;
        case 'medium': return 2;
        case 'high': return 1;
        default: return 0;
    }
}

function getRiskLevelFromScore(score) {
    if (score >= 2.5) return { level: 'low', icon: '🟢' };
    if (score >= 1.5) return { level: 'medium', icon: '🟡' };
    return { level: 'high', icon: '🔴' };
}

function formatRiskScore(score) {
    const level = getRiskLevelFromScore(score);
    return level.level.charAt(0).toUpperCase() + level.level.slice(1);
}

// Add menu functionality
function setupHeaderMenu() {
    const menuTrigger = document.querySelector('.menu-trigger');
    const headerMenu = document.querySelector('.header-menu');
    const menuItems = document.querySelectorAll('.menu-item');

    // Toggle menu on trigger click
    menuTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        headerMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!headerMenu.contains(e.target)) {
            headerMenu.classList.remove('active');
        }
    });

    // Handle menu item clicks
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const action = item.getAttribute('data-action');
            handleMenuAction(action);
            headerMenu.classList.remove('active');
        });
    });
}

// Handle menu actions
function handleMenuAction(action) {
    switch (action) {
        case 'home':
            window.location.href = '/';
            break;
        case 'save':
            saveProgress();
            break;
        case 'load':
            loadProgress();
            break;
        case 'profile':
            window.location.href = '/profile';
            break;
        case 'logout':
            handleLogout();
            break;
        case 'glossary':
            showGlossaryModal();
            break;
    }
}

// Save progress to localStorage
function saveProgress() {
    const progress = {
        selectedLoans: Array.from(selectedLoans),
        recommendation: {
            loanId: document.getElementById('recommended-loan')?.value,
            rationale: document.getElementById('recommendation-rationale')?.value
        },
        timestamp: new Date().toISOString()
    };
    
    try {
        localStorage.setItem('loanAnalysisProgress', JSON.stringify(progress));
        showNotification('Progress saved successfully', 'success');
    } catch (error) {
        showNotification('Failed to save progress', 'error');
        console.error('Save error:', error);
    }
}

// Load progress from localStorage
function loadProgress() {
    try {
        const progress = JSON.parse(localStorage.getItem('loanAnalysisProgress'));
        if (!progress) {
            showNotification('No saved progress found', 'info');
            return;
        }

        // Restore selected loans
        selectedLoans = new Set(progress.selectedLoans);
        updateComparisonTables();

        // Restore recommendation
        if (progress.recommendation) {
            const recommendedLoanSelect = document.getElementById('recommended-loan');
            const rationale = document.getElementById('recommendation-rationale');
            
            if (recommendedLoanSelect) recommendedLoanSelect.value = progress.recommendation.loanId;
            if (rationale) rationale.value = progress.recommendation.rationale;
        }

        showNotification('Progress loaded successfully', 'success');
    } catch (error) {
        showNotification('Failed to load progress', 'error');
        console.error('Load error:', error);
    }
}

// Handle logout
function handleLogout() {
    if (confirm('Are you sure you want to logout? Any unsaved progress will be lost.')) {
        // Clear local storage
        localStorage.removeItem('loanAnalysisProgress');
        // Redirect to logout endpoint
        window.location.href = '/logout';
    }
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    // Add notification to document
    document.body.appendChild(notification);

    // Trigger animation
    setTimeout(() => notification.classList.add('show'), 10);

    // Remove notification after delay
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add notification styles
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    .notification {
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 12px 24px;
        border-radius: 4px;
        background: white;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        font-size: 0.9rem;
        transform: translateY(100px);
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 2000;
    }

    .notification.show {
        transform: translateY(0);
        opacity: 1;
    }

    .notification.success {
        background: #e3f7ed;
        color: #026447;
        border-left: 4px solid #026447;
    }

    .notification.error {
        background: #fee7e7;
        color: #d32f2f;
        border-left: 4px solid #d32f2f;
    }

    .notification.info {
        background: #e3f2fd;
        color: #1976d2;
        border-left: 4px solid #1976d2;
    }
`;
document.head.appendChild(notificationStyles);

// Initialize menu when document is ready
document.addEventListener('DOMContentLoaded', () => {
    setupHeaderMenu();
    // ... rest of your initialization code ...
});

// Glossary functionality
function showGlossaryModal() {
    const modal = document.getElementById('glossary-modal');
    const searchInput = document.getElementById('glossary-search');
    
    modal.style.display = 'block';
    setTimeout(() => modal.classList.add('visible'), 10);
    
    // Focus search input
    searchInput.focus();
    
    // Setup search functionality
    setupGlossarySearch();
    
    // Setup close button
    const closeButton = modal.querySelector('.close-button');
    closeButton.onclick = () => {
        modal.classList.remove('visible');
        setTimeout(() => modal.style.display = 'none', 300);
    };
    
    // Close on outside click
    window.onclick = (event) => {
        if (event.target === modal) {
            closeButton.click();
        }
    };
}

function setupGlossarySearch() {
    const searchInput = document.getElementById('glossary-search');
    const terms = document.querySelectorAll('.glossary-categories dt, .glossary-categories dd');
    
    searchInput.addEventListener('input', debounce(() => {
        const searchText = searchInput.value.toLowerCase();
        
        terms.forEach(term => {
            const parent = term.parentElement;
            const category = term.closest('.category');
            const isDefinition = term.tagName.toLowerCase() === 'dd';
            const termText = term.textContent.toLowerCase();
            
            if (!searchText) {
                // Reset everything when search is empty
                term.style.display = '';
                if (category) category.style.display = '';
                term.innerHTML = term.textContent;
                return;
            }
            
            if (termText.includes(searchText)) {
                // Show matching terms and their related elements
                term.style.display = '';
                if (isDefinition) {
                    const prevTerm = term.previousElementSibling;
                    if (prevTerm) prevTerm.style.display = '';
                } else {
                    const nextDef = term.nextElementSibling;
                    if (nextDef) nextDef.style.display = '';
                }
                if (category) category.style.display = '';
                
                // Highlight matching text
                const regex = new RegExp(`(${searchText})`, 'gi');
                term.innerHTML = term.textContent.replace(regex, '<span class="term-highlight">$1</span>');
            } else {
                // Hide non-matching terms
                term.style.display = 'none';
                
                // Check if we should hide the category
                if (category) {
                    const visibleTerms = category.querySelectorAll('dt:not([style*="display: none"]), dd:not([style*="display: none"])');
                    category.style.display = visibleTerms.length ? '' : 'none';
                }
            }
        });
    }, 200));
    
    // Clear search when closing modal
    const modal = document.getElementById('glossary-modal');
    const closeButton = modal.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
        searchInput.value = '';
        terms.forEach(term => {
            term.style.display = '';
            term.innerHTML = term.textContent;
            const category = term.closest('.category');
            if (category) category.style.display = '';
        });
    });
}

function updateProgressBar(targetId) {
    const progressFill = document.querySelector('.progress-fill');
    const tabPositions = {
        'overview': 16.67,
        'details': 33.34,
        'comparisons': 50.01,
        'comparison': 66.68,
        'risk-dashboard': 83.35,
        'recommendation': 100
    };
    progressFill.style.width = tabPositions[targetId] + '%';
}

function switchTab(targetId) {
    // Remove active class from all tabs and contents
    tabButtons.forEach(button => button.classList.remove('active'));
    tabContents.forEach(content => {
        if (content.classList.contains('active')) {
            content.classList.add('fade-out');
            setTimeout(() => {
                content.classList.remove('active', 'fade-out');
            }, 200);
        }
    });

    // Add active class to target button and content
    const targetButton = document.querySelector(`[data-tab="${targetId}"]`);
    const targetContent = document.getElementById(targetId);

    if (targetButton && targetContent) {
        targetButton.classList.add('active');
        
        setTimeout(() => {
            targetContent.classList.add('active');
            
            // Animate content elements
            animateTabContent(targetContent);
            
            // Update progress bar
            updateProgressBar(targetId);
        }, 200);
    }
}

function setupDetailsLoanSelector() {
    const loanSelect = document.getElementById('details-loan-select');
    if (!loanSelect) return;

    // Populate loan selector
    loanSelect.innerHTML = '<option value="">Choose a loan...</option>';
    loanData.forEach(loan => {
        const option = document.createElement('option');
        option.value = loan.id;
        option.textContent = `${loan.lender} - ${loan.name}`;
        loanSelect.appendChild(option);
    });

    // Handle loan selection
    loanSelect.addEventListener('change', function() {
        const selectedLoanId = parseInt(this.value);
        if (!selectedLoanId) {
            clearLoanDetails();
            return;
        }

        const selectedLoan = loanData.find(loan => loan.id === selectedLoanId);
        if (!selectedLoan) return;

        displayLoanDetails(selectedLoan);
    });

    // Select first loan by default for better UX
    if (loanData.length > 0) {
        loanSelect.value = loanData[0].id;
        const event = new Event('change');
        loanSelect.dispatchEvent(event);
    }
}

// Add this to the init function
document.addEventListener('DOMContentLoaded', () => {
    // ... existing initialization code ...
    setupDetailsLoanSelector();
    // ... rest of initialization code ...
});

// Add this after setupOnboardingModal function
function setupGlossaryModal() {
    const modal = document.getElementById('glossary-modal');
    const closeButton = modal.querySelector('.close-button');
    const nextButton = document.getElementById('glossary-next');
    const prevButton = document.getElementById('glossary-prev');
    const steps = modal.querySelectorAll('.onboarding-step');
    const dots = modal.querySelectorAll('.step-dot');
    let currentStep = 0;

    // Update step display
    function updateStep() {
        steps.forEach((step, index) => {
            step.classList.toggle('active', index === currentStep);
        });
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentStep);
        });
        prevButton.disabled = currentStep === 0;
        nextButton.textContent = currentStep === steps.length - 1 ? 'Close' : 'Next';
    }

    function hideModal() {
        modal.classList.remove('visible');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }

    // Event listeners
    nextButton.addEventListener('click', () => {
        if (currentStep === steps.length - 1) {
            hideModal();
        } else {
            currentStep++;
            updateStep();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentStep > 0) {
            currentStep--;
            updateStep();
        }
    });

    closeButton.addEventListener('click', hideModal);

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            hideModal();
        }
    });

    // Initialize first step
    updateStep();
}

// Add this to the DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {
    // Initialize other components first
    init();
    
    // Initialize onboarding modal
    setupOnboardingModal();
    
    // Initialize glossary modal
    setupGlossaryModal();
    
    // Remove loading state and show content
    document.body.classList.remove('loading');
    document.body.classList.add('loaded');
});

// Officials Data
const officialsData = {
    president: {
        name: "Sarah Chenez",
        title: "President",
        image: "img/pres_chenez.png",
        bio: "As the nation's leader, President Chenez is focused on both economic development and maintaining political stability. She sees the port development project as a potential cornerstone of her legacy and a symbol of Azuria's emergence as a regional economic hub.",
        priorities: [
            "National economic growth and competitiveness",
            "Political stability and public approval",
            "International reputation and diplomatic standing",
            "Long-term sustainable development"
        ],
        concerns: [
            "Budgetary constraints and fiscal responsibility",
            "Political opposition and public skepticism",
            "Timeline for visible progress and results",
            "Public perception and political capital"
        ],
        transcript: `Good morning. I'm President Sarah Chenez, and I want to share my perspective on this transformative port development project that will define Azuria's future.

As your President, I see this port as more than infrastructure – it's a symbol of our nation's emergence as a regional economic hub. This project represents the cornerstone of our National Development Strategy 2029, positioning Azuria as a gateway for international trade and investment.

The strategic importance cannot be overstated. Our current port capacity of 2.1 million TEUs limits our growth potential. This new deep-water facility will triple our capacity and establish Azuria as the premier maritime gateway in our region. We're not just building a port; we're building our economic future.

However, I must be candid about the challenges we face. Political opposition questions whether we can afford this investment, and public skepticism about large infrastructure projects runs deep. My administration's credibility depends on delivering visible progress within reasonable timelines while maintaining fiscal responsibility.

The financing decision you're evaluating will determine not just the project's success, but also my government's legacy. We need terms that align with our revenue timeline – five years of construction with no income, followed by gradual ramp-up to full operations. Any financing package must demonstrate clear value to our citizens and parliament.

International reputation matters greatly. This project will be watched closely by our regional partners and the global development community. Success here opens doors to future investments and strengthens our diplomatic standing.

I'm counting on your analysis to present options that balance favorable terms with development impact. The choice we make must withstand public scrutiny and deliver the transformational change our people deserve. This port will create thousands of jobs, boost GDP growth, and establish Azuria as a leader in sustainable development.

Thank you for your dedication to this critical decision. Our nation's future depends on getting this right.`,
        responses: {
            trade: {
                positive: [
                    "Now THIS is what I call strategic thinking! These projections will make our neighbors green with envy. I can already see the headlines: 'Azuria Becomes Regional Trade Powerhouse.' My speechwriter is going to love this.",
                    "Excellent work. You know, when I ran for office, I promised to put Azuria on the map. This port will literally do that – every shipping route in the region will have to acknowledge us. The opposition won't know what hit them.",
                    "These numbers are music to my ears. Do you realize what this means for our next election cycle? Jobs, growth, international recognition – it's a political trifecta. Though I suppose I shouldn't be thinking about politics... *winks*"
                ],
                negative: [
                    "Hold on there, chief. These projections are more optimistic than my campaign promises, and that's saying something! Let's bring this back down to earth before my Finance Minister has a heart attack.",
                    "I appreciate your enthusiasm, but these numbers would make even our most creative statisticians blush. What happens when our neighboring ports start offering better incentives? We need a reality check here.",
                    "Look, I love a good success story as much as the next politician, but this reads like a fairy tale. My grandmother always said 'If it sounds too good to be true, it probably involves creative accounting.'"
                ],
                neutral: [
                    "Interesting analysis, though I'm getting mixed signals here. It's like my cabinet meetings – everyone has a different opinion. Can you help me understand which scenario is most likely?",
                    "This reminds me of my first budget presentation – lots of numbers, some optimism, but I need the bottom line. What's your confidence level in these projections?"
                ]
            },
            jobs: {
                positive: [
                    "Now you're speaking my language! Nothing wins elections like job creation. Well, except maybe free healthcare, but that's another budget entirely. These numbers will make great campaign material... I mean, great policy outcomes.",
                    "This is exactly what our youth need to hear. My daughter just graduated university and keeps asking when she can move back home. Maybe now I can tell her there's actually a future here in Azuria!",
                    "Fantastic! Though I hope these aren't just construction jobs that disappear faster than my approval ratings during budget season. We need careers, not just temporary work."
                ],
                negative: [
                    "These job numbers are more inflated than my campaign budget. Let's be honest – how many of these positions will actually go to Azurians versus imported workers? I need real numbers, not wishful thinking.",
                    "I'm concerned we're promising jobs we can't deliver. Remember the last infrastructure project? We promised 5,000 jobs and delivered 500. The media had a field day, and I'm still hearing about it at dinner parties.",
                    "Look, I want to believe these numbers, but my political survival depends on managing expectations. What's the worst-case scenario here? Because that's what the opposition will use against us."
                ],
                neutral: [
                    "These employment projections need more detail. I need to know the skill levels, duration, and local content. My Labor Minister will grill me on this, and she's tougher than my mother-in-law.",
                    "Jobs are great, but what about the skills gap? Half our workforce can barely operate a smartphone, let alone advanced port equipment. Do we have a training plan?"
                ]
            },
            finance: {
                positive: [
                    "Finally, someone who understands that I can't just print money! Though between you and me, I've been tempted. This financing structure actually makes sense – unlike some proposals I've seen lately.",
                    "This is the kind of fiscal responsibility that makes my Finance Minister smile. And trust me, that man hasn't smiled since the last budget surplus... which was before I took office.",
                    "Excellent work. This approach shows we can be ambitious without being reckless. My predecessor left us with enough debt headaches – we don't need to add to the collection."
                ],
                negative: [
                    "These terms make me nervous, and I've negotiated with some tough characters. Are we getting the best deal here, or are we being taken for a ride? I didn't become President to be anyone's financial doormat.",
                    "I'm seeing red flags here, and not the good kind from our national colors. These conditions seem designed to benefit everyone except Azuria. What's our negotiating position?",
                    "This financing package has more strings attached than a puppet show. Can we do better, or are we stuck with these terms? I need options, not ultimatums."
                ],
                neutral: [
                    "The numbers look reasonable, but I need to understand the political implications. How will this play with parliament? They're already skeptical of big spending projects.",
                    "This seems workable, but I want a second opinion. Can you run this by our economic advisors? I trust your analysis, but I trust verification more."
                ]
            }
        }
    },
    financeMinister: {
        name: "Miko Rodriguez",
        title: "Finance Minister",
        image: "img/fm_rodriguez.png",
        bio: "Finance Minister Rodriguez brings over 15 years of experience in public finance and economic policy. He is known for his analytical approach and commitment to fiscal discipline while supporting strategic investments that drive long-term economic growth.",
        priorities: [
            "Fiscal responsibility and debt sustainability",
            "Maximizing return on public investments",
            "Maintaining favorable credit ratings",
            "Economic diversification and resilience"
        ],
        concerns: [
            "Debt-to-GDP ratio and fiscal space",
            "Foreign exchange exposure and currency risks",
            "Project cost overruns and budget control",
            "Parliamentary approval and budget allocation"
        ],
        transcript: `Good day. I'm Finance Minister Miko Rodriguez, and I want to provide you with my financial perspective on the port development project financing options.

After fifteen years in public finance, I've learned that successful infrastructure projects require more than just funding – they need smart financial structuring that aligns costs with benefits over time. This $300 million investment represents our largest infrastructure commitment, and we must approach it with analytical rigor.

Let me share the key financial parameters that will guide our decision. Our current debt-to-GDP ratio stands at 48%, providing some fiscal space, but we must be cautious about additional borrowing. Our foreign reserves of $8.2 billion offer reasonable coverage, though we must consider foreign exchange exposure in any financing arrangement.

The project's financial profile presents unique challenges. Zero revenue during the five-year construction phase means we need substantial grace periods. The gradual ramp-up from years five to eight requires flexible repayment structures. Only when we reach full operations in year eight can we expect annual revenues of $45-60 million.

I've calculated that our debt service coverage ratio must remain above 1.25 throughout the operational period. This means annual debt service cannot exceed $36-48 million once revenues stabilize. Any financing option exceeding these thresholds jeopardizes our fiscal sustainability.

Grant element analysis will be crucial to our evaluation. Higher concessionality reduces the real cost of borrowing and preserves fiscal space for other development priorities. I'm particularly interested in options offering grant elements above 35%, which our development partners have indicated as highly concessional.

Net present value calculations using our 10% discount rate show the project generating positive returns, but sensitivity analysis reveals vulnerability to construction delays and demand shortfalls. Conservative assumptions suggest IRR between 12-15%, providing reasonable margins above our cost of capital.

Foreign exchange risk concerns me greatly. With revenues likely in local currency but debt service in hard currency, we need natural hedging or explicit protection mechanisms. Currency depreciation could dramatically increase our real debt burden.

Parliamentary approval requires clear demonstration of fiscal responsibility. Any recommendation must show how this investment enhances rather than threatens our long-term fiscal position. The numbers must tell a compelling story of sustainable development finance.

I look forward to reviewing your comprehensive financial analysis and recommendations.`,
        responses: {
            analysis: {
                positive: [
                    "Now THIS is the kind of analysis that makes my economist heart sing! These ROI figures are so good, I almost suspect you've been taking creative accounting lessons from our neighbors. But the math checks out beautifully.",
                    "Excellent work! These projections are more solid than my grandmother's fruitcake – and that thing could survive a nuclear winter. I can actually present this to parliament without needing antacids.",
                    "Finally, someone who understands that optimism without numbers is just wishful thinking! These NPV calculations are poetry in motion. My team will be thrilled – they love it when the math actually works."
                ],
                negative: [
                    "Hold your horses there, partner. These projections are more optimistic than a lottery ticket buyer. Where are the contingencies? The risk factors? This reads like a fairy tale written by someone who's never seen a budget overrun.",
                    "I've seen more realistic assumptions in children's fairy tales. That discount rate you're using – did you pull it from a hat? Let's recalculate this with numbers that won't make parliament laugh us out of the building.",
                    "These numbers are giving me a headache, and not the good kind from celebrating a balanced budget. We need conservative estimates that account for Murphy's Law – because in infrastructure projects, everything that can go wrong usually does."
                ],
                neutral: [
                    "The analysis shows promise, but I need more detail on the sensitivity scenarios. What happens if construction costs increase by 20%? Or if demand projections are off by 15%?",
                    "This is a good start, but I'm seeing some gaps in the risk assessment. Can you walk me through your worst-case scenarios? I need to prepare for parliamentary questions."
                ]
            },
            debt: {
                positive: [
                    "Beautiful! This debt structure is more elegant than a Swiss watch. The grace period aligns perfectly with our cash flow projections. Even my most pessimistic deputy can't find fault with this timeline.",
                    "This is exactly what I hoped to see – a repayment schedule that doesn't require us to sell our national monuments to make payments. The debt-to-GDP trajectory looks manageable, even sustainable!",
                    "Fantastic work! This structure shows we can be ambitious without being suicidal. The President will love this, and more importantly, my sleep schedule will thank you."
                ],
                negative: [
                    "This repayment schedule is tighter than my budget during election year. The early operational years look particularly brutal – we'll be paying debt service before we're earning decent revenue. That's a recipe for fiscal indigestion.",
                    "I'm getting nervous just looking at these numbers. The foreign exchange exposure alone could bankrupt us if our currency decides to take a vacation. Do we have any hedging options, or are we gambling with the national treasury?",
                    "This debt profile makes me want to hide under my desk. The payment schedule assumes everything goes perfectly – no delays, no cost overruns, no economic hiccups. In my 15 years of experience, nothing ever goes perfectly."
                ],
                neutral: [
                    "The debt structure is workable, but I need to understand the refinancing options. What happens if we need to restructure payments during the operational ramp-up period?",
                    "This looks reasonable on paper, but I want to stress-test it against various economic scenarios. Can you model this under different interest rate environments?"
                ]
            },
            grant: {
                positive: [
                    "Now we're talking! This grant element is more generous than my mother-in-law at Christmas. A 40%+ concessionality level means we're essentially getting paid to borrow money. My accountants are doing happy dances.",
                    "This is the kind of deal that makes other Finance Ministers jealous at regional summits. The grant element analysis is spot-on, and the total economic cost is actually reasonable. I might even sleep well tonight!",
                    "Excellent! This concessionality level will make parliament purr like contented cats. The real cost of borrowing is so low, it's almost like getting a development grant with a fancy loan wrapper."
                ],
                negative: [
                    "These grant element calculations are more confusing than our tax code. Are you using the right benchmark rate? Because these numbers suggest we're getting a worse deal than my cousin's payday loan.",
                    "I'm not convinced by this analysis. The hidden costs are lurking in the fine print like termites in old wood. What about the procurement restrictions? The tied aid components? The devil is always in the details.",
                    "This grant element calculation needs serious revision. Either your benchmark rate is wrong, or we're getting fleeced. Let's recalculate this before I have to explain to parliament why we chose the expensive option."
                ],
                neutral: [
                    "The grant element looks reasonable, but I need to verify the benchmark rate calculation. Can you show me the methodology and compare it with recent similar transactions?",
                    "This analysis is helpful, but I want to understand the full cost implications. What are the opportunity costs of the tied procurement requirements?"
                ]
            }
        }
    },
    infrastructureMinister: {
        name: "Uche Kwesi",
        title: "Infrastructure Minister",
        image: "img/im_kwesi.png",
        bio: "Minister Kwesi is a civil engineer with extensive experience in large-scale infrastructure projects across Africa. He is passionate about building world-class facilities that meet international standards while incorporating local expertise and sustainable practices.",
        priorities: [
            "Technical excellence and international standards",
            "Environmental sustainability and climate resilience",
            "Local capacity building and knowledge transfer",
            "Regional infrastructure connectivity"
        ],
        concerns: [
            "Technical complexity and implementation challenges",
            "Environmental impact and regulatory compliance",
            "Skills gap and technical capacity",
            "Construction timeline and quality control"
        ],
        transcript: `Greetings. I'm Infrastructure Minister Uche Kwesi, and I want to discuss the technical dimensions of our port development project that will influence our financing decision.

As a civil engineer with extensive experience across Africa's infrastructure landscape, I understand that successful port projects require more than capital – they demand technical excellence, environmental stewardship, and sustainable design principles.

This deep-water port represents a generational opportunity to build world-class infrastructure. Our specifications call for state-of-the-art container handling equipment, advanced cargo management systems, and climate-resilient design standards. We're planning automated stacking cranes, ship-to-shore gantry cranes, and integrated logistics platforms that will set new regional benchmarks.

Technical assistance will be crucial to our success. Our local engineering capacity, while growing, needs significant enhancement to manage a project of this complexity. I'm particularly interested in financing packages that include comprehensive technology transfer, training programs for our technical staff, and ongoing operational support during the initial years.

Environmental sustainability is non-negotiable. We're committed to achieving green port certification and implementing best practices for marine ecosystem protection. This includes advanced wastewater treatment, air quality monitoring systems, and renewable energy integration. Environmental compliance isn't just about meeting standards – it's about demonstrating leadership in sustainable infrastructure development.

The construction timeline presents significant technical challenges. Dredging operations, wharf construction, and equipment installation must be carefully sequenced to minimize environmental impact while maintaining project momentum. Weather patterns, soil conditions, and marine protection requirements all influence our construction strategy.

Local capacity building is essential for long-term success. This project must transfer knowledge to Azurian engineers, create career pathways for our youth, and establish technical capabilities that extend beyond this single project. The financing package should include provisions for local contractor participation and skills development programs.

Quality control systems will be critical given the project's complexity and scale. We need robust monitoring frameworks, independent quality assurance, and regular technical audits throughout construction and commissioning phases. Poor quality compromises safety, operational efficiency, and our international reputation.

Regional connectivity considerations also matter. This port must integrate seamlessly with our planned rail extensions, road improvements, and digital infrastructure investments. Financing options that support broader connectivity initiatives will maximize the project's economic impact.

I'm committed to delivering infrastructure that operates efficiently for decades, meets international standards, and demonstrates Azuria's technical capabilities. Your financing recommendation should support these technical objectives while ensuring sustainable implementation.

Thank you for considering these technical perspectives in your analysis.`,
        responses: {
            technical: {
                positive: [
                    "Now THIS is what I call proper technical planning! This knowledge transfer package is more comprehensive than my engineering textbooks. Our local teams will finally get the training they deserve – no more learning by trial and error!",
                    "Excellent! This technical assistance program addresses every concern I had. It's like Christmas morning for an engineer – advanced training, technology transfer, and operational support. Our technical capacity will leap forward by decades.",
                    "Perfect! This approach shows real understanding of our technical challenges. The capacity building elements are so thorough, even my most skeptical engineers are impressed. And trust me, they're harder to please than my wife when I track mud through the house."
                ],
                negative: [
                    "This technical package is thinner than the instruction manual for my last smartphone. We need comprehensive training, not a weekend workshop! Our engineers deserve better than learning advanced port operations from YouTube videos.",
                    "I'm disappointed. This technical assistance looks like it was designed by someone who's never seen a crane, let alone operated one. We need serious knowledge transfer, not just a few PowerPoint presentations and a handshake.",
                    "This won't cut it. The technical specifications are more basic than my first engineering project in university. We're building a world-class port, not a fishing dock! Where's the advanced automation? The smart systems? The future-proofing?"
                ],
                neutral: [
                    "The technical package shows promise, but I need more details on the training curriculum. How many of our engineers will be certified? What's the timeline for knowledge transfer?",
                    "This is a good foundation, but I want to understand the long-term technical support arrangements. Will we have ongoing access to expertise after commissioning?"
                ]
            },
            environmental: {
                positive: [
                    "Outstanding! These environmental standards are stricter than my mother's house rules. The green port certification will make us the envy of the region – and more importantly, it'll keep the environmental groups happy.",
                    "This is exactly what I wanted to see! Climate resilience built into every design element. Our grandchildren will thank us for building infrastructure that can weather any storm – literally and figuratively.",
                    "Brilliant work! These environmental safeguards are more comprehensive than our national environmental code. The marine ecosystem protection measures are particularly impressive – the fish will practically send us thank-you cards."
                ],
                negative: [
                    "These environmental measures are weaker than decaf coffee. Where are the marine protection protocols? The air quality monitoring? We can't build a port that destroys the very environment that sustains our coastal communities.",
                    "I'm seeing major gaps in the environmental framework. This reads like it was written by someone who thinks 'green' just means the color of money. We need serious environmental protection, not greenwashing.",
                    "This environmental plan wouldn't pass a high school science class, let alone international standards. The monitoring systems are inadequate, and the mitigation measures are wishful thinking at best."
                ],
                neutral: [
                    "The environmental framework is reasonable, but I need more specifics on the monitoring protocols. How will we track compliance during construction and operation?",
                    "This shows good intentions, but I want to see the detailed environmental impact assessments. What are the specific mitigation measures for each construction phase?"
                ]
            },
            timeline: {
                positive: [
                    "This timeline is more realistic than my project estimates usually are! The phased approach shows real understanding of construction complexities. Even my most pessimistic project managers can't find major flaws here.",
                    "Excellent sequencing! This construction timeline accounts for weather patterns, equipment delivery, and even our local bureaucracy. It's like someone actually understands how infrastructure projects work in the real world.",
                    "Perfect! This timeline gives us enough buffer for the inevitable surprises without being so conservative that we're still building when my grandchildren retire. The integration with our other infrastructure projects is particularly well thought out."
                ],
                negative: [
                    "This timeline is more optimistic than my first marriage. Five years for a project this complex? Either you've discovered time travel, or you've never managed a major construction project. We need realistic schedules, not fantasy timelines.",
                    "I'm concerned about this aggressive timeline. It assumes perfect weather, no equipment delays, no permit issues, and no labor disputes. In my experience, at least three of those assumptions will be wrong.",
                    "This schedule is tighter than my budget for office supplies. The sequencing doesn't account for the rainy season, equipment shipping delays, or the fact that our local contractors work at their own pace. We need more realistic planning."
                ],
                neutral: [
                    "The timeline looks ambitious but achievable. However, I need to understand the contingency plans. What happens if we encounter unexpected geological conditions during dredging?",
                    "This is a reasonable schedule, but I want to review the critical path dependencies. How will delays in one phase affect the overall timeline?"
                ]
            }
        }
    }
};

// Setup official cards interaction
function setupOfficialCards() {
    const officialCards = document.querySelectorAll('.official-card');
    
    officialCards.forEach(card => {
        card.addEventListener('click', function() {
            const officialName = this.querySelector('.official-info p').textContent;
            let modalId;
            
            switch(officialName) {
                case 'Sarah Chenez':
                    modalId = 'president-modal';
                    break;
                case 'Miko Rodriguez':
                    modalId = 'finance-minister-modal';
                    break;
                case 'Uche Kwesi':
                    modalId = 'infrastructure-minister-modal';
                    break;
            }
            
            if (modalId) {
                showOfficialModal(modalId);
            }
        });
    });
    
    // Setup transcript functionality
    setupTranscriptModal();
}

function showOfficialModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
    setTimeout(() => modal.classList.add('visible'), 10);
    
    setupModalClose(modal);
    setupEngagementOptions(modal);
}

function setupModalClose(modal) {
    const closeButton = modal.querySelector('.close-button');
    
    closeButton.onclick = () => {
        modal.classList.remove('visible');
        setTimeout(() => modal.style.display = 'none', 300);
    };
    
    window.onclick = (event) => {
        if (event.target === modal) {
            closeButton.onclick();
        }
    };
}

function setupEngagementOptions(modal) {
    const options = modal.querySelectorAll('.engagement-option');
    
    options.forEach(option => {
        option.onclick = () => {
            const optionType = option.getAttribute('data-option');
            const officialType = modal.id.replace('-modal', '');
            
            // Get official data
            let official;
            switch(officialType) {
                case 'president':
                    official = officialsData.president;
                    break;
                case 'finance-minister':
                    official = officialsData.financeMinister;
                    break;
                case 'infrastructure-minister':
                    official = officialsData.infrastructureMinister;
                    break;
            }
            
            if (official && official.responses[optionType]) {
                // Get context-aware response based on user's progress and choices
                const responseData = generateContextualResponse(official, optionType, officialType);
                showEnhancedResponseModal(official, responseData);
            }
        };
    });
}

function generateContextualResponse(official, optionType, officialType) {
    const userContext = analyzeUserContext();
    const baseResponses = official.responses[optionType];
    
    // Determine response sentiment based on user's actual choices and progress
    let responseType = 'neutral';
    let contextualMessage = '';
    let followUpQuestion = '';
    
    // Add personality-based response modifiers
    const personalityQuirks = getOfficialPersonalityQuirks(official.name);
    
    // Analyze user's progress and choices to determine realistic response
    if (userContext.hasSelectedLoan) {
        const selectedLoan = userContext.selectedLoan;
        
        switch(optionType) {
            case 'trade':
            case 'jobs':
                // President responses based on project understanding
                if (userContext.completedAnalysis && userContext.hasReasonableChoice) {
                    responseType = 'positive';
                    const analysisQuality = assessAnalysisQuality(userContext);
                    if (analysisQuality === 'excellent') {
                        contextualMessage = `Outstanding work! Your analysis of the ${selectedLoan.lender} option is more thorough than my last campaign strategy. This shows real understanding of both the economics and politics involved.`;
                        followUpQuestion = "I'm impressed. How confident are you that we can sell this to the skeptics in parliament?";
                    } else if (analysisQuality === 'good') {
                        contextualMessage = `Good analysis on the ${selectedLoan.lender} option. You've clearly done your homework, though I suspect my Finance Minister will have some follow-up questions.`;
                        followUpQuestion = "What's your backup plan if the opposition challenges these projections?";
                    } else {
                        contextualMessage = `I can see you've put effort into analyzing the ${selectedLoan.lender} option. The direction looks promising, though we might need to strengthen some of the supporting arguments.`;
                        followUpQuestion = "How do you think this will play with our parliamentary opposition?";
                    }
                } else {
                    responseType = 'neutral';
                    contextualMessage = "I appreciate you bringing this to my attention, but I need to see more comprehensive analysis before I can fully endorse this direction. You know how the media loves to pounce on half-baked proposals.";
                    followUpQuestion = "Have you considered all the political implications of this choice?";
                }
                break;
                
            case 'finance':
                // President financial responses with personality
                responseType = evaluateFinancialChoice(selectedLoan, userContext);
                if (responseType === 'positive') {
                    contextualMessage = `The ${selectedLoan.lender} option you've selected shows fiscal wisdom that would make my predecessor jealous. Finance Minister Rodriguez will actually smile when he sees these terms – and that's rarer than a balanced budget.`;
                    followUpQuestion = "What's your assessment of the political timeline? Can we get this through parliament before the next election cycle?";
                } else if (responseType === 'negative') {
                    contextualMessage = `I'm getting nervous about the ${selectedLoan.lender} option. These terms remind me of the deals my predecessor made – and we're still paying for those mistakes. Literally.`;
                    followUpQuestion = "Have you explored all available alternatives? I don't want to be explaining this choice to voters in two years.";
                } else {
                    contextualMessage = `The ${selectedLoan.lender} option has potential, but I need more convincing. Remember, I have to defend this choice to parliament, the media, and eventually the voters.`;
                    followUpQuestion = "Can you strengthen the case for why this is our best option?";
                }
                break;
                
            case 'analysis':
            case 'debt':
            case 'grant':
                // Finance Minister responses with technical humor
                if (userContext.hasCalculations) {
                    const metrics = userContext.loanMetrics;
                    responseType = evaluateFinancialMetrics(metrics, selectedLoan);
                    if (responseType === 'positive') {
                        const grantElement = metrics.grantElement || 0;
                        if (grantElement > 40) {
                            contextualMessage = `Excellent! Your analysis of the ${selectedLoan.lender} option is so good, I'm checking for calculation errors out of habit. A ${grantElement}% grant element? That's better than finding money in my old jacket pockets!`;
                            followUpQuestion = "This looks almost too good to be true. What are the catch clauses I should worry about?";
                        } else if (grantElement > 25) {
                            contextualMessage = `Solid work on the ${selectedLoan.lender} analysis. The ${grantElement}% grant element is respectable – not spectacular, but it won't give me nightmares either.`;
                            followUpQuestion = "How does this compare to what our neighbors are getting for similar projects?";
                        } else {
                            contextualMessage = `Your analysis of the ${selectedLoan.lender} option is thorough, though the ${grantElement}% grant element is making my accountant side nervous. We can work with this, but it's not ideal.`;
                            followUpQuestion = "Are there any hidden benefits that might improve the overall package?";
                        }
                    } else {
                        contextualMessage = `I appreciate your analysis, but the ${selectedLoan.lender} numbers are giving me the same feeling I get when reviewing our national debt figures – mild panic with a side of indigestion.`;
                        followUpQuestion = "Have you stress-tested this against our worst-case economic scenarios?";
                    }
                } else {
                    responseType = 'neutral';
                    contextualMessage = "I'd like to see your detailed financial calculations before we discuss specific options. Numbers don't lie, but they can certainly be misleading without proper context.";
                    followUpQuestion = "Can you show me the NPV analysis and grant element calculations? And please, show your work – I trust but verify.";
                }
                break;
                
            case 'technical':
            case 'environmental':
            case 'timeline':
                // Infrastructure Minister responses with engineering perspective
                responseType = evaluateTechnicalChoice(selectedLoan, optionType);
                if (responseType === 'positive') {
                    if (optionType === 'technical') {
                        contextualMessage = `Excellent! The ${selectedLoan.lender} technical package is more comprehensive than my engineering degree curriculum. This level of knowledge transfer will actually prepare our teams for world-class operations.`;
                        followUpQuestion = "How will we ensure our local engineers can absorb all this technical knowledge? We don't want to overwhelm them.";
                    } else if (optionType === 'environmental') {
                        contextualMessage = `Outstanding environmental approach with the ${selectedLoan.lender} option! These standards are stricter than my wife's rules for tracking mud in the house – and that's saying something.`;
                        followUpQuestion = "What's the timeline for achieving these environmental certifications? The green groups will be watching closely.";
                    } else {
                        contextualMessage = `This ${selectedLoan.lender} timeline actually makes sense! It's realistic without being so conservative that we'll still be building when my grandchildren graduate engineering school.`;
                        followUpQuestion = "What contingency plans do we have if we hit unexpected challenges during construction?";
                    }
                } else {
                    if (optionType === 'technical') {
                        contextualMessage = `I'm concerned about the ${selectedLoan.lender} technical package. It's thinner than the manual for my last smartphone – and we all know how that turned out.`;
                        followUpQuestion = "Can we negotiate for more comprehensive technical assistance? Our engineers deserve better than learning from YouTube videos.";
                    } else if (optionType === 'environmental') {
                        contextualMessage = `The environmental provisions in the ${selectedLoan.lender} package are weaker than decaf coffee. We need serious protection measures, not just green-colored paperwork.`;
                        followUpQuestion = "How can we strengthen the environmental safeguards without derailing the entire project?";
                    } else {
                        contextualMessage = `This ${selectedLoan.lender} timeline is more optimistic than my first project estimate as a junior engineer. We need realistic schedules, not fantasy planning.`;
                        followUpQuestion = "What's the most realistic timeline if we account for our local conditions and constraints?";
                    }
                }
                break;
        }
    } else {
        // User hasn't selected a loan yet - add personality to generic responses
        responseType = 'neutral';
        const genericResponses = getGenericResponseWithPersonality(official.name);
        contextualMessage = genericResponses.message;
        followUpQuestion = genericResponses.followUp;
    }
    
    // Use contextual message if available, otherwise fall back to base response
    let finalMessage = contextualMessage;
    
    if (!finalMessage) {
        const responses = baseResponses[responseType] || baseResponses.positive;
        finalMessage = responses[Math.floor(Math.random() * responses.length)];
    }
    
    // Add occasional personality quirks
    if (Math.random() > 0.8) {
        finalMessage += " " + personalityQuirks[Math.floor(Math.random() * personalityQuirks.length)];
    }
    
    return {
        message: finalMessage,
        followUp: followUpQuestion,
        sentiment: responseType,
        hasFollowUp: !!followUpQuestion
    };
}

function assessAnalysisQuality(userContext) {
    let score = 0;
    
    // Check completion of tabs
    if (userContext.completedTabs >= 4) score += 2;
    else if (userContext.completedTabs >= 3) score += 1;
    
    // Check if calculations are done
    if (userContext.hasCalculations) score += 1;
    
    // Check loan selection
    if (userContext.hasSelectedLoan) score += 1;
    
    // Check grant element quality
    if (userContext.loanMetrics?.grantElement > 35) score += 2;
    else if (userContext.loanMetrics?.grantElement > 25) score += 1;
    
    if (score >= 5) return 'excellent';
    if (score >= 3) return 'good';
    return 'basic';
}

function getOfficialPersonalityQuirks(officialName) {
    const quirks = {
        'Sarah Chenez': [
            "Politics is like chess, except the board keeps changing and half the pieces have their own agenda.",
            "You know what they say – in politics, today's ally is tomorrow's opposition member.",
            "I've learned that in government, 'simple' and 'straightforward' are mutually exclusive concepts.",
            "Between you and me, governing is 10% policy and 90% managing personalities."
        ],
        'Miko Rodriguez': [
            "In my experience, if the numbers look too good, someone probably forgot to carry the one.",
            "I've been doing this long enough to know that every budget has at least three hidden surprises.",
            "You know what they say – there are lies, damned lies, and overly optimistic financial projections.",
            "After 15 years in finance, I've learned that Murphy's Law has a special fondness for government budgets."
        ],
        'Uche Kwesi': [
            "In engineering, we have a saying: 'It's not whether something can go wrong, but when and how spectacularly.'",
            "I've learned that the difference between theory and practice is always larger in practice than in theory.",
            "You know what they say in construction – measure twice, cut once, and still expect surprises.",
            "After 20 years in infrastructure, I know that every project teaches you something new about humility."
        ]
    };
    
    return quirks[officialName] || ["Let's keep working together on this important project."];
}

function getGenericResponseWithPersonality(officialName) {
    const responses = {
        'Sarah Chenez': {
            message: "I'd be happy to discuss this once you've completed your analysis and have a specific recommendation. You know how I feel about making decisions without all the facts – it's like campaigning without knowing your opponent's platform.",
            followUp: "Which financing option are you leaning towards? And more importantly, which one can we actually defend to the public?"
        },
        'Miko Rodriguez': {
            message: "I'd like to see your detailed financial calculations before we discuss specific options. In my experience, the devil is always in the details – and he's particularly fond of hiding in financial spreadsheets.",
            followUp: "Which financing option looks most promising from a fiscal perspective? And please, show me the worst-case scenarios too."
        },
        'Uche Kwesi': {
            message: "I'd be happy to discuss the technical aspects once you've completed your analysis. Engineering decisions should be based on solid analysis, not wishful thinking or political pressure.",
            followUp: "Which option best addresses our technical requirements? And what are the implementation risks we need to consider?"
        }
    };
    
    return responses[officialName] || {
        message: "I'd be happy to discuss this once you've completed your analysis.",
        followUp: "Which financing option are you considering?"
    };
}

function analyzeUserContext() {
    // Analyze user's progress through the simulation
    const currentTab = document.querySelector('.tab-button.active')?.getAttribute('data-tab');
    const selectedLoanElement = document.getElementById('recommended-loan');
    const hasSelectedLoan = selectedLoanElement && selectedLoanElement.value;
    
    let selectedLoan = null;
    if (hasSelectedLoan) {
        selectedLoan = loanData.find(loan => loan.id == selectedLoanElement.value);
    }
    
    const completedTabs = document.querySelectorAll('.tab-button.completed').length;
    const hasCalculations = document.getElementById('total-cost')?.textContent?.trim() !== '';
    
    // Check if user has made reasonable choices based on analysis
    const hasReasonableChoice = hasSelectedLoan && completedTabs >= 3;
    
    // Get calculated metrics if available
    let loanMetrics = null;
    if (selectedLoan) {
        const grantElementText = document.getElementById('grant-element-percentage')?.textContent;
        const grantElement = grantElementText ? parseFloat(grantElementText.replace('%', '')) : 0;
        
        loanMetrics = {
            grantElement: grantElement,
            totalCost: document.getElementById('total-cost')?.textContent || '',
            npv: document.getElementById('net-present-value')?.textContent || ''
        };
    }
    
    return {
        currentTab,
        hasSelectedLoan,
        selectedLoan,
        completedTabs,
        completedAnalysis: completedTabs >= 4,
        hasCalculations,
        hasReasonableChoice,
        loanMetrics
    };
}

function evaluateFinancialChoice(loan, context) {
    if (!loan) return 'neutral';
    
    // Simple evaluation based on loan characteristics
    const grantElement = context.loanMetrics?.grantElement || 0;
    const interestRate = loan.interestRate || 0;
    
    if (grantElement > 30 && interestRate < 3) {
        return 'positive';
    } else if (grantElement < 15 || interestRate > 4) {
        return 'negative';
    }
    return 'neutral';
}

function evaluateFinancialMetrics(metrics, loan) {
    if (!metrics || !loan) return 'neutral';
    
    const grantElement = metrics.grantElement || 0;
    
    if (grantElement > 35) {
        return 'positive';
    } else if (grantElement < 20) {
        return 'negative';
    }
    return 'neutral';
}

function evaluateTechnicalChoice(loan, optionType) {
    if (!loan) return 'neutral';
    
    // Evaluate based on loan characteristics relevant to technical concerns
    switch(optionType) {
        case 'technical':
            return loan.technicalAssistance ? 'positive' : 'neutral';
        case 'environmental':
            return loan.environmentalStandards ? 'positive' : 'neutral';
        case 'timeline':
            return loan.gracePeriod >= 5 ? 'positive' : 'negative';
        default:
            return 'neutral';
    }
}

function showEnhancedResponseModal(official, responseData) {
    const modal = document.getElementById('response-modal');
    const officialImage = document.getElementById('response-official-image');
    const officialName = document.getElementById('response-official-name');
    const officialTitle = document.getElementById('response-official-title');
    const responseMessage = document.getElementById('response-message');
    
    officialImage.src = official.image;
    officialName.textContent = official.name;
    officialTitle.textContent = official.title;
    responseMessage.textContent = responseData.message;
    
    // Add sentiment-based styling
    const responseBody = modal.querySelector('.response-body');
    responseBody.className = `response-body ${responseData.sentiment}`;
    
    // Add follow-up question if available
    let existingFollowUp = modal.querySelector('.follow-up-section');
    if (existingFollowUp) {
        existingFollowUp.remove();
    }
    
    if (responseData.hasFollowUp) {
        const followUpSection = document.createElement('div');
        followUpSection.className = 'follow-up-section';
        
        // Generate contextual user response options
        const userContext = analyzeUserContext();
        const userResponseOptions = generateUserResponseOptions(official, responseData, userContext);
        
        followUpSection.innerHTML = `
            <div class="follow-up-question">
                <strong>${official.name} asks:</strong> "${responseData.followUp}"
            </div>
            <div class="follow-up-actions">
                ${userResponseOptions.map(option => 
                    `<button class="follow-up-response" data-response="${option.type}">${option.text}</button>`
                ).join('')}
            </div>
        `;
        
        responseBody.appendChild(followUpSection);
        
        // Add event listeners for follow-up responses
        const followUpButtons = followUpSection.querySelectorAll('.follow-up-response');
        followUpButtons.forEach(button => {
            button.onclick = () => handleFollowUpResponse(button.dataset.response, official, responseData);
        });
    }
    
    modal.style.display = 'block';
    setTimeout(() => modal.classList.add('visible'), 10);
    
    const closeButton = modal.querySelector('.close-button');
    const closeResponseButton = modal.querySelector('.close-response');
    
    const closeModal = () => {
        modal.classList.remove('visible');
        setTimeout(() => modal.style.display = 'none', 300);
    };
    
    closeButton.onclick = closeModal;
    closeResponseButton.onclick = closeModal;
    
    window.onclick = (event) => {
        if (event.target === modal) {
            closeModal();
        }
    };
}

function handleFollowUpResponse(responseType, official, originalResponseData) {
    let followUpMessage = '';
    const userContext = analyzeUserContext();
    
    // Generate contextual follow-up responses based on official and user's progress
    const followUpResponses = generateFollowUpResponses(official, responseType, originalResponseData, userContext);
    followUpMessage = followUpResponses[Math.floor(Math.random() * followUpResponses.length)];
    
    // Replace the current response with the follow-up
    const responseMessage = document.getElementById('response-message');
    const followUpSection = document.querySelector('.follow-up-section');
    
    responseMessage.textContent = followUpMessage;
    if (followUpSection) {
        followUpSection.remove();
    }
    
    // Add a second-level follow-up for more realistic conversation
    if (Math.random() > 0.6) { // 40% chance of additional follow-up
        setTimeout(() => {
            addSecondLevelFollowUp(official, responseType, originalResponseData);
        }, 2000);
    }
    
    // Update the close button text
    const closeButton = document.querySelector('.close-response');
    closeButton.textContent = 'Thank you';
}

function generateFollowUpResponses(official, responseType, originalResponseData, userContext) {
    const responses = [];
    
    switch(official.name) {
        case 'Sarah Chenez': // President
            switch(responseType) {
                case 'confident':
                    responses.push(
                        "That's exactly what I want to hear! Confidence backed by solid analysis is what we need to move forward decisively.",
                        "Excellent. Your confidence gives me the ammunition I need to defend this project against the skeptics.",
                        "Perfect. With that level of confidence, we can present a united front to parliament and the public."
                    );
                    break;
                case 'cautious':
                    responses.push(
                        "I appreciate your balanced approach. Caution with conviction is exactly the right tone for a project of this magnitude.",
                        "Good thinking. We need to be bold enough to move forward but careful enough to avoid pitfalls.",
                        "That's the kind of measured response that builds public trust. We're being responsible, not reckless."
                    );
                    break;
                case 'realistic':
                    responses.push(
                        "I respect your honesty about the risks. That's exactly the kind of realistic assessment I need to make informed decisions.",
                        "Thank you for being straightforward. Politics is about managing risks, not avoiding them entirely.",
                        "That's a mature perspective. Every major project has risks – the key is ensuring the benefits justify them."
                    );
                    break;
                case 'political_strategy':
                    responses.push(
                        "Now you're thinking like a seasoned political advisor! I'm eager to hear your strategy for managing the opposition.",
                        "Excellent. A good political strategy can turn potential opponents into reluctant supporters. What's your approach?",
                        "That's what I like to hear. Politics is chess, not checkers – strategy matters more than force."
                    );
                    break;
                case 'public_support':
                    responses.push(
                        "Absolutely right. When the public sees clear benefits, political opposition becomes much harder to sustain.",
                        "That's the key insight. Public support is our strongest political asset – much stronger than party loyalty.",
                        "Exactly. If we can demonstrate real benefits to ordinary citizens, the politics will take care of itself."
                    );
                    break;
                case 'bipartisan':
                    responses.push(
                        "Smart thinking. Bipartisan support makes projects much more durable across election cycles.",
                        "I like that approach. When both sides have ownership, it's harder for anyone to sabotage the project later.",
                        "That's statesmanship thinking. Some issues should transcend party politics, and national infrastructure is one of them."
                    );
                    break;
                case 'timeline_confident':
                    responses.push(
                        "That's what I needed to hear. Meeting the election timeline gives us maximum political benefit from this investment.",
                        "Perfect. Visible progress before the election will demonstrate our commitment to delivering on promises.",
                        "Excellent. Nothing beats the political impact of ribbon-cutting ceremonies and job announcements."
                    );
                    break;
                case 'timeline_flexible':
                    responses.push(
                        "I appreciate your honesty about the timeline. Better to adjust expectations now than face embarrassing delays later.",
                        "That's responsible project management. I'd rather explain a timeline adjustment than a project failure.",
                        "Good thinking. Flexibility in execution shows wisdom, not weakness."
                    );
                    break;
                case 'timeline_priority':
                    responses.push(
                        "You're absolutely right. A successful project delivered late is better than a failed project delivered on time.",
                        "That's the right priority. My legacy depends on this project working, not just starting quickly.",
                        "Wise perspective. Quality infrastructure lasts decades – political timelines last months."
                    );
                    break;
                case 'acknowledge':
                    responses.push(
                        "Good. And remember, the opposition is watching our every move on this project. Make sure your analysis is bulletproof.",
                        "Excellent. I'll need talking points for the next cabinet meeting. Can you prepare a one-page summary?",
                        "Perfect. By the way, how do you think this will play in the rural districts? They're always skeptical of big infrastructure spending."
                    );
                    break;
                case 'elaborate':
                    responses.push(
                        "I appreciate the detail. You know, this reminds me of the highway project we did in 2018 – similar challenges, but we pulled through. Keep that momentum going.",
                        "Thank you for the clarification. I'm starting to see why you recommended this approach. My chief of staff will want to review this too.",
                        "That helps clarify things. Between you and me, I was getting pressure from the party leadership about this project. Your analysis gives me ammunition to defend it."
                    );
                    break;
                case 'question':
                    responses.push(
                        "Absolutely. And when you do, bring the Finance Minister with you. I want his perspective on the numbers before we make any final decisions.",
                        "Good idea. Let's schedule that for next week. I'll also invite the Infrastructure Minister – we need all perspectives on the table.",
                        "Perfect. And prepare for tough questions – I'll probably play devil's advocate to test your reasoning. Nothing personal, just good governance."
                    );
                    break;
            }
            break;
            
        case 'Miko Rodriguez': // Finance Minister
            switch(responseType) {
                case 'show_calculations':
                    responses.push(
                        "Perfect! That's exactly what I want to see. Bring the spreadsheets, the assumptions, and the sensitivity analysis. Let's dive into the numbers together.",
                        "Excellent. I love it when someone actually wants to show their work. My team will appreciate the transparency.",
                        "Now you're speaking my language! Detailed calculations are like poetry to a Finance Minister – beautiful and revealing."
                    );
                    break;
                case 'verify_numbers':
                    responses.push(
                        "Smart approach. Four eyes are better than two, especially when dealing with numbers this important to our fiscal future.",
                        "I appreciate that attitude. Verification isn't about distrust – it's about ensuring we don't miss anything that could embarrass us later.",
                        "Good thinking. My deputy has an eagle eye for errors, and she's saved me from more than one embarrassing mistake."
                    );
                    break;
                case 'conservative_estimate':
                    responses.push(
                        "That's music to my ears! Conservative estimates mean fewer nasty surprises down the road. I've seen too many projects fail because of optimistic assumptions.",
                        "Excellent. Conservative estimates are like insurance policies – they cost a little more upfront but save you from disasters later.",
                        "Perfect approach. I'd rather be pleasantly surprised by better-than-expected results than shocked by cost overruns."
                    );
                    break;
                case 'stress_tested':
                    responses.push(
                        "Outstanding! Stress testing is what separates professional analysis from wishful thinking. What scenarios did you model?",
                        "That's exactly what I wanted to hear. Stress testing shows you understand that Murphy's Law applies especially to government projects.",
                        "Excellent work. I've learned that projects that survive stress testing in spreadsheets usually survive reality too."
                    );
                    break;
                case 'contingency_plan':
                    responses.push(
                        "Smart planning! Contingency plans are like financial airbags – you hope you never need them, but you're grateful when you do.",
                        "Perfect. I've seen too many projects fail because they assumed everything would go according to plan. Spoiler alert: it never does.",
                        "That's the kind of forward thinking that prevents fiscal disasters. What contingencies have you built in?"
                    );
                    break;
                case 'risk_mitigation':
                    responses.push(
                        "Excellent approach. Risk mitigation is what turns potentially dangerous projects into manageable investments.",
                        "That's what I like to hear. Identifying risks is good, but having plans to mitigate them is what separates amateurs from professionals.",
                        "Perfect. Risk mitigation strategies are like insurance policies for our fiscal health. What's your approach?"
                    );
                    break;
                case 'benchmark_analysis':
                    responses.push(
                        "Outstanding! Benchmarking shows you understand that we're not operating in a vacuum. How do we compare to similar projects?",
                        "Excellent work. Regional benchmarks help us understand whether we're getting a good deal or being taken for a ride.",
                        "That's exactly the kind of comparative analysis that strengthens our negotiating position. What did you find?"
                    );
                    break;
                case 'alternative_options':
                    responses.push(
                        "Smart thinking. Having alternatives gives us negotiating leverage and backup plans. What other scenarios have you modeled?",
                        "Perfect. Options are like financial insurance – they cost a little to develop but can save you from bad decisions.",
                        "Excellent approach. I never like being backed into a corner with only one choice. What alternatives look promising?"
                    );
                    break;
                case 'best_available':
                    responses.push(
                        "I appreciate your assessment, but 'best available' sometimes means 'least bad.' Can you walk me through why this beats the alternatives?",
                        "That's a reasonable conclusion, but I want to understand the trade-offs. What are we giving up by choosing this option?",
                        "Fair enough. Sometimes the best available option isn't perfect, but it's better than the alternatives. Help me understand the comparison."
                    );
                    break;
                case 'financial_detail':
                    responses.push(
                        "Perfect! Financial details are where the real story lives. The summary is nice, but the details tell you whether to proceed or run.",
                        "Excellent. I love diving into financial details – that's where you find the hidden gems and the buried landmines.",
                        "That's what I want to hear. Financial details are like medical test results – sometimes uncomfortable, but always necessary."
                    );
                    break;
                case 'fiscal_responsibility':
                    responses.push(
                        "Music to my ears! Fiscal responsibility isn't just good policy – it's essential for maintaining our credibility with lenders and voters.",
                        "Excellent perspective. Fiscal responsibility today prevents fiscal crises tomorrow. How does this project support our long-term fiscal health?",
                        "That's the right mindset. We can be ambitious without being reckless. Fiscal responsibility is what separates investment from gambling."
                    );
                    break;
                case 'economic_impact':
                    responses.push(
                        "Good point. Economic impact analysis helps justify the cost by showing the broader benefits. What's your impact assessment?",
                        "That's the key question – does the economic impact justify the fiscal cost? Walk me through your impact calculations.",
                        "Excellent focus. Economic impact is what transforms a cost into an investment. How do the numbers work out?"
                    );
                    break;
                case 'acknowledge':
                    responses.push(
                        "Good. And double-check those exchange rate assumptions – our currency has been more volatile than my teenage daughter's mood lately.",
                        "Excellent. I'll run these numbers by my deputy. She has a knack for finding errors that would embarrass us later.",
                        "Perfect. Just remember, parliament's budget committee will scrutinize every decimal point. Make sure everything adds up."
                    );
                    break;
                case 'elaborate':
                    responses.push(
                        "That additional context is helpful. You know, I've been doing this for 15 years, and I've learned that the devil is always in the details – especially the ones nobody wants to talk about.",
                        "Thank you for the explanation. This reminds me of a similar project in neighboring Coastal Republic – they ignored the hidden costs and ended up with a fiscal nightmare.",
                        "I appreciate the thoroughness. My team will want to model this under different economic scenarios. Can you provide the underlying assumptions?"
                    );
                    break;
                case 'question':
                    responses.push(
                        "Absolutely. And bring your spreadsheets – I want to see the calculations, not just the pretty charts. Numbers don't lie, but presentations sometimes do.",
                        "Good thinking. Let's schedule a technical session with my team. They'll ask the hard questions I might miss.",
                        "Perfect. And prepare for a stress test – we'll throw every worst-case scenario at this analysis to see if it holds up."
                    );
                    break;
            }
            break;
            
        case 'Uche Kwesi': // Infrastructure Minister
            switch(responseType) {
                case 'engineering_standards':
                    responses.push(
                        "Excellent! Strict engineering standards are non-negotiable. They're what separate world-class infrastructure from expensive mistakes.",
                        "That's exactly what I want to hear. Engineering standards aren't suggestions – they're the foundation of safe, durable infrastructure.",
                        "Perfect approach. High engineering standards today prevent catastrophic failures tomorrow. What standards are you planning to follow?"
                    );
                    break;
                case 'contingency_planning':
                    responses.push(
                        "Outstanding! Contingency planning is what separates successful projects from engineering disasters. What scenarios have you planned for?",
                        "That's the mark of experienced project management. In infrastructure, it's not whether something will go wrong, but when and how we'll handle it.",
                        "Excellent thinking. Contingency plans are like engineering insurance – you hope you never need them, but you're grateful when you do."
                    );
                    break;
                case 'risk_assessment':
                    responses.push(
                        "Perfect! Comprehensive risk assessment is the foundation of successful infrastructure projects. What risks have you identified?",
                        "That's exactly what I wanted to hear. Risk assessment isn't pessimism – it's professional responsibility.",
                        "Excellent work. I've learned that projects with thorough risk assessments have fewer unpleasant surprises during construction."
                    );
                    break;
                case 'realistic_timeline':
                    responses.push(
                        "Thank you for being realistic! Optimistic timelines make politicians happy but cause engineering nightmares. What factors did you consider?",
                        "That's refreshing honesty. Realistic timelines account for real-world conditions, not wishful thinking.",
                        "Excellent approach. I'd rather explain a realistic timeline upfront than embarrassing delays later."
                    );
                    break;
                case 'phased_approach':
                    responses.push(
                        "Smart thinking! Phased implementation reduces risk and allows for course corrections. How are you planning to structure the phases?",
                        "Perfect strategy. Phased approaches are like building with safety nets – each phase validates the next one.",
                        "Excellent planning. Phased implementation is what turns massive projects into manageable chunks."
                    );
                    break;
                case 'buffer_time':
                    responses.push(
                        "Outstanding! Buffer time is what separates realistic schedules from fantasy timelines. How much buffer have you built in?",
                        "That's professional project management. Buffer time accounts for the unexpected – and in infrastructure, the unexpected is expected.",
                        "Perfect planning. I've learned that projects without adequate buffers always run late, usually spectacularly so."
                    );
                    break;
                case 'technical_expertise':
                    responses.push(
                        "Excellent confidence in our team! Our engineers are skilled, but this project will stretch their capabilities. What support will they need?",
                        "That's good to hear. Technical expertise is our foundation, but even experts need the right resources and support.",
                        "Perfect. Our technical team is capable, but capability needs to be matched with proper planning and resources."
                    );
                    break;
                case 'international_standards':
                    responses.push(
                        "Outstanding! International standards ensure we're building world-class infrastructure, not just adequate facilities.",
                        "Excellent commitment. International standards are what make our infrastructure competitive globally.",
                        "Perfect approach. Meeting international standards today prevents expensive upgrades tomorrow."
                    );
                    break;
                case 'local_capacity':
                    responses.push(
                        "That's exactly what I want to hear! Building local capacity is what makes infrastructure projects truly transformational.",
                        "Excellent focus. Local capacity building ensures this project benefits our people long after construction ends.",
                        "Perfect perspective. Infrastructure projects should build capabilities, not just facilities."
                    );
                    break;
                case 'technical_feasible':
                    responses.push(
                        "Good assessment. Technical feasibility is the foundation – if we can't build it properly, we shouldn't build it at all.",
                        "That's the right starting point. Technical feasibility determines whether we're planning a project or a disaster.",
                        "Excellent foundation. Technical feasibility analysis prevents expensive mistakes during construction."
                    );
                    break;
                case 'quality_assurance':
                    responses.push(
                        "Outstanding priority! Quality assurance isn't an afterthought – it's what ensures our infrastructure lasts decades, not years.",
                        "Perfect focus. Quality assurance is what separates professional construction from expensive experiments.",
                        "Excellent commitment. Quality assurance today prevents maintenance nightmares tomorrow."
                    );
                    break;
                case 'implementation_plan':
                    responses.push(
                        "Perfect! A detailed implementation plan is what turns engineering concepts into physical reality. What's your approach?",
                        "Excellent preparation. Implementation planning is where theoretical projects become practical construction.",
                        "That's what I want to hear. Good implementation plans prevent most of the problems that plague infrastructure projects."
                    );
                    break;
                case 'acknowledge':
                    responses.push(
                        "Good. And remember, we're not just building a port – we're building our technical reputation. Every detail matters.",
                        "Excellent. I'll share this with my engineering team. They love it when someone actually understands the technical challenges we face.",
                        "Perfect. Just keep in mind that our local contractors will need extra support. They're skilled, but this project is bigger than anything they've tackled before."
                    );
                    break;
                case 'elaborate':
                    responses.push(
                        "That clarification helps a lot. You know, I've been in infrastructure for 20 years, and I've learned that good planning prevents poor performance – especially in marine construction.",
                        "Thank you for the additional detail. This approach shows real understanding of our technical constraints. My team will be relieved to work with someone who gets it.",
                        "I appreciate the explanation. This reminds me of the port expansion in East Harbor – similar challenges, but they succeeded because they planned for the unexpected."
                    );
                    break;
                case 'question':
                    responses.push(
                        "Absolutely. And bring the technical specifications – I want to review the engineering details with my team. We need to make sure everything is feasible.",
                        "Good idea. Let's do a site visit too. Nothing beats seeing the actual conditions where we'll be building this facility.",
                        "Perfect. And prepare for detailed technical questions – my engineers are thorough, and they'll want to understand every aspect of the implementation plan."
                    );
                    break;
            }
            break;
    }
    
    // Fallback responses if no specific ones are found
    if (responses.length === 0) {
        responses.push(
            "I appreciate your engagement on this important matter. Let's continue to work together on this.",
            "Thank you for the discussion. This kind of dialogue is essential for good decision-making.",
            "Good conversation. I look forward to seeing how this develops."
        );
    }
    
    return responses;
}

function generateUserResponseOptions(official, responseData, userContext) {
    const options = [];
    const followUpQuestion = responseData.followUp.toLowerCase();
    
    // Analyze the question to determine appropriate response types
    const isAboutConfidence = followUpQuestion.includes('confident') || followUpQuestion.includes('sure');
    const isAboutPolitics = followUpQuestion.includes('parliament') || followUpQuestion.includes('opposition') || followUpQuestion.includes('political');
    const isAboutNumbers = followUpQuestion.includes('calculation') || followUpQuestion.includes('numbers') || followUpQuestion.includes('analysis');
    const isAboutTimeline = followUpQuestion.includes('timeline') || followUpQuestion.includes('schedule') || followUpQuestion.includes('when');
    const isAboutRisk = followUpQuestion.includes('risk') || followUpQuestion.includes('scenario') || followUpQuestion.includes('contingency');
    const isAboutComparison = followUpQuestion.includes('compare') || followUpQuestion.includes('alternative') || followUpQuestion.includes('option');
    
    // Generate contextual responses based on official and question type
    switch(official.name) {
        case 'Sarah Chenez': // President
            if (isAboutConfidence) {
                options.push(
                    { type: 'confident', text: 'I\'m very confident in this analysis' },
                    { type: 'cautious', text: 'We should proceed carefully but I believe it\'s sound' },
                    { type: 'realistic', text: 'There are risks, but the benefits outweigh them' }
                );
            } else if (isAboutPolitics) {
                options.push(
                    { type: 'political_strategy', text: 'I have a strategy for managing the opposition' },
                    { type: 'public_support', text: 'The public benefits should win support' },
                    { type: 'bipartisan', text: 'We could seek bipartisan backing on this' }
                );
            } else if (isAboutTimeline) {
                options.push(
                    { type: 'timeline_confident', text: 'Yes, we can meet the election timeline' },
                    { type: 'timeline_flexible', text: 'We may need to adjust the timeline' },
                    { type: 'timeline_priority', text: 'Getting it right matters more than speed' }
                );
            } else {
                options.push(
                    { type: 'acknowledge', text: 'I understand your concerns' },
                    { type: 'elaborate', text: 'Let me provide more context' },
                    { type: 'question', text: 'What would you recommend?' }
                );
            }
            break;
            
        case 'Miko Rodriguez': // Finance Minister
            if (isAboutNumbers) {
                options.push(
                    { type: 'show_calculations', text: 'I can show you the detailed calculations' },
                    { type: 'verify_numbers', text: 'Let\'s double-check these figures together' },
                    { type: 'conservative_estimate', text: 'These are actually conservative estimates' }
                );
            } else if (isAboutRisk) {
                options.push(
                    { type: 'stress_tested', text: 'Yes, I\'ve stress-tested multiple scenarios' },
                    { type: 'contingency_plan', text: 'We have contingency plans in place' },
                    { type: 'risk_mitigation', text: 'Here\'s how we can mitigate the risks' }
                );
            } else if (isAboutComparison) {
                options.push(
                    { type: 'benchmark_analysis', text: 'I\'ve compared this to regional benchmarks' },
                    { type: 'alternative_options', text: 'I can present alternative scenarios' },
                    { type: 'best_available', text: 'This is the best option currently available' }
                );
            } else {
                options.push(
                    { type: 'financial_detail', text: 'Let me break down the financial details' },
                    { type: 'fiscal_responsibility', text: 'This maintains our fiscal responsibility' },
                    { type: 'economic_impact', text: 'The economic impact justifies the cost' }
                );
            }
            break;
            
        case 'Uche Kwesi': // Infrastructure Minister
            if (isAboutRisk) {
                options.push(
                    { type: 'engineering_standards', text: 'We\'ll follow strict engineering standards' },
                    { type: 'contingency_planning', text: 'We have detailed contingency plans' },
                    { type: 'risk_assessment', text: 'I\'ve done a comprehensive risk assessment' }
                );
            } else if (isAboutTimeline) {
                options.push(
                    { type: 'realistic_timeline', text: 'This timeline accounts for real conditions' },
                    { type: 'phased_approach', text: 'We can use a phased implementation approach' },
                    { type: 'buffer_time', text: 'I\'ve built in appropriate buffer time' }
                );
            } else if (followUpQuestion.includes('technical') || followUpQuestion.includes('engineering')) {
                options.push(
                    { type: 'technical_expertise', text: 'Our team has the technical expertise' },
                    { type: 'international_standards', text: 'We\'ll meet international standards' },
                    { type: 'local_capacity', text: 'This will build our local capacity' }
                );
            } else {
                options.push(
                    { type: 'technical_feasible', text: 'This is technically feasible' },
                    { type: 'quality_assurance', text: 'Quality will be our top priority' },
                    { type: 'implementation_plan', text: 'I have a detailed implementation plan' }
                );
            }
            break;
    }
    
    // Ensure we always have at least 3 options
    if (options.length < 3) {
        const genericOptions = [
            { type: 'acknowledge', text: 'I understand your point' },
            { type: 'elaborate', text: 'Let me explain further' },
            { type: 'question', text: 'What do you think we should do?' }
        ];
        
        // Add generic options that aren't already present
        genericOptions.forEach(generic => {
            if (!options.some(opt => opt.type === generic.type)) {
                options.push(generic);
            }
        });
    }
    
    // Return maximum of 3 options for clean UI
    return options.slice(0, 3);
}

function addSecondLevelFollowUp(official, responseType, originalResponseData) {
    const responseMessage = document.getElementById('response-message');
    const currentMessage = responseMessage.textContent;
    
    const additionalComments = [
        " Oh, and one more thing – make sure you coordinate with the other ministries on this. We need a unified approach.",
        " By the way, have you considered the political timeline? Elections are coming up, and timing matters.",
        " Also, keep the media informed. Transparency builds public trust, and we need all the support we can get.",
        " And remember, this project will be scrutinized internationally. Our reputation is on the line.",
        " One final thought – make sure we have contingency plans. Murphy's Law applies to government projects too."
    ];
    
    const randomComment = additionalComments[Math.floor(Math.random() * additionalComments.length)];
    responseMessage.textContent = currentMessage + randomComment;
}

// Keep the original function for backward compatibility
function showResponseModal(official, response) {
    showEnhancedResponseModal(official, {
        message: response,
        sentiment: 'neutral',
        hasFollowUp: false
    });
}

// Transcript Modal Functionality
function setupTranscriptModal() {
    const transcriptButtons = document.querySelectorAll('.read-transcript-btn');
    const transcriptModal = document.getElementById('transcript-modal');
    
    transcriptButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const officialType = button.getAttribute('data-official');
            showTranscriptModal(officialType);
        });
    });
    
    // Setup close functionality
    const closeButton = transcriptModal.querySelector('.close-button');
    const closeTranscriptButton = transcriptModal.querySelector('.close-transcript');
    
    const closeModal = () => {
        transcriptModal.classList.remove('visible');
        setTimeout(() => transcriptModal.style.display = 'none', 300);
    };
    
    closeButton.onclick = closeModal;
    closeTranscriptButton.onclick = closeModal;
    
    window.onclick = (event) => {
        if (event.target === transcriptModal) {
            closeModal();
        }
    };
}

function showTranscriptModal(officialType) {
    const modal = document.getElementById('transcript-modal');
    const officialImage = document.getElementById('transcript-official-image');
    const officialName = document.getElementById('transcript-official-name');
    const transcriptText = document.getElementById('transcript-text');
    
    let official;
    let titleText;
    
    switch(officialType) {
        case 'president':
            official = officialsData.president;
            titleText = 'Presidential Briefing';
            break;
        case 'finance-minister':
            official = officialsData.financeMinister;
            titleText = 'Financial Analysis';
            break;
        case 'infrastructure-minister':
            official = officialsData.infrastructureMinister;
            titleText = 'Technical Briefing';
            break;
    }
    
    if (official) {
        officialImage.src = official.image;
        officialName.textContent = `${official.name} - ${titleText}`;
        
        // Format transcript text into paragraphs
        const paragraphs = official.transcript.split('\n\n').filter(p => p.trim().length > 0);
        transcriptText.innerHTML = paragraphs.map(p => `<p>${p.trim()}</p>`).join('');
        
        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('visible'), 10);
    }
}

// Stakeholder Engagement System
const stakeholderData = {
    parliament: {
        name: "Azurian Parliament",
        role: "Legislative Body",
        image: "img/parliament.png",
        initialSentiment: 50,
        currentSentiment: 50,
        engaged: false,
        volatility: "medium", // How much sentiment can swing
        competitiveness: 0.85, // How close the race is (0.5 = tied, 1.0 = very competitive)
        perspective: "The Parliament is cautiously optimistic about the port project but demands full transparency and fiscal responsibility. They're particularly concerned about the long-term debt implications and want assurance that this investment will truly benefit the nation's economic development goals.",
        engagementOptions: [
            {
                id: "transparency",
                title: "Present comprehensive financial transparency plan",
                description: "Share detailed project financials and procurement processes with parliamentary oversight committee",
                baseImpact: 15,
                riskFactor: 0.3, // 30% chance of negative outcome
                positiveRange: [12, 18], // Possible positive outcomes
                negativeRange: [-8, -3], // Possible negative outcomes
                message: "Parliament appreciates the commitment to transparency. The detailed financial disclosure and oversight mechanisms help address our concerns about accountability.",
                negativeMessage: "While we appreciate the transparency effort, some parliamentarians are concerned about the complexity of the financial arrangements and potential hidden costs."
            },
            {
                id: "economic",
                title: "Emphasize economic development benefits",
                description: "Highlight job creation, trade facilitation, and regional economic growth potential",
                baseImpact: 10,
                riskFactor: 0.25,
                positiveRange: [8, 14],
                negativeRange: [-5, -2],
                message: "The economic projections are compelling. We're particularly pleased with the estimated job creation and the project's potential to position Azuria as a regional trade hub.",
                negativeMessage: "Some members question whether the economic benefits will materialize as projected, especially given the high debt burden this project will create."
            },
            {
                id: "debt",
                title: "Address debt sustainability concerns",
                description: "Present debt service projections and demonstrate alignment with national fiscal policies",
                baseImpact: 12,
                riskFactor: 0.4, // Higher risk due to sensitive topic
                positiveRange: [10, 16],
                negativeRange: [-10, -4],
                message: "Your debt sustainability analysis is reassuring. The grace period structure aligns well with the project timeline and our fiscal capacity.",
                negativeMessage: "The debt sustainability analysis raises more concerns than it resolves. Several parliamentarians are now questioning whether this project is financially prudent."
            }
        ]
    },
    communities: {
        name: "Local Communities",
        role: "Affected Residents",
        image: "img/communities.png",
        initialSentiment: 35,
        currentSentiment: 35,
        engaged: false,
        volatility: "high", // Communities are more emotional and volatile
        competitiveness: 0.92, // Very tight race - could go either way
        perspective: "Local communities are deeply concerned about the project's impact on their livelihoods and environment. Many residents face potential displacement, and they worry about losing access to traditional fishing grounds and coastal areas that have sustained their families for generations.",
        engagementOptions: [
            {
                id: "resettlement",
                title: "Present comprehensive resettlement and compensation plan",
                description: "Outline fair compensation, alternative housing, and livelihood restoration programs",
                baseImpact: 20,
                riskFactor: 0.35, // High stakes - could backfire if seen as inadequate
                positiveRange: [16, 25],
                negativeRange: [-12, -6],
                message: "The resettlement plan addresses many of our immediate concerns. The commitment to fair compensation and alternative livelihood programs gives us hope for a better future.",
                negativeMessage: "The compensation offered is insulting! You're asking us to give up our ancestral lands for pennies. This plan shows you don't understand our community's real needs."
            },
            {
                id: "employment",
                title: "Guarantee local employment opportunities",
                description: "Commit to hiring local workers and providing skills training programs",
                baseImpact: 18,
                riskFactor: 0.3,
                positiveRange: [14, 22],
                negativeRange: [-8, -4],
                message: "The promise of local jobs and training programs is encouraging. Our youth need opportunities, and this project could provide them if managed properly.",
                negativeMessage: "We've heard these job promises before from other projects. Without concrete guarantees and local hiring quotas, these are just empty words."
            },
            {
                id: "environmental",
                title: "Address environmental protection measures",
                description: "Present detailed environmental safeguards and community health protection plans",
                baseImpact: 15,
                riskFactor: 0.4, // Environmental concerns are deeply held
                positiveRange: [12, 19],
                negativeRange: [-10, -5],
                message: "We're relieved to hear about the environmental protection measures. Our fishing grounds and coastal areas are vital to our survival.",
                negativeMessage: "These environmental measures are insufficient! You're destroying our marine ecosystem for profit. No amount of mitigation can restore what will be lost forever."
            }
        ]
    },
    media: {
        name: "Media",
        role: "Public Watchdog",
        image: "img/media.png",
        initialSentiment: 40,
        currentSentiment: 40,
        engaged: false,
        volatility: "medium", // Media can be swayed but are naturally skeptical
        competitiveness: 0.88, // Close race - media influence is crucial
        perspective: "The media maintains a skeptical stance, questioning whether this massive infrastructure project serves the public interest or primarily benefits political and business elites. They're particularly concerned about transparency in the procurement process and potential corruption risks.",
        engagementOptions: [
            {
                id: "transparency",
                title: "Commit to full media access and regular briefings",
                description: "Establish open communication channels and regular progress updates",
                baseImpact: 16,
                riskFactor: 0.25, // Media appreciates transparency but may find issues
                positiveRange: [13, 20],
                negativeRange: [-6, -3],
                message: "We appreciate the commitment to transparency. Regular briefings and open access will help us keep the public informed about this important project.",
                negativeMessage: "While transparency is promised, we're concerned about the selective nature of information sharing. Some critical details about procurement processes remain unclear."
            },
            {
                id: "oversight",
                title: "Support independent oversight and monitoring",
                description: "Welcome media scrutiny and support for independent project monitoring",
                baseImpact: 14,
                riskFactor: 0.3, // Could backfire if seen as performative
                positiveRange: [11, 18],
                negativeRange: [-7, -3],
                message: "The willingness to accept independent oversight is encouraging. This demonstrates a genuine commitment to public accountability.",
                negativeMessage: "The proposed oversight mechanisms appear to have limited real authority. This looks more like a public relations exercise than genuine accountability."
            },
            {
                id: "public-interest",
                title: "Demonstrate clear public interest benefits",
                description: "Present evidence of how the project serves broader national interests beyond elite benefits",
                baseImpact: 12,
                riskFactor: 0.35, // Hard to convince skeptical media
                positiveRange: [9, 16],
                negativeRange: [-8, -4],
                message: "The public interest case is becoming clearer. The economic benefits and job creation potential could indeed serve the broader population if implemented properly.",
                negativeMessage: "The public interest arguments remain unconvincing. This project appears to primarily benefit wealthy contractors and political allies rather than ordinary citizens."
            }
        ]
    },
    environmental: {
        name: "Environmental Coalition",
        role: "CSO Coalition",
        image: "img/environmental.png",
        initialSentiment: 25,
        currentSentiment: 25,
        engaged: false,
        volatility: "very_high", // Environmental groups are passionate and uncompromising
        competitiveness: 0.95, // Extremely tight race - hardest to win over
        perspective: "The Environmental Coalition strongly opposes the project, viewing it as a serious threat to marine ecosystems and coastal environments. They argue that the environmental impact assessment is inadequate and doesn't fully account for long-term ecological damage and climate change implications.",
        engagementOptions: [
            {
                id: "enhanced-eia",
                title: "Commit to enhanced environmental impact assessment",
                description: "Agree to comprehensive marine ecosystem study and independent environmental review",
                baseImpact: 18,
                riskFactor: 0.45, // Very high risk - environmentalists are hard to satisfy
                positiveRange: [14, 23],
                negativeRange: [-15, -8],
                message: "The commitment to an enhanced EIA is a positive step. Independent environmental review will help ensure that ecological concerns are properly addressed.",
                negativeMessage: "An enhanced EIA is too little, too late! The fundamental problem is that this project should never proceed. No amount of assessment can justify destroying pristine marine habitats."
            },
            {
                id: "mitigation",
                title: "Present robust environmental mitigation measures",
                description: "Outline specific measures to protect marine life and restore damaged ecosystems",
                baseImpact: 15,
                riskFactor: 0.5, // Highest risk - mitigation often seen as greenwashing
                positiveRange: [11, 20],
                negativeRange: [-18, -10],
                message: "The mitigation measures show some promise, but we'll need to see concrete implementation plans and long-term monitoring commitments.",
                negativeMessage: "These mitigation measures are classic greenwashing! You cannot 'restore' a destroyed ecosystem. This is environmental destruction disguised as development."
            },
            {
                id: "green-tech",
                title: "Incorporate green technology and sustainable practices",
                description: "Commit to using environmentally sustainable construction methods and green port technologies",
                baseImpact: 20,
                riskFactor: 0.4, // Lower risk - green tech is more appealing
                positiveRange: [16, 26],
                negativeRange: [-12, -6],
                message: "The green technology component is encouraging. Sustainable port design could set a positive precedent for future infrastructure projects in the region.",
                negativeMessage: "Green technology cannot offset the massive environmental damage this port will cause. This is just technological window dressing on an ecological disaster."
            }
        ]
    }
};

let currentStakeholder = null;
let selectedEngagementOption = null;
let overallSentiment = 0;

function initializeStakeholderEngagement() {
    updateSentimentMeter();
    setupStakeholderModals();
    updateProgressTracker();
    checkContinueButton();
}

function updateSentimentMeter() {
    const totalSentiment = Object.values(stakeholderData).reduce((sum, stakeholder) => 
        sum + stakeholder.currentSentiment, 0);
    overallSentiment = Math.round(totalSentiment / Object.keys(stakeholderData).length);
    
    const sentimentFill = document.getElementById('sentiment-fill');
    const sentimentPercentage = document.getElementById('sentiment-percentage');
    const sentimentNote = document.querySelector('.sentiment-note');
    
    if (sentimentFill && sentimentPercentage) {
        sentimentFill.style.width = `${overallSentiment}%`;
        sentimentPercentage.textContent = `${overallSentiment}%`;
        
        // Add dynamic color based on sentiment level
        if (overallSentiment >= 70) {
            sentimentFill.style.background = 'linear-gradient(90deg, #27ae60 0%, #2ecc71 100%)';
        } else if (overallSentiment >= 50) {
            sentimentFill.style.background = 'linear-gradient(90deg, #3498db 0%, #5dade2 100%)';
        } else if (overallSentiment >= 30) {
            sentimentFill.style.background = 'linear-gradient(90deg, #f39c12 0%, #f8c471 100%)';
        } else {
            sentimentFill.style.background = 'linear-gradient(90deg, #e74c3c 0%, #ec7063 100%)';
        }
    }
    
    // Update competitive race indicator
    if (sentimentNote) {
        const avgCompetitiveness = Object.values(stakeholderData).reduce((sum, s) => sum + s.competitiveness, 0) / Object.keys(stakeholderData).length;
        const raceStatus = getRaceStatus(overallSentiment, avgCompetitiveness);
        sentimentNote.innerHTML = `<strong>${raceStatus.title}:</strong> ${raceStatus.description}`;
        sentimentNote.className = `sentiment-note ${raceStatus.class}`;
    }
    
    // Update overview sentiment display
    updateOverviewSentimentDisplay();
    
    // Update reset button visibility
    updateResetButtonVisibility();
    
    // Update individual stakeholder sentiment displays
    Object.keys(stakeholderData).forEach(key => {
        const sentimentElement = document.querySelector(`.${key}-sentiment`);
        if (sentimentElement) {
            const stakeholder = stakeholderData[key];
            let sentimentText = '';
            if (stakeholder.currentSentiment >= 70) sentimentText = 'Supportive';
            else if (stakeholder.currentSentiment >= 50) sentimentText = 'Neutral';
            else if (stakeholder.currentSentiment >= 30) sentimentText = 'Concerned';
            else sentimentText = 'Opposed';
            
            sentimentElement.textContent = `${sentimentText} (${stakeholder.currentSentiment}%)`;
        }
    });
}

// Update overview sentiment display
function updateOverviewSentimentDisplay() {
    // Note: This function is now simplified since we removed the sentiment container from overview
    // The overview tab now just has a simple continue button that goes to stakeholder engagement
    // No dynamic updates needed for the overview continue button since it always navigates to engagement tab
}

// Update reset button visibility based on engagement status and sentiment
function updateResetButtonVisibility() {
    const resetSection = document.querySelector('.reset-engagement-section');
    if (!resetSection) return;
    
    const allEngaged = Object.values(stakeholderData).every(s => s.engaged);
    const belowThreshold = overallSentiment < 50;
    
    // Show reset button only when all stakeholders are engaged but sentiment is below 50%
    if (allEngaged && belowThreshold) {
        resetSection.classList.add('visible');
    } else {
        resetSection.classList.remove('visible');
    }
}

// Reset stakeholder engagement
function resetStakeholderEngagement() {
    // Show confirmation dialog
    const confirmReset = confirm("Are you sure you want to reset all stakeholder engagement? This will return all stakeholders to their initial sentiment levels and you will need to engage with them again.");
    
    if (!confirmReset) {
        return;
    }
    
    // Reset all stakeholder data to initial values
    Object.keys(stakeholderData).forEach(key => {
        const stakeholder = stakeholderData[key];
        stakeholder.currentSentiment = stakeholder.initialSentiment;
        stakeholder.engaged = false;
    });
    
    // Reset UI elements
    updateSentimentMeter();
    updateStakeholderCards();
    updateProgressTracker();
    checkContinueButton();
    
    // Reset engage buttons
    document.querySelectorAll('.engage-button').forEach(button => {
        button.textContent = button.textContent.replace('Engaged', 'Engage with');
        button.disabled = false;
        button.style.background = '';
        button.style.cursor = '';
    });
    
    // Show success notification
    showNotification("Stakeholder engagement has been reset. All stakeholders have returned to their initial sentiment levels.", "success");
    
    // Add reset animation effect
    const sentimentMeter = document.querySelector('.sentiment-meter');
    if (sentimentMeter) {
        sentimentMeter.style.animation = 'resetPulse 0.8s ease-in-out';
        setTimeout(() => {
            sentimentMeter.style.animation = '';
        }, 800);
    }
}

function openStakeholderModal(stakeholderKey) {
    currentStakeholder = stakeholderKey;
    const stakeholder = stakeholderData[stakeholderKey];
    
    if (stakeholder.engaged) {
        showNotification("You have already engaged with this stakeholder.", "info");
        return;
    }
    
    const modal = document.getElementById('stakeholder-modal');
    const modalImage = document.getElementById('modal-stakeholder-image');
    const modalName = document.getElementById('modal-stakeholder-name');
    const modalRole = document.getElementById('modal-stakeholder-role');
    const perspectiveText = document.getElementById('stakeholder-perspective-text');
    const strategiesContainer = document.getElementById('engagement-strategies');
    
    modalImage.src = stakeholder.image;
    modalName.textContent = stakeholder.name;
    modalRole.textContent = stakeholder.role;
    perspectiveText.textContent = stakeholder.perspective;
    
    // Populate engagement strategies
    strategiesContainer.innerHTML = '';
    stakeholder.engagementOptions.forEach((option, index) => {
        const strategyDiv = document.createElement('div');
        strategyDiv.className = 'engagement-strategy';
        strategyDiv.dataset.optionId = option.id;
        // Calculate risk level for display
        const riskLevel = option.riskFactor <= 0.25 ? 'low' : 
                         option.riskFactor <= 0.35 ? 'medium' : 'high';
        const riskText = option.riskFactor <= 0.25 ? 'Low Risk' : 
                        option.riskFactor <= 0.35 ? 'Medium Risk' : 'High Risk';
        const potentialGain = `+${option.positiveRange[0]} to +${option.positiveRange[1]}`;
        const potentialLoss = `${option.negativeRange[0]} to ${option.negativeRange[1]}`;
        
        strategyDiv.innerHTML = `
            <div class="strategy-header">
                <h5>${option.title}</h5>
                <span class="risk-indicator ${riskLevel}">${riskText}</span>
            </div>
            <p>${option.description}</p>
            <div class="outcome-preview">
                <div class="outcome-range positive">
                    <span class="outcome-label">Potential Gain:</span>
                    <span class="outcome-value">${potentialGain}</span>
                </div>
                <div class="outcome-range negative">
                    <span class="outcome-label">Potential Loss:</span>
                    <span class="outcome-value">${potentialLoss}</span>
                </div>
                <div class="success-chance">
                    <span class="chance-label">Success Rate:</span>
                    <span class="chance-value">${Math.round((1 - option.riskFactor) * 100)}%</span>
                </div>
            </div>
        `;
        
        strategyDiv.addEventListener('click', () => selectEngagementStrategy(option.id));
        strategiesContainer.appendChild(strategyDiv);
    });
    
    // Reset selection
    selectedEngagementOption = null;
    updateConfirmButton();
    
    modal.style.display = 'block';
    setTimeout(() => modal.classList.add('visible'), 10);
}

function selectEngagementStrategy(optionId) {
    selectedEngagementOption = optionId;
    
    // Update visual selection
    document.querySelectorAll('.engagement-strategy').forEach(strategy => {
        strategy.classList.remove('selected');
    });
    
    const selectedStrategy = document.querySelector(`[data-option-id="${optionId}"]`);
    if (selectedStrategy) {
        selectedStrategy.classList.add('selected');
    }
    
    updateConfirmButton();
}

function updateConfirmButton() {
    const confirmButton = document.getElementById('confirm-engagement');
    confirmButton.disabled = !selectedEngagementOption;
}

function confirmEngagement() {
    if (!currentStakeholder || !selectedEngagementOption) return;
    
    closeStakeholderModal();
    showEngagementLoadingScreen();
}

function closeStakeholderModal() {
    const modal = document.getElementById('stakeholder-modal');
    modal.classList.remove('visible');
    setTimeout(() => modal.style.display = 'none', 300);
}

function showEngagementLoadingScreen() {
    const modal = document.getElementById('engagement-loading-modal');
    const stakeholder = stakeholderData[currentStakeholder];
    const option = stakeholder.engagementOptions.find(opt => opt.id === selectedEngagementOption);
    
    document.getElementById('loading-title').textContent = `Engaging with ${stakeholder.name}...`;
    
    const loadingMessages = document.getElementById('loading-messages');
    const progressFill = document.getElementById('loading-progress-fill');
    
    modal.style.display = 'block';
    setTimeout(() => modal.classList.add('visible'), 10);
    
    // Simulate loading process with dynamic messages
    const messages = [
        "Preparing engagement materials...",
        "Scheduling stakeholder meeting...",
        `Presenting ${option.title.toLowerCase()}...`,
        "Discussing project implications...",
        "Addressing stakeholder concerns...",
        "Finalizing engagement outcome..."
    ];
    
    let messageIndex = 0;
    let progress = 0;
    
    const messageInterval = setInterval(() => {
        if (messageIndex < messages.length) {
            loadingMessages.innerHTML = `<div class="loading-message">${messages[messageIndex]}</div>`;
            messageIndex++;
            progress += 16.67;
            progressFill.style.width = `${Math.min(progress, 100)}%`;
        } else {
            clearInterval(messageInterval);
            setTimeout(() => {
                closeLoadingModal();
                processEngagementResult();
            }, 1000);
        }
    }, 800);
}

function closeLoadingModal() {
    const modal = document.getElementById('engagement-loading-modal');
    modal.classList.remove('visible');
    setTimeout(() => modal.style.display = 'none', 300);
}

function processEngagementResult() {
    const stakeholder = stakeholderData[currentStakeholder];
    const option = stakeholder.engagementOptions.find(opt => opt.id === selectedEngagementOption);
    
    // Calculate dynamic outcome based on risk factors
    const oldSentiment = stakeholder.currentSentiment;
    const outcome = calculateDynamicOutcome(stakeholder, option);
    
    // Update stakeholder sentiment with bounds checking
    stakeholder.currentSentiment = Math.max(0, Math.min(100, stakeholder.currentSentiment + outcome.impact));
    stakeholder.engaged = true;
    
    // Store outcome data for display
    option.actualImpact = outcome.impact;
    option.wasPositive = outcome.wasPositive;
    option.displayMessage = outcome.wasPositive ? option.message : option.negativeMessage;
    
    // Show result modal with dynamic outcome
    showEngagementResultModal(stakeholder, option, oldSentiment);
    
    // Update UI elements (sentiment meter will be updated when modal is closed)
    updateProgressTracker();
    checkContinueButton();
}

function calculateDynamicOutcome(stakeholder, option) {
    // Generate random number to determine if outcome is positive or negative
    const randomRoll = Math.random();
    const isPositive = randomRoll > option.riskFactor;
    
    let impact;
    if (isPositive) {
        // Positive outcome - random value within positive range
        const min = option.positiveRange[0];
        const max = option.positiveRange[1];
        impact = Math.floor(Math.random() * (max - min + 1)) + min;
        
        // Apply volatility modifier for positive outcomes
        impact = applyVolatilityModifier(impact, stakeholder.volatility, true);
    } else {
        // Negative outcome - random value within negative range
        const min = option.negativeRange[0];
        const max = option.negativeRange[1];
        impact = Math.floor(Math.random() * (max - min + 1)) + min;
        
        // Apply volatility modifier for negative outcomes
        impact = applyVolatilityModifier(impact, stakeholder.volatility, false);
    }
    
    // Apply competitiveness factor - closer races have more extreme swings
    const competitivenessMultiplier = 0.5 + (stakeholder.competitiveness * 0.5);
    impact = Math.round(impact * competitivenessMultiplier);
    
    return {
        impact: impact,
        wasPositive: isPositive,
        riskRoll: randomRoll,
        riskThreshold: option.riskFactor
    };
}

function applyVolatilityModifier(impact, volatility, isPositive) {
    let modifier = 1.0;
    
    switch(volatility) {
        case "very_high":
            modifier = isPositive ? 1.3 : 1.4; // More extreme swings
            break;
        case "high":
            modifier = isPositive ? 1.2 : 1.3;
            break;
        case "medium":
            modifier = isPositive ? 1.1 : 1.2;
            break;
        case "low":
            modifier = isPositive ? 1.0 : 1.1;
            break;
        default:
            modifier = 1.0;
    }
    
    return Math.round(impact * modifier);
}

function getRaceStatus(sentiment, competitiveness) {
    const distanceFrom50 = Math.abs(sentiment - 50);
    const isVeryClose = distanceFrom50 <= 5; // Within 5 points of 50%
    const isClose = distanceFrom50 <= 10; // Within 10 points of 50%
    
    if (sentiment >= 70) {
        return {
            title: "Strong Support",
            description: "You've built solid stakeholder backing for the project.",
            class: "race-winning"
        };
    } else if (sentiment >= 60) {
        return {
            title: "Leading",
            description: "You're ahead but the race isn't over. Keep building support.",
            class: "race-leading"
        };
    } else if (sentiment >= 55) {
        return {
            title: "Slight Lead",
            description: "You have a narrow advantage. One wrong move could change everything.",
            class: "race-tight"
        };
    } else if (sentiment >= 50) {
        return {
            title: "Razor-Thin Margin",
            description: "You're barely ahead. This is as close as it gets!",
            class: "race-critical"
        };
    } else if (sentiment >= 45) {
        return {
            title: "Neck and Neck",
            description: "Dead heat! Every engagement could tip the balance.",
            class: "race-critical"
        };
    } else if (sentiment >= 40) {
        return {
            title: "Trailing",
            description: "You're behind but still in the fight. Time for bold moves.",
            class: "race-behind"
        };
    } else if (sentiment >= 30) {
        return {
            title: "Uphill Battle",
            description: "Significant opposition. You need major wins to turn this around.",
            class: "race-difficult"
        };
    } else {
        return {
            title: "Crisis Mode",
            description: "Strong opposition threatens the project. Urgent action required.",
            class: "race-crisis"
        };
    }
}

function showEngagementResultModal(stakeholder, option, oldSentiment) {
    const modal = document.getElementById('engagement-result-modal');
    const resultImage = document.getElementById('result-stakeholder-image');
    const resultName = document.getElementById('result-stakeholder-name');
    const resultRole = document.getElementById('result-stakeholder-role');
    const sentimentChange = document.getElementById('sentiment-change');
    const resultMessage = document.getElementById('engagement-result-message');
    const projectContext = document.getElementById('project-context-message');
    
    resultImage.src = stakeholder.image;
    resultName.textContent = stakeholder.name;
    resultRole.textContent = stakeholder.role;
    
    // Show sentiment change with dynamic styling
    const impactValue = option.actualImpact || 0;
    const impactClass = impactValue > 0 ? 'positive' : impactValue < 0 ? 'negative' : 'neutral';
    const impactSymbol = impactValue > 0 ? '+' : '';
    
    sentimentChange.innerHTML = `
        <span class="sentiment-old">${oldSentiment}%</span>
        <span class="sentiment-arrow ${impactClass}">→</span>
        <span class="sentiment-new ${impactClass}">${stakeholder.currentSentiment}%</span>
        <span class="sentiment-impact ${impactClass}">(${impactSymbol}${impactValue})</span>
    `;
    
    resultMessage.textContent = option.displayMessage || option.message;
    
    // Add project context
    const contextMessages = {
        parliament: "This engagement strengthens legislative support for the port project, ensuring smoother approval processes for the $300 million infrastructure investment.",
        communities: "Building community support is crucial for the port project's social license to operate and long-term sustainability in the coastal region.",
        media: "Positive media relations help maintain public support and transparency for this transformative infrastructure development.",
        environmental: "Environmental stakeholder engagement is essential for ensuring the port project meets international sustainability standards and climate commitments."
    };
    
    projectContext.textContent = contextMessages[currentStakeholder] || "";
    
    modal.style.display = 'block';
    setTimeout(() => modal.classList.add('visible'), 10);
}

function closeEngagementResultModal() {
    const modal = document.getElementById('engagement-result-modal');
    modal.classList.remove('visible');
    setTimeout(() => modal.style.display = 'none', 300);
    
    // Update sentiment meter when result modal is closed
    updateSentimentMeter();
    // Update individual stakeholder cards
    updateStakeholderCards();
    // Re-check continue button state with updated sentiment
    checkContinueButton();
}

function updateStakeholderCards() {
    // Update individual stakeholder sentiment displays in cards
    Object.keys(stakeholderData).forEach(key => {
        const stakeholder = stakeholderData[key];
        const sentimentElement = document.querySelector(`.${key}-sentiment`);
        
        if (sentimentElement) {
            let sentimentText = '';
            if (stakeholder.currentSentiment >= 70) sentimentText = 'Supportive';
            else if (stakeholder.currentSentiment >= 50) sentimentText = 'Neutral';
            else if (stakeholder.currentSentiment >= 30) sentimentText = 'Concerned';
            else sentimentText = 'Opposed';
            
            sentimentElement.textContent = `${sentimentText} (${stakeholder.currentSentiment}%)`;
        }
        
        // Update the numerical sentiment display in cards
        const sentimentValueElement = document.querySelector(`[data-stakeholder="${key}"] .sentiment-value`);
        if (sentimentValueElement) {
            sentimentValueElement.textContent = `${stakeholder.currentSentiment}%`;
        }
        
        // Update engage button state if stakeholder is engaged
        const engageButton = document.querySelector(`[data-stakeholder="${key}"] .engage-button`);
        if (engageButton && stakeholder.engaged) {
            engageButton.textContent = 'Engaged';
            engageButton.disabled = true;
            engageButton.style.background = 'rgba(2, 100, 71, 0.6)';
            engageButton.style.cursor = 'not-allowed';
        }
    });
    
    // Update reset button visibility
    updateResetButtonVisibility();
}

// Launch the dramatic offers loading screen
function launchOffersLoadingScreen() {
    // Store current sentiment in global scope for the loading screen to access
    window.overallSentiment = overallSentiment;
    
    // Create dramatic transition effect
    const currentTab = document.querySelector('.tab-content.active');
    if (currentTab) {
        currentTab.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        currentTab.style.opacity = '0';
        currentTab.style.transform = 'scale(0.95) translateY(20px)';
        currentTab.style.filter = 'blur(10px)';
    }
    
    // Add loading overlay
    const loadingOverlay = document.createElement('div');
    loadingOverlay.id = 'offers-loading-overlay';
    loadingOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, 
            rgba(1, 71, 49, 0.95) 0%, 
            rgba(2, 100, 71, 0.98) 50%, 
            rgba(1, 71, 49, 0.95) 100%
        );
        backdrop-filter: blur(20px);
        z-index: 10000;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: opacity 0.8s ease;
    `;
    
    // Add preparation message
    const preparationMessage = document.createElement('div');
    preparationMessage.style.cssText = `
        text-align: center;
        color: white;
        font-family: 'Montserrat', sans-serif;
        opacity: 0;
        transform: translateY(20px);
        transition: all 1s cubic-bezier(0.23, 1, 0.32, 1);
    `;
    
    preparationMessage.innerHTML = `
        <div style="font-size: 1.8rem; font-weight: 600; margin-bottom: 15px; color: #00BFA5;">
            Preparing Your Loan Offers
        </div>
        <div style="font-size: 1.1rem; font-weight: 300; opacity: 0.8; margin-bottom: 20px;">
            Contacting Azuria Central Bank...
        </div>
        <div style="width: 60px; height: 60px; border: 3px solid rgba(0, 191, 165, 0.3); border-radius: 50%; border-top: 3px solid #00BFA5; animation: spin 1s linear infinite; margin: 0 auto;"></div>
    `;
    
    loadingOverlay.appendChild(preparationMessage);
    document.body.appendChild(loadingOverlay);
    
    // Add spin animation if not already present
    if (!document.getElementById('offers-loading-prep-style')) {
        const style = document.createElement('style');
        style.id = 'offers-loading-prep-style';
        style.textContent = `
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Show overlay with dramatic timing
    setTimeout(() => {
        loadingOverlay.style.opacity = '1';
        
        setTimeout(() => {
            preparationMessage.style.opacity = '1';
            preparationMessage.style.transform = 'translateY(0)';
            
            // Launch the main loading screen after preparation
            setTimeout(() => {
                // Create and launch the offers loading screen in a new window/tab
                const loadingWindow = window.open(
                    'offers-loading.html', 
                    'offersLoading',
                    'width=1200,height=800,scrollbars=no,resizable=yes,location=no,toolbar=no,menubar=no,status=no'
                );
                
                // Handle if popup is blocked
                if (!loadingWindow) {
                    // Fallback: navigate in same window
                    window.location.href = 'offers-loading.html';
                } else {
                    // Clean up overlay when loading window opens
                    setTimeout(() => {
                        document.body.removeChild(loadingOverlay);
                        
                        // Reset current tab
                        if (currentTab) {
                            currentTab.style.opacity = '1';
                            currentTab.style.transform = 'scale(1) translateY(0)';
                            currentTab.style.filter = 'blur(0)';
                        }
                    }, 1000);
                    
                    // Monitor loading window and clean up when it closes
                    const checkClosed = setInterval(() => {
                        if (loadingWindow.closed) {
                            clearInterval(checkClosed);
                            // Switch to details tab when loading is complete
                            switchTab('details');
                        }
                    }, 500);
                }
                
            }, 2500);
            
        }, 500);
    }, 100);
}

function updateProgressTracker() {
    Object.keys(stakeholderData).forEach(key => {
        const progressItem = document.querySelector(`.progress-item[data-stakeholder="${key}"]`);
        if (progressItem) {
            if (stakeholderData[key].engaged) {
                progressItem.setAttribute('data-status', 'completed');
            } else {
                progressItem.setAttribute('data-status', 'pending');
            }
        }
    });
}

function checkContinueButton() {
    const continueButton = document.getElementById('continue-to-offers');
    const allEngaged = Object.values(stakeholderData).every(s => s.engaged);
    
    if (overallSentiment >= 50 || allEngaged) {
        continueButton.disabled = false;
        continueButton.textContent = "Continue to Review Offers";
        
        const noteElement = document.querySelector('.continue-note');
        if (overallSentiment >= 50) {
            noteElement.textContent = `Excellent! You've achieved ${overallSentiment}% stakeholder support.`;
            noteElement.style.color = '#27ae60';
        }
    } else {
        continueButton.disabled = true;
        const noteElement = document.querySelector('.continue-note');
        noteElement.textContent = `Current support: ${overallSentiment}%. You need at least 50% to proceed.`;
    }
    
    // Update reset button visibility
    updateResetButtonVisibility();
}

function setupStakeholderModals() {
    // Setup stakeholder modal close buttons
    const stakeholderModal = document.getElementById('stakeholder-modal');
    const loadingModal = document.getElementById('engagement-loading-modal');
    const resultModal = document.getElementById('engagement-result-modal');
    
    // Stakeholder modal
    stakeholderModal.querySelector('.close-button').onclick = closeStakeholderModal;
    stakeholderModal.querySelector('.cancel-engagement-btn').onclick = closeStakeholderModal;
    stakeholderModal.querySelector('.confirm-engagement-btn').onclick = confirmEngagement;
    
    // Result modal
    resultModal.querySelector('.continue-result-btn').onclick = closeEngagementResultModal;
    
    // Continue button in stakeholder engagement tab
    const continueButton = document.getElementById('continue-to-offers');
    if (continueButton) {
        continueButton.onclick = () => {
            if (!continueButton.disabled) {
                // Check if sentiment is high enough to trigger dramatic loading screen
                if (overallSentiment >= 50) {
                    launchOffersLoadingScreen();
                } else {
                    switchTab('details');
                }
            }
        };
    }
    
    // Continue button in overview tab
    const overviewContinueButton = document.getElementById('overview-continue-to-engagement');
    if (overviewContinueButton) {
        overviewContinueButton.onclick = () => {
            // Only proceed if button is not disabled
            if (!overviewContinueButton.disabled) {
                switchTab('stakeholder-engagement');
            }
        };
    }
    
    // Reset engagement button
    const resetButton = document.getElementById('reset-engagement');
    if (resetButton) {
        resetButton.onclick = resetStakeholderEngagement;
    }
    
    // Window click handlers
    window.onclick = (event) => {
        if (event.target === stakeholderModal) {
            closeStakeholderModal();
        }
        if (event.target === resultModal) {
            closeEngagementResultModal();
        }
    };
}

// Update progress bar to include stakeholder engagement
function updateProgressBar(targetId) {
    const progressFill = document.querySelector('.progress-fill');
    const tabPositions = {
        'overview': 14.28,
        'stakeholder-engagement': 28.56,
        'details': 42.84,
        'comparisons': 57.12,
        'comparison': 71.4,
        'risk-dashboard': 85.68,
        'recommendation': 100
    };
    if (progressFill && tabPositions[targetId]) {
        progressFill.style.width = tabPositions[targetId] + '%';
    }
}

// Initialize stakeholder engagement when the tab is accessed
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the stakeholder engagement tab
    const stakeholderTab = document.querySelector('[data-tab="stakeholder-engagement"]');
    if (stakeholderTab) {
        stakeholderTab.addEventListener('click', function() {
            setTimeout(initializeStakeholderEngagement, 100);
        });
    }
});

// Economic Metrics Modal Functionality
const economicMetricsData = {
    'gdp': {
        title: 'Gross Domestic Product (GDP)',
        subtitle: 'Total economic output of Azuria',
        icon: 'img/Azuria Flag.png',
        currentValue: '$42.5 Billion',
        trend: { type: 'positive', text: '+4.2% YoY' },
        context: 'Azuria\'s GDP of $42.5 billion represents steady economic growth driven by diversified sectors including agriculture, manufacturing, and services. The economy has shown resilience with consistent growth averaging 4.1% over the past five years, positioning it favorably for large infrastructure investments.',
        chartTitle: 'GDP Growth Trend (2019-2024)',
        chartData: {
            labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
            values: [38.2, 37.8, 39.1, 40.3, 41.8, 42.5]
        },
        insights: [
            'GDP has grown consistently despite global economic challenges',
            'Diversified economy reduces dependency on single sectors',
            'Strong fundamentals support infrastructure investment capacity',
            'Economic resilience demonstrated during 2020 global downturn'
        ],
        regionalComparison: [
            { country: 'Azuria', value: '$42.5B', highlight: true },
            { country: 'Neighboring Country A', value: '$38.1B', highlight: false },
            { country: 'Neighboring Country B', value: '$45.2B', highlight: false },
            { country: 'Regional Average', value: '$41.8B', highlight: false }
        ],
        implications: [
            {
                title: 'Debt Capacity',
                description: 'Strong GDP growth supports the country\'s ability to service additional debt for the port project.'
            },
            {
                title: 'Economic Multiplier',
                description: 'The port investment could generate significant economic multiplier effects given the robust economic base.'
            },
            {
                title: 'Revenue Generation',
                description: 'Growing economy increases potential for port-related revenue through increased trade volumes.'
            }
        ]
    },
    'gdp-growth': {
        title: 'GDP Growth Rate',
        subtitle: 'Annual economic expansion rate',
        icon: 'img/Azuria Flag.png',
        currentValue: '4.2%',
        trend: { type: 'positive', text: 'Above regional avg' },
        context: 'Azuria\'s 4.2% annual GDP growth rate exceeds the regional average of 3.1%, indicating a dynamic and expanding economy. This growth rate has been sustained through balanced development across sectors and prudent fiscal management.',
        chartTitle: 'Annual GDP Growth Rate Comparison',
        chartData: {
            labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
            values: [4.8, -1.2, 3.4, 3.1, 3.6, 4.2]
        },
        insights: [
            'Growth rate recovering strongly from 2020 contraction',
            'Outperforming regional peers in recent years',
            'Balanced growth across multiple economic sectors',
            'Positive trajectory supports infrastructure investment timing'
        ],
        regionalComparison: [
            { country: 'Azuria', value: '4.2%', highlight: true },
            { country: 'Regional Average', value: '3.1%', highlight: false },
            { country: 'Neighboring Country A', value: '2.8%', highlight: false },
            { country: 'Neighboring Country B', value: '3.7%', highlight: false }
        ],
        implications: [
            {
                title: 'Investment Climate',
                description: 'Strong growth indicates a favorable investment climate for large infrastructure projects.'
            },
            {
                title: 'Future Capacity',
                description: 'Sustained growth suggests increasing capacity to generate revenues from port operations.'
            },
            {
                title: 'Risk Mitigation',
                description: 'Economic dynamism reduces risks associated with long-term infrastructure investments.'
            }
        ]
    },
    'debt-ratio': {
        title: 'Debt-to-GDP Ratio',
        subtitle: 'Government debt as percentage of GDP',
        icon: 'img/Azuria Flag.png',
        currentValue: '48%',
        trend: { type: 'neutral', text: 'Stable' },
        context: 'At 48% of GDP, Azuria\'s debt-to-GDP ratio remains within sustainable levels according to international standards. This provides adequate fiscal space for strategic infrastructure investments while maintaining debt sustainability.',
        chartTitle: 'Debt-to-GDP Ratio Evolution',
        chartData: {
            labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
            values: [42, 46, 49, 50, 49, 48]
        },
        insights: [
            'Debt ratio stabilizing after pandemic-related increase',
            'Well below the 60% threshold for emerging economies',
            'Demonstrates fiscal discipline and debt management',
            'Adequate fiscal space for strategic investments'
        ],
        regionalComparison: [
            { country: 'Azuria', value: '48%', highlight: true },
            { country: 'Regional Average', value: '52%', highlight: false },
            { country: 'Neighboring Country A', value: '61%', highlight: false },
            { country: 'Neighboring Country B', value: '44%', highlight: false }
        ],
        implications: [
            {
                title: 'Borrowing Capacity',
                description: 'Current debt levels allow for additional borrowing for the port project without compromising sustainability.'
            },
            {
                title: 'Credit Rating',
                description: 'Moderate debt ratio supports favorable credit ratings and borrowing terms.'
            },
            {
                title: 'Fiscal Flexibility',
                description: 'Maintains fiscal space for economic shocks while pursuing development objectives.'
            }
        ]
    },
    'foreign-reserves': {
        title: 'Foreign Exchange Reserves',
        subtitle: 'International reserves held by central bank',
        icon: 'img/Azuria Flag.png',
        currentValue: '$8.2 Billion',
        trend: { type: 'positive', text: '+12% YoY' },
        context: 'Azuria\'s foreign exchange reserves of $8.2 billion represent approximately 5.8 months of import coverage, providing a strong buffer against external shocks and supporting currency stability during the port project implementation.',
        chartTitle: 'Foreign Reserves Trend (USD Billions)',
        chartData: {
            labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
            values: [6.8, 7.1, 6.9, 7.3, 7.3, 8.2]
        },
        insights: [
            'Reserves exceed IMF recommended minimum of 3 months import coverage',
            'Strong reserve position supports currency stability',
            'Adequate buffer for external debt service obligations',
            'Growing reserves indicate improving external position'
        ],
        regionalComparison: [
            { country: 'Azuria', value: '$8.2B', highlight: true },
            { country: 'Neighboring Country A', value: '$6.1B', highlight: false },
            { country: 'Neighboring Country B', value: '$9.8B', highlight: false },
            { country: 'Regional Average', value: '$7.4B', highlight: false }
        ],
        implications: [
            {
                title: 'Currency Stability',
                description: 'Strong reserves support exchange rate stability during project implementation and debt service.'
            },
            {
                title: 'External Confidence',
                description: 'Adequate reserves enhance creditor confidence in the country\'s ability to meet external obligations.'
            },
            {
                title: 'Import Capacity',
                description: 'Sufficient reserves to cover equipment and material imports for port construction.'
            }
        ]
    },
    'port-capacity': {
        title: 'Current Port Capacity',
        subtitle: 'Existing container handling capacity',
        icon: 'img/Azuria Flag.png',
        currentValue: '2.1M TEUs',
        trend: { type: 'neutral', text: 'At capacity' },
        context: 'Azuria\'s current port capacity of 2.1 million TEUs is operating near maximum capacity, creating bottlenecks and limiting trade growth. The new port project will significantly expand capacity to meet growing demand.',
        chartTitle: 'Port Throughput vs Capacity',
        chartData: {
            labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
            values: [1.6, 1.4, 1.7, 1.9, 2.0, 2.1]
        },
        insights: [
            'Current port operating at 95%+ capacity utilization',
            'Throughput growth constrained by capacity limitations',
            'Significant pent-up demand for additional capacity',
            'New port project addresses critical infrastructure gap'
        ],
        regionalComparison: [
            { country: 'Azuria (Current)', value: '2.1M TEUs', highlight: true },
            { country: 'Azuria (Post-Project)', value: '4.6M TEUs', highlight: false },
            { country: 'Regional Hub A', value: '8.2M TEUs', highlight: false },
            { country: 'Regional Hub B', value: '6.1M TEUs', highlight: false }
        ],
        implications: [
            {
                title: 'Economic Bottleneck',
                description: 'Current capacity constraints limit trade growth and economic development potential.'
            },
            {
                title: 'Revenue Opportunity',
                description: 'New port capacity will capture significant additional revenue from increased throughput.'
            },
            {
                title: 'Competitive Position',
                description: 'Expanded capacity will enhance Azuria\'s position as a regional trade hub.'
            }
        ]
    },
    'infrastructure-score': {
        title: 'Infrastructure Quality Score',
        subtitle: 'World Economic Forum infrastructure ranking',
        icon: 'img/Azuria Flag.png',
        currentValue: '3.2/5',
        trend: { type: 'positive', text: 'Improving' },
        context: 'Azuria\'s infrastructure score of 3.2 out of 5 reflects moderate infrastructure quality with room for improvement. The port project represents a significant opportunity to enhance overall infrastructure quality and competitiveness.',
        chartTitle: 'Infrastructure Score Evolution',
        chartData: {
            labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
            values: [2.8, 2.9, 3.0, 3.1, 3.1, 3.2]
        },
        insights: [
            'Steady improvement in infrastructure quality over time',
            'Port infrastructure identified as key development priority',
            'Investment in transport infrastructure showing positive results',
            'Score improvement correlates with economic growth'
        ],
        regionalComparison: [
            { country: 'Azuria', value: '3.2/5', highlight: true },
            { country: 'Regional Average', value: '3.4/5', highlight: false },
            { country: 'Best in Region', value: '4.1/5', highlight: false },
            { country: 'Neighboring Country', value: '2.9/5', highlight: false }
        ],
        implications: [
            {
                title: 'Development Need',
                description: 'Infrastructure gaps justify major investment in port facilities to enhance overall connectivity.'
            },
            {
                title: 'Competitive Advantage',
                description: 'New port will significantly improve infrastructure score and regional competitiveness.'
            },
            {
                title: 'Economic Impact',
                description: 'Better infrastructure supports higher economic growth and trade facilitation.'
            }
        ]
    }
};

let currentMetricChart = null;

function setupEconomicMetrics() {
    // Add click event listeners to all clickable metrics
    const clickableMetrics = document.querySelectorAll('.clickable-metric');
    clickableMetrics.forEach(metric => {
        metric.addEventListener('click', function() {
            const metricType = this.getAttribute('data-metric');
            showEconomicMetricModal(metricType);
        });
    });

    // Setup modal close functionality
    const modal = document.getElementById('economic-metrics-modal');
    if (modal) {
        const closeButton = modal.querySelector('.close-button');
        const closeModalButton = modal.querySelector('.close-metric-modal');

        if (closeButton) closeButton.addEventListener('click', closeEconomicMetricModal);
        if (closeModalButton) closeModalButton.addEventListener('click', closeEconomicMetricModal);

        // Close modal when clicking outside
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeEconomicMetricModal();
            }
        });
    }
}

function showEconomicMetricModal(metricType) {
    const data = economicMetricsData[metricType];
    if (!data) return;

    const modal = document.getElementById('economic-metrics-modal');
    
    // Update modal content
    const iconElement = document.getElementById('metric-icon');
    iconElement.innerHTML = `<img src="${data.icon}" alt="Azuria Flag" style="width: 100%; height: 100%; object-fit: contain;">`;
    document.getElementById('metric-title').textContent = data.title;
    document.getElementById('metric-subtitle').textContent = data.subtitle;
    document.getElementById('current-value').textContent = data.currentValue;
    
    // Update trend
    const trendElement = document.getElementById('value-trend');
    trendElement.textContent = data.trend.text;
    trendElement.className = data.trend.type;
    
    document.getElementById('metric-context').textContent = data.context;
    document.getElementById('chart-title').textContent = data.chartTitle;
    
    // Update insights
    const insightsList = document.getElementById('chart-insights-list');
    insightsList.innerHTML = '';
    data.insights.forEach(insight => {
        const li = document.createElement('li');
        li.textContent = insight;
        insightsList.appendChild(li);
    });
    
    // Update regional comparison
    const comparisonGrid = document.getElementById('comparison-grid');
    comparisonGrid.innerHTML = '';
    data.regionalComparison.forEach(country => {
        const div = document.createElement('div');
        div.className = `comparison-country ${country.highlight ? 'highlight' : ''}`;
        div.innerHTML = `
            <span class="country-name">${country.country}</span>
            <span class="country-value">${country.value}</span>
        `;
        comparisonGrid.appendChild(div);
    });
    
    // Update implications
    const implicationsContent = document.getElementById('implications-content');
    implicationsContent.innerHTML = '';
    data.implications.forEach(implication => {
        const div = document.createElement('div');
        div.className = 'implication-item';
        div.innerHTML = `
            <h4>${implication.title}</h4>
            <p>${implication.description}</p>
        `;
        implicationsContent.appendChild(div);
    });
    
    // Ensure bottom sections are wrapped properly
    const regionalSection = document.querySelector('.regional-comparison');
    const implicationsSection = document.querySelector('.implications-section');
    if (regionalSection && implicationsSection && !regionalSection.parentElement.classList.contains('bottom-sections')) {
        const bottomWrapper = document.createElement('div');
        bottomWrapper.className = 'bottom-sections';
        regionalSection.parentElement.insertBefore(bottomWrapper, regionalSection);
        bottomWrapper.appendChild(regionalSection);
        bottomWrapper.appendChild(implicationsSection);
    }
    
    // Show modal
    modal.style.display = 'block';
    setTimeout(() => modal.classList.add('visible'), 10);
    
    // Create chart after modal is visible
    setTimeout(() => createMetricChart(data), 100);
}

function createMetricChart(data) {
    const canvas = document.getElementById('metric-chart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Destroy existing chart if it exists
    if (currentMetricChart && typeof currentMetricChart.destroy === 'function') {
        currentMetricChart.destroy();
    }
    
    // Set canvas size
    const container = canvas.parentElement;
    canvas.width = container.clientWidth;
    canvas.height = 300;
    
    // Draw custom chart
    drawCustomChart(ctx, data);
}

function drawCustomChart(ctx, data) {
    const canvas = ctx.canvas;
    const width = canvas.width;
    const height = canvas.height;
    const padding = 60;
    const chartWidth = width - 2 * padding;
    const chartHeight = height - 2 * padding;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Get data values
    const values = data.chartData.values;
    const labels = data.chartData.labels;
    const minValue = Math.min(...values);
    const maxValue = Math.max(...values);
    const valueRange = maxValue - minValue || 1; // Prevent division by zero
    
    // Draw background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);
    
    // Draw grid
    ctx.strokeStyle = 'rgba(2, 100, 71, 0.1)';
    ctx.lineWidth = 1;
    
    // Vertical grid lines
    for (let i = 0; i <= labels.length - 1; i++) {
        const x = padding + (i * chartWidth) / (labels.length - 1);
        ctx.beginPath();
        ctx.moveTo(x, padding);
        ctx.lineTo(x, padding + chartHeight);
        ctx.stroke();
    }
    
    // Horizontal grid lines
    for (let i = 0; i <= 5; i++) {
        const y = padding + (i * chartHeight) / 5;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(padding + chartWidth, y);
        ctx.stroke();
    }
    
    // Draw axes
    ctx.strokeStyle = 'rgba(2, 100, 71, 0.3)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, padding + chartHeight);
    ctx.lineTo(padding + chartWidth, padding + chartHeight);
    ctx.stroke();
    
    // Draw data line
    ctx.strokeStyle = '#026447';
    ctx.lineWidth = 3;
    ctx.beginPath();
    
    for (let i = 0; i < values.length; i++) {
        const x = padding + (i * chartWidth) / (values.length - 1);
        const y = padding + chartHeight - ((values[i] - minValue) / valueRange) * chartHeight;
        
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    ctx.stroke();
    
    // Draw data points
    ctx.fillStyle = '#026447';
    for (let i = 0; i < values.length; i++) {
        const x = padding + (i * chartWidth) / (values.length - 1);
        const y = padding + chartHeight - ((values[i] - minValue) / valueRange) * chartHeight;
        
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, 2 * Math.PI);
        ctx.fill();
    }
    
    // Draw labels
    ctx.fillStyle = '#666666';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    
    // X-axis labels
    for (let i = 0; i < labels.length; i++) {
        const x = padding + (i * chartWidth) / (labels.length - 1);
        ctx.fillText(labels[i], x, padding + chartHeight + 20);
    }
    
    // Y-axis labels
    ctx.textAlign = 'right';
    for (let i = 0; i <= 5; i++) {
        const y = padding + (i * chartHeight) / 5;
        const value = maxValue - (i * valueRange) / 5;
        ctx.fillText(value.toFixed(1), padding - 10, y + 4);
    }
}

function closeEconomicMetricModal() {
    const modal = document.getElementById('economic-metrics-modal');
    if (modal) {
        modal.classList.remove('visible');
        setTimeout(() => {
            modal.style.display = 'none';
            // Destroy chart when modal is closed
            if (currentMetricChart && typeof currentMetricChart.destroy === 'function') {
                currentMetricChart.destroy();
                currentMetricChart = null;
            }
        }, 300);
    }
}

// Initialize economic metrics when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setupEconomicMetrics();
    initializeOverviewTracking();
});

// Overview Tab Interaction Tracking System
let overviewInteractions = {
    officialEngagements: {
        'Sarah Chenez': false,
        'Miko Rodriguez': false,
        'Uche Kwesi': false
    },
    economicMetrics: {
        'gdp': false,
        'gdp-growth': false,
        'debt-ratio': false,
        'foreign-reserves': false,
        'port-capacity': false,
        'infrastructure-score': false
    },
    projectImages: {
        'aerial': false,
        'infrastructure': false
    }
};

function initializeOverviewTracking() {
    // Track official card interactions
    setupOfficialCardTracking();
    
    // Track economic metric interactions
    setupEconomicMetricTracking();
    
    // Track project image hover interactions
    setupProjectImageTracking();
    
    // Initial check of continue button state
    updateOverviewContinueButton();
}

function setupOfficialCardTracking() {
    const officialCards = document.querySelectorAll('.official-card');
    
    officialCards.forEach(card => {
        card.addEventListener('click', function() {
            const officialName = this.querySelector('.official-info p').textContent;
            if (overviewInteractions.officialEngagements.hasOwnProperty(officialName)) {
                overviewInteractions.officialEngagements[officialName] = true;
                updateOverviewContinueButton();
            }
        });
    });
}

function setupEconomicMetricTracking() {
    const clickableMetrics = document.querySelectorAll('.clickable-metric');
    
    clickableMetrics.forEach(metric => {
        metric.addEventListener('click', function() {
            const metricType = this.getAttribute('data-metric');
            if (overviewInteractions.economicMetrics.hasOwnProperty(metricType)) {
                overviewInteractions.economicMetrics[metricType] = true;
                updateOverviewContinueButton();
            }
        });
    });
}

function setupProjectImageTracking() {
    const projectImages = document.querySelectorAll('.project-image-container');
    
    projectImages.forEach((container, index) => {
        const imageKey = index === 0 ? 'aerial' : 'infrastructure';
        
        container.addEventListener('mouseenter', function() {
            overviewInteractions.projectImages[imageKey] = true;
            updateOverviewContinueButton();
        });
    });
}

function checkOverviewInteractionsComplete() {
    // Check if at least one official has been engaged with
    const officialEngaged = Object.values(overviewInteractions.officialEngagements).some(engaged => engaged);
    
    // Check if all economic metrics have been clicked
    const allMetricsClicked = Object.values(overviewInteractions.economicMetrics).every(clicked => clicked);
    
    // Check if both project images have been hovered
    const allImagesHovered = Object.values(overviewInteractions.projectImages).every(hovered => hovered);
    
    return officialEngaged && allMetricsClicked && allImagesHovered;
}

function updateOverviewContinueButton() {
    const continueButton = document.getElementById('overview-continue-to-engagement');
    const continueNote = document.getElementById('overview-continue-note');
    
    if (!continueButton || !continueNote) return;
    
    const isComplete = checkOverviewInteractionsComplete();
    const officialEngaged = Object.values(overviewInteractions.officialEngagements).some(engaged => engaged);
    const allMetricsClicked = Object.values(overviewInteractions.economicMetrics).every(clicked => clicked);
    const allImagesHovered = Object.values(overviewInteractions.projectImages).every(hovered => hovered);
    
    if (isComplete) {
        continueButton.disabled = false;
        continueButton.style.opacity = '1';
        continueButton.style.cursor = 'pointer';
        continueNote.textContent = 'Great! You can now proceed to stakeholder engagement.';
        continueNote.style.color = '#27ae60';
    } else {
        continueButton.disabled = true;
        continueButton.style.opacity = '0.6';
        continueButton.style.cursor = 'not-allowed';
        
        // Count remaining interactions
        let remainingCount = 0;
        
        if (!officialEngaged) {
            remainingCount += 1; // Need at least 1 official
        }
        if (!allMetricsClicked) {
            const clickedCount = Object.values(overviewInteractions.economicMetrics).filter(clicked => clicked).length;
            remainingCount += (6 - clickedCount); // Remaining metrics
        }
        if (!allImagesHovered) {
            const hoveredCount = Object.values(overviewInteractions.projectImages).filter(hovered => hovered).length;
            remainingCount += (2 - hoveredCount); // Remaining images
        }
        
        continueNote.textContent = `${remainingCount} interactive element${remainingCount > 1 ? 's' : ''} left to engage with.`;
        continueNote.style.color = '#666666';
    }
}

function getOverviewProgress() {
    const officialCount = Object.values(overviewInteractions.officialEngagements).filter(engaged => engaged).length;
    const metricCount = Object.values(overviewInteractions.economicMetrics).filter(clicked => clicked).length;
    const imageCount = Object.values(overviewInteractions.projectImages).filter(hovered => hovered).length;
    
    return {
        officials: `${officialCount}/1 officials engaged`,
        metrics: `${metricCount}/6 metrics explored`,
        images: `${imageCount}/2 images viewed`,
        total: officialCount + metricCount + imageCount,
        required: 9 // 1 official + 6 metrics + 2 images
    };
}

