import express from 'express';
import { connectDB } from './config/dbConfig.mjs';
import superHeroRoutes from './routes/superHeroRoutes.mjs';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Conexión a MongoDB
connectDB();

// Middleware
const loggerMiddleware = (req, res, next) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    next();
};

//app.use(loggerMiddleware);
app.use(express.json());

// Configuración de rutas
app.use('/api', superHeroRoutes);

// Manejo de errores para rutas no encontradas
app.use((req, res) => {
    res.status(404).send({ mensaje: "Ruta no encontrada" });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
