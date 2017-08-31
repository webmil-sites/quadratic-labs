
var s4 = Snap( $('.slider-index .first svg.bottom')[0] );
var sWidth1 = 300;
var sHeight1 = 200;

var line4 = s4.selectAll( 'line' );
var grafSize1 = sWidth1/line4.length;

s4.attr({width:sWidth1,height:sHeight1});

line4.attr({stroke: Color,strokeWidth: lineWidth });

for(i=0;i<line4.length;i++){
  if(i==0){
    line4[i].attr({x1:grafSize1*i,x2:grafSize1*(i+1),y2:sHeight1});
  }else if (i!==0){
    if(i==line4.length-1){
      line4[i].attr({x1:grafSize1*i,x2:grafSize1*(i+1),y1:sHeight1});
    } else {
      if((i%2)==0){
    line4[i].attr({x1:grafSize1*i,x2:grafSize1*(i+1),y1:sHeight1, y2:sHeight1});
  }else {
    line4[i].attr({x1:grafSize1*i,x2:grafSize1*(i+1),y1:sHeight1, y2:sHeight1});
  }
    }
  } 
};

setInterval(function(){
  for(i=0;i<line4.length;i++){
   if(i==0){
     randomNum = getRandom();
     line4[i].animate({ 'x2' : randomNum/2, 'y2' : randomNum},speed,easing);
     line4[i+1].animate({ 'x1' : randomNum/2 , 'y1' : randomNum},speed,easing);
     
   }else if(i==line4.length-1){
     line4[i].animate({ 'x1' : randomNum/2 , 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandom();
     line4[i].animate({ 'x2' : randomNum/2 , 'y2' : randomNum},speed,easing);
     line4[i+1].animate({ 'x1' : randomNum/2 , 'y1' : randomNum},speed,easing);      
   }
  };
},speed);
////////////////////////////////////////////////////////////////////////////////////////
var s5 = Snap( $('.slider-index .first svg.bottom')[1] );

var line5 = s5.selectAll( 'line' );


s5.attr({width:sWidth1,height:sHeight1});

line5.attr({stroke: Color,strokeWidth: lineWidth });

for(i=0;i<line5.length;i++){
  if(i==0){
    line5[i].attr({x1:grafSize1*i,x2:grafSize1*(i+1),y2:sHeight1});
  }else if (i!==0){
    if(i==line5.length-1){
      line5[i].attr({x1:grafSize1*i,x2:grafSize1*(i+1),y1:sHeight1});
    } else {
      if((i%2)==0){
    line5[i].attr({x1:grafSize1*i,x2:grafSize1*(i+1),y1:sHeight1, y2:sHeight1});
  }else {
    line5[i].attr({x1:grafSize1*i,x2:grafSize1*(i+1),y1:sHeight1, y2:sHeight1});
  }
    }
  } 
};

setInterval(function(){
  for(i=0;i<line5.length;i++){
   if(i==0){
     randomNum = getRandom();
     line5[i].animate({ 'x2' : randomNum/2, 'y2' : randomNum},speed,easing);
     line5[i+1].animate({ 'x1' : randomNum/2 , 'y1' : randomNum},speed,easing);
     
   }else if(i==line5.length-1){
     line5[i].animate({ 'x1' : randomNum/2 , 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandom();
     line5[i].animate({ 'x2' : randomNum/2, 'y2' : randomNum},speed,easing);
     line5[i+1].animate({ 'x1' : randomNum/2 , 'y1' : randomNum},speed,easing);      
   }
  };
},speed);
/////////////////////////////////////////////////////////////////////////////////////////
var s6 = Snap( $('.slider-index .first svg.bottom')[2] );

var line6 = s6.selectAll( 'line' );


s6.attr({width:sWidth1,height:sHeight1});

line6.attr({stroke: Color,strokeWidth: lineWidth });

for(i=0;i<line6.length;i++){
  if(i==0){
    line6[i].attr({x1:grafSize1*i,x2:grafSize1*(i+1),y2:sHeight1});
  }else if (i!==0){
    if(i==line6.length-1){
      line6[i].attr({x1:grafSize1*i,x2:grafSize1*(i+1),y1:sHeight1});
    } else {
      if((i%2)==0){
    line6[i].attr({x1:grafSize1*i,x2:grafSize1*(i+1),y1:sHeight1, y2:sHeight1});
  }else {
    line6[i].attr({x1:grafSize1*i,x2:grafSize1*(i+1),y1:sHeight1, y2:sHeight1});
  }
    }
  } 
};

setInterval(function(){
  for(i=0;i<line6.length;i++){
   if(i==0){
     randomNum = getRandom();
     line6[i].animate({ 'x2' : randomNum/2, 'y2' : randomNum},speed,easing);
     line6[i+1].animate({ 'x1' : randomNum/2, 'y1' : randomNum},speed,easing);
     
   }else if(i==line6.length-1){
     line6[i].animate({ 'x1' : randomNum/2, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandom();
     line6[i].animate({ 'x2' : randomNum/2, 'y2' : randomNum},speed,easing);
     line6[i+1].animate({ 'x1' : randomNum/2,  'y1' : randomNum},speed,easing);      
   }
  };
},speed);
///////////////////////////////////////////////////////////////////////////////////////
var s7 = Snap( $('.slider-index .first svg.bottom')[3] );

var line7 = s7.selectAll( 'line' );


s7.attr({width:sWidth1,height:sHeight1});

line7.attr({stroke: Color,strokeWidth: lineWidth });

for(i=0;i<line7.length;i++){
  if(i==0){
    line7[i].attr({x1:grafSize1*i,x2:grafSize1*(i+1),y2:sHeight1});
  }else if (i!==0){
    if(i==line7.length-1){
      line7[i].attr({x1:grafSize1*i,x2:grafSize1*(i+1),y1:sHeight1});
    } else {
      if((i%2)==0){
    line7[i].attr({x1:grafSize1*i,x2:grafSize1*(i+1),y1:sHeight1, y2:sHeight1});
  }else {
    line7[i].attr({x1:grafSize1*i,x2:grafSize1*(i+1),y1:sHeight1, y2:sHeight1});
  }
    }
  } 
};

setInterval(function(){
  for(i=0;i<line7.length;i++){
   if(i==0){
     randomNum = getRandom();
     line7[i].animate({ 'x2' : randomNum/2, 'y2' : randomNum},speed,easing);
     line7[i+1].animate({ 'x1' : randomNum/2, 'y1' : randomNum},speed,easing);
     
   }else if(i==line7.length-1){
     line7[i].animate({ 'x1' : randomNum/2 , 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandom();
     line7[i].animate({ 'x2' : randomNum/2, 'y2' : randomNum},speed,easing);
     line7[i+1].animate({ 'x1' : randomNum/2, 'y1' : randomNum},speed,easing);      
   }
  };
},speed);

