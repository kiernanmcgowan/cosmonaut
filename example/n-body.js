var harness = require('cosmonaut-harness');


var scene = new harness.scene({webgl: true});
scene.attachToDom($('#context'));

var camera = scene.camera;

var input = harness.input.wasd;


var sphere = new harness.primitive.sphere({
  radius: 50
});

var light = new harness.light();
var lambert = new harness.material();

sphere.set('material', lambert);
scene.addObject(sphere);

scene.addLight(light);

var time = 0;

// bind the keyevents
input.onLeft(function(evt) {
  camera.shift(-10, 0, 0);
});

input.onRight(function(evt) {
  camera.shift(10, 0, 0);
});

input.onUp(function(evt) {
  camera.shift(0, 10, 0);
});

input.onDown(function(evt) {
  camera.shift(0, -10, 0);
});

/*scene.on('prerender', function() {
  time++;
});*/

scene.camera.set('lookAtObject', sphere);

scene.startRenderLoop();

