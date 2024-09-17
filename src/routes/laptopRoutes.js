import express from 'express';
import { fetchLenovoLaptops } from '../controllers/laptopsController.js';  // Importando o controlador

// Criando a instância do roteador
const router = express.Router();

// Definindo a rota GET para "/api/lenovo-laptops"
router.get('/lenovo-laptops', fetchLenovoLaptops);  // Rota que vai retornar os notebooks

export default router;
