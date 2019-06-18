const pino = require("pino");

const dev = process.env.NODE_ENV !== "production";
let logger = null;
if (dev) {
  logger = pino({
    timestamp: false,
    level: 10,
    base: { pid: null },
    prettyPrint: {
      colorize: true,
      timestampKey: false
    }
  });
} else {
  logger = pino(
    {
      useLevelLabels: true,
      level: 40
    },
    pino.destination("bra.log")
  );
}

module.exports = logger;
