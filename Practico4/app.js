const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://Grupo-06:grupo06@cursadanodejs.ls9ii.mongodb.net/Node-js',{
    //useNewUrlParser: true,
    //useUnifiedTopology: true
})
.then(()=> console.log('Conexion exitosa a MongoDB'))
.catch(error => console.error('Error al conectar a MongoDB: ', error));


const superheroeSchema = new mongoose.Schema({
    codigo: { type: Number, unique: true },
    nombreSuperHeroe: { type: String, required: true},
    nombreReal: { type: String, required: true},
    edad: { type: Number, min: 0},
    planetaOrigen: { type: String, default: 'Desconocido'},
    debilidad: String,
    poderes: [String],
    aliados: [String],
    enemigos: [String],
    createdAt: { type: Date, default: Date.now}
},{
    collection: 'Grupo-06'
});

const SuperHero = mongoose.model('Grupo-06', superheroeSchema);


//Funcion agregar
async function insertSuperHero(){
    const hero = new SuperHero({
        codigo: 10,
    nombreSuperHeroe: 'Thor',
    nombreReal: 'Thor Odinson',
    edad: 1500,
    planetaOrigen: 'Asgard',
    debilidad: 'Arrogancia',
    poderes: ['Manipulación del rayo', 'Super fuerza', 'Vuelo', 'Durabilidad'],
    aliados: ['Hulk', 'Capitán América'],
    enemigos: ['Loki']
    });
    await hero.save();
    console.log('Superheroes insertado: ', hero);
}

insertSuperHero();


//Funcion actualizar
async function updateSuperHero(nombreSuperheroe){
    const result = await SuperHero.updateOne(
        { nombreSuperHeroe: nombreSuperheroe},
        { $set: {edad: 26}}
    );
    console.log('Resultado de la actualizacion: ', result);
}

//updateSuperHero('Spiderman');


//Funcion eliminar
async function deleteSuperHero(nombreSuperheroe) {
    const result = await SuperHero.deleteOne({ nombreSuperHeroe: nombreSuperheroe });
    console.log('Superheroe eliminado', result);
}

//deleteSuperHero('Spiderman');


//Funcion buscar
async function findSuperHereos(){
    const heores = await SuperHero.find({ planetaOrigen: 'Tierra' });
    console.log('Superheroes encontrados:', heores);
}

//findSuperHereos();