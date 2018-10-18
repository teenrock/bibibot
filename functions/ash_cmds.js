function ash_cmds(message, prefix, fs, decache, path, args) {

  let command = message.content.split(' ')[0].slice(prefix.length);

  if ((message.author == ash) && (message.channel.id == "496689946548240412")) {

  if (message.content.startsWith("!aw")) {
  	var ash_homerepfolder = path.resolve(__dirname, ("../users_config"));
    var ash_homerepfile = ash_homerepfolder + "/ash_homerepstat.js"
    message.delete(100), console.log('case 1\n')

  	if (args[1] == undefined) {
  		console.log('case 2\n')
      choice = 'OFF'
  	  if (fs.existsSync(ash_homerepfile)) {
  	  	console.log('case 3\n')
  	  	message.author.send("Les arguments de la commande **!aw** ne peuvent être que **on** / **off**");
  	  } else if (!fs.existsSync(ash_homerepfile)) {
  	  	console.log('case 4\n')
  	  	choice = 'OFF'
  	  }

  	}

  	if (args[1] === 'on') {
  	  console.log('case 5\n')
      console.log(` Ashley Home to DMs Mode: ${args[1]}`)
  	  choice = 'ON'
      message.channel.send(`**${new Date()}**\n\nLe retour des message postés sur votre salon principal est à présent:\n\n**[ACTIF]**`);
  	}

    if (args[1] === 'off') {
      console.log('case 6\n')
      console.log(` Ashley Home to DMs Mode: ${args[1]}`)
      choice = 'OFF'
      message.channel.send(`**${new Date()}**\n\nLe retour des message postés sur votre salon principal est à présent:\n\n**[INACTIF]**`);
	}

    ashhomerep_statexport = `const ashhome_repstat = '${choice}';\n\nmodule.exports = ashhome_repstat`;

   	if(!fs.existsSync(ash_homerepfile)) {
   	  console.log('case 7\n')
  	  fs.createFileSync(ash_homerepfile)
  	  setTimeout(function() {fs.writeFileSync(ash_homerepfile, ashhomerep_statexport)}, 1 * 500)
  	} else {
  	  console.log('case 8\n')
  	  fs.writeFileSync(ash_homerepfile, ashhomerep_statexport)
  	}

}

}

}

module.exports = ash_cmds