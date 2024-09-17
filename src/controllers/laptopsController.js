import { getLenovoLaptops } from '../services/scraperService.js';  // Importando o serviço de scraping

// Controlador que lida com a requisição
export async function fetchLenovoLaptops(req, res) {
    try {
        const laptops = await getLenovoLaptops();  // Chama o serviço para buscar os laptops
        res.status(200).json(laptops);  // Responde com os dados no formato JSON
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar dados', error: error.message });
    }
}
