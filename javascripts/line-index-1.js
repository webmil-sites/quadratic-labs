
var s = Snap( $('.slider-for-index .first svg.top')[0] );
var sWidth = 400;
var sHeight = 300;

var line = s.selectAll( 'line' );
var grafSize = sWidth/line.length;
var Color = "#fff";

var lineWidth = .5;
var speed = 1500;
easing = mina.easeinout;

s.attr({width:sWidth,height:sHeight});

line.attr({stroke: Color,strokeWidth: lineWidth });


function getRandom(){
  var randomNum;
  return Math.floor(Math.random()*(200-50)+50);
};

function play(){
  for(i=0;i<line.length;i++){
   if(i==0){
     randomNum = getRandom();
     line[i].animate({ 'x2' : randomNum + 75 , 'y2' : randomNum},speed,easing);
     line[i+1].animate({ 'x1' : randomNum + 75 , 'y1' : randomNum},speed,easing);
     
   }else if(i==line.length-1){
     line[i].animate({ 'x1' : randomNum + 75, 'y1' : randomNum, 'x2' : sWidth, 'y2' : sHeight},speed,easing);
   }else{
     randomNum = getRandom();
     line[i].animate({ 'x2' : randomNum + 75, 'y2' : randomNum},speed,easing);
     line[i+1].animate({ 'x1' : randomNum + 75 , 'y1' : randomNum},speed,easing);      
   }
  };
}
play();
setInterval(play, speed);
////////////////////////////////////////////////////////////////////////////////////////
var s1 = Snap( $('.slider-for-index .first svg.top')[1] );

var line1 = s1.selectAll( 'line' );


s1.attr({width:sWidth,height:sHeight});

line1.attr({stroke: Color,strokeWidth: lineWidth });

function play1() {
  for(i=0;i<line1.length;i++){
   if(i==0){
     randomNum = getRandom();
     line1[i].animate({ 'x2' : randomNum - 25 , 'y2' : randomNum + 100},speed,easing);
     line1[i+1].animate({ 'x1' : randomNum - 25 , 'y1' : randomNum + 100},speed,easing);
     
   }else if(i==line1.length-1){
     line1[i].animate({ 'x1' : randomNum - 25, 'y1' : randomNum + 100, 'x2' : sWidth, 'y2' : sHeight},speed,easing);
   }else{
     randomNum = getRandom();
     line1[i].animate({ 'x2' : randomNum - 25, 'y2' : randomNum + 100},speed,easing);
     line1[i+1].animate({ 'x1' : randomNum - 25 , 'y1' : randomNum + 100},speed,easing);      
   }
  };
}

play1();
setInterval(play1,speed);
/////////////////////////////////////////////////////////////////////////////////////////
var s2 = Snap( $('.slider-for-index .first svg.top')[2] );

var line2 = s2.selectAll( 'line' );


s2.attr({width:sWidth,height:sHeight});

line2.attr({stroke: Color,strokeWidth: lineWidth });

function play2(){
  for(i=0;i<line2.length;i++){
   if(i==0){
     randomNum = getRandom();
     line2[i].animate({ 'x2' : randomNum, 'y2' : randomNum},speed,easing);
     line2[i+1].animate({ 'x1' : randomNum, 'y1' : randomNum},speed,easing);
     
   }else if(i==line2.length-1){
     line2[i].animate({ 'x1' : randomNum, 'y1' : randomNum, 'x2' : sWidth, 'y2' : sHeight},speed,easing);
   }else{
     randomNum = getRandom();
     line2[i].animate({ 'x2' : randomNum, 'y2' : randomNum},speed,easing);
     line2[i+1].animate({ 'x1' : randomNum, 'y1' : randomNum},speed,easing);      
   }
  };
}

play2();
setInterval(play2, speed);
///////////////////////////////////////////////////////////////////////////////////////
var s3 = Snap( $('.slider-for-index .first svg.top')[3] );

var line3 = s3.selectAll( 'line' );


s3.attr({width:sWidth,height:sHeight});

line3.attr({stroke: Color,strokeWidth: lineWidth });

function play3(){
  for(i=0;i<line3.length;i++){
   if(i==0){
     randomNum = getRandom();
     line3[i].animate({ 'x2' : randomNum + 50, 'y2' : randomNum - 30},speed,easing);
     line3[i+1].animate({ 'x1' : randomNum + 50, 'y1' : randomNum - 30},speed,easing);
     
   }else if(i==line3.length-1){
     line3[i].animate({ 'x1' : randomNum + 50, 'y1' : randomNum - 30, 'x2' : sWidth, 'y2' : sHeight},speed,easing);
   }else{
     randomNum = getRandom();
     line3[i].animate({ 'x2' : randomNum + 50, 'y2' : randomNum - 30},speed,easing);
     line3[i+1].animate({ 'x1' : randomNum + 50, 'y1' : randomNum - 30},speed,easing);      
   }
  };
}

play3();
setInterval(play3, speed);

