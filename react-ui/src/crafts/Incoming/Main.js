import Earth from './Earth'

function sketch(p) {

  var earth;

  p.setup = function () {
    var canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    canvas.parent("sketch");

    p.fill(0,0,0,0);
    p.smooth();

    earth = new Earth(p);
  };

  p.draw = function () {
    p.background(255);
    earth.draw()
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    p.setup();
  };

}




export default sketch