function homechanrep_teen(message, prefix, client, fs, decache, path, args) {

  if ((message.author == teen)||(message.author == xzdc)) return;

  var MSG = ` **${new Date()}**\n\n **Msg :** ${message}\n\n **${message.author.username}** sur <#${message.channel.id}>`;
  var teen_homerepfile = path.resolve(__dirname, ("../users_config/teen_homerepstat.js"));
  console.log(teen_homerepfile)
   	if (fs.existsSync(teen_homerepfile)) {
      decache(teen_homerepfile)
      teenhome_repstat = require(teen_homerepfile)
      console.log(` File System EXIST\n Status is : ${teenhome_repstat}`)
      if (teenhome_repstat == 'ON') {
        teen.send(MSG)
        xzdc.send(MSG)
        xzdcdev.send(MSG)
      } else {
        console.log(" La transmission de messages postés sur le salon de titounet est désactivée. Ils ne lui sont pas retransmis")
      }
   	} else console.log(" teen_homerepfile does not exist.");

}

module.exports = homechanrep_teen