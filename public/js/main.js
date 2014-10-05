/*!
 * sorting-visualization
 * codenameyau.github.io
 * GNU Public License
 */
'use strict';


/****************
 * Main Program *
 ****************/
(function() {

  // Setup visualization canvas
  var canvasID = 'imagination';
  var settings = {width: 800, height: 500};
  var visualization = new SortingVisualization(canvasID, settings);
  visualization.drawDemo();

})();
