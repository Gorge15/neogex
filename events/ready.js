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
    fs.readFile('./log.txt', 'utf8', function(err, data) {  
        	if (err) return console.log(err);
    fs.writeFile("./log.txt", `${data}\n [${finalDate}] Bot started!`, function(err) {
        if(err) {
            return console.log(err);
        }
    }); 
    });

exports.run = (client) => {
  const config = require("../config/config.json");
  const messages = require("../messages/messages.json");

    client.user.setStatus(config.botStatus);
    client.user.setActivity(config.botActivityMessage, {url: config.twithlink, type: config.botActivityType});
    console.log(messages.all.find(x => x.class === "ready").startUp);

}
