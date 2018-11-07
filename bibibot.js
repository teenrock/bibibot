const Discord = require("discord.js");
const Music = require('discord.js-musicbot-addon');
const client = new Discord.Client({autoReconnect: true, max_message_cache: 0});
const config = require("./config.json");
const fs = require("fs-extra");
const decache = require("decache");
const path = require("path");
const prefix = config.prefix;

Music.start(client, {
  youtubeKey: `${config.YTkey}`
});

client.on("ready", (message) => {
  const onReady = require("./onReady.js");
  onReady(message, client)
  spksnd.join();
});

client.on("message", message => {

  if ((message.author.bot) || (message.channel.name == undefined)) return;
  var member = message.mentions.members.first();
  var args = message.content.split(" ");
  var MentionMSG = ` **#############################################################################################**
 ${new Date()}\n\n **${message.author.username}** vous a mentionné sur <#${message.channel.id}>\n
 ${message}\n`;

  // Bot DM report message to member if mentionned
  if ((member) && (!message.content.startsWith(prefix))) {
    const isMentionned = require("./functions/isMentionned.js");
    isMentionned(message, member, decache, path, MentionMSG) 		
  }

  // Bot DM report function on #chouchoune_home channel
  if ((message.channel == homesweetash)||(message.channel == homesweetteen)) {
    const homechanrep_ash = require("./functions/homechanrep_ash.js");
    const homechanrep_teen = require("./functions/homechanrep_teen.js");
    homechanrep_ash(message, prefix, client, fs, decache, path, args)
    homechanrep_teen(message, prefix, client, fs, decache, path, args)
  }

  // users cmds
  if (message.content.startsWith(prefix)) {
    const cmds = require("./functions/cmds.js");
    const ash_cmds = require("./functions/ash_cmds.js");
    const teen_cmds = require("./functions/teen_cmds.js");
    const teensound = require("./functions/teensound.js");
    cmds(message, prefix, client, args)
    ash_cmds(message, prefix, fs, decache, path, args)
    teen_cmds(message, prefix, fs, decache, path, args)
    teensound(message, prefix, client, args)
  }

});

client.on('voiceStateUpdate', (oldMember, newMember) => {
  const JoinQuitVoc = require("./functions/JoinQuitVoc.js");
  JoinQuitVoc(oldMember, newMember)
});

client.login(config.token)