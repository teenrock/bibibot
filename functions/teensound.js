function teensound(message, prefix, client, args) {

  var playlist_url = "http://teenanon.free.fr/teenrock/discordbot/music_playlist/";
  const play = "pl";
  const bot_hmsg1 = 'vous devez d\'abord rejoindre un salon vocal.';
  const bot_hmsg2 = 'vous devez d\'abord rejoindre le salon vocal auquel le bot est connecté.';
  foldersList = ["classique", "divers", "dub", "electro", "mix", "rap", "reggae", "rock", "furax", "furax2"];

  if ((message.author.id == client.id) || (message.channel != bot_cmd) || (message.channel != homesweetash) || (message.channel != homesweetteen) || (message.author.bot)) return;

    var audiochan = message.member.voiceChannel;

    if (audiochan) {

      if (message.content.startsWith(prefix + play + ' ' + args[1] + ' ' + args[2])) {

      if (foldersList.some(folder => ((args[1]) == (folder)))) {

          audiochan.join()
            .then(connection => {
            message.reply('Let\'s play ! - Catégorie ' + args[1] + ' - Track ' + args[2]);
            connection.playArbitraryInput(playlist_url + '/' + args[1] + '/' + args[2] + '.mp3');
            })
          .catch(err => console.log(err));

        } else {
          message.channel.send(`**La liste des dossiers disponibles est :**`)
          message.channel.send(foldersList)
          console.log(args[1])
        }

      }

      if (message.content === (prefix + 'join')) {
        audiochan.join();
      }

      if (message.content == (prefix + 'join' + ' ' + args[1])) {
            if (args[1] === 'here') {
            audiochan.join()};
            if (args[1] === 'spksnd') {
            spksnd.join();
          }
        }

    } else {
      message.reply(bot_hmsg1)
    }

    if (message.content === (prefix + 'leave')) {
          var audiochan = message.member.voiceChannel;
          if (audiochan) {
            audiochan.leave();
          } else {
            message.reply(bot_hmsg2)
          }
        }

        if (message.content.startsWith(prefix + 'leave' + ' ' + args[1])) {
          var audiochan = message.member.voiceChannel;
            let args = message.content.split(' ');
            if (args[1] === 'spksnd') {
            spksnd.leave();
          }
        }

        if (message.content === (prefix + 'stop')) {
          var audiochan = message.member.voiceChannel;
          if (audiochan) {
            audiochan.join()
                .then(connection => { // Connection est une instance de audiochan
                message.reply('music stream stopped.');
                connection.playStream('0');
                })
              .catch(err => console.log(err));
          } else {
            message.reply(bot_hmsg1)
          }
        }

}

module.exports = teensound