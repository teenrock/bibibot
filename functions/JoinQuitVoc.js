function JoinQuitVoc(oldMember, newMember) {

  if ((newMember == undefined)||(oldMember == undefined)) return;

  let newUserChannel = newMember.voiceChannel
  let oldUserChannel = oldMember.voiceChannel
  let member = newMember||oldMember
  var serverName = `>>> ${newMember.guild.name||oldMember.guild.name} <<<`
  var loveRole = newMember.guild.roles.get("534345269614215170")||oldMember.guild.roles.get("534345269614215170")
  var ashMember = member.guild.members.get(ash_id)
  var ashPCMember = member.guild.members.get(ashPC_id)
  var xzdcMember = member.guild.members.get(xzdc_id)
  var xzdcdevMember = member.guild.members.get(xzdcdev_id)
  var teenMember = member.guild.members.get(teen_id)

  // Someone Join VoiceChannel
  if ((oldUserChannel == undefined) && (newUserChannel != undefined)) {

    var newUserVocMsg = `**${newMember.user.username}** s'est connecté au salon vocal **${newUserChannel.name}**`
    var vocChanMSG1 = `**\`${new Date()}\`** | ` + newUserVocMsg

    if (ashPC == undefined) {
      ashPC_id = null
    }

    // Chouchoune Join Vocal
    if ((member.id == ash.id) || (member.id == ashPC_id)) {

      if ((xzdcMember.voiceChannel == undefined) || (xzdcdevMember.voiceChannel == undefined) || (teenMember.voiceChannel == undefined)) {
        
        member.user.send(`Une alerte vient d'être envoyée à **Titounet** pour l'informer de ton arrivée sur **${newMember.voiceChannel.name}**`)
        xzdc.send(vocChanMSG1).catch(err => {
        if (err) return member.user.send("**Titounet** n'a pas pu être prévenu en raison d'une erreur...\n(il a fait l'con !)")
       })

      }
      
      if ((xzdcMember.voiceChannel != undefined) || (xzdcdevMember.voiceChannel != undefined) || (teenMember.voiceChannel != undefined)) {
        member.addRole(loveRole.id)
        if (xzdcMember.voiceChannel != undefined) return xzdcMember.addRole(loveRole.id)
        if (xzdcdevMember.voiceChannel != undefined) return xzdcdevMember.addRole(loveRole.id)
        if (teenMember.voiceChannel != undefined) return teenMember.addRole(loveRole.id)
      }

    }

    // Titounet Join Vocal
    if ((member.id == xzdc.id) || (member.id == xzdcdev.id) || (member.id == teen.id)) {

      if ((ashMember.voiceChannel == undefined) /*|| (ashPCMember.voiceChannel == undefined)*/) {

        member.user.send(`Une alerte vient d'être envoyée à **Chouchoune** pour l'informer de ton arrivée sur **${newMember.voiceChannel.name}**`)
        ash.send(vocChanMSG1).catch(err => {
          if (err) return member.user.send("**Chouchoune** n'a pas pu être prévenue en raison d'une erreur... (Pauvre con !)")
        })

      }

      if (ashMember.voiceChannel != undefined) {
        member.addRole(loveRole.id)
        if (ashMember.voiceChannel != undefined) return ashMember.addRole(loveRole.id)
        if (ashPCMember.voiceChannel != undefined) return ashPCMember.addRole(loveRole.id)
      }
      
    }
    
  }

  // UserLeave VoiceChannel
  if ((newUserChannel == undefined) || (newUserChannel == null)) {
    member.removeRole(loveRole.id) && console.log(" Le role " + loveRole.name + " a été retiré à " + member.user.username)
    loverList.forEach(user => {
      if ((user == null) || (user == undefined)) return
      var loveUser = member.guild.members.get(user.id)
      if (((loveUser.id != member.id) && (loveUser.id != undefined)) && loveUser.roles.has(loveRole.id)) loveUser.removeRole(loveRole.id) && console.log(" Le role " + loveRole.name + " a été retiré à " + user.username)
    })
  }
  
}

module.exports = JoinQuitVoc