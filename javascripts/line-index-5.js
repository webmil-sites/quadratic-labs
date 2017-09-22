
var s52 = Snap( $('.slider-for-index .third svg.bottom')[0] );
var sWidth13 = 300;
var sHeight13 = 200;

var line52 = s52.selectAll( 'line' );
var grafSize13 = sWidth13/line52.length;

s52.attr({width:sWidth13,height:sHeight13});

line52.attr({stroke: Color,strokeWidth: lineWidth });

function play16(){
  for(i=0;i<line52.length;i++){
   if(i==0){
     randomNum = getRandom();
     line52[i].animate({ 'x2' : randomNum/2, 'y2' : randomNum},speed,easing);
     line52[i+1].animate({ 'x1' : randomNum/2 , 'y1' : randomNum},speed,easing);
     
   }else if(i==line52.length-1){
     line52[i].animate({ 'x1' : randomNum/2 , 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandom();
     line52[i].animate({ 'x2' : randomNum/2 , 'y2' : randomNum},speed,easing);
     line52[i+1].animate({ 'x1' : randomNum/2 , 'y1' : randomNum},speed,easing);      
   }
  };
}

play16();
setInterval(play16, speed);
////////////////////////////////////////////////////////////////////////////////////////
var s53 = Snap( $('.slider-for-index .third svg.bottom')[1] );

var line53 = s53.selectAll( 'line' );


s53.attr({width:sWidth13,height:sHeight13});

line53.attr({stroke: Color,strokeWidth: lineWidth });

function play17(){
  for(i=0;i<line53.length;i++){
   if(i==0){
     randomNum = getRandom();
     line53[i].animate({ 'x2' : randomNum/2, 'y2' : randomNum},speed,easing);
     line53[i+1].animate({ 'x1' : randomNum/2 , 'y1' : randomNum},speed,easing);
     
   }else if(i==line53.length-1){
     line53[i].animate({ 'x1' : randomNum/2 , 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandom();
     line53[i].animate({ 'x2' : randomNum/2, 'y2' : randomNum},speed,easing);
     line53[i+1].animate({ 'x1' : randomNum/2 , 'y1' : randomNum},speed,easing);      
   }
  };
}

play17();
setInterval(play17, speed);
/////////////////////////////////////////////////////////////////////////////////////////
var s54 = Snap( $('.slider-for-index .third svg.bottom')[2] );

var line54 = s54.selectAll( 'line' );


s54.attr({width:sWidth13,height:sHeight13});

line54.attr({stroke: Color,strokeWidth: lineWidth });

function play18(){
  for(i=0;i<line54.length;i++){
   if(i==0){
     randomNum = getRandom();
     line54[i].animate({ 'x2' : randomNum/2, 'y2' : randomNum},speed,easing);
     line54[i+1].animate({ 'x1' : randomNum/2, 'y1' : randomNum},speed,easing);
     
   }else if(i==line54.length-1){
     line54[i].animate({ 'x1' : randomNum/2, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandom();
     line54[i].animate({ 'x2' : randomNum/2, 'y2' : randomNum},speed,easing);
     line54[i+1].animate({ 'x1' : randomNum/2,  'y1' : randomNum},speed,easing);      
   }
  };
}

play18();
setInterval(play18, speed);
///////////////////////////////////////////////////////////////////////////////////////
var s55 = Snap( $('.slider-for-index .third svg.bottom')[3] );

var line55 = s55.selectAll( 'line' );


s55.attr({width:sWidth13,height:sHeight13});

line55.attr({stroke: Color,strokeWidth: lineWidth });

function play19(){
  for(i=0;i<line55.length;i++){
   if(i==0){
     randomNum = getRandom();
     line55[i].animate({ 'x2' : randomNum/2, 'y2' : randomNum},speed,easing);
     line55[i+1].animate({ 'x1' : randomNum/2, 'y1' : randomNum},speed,easing);
     
   }else if(i==line55.length-1){
     line55[i].animate({ 'x1' : randomNum/2 , 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandom();
     line55[i].animate({ 'x2' : randomNum/2, 'y2' : randomNum},speed,easing);
     line55[i+1].animate({ 'x1' : randomNum/2, 'y1' : randomNum},speed,easing);      
   }
  };
}

play19();
setInterval(play19, speed);

