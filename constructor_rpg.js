function Character(options) {
  this.name = options.name;
  this.profession = options.profession;
  this.gender = options.gender;
  this.age = options.age;
  this.strength = options.strength;
  this.hp = options.hp;
  this.printStats = function() {console.log("Name: " + this.name + ", Profession: " + this.profession + ", Gender: " + this.gender + ", Age: " + this.age + ", Strength: " + this.strength + ", HitPoints: " + this.hp)};
  this.isAlive = function(){
    if(this.hp > 0) {
      console.log(this.name + " is alive!");
    } else {
      console.log(this.name + " is dead...");
    }
  },
  this.attack = function(victim) {
    victim.hp = victim.hp - this.strength;
    console.log(this.name + " attacked " + victim.name);
    console.log(victim.name + " now has " + victim.hp + ' hit points!');
  },
  this.levelUp = function() {
    this.age++;
    this.strength = this.strength + 5;
    this.hp = this.hp + 25;
    console.log(this.name + " has leveled up");
  }
}

var billy = new Character({
  name: "Billy",
  profession: "Assassin",
  gender: "Male",
  age: 24,
  strength: 7,
  hp: 2,
})


var sarah = new Character({
  name: "Sarah",
  profession: "Sniper",
  gender: "Female",
  age: 21,
  strength: 5,
  hp: 1,
})

billy.printStats();
sarah.printStats();
billy.isAlive();
sarah.attack(billy);
billy.isAlive();
billy.levelUp();
billy.isAlive();


