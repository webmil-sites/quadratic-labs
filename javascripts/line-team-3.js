
var s68= Snap( $('.slider-for-team .third svg.top')[0] );
var sWidth17 = 170;
var sHeight17 = 75;

var line68 = s68.selectAll( 'line' );
var grafSize17 = sWidth17/line68.length;

s68.attr({width:sWidth17,height:sHeight17});

line68.attr({stroke: Color,strokeWidth: lineWidth });

setInterval(function(){
  for(i=0;i<line68.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line68[i].animate({ 'x2' : randomNum, 'y2' : randomNum},speed,easing);
     line68[i+1].animate({ 'x1' : randomNum, 'y1' : randomNum},speed,easing);
     
   }else if(i==line68.length-1){
     line68[i].animate({ 'x1' : randomNum, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line68[i].animate({ 'x2' : randomNum, 'y2' : randomNum},speed,easing);
     line68[i+1].animate({ 'x1' : randomNum, 'y1' : randomNum},speed,easing);      
   }
  };
},speed);
////////////////////////////////////////////////////////////////////////////////////////
var s69 = Snap( $('.slider-for-team .third svg.top')[1] );

var line69 = s69.selectAll( 'line' );

s69.attr({width:sWidth17,height:sHeight17});

line69.attr({stroke: Color,strokeWidth: lineWidth });

setInterval(function(){
  for(i=0;i<line69.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line69[i].animate({ 'x2' : 50, 'y2' : randomNum},speed,easing);
     line69[i+1].animate({ 'x1' : 50, 'y1' : randomNum},speed,easing);
     
   }else if(i==line69.length-1){
     line69[i].animate({ 'x1' : 50, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line69[i].animate({ 'x2' : 50, 'y2' : randomNum},speed,easing);
     line69[i+1].animate({ 'x1' : 50, 'y1' : randomNum},speed,easing);      
   }
  };
},speed);
/////////////////////////////////////////////////////////////////////////////////////////
var s70 = Snap( $('.slider-for-team .third svg.top')[2] );

var line70 = s70.selectAll( 'line' );

s70.attr({width:sWidth17,height:sHeight17});

line70.attr({stroke: Color,strokeWidth: lineWidth });

setInterval(function(){
  for(i=0;i<line70.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line70[i].animate({ 'x2' : 75, 'y2' : randomNum},speed,easing);
     line70[i+1].animate({ 'x1' : 75, 'y1' : randomNum},speed,easing);
     
   }else if(i==line70.length-1){
     line70[i].animate({ 'x1' : 75, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line70[i].animate({ 'x2' : 75, 'y2' : randomNum},speed,easing);
     line70[i+1].animate({ 'x1' : 75, 'y1' : randomNum},speed,easing);      
   }
  };
},speed);
///////////////////////////////////////////////////////////////////////////////////////
var s71 = Snap( $('.slider-for-team .third svg.top')[3] );

var line71 = s71.selectAll( 'line' );

s71.attr({width:sWidth17,height:sHeight17});

line71.attr({stroke: Color,strokeWidth: lineWidth });

setInterval(function(){
  for(i=0;i<line71.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line71[i].animate({ 'x2' : 120, 'y2' : randomNum},speed,easing);
     line71[i+1].animate({ 'x1' : 120, 'y1' : randomNum},speed,easing);
     
   }else if(i==line71.length-1){
     line71[i].animate({ 'x1' : 120, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line71[i].animate({ 'x2' : 120, 'y2' : randomNum},speed,easing);
     line71[i+1].animate({ 'x1' : 120, 'y1' : randomNum},speed,easing);      
   }
  };
},speed);

/////////////////////////////////////////////////////////////////////////////////////////////

var s72 = Snap( $('.slider-for-team .third svg.middle')[0] );
var sWidth18 = 120;
var sHeight18 = 75;

var line72 = s72.selectAll( 'line' );
var grafSize18 = sWidth18/line72.length;

s72.attr({width:sWidth18,height:sHeight18});

line72.attr({stroke: Color,strokeWidth: lineWidth });

setInterval(function(){
  for(i=0;i<line72.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line72[i].animate({ 'x2' : 20, 'y2' : randomNum},speed,easing);
     line72[i+1].animate({ 'x1' : 20, 'y1' : randomNum},speed,easing);
     
   }else if(i==line72.length-1){
     line72[i].animate({ 'x1' : 20, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line72[i].animate({ 'x2' : 20, 'y2' : randomNum},speed,easing);
     line72[i+1].animate({ 'x1' : 20, 'y1' : randomNum},speed,easing);      
   }
  };
},speed);
////////////////////////////////////////////////////////////////////////////////////////
var s73 = Snap( $('.slider-for-team .third svg.middle')[1] );

var line73 = s73.selectAll( 'line' );

s73.attr({width:sWidth18,height:sHeight18});

line73.attr({stroke: Color,strokeWidth: lineWidth });

setInterval(function(){
  for(i=0;i<line73.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line73[i].animate({ 'x2' : randomNum, 'y2' : randomNum},speed,easing);
     line73[i+1].animate({ 'x1' : randomNum, 'y1' : randomNum},speed,easing);
     
   }else if(i==line73.length-1){
     line73[i].animate({ 'x1' : randomNum, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line73[i].animate({ 'x2' : randomNum, 'y2' : randomNum},speed,easing);
     line73[i+1].animate({ 'x1' : randomNum, 'y1' : randomNum},speed,easing);      
   }
  };
},speed);
/////////////////////////////////////////////////////////////////////////////////////////
var s74= Snap( $('.slider-for-team .third svg.middle')[2] );

var line74 = s74.selectAll( 'line' );

s74.attr({width:sWidth18,height:sHeight18});

line74.attr({stroke: Color,strokeWidth: lineWidth });

setInterval(function(){
  for(i=0;i<line74.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line74[i].animate({ 'x2' : 60, 'y2' : randomNum},speed,easing);
     line74[i+1].animate({ 'x1' : 60, 'y1' : randomNum},speed,easing);
     
   }else if(i==line74.length-1){
     line74[i].animate({ 'x1' : 60, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line74[i].animate({ 'x2' : 60, 'y2' : randomNum},speed,easing);
     line74[i+1].animate({ 'x1' : 60, 'y1' : randomNum},speed,easing);      
   }
  };
},speed);
///////////////////////////////////////////////////////////////////////////////////////
var s75 = Snap( $('.slider-for-team .third svg.middle')[3] );

var line75 = s75.selectAll( 'line' );

s75.attr({width:sWidth18,height:sHeight18});

line75.attr({stroke: Color,strokeWidth: lineWidth });

setInterval(function(){
  for(i=0;i<line75.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line75[i].animate({ 'x2' : 75, 'y2' : randomNum},speed,easing);
     line75[i+1].animate({ 'x1' : 75, 'y1' : randomNum},speed,easing);
     
   }else if(i==line75.length-1){
     line75[i].animate({ 'x1' : 75, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line75[i].animate({ 'x2' : 75, 'y2' : randomNum},speed,easing);
     line75[i+1].animate({ 'x1' : 75, 'y1' : randomNum},speed,easing);      
   }
  };
},speed);

//////////////////////////////////////////////////////////////////////////////////////////

var s76 = Snap( $('.slider-for-team .third svg.bottom')[0] );
var sWidth19 = 170;
var sHeight19 = 75;

var line76 = s76.selectAll( 'line' );
var grafSize19 = sWidth19/line76.length;

s76.attr({width:sWidth19,height:sHeight19});

line76.attr({stroke: Color,strokeWidth: lineWidth });

setInterval(function(){
  for(i=0;i<line76.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line76[i].animate({ 'x2' : randomNum, 'y2' : randomNum},speed,easing);
     line76[i+1].animate({ 'x1' : randomNum, 'y1' : randomNum},speed,easing);
     
   }else if(i==line76.length-1){
     line76[i].animate({ 'x1' : randomNum, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line76[i].animate({ 'x2' : randomNum, 'y2' : randomNum},speed,easing);
     line76[i+1].animate({ 'x1' : randomNum, 'y1' : randomNum},speed,easing);      
   }
  };
},speed);
////////////////////////////////////////////////////////////////////////////////////////
var s77 = Snap( $('.slider-for-team .third svg.bottom')[1] );

var line77 = s77.selectAll( 'line' );

s77.attr({width:sWidth19,height:sHeight19});

line65.attr({stroke: Color,strokeWidth: lineWidth });

setInterval(function(){
  for(i=0;i<line77.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line77[i].animate({ 'x2' : 50, 'y2' : randomNum},speed,easing);
     line77[i+1].animate({ 'x1' : 50, 'y1' : randomNum},speed,easing);
     
   }else if(i==line77.length-1){
     line77[i].animate({ 'x1' : 50, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line77[i].animate({ 'x2' : 50, 'y2' : randomNum},speed,easing);
     line77[i+1].animate({ 'x1' : 50, 'y1' : randomNum},speed,easing);      
   }
  };
},speed);
/////////////////////////////////////////////////////////////////////////////////////////
var s78 = Snap( $('.slider-for-team .third svg.bottom')[2] );

var line78 = s78.selectAll( 'line' );

s78.attr({width:sWidth19,height:sHeight19});

line78.attr({stroke: Color,strokeWidth: lineWidth });

setInterval(function(){
  for(i=0;i<line78.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line78[i].animate({ 'x2' : 75, 'y2' : randomNum},speed,easing);
     line78[i+1].animate({ 'x1' : 75, 'y1' : randomNum},speed,easing);
     
   }else if(i==line78.length-1){
     line78[i].animate({ 'x1' : 75, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line78[i].animate({ 'x2' : 75, 'y2' : randomNum},speed,easing);
     line78[i+1].animate({ 'x1' : 75, 'y1' : randomNum},speed,easing);      
   }
  };
},speed);
///////////////////////////////////////////////////////////////////////////////////////
var s79 = Snap( $('.slider-for-team .third svg.bottom')[3] );

var line79 = s79.selectAll( 'line' );

s79.attr({width:sWidth19,height:sHeight19});

line79.attr({stroke: Color,strokeWidth: lineWidth });

setInterval(function(){
  for(i=0;i<line79.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line79[i].animate({ 'x2' : 120, 'y2' : randomNum},speed,easing);
     line79[i+1].animate({ 'x1' : 120, 'y1' : randomNum},speed,easing);
     
   }else if(i==line79.length-1){
     line79[i].animate({ 'x1' : 120, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line79[i].animate({ 'x2' : 120, 'y2' : randomNum},speed,easing);
     line79[i+1].animate({ 'x1' : 120, 'y1' : randomNum},speed,easing);      
   }
  };
},speed);


