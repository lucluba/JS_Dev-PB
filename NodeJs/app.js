const addCommand = require("./add");
const removeCommand = require("./remove");
const randomCommand = require("./random");
const fetchCommand = require("./fetch");
const listCommand = require("./list");

require("yargs")
  .command(addCommand)
  .command(removeCommand)
  .command(randomCommand)
  .command(listCommand)
  .command(fetchCommand)
  .demandCommand(1, "Podaj jedno z dostępnych poleceń aby uruchomić aplikację")
  .help().argv;
