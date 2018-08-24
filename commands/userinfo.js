const Discord = require("discord.js");
const messages = require("../messages/messages.json");
const msg = messages.all.find(x => x.class === "userinfo")


exports.run = (client, message, args) => {
    const member = message.mentions.members.first();

    if (member) {

         const userTag = member.user.tag;
         const userID = member.user.id;
         let userGame = ""
         if (!member.user.presence.game) {
             userGame = msg.noGame
         } else {
             userGame = member.user.presence.game.name
         }
         let nick = ""
         if (!message.guild.members.get(member.user.id).nickname) {
             nick = msg.noNick
         } else {
             nick = message.guild.members.get(member.user.id).nickname
         }
         const userCreatedAt = dateFormat(member.user.createdAt);
         const userJoinedAt = dateFormat(message.guild.members.get(member.user.id).joinedAt);
         const userStatus = member.user.presence.status;
         const userAvatar = member.user.avatarURL
         const userRoles = message.guild.members.get(member.user.id).roles.map(role => role.name).join(", ")
         const embed = new Discord.RichEmbed()
         .setColor(msg.hexColor)
         .setThumbnail(userAvatar)
         .setAuthor(msg.Author, client.user.avatarURL)
         .setFooter(userCreatedAt)
         .setDescription(msg.senddata.split("{tag}").join(userTag).split("{ID}").join(userID).split("{nick}").join(nick).split("{status}").join(userStatus).split("{game}").join(userGame).split("{joined}").join(userJoinedAt))
         .addField("Roles", userRoles)
          message.channel.send(embed)
    } else {
        
        const userTag = message.author.tag;
        const userID = message.author.id;
        let userGame = ""
        if (!message.author.presence.game) {
            userGame = msg.noGame
        } else {
            userGame = message.author.presence.game.name
        }
        let nick = ""
        if (!message.guild.members.get(message.author.id).nickname) {
            nick = msg.noNick
        } else {
            nick = message.guild.members.get(message.author.id).nickname
        }
        const userCreatedAt = dateFormat(message.author.createdAt);
        const userJoinedAt = dateFormat(message.guild.members.get(message.author.id).joinedAt);
        const userStatus = message.author.presence.status;
        const userAvatar = message.author.avatarURL
        const userRoles = message.guild.members.get(message.author.id).roles.map(role => role.name).join(", ")
        const embed = new Discord.RichEmbed()
        .setColor(msg.hexColor)
        .setThumbnail(userAvatar)
        .setAuthor(msg.Author, client.user.avatarURL)
        .setFooter(userCreatedAt)
        .setDescription(msg.senddata.split("{tag}").join(userTag).split("{ID}").join(userID).split("{nick}").join(nick).split("{status}").join(userStatus).split("{game}").join(userGame).split("{joined}").join(userJoinedAt))
        .addField("Roles", userRoles)
         message.channel.send(embed)
    };

    function dateFormat(d) {
        const date = new Date(d);
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
        let final = day + "/" + month + "/" + year + " at " + hours + ":" + minutes
        return final
    }
}