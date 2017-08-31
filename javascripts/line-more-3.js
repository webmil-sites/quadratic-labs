
var s24 = Snap( $('.slider-for-more .second svg.top')[0] );
var sWidth6 = 250;
var sHeight6 = 200;

var line24 = s24.selectAll( 'line' );
var grafSize6 = sWidth6/line24.length;

s24.attr({width:sWidth6,height:sHeight6});

line24.attr({stroke: Color,strokeWidth: lineWidth });

setInterval(function(){
  for(i=0;i<line24.length;i++){
   if(i==0){
     randomNum = getRandom();
     line24[i].animate({ 'x2' : randomNum - 30, 'y2' : randomNum},speed,easing);
     line24[i+1].animate({ 'x1' : randomNum - 30, 'y1' : randomNum},speed,easing);
     
   }else if(i==line24.length-1){
     line24[i].animate({ 'x1' : randomNum - 30, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandom();
     line24[i].animate({ 'x2' : randomNum - 30, 'y2' : randomNum},speed,easing);
     line24[i+1].animate({ 'x1' : randomNum - 30, 'y1' : randomNum},speed,easing);      
   }
  };
},speed);
////////////////////////////////////////////////////////////////////////////////////////
var s25 = Snap( $('.slider-for-more .second svg.top')[1] );

var line25 = s25.selectAll( 'line' );


s25.attr({width:sWidth6,height:sHeight6});

line25.attr({stroke: Color,strokeWidth: lineWidth });

setInterval(function(){
  for(i=0;i<line25.length;i++){
   if(i==0){
     randomNum = getRandom();
     line25[i].animate({ 'x2' : randomNum/2, 'y2' : randomNum},speed,easing);
     line25[i+1].animate({ 'x1' : randomNum/2 , 'y1' : randomNum},speed,easing);
     
   }else if(i==line25.length-1){
     line25[i].animate({ 'x1' : randomNum/2 , 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandom();
     line25[i].animate({ 'x2' : randomNum/2, 'y2' : randomNum},speed,easing);
     line25[i+1].animate({ 'x1' : randomNum/2 , 'y1' : randomNum},speed,easing);      
   }
  };
},speed);
/////////////////////////////////////////////////////////////////////////////////////////
var s26 = Snap( $('.slider-for-more .second svg.top')[2] );

var line26 = s26.selectAll( 'line' );


s26.attr({width:sWidth6,height:sHeight6});

line26.attr({stroke: Color,strokeWidth: lineWidth });

setInterval(function(){
  for(i=0;i<line26.length;i++){
   if(i==0){
     randomNum = getRandom();
     line26[i].animate({ 'x2' : randomNum + 20, 'y2' : randomNum},speed,easing);
     line26[i+1].animate({ 'x1' : randomNum + 20, 'y1' : randomNum},speed,easing);
     
   }else if(i==line26.length-1){
     line26[i].animate({ 'x1' : randomNum + 20, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandom();
     line26[i].animate({ 'x2' : randomNum + 20, 'y2' : randomNum},speed,easing);
     line26[i+1].animate({ 'x1' : randomNum + 20,  'y1' : randomNum},speed,easing);      
   }
  };
},speed);
///////////////////////////////////////////////////////////////////////////////////////
var s27 = Snap( $('.slider-for-more .second svg.top')[3] );

var line27 = s27.selectAll( 'line' );


s27.attr({width:sWidth6,height:sHeight6});

line27.attr({stroke: Color,strokeWidth: lineWidth });

setInterval(function(){
  for(i=0;i<line27.length;i++){
   if(i==0){
     randomNum = getRandom();
     line27[i].animate({ 'x2' : randomNum + 50, 'y2' : randomNum},speed,easing);
     line27[i+1].animate({ 'x1' : randomNum + 50, 'y1' : randomNum},speed,easing);
     
   }else if(i==line27.length-1){
     line27[i].animate({ 'x1' : randomNum + 50, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandom();
     line27[i].animate({ 'x2' : randomNum + 50, 'y2' : randomNum},speed,easing);
     line27[i+1].animate({ 'x1' : randomNum + 50, 'y1' : randomNum},speed,easing);      
   }
  };
},speed);

