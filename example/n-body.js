var harness = require('cosmonaut-harness');


// Rotate an object around an arbitrary axis in object space
var rotObjectMatrix;
function rotateAroundObjectAxis(object, axis, radians) {
  rotObjectMatrix = new THREE.Matrix4();
  rotObjectMatrix.makeRotationAxis(axis.normalize(), radians);
  object.matrix.multiply(rotObjectMatrix);      // post-multiply
  console.log(object.rotation);
  object.rotation.getRotationFromMatrix(object.matrix, object.scale);
}

var rotWorldMatrix;
// Rotate an object around an arbitrary axis in world space
function rotateAroundWorldAxis(object, axis, radians) {
  rotWorldMatrix = new THREE.Matrix4();
  rotWorldMatrix.makeRotationAxis(axis.normalize(), radians);
  rotWorldMatrix.multiply(object.matrix);        // pre-multiply
  object.matrix = rotWorldMatrix;

  // new code for Three.js v50+
  object.rotation.setEulerFromRotationMatrix(object.matrix);

  // old code for Three.js v49:
  // object.rotation.getRotationFromMatrix(object.matrix, object.scale);
}


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

var origin = new THREE.Vector3(0, 0, 0);

// bind the keyevents
input.onLeft(function(evt) {
  camera.orbitAroundPoint(-1 / Math.PI, 0, origin);
});

input.onRight(function(evt) {
  camera.orbitAroundPoint(1 / Math.PI, 0, origin);
});

input.onUp(function(evt) {
  camera.orbitAroundPoint(0, -1 / Math.PI, origin);
});

input.onDown(function(evt) {
  camera.orbitAroundPoint(0, 1 / Math.PI, origin);
});

scene.camera.set('lookAtObject', sphere);

scene.startRenderLoop();

