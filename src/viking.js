// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack = () => {
    return this.strength;
  };

  receiveDamage = (damage) => {
    this.health -= damage;
  };
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage = (damage) => {
    this.health -= damage;
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    } else {
      return `${this.name} has received ${damage} points of damage`;
    }
  }

  battleCry = () => {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {

 receiveDamage = (damage) => {
    this.health -= damage;
    if (this.health <= 0) {
      return `A Saxon has died in combat`;
    } else {
      return `A Saxon has received ${damage} points of damage`;
    }
  }
}

// War
class War {

    constructor(){
        this.vikingArmy=[];
        this.saxonArmy =[];
    }
    addViking=(objectViking)=>{
        this.vikingArmy.push(objectViking);
    }

    addSaxon=(objectSaxon)=>{
        this.saxonArmy.push(objectSaxon);

    }
    vikingAttack=()=>{
        let randomSaxon=Math.floor(Math.random()*this.saxonArmy.length)
        let randomViking=Math.floor(Math.random()*this.vikingArmy.length)
        let result= this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength)
        if (this.saxonArmy[randomSaxon].health<=0){
            this.saxonArmy.splice(randomSaxon,randomSaxon+1);
        }
        return result;
    }
    saxonAttack=()=>{
        let randomSaxon=Math.floor(Math.random()*this.saxonArmy.length)
        let randomViking=Math.floor(Math.random()*this.vikingArmy.length)
        let result= this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength)
        if (this.vikingArmy[randomViking].health<=0){
            this.vikingArmy.splice(randomViking,randomViking+1);
        }
        return result;
    }

    genericAttack=(attackerArray,subjectArray)=>{ // no tiene checkeo, preguntar

        let randomAtacker=Math.floor(Math.random()*this.attackerArray.length)
        let randomSubject=Math.floor(Math.random()*this.subjectArray.length)
        let result= this.subjectArray[randomSubject].receiveDamage(this.attackerArray[randomAtacker].strength)
        if (this.subjectArray[randomSubject].health<=0){
            this.subjectArray.splice(randomSubject,randomSubject+1);
        }
        return result;

    }
    showStatus=()=>{
        if(this.saxonArmy.length===0)
        {
            return "Vikings have won the war of the century!"
        }
        else if (this.vikingArmy.length===0)
        {
            return "Saxons have fought for their lives and survived another day..."
        }
        else if (this.saxonArmy.length===1 || this.vikingArmy.length===1)
        {
            return "Vikings and Saxons are still in the thick of battle."

        }
    }
    
}
