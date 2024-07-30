import express from 'express';
import 'reflect-metadata';
import './config/database'; // Importar la conexión de la base de datos
import RegistroRoutes from './api/routes/RegistroRoutes';
import 'dotenv/config';

const app = express();

app.use(express.json());

app.use('/api', RegistroRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
