<h1>Desafio IN8 - Desenvolvedor Crawler Júnior</h1>
    <h2>Descrição</h2>
    <p>Este projeto é um desafio para a vaga de Desenvolvedor Crawler Júnior na empresa IN8. O objetivo é construir um web scraper que coleta informações sobre notebooks da marca <strong>Lenovo</strong> disponíveis no <a href="https://webscraper.io/test-sites/e-commerce/static/computers/laptops" target="_blank">site de teste de scraping da Web Scraper</a> e disponibilizar esses dados através de uma API RESTful em formato JSON.</p>
    <p>O scraper percorre todas as páginas da categoria "Laptops", filtra os produtos da marca Lenovo, ordena os notebooks do mais barato para o mais caro e expõe uma API que pode ser consumida por outros serviços.</p>
    <h2>Funcionalidades</h2>
    <ul>
        <li>Coleta de todos os notebooks Lenovo.</li>
        <li>Filtro apenas para produtos da marca <strong>Lenovo</strong>.</li>
        <li>Ordenação dos produtos do mais barato para o mais caro.</li>
        <li>Exposição dos dados através de uma API RESTful no formato JSON.</li>
        <li>Logs detalhados do processo de scraping.</li>
    </ul>
    <h2>Tecnologias Utilizadas</h2>
    <ul>
        <li><strong>Node.js</strong>: Plataforma de desenvolvimento.</li>
        <li><strong>Express.js</strong>: Framework para construção da API REST.</li>
        <li><strong>Cheerio</strong>: Biblioteca para fazer o scraping e manipular o HTML.</li>
        <li><strong>Axios</strong>: Biblioteca para fazer as requisições HTTP.</li>
        <li><strong>Jest</strong>: Ferramenta para testes automatizados.</li>
        <li><strong>Nodemon</strong>: Utilizado para reiniciar o servidor automaticamente durante o desenvolvimento.</li>
    </ul>
    <h2>Instalação</h2>
    <h3>Pré-requisitos</h3>
    <ul>
        <li>Node.js v14 ou superior</li>
        <li>NPM ou Yarn</li>
    </ul>
    <h3>Passos para instalação:</h3>
    <ol>
        <li>Clone o repositório:
            <pre><code>git clone https://github.com/seu-usuario/desafio-in8.git
cd desafio-in8</code></pre>
        </li>
        <li>Instale as dependências:
            <pre><code>npm install</code></pre>
        </li>
    </ol>
    <h2>Como Rodar o Projeto</h2>
    <h3>Modo de Desenvolvimento</h3>
    <p>Para iniciar o servidor no modo de desenvolvimento, use o comando:</p>
    <pre><code>npm run dev</code></pre>
    <p>O servidor estará disponível em <a href="http://localhost:3000">http://localhost:3000</a>.</p>
    <h3>Fazer uma Requisição à API</h3>
    <p>Você pode fazer uma requisição à API para obter os notebooks Lenovo utilizando a rota:</p>
    <pre><code>GET /api/lenovo-laptops</code></pre>
    <p>Exemplo de uso com <code>curl</code>:</p>
    <pre><code>curl http://localhost:3000/api/lenovo-laptops</code></pre>
    <p>A resposta será no formato JSON, contendo uma lista de notebooks Lenovo ordenados do mais barato para o mais caro.</p>
    <h2>Estrutura do Projeto</h2>
    <pre><code>desafio-in8/
│
├── src/
│   ├── controllers/
│   │   └── laptopsController.js   # Controlador da API
│   ├── routes/
│   │   └── laptopRoutes.js        # Rotas da API
│   ├── services/
│   │   └── scraperService.js      # Serviço de scraping
│   ├── utils/
│   │   └── logger.js              # Logger personalizado para logs detalhados
│   └── app.js                     # Configuração da aplicação Express
│
├── tests/
│   └── scraperService.test.js      # Testes automatizados do serviço de scraping
├── babel.config.cjs                # Configuração do Babel
├── package.json                    # Dependências e scripts do projeto
└── README.md                       # Documentação do projeto</code></pre>
    <h2>Testes Automatizados</h2>
    <p>Este projeto utiliza o <strong>Jest</strong> para garantir que o scraper funcione corretamente. Os testes estão localizados na pasta <code>tests/</code>.</p>
    <p>Para rodar os testes, execute:</p>
    <pre><code>npm test</code></pre>
    <p>Os testes garantem:</p>
    <ul>
        <li>Que o scraper retorna uma lista de notebooks Lenovo.</li>
        <li>Que os produtos estão corretamente ordenados por preço.</li>
        <li>Que o scraper trata erros de requisição corretamente.</li>
    </ul>
    <h2>Logs</h2>
    <p>O projeto utiliza um logger customizado para gerar logs detalhados durante o processo de scraping. Esses logs ajudam a monitorar o progresso e identificar possíveis falhas durante a execução.</p>
    <pre><code>[2024-09-17T17:18:34.206Z] [INFO]: Total de páginas: 20
[2024-09-17T17:18:34.211Z] [INFO]: Página 1 processada.
...
[2024-09-17T17:18:34.855Z] [INFO]: Página 20 processada.
[2024-09-17T17:18:34.856Z] [INFO]: Notebooks Lenovo encontrados: [...lista de notebooks...]</code></pre>
    <h2>Considerações Finais</h2>
    <p>Este projeto foi desenvolvido como parte de um teste para a vaga de <strong>Desenvolvedor Crawler Júnior</strong> na IN8. O código foi desenvolvido com foco em boas práticas, incluindo a separação de responsabilidades, testes automatizados e uma API simples e eficiente que pode ser facilmente integrada a outros sistemas.</p>
