**NeoGex Bot**

This project is `open source` discord bot written in js using `Discord.js` library which can be customized however you want.
**Requierements**
At least `node v8.10.0`
**Instalation & Running the bot**
`npm install` or `npm i`

First of all, you have to edit your `config.json` file with your data. It should look like this:
```json
{
    "token":"your-bot-token",
    "ownerid":"123123",
    "prefix":"?!",
    "botStatus":"dnd",
    "botActivityType":"STREAMING",
    "botActivityMessage":"whatever you want to show on bot playing",
    "twithlink":"https://www.twitch.tv/sumname"
}
```
When you finished editing the file, you can run your bot with `node index.js` or `npm start`.

**Available functions and commands**
- Logs system
- Editable messages
- Reload command
- Exec command
- Eval command
- Ban command
- Kick command
- Serverinfo command
- Commands cooldown
