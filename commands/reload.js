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

exports.run = (client, message, args) => {
  const config = require("../config/config.json");
  if (message.author.id !== config.ownerid) return;
  const fs = require('fs');
  const commandName = args.join(" ");
  if (!commandName) return message.reply("you need to type the name of the command.");
  if (fs.existsSync(`./commands/${commandName}.js`) == true) {         
    delete require.cache[require.resolve(`./${commandName}.js`)];
    message.reply(`The command **${commandName}** has been reloaded`);
    fs.readFile('./log.txt', 'utf8', function(err, data) {  
    if (err) return console.log(err);
    fs.writeFile("./log.txt", `${data}\n [${finalDate}] [Command] ${commandName} was reloaded!`, function(err) {
    if(err) {
    return console.log(err);
    }
    }); 
    });
  } else return message.reply("the command doesn't exist.")
};