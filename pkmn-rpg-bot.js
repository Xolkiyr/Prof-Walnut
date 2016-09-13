"use strict";

var Discord = require("discord.js");
var bot = new Discord.Client();
bot.on('error', console.error);
var mysql = require("mysql"); // We need this for the database.
var dateFormat = require('dateformat');
var fs = require('fs');
var settings = require("./settings.json"); // Grab all the settings.

var dmg = 0; var R = 0; var BasePower = 0; var Atk = 0; var Def = 0; var Mod1 = 0;  var Mod3 = 0; var HP = 0; var Stat = 0;
var Nat = 0; var stats = {HP:0,ATK:0,DEF:0,SATK:0,SDEF:0,SPD:0}; var IV = {HP:0,ATK:0,DEF:0,SATK:0,SDEF:0,SPD:0};
var ngprog = {0:0}; var msgchk = {0:0}; var gender = {0:0}; var spkmn = {0:0}; var sname = {0:""}; var party = {0:""}; var i = 0;
var regions = ["", "Kanto", "Johto", "Hoenn", "Sinnoh", "Unova", "Kalos", "Alola"];

//Remove when Classes are done
//Nature Alterations
const nature = {
	Adamant: [1.1,1,0.9,1,1], 	Bashful: [1,1,1,1,1], 		Bold: [1,1.1,1,1,0.9], 		Brave: [1.1,1,1,1,0.9], 
	Calm: [0.9,1,1,1,1], 		Careful: [1,1,0.9,1.1,1], 	Docile: [1,1,1,1,1], 		Gentle: [1,0.9,1,1.1,1], 
	Hardy: [1,1,1,1,1], 		Hasty: [1,0.9,1,1,1.1], 	Impish: [1,1.1,0.9,1,1], 	Jolly: [1,1,0.9,1,1.1], 
	Lax: [1,1.1,1,0.9,1], 		Lonely: [1.1,0.9,1,1,1], 	Mild: [1,0.9,1.1,1,1], 		Modest: [0.9,1,1.1,1,1], 
	Naive: [1,1,1,0.9,1.1], 	Naughty: [1.1,1,1,0.9,1], 	Quiet: [1,1,1.1,1,0.9], 	Quirky: [1,1,1,1,1], 
	Rash: [1,1,1.1,0.9,1], 		Relaxed: [1,1.1,1,1,0.9], 	Sassy: [1,1,1,1.1,0.9], 	Serious: [1,1,1,1,1], 
	Timid: [0.9,1,1,1,1.1]
};
//Available Natures
const natureList = [
	"Adamant", 	"Bashful", 	"Bold", 	"Brave", 	"Calm", 	"Careful", 	"Docile", 
	"Gentle", 	"Hardy", 	"Hasty", 	"Impish", 	"Jolly", 	"Lax", 		"Lonely", 
	"Mild", 	"Modest", 	"Naive", 	"Naughty", 	"Quiet", 	"Quirky", 	"Rash", 
	"Relaxed", 	"Sassy", 	"Serious", 	"Timid"
	];
//Remove when Classes are done

var dbconn = mysql.createPool({ // Create a connection to the database.
	connectionLimit : 10,
    host: settings.host, // Database Host (Localhost for example).
    user: settings.user, // Username (root for example).
    password: settings.pass, // Password (do I need an example?).
    database: settings.db // Database (The database table).
});

