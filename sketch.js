var socket;
// A wind direction vector
var wind;
var wind1;
var wind2;
var wind3;
var wind4;
var wind5;
var wind6;
var wind7;
var wind8;
var wind9;
var wind10;

// Circle position
var position;
var position1;
var position2;
var position3;
var position4;
var position5;
var position6;
var position7;
var position8;
var position9;
var position10;
var y = 100;
var r1 = random(0,1500);
var r2 = random(0, 255);



function setup() {
  createCanvas(1500, 600);
  stroke(0);     // Set line drawing color to white
  frameRate(30);
  // Request the data from apixu.com
  var url = 'http://api.apixu.com/v1/current.json?key=6314221e0fcb445aa51171424170910&q=Paris';
  var url1 = 'http://api.apixu.com/v1/current.json?key=6314221e0fcb445aa51171424170910&q=07302';
  var url2 = 'http://api.apixu.com/v1/current.json?key=6314221e0fcb445aa51171424170910&q=K0H';
  var url3 = 'http://api.apixu.com/v1/current.json?key=6314221e0fcb445aa51171424170910&q=94087';
  var url4 = 'http://api.apixu.com/v1/current.json?key=6314221e0fcb445aa51171424170910&q=10003';
  var url5 = 'http://api.apixu.com/v1/current.json?key=6314221e0fcb445aa51171424170910&q=07310';
  var url6 = 'http://api.apixu.com/v1/current.json?key=6314221e0fcb445aa51171424170910&q=07302';
  var url7 = 'http://api.apixu.com/v1/current.json?key=6314221e0fcb445aa51171424170910&q=K0H';
  var url8 = 'http://api.apixu.com/v1/current.json?key=6314221e0fcb445aa51171424170910&q=94087';
  var url9 = 'http://api.apixu.com/v1/current.json?key=6314221e0fcb445aa51171424170910&q=10003';
  var url10 = 'http://api.apixu.com/v1/current.json?key=6314221e0fcb445aa51171424170910&q=10003';

  loadJSON(url, gotWeather);
  loadJSON(url1, gotWeather1);
  loadJSON(url2, gotWeather2);
  loadJSON(url3, gotWeather3);
  loadJSON(url4, gotWeather4);
  loadJSON(url5, gotWeather5);
  loadJSON(url6, gotWeather6);
  loadJSON(url7, gotWeather7);
  loadJSON(url8, gotWeather8);
  loadJSON(url9, gotWeather9);
  loadJSON(url10, gotWeather10);

  // Circle starts in the middle

  // wind starts as (0,0)
  wind = createVector();
  wind1 = createVector();
  wind2 = createVector();
  wind3 = createVector();
  wind4 = createVector();
  wind5 = createVector();
  wind6 = createVector();
  wind7 = createVector();
  wind8 = createVector();
  wind9 = createVector();
  wind10 = createVector();

  position = createVector(width/2, height/2);
  position1 = createVector(width/2, height/2);
  position2 = createVector(width/2, height/2);
  position3 = createVector(width/2, height/2);
  position4 = createVector(width/2, height/2);
  position5 = createVector(width/2, height/2);
  position6 = createVector(width/2, height/2);
  position7 = createVector(width/2, height/2);
  position8 = createVector(width/2, height/2);
  position9 = createVector(width/2, height/2);
  position10 = createVector(width/2, height/2);
  // wind starts as (0,0)
  socket = io.connect('http://localhost:3000');

}

