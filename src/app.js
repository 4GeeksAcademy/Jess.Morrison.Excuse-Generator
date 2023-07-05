/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

var who = ["My dog", "My baby", "Gollum", "My car", "An Alien"];
var how = ["ate", "pooped on", "set fire to", "broke down", "vaporized"];
var what = ["my homework", "my laptop", "my keys", "my project", "my legs"];
var when = [
  "yesterday",
  "just now",
  "before class",
  "last night",
  "this morning"
];
var where = [
  "in my bathroom",
  "in the parking lot",
  "in my driveway",
  "on the highway",
  "on Mt. Doom"
];

function generateExcuse() {
  let whoIndex = Math.floor(Math.random() * who.length);
  let howIndex = Math.floor(Math.random() * how.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);
  let whereIndex = Math.floor(Math.random() * where.length);
  return (
    who[whoIndex] +
    " " +
    how[howIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex] +
    " " +
    where[whereIndex] +
    "."
  );
}
window.onload = function() {
  let Excuse = generateExcuse();
  let ExcuseElement = document.getElementById("Excuse");
  ExcuseElement.innerHTML = Excuse;
};
