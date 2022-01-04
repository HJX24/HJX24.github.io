var controls;var flag = -1;
function addGUI(){
    controls = new function(){
        this.begin = false;
        this.growth = function(){
            if(flag == 1) this.begin = true;
            else this.begin = false;
            flag *= -1;
        }
    
        this.lightUP = "S键控制点光照角度缩小";
        this.lightDown = "W键控制点光照角度增大";
        this.lightLeft = "A键控制点光照沿z轴缩小";
        this.lightRight = "D键控制点光照沿z轴增大";
        this.know= "跳动时不能改变属性";
        this.positionUP = "上键控制虫子往上动";
        this.positionDown = "下键控制虫子往下动";
        this.positionLeft = "左键控制虫子往左动";
        this.positionRight = "右键控制虫子往右动";
        this.positionIn = "I键控制虫子往里动";
        this.positionOut = "O键控制虫子往外动";
        

        this.animjump = false;//是否跳动
        this.showrotation = false;// 是否进行旋转
        this.showarrowhelper = false;// 是否显示绕自身的旋转轴

        this.plane = true;
        this.planecolor = "#112233";
        this.planeangle = 0.5;
        this.planeinclinne1 = function(){
            this.planeangle = 0.28;
        }
        this.planeinclinne2 = function(){
            this.planeangle = 0.45;
        }
        this.planeinclinne3 = function(){
            this.planeangle = 0.7;
        }

        this.js = '控件不能改变效果';
        this.ambientlight = true;//环境光
        this.spotlight = true;//点光源
        this.directionlight = true;//平行光
        this.ambientcolor = "#c0c0c0";
        this.spotcolor = "#ffffff";
        this.directioncolor = "#ffffff";

        this.eyecolor = "#345678";
        this.bodycolor1 = "#3f8696";
        this.bodycolor2 = "#1b3f64";
        this.blue = function(){
            this.eyecolor = "#345678";
            this.bodycolor1 = "#3f8696";
            this.bodycolor2 = "#1b3f64";
            this.planecolor = "#112233";
        }
        this.pink = function(){
            this.eyecolor = "#d1c8de";
            this.bodycolor1 = "#c5609b";
            this.bodycolor2 = "#e7b7ed";
            this.planecolor = "#6b576b";
        }
        this.orange = function(){
            this.eyecolor = "#9d8962";
            this.bodycolor1 = "#ff9966";
            this.bodycolor2 = "#FF9933";
            this.planecolor = "#6b6657";
        }
        this.purple = function(){
            this.eyecolor = "#7b6f89";
            this.bodycolor1 = "#6666cc";
            this.bodycolor2 = "#896da7";
            this.planecolor = "#5a576b";
        }
        this.red = function(){
            this.eyecolor = "#552234";
            this.bodycolor1 = "#392e31";
            this.bodycolor2 = "#551824";
            this.planecolor = "#50474c";
        }
        this.eyewireframe = false;
        this.bodywireframe1 = false;
        this.bodywireframe2 = false;
        this.size = 0.2;

        this.msize = function(){
            this.size = 1.0;
        }
        this.xssize = function(){
            this.size = 0.3;
        }
        this.ssize = function(){
            this.size = 0.5;
        }
        this.lsize = function(){
            this.size = 1.25;
        }
        this.xlsize = function(){
            this.size = 1.5;
        }


        this.addlight = function(){
            AddLight();
        }
        this.removelight = function(){
            RemoveLight();
        }

    };

    var gui = new dat.GUI();

    gui.add(controls, 'growth');
    var explain = gui.addFolder('explain');
    var lightexplain = explain.addFolder('lightexplain');
    lightexplain.add(controls, 'lightUP');
    lightexplain.add(controls, 'lightDown');
    lightexplain.add(controls, 'lightLeft');
    lightexplain.add(controls, 'lightRight');
    var positionexplain = explain.addFolder('positionexplain');
    positionexplain.add(controls, 'positionUP');
    positionexplain.add(controls, 'positionDown');
    positionexplain.add(controls, 'positionLeft');
    positionexplain.add(controls, 'positionRight');
    positionexplain.add(controls, 'positionIn');
    positionexplain.add(controls, 'positionOut');
    explain.add(controls, 'know');

    var anim = gui.addFolder('anim');
    anim.add(controls, 'animjump').name("跳动展示");
    anim.add(controls, 'showrotation').name("360度旋转展示");
    anim.add(controls, 'showarrowhelper').name("展示旋转轴");
    anim.add(controls, 'addlight').name("增加光照强度");
    anim.add(controls, 'removelight').name("减少光照强度");

    var plane = gui.addFolder('plane');
    plane.add(controls, 'plane').name("平面");
    //plane.addColor(controls, 'planecolor').name("平面颜色");
    //plane.add(controls, 'planeangle', -1, 1).name("平面角度");
    plane.add(controls, 'planeinclinne1').name("平面角度1");
    plane.add(controls, 'planeinclinne2').name("平面角度2");
    plane.add(controls, 'planeinclinne3').name("平面角度3");

    // var light = gui.addFolder('light-not change');
    // light.add(controls, 'js').name('说明');
    // light.add(controls, 'ambientlight').name("显示环境光");
    // light.addColor(controls, 'ambientcolor').name("环境光颜色");
    // light.add(controls, 'spotlight').name("显示点光源");
    // light.addColor(controls, 'spotcolor').name("点光源颜色");
    // light.add(controls, 'directionlight').name("显示平行光");
    // light.addColor(controls, 'directioncolor').name("平行光颜色");

    var wire = gui.addFolder('wire');
    wire.add(controls, 'eyewireframe').name("眼睛线框结构");
    wire.add(controls, 'bodywireframe1').name("身体线框结构1");
    wire.add(controls, 'bodywireframe2').name("身体线框结构2");
    wire.addColor(controls, 'eyecolor').name("眼睛颜色");
    wire.addColor(controls, 'bodycolor1').name("身体颜色1");
    wire.addColor(controls, 'bodycolor2').name("身体颜色2");

    // silkwarm.add(controls, 'size', 0.01, 5).name("身体大小");
    var size = gui.addFolder('size');
    size.add(controls, 'xssize').name("小小虫时期");
    size.add(controls, 'ssize').name("小虫时期");
    size.add(controls, 'msize').name("虫虫时期");
    size.add(controls, 'lsize').name("大虫时期");
    size.add(controls, 'xlsize').name("大大虫时期");


    var skin = gui.addFolder('skin');
    skin.add(controls, 'blue').name("巴拉小蓝");
    skin.add(controls, 'pink').name("回忆小粉");
    skin.add(controls, 'orange').name("橘子小橙");
    skin.add(controls, 'purple').name("宝石小紫");
    skin.add(controls, 'red').name("黑妞小红");

}