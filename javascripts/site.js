var s = Snap("#svgA");

function animLine(startPath, endPath) {
  var line = s.path(startPath).attr({
      fill: "none",
      stroke: "#fff",
      strokeWidth: 0.5
  });
  
  var animTime = 1500;

  function anim1(){
      line.animate({d: endPath}, animTime, mina.easeinout);
  }
  function anim2(){
      line.animate({d: startPath}, animTime, mina.easeinout);
  }
  setInterval(anim1, 2*animTime);
  setTimeout(function() {
    setInterval(anim2, 2*animTime);
  }, animTime)
}
//Top line
var x1Start = $("#main-nav ul li:first-child").position().left + ($("#main-nav ul li:first-child").width()*0.66);
var y1Start = $("#main-nav ul li:first-child").position().top + $("#main-nav ul li:first-child").height() - 10; 

var x1End = $( "h1" ).position().left + ($( "h1" ).width()/2) + 80;
var y1End = $( "h1" ).position().top;

var x1Dot = x1Start + (x1End - x1Start)/2;
var y1Dot = y1Start + (y1End - y1Start)/2;

//Bottom line

var x2End = $( "h1" ).position().left + ($( "h1" ).width()/2) - 100;
var y2End = $( "h1" ).position().top + $( "h1" ).height() + 50;

var x2Start = $("span#anchor").position().left + ($("span#anchor").width()/2);
var y2Start = $("body").height() - 195;

var x2Dot = x2Start + (x2End - x2Start)/2;
var y2Dot = y2Start + (y2End - y2Start)/2;
console.log($("span#anchor").position());

animLine(("M "+x1Start+" "+y1Start) + ("L "+(x1Dot - 20)+" "+(y1Dot + 20)) + ("L "+x1End+" "+y1End), ("M "+x1Start+" "+y1Start) + ("L "+(x1Dot+10)+" "+(y1Dot-10)) + ("L "+x1End+" "+y1End));
animLine(("M "+x1Start+" "+y1Start) + ("L "+(x1Dot - 30)+" "+(y1Dot + 25)) + ("L "+x1End+" "+y1End), ("M "+x1Start+" "+y1Start) + ("L "+(x1Dot+15)+" "+(y1Dot-15)) + ("L "+x1End+" "+y1End));
animLine(("M "+x1Start+" "+y1Start) + ("L "+(x1Dot - 15)+" "+(y1Dot + 15)) + ("L "+x1End+" "+y1End), ("M "+x1Start+" "+y1Start) + ("L "+(x1Dot+10)+" "+(y1Dot-15)) + ("L "+x1End+" "+y1End));
animLine(("M "+x1Start+" "+y1Start) + ("L "+(x1Dot - 10)+" "+(y1Dot + 15)) + ("L "+x1End+" "+y1End), ("M "+x1Start+" "+y1Start) + ("L "+(x1Dot+5)+" "+(y1Dot-5)) + ("L "+x1End+" "+y1End));


animLine(("M "+x2Start+" "+y2Start) + ("L "+(x2Dot - 10)+" "+(y2Dot + 15)) + ("L "+x2End+" "+y2End), ("M "+x2Start+" "+y2Start) + ("L "+(x2Dot+5)+" "+(y2Dot+15)) + ("L "+x2End+" "+y2End));
animLine(("M "+x2Start+" "+y2Start) + ("L "+(x2Dot - 15)+" "+(y2Dot + 15)) + ("L "+x2End+" "+y2End), ("M "+x2Start+" "+y2Start) + ("L "+(x2Dot+15)+" "+(y2Dot+15)) + ("L "+x2End+" "+y2End));
animLine(("M "+x2Start+" "+y2Start) + ("L "+(x2Dot - 20)+" "+(y2Dot + 15)) + ("L "+x2End+" "+y2End), ("M "+x2Start+" "+y2Start) + ("L "+(x2Dot+10)+" "+(y2Dot+15)) + ("L "+x2End+" "+y2End));
animLine(("M "+x2Start+" "+y2Start) + ("L "+(x2Dot - 25)+" "+(y2Dot + 10)) + ("L "+x2End+" "+y2End), ("M "+x2Start+" "+y2Start) + ("L "+(x2Dot+15)+" "+(y2Dot+20)) + ("L "+x2End+" "+y2End));
