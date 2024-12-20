import { buscarSuperheroePorId, buscarSuperheroePorAtributo, buscarSuperheroeMayorDe30 } from '../services/superheroesService.mjs';
import { renderizarListaSuperheroes,renderizarSuperheroe } from '../views/responseView.mjs';

export function obtenerSuperheroePorIdController(req, res) {
    const {id} = req.params;
    const superheroe = buscarSuperheroePorId(parseInt(id));

    if(superheroe){
        res.send(renderizarSuperheroe(superheroe));
        res.status(200);
    } else {
        res.status(404).send({ mensaje: "Superheroe no encontrado"});
    }
}

export function buscarSuperheroePorAtributoController(req, res) {
    const {atributo, valor} = req.params;
    const superheroes = buscarSuperheroePorAtributo(atributo, valor);

    if(superheroes.lenght > 0){
        res.send(renderizarListaSuperheroes(superheroes));
    } else {
        res.status(404).send({ mensaje: "No se encontraron superheroes con ese atributo"});
    }
}

export function buscarSuperheroeMayorDe30Controller(req, res) {
    console.log("estoy en el controlador mayor a 30");
    const superheroes = buscarSuperheroeMayorDe30();
    if(superheroes.lenght > 0){
        res.send(renderizarListaSuperheroes(superheroes));
    } else {
        res.status(404).send({ mensaje: "No se encontraron superheroes con ese atributo"});
    }
}