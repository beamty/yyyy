show();
onEvent("label1_up", "click", function( ) {
  show();
  penUp();
  move(0, -10);
});
onEvent("label2_down", "click", function( ) {
  show();
  penUp();
  move(0, 10);
});
onEvent("label3_left", "click", function( ) {
  show();
  penUp();
  move(-10, 0);
});
onEvent("label4_Right", "click", function( ) {
  show();
  penUp();
  move(10, 0);
});
onEvent("image2_Draw", "click", function( ) {
  penDown();
  penRGB(randomNumber(10,100),randomNumber(10,100),randomNumber(10,100));
  penWidth(3);
  getText("dropdown1")();
  penUp();
});
function Triangle() {
  turnRight(90)
  moveForward(getNumber("slider1"));
  turnLeft(120);
  moveForward(getNumber("slider1"));
  turnLeft(120);
  moveForward(getNumber("slider1"));
  turnLeft(120);
  turnLeft(90)
  }
function Turn(){
show()
turnRight(45);
}

