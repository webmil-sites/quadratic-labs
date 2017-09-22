
var s40 = Snap( $('.slider-for-team .first svg.top')[0] );
var sWidth10 = 170;
var sHeight10 = 75;

var line40 = s40.selectAll( 'line' );
var grafSize10 = sWidth10/line40.length;
var Color = "#fff";

var lineWidth = .5;
var speed = 1500;
easing = mina.easeinout;

function getRandomSmall(){
  var randomNum;
  return Math.floor(Math.random()*55);
};

function getRandom(){
  var randomNum;
  return Math.floor(Math.random()*(200-50)+50);
};

s40.attr({width:sWidth10,height:sHeight10});

line40.attr({stroke: Color,strokeWidth: lineWidth });

function play44(){
  for(i=0;i<line40.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line40[i].animate({ 'x2' : randomNum, 'y2' : randomNum},speed,easing);
     line40[i+1].animate({ 'x1' : randomNum, 'y1' : randomNum},speed,easing);
     
   }else if(i==line40.length-1){
     line40[i].animate({ 'x1' : randomNum, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line40[i].animate({ 'x2' : randomNum, 'y2' : randomNum},speed,easing);
     line40[i+1].animate({ 'x1' : randomNum, 'y1' : randomNum},speed,easing);      
   }
  };
}

play44();
setInterval(play44, speed);
////////////////////////////////////////////////////////////////////////////////////////
var s41 = Snap( $('.slider-for-team .first svg.top')[1] );

var line41 = s41.selectAll( 'line' );

s41.attr({width:sWidth10,height:sHeight10});

line41.attr({stroke: Color,strokeWidth: lineWidth });

function play45(){
  for(i=0;i<line41.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line41[i].animate({ 'x2' : 50, 'y2' : randomNum},speed,easing);
     line41[i+1].animate({ 'x1' : 50, 'y1' : randomNum},speed,easing);
     
   }else if(i==line41.length-1){
     line41[i].animate({ 'x1' : 50, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line41[i].animate({ 'x2' : 50, 'y2' : randomNum},speed,easing);
     line41[i+1].animate({ 'x1' : 50, 'y1' : randomNum},speed,easing);      
   }
  };
}

play45();
setInterval(play45, speed);
/////////////////////////////////////////////////////////////////////////////////////////
var s42 = Snap( $('.slider-for-team .first svg.top')[2] );

var line42 = s42.selectAll( 'line' );

s42.attr({width:sWidth10,height:sHeight10});

line42.attr({stroke: Color,strokeWidth: lineWidth });

function play46(){
  for(i=0;i<line42.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line42[i].animate({ 'x2' : 75, 'y2' : randomNum},speed,easing);
     line42[i+1].animate({ 'x1' : 75, 'y1' : randomNum},speed,easing);
     
   }else if(i==line42.length-1){
     line42[i].animate({ 'x1' : 75, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line42[i].animate({ 'x2' : 75, 'y2' : randomNum},speed,easing);
     line42[i+1].animate({ 'x1' : 75, 'y1' : randomNum},speed,easing);      
   }
  };
}

play46();
setInterval(play46, speed);
///////////////////////////////////////////////////////////////////////////////////////
var s43 = Snap( $('.slider-for-team .first svg.top')[3] );

var line43 = s43.selectAll( 'line' );

s43.attr({width:sWidth10,height:sHeight10});

line43.attr({stroke: Color,strokeWidth: lineWidth });

function play47(){
  for(i=0;i<line43.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line43[i].animate({ 'x2' : 120, 'y2' : randomNum},speed,easing);
     line43[i+1].animate({ 'x1' : 120, 'y1' : randomNum},speed,easing);
     
   }else if(i==line43.length-1){
     line43[i].animate({ 'x1' : 120, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line43[i].animate({ 'x2' : 120, 'y2' : randomNum},speed,easing);
     line43[i+1].animate({ 'x1' : 120, 'y1' : randomNum},speed,easing);      
   }
  };
}

play47();
setInterval(play47, speed);

/////////////////////////////////////////////////////////////////////////////////////////////

var s44 = Snap( $('.slider-for-team .first svg.middle')[0] );
var sWidth11 = 120;
var sHeight11 = 75;

var line44 = s44.selectAll( 'line' );
var grafSize11 = sWidth11/line44.length;

s44.attr({width:sWidth11,height:sHeight11});

line44.attr({stroke: Color,strokeWidth: lineWidth });

function play48(){
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
}

play48();
setInterval(play48, speed);
////////////////////////////////////////////////////////////////////////////////////////
var s45 = Snap( $('.slider-for-team .first svg.middle')[1] );

var line45 = s45.selectAll( 'line' );

s45.attr({width:sWidth11,height:sHeight11});

line45.attr({stroke: Color,strokeWidth: lineWidth });

function play49(){
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
}

play49();
setInterval(play49, speed);
/////////////////////////////////////////////////////////////////////////////////////////
var s46 = Snap( $('.slider-for-team .first svg.middle')[2] );

var line46 = s46.selectAll( 'line' );

s46.attr({width:sWidth11,height:sHeight11});

line46.attr({stroke: Color,strokeWidth: lineWidth });

function play50(){
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
}

play50();
setInterval(play50, speed);
///////////////////////////////////////////////////////////////////////////////////////
var s47 = Snap( $('.slider-for-team .first svg.middle')[3] );

var line47 = s47.selectAll( 'line' );

s47.attr({width:sWidth11,height:sHeight11});

line47.attr({stroke: Color,strokeWidth: lineWidth });

function play51(){
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
}

play51();
setInterval(play51, speed);

//////////////////////////////////////////////////////////////////////////////////////////

var s48 = Snap( $('.slider-for-team .first svg.bottom')[0] );
var sWidth12 = 170;
var sHeight12 = 75;

var line48 = s48.selectAll( 'line' );
var grafSize12 = sWidth12/line48.length;

function getRandomSmall(){
  var randomNum;
  return Math.floor(Math.random()*55);
};

s48.attr({width:sWidth12,height:sHeight12});

line48.attr({stroke: Color,strokeWidth: lineWidth });

function play52(){
  for(i=0;i<line48.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line48[i].animate({ 'x2' : randomNum, 'y2' : randomNum},speed,easing);
     line48[i+1].animate({ 'x1' : randomNum, 'y1' : randomNum},speed,easing);
     
   }else if(i==line48.length-1){
     line48[i].animate({ 'x1' : randomNum, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line48[i].animate({ 'x2' : randomNum, 'y2' : randomNum},speed,easing);
     line48[i+1].animate({ 'x1' : randomNum, 'y1' : randomNum},speed,easing);      
   }
  };
}

play52();
setInterval(play52, speed);
////////////////////////////////////////////////////////////////////////////////////////
var s49 = Snap( $('.slider-for-team .first svg.bottom')[1] );

var line49 = s49.selectAll( 'line' );

s49.attr({width:sWidth12,height:sHeight12});

line49.attr({stroke: Color,strokeWidth: lineWidth });

function play53(){
  for(i=0;i<line49.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line49[i].animate({ 'x2' : 50, 'y2' : randomNum},speed,easing);
     line49[i+1].animate({ 'x1' : 50, 'y1' : randomNum},speed,easing);
     
   }else if(i==line49.length-1){
     line49[i].animate({ 'x1' : 50, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line49[i].animate({ 'x2' : 50, 'y2' : randomNum},speed,easing);
     line49[i+1].animate({ 'x1' : 50, 'y1' : randomNum},speed,easing);      
   }
  };
}

play53();
setInterval(play53, speed);
/////////////////////////////////////////////////////////////////////////////////////////
var s50 = Snap( $('.slider-for-team .first svg.bottom')[2] );

var line50 = s50.selectAll( 'line' );

s50.attr({width:sWidth12,height:sHeight12});

line50.attr({stroke: Color,strokeWidth: lineWidth });

function play54(){
  for(i=0;i<line50.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line50[i].animate({ 'x2' : 75, 'y2' : randomNum},speed,easing);
     line50[i+1].animate({ 'x1' : 75, 'y1' : randomNum},speed,easing);
     
   }else if(i==line50.length-1){
     line50[i].animate({ 'x1' : 75, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line50[i].animate({ 'x2' : 75, 'y2' : randomNum},speed,easing);
     line50[i+1].animate({ 'x1' : 75, 'y1' : randomNum},speed,easing);      
   }
  };
}

play54();
setInterval(play54, speed);
///////////////////////////////////////////////////////////////////////////////////////
var s51 = Snap( $('.slider-for-team .first svg.bottom')[3] );

var line51 = s51.selectAll( 'line' );

s51.attr({width:sWidth12,height:sHeight12});

line51.attr({stroke: Color,strokeWidth: lineWidth });

function play55(){
  for(i=0;i<line51.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line51[i].animate({ 'x2' : 120, 'y2' : randomNum},speed,easing);
     line51[i+1].animate({ 'x1' : 120, 'y1' : randomNum},speed,easing);
     
   }else if(i==line51.length-1){
     line51[i].animate({ 'x1' : 120, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line51[i].animate({ 'x2' : 120, 'y2' : randomNum},speed,easing);
     line51[i+1].animate({ 'x1' : 120, 'y1' : randomNum},speed,easing);      
   }
  };
}

play55();
setInterval(play55, speed);


