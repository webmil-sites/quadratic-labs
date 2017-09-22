
var s92= Snap( $('.slider-for-team .fifth svg.top')[0] );
var sWidth23 = 170;
var sHeight23 = 75;

var line92 = s92.selectAll( 'line' );
var grafSize23 = sWidth23/line92.length;

s92.attr({width:sWidth23,height:sHeight23});

line92.attr({stroke: Color,strokeWidth: lineWidth });

function play92(){
  for(i=0;i<line92.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line92[i].animate({ 'x2' : randomNum, 'y2' : randomNum},speed,easing);
     line92[i+1].animate({ 'x1' : randomNum, 'y1' : randomNum},speed,easing);
     
   }else if(i==line92.length-1){
     line92[i].animate({ 'x1' : randomNum, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line92[i].animate({ 'x2' : randomNum, 'y2' : randomNum},speed,easing);
     line92[i+1].animate({ 'x1' : randomNum, 'y1' : randomNum},speed,easing);      
   }
  };
}

play92();
setInterval(play92, speed);
////////////////////////////////////////////////////////////////////////////////////////
var s93 = Snap( $('.slider-for-team .fifth svg.top')[1] );

var line93 = s93.selectAll( 'line' );

s93.attr({width:sWidth23,height:sHeight23});

line93.attr({stroke: Color,strokeWidth: lineWidth });

function play93(){
  for(i=0;i<line93.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line93[i].animate({ 'x2' : 50, 'y2' : randomNum},speed,easing);
     line93[i+1].animate({ 'x1' : 50, 'y1' : randomNum},speed,easing);
     
   }else if(i==line93.length-1){
     line93[i].animate({ 'x1' : 50, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line93[i].animate({ 'x2' : 50, 'y2' : randomNum},speed,easing);
     line93[i+1].animate({ 'x1' : 50, 'y1' : randomNum},speed,easing);      
   }
  };
}

play93();
setInterval(play93, speed);
/////////////////////////////////////////////////////////////////////////////////////////
var s94 = Snap( $('.slider-for-team .fifth svg.top')[2] );

var line94 = s94.selectAll( 'line' );

s94.attr({width:sWidth23,height:sHeight23});

line94.attr({stroke: Color,strokeWidth: lineWidth });

function play94(){
  for(i=0;i<line94.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line94[i].animate({ 'x2' : 75, 'y2' : randomNum},speed,easing);
     line94[i+1].animate({ 'x1' : 75, 'y1' : randomNum},speed,easing);
     
   }else if(i==line94.length-1){
     line94[i].animate({ 'x1' : 75, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line94[i].animate({ 'x2' : 75, 'y2' : randomNum},speed,easing);
     line94[i+1].animate({ 'x1' : 75, 'y1' : randomNum},speed,easing);      
   }
  };
}

play94();
setInterval(play94, speed);
///////////////////////////////////////////////////////////////////////////////////////
var s95 = Snap( $('.slider-for-team .fifth svg.top')[3] );

var line95 = s95.selectAll( 'line' );

s95.attr({width:sWidth23,height:sHeight23});

line95.attr({stroke: Color,strokeWidth: lineWidth });

function play95(){
  for(i=0;i<line95.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line95[i].animate({ 'x2' : 120, 'y2' : randomNum},speed,easing);
     line95[i+1].animate({ 'x1' : 120, 'y1' : randomNum},speed,easing);
     
   }else if(i==line95.length-1){
     line95[i].animate({ 'x1' : 120, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line95[i].animate({ 'x2' : 120, 'y2' : randomNum},speed,easing);
     line95[i+1].animate({ 'x1' : 120, 'y1' : randomNum},speed,easing);      
   }
  };
}

play95();
setInterval(play95, speed);

/////////////////////////////////////////////////////////////////////////////////////////////

var s96= Snap( $('.slider-for-team .fifth svg.middle')[0] );
var sWidth24 = 120;
var sHeight24 = 75;

var line96 = s96.selectAll( 'line' );
var grafSize24 = sWidth24/line96.length;

s96.attr({width:sWidth24,height:sHeight24});

line96.attr({stroke: Color,strokeWidth: lineWidth });

function play96(){
  for(i=0;i<line96.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line96[i].animate({ 'x2' : 20, 'y2' : randomNum},speed,easing);
     line96[i+1].animate({ 'x1' : 20, 'y1' : randomNum},speed,easing);
     
   }else if(i==line96.length-1){
     line96[i].animate({ 'x1' : 20, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line96[i].animate({ 'x2' : 20, 'y2' : randomNum},speed,easing);
     line96[i+1].animate({ 'x1' : 20, 'y1' : randomNum},speed,easing);      
   }
  };
}

play96();
setInterval(play96, speed);
////////////////////////////////////////////////////////////////////////////////////////
var s97 = Snap( $('.slider-for-team .fifth svg.middle')[1] );

var line97 = s97.selectAll( 'line' );

s97.attr({width:sWidth24,height:sHeight24});

line97.attr({stroke: Color,strokeWidth: lineWidth });

function play97(){
  for(i=0;i<line97.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line97[i].animate({ 'x2' : randomNum, 'y2' : randomNum},speed,easing);
     line97[i+1].animate({ 'x1' : randomNum, 'y1' : randomNum},speed,easing);
     
   }else if(i==line97.length-1){
     line97[i].animate({ 'x1' : randomNum, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line97[i].animate({ 'x2' : randomNum, 'y2' : randomNum},speed,easing);
     line97[i+1].animate({ 'x1' : randomNum, 'y1' : randomNum},speed,easing);      
   }
  };
}

play97();
setInterval(play97, speed);
/////////////////////////////////////////////////////////////////////////////////////////
var s98 = Snap( $('.slider-for-team .fifth svg.middle')[2] );

var line98 = s98.selectAll( 'line' );

s98.attr({width:sWidth24,height:sHeight24});

line98.attr({stroke: Color,strokeWidth: lineWidth });

function play98(){
  for(i=0;i<line98.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line98[i].animate({ 'x2' : 60, 'y2' : randomNum},speed,easing);
     line98[i+1].animate({ 'x1' : 60, 'y1' : randomNum},speed,easing);
     
   }else if(i==line98.length-1){
     line98[i].animate({ 'x1' : 60, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line98[i].animate({ 'x2' : 60, 'y2' : randomNum},speed,easing);
     line98[i+1].animate({ 'x1' : 60, 'y1' : randomNum},speed,easing);      
   }
  };
}

play98();
setInterval(play98, speed);
///////////////////////////////////////////////////////////////////////////////////////
var s99 = Snap( $('.slider-for-team .fifth svg.middle')[3] );

var line99 = s99.selectAll( 'line' );

s99.attr({width:sWidth24,height:sHeight24});

line99.attr({stroke: Color,strokeWidth: lineWidth });

function play99(){
  for(i=0;i<line99.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line99[i].animate({ 'x2' : 75, 'y2' : randomNum},speed,easing);
     line99[i+1].animate({ 'x1' : 75, 'y1' : randomNum},speed,easing);
     
   }else if(i==line99.length-1){
     line99[i].animate({ 'x1' : 75, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line99[i].animate({ 'x2' : 75, 'y2' : randomNum},speed,easing);
     line99[i+1].animate({ 'x1' : 75, 'y1' : randomNum},speed,easing);      
   }
  };
}

play99();
setInterval(play99, speed);

//////////////////////////////////////////////////////////////////////////////////////////

var s100 = Snap( $('.slider-for-team .fifth svg.bottom')[0] );
var sWidth25 = 170;
var sHeight25 = 75;

var line100 = s100.selectAll( 'line' );
var grafSize25 = sWidth25/line100.length;

s100.attr({width:sWidth25,height:sHeight25});

line100.attr({stroke: Color,strokeWidth: lineWidth });

function play100(){
  for(i=0;i<line100.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line100[i].animate({ 'x2' : randomNum, 'y2' : randomNum},speed,easing);
     line100[i+1].animate({ 'x1' : randomNum, 'y1' : randomNum},speed,easing);
     
   }else if(i==line100.length-1){
     line100[i].animate({ 'x1' : randomNum, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line100[i].animate({ 'x2' : randomNum, 'y2' : randomNum},speed,easing);
     line100[i+1].animate({ 'x1' : randomNum, 'y1' : randomNum},speed,easing);      
   }
  };
}

play100();
setInterval(play100, speed);
////////////////////////////////////////////////////////////////////////////////////////
var s101 = Snap( $('.slider-for-team .fifth svg.bottom')[1] );

var line101 = s101.selectAll( 'line' );

s101.attr({width:sWidth25,height:sHeight25});

line101.attr({stroke: Color,strokeWidth: lineWidth });

function play101(){
  for(i=0;i<line101.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line101[i].animate({ 'x2' : 50, 'y2' : randomNum},speed,easing);
     line101[i+1].animate({ 'x1' : 50, 'y1' : randomNum},speed,easing);
     
   }else if(i==line101.length-1){
     line101[i].animate({ 'x1' : 50, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line101[i].animate({ 'x2' : 50, 'y2' : randomNum},speed,easing);
     line101[i+1].animate({ 'x1' : 50, 'y1' : randomNum},speed,easing);      
   }
  };
}

play101();
setInterval(play101, speed);
/////////////////////////////////////////////////////////////////////////////////////////
var s102 = Snap( $('.slider-for-team .fifth svg.bottom')[2] );

var line102 = s102.selectAll( 'line' );

s102.attr({width:sWidth25,height:sHeight25});

line102.attr({stroke: Color,strokeWidth: lineWidth });

function play102(){
  for(i=0;i<line102.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line102[i].animate({ 'x2' : 75, 'y2' : randomNum},speed,easing);
     line102[i+1].animate({ 'x1' : 75, 'y1' : randomNum},speed,easing);
     
   }else if(i==line102.length-1){
     line102[i].animate({ 'x1' : 75, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line102[i].animate({ 'x2' : 75, 'y2' : randomNum},speed,easing);
     line102[i+1].animate({ 'x1' : 75, 'y1' : randomNum},speed,easing);      
   }
  };
}

play102();
setInterval(play102, speed);
///////////////////////////////////////////////////////////////////////////////////////
var s103 = Snap( $('.slider-for-team .fifth svg.bottom')[3] );

var line103 = s103.selectAll( 'line' );

s103.attr({width:sWidth25,height:sHeight25});

line103.attr({stroke: Color,strokeWidth: lineWidth });

function play103(){
  for(i=0;i<line103.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line103[i].animate({ 'x2' : 120, 'y2' : randomNum},speed,easing);
     line103[i+1].animate({ 'x1' : 120, 'y1' : randomNum},speed,easing);
     
   }else if(i==line103.length-1){
     line103[i].animate({ 'x1' : 120, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line103[i].animate({ 'x2' : 120, 'y2' : randomNum},speed,easing);
     line103[i+1].animate({ 'x1' : 120, 'y1' : randomNum},speed,easing);      
   }
  };
}

play103();
setInterval(play103, speed);


