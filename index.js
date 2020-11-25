const Discord = require('discord.js');

const client = new Discord.Client();
const request = require('request')

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

client.once('ready', () => {
    console.log('Ready!');
    client.user.setActivity('!quote');
});

client.on('message', message => {
    if (message.content === '!quote'){
        request('https://type.fit/api/quotes', function (error, response, body) {
            var res = JSON.parse(body);
            quote = res[getRandomInt(res.length)];
            message.channel.send('**' + quote['text'] + '**\n-' + quote['author'] + '');
        });
    }
    if (message.content === '!help'){
        message.channel.send('Hey there! Run `!quote` to get a quote.');
    }
});

client.login(process.env.QQ_BOT_TOKEN);