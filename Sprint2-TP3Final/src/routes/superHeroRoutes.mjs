import express from 'express';
import { handleValidationErrors, processFormData } from './errorMiddleware.mjs';
import { registerValidationRules } from './validationRules.mjs';

import {
    obtenerSuperheroePorIdController,
    obtenerTodosLosSuperheroesController,
    buscarSuperheroesPorAtributoController,
    obtenerSuperheroesMayoresDe30Controller,
    crearSuperheroeController,
    editarSuperheroeController,
    eliminarSuperheroePorIdController,
    eliminarSuperheroePorNombreController
} from '../controllers/superheroesController.mjs';



const router = express.Router();

router.get('/heroes/agregar', (req, res) => {
    res.render('agregar', { superheroe: {} }); // Asegúrate de pasar superheroe como objeto
});

router.get('/heroes/eliminar', (req, res) => {
    res.render('eliminar');
});


router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller);
router.get('/heroes/:id', obtenerSuperheroePorIdController);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);
router.get('/heroes', obtenerTodosLosSuperheroesController);


router.post('/heroes', processFormData, registerValidationRules(), handleValidationErrors, crearSuperheroeController);
router.put('/heroes/:id',editarSuperheroeController);
router.delete('/heroes/id/:id',eliminarSuperheroePorIdController);
router.delete('/heroes/nombre/:nombre',eliminarSuperheroePorNombreController);


export default router;