var rspotLight;
function AddLight(){
    // 点光源
    rspotLight = new THREE.SpotLight({color: 0xff00ff, angle: Math.PI});
    rspotLight.position.set(-10, 10, 10);
    scene.add(rspotLight);
}
function RemoveLight(){
    scene.remove(rspotLight);
}
