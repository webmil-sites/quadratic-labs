
var s40 = Snap( $('.slider-for-team svg.top')[0] );
var sWidth10 = 170;
var sHeight10 = 75;

var line40 = s40.selectAll( 'line' );
var grafSize10 = sWidth10/line40.length;

function getRandomSmall(){
  var randomNum;
  return Math.floor(Math.random()*55);
};

s40.attr({width:sWidth10,height:sHeight10});

line40.attr({stroke: Color,strokeWidth: lineWidth });

setInterval(function(){
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
},speed);
////////////////////////////////////////////////////////////////////////////////////////
var s41 = Snap( $('.slider-for-team svg.top')[1] );

var line41 = s41.selectAll( 'line' );

s41.attr({width:sWidth10,height:sHeight10});

line41.attr({stroke: Color,strokeWidth: lineWidth });

setInterval(function(){
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
},speed);
/////////////////////////////////////////////////////////////////////////////////////////
var s42 = Snap( $('.slider-for-team svg.top')[2] );

var line42 = s42.selectAll( 'line' );

s42.attr({width:sWidth10,height:sHeight10});

line42.attr({stroke: Color,strokeWidth: lineWidth });

setInterval(function(){
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
},speed);
///////////////////////////////////////////////////////////////////////////////////////
var s43 = Snap( $('.slider-for-team svg.top')[3] );

var line43 = s43.selectAll( 'line' );

s43.attr({width:sWidth10,height:sHeight10});

line43.attr({stroke: Color,strokeWidth: lineWidth });

setInterval(function(){
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
},speed);


