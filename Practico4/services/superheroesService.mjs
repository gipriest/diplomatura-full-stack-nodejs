import SuperheroeFileRepository from "../repository/superheroesRepository.mjs";

const repository = new SuperheroeFileRepository();

export function buscarSuperheroePorId(id){
    const superheroes = repository.obtenerTodos();
    return superheroes.find(hero => hero.id === id);
}

export function buscarSuperheroePorAtributo(atributo, valor){
    const superheroes = repository.obtenerTodos();
    return superheroes.filter(hero => 
        String(hero[atributo]).toLowerCase().includes(valor.toLowerCase())
    );
}

export function buscarSuperheroeMayorDe30(){
    console.log("Servicio mayor a 30");
    const superheroes = repository.obtenerTodos();
    console.log(superheroes);
    return superheroes.filter(hero => 
        hero.edad > 30 && hero.planetaOrigen === 'Tierra' && hero.poder.lenght >= 2
    );
}