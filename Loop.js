var counter;

for (counter = 2; counter <= 19; counter += 2) {
  turnLeft(320);
  for (var count = 0; count < counter; count++) {
      penColour(colour_random());
    moveForward(50);
    turnLeft(360 / counter);
  }
}