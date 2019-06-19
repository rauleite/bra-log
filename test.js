const logger = require("./index.js");

const complex = {
  array: [1, 2, 3],
  boolean: true,
  color: "#82b92c",
  null: null,
  number: 123,
  object: {
    a: "b",
    c: "d",
    e: "f"
  },
  string: "Hello World"
};

// console.log(logger.trace);

// console.log("TCL: logger.CONSOLA_LEVEL", logger.CONSOLA_LEVEL);
console.log(process.env.CONSOLA_LEVEL);
console.log(process.env.NODE_ENV);

logger.trace("hello trace");
logger.debug("hello debug");
logger.info("hello info");
logger.error("hello error");
logger.warn("hello warn");

logger.info(complex);
