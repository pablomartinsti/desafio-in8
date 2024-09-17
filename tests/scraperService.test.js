import { getLenovoLaptops } from '../src/services/scraperService.js';

// Mockando o axios para que o teste não faça uma requisição real
import axios from 'axios';
jest.mock('axios');

describe('Scraping de laptops Lenovo', () => {
    test('Deve retornar uma lista de notebooks Lenovo ordenados por preço', async () => {
        // Mockando a resposta do axios
        axios.get.mockResolvedValue({
            data: `<div class="thumbnail">
                        <div class="title">Lenovo ThinkPad</div>
                        <div class="price">$999</div>
                        <div class="description">Lenovo ThinkPad L570</div>
                        <div class="ratings">
                            <p>Rating</p>
                            <p>4.5</p>
                        </div>
                   </div>`
        });

        const laptops = await getLenovoLaptops();
        
        // Verifica se retornou um array com pelo menos um notebook Lenovo
        expect(laptops.length).toBeGreaterThan(0);
        
        // Verifica se o primeiro laptop é um produto Lenovo
        expect(laptops[0].title).toContain('Lenovo');
        
        // Verifica se o preço está correto
        expect(laptops[0].price).toBe(999);
    });

    test('Deve retornar um array vazio se não encontrar notebooks Lenovo', async () => {
        // Mockando uma resposta sem produtos Lenovo
        axios.get.mockResolvedValue({
            data: `<div class="thumbnail">
                        <div class="title">Acer Aspire</div>
                        <div class="price">$599</div>
                        <div class="description">Acer Aspire E1-510</div>
                   </div>`
        });

        const laptops = await getLenovoLaptops();

        // Verifica se o array retornado é vazio
        expect(laptops).toEqual([]);
    });

    test('Deve lançar um erro em caso de falha na requisição', async () => {
        // Mockando um erro na requisição do axios
        axios.get.mockRejectedValue(new Error('Erro na requisição'));

        await expect(getLenovoLaptops()).rejects.toThrow('Erro ao coletar os dados dos notebooks');
    });
});
