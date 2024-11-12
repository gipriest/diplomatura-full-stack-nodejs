import SuperHero from "../models/SuperHero.mjs";
import IRepository from "./IRepository.mjs";
import mongoose from 'mongoose';



class SuperHeroRepository extends IRepository {
    async obtenerPorId(id) {
        console.log("Ejecutando consulta de getbyid repository...");        
        const objectId = new mongoose.Types.ObjectId(id);        
        return await SuperHero.findById(objectId);
    }

    async obtenerTodos() {
        const heroes = await SuperHero.find();
        return heroes;
    }

    async buscarPorAtributo(atributo, valor) {
        const query = {};

        const camposNumericos = ['edad', 'codigo'];

        if (camposNumericos.includes(atributo) && !isNaN(valor)) {
            query[atributo] = Number(valor);
        } else if (['poderes', 'aliados', 'enemigos'].includes(atributo)) {
            query[atributo] = { $elemMatch: { $regex: valor, $options: 'i' } };
        } else {
            query[atributo] = new RegExp(valor, 'i');
        }

        return await SuperHero.find(query);
    }

    async obtenerMayoresDe30() {
        console.log("Ejecutando consulta de obtenerMayoresDe30 repository...");
        return await SuperHero.find({
            codigo: { $type: "number" },
            edad: { $gt: 30 },
            planetaOrigen: 'Tierra',
            $expr: { $gte: [{ $size: "$poderes" }, 2] }
        });
    }
}

export default new SuperHeroRepository();