function draw() {
  background(255,111,93);
  y = y - 1;
    if (y < 0) {
      y = height;
    }
    // line(0, y, width, y);
  // Move in the wind's direction

  // This section draws an arrow pointing in the direction of wind
  push();
  translate(32, height - 32);
  // Rotate by the wind's angle
  rotate(wind.heading() + PI/2);
  noStroke();
  fill(255);
  ellipse(0, 0, 48, 48);

  stroke(45, 123, 182);
  strokeWeight(3);
  line(0, -16, 0, 16);

  noStroke();
  fill(45, 123, 182);
  triangle(0, -18, -6, -10, 6, -10);
  pop();

  position.add(wind);
  position1.add(wind1);
  position2.add(wind2);
  position3.add(wind3);
  position4.add(wind4);
  position5.add(wind5);
  position6.add(wind6);
  position7.add(wind7);
  position8.add(wind8);
  position9.add(wind9);
  position10.add(wind10);


  noStroke();
  fill(243,255,0);
  ellipse(position.x, position.y-50, 16, 16);

  if (position.x > width)  position.x = 0;
  if (position.x < 0)      position.x = width;
  if (position.y > height) position.y = 0;
  if (position.y < 0)      position.y = height;

  fill(243,0,0);
  ellipse(position1.x+100, position1.y, 16, 16);

  if (position1.x > width)  position1.x = 0;
  if (position1.x < 0)      position1.x = width;
  if (position1.y > height) position1.y = 0;
  if (position1.y < 0)      position1.y = height;

  fill(0,60,152);
  ellipse(position2.x-300, position2.y,16, 16);

  if (position2.x > width)  position2.x = 0;
  if (position2.x < 0)      position2.x = width;
  if (position2.y > height) position2.y = 0;
  if (position2.y < 0)      position2.y = height;
  fill(255,111,93);
  ellipse(position3.x, position3.y, 16, 16);

  if (position3.x > width)  position3.x = 0;
  if (position3.x < 0)      position3.x = width;
  if (position3.y > height) position3.y = 0;
  if (position3.y < 0)      position3.y = height;

  fill(235);
  ellipse(position4.x-200, position4.y+77, 16, 16);

  if (position4.x > width)  position4.x = 0;
  if (position4.x < 0)      position4.x = width;
  if (position4.y > height) position4.y = 0;
  if (position4.y < 0)      position4.y = height;

  fill(55,66,176);
  ellipse(position5.x, position5.y-92,16, 16);

  if (position5.x > width)  position5.x = 0;
  if (position5.x < 0)      position5.x = width;
  if (position5.y > height) position5.y = 0;
  if (position5.y < 0)      position5.y = height;

  fill(60,176,147);
  ellipse(position6.x-400, position6.y-80, 16, 16);

  if (position6.x > width)  position6.x = 0;
  if (position6.x < 0)      position6.x = width;
  if (position6.y > height) position6.y = 0;
  if (position6.y < 0)      position6.y = height;
  fill(0,60,152);
  ellipse(position7.x+300, position7.y+300,16, 16);

  if (position7.x > width)  position7.x = 0;
  if (position7.x < 0)      position7.x = width;
  if (position7.y > height) position7.y = 0;
  if (position7.y < 0)      position7.y = height;
  fill(118,176,147);
  ellipse(position8.x+600, position8.y, 16, 16);

  if (position8.x > width)  position8.x = 0;
  if (position8.x < 0)      position8.x = width;
  if (position8.y > height) position8.y = 0;
  if (position8.y < 0)      position8.y = height;

  ellipse(position9.x, position9.y, 16, 16);

  if (position9.x > width)  position9.x = 0;
  if (position9.x < 0)      position9.x = width;
  if (position9.y > height) position9.y = 0;
  if (position9.y < 0)      position9.y = height;
  fill(0,155,243);
  ellipse(position10.x, position10.y+400,16, 16);

  if (position10.x > width)  position10.x = 0;
  if (position10.x < 0)      position10.x = width;
  if (position10.y > height) position10.y = 0;
  if (position10.y < 0)      position10.y = height;


}

function gotWeather(weather) {

  // Get the angle (convert to radians)
  var angle = radians(Number(weather.current.wind_degree));
  // Get the wind speed
  var windmag = Number(weather.current.wind_mph);

  // Display as HTML elements
  var temperatureDiv = createDiv(floor(weather.current.temp_f) + '&deg;');
  var windDiv = createDiv("WIND " + windmag + " <small>MPH</small>");

  // Make a vector
  wind = p5.Vector.fromAngle(angle);
}

