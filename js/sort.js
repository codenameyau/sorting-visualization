/*!
 * sorting-visualization
 * codenameyau.github.io
 * GNU Public License
 */
'use strict';


/************************
 * Visualization Canvas *
 ************************/
function SortingVisualization(canvasID) {
  this.canvasID = canvasID;
  this.setupCanvas();
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

SortingVisualization.prototype.drawDemo = function() {
  this.ctx.fillStyle = 'rgb(200, 0, 0)';
  this.ctx.fillRect(0, 0, 50, 50);
  this.ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
  this.ctx.fillRect(30, 30, 50, 50);
  this.ctx.save();
};

/**********************
 * Sorting Algorithms *
 **********************/
