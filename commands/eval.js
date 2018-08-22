   exports.run = (client, message, args) => {
     const config = require("../config/config.json")
    if(message.author.id === config.ownerid) {
      function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else return text;
}
const code = args.join(" ")
if (!code) return message.reply("you need to type something.")

    message.channel.send("**Please wait.**")
    .then(m => {
      const com = eval(code)


      setTimeout(() => {m.edit("**Done!\nOutput: **```js\n" + com + "```")}, 1000)

    }).catch(err => {
      message.channel.send("```\n" + err + "\n```")
    })
    }
  }
