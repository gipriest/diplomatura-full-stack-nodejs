import {
    buscarSuperheroesPorAtributo,
    obtenerSuperheroePorId,
    obtenerSuperheroesMayoresDe30,
    obtenerTodosLosSuperheroes
} from '../services/superheroesService.mjs';
import { renderizarListaSuperheroes, renderizarSuperheroe } from '../views/responseView.mjs';


export async function obtenerTodosLosSuperheroesController(req, res) {
    console.log("Ejecutando consulta de getall controlador...");
    const superheroes = await obtenerTodosLosSuperheroes();
    res.send(renderizarListaSuperheroes(superheroes));
}


export async function buscarSuperheroesPorAtributoController(req, res) {
    console.log("Ejecutando consulta de getByAtributo controlador...");
    const { atributo, valor } = req.params;
    const superheroes = await buscarSuperheroesPorAtributo(atributo, valor);

    if (superheroes.length > 0) {
        res.send(renderizarListaSuperheroes(superheroes));
    } else {
        res.status(404).send({ mensaje: "No se encontraron superhéroes con ese atributo" });
    }
}

export async function obtenerSuperheroePorIdController(req, res) {
    console.log("Ejecutando consulta de getbyid controlador...");
    const codigo = req.params['id'];
    console.log(codigo);
    const superheroe = await obtenerSuperheroePorId(codigo);

    if (superheroe) {
        res.send(renderizarSuperheroe(superheroe));
    } else {
        res.status(404).send({ mensaje: "Superhéroe no encontrado" });
    }
}

export async function obtenerSuperheroesMayoresDe30Controller(req, res) {
    console.log("Ejecutando consulta de obtenerMayoresDe30 controlador...");
    const superheroes = await obtenerSuperheroesMayoresDe30();
    res.send(renderizarListaSuperheroes(superheroes));
}