function typemsg(msg, string){
	msg.sendMessage(string);
}
function genPKMN(msg, dex, lv, callback){
	if(lv >0 && lv <= 100 && !dex.NaN && !lv.NaN){
		dbconn.query('SELECT * FROM basestats WHERE pid = ? ',dex, function(err, row) {
            if (err) {
                console.log(err); 
            } else if (row.length) {
				var bs = row[0];
				var NatFull = natureList[Math.floor(Math.random() * 24)];
				Nat = nature[NatFull];
				IV.HP = Math.floor((Math.random() * 31)); stats.HP = HPcalc(bs['hp'], IV.HP, 1, lv);
				IV.ATK = Math.floor((Math.random() * 31)); stats.ATK = Statcalc(bs['atk'], IV.ATK, 1, lv, Nat[0]);
				IV.DEF = Math.floor((Math.random() * 31)); stats.DEF = Statcalc(bs['def'], IV.DEF, 1, lv, Nat[1]);
				IV.SATK = Math.floor((Math.random() * 31)); stats.SATK = Statcalc(bs['satk'], IV.SATK, 1, lv, Nat[2]);
				IV.SDEF = Math.floor((Math.random() * 31)); stats.SDEF = Statcalc(bs['sdef'], IV.SDEF, 1, lv, Nat[3]);
				IV.SPD = Math.floor((Math.random() * 31)); stats.SPD = Statcalc(bs['spd'], IV.SPD, 1, lv, Nat[4]);
				var exp = expCalc(bs['gt'], lv);
				var pkmn = { pid: dex,
					name: bs['name'], lv: lv, nature: NatFull,
					stathp: stats.HP, ivhp: IV.HP,
					statatk: stats.ATK, ivatk: IV.ATK,
					statdef: stats.DEF, ivdef: IV.DEF,
					statsatk: stats.SATK, ivsatk: IV.SATK,
					statsdef: stats.SDEF, ivsdef: IV.SDEF,
					statspd: stats.SPD, ivspd: IV.SPD, 
					type1: bs['type1'], type2: bs['type2'], 
					cexp: exp, gt: bs['gt']
				};
				console.log("Passed: " + pkmn);
				callback(pkmn);
            } else { 
				msg.channel.sendMessage("That pokemon does not exist.");
			}
		});
	}else{
		msg.channel.sendMessage("Invalid level.");
	}
}

function dmgcalc(Lv, BP, Atk, Def, Mod1, CH, Mod2=1, STAB, T1, T2, Mod3){
	R = 100-Math.floor((Math.random() * 15) + 1);
	dmg = Math.floor(Math.floor((Math.floor(Math.floor(Math.floor(Math.floor(Math.floor(Lv*2/5) + 2)*BP*Atk/50)/Def)*Mod1) + 2)*CH*Mod2*R/100)*STAB*T1*T2*Mod3);
}
function basepower(HH=1, BP, IT=1, CHG=1, MS=1, WS=1, UA=1, FA=1){
	BasePower = Math.floor(Math.floor(Math.floor(Math.floor(Math.floor(Math.floor(Math.floor(HH*BP)*IT)*CHG)*MS)*WS)*UA)*FA);
}
function atkcalc(Stat, SM, AM=1, IM=1){
	Atk = Stat*SM*AM*IM;
}
function defcalc(Stat, SM, Mod, SX){
	Def = Stat*SM*Mod*SX;
}
function Mod1calc(BRN=1, RL=1, TVT=1, SR=1, FF=1){
	Mod1 = BRN*RL*TVT*SR*FF;
}
function Mod2calc(SRF, EB, TL, TRB){
	Mod3 = SRF*EB*TL*TRB;
}
function HPcalc(BaseStat, IV, EV, Level){
	return Math.floor((2*BaseStat+IV+(EV/4))*Level/100+Level+10);
}
function Statcalc(BaseStat, IV, EV, Level, Nature){
	return Math.floor(((2*BaseStat+IV+(EV/4))*Level/100+5)*Nature);
}
function expCalc(gt, lv){
	if(gt == "f"){ return 0.8*Math.pow(lv,3); }
	if(gt == "mf"){ return Math.pow(lv,3); }
	if(gt == "ms"){ return (1.2*Math.pow(lv,3)) - (15 * Math.pow(lv,2))+(100 * lv) - 140; }
	if(gt == "s"){ return 1.25*Math.pow(lv,3); }
}

bot.on("ready", () => {
	bot.user.setAvatar(fs.readFileSync('./ProfWalnut-profile.png'));
});

