
var s16 = Snap( $('.slider-for-more .first svg.top')[0] );
var sWidth4 = 300;
var sHeight4 = 200;

var line16 = s16.selectAll( 'line' );
var grafSize4 = sWidth4/line16.length;
var Color = "#fff";

var lineWidth = .5;
var speed = 1500;
easing = mina.easeinout;

function getRandom(){
  var randomNum;
  return Math.floor(Math.random()*(200-50)+50);
};

s16.attr({width:sWidth4,height:sHeight4});

line16.attr({stroke: Color,strokeWidth: lineWidth });

function play20(){
  for(i=0;i<line16.length;i++){
   if(i==0){
     randomNum = getRandom();
     line16[i].animate({ 'x2' : randomNum/2, 'y2' : randomNum},speed,easing);
     line16[i+1].animate({ 'x1' : randomNum/2 , 'y1' : randomNum},speed,easing);
     
   }else if(i==line16.length-1){
     line16[i].animate({ 'x1' : randomNum/2 , 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandom();
     line16[i].animate({ 'x2' : randomNum/2 , 'y2' : randomNum},speed,easing);
     line16[i+1].animate({ 'x1' : randomNum/2 , 'y1' : randomNum},speed,easing);      
   }
  };
}

play20();
setInterval(play20, speed);
////////////////////////////////////////////////////////////////////////////////////////
var s17 = Snap( $('.slider-for-more .first svg.top')[1] );

var line17 = s17.selectAll( 'line' );


s17.attr({width:sWidth4,height:sHeight4});

line17.attr({stroke: Color,strokeWidth: lineWidth });

function play21(){
  for(i=0;i<line17.length;i++){
   if(i==0){
     randomNum = getRandom();
     line17[i].animate({ 'x2' : randomNum/2, 'y2' : randomNum},speed,easing);
     line17[i+1].animate({ 'x1' : randomNum/2 , 'y1' : randomNum},speed,easing);
     
   }else if(i==line17.length-1){
     line17[i].animate({ 'x1' : randomNum/2 , 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandom();
     line17[i].animate({ 'x2' : randomNum/2, 'y2' : randomNum},speed,easing);
     line17[i+1].animate({ 'x1' : randomNum/2 , 'y1' : randomNum},speed,easing);      
   }
  };
}

play21();
setInterval(play21, speed);
/////////////////////////////////////////////////////////////////////////////////////////
var s18 = Snap( $('.slider-for-more .first svg.top')[2] );

var line18 = s18.selectAll( 'line' );


s18.attr({width:sWidth4,height:sHeight4});

line18.attr({stroke: Color,strokeWidth: lineWidth });

function play22(){
  for(i=0;i<line18.length;i++){
   if(i==0){
     randomNum = getRandom();
     line18[i].animate({ 'x2' : randomNum/2, 'y2' : randomNum},speed,easing);
     line18[i+1].animate({ 'x1' : randomNum/2, 'y1' : randomNum},speed,easing);
     
   }else if(i==line18.length-1){
     line18[i].animate({ 'x1' : randomNum/2, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandom();
     line18[i].animate({ 'x2' : randomNum/2, 'y2' : randomNum},speed,easing);
     line18[i+1].animate({ 'x1' : randomNum/2,  'y1' : randomNum},speed,easing);      
   }
  };
}

play22();
setInterval(play22, speed);
///////////////////////////////////////////////////////////////////////////////////////
var s19 = Snap( $('.slider-for-more .first svg.top')[3] );

var line19 = s19.selectAll( 'line' );


s19.attr({width:sWidth4,height:sHeight4});

line19.attr({stroke: Color,strokeWidth: lineWidth });

function play23(){
  for(i=0;i<line19.length;i++){
   if(i==0){
     randomNum = getRandom();
     line19[i].animate({ 'x2' : randomNum/2, 'y2' : randomNum},speed,easing);
     line19[i+1].animate({ 'x1' : randomNum/2, 'y1' : randomNum},speed,easing);
     
   }else if(i==line19.length-1){
     line19[i].animate({ 'x1' : randomNum/2 , 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandom();
     line19[i].animate({ 'x2' : randomNum/2, 'y2' : randomNum},speed,easing);
     line19[i+1].animate({ 'x1' : randomNum/2, 'y1' : randomNum},speed,easing);      
   }
  };
}

play23();
setInterval(play23, speed);
