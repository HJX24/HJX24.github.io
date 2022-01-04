var stats;

function initStats(){
    stats = new Stats();//引入实时监测fps

    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left='0px';
    stats.domElement.style.top='0px';
    document.body.appendChild(stats.domElement);  
}