function gotWeather1(weather) {

  // Get the angle (convert to radians)
  var angle = radians(Number(weather.current.wind_degree));
  // Get the wind speed
  var windmag = Number(weather.current.wind_mph);

  // Display as HTML elements
  var temperatureDiv = createDiv(floor(weather.current.temp_f) + '&deg;');
  var windDiv = createDiv("WIND " + windmag + " <small>MPH</small>");

  // Make a vector
  wind1 = p5.Vector.fromAngle(angle);
}
function gotWeather2(weather) {

  // Get the angle (convert to radians)
  var angle = radians(Number(weather.current.wind_degree));
  // Get the wind speed
  var windmag = Number(weather.current.wind_mph);

  // Display as HTML elements
  var temperatureDiv = createDiv(floor(weather.current.temp_f) + '&deg;');
  var windDiv = createDiv("WIND " + windmag + " <small>MPH</small>");

  // Make a vector
  wind2 = p5.Vector.fromAngle(angle);
}
function gotWeather3(weather) {

  // Get the angle (convert to radians)
  var angle = radians(Number(weather.current.wind_degree));
  // Get the wind speed
  var windmag = Number(weather.current.wind_mph);

  // Display as HTML elements
  var temperatureDiv = createDiv(floor(weather.current.temp_f) + '&deg;');
  var windDiv = createDiv("WIND " + windmag + " <small>MPH</small>");

  // Make a vector
  wind3 = p5.Vector.fromAngle(angle);
}
function gotWeather4(weather) {

  // Get the angle (convert to radians)
  var angle = radians(Number(weather.current.wind_degree));
  // Get the wind speed
  var windmag = Number(weather.current.wind_mph);

  // Display as HTML elements
  var temperatureDiv = createDiv(floor(weather.current.temp_f) + '&deg;');
  var windDiv = createDiv("WIND " + windmag + " <small>MPH</small>");

  // Make a vector
  wind4 = p5.Vector.fromAngle(angle);
}
function gotWeather5(weather) {

  // Get the angle (convert to radians)
  var angle = radians(Number(weather.current.wind_degree));
  // Get the wind speed
  var windmag = Number(weather.current.wind_mph);

  // Display as HTML elements
  var temperatureDiv = createDiv(floor(weather.current.temp_f) + '&deg;');
  var windDiv = createDiv("WIND " + windmag + " <small>MPH</small>");

  // Make a vector
  wind5 = p5.Vector.fromAngle(angle);
}
function gotWeather5(weather) {

  // Get the angle (convert to radians)
  var angle = radians(Number(weather.current.wind_degree));
  // Get the wind speed
  var windmag = Number(weather.current.wind_mph);

  // Display as HTML elements
  var temperatureDiv = createDiv(floor(weather.current.temp_f) + '&deg;');
  var windDiv = createDiv("WIND " + windmag + " <small>MPH</small>");

  // Make a vector
  wind5 = p5.Vector.fromAngle(angle);
}
function gotWeather6(weather) {

  // Get the angle (convert to radians)
  var angle = radians(Number(weather.current.wind_degree));
  // Get the wind speed
  var windmag = Number(weather.current.wind_mph);

  // Display as HTML elements
  var temperatureDiv = createDiv(floor(weather.current.temp_f) + '&deg;');
  var windDiv = createDiv("WIND " + windmag + " <small>MPH</small>");

  // Make a vector
  wind6 = p5.Vector.fromAngle(angle);
}
function gotWeather7(weather) {

  // Get the angle (convert to radians)
  var angle = radians(Number(weather.current.wind_degree));
  // Get the wind speed
  var windmag = Number(weather.current.wind_mph);

  // Display as HTML elements
  var temperatureDiv = createDiv(floor(weather.current.temp_f) + '&deg;');
  var windDiv = createDiv("WIND " + windmag + " <small>MPH</small>");

  // Make a vector
  wind7 = p5.Vector.fromAngle(angle);
}
function gotWeather8(weather) {

  // Get the angle (convert to radians)
  var angle = radians(Number(weather.current.wind_degree));
  // Get the wind speed
  var windmag = Number(weather.current.wind_mph);

  // Display as HTML elements
  var temperatureDiv = createDiv(floor(weather.current.temp_f) + '&deg;');
  var windDiv = createDiv("WIND " + windmag + " <small>MPH</small>");

  // Make a vector
  wind8 = p5.Vector.fromAngle(angle);
}
function gotWeather9(weather) {

  // Get the angle (convert to radians)
  var angle = radians(Number(weather.current.wind_degree));
  // Get the wind speed
  var windmag = Number(weather.current.wind_mph);

  // Display as HTML elements
  var temperatureDiv = createDiv(floor(weather.current.temp_f) + '&deg;');
  var windDiv = createDiv("WIND " + windmag + " <small>MPH</small>");

  // Make a vector
  wind9 = p5.Vector.fromAngle(angle);
}
function gotWeather10(weather) {

  // Get the angle (convert to radians)
  var angle = radians(Number(weather.current.wind_degree));
  // Get the wind speed
  var windmag = Number(weather.current.wind_mph);

  // Display as HTML elements
  var temperatureDiv = createDiv(floor(weather.current.temp_f) + '&deg;');
  var windDiv = createDiv("WIND " + windmag + " <small>MPH</small>");

  // Make a vector
  wind10 = p5.Vector.fromAngle(angle);
}
