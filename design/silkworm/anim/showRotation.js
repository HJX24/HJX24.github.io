function showRotation(){ // 360度旋转展示虫子
    group.rotation.x += 0.01;
    group.rotation.y += 0.01;
    group.rotation.z += 0.01;
    console.log(group.rotation);
    if(controls.showarrowhelper==true) ArrowHelperRotation();//不动
}