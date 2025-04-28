// server.js
const express = require('express');
const pokemon = require('pokemon'); // <-- import pokemon
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    const randomPokemon = pokemon.random(); // get a random Pokémon name
    res.send(`<h1>Welcome to the Pokémon Server!</h1><p>Your random Pokémon is: <strong>${randomPokemon}</strong></p>`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
