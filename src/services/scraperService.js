import axios from 'axios';
import * as cheerio from 'cheerio';
import { info, error } from '../utils/logger.js';  // Importando o logger

const baseUrl = 'https://webscraper.io/test-sites/e-commerce/static/computers/laptops';

// Função responsável por fazer o scraping de todas as páginas
export async function getLenovoLaptops() {
    try {
        let currentPage = 1;
        let totalPages = 1;
        const lenovoLaptops = [];

        while (currentPage <= totalPages) {
            const { data } = await axios.get(`${baseUrl}?page=${currentPage}`);
            const $ = cheerio.load(data);

            if (currentPage === 1) {
                totalPages = parseInt($('.pagination li:nth-last-child(2) a').text());
                info(`Total de páginas: ${totalPages}`);
            }

            $('.thumbnail').each((i, element) => {
                const title = $(element).find('.title').text().trim();
                if (title.toLowerCase().includes('lenovo')) {
                    const price = parseFloat($(element).find('.price').text().replace('$', '').trim());
                    const description = $(element).find('.description').text().trim();
                    const ratingElement = $(element).find('.ratings p:nth-child(2)');
                    const rating = ratingElement.length > 0 ? ratingElement.text().trim() : 'N/A';

                    lenovoLaptops.push({
                        title,
                        price,
                        description,
                        rating
                    });
                }
            });

            info(`Página ${currentPage} processada.`);
            currentPage++;
        }

        info('Notebooks Lenovo encontrados:', lenovoLaptops);

        return lenovoLaptops.sort((a, b) => a.price - b.price);
    } catch (err) {
        error(`Erro ao fazer scraping: ${err.message}`);
        throw new Error('Erro ao coletar os dados dos notebooks');
    }
}
