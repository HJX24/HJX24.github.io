// var step=0;
var eye1;
var eye2;
var sphere;
var sphere1;
var sphere2;
var sphere3;
var sphere4;
var sphere5;
var sphere6;

var group;
var eyeGeometry;
var eyeMaterial;

function initSilkwarm(eyecolor,bodycolor1, bodycolor2, eyewire, bodywire1, bodywire2, size){
    if(group instanceof THREE.Group){//如果之前已经产生过组，那么将其移除，表现为回原位
        scene.remove(group);
    }

    KeyUse();//引入鼠标控制

    //眼睛
    var eyeGeometry = new THREE.SphereGeometry(0.7*size,10,10);
    var eyeMaterial = new THREE.MeshLambertMaterial({color: eyecolor, wireframe: eyewire});//必须是{color: }，不能直接加颜色

    eye1 = new THREE.Mesh(eyeGeometry, eyeMaterial);
    eye1.position.set(-10*size+left,5+up,-1.0*size+inside);//*size让身体位置随着大小改变
    scene.add(eye1);
    eye2 = new THREE.Mesh(eyeGeometry, eyeMaterial);
    eye2.position.set(-10*size+left,5+up,1.6*size+inside);
    scene.add(eye2);

    //身体
    var sphereGeometry = new THREE.SphereGeometry(3*size,10,10);
    var sphereMaterial1 = new THREE.MeshLambertMaterial({color: bodycolor1, wireframe: bodywire1});
    var sphereMaterial2 = new THREE.MeshLambertMaterial({color: bodycolor2, wireframe: bodywire2});
    //颜色随机Math.random()*0xffffff

    sphere = new THREE.Mesh(sphereGeometry, sphereMaterial1);
    sphere.position.set(-7*size+left,4+up,0+inside);
    sphere.castShadow = true;// 投掷阴影
    scene.add(sphere);
    sphere1 = new THREE.Mesh(sphereGeometry, sphereMaterial2);
    sphere1.position.set(-2*size+left,4+up,0+inside);
    sphere1.castShadow = true;// 投掷阴影
    scene.add(sphere1);
    sphere2 = new THREE.Mesh(sphereGeometry, sphereMaterial1);
    sphere2.position.set(3*size+left,5+up,0+inside);
    sphere2.castShadow = true;// 投掷阴影
    scene.add(sphere2);
    sphere3 = new THREE.Mesh(sphereGeometry, sphereMaterial2);
    sphere3.position.set(8*size+left,4+up,0+inside);
    sphere3.castShadow = true;// 投掷阴影
    scene.add(sphere3);
    sphere4 = new THREE.Mesh(sphereGeometry, sphereMaterial1);
    sphere4.position.set(13*size+left,3+up,0+inside);
    sphere4.castShadow = true;// 投掷阴影
    scene.add(sphere4);
    sphere5 = new THREE.Mesh(sphereGeometry, sphereMaterial2);
    sphere5.position.set(18*size+left,4+up,0+inside);
    sphere5.castShadow = true;// 投掷阴影
    scene.add(sphere5);
    sphere6 = new THREE.Mesh(sphereGeometry, sphereMaterial1);
    sphere6.position.set(23*size+left,4+up,0+inside);
    sphere6.castShadow = true;// 投掷阴影
    scene.add(sphere6);

    group = new THREE.Group();
    group.add(eye1);
    group.add(eye2);
    group.add(sphere);
    group.add(sphere1);
    group.add(sphere2);
    group.add(sphere3);
    group.add(sphere4);
    group.add(sphere5);
    group.add(sphere6);

    scene.add(group);

}