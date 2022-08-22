
function getPlayerNameById(playerNameId){
    const listContainer = document.getElementById('list-container');
    const li = document.createElement("li");

    const playerName = document.getElementById(playerNameId);
    const playerNameValue = playerName.innerText;
    li.innerText = playerNameValue;
    listContainer.appendChild(li);
}


// players select button click

document.getElementById('btn-messi').addEventListener('click', function(){
    const playerMessi = getPlayerNameById('player-messi');
})

document.getElementById('btn-neymar').addEventListener('click', function(){
    const playerMessi = getPlayerNameById('player-neymar');
})

document.getElementById('btn-kimpembe').addEventListener('click', function(){
    const playerMessi = getPlayerNameById('player-kimpembe');
})

document.getElementById('btn-ramos').addEventListener('click', function(){
    const playerMessi = getPlayerNameById('player-ramos');
})

document.getElementById('btn-marquinhos').addEventListener('click', function(){
    const playerMessi = getPlayerNameById('player-marquinhos');
})

document.getElementById('btn-verratti').addEventListener('click', function(){
    const playerMessi = getPlayerNameById('player-verratti');
})
































// total Amount calaculate

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