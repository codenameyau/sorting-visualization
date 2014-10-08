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
  this.timeout = 10;
  this.algorithms = {
    shuffle: document.getElementById('sort-shuffle'),
    insertion: document.getElementById('sort-insertion'),
    bubble: document.getElementById('sort-bubble'),
  };

  // Step 2: Bind event handler to algorithm
  this.algorithms.shuffle.onclick = this.shuffleArray.bind(this);
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
  this.visualizeArray();
};

SortingVisualization.prototype.insertionSort = function() {
  var a = this.array;
  var len = a.length;
  var ref = this;
  var i = 1;
  var temp;

  var loop = function() {
    if (i < len) {
      var j = i;

      var logic = function() {
        if (j > 0 && a[j-1] > a[j]) {
          temp = a[j];
          a[j] = a[j-1];
          a[j-1] = temp;
          j--;
          ref.visualizeArray();
          window.setTimeout(logic, ref.timeout);
        }
        else {
          i++;
          loop();
        }
      };
      logic();
    }
  };
  loop();
};

SortingVisualization.prototype.bubbleSort = function() {
  var a = this.array;
  var len = a.length;
  var swap = true;
  var ref = this;
  var i = 0;

  var logic = function() {
    if (i < len) {
      if (a[i] > a[i+1]) {
        var temp = a[i];
        a[i] = a[i+1];
        a[i+1] = temp;
        swap = true;
      }
      i++;
      ref.visualizeArray();
      window.setTimeout(logic, ref.timeout);
    }
    else if (swap) {
      swap = false;
      i = 0;
      logic();
    }
  };

  logic();
};

/****************
 * Main Program *
 ****************/
(function() {

  var project = new SortingVisualization('imagination', 50);
  console.log(project);

})();
