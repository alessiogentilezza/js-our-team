/*
BONUS 1:
Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede

Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
*/

const arrayObject = document.getElementById("team")
const provaImg = document.getElementById("provaImg")

let imgArray = ['img/wayne-barnett-founder-ceo.jpg', 'img/angela-caroll-chief-editor.jpg']

let immagineCandidato = "";

for (let i = 0; i < imgArray.length; i++) {
    const imgWrapper = `<div><img src="${imgArray[i]}"></div>`;
    immagineCandidato += imgWrapper;
}

// provaImg.innerHTML = immagineCandidato;


const team = [
    {
        "nome": "Wayne Barnett",
        "ruolo": "Founder & CEO",
        "foto": immagineCandidato
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
    keyElement.innerHTML = key.nome + " - " + key.ruolo + " - " + key.foto + " - ";
    arrayObject.append(keyElement);
}