bot.on("message", msg => {
	if(msg.author.bot) return;
	var jw2s = 0;
	var newmsg = msg.content.toLowerCase();
	if(msg.author.id == "166002128022667264"){ //Commands for Prof Aubaris !!ONLY!!
		if(newmsg.startsWith("!update")){
			
		}
		if(newmsg.includes("introduce yourself") && newmsg.includes("prof") && newmsg.includes("walnut")){
			msg.channel.sendMessage("Of course Prof Aubaris. My name is Professor Brooke Walnut. I'm in charge of the pokemon game that Prof Aubaris is working on. I also manage the active server list and the pokemon of every single trainer in the game.");
			dbconn.query('SELECT * FROM users', function(err, row) {
					if (err) {
						console.log(err); // Throws an error
					} else {
						msg.channel.sendMessage("There are currently " + row.length + " active trainers in the game right now.");
					}
				});
		}
		if(newmsg.includes("prof") && newmsg.includes("walnut") && newmsg.includes("get some") && newmsg.includes("sleep") && bot.user.status != "idle"){
			msg.channel.sendMessage("***yawns*** You're probably right. Night everyone. :wave:");
			bot.user.setStatus('idle');
			var jw2s = 1;
		}
		if(newmsg.includes("prof") && newmsg.includes("walnut") && bot.user.status == "idle" && jw2s == 0){
			msg.channel.sendMessage("I'm up, I'm up... Whatcha need?");
			bot.user.setStatus('online');
		}
	}
	if(bot.user.status == "idle") return;
	if(msg.author.id == "97522048506556416"){
		if((newmsg.includes("😈") && newmsg.includes("🍆") && newmsg.includes("👌")) || newmsg.includes("😘")){
			msg.channel.sendMessage("***backs away slowly*** :fearful:");
		}
		if(newmsg.includes("bby")){
			msg.channel.sendMessage("Don't make me get out my pepper spray.");
		}
	}
	if (newmsg.startsWith("!ridebike")){
		if(msg == msg.author){
			usr.sendMessage( "Enjoy your bike ride.");
		}else{
			msg.channel.sendMessage("There is a time and place for everything.");
		}
	}
	if (newmsg.startsWith("!serverinit")){
		
		dbconn.query('SELECT * FROM server WHERE sid = ? ', msg.guild.id, function(err, row) { // Confirms the server isn't in the list.
            if (err) {
                console.log(err); // Throws an error
            } else if (row.length) { // Throws this to the server telling them they're already initialized.
                msg.channel.sendMessage("Your server has already been initialized.");
            } else { // Adds them to the database.
				var post  = {sid: msg.guild.id, name: msg.guild.name, oid: msg.guild.owner.id};
                dbconn.query('INSERT INTO server SET ? ', post, function(err, row) {
					if (err) {
						console.log(err); // Throws an error
					} else {
						msg.channel.sendMessage("Your server has been initialized.");
						var d = new Date();
						bot.channels.get("212249145568788480").sendMessage( 
							dateFormat(d, "mmmm dS, yyyy, HH:MM:ss") + ":\n" + 
							"Server " + msg.guild.name + "(" + msg.guild.id + ") added to the registry under the " + regions[1] + " Region.\n" + 
							"Owner of the server is " + msg.guild.owner.username);
					}
				});
			}
		});
	}
	if (newmsg.startsWith("!newgame")){	
		ngprog[msg.author.id] = 1;
		msgchk[msg.author.id] = 1;
		dbconn.query('SELECT * FROM tpkmn WHERE tid = ? ', msg.author.id, function(err, row) { // Confirms the user isn't registered.
			if (err) {
				console.log(err); // Throws an error
			} else if (row.length) {
				typemsg(msg.author, 
					"Now now, no need to get greedy there. Leave some of the pokemon for other new trainers.\n\n" + 
					"If you really want to start over, please contact Kael Aubaris."
				);
				ngprog[msg.author.id] = 0;
				msgchk[msg.author.id] = 0;
			}else{
				dbconn.query('SELECT * FROM users WHERE uid = ? ', msg.author.id, function(err, row) { // Confirms the user isn't registered.
					if (err) {
						console.log(err); // Throws an error
					} else if (row.length) { // Throws this to the user telling them they're already registered.
						typemsg(msg.author, "It seems you already have an account. If you haven't chosen your pokemon yet, then please use the !continue command.");
						ngprog[msg.author.id] = 0;
						msgchk[msg.author.id] = 0;
					} else { 
						typemsg(msg.author, "Why hello there " + msg.author.username + ". What brings you to my lab?");
					}
				});
			}
		});
	}
	if (newmsg.startsWith("!continue")){
		ngprog[msg.author.id] = 4;
		msgchk[msg.author.id] = 1;
		dbconn.query('SELECT * FROM tpkmn WHERE tid = ? ', msg.author.id, function(err, row) { // Confirms the user isn't registered.
			console.log(row.length);
			if (err) {
				console.log(err); // Throws an error
			} else if (row.length) {
				typemsg(msg.author, "Now now, no need to get greedy there. Leave some of the pokemon for other new trainers.");
				ngprog[msg.author.id] = 0;
				msgchk[msg.author.id] = 0;
			}else{
				dbconn.query('SELECT * FROM users WHERE uid = ? ', msg.author.id, function(err, row) { // Confirms the user isn't registered.
					if (err) {
						console.log(err); // Throws an error
					} else if (row.length) {
						typemsg(msg.author, "Are you ready to continue?");
					} else { 
						typemsg(msg.author, "No need to get ahead of yourself. Please use the !newgame command to setup your trainer account.");
						ngprog[msg.author.id] = 0;
						msgchk[msg.author.id] = 0;
					}
				});
			}
		});
		msgchk[msg.author.id] = 1;
	}
	if (newmsg.startsWith("!party")){
		dbconn.query('SELECT * FROM tpkmn WHERE tid = ? ', msg.author.id, function(err, row) { // Confirms the user isn't registered.
			console.log(row.length);
			if (err) {
				console.log(err); // Throws an error
			} else if (row.length) {
				party[msg.author.id] = "";
				for (i = 0; i < row.length; i++) {
					var pkmni = row[i];
					party[msg.author.id] += "```" + 
					pkmni['name'] + " (Lv " + pkmni['lv'] + ")\tNature: " + pkmni['nature'] + "\n" + 
					"Exp: " + pkmni['exp'] + "/" + Math.floor(expCalc(pkmni['gt'], pkmni['lv'] + 1)) + "\n" + 
					"HP: " + pkmni['chp'] + "/" + pkmni['statsHP'] + "\n" + 
					"Atk:\tDef:\n" + 
					"  " + pkmni['statsATK'] + "\t  " + pkmni['statsDEF'] + "\n" +
					"SpAtk:  SpDef:\n" + 
					"  " + pkmni['statsSATK'] + "\t  " + pkmni['statsSDEF'] + "\n" +
					"Spd:\n" + 
					"  " + pkmni['statsSPD'] + "```";
				}
				typemsg(msg.author, party[msg.author.id]);
			}else{
				typemsg(msg.author, "Please run either '!newgame' if you haven't registered your trainer account or '!continue' if you haven't chosen your starter. If you believe you're getting this message in error, please contact Kael Aubaris.");
			}
		});
	}
	if (msg.channel.type === 'dm' && !msg.author.bot){
		console.log("ngprog = " + ngprog[msg.author.id] + "msgchk[" + msg.author.id + "] = " + msgchk[msg.author.id] + "\nContent:\n" + msg.content);
		if(newmsg.startsWith("!pkmngen")){
			genPKMN(msg.channel, msg.content.split(" ")[1], msg.content.split(" ")[2]);
		}
		if(ngprog[msg.author.id] == 1 && !msgchk[msg.author.id]){
			typemsg(msg.author, "Is that so? Then I'd like to welcome you to a brand new world.\nAs I'm sure you're aware, my name is Professor Brooke Walnut. People refer to me as a Pokemon Professor.\nBefore we go any further, I'd like to tell you a few things you should know about this world!\nThis world is widely inhabited by creatures known as Pokémon. We humans live alongside Pokémon as friends.\nAt times we play together, and at other times we work together. Some people use their Pokémon to battle and develop closer bonds with them.\nNow, why don't you tell me a little bit about yourself? Are you a boy? Or are you a girl?");
			ngprog[msg.author.id] = 2;
			msgchk[msg.author.id] = 1;
		}
		if (ngprog[msg.author.id] == 2 && !msgchk[msg.author.id]){
			if (newmsg.includes("boy")){
				gender[msg.author.id] = "boy";
				typemsg(msg.author, "Ah, so you're a boy then. Please tell me, what would you like to be called?");
				ngprog[msg.author.id] = 3;
			}else if (newmsg.includes("girl")){
				gender[msg.author.id] = "girl";
				typemsg(msg.author, "Ah, so you're a girl then. Please tell me, what would you like to be called?");
				ngprog[msg.author.id] = 3;
			}else{
				typemsg(msg.author, "I'm sorry, I didn't catch that. Are you a boy? Or are you a girl?");
			}
			msgchk[msg.author.id] = 1;
		}
		if(ngprog[msg.author.id] == 3 && !msgchk[msg.author.id]){
			if(msg.content.split(" ").length > 1){
				typemsg(msg.author, "Please, no spaces.");
			}else{
				if(msg.content.length > 32){
					typemsg(msg.author, "I'm not sure I could remember such a long name. Could you try something shorter?");
				}else{
					
					dbconn.query('SELECT * FROM users WHERE tname = ? ', msg.content, function(err, row) {
						if (err) {
							console.log(err); // Throws an error
						}else if(row.length){
							typemsg(msg.author, "It seems someone else has already chosen that name.");
						} else {
							var post  = {uid: msg.author.id, tname: msg.content, tlv: 1, gen: gender[msg.author.id]};
							dbconn.query('INSERT INTO users SET ? ', post, function(err, row) {
								if (err) {
									console.log(err); // Throws an error
								} else {
									var d = new Date();
									bot.channels.get("212249145568788480").sendMessage( 
										dateFormat(d, "mmmm dS, yyyy, HH:MM:ss") + ":\n" + 
										"Trainer " + msg.content + "(" + msg.author.username + ") has just formally joined the game.\nThey have yet to choose a pokemon.");
										ngprog[msg.author.id] = 4;
									typemsg(msg.author, "Happy to make your aquaintance " + msg.content + ".");
								}
							});
						}
					});
				}
			}
			msgchk[msg.author.id] = 1;
		}
		if(ngprog[msg.author.id] == 4 && !msgchk[msg.author.id]){
			typemsg(msg.author, "Now, where were we?\nOh right, you'll need a Pokémon if you're to travel this world. It's not safe to enter tall grass without one. Are you ready?");
			ngprog[msg.author.id] = 5;
			msgchk[msg.author.id] = 1;
		}
		if(ngprog[msg.author.id] == 6 && !msgchk[msg.author.id]){
			if(newmsg.includes("bulbasaur")){
				typemsg(msg.author, "Ah, Bulbasaur, the grass type pokemon. Is this the one you want?");
				spkmn[msg.author.id] = 1;
				sname[msg.author.id] = "Bulbasaur";
				ngprog[msg.author.id] = 7;
				msgchk[msg.author.id] = 1;
			}else if(newmsg.includes("charmander")){
				typemsg(msg.author, "Ah, Charmander, the fire type pokemon. Is this the one you want?");
				spkmn[msg.author.id] = 4;
				sname[msg.author.id] = "Charmander";
				ngprog[msg.author.id] = 7;
				msgchk[msg.author.id] = 1;
			}else if(newmsg.includes("squirtle")){
				typemsg(msg.author, "Ah, Squirtle, the water type pokemon. Is this the one you want?");
				spkmn[msg.author.id] = 7;
				sname[msg.author.id] = "Squirtle";
				ngprog[msg.author.id] = 7;
				msgchk[msg.author.id] = 1;
			}else if(newmsg.includes("pikachu")){
				typemsg(msg.author, "Ah, Pikachu, the electric type pokemon. Is this the one you want?");
				spkmn[msg.author.id] = 25;
				sname[msg.author.id] = "Pikachu";
				ngprog[msg.author.id] = 7;
				msgchk[msg.author.id] = 1;
			}else if(newmsg.includes("anything else?")){
				typemsg(msg.author, "Well, there is one more I guess. He's a little bit of a handful. Would you like Pikachu?");
				spkmn[msg.author.id] = 25;
				sname[msg.author.id] = "Pikachu";
				ngprog[msg.author.id] = 7;
				msgchk[msg.author.id] = 1;
			}else{
				typemsg(msg.author, "I'm sorry, that wasn't one of the choices.");
				ngprog[msg.author.id] = 5;
			}
		}
		if(ngprog[msg.author.id] == 5 && !msgchk[msg.author.id]){
			typemsg(msg.author, "You have three choices:\n\nBulbasaur, Charmander or Squirtle.\n\nWhich would you like to have?");
			ngprog[msg.author.id] = 6;
			msgchk[msg.author.id] = 1;
		}
		if(ngprog[msg.author.id] == 7 && !msgchk[msg.author.id]){
			if(newmsg.includes("yes") || newmsg.includes("of course") || newmsg.includes("yeah") || newmsg.includes("yup")){
				console.log(spkmn[msg.author.id]);
				var dex = spkmn[msg.author.id];
				genPKMN(msg, dex, 5, function(pkmn){
					var pkmnpost = {
						tid: msg.author.id, pid: pkmn['pid'], 
						name: pkmn['name'], lv: pkmn['lv'], nature: pkmn['nature'], 
						type1: pkmn['type1'], type2: pkmn['type2'], 
						statsHP: pkmn['stathp'], ivHP: pkmn['ivhp'], 
						statsATK: pkmn['statatk'], ivATK: pkmn['ivatk'], 
						statsDEF: pkmn['statdef'], ivDEF: pkmn['ivdef'], 
						statsSATK: pkmn['statsatk'], ivSATK: pkmn['ivsatk'], 
						statsSDEF: pkmn['statsdef'], ivSDEF: pkmn['ivsdef'], 
						statsSPD: pkmn['statspd'], ivSPD: pkmn['ivspd'], 
						exp: pkmn['cexp'], chp: pkmn['stathp'], gt: pkmn['gt']
					};
					dbconn.query('INSERT INTO tpkmn SET ? ', pkmnpost, function(err, row) {
						if (err) {
							console.log(err); // Throws an error
						} else {
							var d = new Date();
							bot.channels.get("212249145568788480").sendMessage(
								dateFormat(d, "mmmm dS, yyyy, HH:MM:ss") + ":\n" + 
								"Trainer " + msg.author.username + " chose their starter Pokémon from Prof Walnut.\n" + 
								"They chose " + sname[msg.author.id] + ".");
							typemsg(msg.author, "Your own pokemon legend is about to unfold. There are other trainers out there, how you interact with them will determine your own personal story. Enjoy yourself and if you ever need my help, don't hesitate to ask for it.");
							ngprog[msg.author.id] = 0;
						}
					});
				});
			}else if(newmsg.includes("no") || newmsg.includes("of course not") || newmsg.includes("nope") || newmsg.includes("choose another")){
				typemsg(msg.author, "Alright, you have three choices:\n\nBulbasaur, Charmander or Squirtle.\n\nWhich would you like to have?");
				ngprog[msg.author.id] = 6;
			}else{
				typemsg(msg.author, "I'm sorry, I didn't understand that. Do you want to keep " + sname[msg.author.id] + " or choose another?");
			}			
			msgchk[msg.author.id] = 1;
		}
		msgchk[msg.author.id] = 0;
	}
	if (newmsg.includes("walnut") && newmsg.includes("?") && newmsg.includes("what does")){
		typemsg(msg.channel, "If you have any questions regarding myself or my creator, you can contact him directly. His name is " + bot.users.get("id",166002128022667264).username + ".\nHe has also been contacted in regards to your inquiry. Have a nice day trainer.\nI can try and help you but you must ask for my help.");
		setTimeout(()=> {bot.users.get("id",166002128022667264).sendMessage("It seems that " + msg.author.username + " on " + msg.server.name + " is curious about the game. You should probably get around to explaining it to them.");}, 1000);
	}
	if (newmsg.includes("help",newmsg.search("walnut")+7) && newmsg.includes("prof") && newmsg.includes("walnut",newmsg.search("prof")+3)){
		var helping = {0:""};
		if (msg.author.username == "Kael Aubaris"){
			var tname = "Prof Aubaris";
		}else{
			var tname = msg.author.username;
		}
		if(msg.mentions.users.size > 0){
			helping[0] = msg.mentions.users.array().join(", "); 
			helping[1] = "them";
			helping[2] = "they";
			helping[3] = "their"
		}else{
			helping[0] = "you";
			helping[1] = "you";
			helping[2] = "you";
			helping[3] = "your";
		}
		var smsg = 
			"Well " + tname + ", if " + helping[0] + " truly need help then I'm here to assist " + helping[1] + ".\n" + 
			"If " + helping[2] + " haven't registered a Trainer ID yet, all " + helping[2] + " need to do is type the `!newgame` command. " + 
			"If " + helping[2] + " got held up during `!newgame` but managed to give me " + helping[3] + " name, all " + helping[2] + " need is the `!continue` command. " + 
			"If " + helping[2] + "'ve already gotten that far, then first let me congratulate " + helping[1] + " once more on beginning " + helping[3] + " Pokémon journey!\n\n" + 
			"Once " + helping[2] + " have finished registering " + helping[3] + " Trainer ID and have chosen " + helping[3] + " first Pokémon " + helping[2] + " have the following commands at " + helping[3] + " disposal:\n\n" + 
			"`!party` - This command shows " + helping[1] + " " + helping[3] + " currently active Pokémon\n\n" + 
			"If " + helping[2] + "'re the server owner and " + helping[2] + " haven't registered " + helping[3] + " server, please do so with the `!serverinit` command.\n\n" + 
			"Other than that, if " + helping[2] + " have any further questions, please feel free to contact my associate Prof Aubaris(aka Kael Aubaris) with any further questions.";
		typemsg(msg.channel, smsg);
	}
	if (newmsg.includes("night") && newmsg.includes("bed") && msg.author.username == "Kael Aubaris"){
		typemsg(msg.channel, "Good night Professor Aubaris. Pleasant dreams.", 25);
	}
//	if (msg.author == bot.users.get("id", 208059868253388801) && newmsg.includes("has **arisen** from the ashes!")){
//		typemsg(msg.channel, "On behalf of myself and everyone here, welcome to the fire " +msg.mentions[0], 25);
//	}
});

bot.login(settings.proftoken);
