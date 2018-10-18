function onReady(message, client) {

  xzdcdev_id = '446033566649024512';
  xzdc_id = '399094992338944012';
  teen_id = '313498874008305664';
  ash_id = '287973799423377408';
  ashPC_id = '221040142788329483';

  xzdc = client.users.get(`${xzdc_id}`);
  xzdcdev = client.users.get(`${xzdcdev_id}`);
  teen = client.users.get(`${teen_id}`);
  ash = client.users.get(`${ash_id}`);
  ashPC = client.users.get(`${ashPC_id}`);

  spksnd = client.channels.get("494504768748912643");
  bot_cmd = client.channels.get("494504768748912641"); // #homesweethome
  homesweetash = client.channels.get("496689946548240412"); // #chouchoune_home
  homesweetteen = client.channels.get("496689982124064789"); // #titounet_home
  
  console.log(`\n ${client.user.username}@Bot [Started] ${new Date()}`);

}

module.exports = onReady