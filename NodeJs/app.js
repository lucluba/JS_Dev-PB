const addCommand = require("./add");
const listCommand = require("./list");

require("yargs")
  .command(addCommand)
  .command(listCommand)
  .demandCommand(1, "Podaj jedno z dostępnych poleceń aby uruchomić aplikację")
  .help().argv;
