const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function () {
  console.log("Je suis connecté !");
  bot.user.setGame("Radsow : !help")
});

bot.login("NDkxMzExMTk5NjIzOTcwODE3.DoKykw.JShon4UG3HKJSPWuLNi997ck_Fg");
