/**
 * I Want MCC Bot
 * Developed by Sword
 * 
 * A WARNING:
 * This was written as a very not serious project. 
 * I do not intend to make this mess of code better, only to add items to the endless list of the people who want to join MCC.
 */

 const Discord = require('discord.js')
 require('dotenv').config()

const triggers = require('./triggers')


 const client = new Discord.Client()

 const embed = new Discord.MessageEmbed()
    .setTitle("How do I get into MCC?")
    .setDescription("MC Championships is an invite only streamer event! If you're wondering how the teams are picked, watch this video by the team organizer, Dangthatsalongname: https://www.youtube.com/watch?v=cwZwMSXAbUg \n\nWhile we hosted two viewer teams for MCC 10, we have not announced any plans to do the same for any future events.")
    .setColor("GOLD")
    .setFooter("A very bad idea, by Sword")

  client.login(process.env.DTOKEN)

 
  client.on('ready', async (client) => {
      console.log('I AM READY!')
  })

 client.on('message', async (message) => {

    if (!message.guild) return; // Ignore DMs
    if (message.author.bot) return; // Ignore bot users (and the bot itself!)

    if (message.content.startsWith('!')) {
        
        const args = message.content.slice(1).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        if (command === "mcc") {
            message.delete()
            message.channel.send(embed)
        };
    };


      
      if(triggers(message.content)) {
        message.channel.send(embed);
      }
    
});