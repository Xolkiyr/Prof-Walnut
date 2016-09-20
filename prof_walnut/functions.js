class tools{
  constructor() {	}
  //Determines Damage Being Dealt
  //http://www.smogon.com/dp/articles/damage_formula#formula
  dmgcalc(Lv, BP, Atk, Def, Mod1, CH, Mod2=1, STAB, T1, T2, Mod3){
	R = 100-Math.floor((Math.random() * 15) + 1);
	dmg = Math.floor(Math.floor((Math.floor(Math.floor(Math.floor(Math.floor(Math.floor(Lv*2/5) + 2)*BP*Atk/50)/Def)*Mod1) + 2)*CH*Mod2*R/100)*STAB*T1*T2*Mod3);
  }
  //Determines BasePower of a Move after Modifiers
  //http://www.smogon.com/dp/articles/damage_formula#modifiers
  basepower(HH=1, BP, IT=1, CHG=1, MS=1, WS=1, UA=1, FA=1){
	BasePower = Math.floor(Math.floor(Math.floor(Math.floor(Math.floor(Math.floor(Math.floor(HH*BP)*IT)*CHG)*MS)*WS)*UA)*FA);
  }
  //Attack Modifier
  //http://www.smogon.com/dp/articles/damage_formula#attack
  atkcalc(Stat, SM, AM=1, IM=1){
	Atk = Stat*SM*AM*IM;
  }
  //Defense Modifier
  //http://www.smogon.com/dp/articles/damage_formula#defense
  defcalc(Stat, SM, Mod, SX){
	Def = Stat*SM*Mod*SX;
  }
  //Mod1 Calculator for DmgCalc
  //http://www.smogon.com/dp/articles/damage_formula#mod1
  Mod1calc(BRN=1, RL=1, TVT=1, SR=1, FF=1){
	Mod1 = BRN*RL*TVT*SR*FF;
  }
  //Mod3 Calculator for DmgCalc
  //http://www.smogon.com/dp/articles/damage_formula#mod3
  Mod3calc(SRF, EB, TL, TRB){
	Mod3 = SRF*EB*TL*TRB;
  }
  //Stat Calculations
  //http://www.smogon.com/dp/articles/stats
  HPcalc(BaseStat, IV, EV, Level){
	return Math.floor((2*BaseStat+IV+(EV/4))*Level/100+Level+10);
  }
  Statcalc(BaseStat, IV, EV, Level, Nature){
	return Math.floor(((2*BaseStat+IV+(EV/4))*Level/100+5)*Nature);
  }
  //Experience Calculations
  expCalc(gt, lv){
	if(gt == "f"){ return 0.8*Math.pow(lv,3); }
	if(gt == "mf"){ return Math.pow(lv,3); }
	if(gt == "ms"){ return (1.2*Math.pow(lv,3)) - (15 * Math.pow(lv,2))+(100 * lv) - 140; }
	if(gt == "s"){ return 1.25*Math.pow(lv,3); }
  }
}
module.exports = tools;