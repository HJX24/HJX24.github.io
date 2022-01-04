var renderer;

function initRenderer(){
    //渲染器
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0xffffff));
    renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.shadowMap.Enabled=true;//接受物体投放阴影
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
}
