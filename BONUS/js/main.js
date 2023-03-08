/*
BONUS 1:
Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede
*/

const arrayObject = document.getElementById("team")

const team = [
    {
        "nome": "Wayne Barnett",
        "ruolo": "Founder & CEO",
        "foto": "wayne-barnett-founder-ceo.jpg"
    },

    {
        "nome": "Angela Caroll",
        "ruolo": "Chief Editor",
        "foto": "angela-caroll-chief-editor.jpg"
    },

    {
        "nome": "Walter Gordon",
        "ruolo": "Office Manager",
        "foto": "walter-gordon-office-manager.jpg"
    },

    {
        "nome": "Angela Lopez",
        "ruolo": "Social Media Manager",
        "foto": "angela-lopez-social-media-manager.jpg"
    },

    {
        "nome": "Scott Estrada",
        "ruolo": "Developer",
        "foto": "scott-estrada-developer.jpg"
    },

    {
        "nome": "Barbara Ramos",
        "ruolo": "Graphic Designer",
        "foto": "barbara-ramos-graphic-designer.jpg"
    }
]
//stampo in console
for (let key in team) {
    console.log(team[key]);
}

//stampo in pagina
for (let i = 0; i < team.length; i++) {
    let key = team[i];
    let keyElement = document.createElement("div");
    keyElement.classList.add("wrap")
    keyElement.innerHTML = `<img src="img/${key.foto}">
                            <p class="nome">${key.nome}</p>
                            <p class="ruolo">${key.ruolo}</p>`;
    arrayObject.append(keyElement);
}