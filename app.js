document.getElementById("btn-affirm").addEventListener("click", (e) => {
    console.log("We need an affirmation for today!");
    const aElement = document.getElementById("affirmationCard");
    const aCardElement = document.createElement('div');
    const aCardBodyElement = document.createElement('div');

    const aCard = aElement.appendChild(aCardElement);
    aCard.setAttribute("class", "card bg-dark");

    const randomAffirmation = "You are a capable human.";
    const aCardBody = aCardElement.appendChild(aCardBodyElement);
    aCardBody.setAttribute("class", "card-body");
    aCardBody.innerHTML = `
    <h2 class="text-white">${randomAffirmation}</h2>
    `;
});
