/**
 * I Want MCC Bot
 * Because life is a lie and I have no life.
 */

 const Discord = require('discord.js')
 require('dotenv').config()
 const createCsvWriter = require('csv-writer').createObjectCsvWriter;

 const csvWriter = createCsvWriter({
    path: 'list.csv',
    header: [
        {id: 'string', title: 'NAME'},
        {id: 'user', title: 'USR'}
    ]
});
const records = [
    ['Bob',  'French, English'],
    ['Mary', 'English']
];
 
csvWriter.writeRecords(records)       // returns a promise
    .then(() => {
        console.log('...Done');
    });


 const questionCheck = require("./checkFunction")

 // const client = new Discord.Client()

 const embed = new Discord.MessageEmbed()
    .setTitle("How do I get into MCC?")
    .setDescription("MC Championships is an invite only streamer event! If you're wondering how the teams are picked, watch this video by the team organizer, Dangthatsalongname: https://www.youtube.com/watch?v=cwZwMSXAbUg \n\nWhile we hosted two viewer teams for MCC 10, we have not announced any plans to do the same for any future events.")
    .setDescription("Auto MCC Answer Bot. A bad idea with a worse execution.")

 // client.login(process.env.DTOKEN)

 /*
 client.on('message', async (message) => {

    if (!message.guild || message.author.bot) return;

    if (message.author.id === "248540313059196928") message.author.level = "42";

    if (questionCheck(message)) {
        message.reply(embed)
    }

    const args = message.content.slice(1).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === "addq") {

    }
 })*/