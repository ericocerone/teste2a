import * as THREE from 'three'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const scene2 = new THREE.Scene()
const camera2 = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xffff00, wireframe: true } );
const cube = new THREE.Mesh( geometry, material );

const geometry2 = new THREE.SphereGeometry()
const material2 = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: true})
const esfera = new THREE.Mesh(geometry2, material2)

scene.add(cube)
scene2.add(esfera)

camera.position.z = 5;
camera2.position.z = 5

cena = scene2
cam = camera2
var i = 0

document.body.addEventListener('keydown', keyDown)
function keyDown(event) {
    if (event.keyCode == 49) {
        cena = scene
        cam = camera
    }
    if (event.keyCode == 50) {
        cena = scene2
        cam = camera2
    }
    if (event.key == "d") {
        i = 0.1
    }
    if (event.key == "a") {
        i = -0.1
    }
    if (event.key == "x") {
        i = 0
    }
}

function animate() {
    requestAnimationFrame(animate);

    //esfera.rotation.x += i
    esfera.position.x += i
    esfera.rotation.y += i

    //cube.rotation.x += i;
    
    cube.rotation.y += i;

    function goTo(cena, cam) {
        renderer.render(cena, cam);
    }

    goTo(cena, cam)

};

animate();