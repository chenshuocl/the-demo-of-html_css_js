/**
 * Created by andy on 2015/11/19.
 */
function $(id) {return document.getElementById(id);}
function show(obj) { obj.style.display = "block";}
function hide(obj) { obj.style.display = "none";}
function scroll(){
	if(window.pageXOffset != null){
		return{
			left:pageXOffset,
			top:pageYOffset
		}
	}else if (compatMode == "CSS1compat"){
		return{
			left:document.documentElement.scrollLeft,
			top:document.documentElement.cvrollTop
		}
	}return{
		left:document.body.scrollLeft,
		top:document.body.scrollTop
	}
}
 function getStyle(obj,attr) {  //  谁的      那个属性
        if(obj.currentStyle)  // ie 等
        {
            return obj.currentStyle[attr];  // 返回传递过来的某个属性
        }
        else
        {
            return window.getComputedStyle(obj,null)[attr];  // w3c 浏览器
        }
}
function animateyunsu(obj,json){
	clearInterval(obj.timer);
			obj.timer = setInterval(function(){
				var flag=true;
				for(attr in json){
					
					if(json[attr] == parseInt(getStyle(obj,attr))){
						var speed=0;
					}else if(json[attr] > parseInt(getStyle(obj,attr))){
						speed=5;
					}else{speed=-5;}
					// speed = json[attr] > parseInt(getStyle(obj,attr))? 1:-1;
					var result = parseInt(getStyle(obj,attr)) + speed;
					obj.style[attr] = result + "px";
					if(Math.abs(json[attr]-result) >= 5){
						flag=false;
					}
				}
				if(flag){
					clearInterval(obj.timer);
						obj.style[attr] = json[attr] + "px";
				}
			},10)
}

function animatehuansu(obj,json){
	clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			var flag=true;
			for(var attr in json){
				target=json[attr];
				lear=parseInt(getStyle(obj,attr));
				speed=(target-lear)/10;
				speed=speed>0?Math.ceil(speed):Math.floor(speed);
				obj.style[attr]=lear+speed+"px";
				if(lear != target){
					flag=false;
				}
			}
			if(flag){
				clearInterval(obj.timer)
				}
	},30)
}