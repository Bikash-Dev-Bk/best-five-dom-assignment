
// Player name function

function getPlayerNameById(playerNameId){
    const listContainer = document.getElementById('list-container');
    const li = document.createElement("li");

    const playerName = document.getElementById(playerNameId);
    const playerNameValue = playerName.innerText;
    li.innerText = playerNameValue;
    listContainer.appendChild(li);
}

// Disable Button Function

function disableButton(buttonId) {
    document.getElementById(buttonId).disabled = 'true';
}


// players select button click

function getPlayerBtnAndNameById(buttonId, nameId){
    document.getElementById(buttonId).addEventListener('click', function(){
        getPlayerNameById(nameId);
        disableButton(buttonId);
    })
}

// call function getPlayerBtnAndNameById 

getPlayerBtnAndNameById('btn-messi', 'player-messi');
getPlayerBtnAndNameById('btn-neymar', 'player-neymar');
getPlayerBtnAndNameById('btn-kimpembe', 'player-kimpembe');
getPlayerBtnAndNameById('btn-ramos', 'player-ramos');
getPlayerBtnAndNameById('btn-marquinhos', 'player-marquinhos');
getPlayerBtnAndNameById('btn-verratti', 'player-verratti');




















// total Amount calaculate

function inputFieldValueById(inputFieldId){
    const inputValue = document.getElementById(inputFieldId);
    const inputValueString = inputValue.value;
    const inputValueAmount = parseInt(inputValueString);

    return inputValueAmount;
}


// calculate button

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