/*!
 * sorting-visualization
 * codenameyau.github.io
 * GNU Public License
 */
'use strict';


/************************
 * Visualization Canvas *
 ************************/
function SortingVisualization(canvasID, size) {
  this.canvasID = canvasID;
  this.setupCanvas();
  this.populateNumbers(size);
  this.shuffleArray();
  this.enableEventHandlers();
  this.visualizeArray();
}

SortingVisualization.prototype.setupCanvas = function() {
  this.canvas = document.getElementById(this.canvasID);
  this.ctx = this.canvas.getContext('2d');
  this.ctx.imageSmoothingEnabled = false;
};

SortingVisualization.prototype.getWidth = function() {
  return this.canvas.width;
};

SortingVisualization.prototype.getHeight = function() {
  return this.canvas.height;
};

SortingVisualization.prototype.visualizeArray = function() {
  // [TODO] Move computations out
  this.ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
  var size = this.array.length;
  var width = this.getWidth();
  var height = this.getHeight();
  var wRatio = width / size;
  var hRatio = height / size;

  for (var i=0; i<size; i++) {
    var barHeight = this.array[i] * hRatio;
    this.ctx.fillRect(i*wRatio, height-barHeight, wRatio, barHeight);
  }

  this.ctx.save();
};


/**********************
 * Sorting Algorithms *
 **********************/
SortingVisualization.prototype.enableEventHandlers = function() {
  // Step 1: Define algorithm element id
  this.algorithm = 'Unsorted';
  this.algorithms = {
    insertion: document.getElementById('sort-insertion'),
    bubble: document.getElementById('sort-bubble'),
  };

  // Step 2: Bind event handler to algorithm
  this.algorithms.insertion.onclick = this.insertionSort;
  this.algorithms.bubble.onclick = this.bubbleSort;
};

SortingVisualization.prototype.populateNumbers = function(size) {
  this.array = [];
  for (var i=1; i<=size; i++) { this.array.push(i); }
};

SortingVisualization.prototype.shuffleArray = function() {
  var a = this.array;
  for (var j, x, i = a.length; i; j = Math.floor(Math.random() * i), x = a[--i], a[i] = a[j], a[j] = x);
};

SortingVisualization.prototype.selectAlgorithm = function(name) {
  // [TODO] update algorithm name label
  // [TODO] reshuffle numbers
  this.algorithm = name;
};

SortingVisualization.prototype.insertionSort = function() {
  console.log(1);
};

SortingVisualization.prototype.bubbleSort = function() {
  console.log(2);
};


/****************
 * Main Program *
 ****************/
(function() {

  var project = new SortingVisualization('imagination', 100);
  console.log(project);

})();
