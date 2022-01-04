function render(){
    stats.update();
    if(controls.begin == true){
        if(controls.size<=1) controls.size+=0.001;
        else controls.size-=0.001;
    }
    

    if(controls.animjump == false && controls.showrotation == false){
        initSilkwarm(controls.eyecolor, controls.bodycolor1, controls.bodycolor2, controls.eyewireframe, controls.bodywireframe1, controls.bodywireframe2 ,controls.size); // 绘制虫子 // 放在render里可根据gui改变颜色
    }// 在不动的时候改变颜色

    if(controls.animjump) animJump();//控制跳动

    if(controls.plane == true) initPlane(controls.planecolor, controls.planeangle);// 放在render里可根据gui改变颜色
    else {
        if(plane instanceof THREE.Mesh)
            scene.remove(plane);
    }

    if(controls.showrotation == true) showRotation();// 进行旋转展示 
        
    if(controls.showarrowhelper) showArrowHelper();//展示旋转轴

    if(controls.spotlight) MoveSpotlight();
    
    addTrackball();//轨迹球控件，加了之后就不能改变颜色时，可以滑动不能确定
    requestAnimationFrame(render);
    renderer.render(scene, camera);
    
}