# Instalação

`yarn add @brajs/log`

- Utiliza [pino](https://github.com/pinojs/pino), para escrita de arquivo. Pino tem recursos do Winston, com vantagem de suporte à Universal/SSR.

- Utiliza [consola](https://github.com/nuxt/consola), para escrita no console em ambiente de desenvolvimento

## Customizações para o app

### Utilização:

#### Desenvolvimento:

- Apenas no console (Node ou Browser).

- Todos os níveis, de Trace à Error

  - **Trace**: Usar para informar o ponto da execução, ex: `logger.trace('entrou em funcaoX')`

  - **Debug**: Usar para informações técnicas, ex: `logger.debug('obj', objY)`

  - **Info**: Usar para informações presentes em produção, ex: `logger.info('obj', objY)`

#### Produção

- Apenas loga no arquivo _bra.log_.

- Níveis **Info**, **Warn**, **Error**.
