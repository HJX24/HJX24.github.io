var step=0;
function animJump(){ // 虫子跳动
    step += 0.04;
    eye1.position.y = Math.abs(6*(Math.cos(step)));
    eye2.position.y = Math.abs(6*(Math.cos(step)));
    eye1.position.z = Math.abs(4*(Math.sin(step)));
    eye2.position.z = Math.abs(2*(Math.sin(step)));

    sphere6.position.y = Math.abs(5*(Math.cos(step)));
    sphere6.position.z = Math.abs(3*(Math.sin(step)));
    sphere5.position.y = Math.abs(4*(Math.cos(step)));
    sphere5.position.z = Math.abs(2*(Math.sin(step)));
    sphere4.position.y = Math.abs(3*(Math.cos(step)));
    sphere4.position.z = Math.abs(1*(Math.sin(step)));
    sphere3.position.y = Math.abs(4*(Math.cos(step)));
    sphere3.position.z = Math.abs(2*(Math.sin(step)));
    sphere2.position.y = Math.abs(5*(Math.cos(step)));
    sphere2.position.z = Math.abs(3*(Math.sin(step)));
    sphere1.position.y = Math.abs(4*(Math.cos(step)));
    sphere1.position.z = Math.abs(2*(Math.sin(step)));
    sphere.position.y = Math.abs(5*(Math.cos(step)));
    sphere.position.z = Math.abs(3*(Math.sin(step)));
    
}