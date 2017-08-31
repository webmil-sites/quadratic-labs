
var s32 = Snap( $('.slider-for-more .third #tab-1 svg.bottom')[0] );
var sWidth8 = 1200;
var sHeight8 = 300;

var line32 = s32.selectAll( 'line' );
var grafSize8 = sWidth8/line32.length;

s32.attr({width:sWidth8,height:sHeight8});

line32.attr({stroke: Color,strokeWidth: lineWidth });

setInterval(function(){
  for(i=0;i<line32.length;i++){
   if(i==0){
     randomNum = getRandom();
     line32[i].animate({ 'x2' : 500, 'y2' : randomNum},speed,easing);
     line32[i+1].animate({ 'x1' : 500, 'y1' : randomNum},speed,easing);
     
   }else if(i==line32.length-1){
     line32[i].animate({ 'x1' : 1000, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandom();
     line32[i].animate({ 'x2' : 1000, 'y2' : randomNum},speed,easing);
     line32[i+1].animate({ 'x1' : 500, 'y1' : randomNum},speed,easing);      
   }
  };
},speed);
////////////////////////////////////////////////////////////////////////////////////////
var s33 = Snap( $('.slider-for-more .third #tab-1 svg.bottom')[1] );

var line33 = s33.selectAll( 'line' );

s33.attr({width:sWidth8,height:sHeight8});

line33.attr({stroke: Color,strokeWidth: lineWidth });

setInterval(function(){
  for(i=0;i<line33.length;i++){
   if(i==0){
     randomNum = getRandom();
     line33[i].animate({ 'x2' : 750, 'y2' : randomNum},speed,easing);
     line33[i+1].animate({ 'x1' : 750, 'y1' : randomNum},speed,easing);
     
   }else if(i==line33.length-1){
     line33[i].animate({ 'x1' : 1100, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandom();
     line33[i].animate({ 'x2' : 1100, 'y2' : randomNum},speed,easing);
     line33[i+1].animate({ 'x1' : 750, 'y1' : randomNum},speed,easing);      
   }
  };
},speed);
/////////////////////////////////////////////////////////////////////////////////////////
var s34 = Snap( $('.slider-for-more .third #tab-1 svg.bottom')[2] );

var line34 = s34.selectAll( 'line' );

s34.attr({width:sWidth8,height:sHeight8});

line34.attr({stroke: Color,strokeWidth: lineWidth });

setInterval(function(){
  for(i=0;i<line34.length;i++){
   if(i==0){
     randomNum = getRandom();
     line34[i].animate({ 'x2' : 600, 'y2' : randomNum},speed,easing);
     line34[i+1].animate({ 'x1' : 600, 'y1' : randomNum},speed,easing);
     
   }else if(i==line34.length-1){
     line34[i].animate({ 'x1' : 1000, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandom();
     line34[i].animate({ 'x2' : 1000, 'y2' : randomNum},speed,easing);
     line34[i+1].animate({ 'x1' : 600, 'y1' : randomNum},speed,easing);      
   }
  };
},speed);
///////////////////////////////////////////////////////////////////////////////////////
var s35 = Snap( $('.slider-for-more .third #tab-1 svg.bottom')[3] );

var line35 = s35.selectAll( 'line' );

s35.attr({width:sWidth8,height:sHeight8});

line35.attr({stroke: Color,strokeWidth: lineWidth });

setInterval(function(){
  for(i=0;i<line35.length;i++){
   if(i==0){
     randomNum = getRandom();
     line35[i].animate({ 'x2' : 400, 'y2' : randomNum},speed,easing);
     line35[i+1].animate({ 'x1' : 400, 'y1' : randomNum},speed,easing);
     
   }else if(i==line35.length-1){
     line35[i].animate({ 'x1' : 800, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandom();
     line35[i].animate({ 'x2' : 800, 'y2' : randomNum},speed,easing);
     line35[i+1].animate({ 'x1' : 400, 'y1' : randomNum},speed,easing);      
   }
  };
},speed);


