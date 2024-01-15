
function convertPokemonToHtml(pokemon) {
    return `
    <li class="pokemon ${pokemon.type}">
    <span class="number">#0${pokemon.number}</span>
    <span class="name">${pokemon.name}</span>

    <div class="details">
        <ol class="types">
             ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`)}
        </ol>
        <img src="${pokemon.photo}"
            alt="${pokemon.name}">
    </div>
    </li>
    `
}

const pokemonList = document.getElementById('pokemonList')

// fetchAPI
// O fetch nos retorna uma Promise | Promise é a promessa de um resultado
// o .then() nos retorna a resposta da Promise caso o fetch() de certo

//--------------------------------------||--------------------------------------


/** SINTAXE REDUZIDA */
pokeApi.getPokemons().then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToHtml).join('');
    pokemonList.innerHTML += newHtml;
})

/** SINTAXE 2 */

// pokeApi.getPokemons().then((pokemons = []) => {

//     const newList = pokemons.map((pokemon) => {
//         return convertPokemonToHtml(pokemon)

//     })
    
//     const newHtml = newList.join('')
    
//     pokemonList.innerHTML += newHtml;
    
// })

//--------------------------------------------||----------------------------------------

/** SINTAXE 3 */

// pokeApi.getPokemons().then((pokemons) => {
//     const listItems = [];
//     for (let i = 0; i < pokemons.length; i++) {
//         const pokemon = pokemons[i];
//         listItems.push(convertPokemonToHtml(pokemon));
//     }
//     console.log(listItems)
// })


//-----------------------------------------------||-------------------------------------------------------------

// .catch((error) => console.error(error)) // Nos retorna uma mensagem de erro caso o fetch() não de certo

// .finally(() => console.log("Finally")) ||| Finaliza o processo mesmo se de certo ou errado

//-----------------------------------------------||-------------------------------------------------------------

/*  try {
      faça algo
  } catch {
      Caso de erro
  } finally {
      Finaliza o processo mesmo se de certo ou errado
  } */