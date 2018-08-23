	exports.run = (client, message, args) => {
	const Discord = require("discord.js")
	const messages = require("../messages/messages.json");
	const msg = messages.all.find(x => x.class === "serverinfo")
	const ids = args.join(" ");
	if (!ids) {
		const membersSize = message.guild.memberCount;
		const channelsSize = message.guild.channels.size;
		const voiceChannelsSize = message.guild.channels.filter(c => c.type === "voice").size;
		const textChannelsSize = message.guild.channels.filter(c => c.type === "text").size;
		const categoryesSize = message.guild.channels.filter(c => c.type === "category").size;
		const rolesSize = message.guild.roles.filter(role => role.name !== "@everyone").size;
		const serverName = message.guild.name;
		const serverIcon = message.guild.iconURL;
		const bots = message.guild.members.filter(member => member.user.bot).size;
		const humans = ((membersSize * 1) - (bots * 1));
		const date = new Date(message.guild.createdAt);
		const day = date.getDate();
	    const tempMonth = date.getMonth();	
	    const tempHours = date.getHours();
	    const tempMinutes = date.getMinutes();
	    const year = date.getFullYear();
	    
	    let month = ""
	    	if (tempMonth < 10) {
	    		month = "0" + ((tempMonth * 1) + 1);
	    	} else {
	    		month = ((tempMonth * 1) + 1);
	    	};

	    let hours = ""
	    	if (tempHours < 10) {
	    		hours = "0" + (tempHours * 1)
	    	} else {
	    		hours = (tempHours * 1)
	    	}

	    let minutes = ""
	    	if (tempMinutes < 10) {
	    		minutes = "0" + (tempMinutes * 1)
	    	} else {
	    		minutes = (tempMinutes * 1)
	    	}
	    
	    const guildCreatedAt = day + "/" + month + "/" + year + " at " + hours + ":" + minutes
	    const guildOwner = message.guild.owner.user.tag
	    const guildID = message.guild.id
	    const guildOwnerID = message.guild.owner.user.id
	    const embed = new Discord.RichEmbed()
	    .setColor(msg.hexColor)
	    .setAuthor(msg.Author, serverIcon)
	    .setThumbnail(serverIcon)
	    .setDescription(msg.senddata.split("{name}").join(serverName).split("{owner}").join(guildOwner).split("{ID}").join(guildID).split("{ownerid}").join(guildOwnerID).split("{channelSize}").join(channelsSize).split("{textSize}").join(textChannelsSize).split("{voiceSize}").join(voiceChannelsSize).split("{categoryesSize}").join(categoryesSize).split("{members}").join(membersSize).split("{humans").join(humans).split("{bots}").join(bots).split("{roles}").join(rolesSize))
		.setFooter("Created at: " + guildCreatedAt, message.guild.owner.user.avatarURL)
		message.channel.send(embed);

	} else {
	if (isNaN(ids)) return message.reply(msg.nonumber.split("{nonumber}").join(ids));
	if (!client.guilds.get(ids)) return message.reply(msg.invalidguild);
	const guild = client.guilds.get(ids);
		const membersSize = guild.memberCount;
		const channelsSize = guild.channels.size;
		const voiceChannelsSize = guild.channels.filter(c => c.type === "voice").size;
		const textChannelsSize = guild.channels.filter(c => c.type === "text").size;
		const categoryesSize = guild.channels.filter(c => c.type === "category").size;
		const rolesSize = guild.roles.filter(role => role.name !== "@everyone").size;
		const serverName = guild.name;
		const serverIcon = guild.iconURL;
		const bots = guild.members.filter(member => member.user.bot).size;
		const humans = ((membersSize * 1) - (bots * 1));
		const date = new Date(guild.createdAt);
		const day = date.getDate();
	    const tempMonth = date.getMonth();	
	    const tempHours = date.getHours();
	    const tempMinutes = date.getMinutes();
	    const year = date.getFullYear();
	    
	    let month = ""
	    	if (tempMonth < 10) {
	    		month = "0" + ((tempMonth * 1) + 1);
	    	} else {
	    		month = ((tempMonth * 1) + 1);
	    	};

	    let hours = ""
	    	if (tempHours < 10) {
	    		hours = "0" + (tempHours * 1)
	    	} else {
	    		hours = (tempHours * 1)
	    	}

	    let minutes = ""
	    	if (tempMinutes < 10) {
	    		minutes = "0" + (tempMinutes * 1)
	    	} else {
	    		minutes = (tempMinutes * 1)
	    	}
	    
	    const guildCreatedAt = day + "/" + month + "/" + year + " at " + hours + ":" + minutes
	    const guildOwner = guild.owner.user.tag
	    const guildID = guild.id
	    const guildOwnerID = guild.owner.user.id
	    const embed = new Discord.RichEmbed()
	    .setColor(msg.hexColor)
	    .setAuthor(msg.Author, serverIcon)
	    .setThumbnail(serverIcon)
	    .setDescription(msg.senddata.split("{name}").join(serverName).split("{owner}").join(guildOwner).split("{ID}").join(guildID).split("{ownerid}").join(guildOwnerID).split("{channelSize}").join(channelsSize).split("{textSize}").join(textChannelsSize).split("{voiceSize}").join(voiceChannelsSize).split("{categoryesSize}").join(categoryesSize).split("{members}").join(membersSize).split("{humans").join(humans).split("{bots}").join(bots).split("{roles}").join(rolesSize))
		.setFooter("Created at: " + guildCreatedAt, guild.owner.user.avatarURL)
		message.channel.send(embed);
	}
	};
