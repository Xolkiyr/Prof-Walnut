"use strict";

var Discord = require("discord.js");
var bot = new Discord.Client();
bot.on('error', console.error);
var mysql = require("mysql"); // We need this for the database.
var dateFormat = require('dateformat');
var fs = require('fs');
var settings = require("./settings.json"); // Grab all the settings.
//var tools = require('./prof_walnut/functions.js');

var i = 0;

//Functions for loading and saving the trainer object.
function load_trainers(){ //Load the trainer list to the trainer object
	var trainers = require("./prof_walnut/trainers.json");
}
function save_trainers(trainers){
	fs.writeFile("./prof_walnut/trainers.json", JSON.stringify(trainer), function (err) { });
}
//Functions for loading and saving the Pokemon Teams object.
function load_teams(){ //Load the Teams list to the teams object
	var teams = require("./prof_walnut/teams.json");
}
function save_teams(teams){
	fs.writeFile("./prof_walnut/teams.json", JSON.stringify(teams), function (err) { });
}
//Functions for loading and saving Server List Object.
function load_servers(){ //Load the server list to the server object
	var servers = require("./prof_walnut/servers.json");
}
function save_servers(servers){
	fs.writeFile("./prof_walnut/servers.json", JSON.stringify(servers), function (err) { });
}

load_trainers();
load_teams();
load_servers();


const helpmsg = 
	"First and foremost, I respond best to fluid commands. Everything I do is contextual.\n" + 
	"(aka, if you need help, with the game you need to ask how to play the game making sure to use my name.)\n" + 
	"Example: [Prof Walnut, how do I play the game?], [Brooke Walnut, help] or just simply `$!help`\n" + 
	"To play the game, you first have to start a `$!newgame` to initiate the Trainer Registration.\n" + 
	"If you get interrupted during the trainer registration proccess, use the `$!continue` command to select your starting Pok\xE9mon.\n\n" + 
	"Once you've registered your trainer ID and chosen your first Pok\xE9mon, you can use the following commands:\n" + 
	"   `$!party`\n" + 
	"		- **(WiP)**Allows you to see your current team of Pok\xE9mon.\n" + 
	"   `$!badge`\n" + 
	"       - **(WiP)**Shows you your trainer badge.\n" + 
	"         If done within a server, it'll also show you what gym badges you've gotten in this server.\n" + 
	"   `$!challenge @mention <gym>`\n" + 
	"       - **(WiP)**This command allows you to challenge another trainer.\n" + 
	"         If the gym tag is used at the end, it will attempt to challenge them for a gym badge.\n" + 
	"         It will give you an error if the user is not a Gym Leader.\n" + 
	"   `$!tallgrass [location]`\n" + 
	"       - **(WiP)**This allows you to attempt to catch a wild Pok\xE9mon.\n" + 
	"          Possible locations: city, forest, field, mountain, cave, abandoned building\n\n" + 
	"Server owners also have these commands:\n" + 
	"   `$!serverinit`\n" + 
	"       - This allows server owner to initialize their server for they own.\n" + 
	"         It will allow for customization of the server environment later on.";
const nature = settings.nature;
const natureList = settings.natureList;
const regions = ["", "Kanto", "Johto", "Hoenn", "Sinnoh", "Unova", "Kalos", "Alola"];
const prefix = "$!";
const cmds = { //Standard Commands
	"serverinit": "serverinit",
	"newgame": "newgame",
	"continue": "continue",
	"party": "party",
	"badge": "badge",
	"challenge": "challenge",
	"tallgrass": "tallgrass",
	"help": "help"
};
const channels = {
	"LeagueLogs": "227842054401556480",
	"TrainerLogs": "227842112358449152",
	"GameLogs": "227842211662790656"
}

var dbconn = mysql.createPool({ // Create a connection to the database.
	connectionLimit : 10,
    host: settings.host, // Database Host (Localhost for example).
    user: settings.user, // Username (root for example).
    password: settings.pass, // Password (do I need an example?).
    database: settings.db // Database (The database table).
});

