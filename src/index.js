const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const program = require('commander');
const { fetchNow, weatherForecast } = require('./commands');

clear();
console.log(
  chalk.green(
    figlet.textSync('Simple Weather', { horizontalLayout: 'full' })
  )
);

program
    .command("now <city>")
    .alias('n')
    .description('see the current weather in the specified city')
    .action(city => fetchNow(city));

program
    .command("forecast <city>")
    .alias('f')
    .description('see the weather forecast of a specified city')
    .action(city => weatherForecast(city))

program.parse(process.argv)
