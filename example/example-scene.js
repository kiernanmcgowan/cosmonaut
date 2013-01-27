// example-scene.js
// just and example of how to use cosmonaut

var harness = require('cosmonaut-harness');

var scene = new harness.scene();
scene.attachToDom($('#context'));

var sphere = new harness.primitive.sphere({
  radius: 50
});

var light = new harness.light();

var lambert = new harness.material();

sphere.set('material', lambert);

scene.addObject(sphere);
scene.addLight(light);

var time = 0;

scene.on('prerender', function() {
  time++;
  sphere.scale(Math.cos(time/100), Math.sin(time/100), Math.cos(time/100) * Math.sin(time/100));
  scene.camera.move(Math.cos(time/50), Math.sin(time/50), Math.cos(time/50) * Math.sin(time/50));
});

scene.camera.set('lookAtObject', sphere);

scene.startRenderLoop();
