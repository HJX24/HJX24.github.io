var trackballControls;

function initTrackballControls(){
    trackballControls = new THREE.TrackballControls(camera);
    trackballControls.rotateSpeed = 1.0;//旋转速度
    trackballControls.zoomSpeed = 1.0;//变焦速度
    trackballControls.panSpeed = 1.0;//平均速度
    trackballControls.staticMoving = true;//没有惯性

}
var clock = new THREE.Clock();

function addTrackball(){//影响鼠标右键的效果，使用后右键没办法显示效果

    var delta = clock.getDelta();
    trackballControls.update(delta);
}