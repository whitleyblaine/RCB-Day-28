var dogs = {
  raining: "true",
  noise: "Woof!",
  makeNoise: function() {
    if (this.raining == "true") {
      console.log(dogs.noise);
    }
  }
};

var cats = {
  raining: "false",
  noise: "Meow!",
  makeNoise: function() {
    if (this.raining == "true") {
      console.log(cats.noise);
    }
  }
};

dogs.makeNoise();
cats.raining = "true";
cats.makeNoise();

var massHysteria = function(f1, f2) {
  if (f1.raining == "true" && f2.raining == "true") {
    console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
  }
}

massHysteria(dogs, cats);