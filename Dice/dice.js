const rollDice = () => {
    let diceRoll = Math.round(Math.random() * 5) + 1;
    document.getElementById('dice').textContent = diceRoll;

}
