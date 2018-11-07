function JoinQuitVoc(oldMember, newMember) {

  let newUserChannel = newMember.voiceChannel
  let oldUserChannel = oldMember.voiceChannel
  var serverName = `>>> ${newMember.guild.name||oldMember.guild.name} <<<`;
  let member = newMember||oldMember;

  if ((newMember == undefined)||(oldMember == undefined)) return;

  // UserJoin VoiceChannel
  if (oldUserChannel == undefined || oldUserChannel == null) {
    var newUserVocMsg = `**${newMember.user.username}** s'est connecté au salon vocal **${newUserChannel.name}**`;
    var vocChanMSG1 = `**\`${new Date()}\`** | ` + newUserVocMsg;

    if (member.id == ash.id) {
      xzdc.send(vocChanMSG1);
    }
    if ((member.id == xzdc.id) || (member.id == xzdcdev.id) || (member.id == teen.id)) {
      ash.send(vocChanMSG1);
    }
    
  }

  // UserLeave VoiceChannel
  /*
  if ((newUserChannel == undefined) || (newUserChannel == null)) {
    var oldUserVocMsg = `**${oldMember.user.username}** a quitté le salon vocal **${oldUserChannel.name}**`;
    var vocChanMSG2 = `**\`${new Date()}\`** | ` + oldUserVocMsg;
    xzdc.send(vocChanMSG2);
  }
  */
}

module.exports = JoinQuitVoc