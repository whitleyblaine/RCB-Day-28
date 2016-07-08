function DigitalPal() {
  this.hungry = false;
  this.sleepy = false;
  this.bored = true;
  this.age = 0;
  this.feed = function() {
    if (this.hungry == true) {
      console.log("That was yummy!");
      this.hungry = false;
      this.sleepy = true;
    } else {
      console.log("No thanks! I'm full.");
    };
  };
  this.sleep = function() {
    if (this.sleepy == true) {
      console.log("ZZZZZZZ");
      this.sleepy = false;
      this.bored = true;
      this.increaseAge();
    } else {
      console.log("No way! I'm not tired.");
    };
  };
  this.play = function() {
    if (bored == true) {
      console.log("Yay! Let's play!");
      this.bored = false;
      this.hungry = true;
    } else {
      console.log("Not right now. Later?");
    };
  };
  this.increaseAge = function() {
    this.age++;
    console.log("Happy Birthday to me! I am " + this.age + " years old!")
  }
}

var dog = new DigitalPal();
dog.outside = false;
dog.bark = function() {
  console.log("Woof! Woof!");
};
dog.goOutside = function() {
  if (dog.outside == false) {
    console.log("Yay! I love the outdoors!");
    dog.outside = true;
    dog.goInside();
  } else {
    console.log("We're already outside though...");
  };
};
dog.goInside = function() {
  if (dog.outside == true) {
    console.log("Do we have to? Fine...");
    dog.outside = false;
  } else {
    console.log("I'm already inside...");
  };
};



var cat = new DigitalPal();
cat.HouseCondition = 100;
cat.meow = function() {
  console.log("Meow! Meow!");
};
cat.destroyFurniture = function() {
  if (cat.HouseCondition > 0) {
    cat.HouseCondition -= 10;
    console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
    console.log("New House Condition: " + cat.HouseCondition);
    cat.bored = false;
    cat.sleepy = true;
  };
}
cat.buyNewFurnitue = function() {
  cat.HouseCondition += 50;
  console.log("New furniture? Are you sure about that?");
  console.log("New House Condition: " + cat.HouseCondition);
}


cat.meow();
cat.destroyFurniture();
cat.destroyFurniture();
cat.buyNewFurnitue();


