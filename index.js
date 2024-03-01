const logger = require('logger-syskey');
const readLines = require('readFile-syskey');


let main = async () => {
    let texts = await readLines('./example.txt');
    texts.forEach(text => {
        logger.info(text);
    });
};

main();