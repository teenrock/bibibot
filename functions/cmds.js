function cmds(message, prefix, client, args) {

  // say command
  if (message.content.startsWith(prefix + 'say ')) {
    let answer = args.slice(1).join(" ");
    if (args[1] !== '!say') {
      message.delete(), message.channel.send(answer);
    } else {
      message.delete();
      message.channel.send(':no_entry_sign: Ne nous prend pas pour des ânes je te prie !');
    }
  }

  // purge messages command
  if (message.content.startsWith(prefix + "purge")) {
    if (message.channel.type === "dm") return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `manage-guild` dans ce serveur**").catch(console.error);

    const user = message.mentions.users.first();
    const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2]) 
    if (!amount) return message.reply('**:x: Veuillez spécifier une limite de message**'); 
    if (!amount && !user) return message.reply('**:x: Veuillez spécifier une limite de message**');
    if (!user){
      if(isNaN(message.content.split(' ')[1]) || parseInt(message.content.split(' ')[1]) < 2 || parseInt(message.content.split(' ')[1]) > 100){
        message.channel.send('**:x: Veuillez spécifier une limite de message comprise entre 2 et 100**')
      }
    }
  
    if(message.content.split(' ')[2]){
      if(isNaN(message.content.split(' ')[2]) || parseInt(message.content.split(' ')[2]) < 2 || parseInt(message.content.split(' ')[2]) > 100){
      message.channel.send('**:x: Veuillez spécifier une limite de message comprise entre 2 et 100**')
      }
    }
 
    message.channel.fetchMessages({ limit: amount, })
    .then((messages) => {
      if (user) {
        const filterBy = user ? user.id : Client.user.id;
        messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
      }
      message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
      message.channel.send(":wastebasket: | `" + amount + "` messages supprimés");

    })

  }

}

module.exports = cmds