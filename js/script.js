"use strict"
const characterList = document.getElementById("characterList");
const searchBar = document.getElementById("searchBar");
// const characters = ;
let hpCharacters = [];

searchBar.addEventListener('keyup', (e) => {
    const userInput = e.target.value.toLowerCase();
    const filteredCharacters = hpCharacters.filter(character => {
        return character.name.toLowerCase().includes(userInput) || character.house.toLowerCase().includes(userInput);
    })
    displayCharacters(filteredCharacters);
})

// console.log(characters);

const characters = document.getElementsByClassName("character");
for (let i = 0; i < characters.length; i += 1) {
    characters[i].addEventListener('click', (e) => {
        alert('clickced');
    })
}


// function to load the characters from API using async and await
const loadCharacters = async () => {
    try {
        const res = await fetch('http://hp-api.herokuapp.com/api/characters');
        hpCharacters = await res.json();
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






