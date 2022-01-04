function init(){
    initStats();

    initScene();
    initCamera();
    initRenderer();

    
    if(controls.ambientlight) initAmbientLight();
    if(controls.spotlight) initSpotLight();
    if(controls.directionlight) initDirectionLight();
    
    
    initTrackballControls(); //轨迹球控制
}