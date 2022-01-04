var camera;

function initCamera(){
    camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight,0.1,1000);
    camera.position.set(-15, 25, 25);
    camera.lookAt(scene.position);     
}