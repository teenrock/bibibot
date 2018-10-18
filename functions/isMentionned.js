function isMentionned(message, member, decache, path, MentionMSG) {
  
  var ash_homerepfile = path.resolve(__dirname, ("../users_config/ash_homerepstat.js"));
  var teen_homerepfile = path.resolve(__dirname, ("../users_config/teen_homerepstat.js"));
  decache(ash_homerepfile)
  decache(teen_homerepfile)
  ashhome_repstat = require(ash_homerepfile)
  teenhome_repstat = require(teen_homerepfile)

  if (message.author.bot) return;

  	if (message.guild.id != "494504768299859990") { // IS NOT Chouchoune & Titnouet server
      
      if ((member.id == xzdc_id)||(member.id == xzdcdev_id)||(member.id == teen_id)) { // xzdc user is mentionned
        xzdcdev.send(MentionMSG)
        xzdc.send(MentionMSG)
        console.log(MentionMSG)
      }

    }

  
  if (message.guild.id == "494504768299859990") { // Chouchoune & Titnouet specifics server restrictions

  	if ((member.id == ash_id) || (member.id == ashPC_id)) {
      if (ashhome_repstat == 'OFF') member.user.send(MentionMSG);
      if ((ashhome_repstat == 'ON') && (message.channel == homesweetash)) member.user.send(MentionMSG);
    }

  	if ((member.id == xzdc_id)||(member.id == xzdcdev_id)||(member.id == teen_id)) {
      if (teenhome_repstat == 'OFF') xzdc.send(MentionMSG);
      if ((teenhome_repstat == 'ON') && (message.channel != homesweetteen)) xzdc.send(MentionMSG);

  	}

  }

}

module.exports = isMentionned