var plane;
function initPlane(planecolor, angle){
    if(plane instanceof THREE.Mesh){
        scene.remove(plane);
    }
    var planeGeometry = new THREE.PlaneGeometry(60, 30);
    var planeMaterial = new THREE.MeshLambertMaterial({color: planecolor});
    plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.receiveShadow=true;// 使平面就接收物体投掷过来的阴影

    plane.rotation.x=-angle*Math.PI;//旋转一定角度看得更清楚
    plane.position.set(15,0,0);
    scene.add(plane);

}
// function removePlane(){
//     if(plane instanceof THREE.Mesh) scene.remove(plane);
// }