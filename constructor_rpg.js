function Character(options) {
  this.name = options.name;
  this.profession = options.profession;
  this.gender = options.gender;
  this.age = options.age;
  this.strength = options.strength;
  this.hp = options.hp;
  this.printStats = options.printStats;
  this.isAlive = options.isAlive;
  this.attack = options.attack;
  this.levelUp = options.levelUp;
}

var billy = new Character({
  name: "Billy",
  profession: "Assassin",
  gender: "Male",
  age: 24,
  strength: 7,
  hp: 2,
  printStats: function() {console.log("Name: " + this.name + ", Profession: " + this.profession + ", Gender: " + this.gender + ", Age: " + this.age + ", Strength: " + this.strength + ", HitPoints: " + this.hp)},
  isAlive: function(){
    if(this.hp > 0) {
      console.log(this.name + " is alive!");
    } else {
      console.log(this.name + " is dead...");
    }
  },
  attack: function(char2) {
    char2.hp = char2.hp - this.strength;
    console.log(this.name + " attacked " + char2.name);
    console.log(char2.name + " now has " + char2.hp + ' hit points!');
  }
});


var sarah = new Character({
  name: "Sarah",
  profession: "Sniper",
  gender: "Female",
  age: 21,
  strength: 5,
  hp: 1,
  printStats: function(){console.log("Name: " + this.name + ", Profession: " + this.profession + ", Gender: " + this.gender + ", Age: " + this.age + ", Strength: " + this.strength + ", HitPoints: " + this.hp)},
  isAlive: function(){
    if(this.hp > 0) {
      console.log(this.name + " is alive!");
    } else {
      console.log(this.name + " is dead...");
    }
  },
  attack: function(char2) {
    char2.hp = char2.hp - this.strength;
    console.log(this.name + " attacked " + char2.name);
    console.log(char2.name + " now has " + char2.hp + ' hit points!');
  }

})

billy.printStats();
sarah.printStats();
billy.isAlive();
sarah.attack(billy);
billy.isAlive();


