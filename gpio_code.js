var socket;
// A wind direction vector
var wind;
var wind1;
var wind2;
var wind3;
var wind4;
// Circle position
var position;
var position1;
var position2;
var position3;
var position4;
var y = 100;


'use strict';

var Gpio = require('../').Gpio,
  motor = new Gpio(10, {mode: Gpio.OUTPUT}),
  pulseWidth = 1000,
  increment = 100;

setInterval(function () {
  motor.servoWrite(pulseWidth);

  pulseWidth += increment;
  if (pulseWidth >= 2000) {
    increment = -100;
  } else if (pulseWidth <= 1000) {
    increment = 100;
  }
}, 1000);


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

  loadJSON(url, gotWeather);
  loadJSON(url1, gotWeather1);
  loadJSON(url2, gotWeather2);
  loadJSON(url3, gotWeather3);
  loadJSON(url4, gotWeather4);
  // Circle starts in the middle
  position = createVector(width/2, height/2);
  // wind starts as (0,0)
  wind = createVector();
  wind1 = createVector();
  wind2 = createVector();
  position1 = createVector(width/2, height/2);
  position2 = createVector(width/2, height/2);
  position3 = createVector(width/2, height/2);
  // wind starts as (0,0)
  wind3 = createVector();
  wind4 = createVector();
  wind5 = createVector();
  position4 = createVector(width/2, height/2);
  position5 = createVector(width/2, height/2);
  // wind starts as (0,0)
  socket = io.connect('http://localhost:3000');

}

function draw() {
  background(255);
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


  stroke(0);
  fill(51);
  ellipse(position.x, position.y, 16, 16);

  if (position.x > width)  position.x = 0;
  if (position.x < 0)      position.x = width;
  if (position.y > height) position.y = 0;
  if (position.y < 0)      position.y = height;

  ellipse(position1.x, position1.y, 16, 16);

  if (position1.x > width)  position1.x = 0;
  if (position1.x < 0)      position1.x = width;
  if (position1.y > height) position1.y = 0;
  if (position1.y < 0)      position1.y = height;

  ellipse(position2.x, position2.y,16, 16);

  if (position2.x > width)  position2.x = 0;
  if (position2.x < 0)      position2.x = width;
  if (position2.y > height) position2.y = 0;
  if (position2.y < 0)      position2.y = height;

  ellipse(position3.x, position3.y, 16, 16);

  if (position3.x > width)  position3.x = 0;
  if (position3.x < 0)      position3.x = width;
  if (position3.y > height) position3.y = 0;
  if (position3.y < 0)      position3.y = height;

  ellipse(position4.x, position4.y, 16, 16);

  if (position4.x > width)  position4.x = 0;
  if (position4.x < 0)      position4.x = width;
  if (position4.y > height) position4.y = 0;
  if (position4.y < 0)      position4.y = height;

  ellipse(position5.x, position5.y,16, 16);

  if (position5.x > width)  position5.x = 0;
  if (position5.x < 0)      position5.x = width;
  if (position5.y > height) position5.y = 0;
  if (position5.y < 0)      position5.y = height;

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
