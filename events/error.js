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



    exports.run = (client, error) => {
            fs.readFile('./log.txt', 'utf8', function(err, data) {  
            if (err) return console.log(err);
    fs.writeFile("./log.txt", `${data}\n [${finalDate}][Error] ${error}`, function(err) {
        if(err) {
            return console.log(err);
        }
    }); 
    });
    };