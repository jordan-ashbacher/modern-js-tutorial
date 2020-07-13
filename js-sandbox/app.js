let contestant = 0;
let dogs = 0;

for (contestant = 0; contestant < 27; contestant++) {
  dogs = contestant + (contestant - 1);
  document.write(`Contestant ${contestant} ate ${dogs} hotdogs.`);
  document.write("\n");
}
