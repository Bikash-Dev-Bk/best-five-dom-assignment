
function getPlayerNameById(playerNameId){
    const listContainer = document.getElementById('list-container');
    const li = document.createElement("li");

    const playerName = document.getElementById(playerNameId);
    const playerNameValue = playerName.innerText;
    li.innerText = playerNameValue;
    listContainer.appendChild(li);
}


// players select button click

function getPlayerBtnAndNameById(button, name){
    document.getElementById(button).addEventListener('click', function(){
        const playerName = getPlayerNameById(name);
    })
}


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