
var s56= Snap( $('.slider-for-team .second svg.top')[0] );
var sWidth14 = 170;
var sHeight14 = 75;

var line56 = s56.selectAll( 'line' );
var grafSize14 = sWidth14/line56.length;

s56.attr({width:sWidth14,height:sHeight14});

line56.attr({stroke: Color,strokeWidth: lineWidth });

function play56(){
  for(i=0;i<line56.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line56[i].animate({ 'x2' : randomNum, 'y2' : randomNum},speed,easing);
     line56[i+1].animate({ 'x1' : randomNum, 'y1' : randomNum},speed,easing);
     
   }else if(i==line40.length-1){
     line56[i].animate({ 'x1' : randomNum, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line56[i].animate({ 'x2' : randomNum, 'y2' : randomNum},speed,easing);
     line56[i+1].animate({ 'x1' : randomNum, 'y1' : randomNum},speed,easing);      
   }
  };
}

play56();
setInterval(play56, speed);
////////////////////////////////////////////////////////////////////////////////////////
var s57 = Snap( $('.slider-for-team .second svg.top')[1] );

var line57 = s57.selectAll( 'line' );

s57.attr({width:sWidth14,height:sHeight14});

line57.attr({stroke: Color,strokeWidth: lineWidth });

function play57(){
  for(i=0;i<line57.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line57[i].animate({ 'x2' : 50, 'y2' : randomNum},speed,easing);
     line57[i+1].animate({ 'x1' : 50, 'y1' : randomNum},speed,easing);
     
   }else if(i==line57.length-1){
     line57[i].animate({ 'x1' : 50, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line57[i].animate({ 'x2' : 50, 'y2' : randomNum},speed,easing);
     line57[i+1].animate({ 'x1' : 50, 'y1' : randomNum},speed,easing);      
   }
  };
}

play57();
setInterval(play57, speed);
/////////////////////////////////////////////////////////////////////////////////////////
var s58 = Snap( $('.slider-for-team .second svg.top')[2] );

var line58 = s58.selectAll( 'line' );

s58.attr({width:sWidth14,height:sHeight14});

line58.attr({stroke: Color,strokeWidth: lineWidth });

function play58(){
  for(i=0;i<line58.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line58[i].animate({ 'x2' : 75, 'y2' : randomNum},speed,easing);
     line58[i+1].animate({ 'x1' : 75, 'y1' : randomNum},speed,easing);
     
   }else if(i==line58.length-1){
     line58[i].animate({ 'x1' : 75, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line58[i].animate({ 'x2' : 75, 'y2' : randomNum},speed,easing);
     line58[i+1].animate({ 'x1' : 75, 'y1' : randomNum},speed,easing);      
   }
  };
}

play58();
setInterval(play58, speed);
///////////////////////////////////////////////////////////////////////////////////////
var s59 = Snap( $('.slider-for-team .second svg.top')[3] );

var line59 = s59.selectAll( 'line' );

s59.attr({width:sWidth14,height:sHeight14});

line59.attr({stroke: Color,strokeWidth: lineWidth });

function play59(){
  for(i=0;i<line59.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line59[i].animate({ 'x2' : 120, 'y2' : randomNum},speed,easing);
     line59[i+1].animate({ 'x1' : 120, 'y1' : randomNum},speed,easing);
     
   }else if(i==line59.length-1){
     line59[i].animate({ 'x1' : 120, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line59[i].animate({ 'x2' : 120, 'y2' : randomNum},speed,easing);
     line59[i+1].animate({ 'x1' : 120, 'y1' : randomNum},speed,easing);      
   }
  };
}

play59();
setInterval(play59, speed);

/////////////////////////////////////////////////////////////////////////////////////////////

var s60 = Snap( $('.slider-for-team .second svg.middle')[0] );
var sWidth15 = 120;
var sHeight15 = 75;

var line60 = s60.selectAll( 'line' );
var grafSize15 = sWidth15/line60.length;

s60.attr({width:sWidth15,height:sHeight15});

line60.attr({stroke: Color,strokeWidth: lineWidth });

function play60(){
  for(i=0;i<line60.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line60[i].animate({ 'x2' : 20, 'y2' : randomNum},speed,easing);
     line60[i+1].animate({ 'x1' : 20, 'y1' : randomNum},speed,easing);
     
   }else if(i==line60.length-1){
     line60[i].animate({ 'x1' : 20, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line60[i].animate({ 'x2' : 20, 'y2' : randomNum},speed,easing);
     line60[i+1].animate({ 'x1' : 20, 'y1' : randomNum},speed,easing);      
   }
  };
}

play60();
setInterval(play60, speed);
////////////////////////////////////////////////////////////////////////////////////////
var s61 = Snap( $('.slider-for-team .second svg.middle')[1] );

var line61 = s61.selectAll( 'line' );

s61.attr({width:sWidth15,height:sHeight15});

line61.attr({stroke: Color,strokeWidth: lineWidth });

function play61(){
  for(i=0;i<line61.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line61[i].animate({ 'x2' : randomNum, 'y2' : randomNum},speed,easing);
     line61[i+1].animate({ 'x1' : randomNum, 'y1' : randomNum},speed,easing);
     
   }else if(i==line61.length-1){
     line61[i].animate({ 'x1' : randomNum, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line61[i].animate({ 'x2' : randomNum, 'y2' : randomNum},speed,easing);
     line61[i+1].animate({ 'x1' : randomNum, 'y1' : randomNum},speed,easing);      
   }
  };
}

play61();
setInterval(play61, speed);
/////////////////////////////////////////////////////////////////////////////////////////
var s62 = Snap( $('.slider-for-team .second svg.middle')[2] );

var line62 = s62.selectAll( 'line' );

s62.attr({width:sWidth15,height:sHeight15});

line62.attr({stroke: Color,strokeWidth: lineWidth });

function play62(){
  for(i=0;i<line62.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line62[i].animate({ 'x2' : 60, 'y2' : randomNum},speed,easing);
     line62[i+1].animate({ 'x1' : 60, 'y1' : randomNum},speed,easing);
     
   }else if(i==line62.length-1){
     line62[i].animate({ 'x1' : 60, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line62[i].animate({ 'x2' : 60, 'y2' : randomNum},speed,easing);
     line62[i+1].animate({ 'x1' : 60, 'y1' : randomNum},speed,easing);      
   }
  };
}

play62();
setInterval(play62, speed);
///////////////////////////////////////////////////////////////////////////////////////
var s63 = Snap( $('.slider-for-team .second svg.middle')[3] );

var line63 = s63.selectAll( 'line' );

s63.attr({width:sWidth15,height:sHeight15});

line63.attr({stroke: Color,strokeWidth: lineWidth });

function play63(){
  for(i=0;i<line63.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line63[i].animate({ 'x2' : 75, 'y2' : randomNum},speed,easing);
     line63[i+1].animate({ 'x1' : 75, 'y1' : randomNum},speed,easing);
     
   }else if(i==line63.length-1){
     line63[i].animate({ 'x1' : 75, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line63[i].animate({ 'x2' : 75, 'y2' : randomNum},speed,easing);
     line63[i+1].animate({ 'x1' : 75, 'y1' : randomNum},speed,easing);      
   }
  };
}

play63();
setInterval(play63, speed);

//////////////////////////////////////////////////////////////////////////////////////////

var s64 = Snap( $('.slider-for-team .second svg.bottom')[0] );
var sWidth16 = 170;
var sHeight16 = 75;

var line64 = s64.selectAll( 'line' );
var grafSize16 = sWidth16/line64.length;

s64.attr({width:sWidth16,height:sHeight16});

line64.attr({stroke: Color,strokeWidth: lineWidth });

function play64(){
  for(i=0;i<line64.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line64[i].animate({ 'x2' : randomNum, 'y2' : randomNum},speed,easing);
     line64[i+1].animate({ 'x1' : randomNum, 'y1' : randomNum},speed,easing);
     
   }else if(i==line64.length-1){
     line64[i].animate({ 'x1' : randomNum, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line64[i].animate({ 'x2' : randomNum, 'y2' : randomNum},speed,easing);
     line64[i+1].animate({ 'x1' : randomNum, 'y1' : randomNum},speed,easing);      
   }
  };
}

play64();
setInterval(play64, speed);
////////////////////////////////////////////////////////////////////////////////////////
var s65 = Snap( $('.slider-for-team .second svg.bottom')[1] );

var line65 = s65.selectAll( 'line' );

s65.attr({width:sWidth16,height:sHeight16});

line65.attr({stroke: Color,strokeWidth: lineWidth });

function play65(){
  for(i=0;i<line65.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line65[i].animate({ 'x2' : 50, 'y2' : randomNum},speed,easing);
     line65[i+1].animate({ 'x1' : 50, 'y1' : randomNum},speed,easing);
     
   }else if(i==line65.length-1){
     line65[i].animate({ 'x1' : 50, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line65[i].animate({ 'x2' : 50, 'y2' : randomNum},speed,easing);
     line65[i+1].animate({ 'x1' : 50, 'y1' : randomNum},speed,easing);      
   }
  };
}

play65();
setInterval(play65, speed);
/////////////////////////////////////////////////////////////////////////////////////////
var s66 = Snap( $('.slider-for-team .second svg.bottom')[2] );

var line66 = s66.selectAll( 'line' );

s66.attr({width:sWidth16,height:sHeight16});

line66.attr({stroke: Color,strokeWidth: lineWidth });

function play66(){
  for(i=0;i<line66.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line66[i].animate({ 'x2' : 75, 'y2' : randomNum},speed,easing);
     line66[i+1].animate({ 'x1' : 75, 'y1' : randomNum},speed,easing);
     
   }else if(i==line66.length-1){
     line66[i].animate({ 'x1' : 75, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line66[i].animate({ 'x2' : 75, 'y2' : randomNum},speed,easing);
     line66[i+1].animate({ 'x1' : 75, 'y1' : randomNum},speed,easing);      
   }
  };
}

play66();
setInterval(play66, speed);
///////////////////////////////////////////////////////////////////////////////////////
var s67 = Snap( $('.slider-for-team .second svg.bottom')[3] );

var line67 = s67.selectAll( 'line' );

s67.attr({width:sWidth16,height:sHeight16});

line67.attr({stroke: Color,strokeWidth: lineWidth });

function play67(){
  for(i=0;i<line67.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line67[i].animate({ 'x2' : 120, 'y2' : randomNum},speed,easing);
     line67[i+1].animate({ 'x1' : 120, 'y1' : randomNum},speed,easing);
     
   }else if(i==line67.length-1){
     line67[i].animate({ 'x1' : 120, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line67[i].animate({ 'x2' : 120, 'y2' : randomNum},speed,easing);
     line67[i+1].animate({ 'x1' : 120, 'y1' : randomNum},speed,easing);      
   }
  };
}

play67();
setInterval(play67, speed);


