$(document).ready(function() {
  function playSwitchClick() {
    document.getElementById('switchClick').play();
  } 
  $('#move-container #right-joycon').draggable({
    axis: 'y', 
    containment: '#move-container',
  });

  $('#right-joycon').draggable({
    snap: ".ui-widget-header",
    snapTolerance: '5',
    drag: function (event, ui) {
      // Get widget instance
      var draggable = $(this).data("ui-draggable");

      $.each(draggable.snapElements, (i, ele) => {
        if (ele.snapping) {
          // get trigger method to extend property
          draggable._trigger("snapped", event, $.extend({}, ui, {
            snapElement: $(ele.item)
          }));
        }
      });
    },
    snapped: function () {
      playSwitchClick();
    }
  });
});


