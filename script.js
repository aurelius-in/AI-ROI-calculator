document.addEventListener('DOMContentLoaded', () => {
    const roiForm = document.getElementById('roi-form');
    const result = document.getElementById('result');

    roiForm.addEventListener('submit', (e) => {
        e.preventDefault();
        calculateROI();
    });

    function calculateROI() {
        const initialInvestment = parseFloat(document.getElementById('initial-investment').value);
        const annualRevenue = parseFloat(document.getElementById('annual-revenue').value);
        const annualCostSavings = parseFloat(document.getElementById('annual-cost-savings').value);
        const years = parseFloat(document.getElementById('years').value);

        if (isNaN(initialInvestment) || isNaN(annualRevenue) || isNaN(annualCostSavings) || isNaN(years)) {
            result.textContent = 'Please fill in all fields with valid numbers.';
            return;
        }

        const totalBenefits = (annualRevenue + annualCostSavings) * years;
        const roi = ((totalBenefits - initialInvestment) / initialInvestment) * 100;

        result.textContent = `The ROI for ${document.getElementById('project-name').value} is ${roi.toFixed(2)}%.`;
    }
});
