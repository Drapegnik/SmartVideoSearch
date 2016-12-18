'use strict';

/**
 * Created by Drapegnik on 17.12.16.
 */

hackApp.directive('ngEnter', function() {
  return function(scope, element, attrs) {
    element.bind('keydown keypress', function(event) {
      if (event.which === 13) {
        scope.$apply(function() {
          scope.$eval(attrs.ngEnter);
        });

        event.preventDefault();
      }
    });
  };
});

hackApp.directive('repeatDone', function() {
  return function(scope, element, attrs) {
    if (scope.$last) { // all are rendered
      console.log(element);
      console.log("last");
      scope.$eval(attrs.repeatDone);
    }
  };
});
