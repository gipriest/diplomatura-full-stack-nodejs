import { body } from 'express-validator';

export const registerValidationRules = () => [
    // Validar nombre del superhéroe
    body('nombreSuperHeroe')
        .isLength({ min: 3, max: 60 }).withMessage('La longitud de nombreSuperHeroe debe ser al menos de 3 caracteres y máximo 60 caracteres.')
        .trim()
        .escape(),

    // Validar nombre real
    body('nombreReal')
        .isLength({ min: 3, max: 60 }).withMessage('La longitud de nombreReal debe ser al menos de 3 caracteres y máximo 60 caracteres.')
        .trim()
        .escape(),

    // Validar edad
    body('edad')
        .isNumeric().withMessage('La edad debe ser un valor numérico.')
        .custom((value) => value > 0).withMessage('La edad debe ser mayor a 0')
        .trim(),

    // Validar que "poderes" es un array no vacío
    body('poderes')
        .isArray({ min: 1 }).withMessage('Los poderes deben estar en un array y no pueden estar vacíos.')
        .custom((array) => 
            array.every(item => 
                typeof item === 'string' && item.length >= 3 && item.length <= 60
            )
        ).withMessage('Cada elemento del array de poderes debe ser una cadena con al menos 3 caracteres y máximo 60 caracteres.')
];