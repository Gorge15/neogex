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
    const fs = require("fs");


exports.run = (client, message, args) => {
	const messages = require("../messages/messages.json");
	if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply(messages.all.find(x => x.class === "kick").noacc);
	const member = message.mentions.members.first();
	if (!member) return message.reply(messages.all.find(x => x.class === "kick").nomention);
	if (member.id === message.author.id) return message.reply(messages.all.find(x => x.class === "kick").kickyourself);
	if (!member.kickable) return message.reply(messages.all.find(x => x.class === "kick").nokick);
	if (member.hasPermission("KICK_MEMBERS")) return message.reply(messages.all.find(x => x.class === "kick").nokick2);
	const reason = args.slice(1).join(" ");
	if (!reason) {
		member.kick().then(() => {
			message.channel.send(messages.all.find(x => x.class === "kick").messagewithoutreason.split("{member}").join(member.user.tag).split("{author}").join(message.author.tag));
			fs.readFile('./log.txt', 'utf8', function(err, data) {  
            if (err) return console.log(err);
    		fs.writeFile("./log.txt", `${data}\n [${finalDate}][Kick] ${member.user.tag} (ID: ${member.id}) was kicked on ${message.guild.name} (ID: ${message.guild.id}) by ${message.author.tag} (ID: ${message.author.id}) without reason.`, function(err) {
        	if(err) {
            return console.log(err);
        }
    }); 
    });
		}).catch(error => {
			console.log(error);
			fs.readFile('./log.txt', 'utf8', function(err, data) {  
            if (err) return console.log(err);
    		fs.writeFile("./log.txt", `${data}\n [${finalDate}][Error] ${error}`, function(err) {
        	if(err) {
            return console.log(err);
        }
    }); 
    });
		});
	} else {
			member.kick().then(() => {
			message.channel.send(messages.all.find(x => x.class === "kick").messagekick.split("{member}").join(member.user.tag).split("{author}").join(message.author.tag).split("{reason}").join(reason))
			fs.readFile('./log.txt', 'utf8', function(err, data) {  
            if (err) return console.log(err);
    		fs.writeFile("./log.txt", `${data}\n [${finalDate}][Kick] ${member.user.tag} (ID: ${member.id}) was kicked on ${message.guild.name} (ID: ${message.guild.id}) by ${message.author.tag} (ID: ${message.author.id}) for ${reason}.`, function(err) {
        	if(err) {
            return console.log(err);
        }
    }); 
    });
		}).catch(error => {
			console.log(error);
			fs.readFile('./log.txt', 'utf8', function(err, data) {  
            if (err) return console.log(err);
    		fs.writeFile("./log.txt", `${data}\n [${finalDate}][Error] ${error}`, function(err) {
        	if(err) {
            return console.log(err);
        }
    }); 
    });
	});
	}
};
