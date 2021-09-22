"use strict"
const characterList = document.getElementById("characterList");
let hpCharacters = [];

const loadCharacters = async () => {
    try {
        const res = await fetch('http://hp-api.herokuapp.com/api/characters');
        hpCharacters = await res.json();
        console.log(hpCharacters);
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
}

const displayCharacters = (characters) => {
    const html = characters.map((character) => {
        return `
        <li class="character">
           <h2>${character.name}</h2>
           <p>House: ${character.house}</p>
           <img src="${character.image}">
        </li>
    `;
    })
        .join('');
    characterList.innerHTML = html;
}

loadCharacters();