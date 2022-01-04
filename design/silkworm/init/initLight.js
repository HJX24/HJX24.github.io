var spotLight;


function initSpotLight(){
    // 不加光源整个场景就会漆黑一片
    // if(spotLight instanceof THREE.SpotLight){
    //     scene.remove(spotLight);
    //     console.log('yes');
    // }
    // 点光源
    spotLight = new THREE.SpotLight(controls.spotcolor);

    spotLight.position.set(-40, 60, -10);
    spotLight.castShadow=true;
    //设置阴影分辨率
    spotLight.shadow.mapSize.width = 2048;
    spotLight.shadow.mapSize.height = 2048;
    scene.add(spotLight);

}
function MoveSpotlight(){
    spotLight.angle= Math.PI/angleNUM;
    
}
function initDirectionLight(){
    var target=new THREE.Object3D();
    target.position.set(5,0,0);//调整光照方向
    // 平行光
    var directionalLight = new THREE.DirectionalLight(controls.directioncolor);
    directionalLight.position.set(-40,60,-11);
    directionalLight.castShadow=true;//打开阴影
    directionalLight.shadow.camera.far=200;
    directionalLight.shadow.camera.near=3;

    directionalLight.intensity=0.5;

    directionalLight.shadow.mapSize.height=2000;
    directionalLight.shadow.mapSize.width=1000;
    directionalLight.target=target;
    scene.add(directionalLight);
}

function initAmbientLight(){
    //环境光
    scene.add(new THREE.AmbientLight(controls.ambientcolor));
    // 并不是所有的灯光都可以投掷阴影，环境光就不可以。
}