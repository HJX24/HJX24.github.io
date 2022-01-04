var arrow;
function showArrowHelper(){
    //group坐标轴，绕这个轴旋转
    arrow = new THREE.ArrowHelper(new THREE.Vector3(0,1,0),group.position,10,0x0000ff);
    scene.add(arrow);
}

function ArrowHelperRotation(){
    arrow.rotation.x+=0.01;
    arrow.rotation.y+=0.01;
    arrow.rotation.z+=0.01;

}
function ArrowHelperJump(){
    
}