const addCommand = require("./add");
const removeCommand = require("./remove");
const listCommand = require("./list");

require("yargs")
  .command(addCommand)
  .command(removeCommand)
  .command(listCommand)
  .demandCommand(1, "Podaj jedno z dostępnych poleceń aby uruchomić aplikację")
  .help().argv;
