// Create a scene
var scene = new THREE.Scene();

// Create a camera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
//camera.position.x = 3;
//camera.position.y = 3;
//camera.rotation.set(0,1,1);
window.addEventListener('keydown', (e) => { 
    console.log('e=', e);
    if (e.code == 'KeyW') {
        camera.position.z = camera.position.z - 0.1;
    } else if (e.code == 'KeyS') {
        // console.log('z=',camera.position.z);
        camera.position.z = camera.position.z + 0.1;
        // console.log('new z=',camera.position.z);
    } else if (e.code == 'KeyA') {
        camera.position.x = camera.position.x - 0.1;
    } else if (e.code == 'KeyD') {
        camera.position.x = camera.position.x + 0.1;
    }  
    if (e.code == 'ArrowUp') {
        camera.rotation.z -= 0.01;
    } else if (e.code == 'ArrowDown') {
        // console.log('z=',camera.position.z);
        camera.rotation.z += 0.01;
        // console.log('new z=',camera.position.z);
    } else if (e.code == 'ArrowLeft') {
        camera.rotation.y -= 0.01;
    } else if (e.code == 'ArrowRight') {
        camera.rotation.y += 0.01;
    }  
});

// Create a renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a stationary sphere
var stationarySphereGeometry = new THREE.SphereGeometry(.5, 20, 20);
var stationarySphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
var stationarySphere = new THREE.Mesh(stationarySphereGeometry, stationarySphereMaterial);
scene.add(stationarySphere);

// Create an orbiting sphere
var orbitingSphereGeometry = new THREE.SphereGeometry(0.1, 20, 20);
var orbitingSphereMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var orbitingSphere = new THREE.Mesh(orbitingSphereGeometry, orbitingSphereMaterial);
scene.add(orbitingSphere);

// Set the initial position of the orbiting sphere
orbitingSphere.position.x = 20;

// Set the speed of the orbiting sphere
var orbitingSpeed = 0.01;

// Render the scene
function render() {
    requestAnimationFrame(render);

    // Update the position of the orbiting sphere
    orbitingSphere.position.x = Math.cos(orbitingSpeed);
    orbitingSphere.position.y = Math.sin(orbitingSpeed);
    orbitingSpeed += 0.01;

    // Render the scene
    renderer.render(scene, camera);
}
render();