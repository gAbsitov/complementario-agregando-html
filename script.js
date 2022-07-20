class Pokemon {
    constructor(nombre, tipo, descripcion, region, imagen) {
        this.nombre = nombre
        this.tipo = tipo
        this.descripcion = descripcion
        this.region = region
        this.imagen = imagen
    }
}

const pokemon1 = new Pokemon("Bulbasaur", ["Planta", "Veneno"], "Bulbasaur es un Pokémon introducido en la primera generación. Es uno de los Pokémon iniciales que pueden elegir los entrenadores que empiezan su aventura, junto a Squirtle y Charmander.", "Kanto", "./imagenes/bulbasaur.png")
const pokemon2 = new Pokemon("Chimchar", ["Fuego"], "Chimchar es un Pokémon introducido en la cuarta generación. Es uno de los Pokémon iniciales, junto a Turtwig y Piplup.", "Sinnoh", "./imagenes/chimchar.png")
const pokemon3 = new Pokemon("Totodile", ["Agua"], "Totodile es un Pokémon introducido en la segunda generación y es uno de los Pokémon iniciales que puedes elegir al iniciar tu aventura, junto a Cyndaquil y Chikorita.", "Johto", "./imagenes/totodile.jpg")
const pokemon4 = new Pokemon("Tyranitar", ["Roca", "Siniestro"], "Tyranitar es un Pokémon introducido en la segunda generación. Es la evolución de Pupitar, a partir de la sexta generación puede megaevolucionar en Mega-Tyranitar.", "Kalos Montaña", "./imagenes/tyranitar.jpg")


const pokemones = [pokemon1, pokemon2, pokemon3, pokemon4]

const divPokemones = document.getElementById('pokemones')

pokemones.forEach(pokemonesArray => {
    divPokemones.innerHTML += `
    <div class="card mx-auto" style="width: 18rem;">
    <img src="${pokemonesArray.imagen}">
    <div class="card-body">
    <h5 class="card-title">Nombre: ${pokemonesArray.nombre}</h5>
    <p class="card-text">Tipo: ${pokemonesArray.tipo}</p>
    <p class="card-text">${pokemonesArray.descripcion}</p>
    <p class="card-text">Region: ${pokemonesArray.region}</p>
    </div>
  </div>
    `
})