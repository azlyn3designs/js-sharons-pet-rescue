const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

//Factory Function
const createPet = function (name, species) {
  const pet = {
    name: name,
    species: species,
    isTired: 5,

    sleep: function () {
      console.log(`${this.name} needs a nap. Zzz...`);
      this.isTired = 1;
    },

    play: function () {
      if (this.isTired === 10) {
        console.log("To tired to play.");
        this.sleep();
      } else {
        console.log(`Yay! ${this.name} loves to play!`);
        this.isTired += 1;
      }
    }
  };
  return pet;
};

const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "rat");
const francine = createPet("Francine", "turtle");

//console check for Objects & Parameters
//console.log(sora, clover, baxter, cleo, francine);

//call "sleep()" & "play()" Methods to check if they work
//clover.sleep();
//baxter.play();

//log out "clover" & "baxter" Objects
//console.log(clover);
//console.log(baxter);

//change the value of "isTired" Property for variables clover & francine
clover.isTired = 8;
francine.isTired = 9;
//console.log(clover, francine);

//places all Objects into an Array, so JS can loop over the Array
const allPets = [sora, clover, baxter, cleo, francine];
//console.log(allPets);

const showPets = function (petArray) {
  pets.innerHTML = ""; //clears list whenever "showPets()" is run, so to update w/fresh info

  for (let pet of petArray) {
    let status = "ready to play!"; //using "let" to declare variable, so value can be reassigned

    if (pet.isTired >= 7) {
      status = "sleeping.";
    }
    const li = document.createElement("li");
    li.innerHTML = `<span class="pet-name">${pet.name}</span> the ${pet.species} is ${status}`; //span class pet-name changes color of pet's name making it stand out
    pets.append(li); //adds element(s) to END of unordered list
  }
};

//click-on Event Listener for "show pet status" button
statusButton.addEventListener("click", function () {
  showPets(allPets);
});
