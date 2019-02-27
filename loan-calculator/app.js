const form = document.querySelector('#loan-form');
const card = document.querySelector('.card');
const heading = document.querySelector('.heading');



loadEventsListeners();

function loadEventsListeners() {
    form.addEventListener('submit', function (e) {
        form.submitBtn.disabled = true;
        document.getElementById('results').style.display = 'none';
        document.getElementById('loading').style.display = 'block';

        setTimeout(calculateResults, 3000);

        e.preventDefault();
    });
}

function calculateResults(e) {

    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');

    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interests');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

        document.getElementById('loading').style.display = 'none';
        document.getElementById('results').style.display = 'block';

    } else {
        showError('Please check your numbers!')

        document.getElementById('loading').style.display = 'none';
        document.getElementById('results').style.display = 'none';
    }
    form.submitBtn.disabled = false;

    e.preventDefault();
}

function showError(error) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error));

    card.insertBefore(errorDiv, heading);

    document.getElementById('results').style.display = 'none';
    document.getElementById('loading').style.display = 'none';

    setTimeout(clearError, 3000);
}

function clearError() {
    document.querySelector('.alert').remove();
}