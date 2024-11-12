import SuperHero from "../models/SuperHero.mjs";
import IRepository from "./IRepository.mjs";


class SuperHeroRepository extends IRepository {
    async obtenerPorId(id){
        console.log("Ejecutando consulta de getbyid repository...");
        const query = { codigo: Number(id) };
        return await SuperHero.find(query);
    }

    async obtenerTodos(){
        return await SuperHero.find();
    }

    async buscarPorAtributo(atributo, valor){
        const query = { [atributo]: new RegExp(valor, 'i') };
        return await SuperHero.find(query);
    }

    async obtenerMayoresDe30(){
        console.log("Ejecutando consulta de obtenerMayoresDe30 repository...");
        return await SuperHero.find({ 
            edad: {$gt: 30}, 
            planetaOrigen: 'Tierra', 
            $expr: { $gte: [{ $size: "$poderes" }, 2] }
        });
    }
}

export default new SuperHeroRepository();