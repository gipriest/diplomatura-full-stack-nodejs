import express from 'express';

const app = express();

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Servisor corriendo en http://localhost:${PORT}`);
});

// Ruta GET para el home
// Solicitud: http://localhost:3000/ 
app.get('/', (req,res) =>{
    res.send('Pagina de inicio');
});


// Ruta GET para recibir datos simples
// Solicitud: http://localhost :3000/data 
app.get('/data', (req,res)=>{
    res.send('Datos recibidos');
});


// Ruta GET con parámetro de ruta
// Solicitud: http://localhost:3008/user/123 
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    console.log(`Perfil del usuario con ID: ${userId}`);
    res.send(`Perfil del usuario con ID: ${userId}`);
});


// Ruta GET con múltiples parámetros
// Solicitud: http://localhost:3068/product/electronics/456 
app.get('/product/:category/:id', (req, res) => {
    const { category, id } = req.params;
    res.send(`Categoría: ${category}, ID del producto: ${id}`);
});


// Ruta GET con parámetro de consulta
// Solicitud: http://localhost :3000/search?q=javascript
app.get('/search', (req, res) => {
    const query = req.query.q;
    res.send(`Resultados de búsqueda para: S${query}`);
});


// Ruta GET con múltiples parámetros de consulta
// Solicitud: http://localhost:3000/filter?type=book&minPrice=10&maxPrice=50
app.get('/filter', (req, res) => {
    const {type, minPrice, maxPrice} = req.query;
    res.send(`Filtrar por tipo: ${type}, rango de precios: ${minPrice} - ${maxPrice}`);
}); 


// Ruta GET con parámetro de consulta
// Solicitud: http://localhost:3000/profile?edad=30 
app.get('/profile', (req,res)=>{
    const edad = req.query.edad;
    console.log(`Edad recibida: ${edad}`);
    res.send(`Edad del perfil: ${edad}`);
});