var itach = require("../itach.js");

itach.on("error", console.log);
itach.on("debug", console.log);

itach.discover(function(err, result){
    console.log(result);
    itach.close();
});