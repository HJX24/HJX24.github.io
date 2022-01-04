var left = 0;
var up = 0;
var inside = 0;
var moving = 2;
var angleNUM=3;

function KeyUse(){
    document.onkeydown = function(event){
        switch(event.keyCode){
            case 37: //left
                left-=moving;
                break;
            case 38: //up
                up+=moving;
                break;
            case 39: //right
                left+=moving;
                break;
            case 40: //down
                up-=moving;
                break;
            case 73:// i
                inside-=moving;
                break;
            case 79:// o
                inside+=moving;
                break;
            case 83: //w
                angleNUM+=1;
                break;
            case 87: //s
                angleNUM-=1;
                if(angleNUM<1) angleNUM=1;
                break;
            case 65: //a
                spotLight.position.z-=0.5;
                break;
            case 58: //d
                spotLight.position.z+=0.5;
                break;
        }
    }
}
