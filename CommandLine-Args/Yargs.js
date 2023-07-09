const yargs = require('yargs')

yargs.command({
    command: 'add',
    describe: 'To Add Note',
    builder: {
        title: {
            describe: 'Title of Note',
            demandOption: true,
            type: String
        },
        body: {
            describe: 'Body of Note',
            demandOption: true,
            type: String
        }
    },
    handler: function (argv) {
        console.log('Title of Note is: '+ argv.title)
        console.log('Body of the Note is: '+ argv.body)
    }
}).argv