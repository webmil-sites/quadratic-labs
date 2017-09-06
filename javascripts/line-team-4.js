
var s80= Snap( $('.slider-for-team .fourth svg.top')[0] );
var sWidth20 = 170;
var sHeight20 = 75;

var line80 = s80.selectAll( 'line' );
var grafSize20 = sWidth20/line80.length;

s80.attr({width:sWidth20,height:sHeight20});

line80.attr({stroke: Color,strokeWidth: lineWidth });

setInterval(function(){
  for(i=0;i<line80.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line80[i].animate({ 'x2' : randomNum, 'y2' : randomNum},speed,easing);
     line80[i+1].animate({ 'x1' : randomNum, 'y1' : randomNum},speed,easing);
     
   }else if(i==line80.length-1){
     line80[i].animate({ 'x1' : randomNum, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line80[i].animate({ 'x2' : randomNum, 'y2' : randomNum},speed,easing);
     line80[i+1].animate({ 'x1' : randomNum, 'y1' : randomNum},speed,easing);      
   }
  };
},speed);
////////////////////////////////////////////////////////////////////////////////////////
var s81 = Snap( $('.slider-for-team .fourth svg.top')[1] );

var line81 = s81.selectAll( 'line' );

s81.attr({width:sWidth20,height:sHeight20});

line81.attr({stroke: Color,strokeWidth: lineWidth });

setInterval(function(){
  for(i=0;i<line81.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line81[i].animate({ 'x2' : 50, 'y2' : randomNum},speed,easing);
     line81[i+1].animate({ 'x1' : 50, 'y1' : randomNum},speed,easing);
     
   }else if(i==line81.length-1){
     line81[i].animate({ 'x1' : 50, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line81[i].animate({ 'x2' : 50, 'y2' : randomNum},speed,easing);
     line81[i+1].animate({ 'x1' : 50, 'y1' : randomNum},speed,easing);      
   }
  };
},speed);
/////////////////////////////////////////////////////////////////////////////////////////
var s82 = Snap( $('.slider-for-team .fourth svg.top')[2] );

var line82 = s82.selectAll( 'line' );

s82.attr({width:sWidth20,height:sHeight20});

line82.attr({stroke: Color,strokeWidth: lineWidth });

setInterval(function(){
  for(i=0;i<line82.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line82[i].animate({ 'x2' : 75, 'y2' : randomNum},speed,easing);
     line82[i+1].animate({ 'x1' : 75, 'y1' : randomNum},speed,easing);
     
   }else if(i==line82.length-1){
     line82[i].animate({ 'x1' : 75, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line82[i].animate({ 'x2' : 75, 'y2' : randomNum},speed,easing);
     line82[i+1].animate({ 'x1' : 75, 'y1' : randomNum},speed,easing);      
   }
  };
},speed);
///////////////////////////////////////////////////////////////////////////////////////
var s83 = Snap( $('.slider-for-team .fourth svg.top')[3] );

var line83 = s83.selectAll( 'line' );

s83.attr({width:sWidth20,height:sHeight20});

line83.attr({stroke: Color,strokeWidth: lineWidth });

setInterval(function(){
  for(i=0;i<line83.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line83[i].animate({ 'x2' : 120, 'y2' : randomNum},speed,easing);
     line83[i+1].animate({ 'x1' : 120, 'y1' : randomNum},speed,easing);
     
   }else if(i==line83.length-1){
     line83[i].animate({ 'x1' : 120, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line83[i].animate({ 'x2' : 120, 'y2' : randomNum},speed,easing);
     line83[i+1].animate({ 'x1' : 120, 'y1' : randomNum},speed,easing);      
   }
  };
},speed);

/////////////////////////////////////////////////////////////////////////////////////////////

var s84 = Snap( $('.slider-for-team .fourth svg.middle')[0] );
var sWidth21 = 120;
var sHeight21 = 75;

var line84 = s84.selectAll( 'line' );
var grafSize21 = sWidth21/line84.length;

s84.attr({width:sWidth21,height:sHeight21});

line84.attr({stroke: Color,strokeWidth: lineWidth });

setInterval(function(){
  for(i=0;i<line84.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line84[i].animate({ 'x2' : 20, 'y2' : randomNum},speed,easing);
     line84[i+1].animate({ 'x1' : 20, 'y1' : randomNum},speed,easing);
     
   }else if(i==line84.length-1){
     line84[i].animate({ 'x1' : 20, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line84[i].animate({ 'x2' : 20, 'y2' : randomNum},speed,easing);
     line84[i+1].animate({ 'x1' : 20, 'y1' : randomNum},speed,easing);      
   }
  };
},speed);
////////////////////////////////////////////////////////////////////////////////////////
var s85 = Snap( $('.slider-for-team .fourth svg.middle')[1] );

var line85 = s85.selectAll( 'line' );

s85.attr({width:sWidth21,height:sHeight21});

line85.attr({stroke: Color,strokeWidth: lineWidth });

setInterval(function(){
  for(i=0;i<line85.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line85[i].animate({ 'x2' : randomNum, 'y2' : randomNum},speed,easing);
     line85[i+1].animate({ 'x1' : randomNum, 'y1' : randomNum},speed,easing);
     
   }else if(i==line85.length-1){
     line85[i].animate({ 'x1' : randomNum, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line85[i].animate({ 'x2' : randomNum, 'y2' : randomNum},speed,easing);
     line85[i+1].animate({ 'x1' : randomNum, 'y1' : randomNum},speed,easing);      
   }
  };
},speed);
/////////////////////////////////////////////////////////////////////////////////////////
var s86 = Snap( $('.slider-for-team .fourth svg.middle')[2] );

var line86 = s86.selectAll( 'line' );

s86.attr({width:sWidth21,height:sHeight21});

line86.attr({stroke: Color,strokeWidth: lineWidth });

setInterval(function(){
  for(i=0;i<line86.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line86[i].animate({ 'x2' : 60, 'y2' : randomNum},speed,easing);
     line86[i+1].animate({ 'x1' : 60, 'y1' : randomNum},speed,easing);
     
   }else if(i==line86.length-1){
     line86[i].animate({ 'x1' : 60, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line86[i].animate({ 'x2' : 60, 'y2' : randomNum},speed,easing);
     line86[i+1].animate({ 'x1' : 60, 'y1' : randomNum},speed,easing);      
   }
  };
},speed);
///////////////////////////////////////////////////////////////////////////////////////
var s87 = Snap( $('.slider-for-team .fourth svg.middle')[3] );

var line87 = s87.selectAll( 'line' );

s87.attr({width:sWidth21,height:sHeight21});

line87.attr({stroke: Color,strokeWidth: lineWidth });

setInterval(function(){
  for(i=0;i<line87.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line87[i].animate({ 'x2' : 75, 'y2' : randomNum},speed,easing);
     line87[i+1].animate({ 'x1' : 75, 'y1' : randomNum},speed,easing);
     
   }else if(i==line87.length-1){
     line87[i].animate({ 'x1' : 75, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line87[i].animate({ 'x2' : 75, 'y2' : randomNum},speed,easing);
     line87[i+1].animate({ 'x1' : 75, 'y1' : randomNum},speed,easing);      
   }
  };
},speed);

//////////////////////////////////////////////////////////////////////////////////////////

var s88 = Snap( $('.slider-for-team .fourth svg.bottom')[0] );
var sWidth22 = 170;
var sHeight22 = 75;

var line88 = s88.selectAll( 'line' );
var grafSize22 = sWidth22/line88.length;

s88.attr({width:sWidth22,height:sHeight22});

line88.attr({stroke: Color,strokeWidth: lineWidth });

setInterval(function(){
  for(i=0;i<line88.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line88[i].animate({ 'x2' : randomNum, 'y2' : randomNum},speed,easing);
     line88[i+1].animate({ 'x1' : randomNum, 'y1' : randomNum},speed,easing);
     
   }else if(i==line88.length-1){
     line88[i].animate({ 'x1' : randomNum, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line88[i].animate({ 'x2' : randomNum, 'y2' : randomNum},speed,easing);
     line88[i+1].animate({ 'x1' : randomNum, 'y1' : randomNum},speed,easing);      
   }
  };
},speed);
////////////////////////////////////////////////////////////////////////////////////////
var s89 = Snap( $('.slider-for-team .fourth svg.bottom')[1] );

var line89 = s89.selectAll( 'line' );

s89.attr({width:sWidth22,height:sHeight22});

line89.attr({stroke: Color,strokeWidth: lineWidth });

setInterval(function(){
  for(i=0;i<line89.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line89[i].animate({ 'x2' : 50, 'y2' : randomNum},speed,easing);
     line89[i+1].animate({ 'x1' : 50, 'y1' : randomNum},speed,easing);
     
   }else if(i==line89.length-1){
     line89[i].animate({ 'x1' : 50, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line89[i].animate({ 'x2' : 50, 'y2' : randomNum},speed,easing);
     line89[i+1].animate({ 'x1' : 50, 'y1' : randomNum},speed,easing);      
   }
  };
},speed);
/////////////////////////////////////////////////////////////////////////////////////////
var s90 = Snap( $('.slider-for-team .fourth svg.bottom')[2] );

var line90 = s90.selectAll( 'line' );

s90.attr({width:sWidth22,height:sHeight22});

line90.attr({stroke: Color,strokeWidth: lineWidth });

setInterval(function(){
  for(i=0;i<line90.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line90[i].animate({ 'x2' : 75, 'y2' : randomNum},speed,easing);
     line90[i+1].animate({ 'x1' : 75, 'y1' : randomNum},speed,easing);
     
   }else if(i==line90.length-1){
     line90[i].animate({ 'x1' : 75, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line90[i].animate({ 'x2' : 75, 'y2' : randomNum},speed,easing);
     line90[i+1].animate({ 'x1' : 75, 'y1' : randomNum},speed,easing);      
   }
  };
},speed);
///////////////////////////////////////////////////////////////////////////////////////
var s91 = Snap( $('.slider-for-team .fourth svg.bottom')[3] );

var line91 = s91.selectAll( 'line' );

s91.attr({width:sWidth22,height:sHeight22});

line91.attr({stroke: Color,strokeWidth: lineWidth });

setInterval(function(){
  for(i=0;i<line91.length;i++){
   if(i==0){
     randomNum = getRandomSmall();
     line91[i].animate({ 'x2' : 120, 'y2' : randomNum},speed,easing);
     line91[i+1].animate({ 'x1' : 120, 'y1' : randomNum},speed,easing);
     
   }else if(i==line91.length-1){
     line91[i].animate({ 'x1' : 120, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandomSmall();
     line91[i].animate({ 'x2' : 120, 'y2' : randomNum},speed,easing);
     line91[i+1].animate({ 'x1' : 120, 'y1' : randomNum},speed,easing);      
   }
  };
},speed);


