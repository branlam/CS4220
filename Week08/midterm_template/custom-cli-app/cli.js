// CLI using yargs for search command
// ex: node cli.js search -k keyword
const
    yargs = require('yargs'),
    app = require('./app')

const flags = yargs.usage('$0: Usage <cmd> [options]')
    .command({
        command: 'search',
        desc: 'search for characters in game of thrones',
        builder: (yargs) => {
            return yargs.option('n', {
                alias: 'name',
                describe: 'name of character'
            })
        },
        handler: (argv) => { 
            app.search(argv.name) 
        }
    })
    .help('help')
    .argv