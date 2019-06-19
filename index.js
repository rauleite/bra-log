const pino = require("pino");
const consola = require("consola");

const dev = process.env.NODE_ENV !== "production";
let logger = null;

const backend = typeof window === "undefined";

const optionsProd = {
  useLevelLabels: true,
  level: 30
};

if (dev) {
  if (backend) {
    // logger = pino(optionsDev);
    logger = consola;
  } else {
    // logger = pino(optionsDevBrowser);
    logger = consola;
  }
} else {
  if (backend) {
    logger = pino(optionsProd, pino.destination("bra.log"));
  } else {
    logger = consola;
  }
}

module.exports = logger;

// const optionsDev = {
//   timestamp: false,
//   level: 10,
//   base: { pid: null },
//   prettyPrint: {
//     colorize: true,
//     timestampKey: false
//   }
// };

// const optionsDevBrowser = { ...optionsDev, browser: { asObject: true } };
