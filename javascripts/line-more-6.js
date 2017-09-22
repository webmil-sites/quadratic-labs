
var s36 = Snap( $('.slider-for-more .third #tab-2 svg.bottom')[0] );
var sWidth9 = 400;
var sHeight9 = 500;

var line36 = s36.selectAll( 'line' );
var grafSize9 = sWidth9/line36.length;

s36.attr({width:sWidth9,height:sHeight9});

line36.attr({stroke: Color,strokeWidth: lineWidth });

function getRandomLarge(){
  var randomNum;
  return Math.floor(Math.random()*(400-50)+50);
};

function play40(){
  for(i=0;i<line36.length;i++){
   if(i==0){
     randomNum = getRandomLarge();
     line36[i].animate({ 'x2' : randomNum, 'y2' : 300},speed,easing);
     line36[i+1].animate({ 'x1' : randomNum, 'y1' : 300},speed,easing);
     
   }else if(i==line36.length-1){
     line36[i].animate({ 'x1' : randomNum, 'y1' : 50},speed,easing);
   }else{
     randomNum = getRandomLarge();
     line36[i].animate({ 'x2' : randomNum, 'y2' : 50},speed,easing);
     line36[i+1].animate({ 'x1' : randomNum, 'y1' : 300},speed,easing);      
   }
  };
}

play40();
setInterval(play40, speed);
////////////////////////////////////////////////////////////////////////////////////////
var s37 = Snap( $('.slider-for-more .third #tab-2 svg.bottom')[1] );

var line37 = s37.selectAll( 'line' );

s37.attr({width:sWidth9,height:sHeight9});

line37.attr({stroke: Color,strokeWidth: lineWidth });

function play41(){
  for(i=0;i<line37.length;i++){
   if(i==0){
     randomNum = getRandomLarge();
     line37[i].animate({ 'x2' : randomNum, 'y2' : 350},speed,easing);
     line37[i+1].animate({ 'x1' : randomNum, 'y1' : 350},speed,easing);
     
   }else if(i==line37.length-1){
     line37[i].animate({ 'x1' : randomNum, 'y1' : 125},speed,easing);
   }else{
     randomNum = getRandomLarge();
     line37[i].animate({ 'x2' : randomNum, 'y2' : 125},speed,easing);
     line37[i+1].animate({ 'x1' : randomNum, 'y1' : 350},speed,easing);      
   }
  };
}

play41();
setInterval(play41, speed);
/////////////////////////////////////////////////////////////////////////////////////////
var s38 = Snap( $('.slider-for-more .third #tab-2 svg.bottom')[2] );

var line38 = s38.selectAll( 'line' );

s38.attr({width:sWidth9,height:sHeight9});

line38.attr({stroke: Color,strokeWidth: lineWidth });

function play42(){
  for(i=0;i<line38.length;i++){
   if(i==0){
     randomNum = getRandomLarge();
     line38[i].animate({ 'x2' : randomNum, 'y2' : 250},speed,easing);
     line38[i+1].animate({ 'x1' : randomNum, 'y1' : 250},speed,easing);
     
   }else if(i==line38.length-1){
     line38[i].animate({ 'x1' : randomNum, 'y1' : 100},speed,easing);
   }else{
     randomNum = getRandomLarge();
     line38[i].animate({ 'x2' : randomNum, 'y2' : 100},speed,easing);
     line38[i+1].animate({ 'x1' : randomNum,  'y1' : 250},speed,easing);      
   }
  };
}

play42();
setInterval(play42, speed);
///////////////////////////////////////////////////////////////////////////////////////
var s39 = Snap( $('.slider-for-more .third #tab-2 svg.bottom')[3] );

var line39 = s39.selectAll( 'line' );

s39.attr({width:sWidth9,height:sHeight9});

line39.attr({stroke: Color,strokeWidth: lineWidth });

function play43(){
  for(i=0;i<line39.length;i++){
   if(i==0){
     randomNum = getRandomLarge();
     line39[i].animate({ 'x2' : randomNum, 'y2' : 400},speed,easing);
     line39[i+1].animate({ 'x1' : randomNum, 'y1' : 400},speed,easing);
     
   }else if(i==line39.length-1){
     line39[i].animate({ 'x1' : randomNum, 'y1' : 200},speed,easing);
   }else{
     randomNum = getRandomLarge();
     line39[i].animate({ 'x2' : randomNum, 'y2' : 200},speed,easing);
     line39[i+1].animate({ 'x1' : randomNum, 'y1' : 400},speed,easing);      
   }
  };
}

play43();
setInterval(play43, speed);

