function diceRoll() {
    const numOfDice = document.getElementById("myInput").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");

    const values=[];
    const images=[];
let i;
    for(i=0;i<numOfDice;i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="(${value}).png">`);
    }
    diceResult.textContent=`dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}