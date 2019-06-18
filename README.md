# Informações

Utilizado [pino](https://github.com/pinojs/pino) log, por ter recursos do Winston, com o adicional de suportar Browser e ter API simplificada.

É possível utilizar todas as features do [pino](https://github.com/pinojs/pino/blob/master/docs/api.md).

## Customizações para o app

### Ambientes:

#### Desenvolvimento:

- Apenas no console (Node ou Browser).
- Todos os níveis, de Trace à Error

#### Produção

- Apenas loga no arquivo _bra.log_.
- Somente os níveis Warn e Error.
