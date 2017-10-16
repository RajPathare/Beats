var song;
var button;
var amp;

var prevv = [];


function toggleSong(){
  if(song.isPlaying()){
    song.pause();
    button.html("play");
    
  }
  else
  {
    song.play();
    button.html("pause")
  }
  
  }
  
function preload(){
  song = loadSound('ShapeofYou.mp3');
  
}

function setup(){
  createCanvas(1390,850);
  angleMode(DEGREES);
  button = createButton('pause');
  button.mousePressed(toggleSong);
  song.play();
  amp = new p5.Amplitude();
  
  
}

function draw(){
  background(0,200);
  var vol=amp.getLevel();
    
  prevv.push(vol);
  stroke(random(150));
  noFill();
  
  translate(width / 2,height / 2);
  beginShape();
  for(var i = 0;i < 360; i++){
    var r1 = map(prevv[i] , 0 , 1 ,100 , 500);;
    var x1 = r1 * cos(i);
    var y1 = r1 * sin(i);

    vertex(x1,y1);
  }
  endShape();
  
  stroke(255,0,0);
  beginShape();
  for(var j = 0;j < 360; j++){
    var r2 = map(prevv[j] , 0 , 1 ,100 , 1000);;
    var x2 = r2 * cos(j);
    var y2 = r2 * sin(j);

    vertex(x2,y2);
  }
  endShape();
  
  beginShape();
  for(var i = 0;i < 360; i++){
    var r1 = map(prevv[i] , 0 , 1 ,100 , 250);;
    var x1 = r1 * cos(i);
    var y1 = r1 * sin(i);

    vertex(x1,y1);
  }
  endShape();
  
  stroke(random(150));
  
  beginShape();
  for(var i = 0;i < 360; i++){
    var r1 = map(prevv[i] , 0 , 1 ,100 , 125);;
    var x1 = r1 * cos(i);
    var y1 = r1 * sin(i);

    vertex(x1,y1);
  }
  endShape();
  
  fill(255,0,0,50);
  beginShape();
  for(var i = 0;i < 360; i++){
    var r1 = map(prevv[i] , 0 , 1 ,100 , 60);;
    var x1 = r1 * cos(i);
    var y1 = r1 * sin(i);

    vertex(x1,y1);
  }
  endShape();
  
  
  
  
  if(prevv.length > 360){
    
    prevv.splice(0,1);
    
  }
  
  

}
