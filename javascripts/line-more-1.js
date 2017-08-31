
var s16 = Snap( $('.slider-more .first svg.top')[0] );
var sWidth4 = 300;
var sHeight4 = 200;

var line16 = s16.selectAll( 'line' );
var grafSize4 = sWidth4/line16.length;

s16.attr({width:sWidth4,height:sHeight4});

line16.attr({stroke: Color,strokeWidth: lineWidth });

for(i=0;i<line16.length;i++){
  if(i==0){
    line16[i].attr({x1:grafSize4*i,x2:grafSize4*(i+1),y2:sHeight4});
  }else if (i!==0){
    if(i==line16.length-1){
      line16[i].attr({x1:grafSize4*i,x2:grafSize4*(i+1),y1:sHeight4});
    } else {
      if((i%2)==0){
    line16[i].attr({x1:grafSize4*i,x2:grafSize4*(i+1),y1:sHeight4, y2:sHeight4});
  }else {
    line16[i].attr({x1:grafSize4*i,x2:grafSize4*(i+1),y1:sHeight4, y2:sHeight4});
  }
    }
  } 
};

setInterval(function(){
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
},speed);
////////////////////////////////////////////////////////////////////////////////////////
var s17 = Snap( $('.slider-more .first svg.top')[1] );

var line17 = s17.selectAll( 'line' );


s17.attr({width:sWidth4,height:sHeight4});

line17.attr({stroke: Color,strokeWidth: lineWidth });

for(i=0;i<line17.length;i++){
  if(i==0){
    line17[i].attr({x1:grafSize4*i,x2:grafSize4*(i+1),y2:sHeight4});
  }else if (i!==0){
    if(i==line17.length-1){
      line17[i].attr({x1:grafSize4*i,x2:grafSize4*(i+1),y1:sHeight4});
    } else {
      if((i%2)==0){
    line17[i].attr({x1:grafSize4*i,x2:grafSize4*(i+1),y1:sHeight4, y2:sHeight4});
  }else {
    line17[i].attr({x1:grafSize4*i,x2:grafSize4*(i+1),y1:sHeight4, y2:sHeight4});
  }
    }
  } 
};

setInterval(function(){
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
},speed);
/////////////////////////////////////////////////////////////////////////////////////////
var s18 = Snap( $('.slider-more .first svg.top')[2] );

var line18 = s18.selectAll( 'line' );


s18.attr({width:sWidth4,height:sHeight4});

line18.attr({stroke: Color,strokeWidth: lineWidth });

for(i=0;i<line18.length;i++){
  if(i==0){
    line18[i].attr({x1:grafSize4*i,x2:grafSize4*(i+1),y2:sHeight4});
  }else if (i!==0){
    if(i==line18.length-1){
      line18[i].attr({x1:grafSize4*i,x2:grafSize4*(i+1),y1:sHeight4});
    } else {
      if((i%2)==0){
    line18[i].attr({x1:grafSize4*i,x2:grafSize4*(i+1),y1:sHeight4, y2:sHeight4});
  }else {
    line18[i].attr({x1:grafSize4*i,x2:grafSize4*(i+1),y1:sHeight4, y2:sHeight4});
  }
    }
  } 
};

setInterval(function(){
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
},speed);
///////////////////////////////////////////////////////////////////////////////////////
var s19 = Snap( $('.slider-more .first svg.top')[3] );

var line19 = s19.selectAll( 'line' );


s19.attr({width:sWidth4,height:sHeight4});

line19.attr({stroke: Color,strokeWidth: lineWidth });

for(i=0;i<line19.length;i++){
  if(i==0){
    line19[i].attr({x1:grafSize4*i,x2:grafSize4*(i+1),y2:sHeight4});
  }else if (i!==0){
    if(i==line19.length-1){
      line19[i].attr({x1:grafSize4*i,x2:grafSize4*(i+1),y1:sHeight4});
    } else {
      if((i%2)==0){
    line19[i].attr({x1:grafSize4*i,x2:grafSize4*(i+1),y1:sHeight4, y2:sHeight4});
  }else {
    line19[i].attr({x1:grafSize4*i,x2:grafSize4*(i+1),y1:sHeight4, y2:sHeight4});
  }
    }
  } 
};

setInterval(function(){
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
},speed);

