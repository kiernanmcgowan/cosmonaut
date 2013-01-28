// example-scene.js
// just and example of how to use cosmonaut

var harness = require('cosmonaut-harness');

var scene = new harness.scene({webgl: true});
scene.attachToDom($('#context'));

var sphere = new harness.primitive.sphere({
  radius: 50
});

var cube = new harness.primitive.cube({
  x: -10,
  y: 100,
  z: 10
});

var light = new harness.light();

var lambert = new harness.material();

sphere.set('material', lambert);
cube.set('material', lambert);

scene.addObject(sphere);
scene.addObject(cube);

scene.addLight(light);

var time = 0;

/*scene.on('prerender', function() {
  time++;
});*/

//scene.camera.set('lookAtObject', sphere);

scene.startRenderLoop();
