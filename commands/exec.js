exports.run = (client, message, args) => {
    const config = require("../config/config.json");
    if (message.author.id !== config.ownerid) return;
    var exec = require('child_process').exec,
    child;
    let runCommand = args.join(" ")
    if (!runCommand) return message.reply("you need to type something.")
 child = exec(runCommand,
 function (error, stdout, stderr) {
    if (error === null) {
    message.react("✅")
     message.channel.send('```\n ' + stdout + '\n```')
    } else {
        message.react("❌")
        message.channel.send('```\n ' + error + "\n```").then(x =>
        setTimeout(() => {
            x.delete()
        }, 20000))
     }
 });
}
