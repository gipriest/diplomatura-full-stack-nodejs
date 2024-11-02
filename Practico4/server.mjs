import express from 'express';
import { buscarSuperheroeMayorDe30Controller, buscarSuperheroePorAtributoController, obtenerSuperheroePorIdController } from './controlles/superheroesControlles.mjs';


const app = express();
const PORT = 3005;

app.use(express.json());

app.get('/superheroes/id/:id', obtenerSuperheroePorIdController);
app.get('/superheroes/atributo/:atributo/:valor', buscarSuperheroePorAtributoController);
app.get('/superheroes/edad/mayorA30', buscarSuperheroeMayorDe30Controller);

app.listen(PORT, ()=>{
    console.log(`Servisor corriendo en http://localhost:${PORT}`);
});