
var s48 = Snap( $('.slider-for-team svg.bottom')[0] );
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

setInterval(function(){
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
},speed);
////////////////////////////////////////////////////////////////////////////////////////
var s49 = Snap( $('.slider-for-team svg.bottom')[1] );

var line49 = s49.selectAll( 'line' );

s49.attr({width:sWidth12,height:sHeight12});

line49.attr({stroke: Color,strokeWidth: lineWidth });

setInterval(function(){
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
},speed);
/////////////////////////////////////////////////////////////////////////////////////////
var s50 = Snap( $('.slider-for-team svg.bottom')[2] );

var line50 = s50.selectAll( 'line' );

s50.attr({width:sWidth12,height:sHeight12});

line50.attr({stroke: Color,strokeWidth: lineWidth });

setInterval(function(){
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
},speed);
///////////////////////////////////////////////////////////////////////////////////////
var s51 = Snap( $('.slider-for-team svg.bottom')[3] );

var line51 = s51.selectAll( 'line' );

s51.attr({width:sWidth12,height:sHeight12});

line51.attr({stroke: Color,strokeWidth: lineWidth });

setInterval(function(){
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
},speed);


