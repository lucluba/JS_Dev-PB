const addCommand = require("./add");
const removeCommand = require("./remove");
const randomCommand = require("./random");
const listCommand = require("./list");

require("yargs")
  .command(addCommand)
  .command(removeCommand)
  .command(randomCommand)
  .command(listCommand)
  .demandCommand(1, "Podaj jedno z dostępnych poleceń aby uruchomić aplikację")
  .help().argv;
