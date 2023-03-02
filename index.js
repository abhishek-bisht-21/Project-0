const { Telegraf } = require('telegraf');

/**
 * How to get the secret token to create the bot?
 * -> Open Telegram and search for botfather
 * -> Type: /start and press enter
 * -> To create a new bot: /newbotn and press enter
 * -> It will ask for bot name, provide a bot name without '/'
 * -> then it will ask for a username, ending with 'bot'
 * -> http://t.me/code_along_bot
 * 
 */

let binarySearch = `
function binarySearch(array, element) {
    let firstIndex = 0;
    let lastIndex = array.length - 1;
    let middleIndex = Math.floor((firstIndex + lastIndex) / 2);

    while (array[middleIndex] !== element && firstIndex <= lastIndex) {
        if(array[middleIndex] > element) {
                lastIndex = middleIndex - 1;
        }else {
                firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((firstIndex + lastIndex) / 2);
    }
    return array[middleIndex] === element ? middleIndex : -1;
}
`

const bot = new Telegraf('6017598983:AAF2h5ST4JYEVsapMxq7Fl-Eejdf0hconWQ')

bot.start((ctx) => ctx.reply('Welcome to the new Coding Bot from Abhishek'));

bot.command('binarySearchjs', (ctx) => ctx.reply(binarySearch));

bot.on('sticker', (ctx) => ctx.reply('❤️'));

bot.launch();