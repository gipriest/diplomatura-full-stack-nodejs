import { leerSuperheroes, agregarSuperheroe } from "./utils.mjs";

const archivoOriginal = './superheroes.txt';
const archivoNuevos = './agregarSuperheroes.txt';

agregarSuperheroe(archivoOriginal, archivoNuevos);

const superheroes = leerSuperheroes(archivoOriginal);
console.log('Superheroes ordenados:');
console.log(superheroes);