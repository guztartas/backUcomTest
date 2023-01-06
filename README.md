# Youcom Product Catalog API

```
# Configuração de ambiente no .env (alterar ser necessário)
```

## Comandos

Por primeiro:

```bash
yarn install
```


Rodar localmente:

```bash
yarn dev
```

Rodar em prod:

```bash
yarn start
```

Testes:

```bash
# Todos testes
yarn test

# Todos testes em watch mode
yarn test:watch

# Ver a cobertura de testes
yarn coverage
```

Linting:

```bash
# rodar ESlint
yarn lint

# Corrigir erros do ESLint
yarn lint:fix

# Rodar o prettier
yarn prettier

# Corrigir erros do prettier
yarn prettier:fix
```

## Environment Variables

The environment variables can be found and modified in the `.env` file. They come with these default values:

```bash
# Porta da API
PORT=3000
# Ambiente que está rodando
NODE_ENV=development
```

## Project Structure

```
src\
 |--config\         # Váriaveis de ambiente e configurações
 |--controllers\    # Camada de controle
 |--docs\           # Arquivos do Swagger
 |--middlewares\    # Middlewares do Express
 |--routes\         # Rotas
 |--services\       # Regras de negócio
 |--utils\          # Classes e funções úteis
 |--validations\    # Schemas de validação
 |--app.js          # App Express
 |--index.js        # Ponto inicial da aplicaçao
```

## API Documentation

Documentação da API disponível em `http://localhost:3000/v1/docs`. Documentação gerada automaticamente pelo[swagger](https://swagger.io/) definitions escrita como comentários nos arquivos de rotas.

### API Endpoints

**Product Routes**:\
`GET /v1/api/products` - get product catalog