bot.on("ready", () => { //Updates Walnut to her current Profile Pic
	bot.user.setAvatar(fs.readFileSync('./ProfWalnut-profile.png'));
});

bot.on("message", msg => { //Checks to see if she's recieved any messages
	if(msg.author.bot) return; //Makes sure that she doesn't get triggered by other bots or herself
	var newmsg = msg.content.toLowerCase(); //Converts the message string to lowercase to make command checks easier.
	
	if(msg.author.id == "166002128022667264"){ //Commands only accessible to Prof Aubaris[The Creator]
		if(newmsg.includes("prof") && newmsg.includes("walnut") && bot.user.status == "idle"){ //Wakes Walnut up
			msg.channel.sendMessage("I'm up, I'm up... Whatcha need?");
			bot.user.setStatus('online');
		}
		//Puts Walnut into a hibernation mode So that work can be done with no interuptions.
		if(newmsg.includes("get some") && newmsg.includes("sleep") && bot.user.status != "idle"){
			msg.channel.sendMessage("***yawns*** You're probably right. Night everyone. :wave:");
			bot.user.setStatus('idle');
			var jw2s = 1;
		}
	}
	if(bot.user.status == "idle"){ //Checks if she's "sleeping" and will not pass any further commands.
		for (i = 0; i < cmds.length; i++) { 
			if(newmsg.startsWith(prefix + cmds[i])){
				msg.author.sendMessage(":zzz:\n\nThis is an automated message. It seems like I've fallen asleep. If you need anything, please contact Prof Aubaris.");
			}
		}
		return;
	}
	for (i = 0; i < cmds.length; i++) { 
		if(newmsg.startsWith(prefix + cmds[i])){
			switch(i) {
				case 0: //!serverinit command
					if(msg.channel.type === 'dm'){ //Makes sure its not a DM
						msg.author.sendMessage("You can't be a self-contained Server " + msg.author.username + ".");
					//Checks to make sure the user has the permissions to use
					}else if(!!msg.member.roles.find(r=> r.name === "League Coordinator") || msg.author.id == msg.guild.owner.id){
						if(servers[msg.guild.id]){ //Checks if the server is already initialized
							msg.channel.sendMessage("Your league has already been registered with the International Pok\xE9mon League Administration.");
						}else{ //If not then it does the initialization and posts to the League Logs channel on the IPLA Discord Server
							var d = new Date();
							servers[msg.guild.name] = {
								'name': msg.guild.name,
								'region': 1,
								'owner': msg.guild.owner.id,
								'gyms':{ },
								'leaguechamp': "0"
							};
							save_teams(servers);
							msg.guild.channels.get(channels["LeagueLogs"]).sendMessage(
								dateFormat(d, "mmmm dS, yyyy, HH:MM:ss") + ":\n" + 
								"Server " + msg.guild.name + "(" + msg.guild.id + ") added to the registry under the " + regions[1] + " Region.\n" + 
								"Owner of the server is " + msg.guild.owner.nickname + "."
							);
							msg.channel.sendMessage("Your server has been initialized. Welcome to the game.");
						}
					}else{
						msg.channel.sendMessage("Only League Director or Coordinators can use this command.");
					}
					break;
				case 1:
					
					break;
			}
		}
	}
	if((newmsg.includes("prof") || newmsg.includes("brooke")) && newmsg.includes("walnut")){ //Checks to see if Prof Walnut is being called
		//General help command called via something like:
		//"Prof Walnut, how do I play the game?" or simply "Prof Walnut help"
		if((newmsg.includes("how") && (newmsg.includes("do") || newmsg.includes("would")) && newmsg.includes("play")) || newmsg.includes("help")){
			msg.channel.sendMessage(helpmsg);
		}
	}
	
});

bot.login(settings.proftoken);