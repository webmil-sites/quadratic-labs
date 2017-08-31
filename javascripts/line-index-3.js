
var s8 = Snap( $('.slider-for-index .second svg.top')[0] );
var sWidth2 = 400;
var sHeight2 = 300;

var line8 = s8.selectAll( 'line' );
var grafSize2 = sWidth2/line8.length;

s8.attr({width:sWidth2,height:sHeight2});

line8.attr({stroke: Color,strokeWidth: lineWidth });

setInterval(function(){
  for(i=0;i<line8.length;i++){
   if(i==0){
     randomNum = getRandom();
     line8[i].animate({ 'x2' : randomNum + 75 , 'y2' : 100},speed,easing);
     line8[i+1].animate({ 'x1' : randomNum + 75 , 'y1' : 100},speed,easing);
     
   }else if(i==line8.length-1){
     line8[i].animate({ 'x1' : randomNum + 75, 'y1' : 150, 'y2' : sHeight2},speed,easing);
   }else{
     randomNum = getRandom();
     line8[i].animate({ 'x2' : randomNum + 75, 'y2' : 150},speed,easing);
     line8[i+1].animate({ 'x1' : randomNum + 75 , 'y1' : 100},speed,easing);      
   }
  };
},speed);
////////////////////////////////////////////////////////////////////////////////////////
var s9 = Snap( $('.slider-for-index .second svg.top')[1] );

var line9 = s9.selectAll( 'line' );


s9.attr({width:sWidth2,height:sHeight2});

line9.attr({stroke: Color,strokeWidth: lineWidth });

setInterval(function(){
  for(i=0;i<line9.length;i++){
   if(i==0){
     randomNum = getRandom();
     line9[i].animate({ 'x2' : randomNum - 25 , 'y2' : 75},speed,easing);
     line9[i+1].animate({ 'x1' : randomNum - 25 , 'y1' : 75},speed,easing);
     
   }else if(i==line9.length-1){
     line9[i].animate({ 'x1' : randomNum - 25, 'y1' : 175, 'y2' : sHeight2},speed,easing);
   }else{
     randomNum = getRandom();
     line9[i].animate({ 'x2' : randomNum - 25, 'y2' : 175},speed,easing);
     line9[i+1].animate({ 'x1' : randomNum - 25 , 'y1' : 75},speed,easing);      
   }
  };
},speed);
/////////////////////////////////////////////////////////////////////////////////////////
var s10 = Snap( $('.slider-for-index .second svg.top')[2] );

var line10 = s10.selectAll( 'line' );


s10.attr({width:sWidth2,height:sHeight2});

line10.attr({stroke: Color,strokeWidth: lineWidth });

setInterval(function(){
  for(i=0;i<line10.length;i++){
   if(i==0){
     randomNum = getRandom();
     line10[i].animate({ 'x2' : randomNum, 'y2' : 125},speed,easing);
     line10[i+1].animate({ 'x1' : randomNum, 'y1' : 125},speed,easing);
     
   }else if(i==line10.length-1){
     line10[i].animate({ 'x1' : randomNum, 'y1' : 150, 'y2' : sHeight2},speed,easing);
   }else{
     randomNum = getRandom();
     line10[i].animate({ 'x2' : randomNum, 'y2' : 150},speed,easing);
     line10[i+1].animate({ 'x1' : randomNum, 'y1' : 125},speed,easing);      
   }
  };
},speed);
///////////////////////////////////////////////////////////////////////////////////////
var s11 = Snap( $('.slider-for-index .second svg.top')[3] );

var line11 = s11.selectAll( 'line' );


s11.attr({width:sWidth2,height:sHeight2});

line11.attr({stroke: Color,strokeWidth: lineWidth });

setInterval(function(){
  for(i=0;i<line11.length;i++){
   if(i==0){
     randomNum = getRandom();
     line11[i].animate({ 'x2' : randomNum + 50, 'y2' : 100},speed,easing);
     line11[i+1].animate({ 'x1' : randomNum + 50, 'y1' : 100},speed,easing);
     
   }else if(i==line11.length-1){
     line11[i].animate({ 'x1' : randomNum + 50, 'y1' : 200, 'y2' : sHeight2},speed,easing);
   }else{
     randomNum = getRandom();
     line11[i].animate({ 'x2' : randomNum + 50, 'y2' : 200},speed,easing);
     line11[i+1].animate({ 'x1' : randomNum + 50, 'y1' : 100},speed,easing);      
   }
  };
},speed);


