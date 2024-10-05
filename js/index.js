// calculate Expenses 
document.getElementById('calculate').addEventListener('click', function (event) {
    event.preventDefault();
    const income = getInputValueById('income');
    if (income <= 0 || isNaN(income)) {
        ShowHiddenElement('income-error');
        return;
    }

    const software = getInputValueById('software');
    if (software <= 0 || isNaN(software)) {
        ShowHiddenElement('software-error');
        return;
    }

    const courses = getInputValueById('courses');
    if (courses <= 0 || isNaN(courses)) {
        ShowHiddenElement('courses-error');
        return;
    }

    const internet = getInputValueById('internet');
    if (courses <= 0 || isNaN(courses)) {
        ShowHiddenElement('internet-error');
        return;
    }

    const totalExpanse = software + courses + internet;
    const balance = income - totalExpanse;
    if (totalExpanse > balance) {
        ShowHiddenElement('logic-error');
        return;
    }

    // document.getElementById('results').classList.remove('hidden');
    ShowHiddenElement('results');
    document.getElementById('total-expenses').innerText = totalExpanse.toFixed(2);
    document.getElementById('balance').innerText = balance.toFixed(2);

    // add history
    const historyItem = document.createElement('div');
    historyItem.className = 'bg-white p-3 rounded-lg border-l-2 border-indigo-500'
    historyItem.innerHTML = `
    <p class=" text-xs text-gray">${new Date().toLocaleString()} </P
    <p class=" text-xs text-gray">Income : ${income} </P
    <p class=" text-xs text-gray">Expance : ${totalExpanse.toFixed(2)} </P
    <p class=" text-xs text-gray">Balance : ${balance.toFixed(2)} </P
    `
    const historyContainer = document.getElementById('history-list')
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
});

// calculate Expenses 
document.getElementById('calculate-savings').addEventListener('click', function (event) {
    event.preventDefault();
    // take input in percentage
    const savings = getInputValueById('savings');
    if (savings <= 0 || isNaN(savings)) {
        ShowHiddenElement('savings-error');
        return;
    }
    //get main balance
    const balance = getTextValueById('balance');

    const SavingsAmount = balance * savings / 100;
    const remainingBalance = balance - SavingsAmount;

    document.getElementById('savings-amount').innerText = SavingsAmount.toFixed(2);
    document.getElementById('remaining-balance').innerText = remainingBalance.toFixed(2);

});

// toggle the button show and hide option
document.getElementById('assistant-tab').addEventListener('click', function () {
    swapOption('assistant-tab');
    ShowHiddenElement('expense-form');
    hiddenElement('history-section');

});
document.getElementById('history-tab').addEventListener('click', function () {
    swapOption('history-tab');
    hiddenElement('expense-form');
    ShowHiddenElement('history-section');
});
