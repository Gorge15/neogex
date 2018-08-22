const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const config = require("./config/config.json")
const messages = require("./messages/messages.json")
const talkedRecently = new Set();
const prefix = config.prefix;



fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

client.on("message", message => {
  if (message.author.bot) return;
  if (message.channel.type !== "text") return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  if (talkedRecently.has(message.author.id)) {
      message.reply(messages.all.find(x => x.class === "spam").nospammessage).then(m => 
        setTimeout(() => {
          m.delete()
        }, 3000))
} else {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  

  try {
  fs.stat('./commands/' + command + '.js', function(err, stat) {
    if(err == null) {
      let commandFile = require(`./commands/${command}.js`);
      if (commandFile === null) return;
      if (commandFile === undefined) return;
      if (!commandFile) return;
      commandFile.run(client, message, args);
          const date = new Date();
    const day = date.getDate();
    const tempMonth = date.getMonth();
    let month = "";
      if (tempMonth < 10) {
        month = "0" + ((tempMonth * 1) + 1);
      } else {
        month = ((tempMonth * 1) + 1);
      };
    const year = date.getFullYear();
    const finalDate = day + "/" + month + "/" + year
    fs.readFile('./log.txt', 'utf8', function(err, data) {  
          if (err) return console.log(err);
    fs.writeFile("./log.txt", `${data}\n [${finalDate}] [Command] User ${message.author.tag} (ID: ${message.author.id}) executed "${command}" command on "${message.guild.name}" (ID: ${message.guild.id}) guild.`, function(err) {
        if(err) {
            return console.log(err);
        }
    }); 
    });
    } else if(err.code == 'ENOENT') {
       return;
    } else {
        console.log('error: ', err.code);
    }
});

  } catch (err) {
    console.error(err);
  }
  talkedRecently.add(message.author.id);
  setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, 2500);



}
});

client.login(config.token);
