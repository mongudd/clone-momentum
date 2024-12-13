const player = {
  name: "mongudd",
  points: 10,
  fat: true,
};

console.log(player.name);
console.log(player["name"]);
console.log(player);
// Update objects
player.fat = false;
console.log(player);

player.lastName = "potato";
player.points = player.points + 20;
console.log(player);
