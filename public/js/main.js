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

SortingVisualization.prototype.clearCanvas = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

SortingVisualization.prototype.visualizeArray = function() {
  // [TODO] Move computations out
  var size = this.array.length;
  var width = this.getWidth();
  var height = this.getHeight();
  var wRatio = width / size;
  var hRatio = height / size;
  this.clearCanvas();

  // Fill the canvas with bars
  for (var i=0; i<size; i++) {
    var value = this.array[i];
    var barHeight = value * hRatio;
    var color = value + 30;
    this.ctx.fillStyle = 'rgb(' + color + ',' + color + ',' + color + ')';
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
  this.algorithms.insertion.onclick = this.insertionSort.bind(this);
  this.algorithms.bubble.onclick = this.bubbleSort.bind(this);
};

SortingVisualization.prototype.populateNumbers = function(size) {
  this.array = [];
  for (var i=1; i<=size; i++) { this.array.push(i); }
};

SortingVisualization.prototype.shuffleArray = function() {
  var a = this.array;
  for (var j, x, i = a.length; i; j = Math.floor(Math.random() * i), x = a[--i], a[i] = a[j], a[j] = x);
};

SortingVisualization.prototype.insertionSort = function() {
  var a = this.array;
  var len = a.length;
  var ref = this;
  var i = 1;

  var continuation = function() {
    // Continue loop
    i += 1;
    if (i >= len) { return; }

    // Insertion sort logic
    var x = a[i];
    var j = i;
    while (j>0 && a[j-1] > x) {
      a[j] = a[j-1];
      j -= 1;
      ref.visualizeArray();
    }
    a[j] = x;
    window.setTimeout(continuation, 200);
  };
  continuation();
};

SortingVisualization.prototype.bubbleSort = function() {
  console.log(this);
};


/****************
 * Main Program *
 ****************/
(function() {

  var project = new SortingVisualization('imagination', 100);
  console.log(project);

})();
