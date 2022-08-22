
// Player name function

function getPlayerNameById(playerNameId){
    const listContainer = document.getElementById('list-container');
    const li = document.createElement("li");

    const select = document.querySelector('#list-container');
    const inner = select.querySelectorAll('li');
    const length = inner.length;

    if(length == 5){
        alert('You can not select more than 5 player!');
        return;
    }
    else{
        const playerName = document.getElementById(playerNameId);
        const playerNameValue = playerName.innerText;
        li.innerText = playerNameValue;
        listContainer.appendChild(li);
    }
}

// Disable Button Function

function disableButton(buttonId) {
    document.getElementById(buttonId).disabled = 'true';
}


// players select button function

function setPlayerBtnAndNameById(buttonId, nameId){
    document.getElementById(buttonId).addEventListener('click', function(){
        getPlayerNameById(nameId);
        disableButton(buttonId);
    })
}

// call getPlayerBtnAndNameById  function 

setPlayerBtnAndNameById('btn-messi', 'player-messi');
setPlayerBtnAndNameById('btn-neymar', 'player-neymar');
setPlayerBtnAndNameById('btn-kimpembe', 'player-kimpembe');
setPlayerBtnAndNameById('btn-ramos', 'player-ramos');
setPlayerBtnAndNameById('btn-marquinhos', 'player-marquinhos');
setPlayerBtnAndNameById('btn-verratti', 'player-verratti');



// input Field Value function

function inputFieldValueById(inputFieldId){
    const inputValue = document.getElementById(inputFieldId);
    const inputValueString = inputValue.value;
    const inputValueAmount = parseInt(inputValueString);

    return inputValueAmount;
}


// calculate button

document.getElementById('btn-calculate').addEventListener('click', function(){
    const select = document.querySelector('#list-container');
    const inner = select.querySelectorAll('li');
    const length = inner.length;

    const perPlayerAmount = inputFieldValueById('per-player-field');

    const totalplayerExpenses = perPlayerAmount * length;
    
    const playerExpenses = document.getElementById('player-expenses');
    playerExpenses.innerText = totalplayerExpenses;
})


// calculate total button

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