function teen_cmds(message, prefix, fs, decache, path, args) {

  let command = message.content.split(' ')[0].slice(prefix.length);

  if (((message.author != teen)||(message.author != xzdc)||(message.author != xzdcdev)) && (message.channel.id == "496689982124064789")) {

  if (message.content.startsWith("!aw")) {
  	var teen_homerepfolder = path.resolve(__dirname, ("../users_config"));
    var teen_homerepfile = teen_homerepfolder + "/teen_homerepstat.js"
    message.delete(100), console.log('case 1\n')

  	if (args[1] == undefined) {
  		console.log('case 2\n')
      choice = 'OFF'
  	  if (fs.existsSync(teen_homerepfile)) {
  	  	console.log('case 3\n')
  	  	message.author.send("Les argsuments de la commande **!aw** ne peuvent être que **on** / **off**");
  	  } else if (!fs.existsSync(teen_homerepfile)) {
  	  	console.log('case 4\n')
  	  	choice = 'OFF'
  	  }

  	}

  	if (args[1] === 'on') {
  	  console.log('case 5\n')
      console.log(` Teen Home to DMs Mode: ${args[1]}`)
  	  choice = 'ON'
  	  message.channel.send(`**${new Date()}**\n\nLe retour des message postés sur votre salon principal est à présent:\n\n**[ACTIF]**`);
  	}

    if (args[1] === 'off') {
      console.log('case 6\n')
      console.log(` Teen Home to DMs Mode: ${args[1]}`)
      choice = 'OFF'
      message.channel.send(`**${new Date()}**\n\nLe retour des message postés sur votre salon principal est à présent:\n\n**[INACTIF]**`);
	}

    teenhomerep_statexport = `const teenhome_repstat = '${choice}';\n\nmodule.exports = teenhome_repstat`;

   	if(!fs.existsSync(teen_homerepfile)) {
   	  console.log('case 7\n')
  	  fs.createFileSync(teen_homerepfile)
  	  setTimeout(function() {fs.writeFileSync(teen_homerepfile, teenhomerep_statexport)}, 1 * 500)
  	} else {
  	  console.log('case 8\n')
  	  fs.writeFileSync(teen_homerepfile, teenhomerep_statexport)
  	}

}

}

}

module.exports = teen_cmds