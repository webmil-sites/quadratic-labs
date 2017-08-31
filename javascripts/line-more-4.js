
var s28 = Snap( $('.slider-more .second svg.bottom')[0] );
var sWidth7 = 1200;
var sHeight7 = 300;

var line28 = s28.selectAll( 'line' );
var grafSize7 = sWidth7/line28.length;

s28.attr({width:sWidth7,height:sHeight7});

line28.attr({stroke: Color,strokeWidth: lineWidth });

for(i=0;i<line28.length;i++){
  if(i==0){
    line28[i].attr({x1:grafSize7*i,x2:grafSize7*(i+1),y2:sHeight7});
  }else if (i!==0){
    if(i==line28.length-1){
      line28[i].attr({x1:grafSize7*i,y1:sHeight7});
    } else {
      if((i%2)==0){
    line28[i].attr({x1:grafSize7*i,x2:grafSize7*(i+1),y1:sHeight7});
  }else {
    line28[i].attr({x1:grafSize7*i,x2:grafSize7*(i+1),y1:sHeight7, y2:sHeight7});
  }
    }
  } 
};


setInterval(function(){
  for(i=0;i<line28.length;i++){
   if(i==0){
     randomNum = getRandom();
     line28[i].animate({ 'x2' : 500, 'y2' : randomNum},speed,easing);
     line28[i+1].animate({ 'x1' : 500, 'y1' : randomNum},speed,easing);
     
   }else if(i==line28.length-1){
     line28[i].animate({ 'x1' : 1000, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandom();
     line28[i].animate({ 'x2' : 1000, 'y2' : randomNum},speed,easing);
     line28[i+1].animate({ 'x1' : 500, 'y1' : randomNum},speed,easing);      
   }
  };
},speed);
////////////////////////////////////////////////////////////////////////////////////////
var s29 = Snap( $('.slider-more .second svg.bottom')[1] );

var line29 = s29.selectAll( 'line' );


s29.attr({width:sWidth7,height:sHeight7});

line29.attr({stroke: Color,strokeWidth: lineWidth });

for(i=0;i<line29.length;i++){
  if(i==0){
    line29[i].attr({x1:grafSize7*i,x2:grafSize7*(i+1),y2:sHeight7});
  }else if (i!==0){
    if(i==line29.length-1){
      line29[i].attr({x1:grafSize7*i,y1:sHeight7});
    } else {
      if((i%2)==0){
    line29[i].attr({x1:grafSize7*i,x2:grafSize7*(i+1),y1:sHeight7, y2:sHeight7});
  }else {
    line29[i].attr({x1:grafSize7*i,x2:grafSize7*(i+1),y1:sHeight7, y2:sHeight7});
  }
    }
  } 
};

setInterval(function(){
  for(i=0;i<line29.length;i++){
   if(i==0){
     randomNum = getRandom();
     line29[i].animate({ 'x2' : 750, 'y2' : randomNum},speed,easing);
     line29[i+1].animate({ 'x1' : 750, 'y1' : randomNum},speed,easing);
     
   }else if(i==line29.length-1){
     line29[i].animate({ 'x1' : 1100, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandom();
     line29[i].animate({ 'x2' : 1100, 'y2' : randomNum},speed,easing);
     line29[i+1].animate({ 'x1' : 750, 'y1' : randomNum},speed,easing);      
   }
  };
},speed);
/////////////////////////////////////////////////////////////////////////////////////////
var s30 = Snap( $('.slider-more .second svg.bottom')[2] );

var line30 = s30.selectAll( 'line' );


s30.attr({width:sWidth7,height:sHeight7});

line30.attr({stroke: Color,strokeWidth: lineWidth });

for(i=0;i<line30.length;i++){
  if(i==0){
    line30[i].attr({x1:grafSize7*i,x2:grafSize7*(i+1),y2:sHeight7});
  }else if (i!==0){
    if(i==line30.length-1){
      line30[i].attr({x1:grafSize7*i,y1:sHeight7});
    } else {
      if((i%2)==0){
    line30[i].attr({x1:grafSize7*i,x2:grafSize7*(i+1),y1:sHeight7, y2:sHeight7});
  }else {
    line30[i].attr({x1:grafSize7*i,x2:grafSize7*(i+1),y1:sHeight7, y2:sHeight7});
  }
    }
  } 
};

setInterval(function(){
  for(i=0;i<line30.length;i++){
   if(i==0){
     randomNum = getRandom();
     line30[i].animate({ 'x2' : 600, 'y2' : randomNum},speed,easing);
     line30[i+1].animate({ 'x1' : 600, 'y1' : randomNum},speed,easing);
     
   }else if(i==line30.length-1){
     line30[i].animate({ 'x1' : 1000, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandom();
     line30[i].animate({ 'x2' : 1000, 'y2' : randomNum},speed,easing);
     line30[i+1].animate({ 'x1' : 600, 'y1' : randomNum},speed,easing);      
   }
  };
},speed);
///////////////////////////////////////////////////////////////////////////////////////
var s31 = Snap( $('.slider-more .second svg.bottom')[3] );

var line31 = s31.selectAll( 'line' );


s31.attr({width:sWidth7,height:sHeight7});

line31.attr({stroke: Color,strokeWidth: lineWidth });

for(i=0;i<line31.length;i++){
  if(i==0){
    line31[i].attr({x1:grafSize7*i,x2:grafSize7*(i+1),y2:sHeight7});
  }else if (i!==0){
    if(i==line31.length-1){
      line31[i].attr({x1:grafSize7*i,y1:sHeight7});
    } else {
      if((i%2)==0){
    line31[i].attr({x1:grafSize7*i,x2:grafSize7*(i+1),y1:sHeight7, y2:sHeight7});
  }else {
    line31[i].attr({x1:grafSize7*i,x2:grafSize7*(i+1),y1:sHeight7, y2:sHeight7});
  }
    }
  } 
};

setInterval(function(){
  for(i=0;i<line31.length;i++){
   if(i==0){
     randomNum = getRandom();
     line31[i].animate({ 'x2' : 400, 'y2' : randomNum},speed,easing);
     line31[i+1].animate({ 'x1' : 400, 'y1' : randomNum},speed,easing);
     
   }else if(i==line31.length-1){
     line31[i].animate({ 'x1' : 800, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandom();
     line31[i].animate({ 'x2' : 800, 'y2' : randomNum},speed,easing);
     line31[i+1].animate({ 'x1' : 400, 'y1' : randomNum},speed,easing);      
   }
  };
},speed);


