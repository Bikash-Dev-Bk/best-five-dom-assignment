
function inputFieldValueById(inputFieldId){
    const inputValue = document.getElementById(inputFieldId);
    const inputValueString = inputValue.value;
    const inputValueAmount = parseInt(inputValueString);

    return inputValueAmount;
}



document.getElementById('btn-calculate-total').addEventListener('click', function(){
    const playerExpenses = document.getElementById('player-expenses');
    const playerExpensesString = playerExpenses.innerText;
    const totalPlayerExpenses = parseInt(playerExpensesString);

    const managerAmount = inputFieldValueById('manager-amount');
    const coachAmount = inputFieldValueById('coach-amount');

    const totalAmount = totalPlayerExpenses + managerAmount + coachAmount;

    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = totalAmount;
})