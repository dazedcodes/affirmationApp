document.getElementById("btn-affirm").addEventListener("click", (e) => {
    console.log("We need an affirmation for today!");
    const aElement = document.getElementById("affirmationCard");
    const aCardElement = document.createElement('div');
    const aCardBodyElement = document.createElement('div');

    const aCard = aElement.appendChild(aCardElement);
    aCard.setAttribute("class", "card bg-dark");

    const url = "https://www.affirmations.dev/";
    fetch(url, {
        // headers: {
        //     "Content-Type": "application/json",
        //     "Access-Control-Allow-Origin": "https://www.affirmations.dev/",
        // }
    }).then((data) => {

        console.log("Data", data);
        // const keys = Object.keys(data);
        // console.log("Data Keys", keys);
    })
        .catch((err) => console.log(err));


    const randomAffirmation = "You are a capable human.";
    const aCardBody = aCardElement.appendChild(aCardBodyElement);
    aCardBody.setAttribute("class", "card-body");
    aCardBody.innerHTML = `
    <h2 class="text-white">${randomAffirmation}</h2>
    `;
});

