
var s44 = Snap( $('.slider-for-team svg.middle')[0] );
var sWidth11 = 120;
var sHeight11 = 75;

var line44 = s44.selectAll( 'line' );
var grafSize11 = sWidth11/line44.length;

s44.attr({width:sWidth11,height:sHeight11});

line44.attr({stroke: Color,strokeWidth: lineWidth });

setInterval(function(){
  for(i=0;i<line44.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line44[i].animate({ 'x2' : 20, 'y2' : randomNum},speed,easing);
     line44[i+1].animate({ 'x1' : 20, 'y1' : randomNum},speed,easing);
     
   }else if(i==line44.length-1){
     line44[i].animate({ 'x1' : 20, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line44[i].animate({ 'x2' : 20, 'y2' : randomNum},speed,easing);
     line44[i+1].animate({ 'x1' : 20, 'y1' : randomNum},speed,easing);      
   }
  };
},speed);
////////////////////////////////////////////////////////////////////////////////////////
var s45 = Snap( $('.slider-for-team svg.middle')[1] );

var line45 = s45.selectAll( 'line' );

s45.attr({width:sWidth11,height:sHeight11});

line45.attr({stroke: Color,strokeWidth: lineWidth });

setInterval(function(){
  for(i=0;i<line45.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line45[i].animate({ 'x2' : randomNum, 'y2' : randomNum},speed,easing);
     line45[i+1].animate({ 'x1' : randomNum, 'y1' : randomNum},speed,easing);
     
   }else if(i==line45.length-1){
     line45[i].animate({ 'x1' : randomNum, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line45[i].animate({ 'x2' : randomNum, 'y2' : randomNum},speed,easing);
     line45[i+1].animate({ 'x1' : randomNum, 'y1' : randomNum},speed,easing);      
   }
  };
},speed);
/////////////////////////////////////////////////////////////////////////////////////////
var s46 = Snap( $('.slider-for-team svg.middle')[2] );

var line46 = s46.selectAll( 'line' );

s46.attr({width:sWidth11,height:sHeight11});

line46.attr({stroke: Color,strokeWidth: lineWidth });

setInterval(function(){
  for(i=0;i<line46.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line46[i].animate({ 'x2' : 60, 'y2' : randomNum},speed,easing);
     line46[i+1].animate({ 'x1' : 60, 'y1' : randomNum},speed,easing);
     
   }else if(i==line46.length-1){
     line46[i].animate({ 'x1' : 60, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line46[i].animate({ 'x2' : 60, 'y2' : randomNum},speed,easing);
     line46[i+1].animate({ 'x1' : 60, 'y1' : randomNum},speed,easing);      
   }
  };
},speed);
///////////////////////////////////////////////////////////////////////////////////////
var s47 = Snap( $('.slider-for-team svg.middle')[3] );

var line47 = s47.selectAll( 'line' );

s47.attr({width:sWidth11,height:sHeight11});

line47.attr({stroke: Color,strokeWidth: lineWidth });

setInterval(function(){
  for(i=0;i<line47.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line47[i].animate({ 'x2' : 75, 'y2' : randomNum},speed,easing);
     line47[i+1].animate({ 'x1' : 75, 'y1' : randomNum},speed,easing);
     
   }else if(i==line47.length-1){
     line47[i].animate({ 'x1' : 75, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line47[i].animate({ 'x2' : 75, 'y2' : randomNum},speed,easing);
     line47[i+1].animate({ 'x1' : 75, 'y1' : randomNum},speed,easing);      
   }
  };
},speed);


