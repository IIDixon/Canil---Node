import express, {Request, Response} from 'express';
import mustache from 'mustache-express';
import dotenv from 'dotenv';
import path from 'path';
import mainRoutes from './routes/index';

// Inicializa o DOTENV
dotenv.config();

const server = express();

//importa o mustache para o projeto
server.set('view engine', 'mustache');

// Indica onde estão os arquivos que serão renderizados
server.set('views', path.join(__dirname, 'views'));

// Indica ao node qual engine iremos utilizar
server.engine('mustache', mustache());

// Deixa o arquivo/pasta (public) acessível via URL
// a partir de determinada rota (no caso '/static') (OPCIONAL)
server.use('/static',express.static(path.join(__dirname, '../public')));

// Rotas
server.use(mainRoutes);

server.use((req, resp) => {
    resp.status(404).send('Página não encontrada');
})

server.listen(process.env.PORT);