

var flag = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var flagi = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var v = [10,650,700,750,800,170,210,25,900,775,100,50,150,200,950,250,275,300,325,350,320,325,350,400,425,410,475,490,510,555,600];
var r = 0,d=0;
var setDropMode,
	redipsInit,
	toggleAnimation;

//var myImage = "";
//var src = "";
//var t = "";

var boxf = [];
boxf[0] = "box_0";
boxf[1] = "box_1";
boxf[2] = "box_2";
boxf[3] = "box_3";
boxf[4] = "box_4";
boxf[5] = "box_5";
boxf[6] = "box_6";
boxf[7] = "box_7";
boxf[8] = "box_8";
boxf[9] = "box_9";
boxf[10] = "box_10";
boxf[11] = "box_11";
boxf[12] = "box_12";
boxf[13] = "box_13";
boxf[14] = "box_14";
boxf[15] = "box_15";

var img = [];
img[0] = "assets/pic/lion/0.jpg";
img[1] = "assets/pic/lion/1.jpg";
img[2] = "assets/pic/lion/2.jpg";
img[3] = "assets/pic/lion/3.jpg";
img[4] = "assets/pic/lion/4.jpg";
img[5] = "assets/pic/lion/5.jpg";
img[6] = "assets/pic/lion/6.jpg";
img[7] = "assets/pic/lion/7.jpg";
img[8] = "assets/pic/lion/8.jpg";
img[9] = "assets/pic/lion/9.jpg";
img[10] = "assets/pic/lion/10.jpg";
img[11] = "assets/pic/lion/11.jpg";
img[12] = "assets/pic/lion/12.jpg";
img[13] = "assets/pic/lion/13.jpg";
img[14] = "assets/pic/lion/14.jpg";
img[15] = "assets/pic/lion/15.jpg";

/*function check(){
	for(c=0;c<16;c++){
	myImage = document.getElementById(boxf[c]);
	src = myImage.src;
	if(img[c]==src){
	flagc = 1;
	}
	else{
		break;
		}
	}
	if(flagc==1){
				clearTimeout(timeOut);
		alert(SOLVED);

		}		
	}
	
*/

/*function check(){
	for(c=0;c<16;c++){
	myImage = document.getElementById(boxf[c]);
	src = myImage.src;
	//alert(src);
	t = t+src+"\n";
	}
	alert(t);	
}
*/
redipsInit = function () {
	// reference to the REDIPS.drag lib
	var rd = REDIPS.drag;
	// initialization
	rd.init();
	// set shift drop option
	rd.dropMode = 'shift';
}

setDropMode = function (radioButton) {
	REDIPS.drag.dropMode = radioButton.value;
};

if (window.addEventListener) {
	window.addEventListener('load', redipsInit, false);
}
else if (window.attachEvent) {
	window.attachEvent('onload', redipsInit);
}




function start(){
	
	for(i=0;i<17;i++){
		
		for(a=0;a<17;a++){
	r = Math.floor(Math.random()*17);
	if(flagi[r]==0){
	document.getElementById(boxf[i]).src = img[r];
	flagi[r]=1;
	break;
	}
			}
		flag[i]=1;
		
		
	}
	
mo();	
}

function mo(){
		d = Math.floor(Math.random()*32);
	if(v[d]>200){
	document.getElementById("mainTable").style.marginLeft = v[d]+""+"px";	
		}
		else{	
	document.getElementById("mainTable").style.margin = v[d]+""+"px";
		}
	setTimeout(mo, 5000);
	//check();
	
		}
	
		
	
		
	
	

