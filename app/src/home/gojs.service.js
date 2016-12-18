'use strict';

/**
 * Created by Drapegnik on 18.12.16.
 */

var $ = go.GraphObject.make;
var lastStroked = null;

hackApp.service('GoJs', function() {
  var GoJs = this;
  GoJs.draw = _drawDiagram;
});

var _drawDiagram = function(diagramId, previewId, data) {
  var myDiagram = $(go.Diagram, diagramId,  // create a Diagram for the DIV HTML element
    {
      'animationManager.isEnabled': false,  // don't bother with layout animation
      contentAlignment: go.Spot.Center,  // content is always centered in the viewport
      autoScale: go.Diagram.Uniform,  // scale always has all content fitting in the viewport
      isReadOnly: true,  // don't let users modify anything
      mouseOver: doMouseOver,  // this event handler is defined below
      click: doMouseOver  // this event handler is defined below
    });

  myDiagram.nodeTemplate = $(go.Node, 'Auto',
    {
      selectable: false,
      mouseOver: doMouseOver  // this event handler is defined below
    },
    new go.Binding('location', '', function(data) {
      return new go.Point(data.time * 175, 200);
    }),

    // $(go.Picture, {
    //     name: 'SHAPE',
    //     width: 20,
    //     height: 20
    // }, new go.Binding('source', 'image'))

    $(go.Shape, 'Hexagon',
      {
        name: 'SHAPE',
        width: 20, height: 20,
        strokeWidth: 4, stroke: null
      },
      new go.Binding('fill', 'name', function(name) {
        switch (name) {
          case 'first':
            return 'rgba(240, 120,  50, .6)';
          case 'second':
            return 'rgba(240, 230, 120, .6)';
          case 'third':
            return 'rgba(125, 200, 120, .6)';
        }
        return 'black';
      }))
  );

// now convert that data into an Array of JavaScript Objects,
// to be used as the Model.nodeDataArray
  var array = [];
  for (var i = 0; i < data.length; i++) {
    var row = data[i];
    var element = {
      time: row[0],
      name: row[1],
      image: row[2]
    };
    array.push(element);
  }

// create the Model for the Diagram to display
  myDiagram.model = new go.Model(array);

// Called when the mouse is over the diagram's background
  function doMouseOver(e) {
    if (e === undefined) {
      e = myDiagram.lastInput;
    }
    var doc = e.documentPoint;
    // find all Nodes that are within 100 units
    var list = myDiagram.findObjectsNear(doc, 100, null, function(x) { return x instanceof go.Node; });
    // now find the one that is closest to e.documentPoint
    var closest = null;
    var closestDist = 999999999;

    list.each(function(node) {
      var dist = doc.distanceSquaredPoint(node.getDocumentPoint(go.Spot.Center));
      if (dist < closestDist) {
        closestDist = dist;
        closest = node;
      }
    });

    if (closestDist < 100) {
      highlightNode(e, closest);
    } else {
      highlightNode(e, null);
    }
  }

// Called with a Node (or null) that the mouse is over or near
  function highlightNode(e, node) {
    if (node !== null) {
      var shape = node.findObject('SHAPE');
      shape.stroke = 'red';

      if (lastStroked !== null && lastStroked !== shape) {
        lastStroked.stroke = null;
      }

      lastStroked = shape;
      updateInfoBox(e.viewPoint, node.data);
    } else {
      if (lastStroked !== null) {
        lastStroked.stroke = null;
      }
      lastStroked = null;
      document.getElementById(previewId).innerHTML = '';
    }
  }

// This function is called to update the tooltip information
// depending on the bound data of the Node that is closest to the pointer.
  function updateInfoBox(mousePt, data) {
    var x = "<img height='60' width='60' src='" + data.image + "'/>";
    var box = document.getElementById(previewId);
    box.innerHTML = x;
    box.style.left = mousePt.x + 70 + "px";
    box.style.top = mousePt.y + 70 + "px";
  }
};
