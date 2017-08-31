
var s36 = Snap( $('.slider-more .third #tab-2 svg.bottom')[0] );
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

for(i=0;i<line36.length;i++){
  if(i==0){
    line36[i].attr({x2:grafSize9*(i+1),y2:sHeight9});
  }else if (i!==0){
    if(i==line36.length-1){
      line36[i].attr({x1:grafSize9*i,y1:sHeight9});
    } else {
      if((i%2)==0){
    line36[i].attr({x1:grafSize9*i,x2:grafSize9*(i+1),y1:sHeight9, y2:sHeight9});
  }else {
    line36[i].attr({x1:grafSize9*i,x2:grafSize9*(i+1),y1:sHeight9, y2:sHeight9});
  }
    }
  } 
};

setInterval(function(){
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
},speed);
////////////////////////////////////////////////////////////////////////////////////////
var s37 = Snap( $('.slider-more .third #tab-2 svg.bottom')[1] );

var line37 = s37.selectAll( 'line' );


s37.attr({width:sWidth9,height:sHeight9});

line37.attr({stroke: Color,strokeWidth: lineWidth });

for(i=0;i<line37.length;i++){
  if(i==0){
    line37[i].attr({x2:grafSize9*(i+1),y2:sHeight9});
  }else if (i!==0){
    if(i==line37.length-1){
      line37[i].attr({x1:grafSize9*i,y1:sHeight9});
    } else {
      if((i%2)==0){
    line37[i].attr({x1:grafSize9*i,x2:grafSize9*(i+1),y1:sHeight9, y2:sHeight9});
  }else {
    line37[i].attr({x1:grafSize9*i,x2:grafSize9*(i+1),y1:sHeight9, y2:sHeight9});
  }
    }
  } 
};

setInterval(function(){
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
},speed);
/////////////////////////////////////////////////////////////////////////////////////////
var s38 = Snap( $('.slider-more .third #tab-2 svg.bottom')[2] );

var line38 = s38.selectAll( 'line' );


s38.attr({width:sWidth9,height:sHeight9});

line38.attr({stroke: Color,strokeWidth: lineWidth });

for(i=0;i<line38.length;i++){
  if(i==0){
    line38[i].attr({x2:grafSize9*(i+1),y2:sHeight9});
  }else if (i!==0){
    if(i==line38.length-1){
      line38[i].attr({x1:grafSize9*i,y1:sHeight9});
    } else {
      if((i%2)==0){
    line38[i].attr({x1:grafSize9*i,x2:grafSize9*(i+1),y1:sHeight9, y2:sHeight9});
  }else {
    line38[i].attr({x1:grafSize9*i,x2:grafSize9*(i+1),y1:sHeight9, y2:sHeight9});
  }
    }
  } 
};

setInterval(function(){
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
},speed);
///////////////////////////////////////////////////////////////////////////////////////
var s39 = Snap( $('.slider-more .third #tab-2 svg.bottom')[3] );

var line39 = s39.selectAll( 'line' );


s39.attr({width:sWidth9,height:sHeight9});

line39.attr({stroke: Color,strokeWidth: lineWidth });

for(i=0;i<line39.length;i++){
  if(i==0){
    line39[i].attr({x2:grafSize9*(i+1),y2:sHeight9});
  }else if (i!==0){
    if(i==line39.length-1){
      line39[i].attr({x1:grafSize9*i,y1:sHeight9});
    } else {
      if((i%2)==0){
    line39[i].attr({x1:grafSize9*i,x2:grafSize9*(i+1),y1:sHeight9, y2:sHeight9});
  }else {
    line39[i].attr({x1:grafSize9*i,x2:grafSize9*(i+1),y1:sHeight9, y2:sHeight9});
  }
    }
  } 
};

setInterval(function(){
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
},speed);

