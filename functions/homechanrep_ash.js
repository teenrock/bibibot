function homechanrep_ash(message, prefix, client, fs, decache, path, args) {

  if (message.author == ash) return;

  var MSG = ` **\`${new Date()}\`**\n **${message.author.username}** sur **<#${message.channel.id}> :** ${message}`;
  var ash_homerepfile = path.resolve(__dirname, ("../users_config/ash_homerepstat.js"));
  console.log(ash_homerepfile)
  if (fs.existsSync(ash_homerepfile)) {
    decache(ash_homerepfile)
    ashhome_repstat = require(ash_homerepfile)
    console.log(` File System EXIST\n Status is : ${ashhome_repstat}`)
    if (ashhome_repstat == 'ON') {
      ash.send(MSG)
      if (message.attachments) {
        message.attachments.forEach(a => {
          ash.send(`${a.url}`)
        })
      }
    } else {
      console.log(" La transmission de messages postés sur le salon de chouchoune est désactivée. Ils ne lui sont pas retransmis.")
    }

  } else console.log(" ash_homerepfile does not exist.");

}

module.exports = homechanrep_ash