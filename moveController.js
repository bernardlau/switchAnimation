$(document).ready(function() {
  function playSwitchClick() {
    document.getElementById('switchClick').play();
  } 
  // console.log("hi")
  // let marginValue = window.getComputedStyle(document.getElementById('right-joycon')).getPropertyValue('margin-top');
  // let newMarginValue = marginValue.slice(0, marginValue.length - 2);
  // newMarginValue -= 30;
  let moveContainerHeight = Math.floor($("#move-container").height() - 5.9299191919*10);
  let dragDown;
  // console.log("right", moveContainerHeight);
  // $("#right-joycon").css('margin-top', newMarginValue);
  // console.log("moved", $("#right-joycon").position().top);
  let rightJoyconHeight = $('#right-joycon').height();
  // let switchClick = setInterval(function() {
  //   rightJoyconHeight = $("#right-joycon").position().top;
  //   //console.log(100/document.documentElement.clientHeight);
  //   console.log('rightJoyconHeight', rightJoyconHeight);
  //   console.log('height', $("#move-container").height());
  //   console.log('heightjoy', $("#right-joycon").height());
  //   console.log('move', moveContainerHeight);
  //   if (moveContainerHeight === rightJoyconHeight) {
  //     playSwitchClick();
  //     clearInterval(switchClick);
  //   }
  // }, 1000);
  $('#move-container #right-joycon').draggable({
    axis: 'y', 
    containment: '#move-container',
    drag: function(event, ui) {
      //console.log(100*179.19/document.documentElement.clientHeight);
      dragDown = Math.floor(ui.position.top);
      console.log('moveContainerHeight',moveContainerHeight);
      console.log(dragDown);
      if (dragDown == Math.floor(moveContainerHeight)) {
        console.log("hi")
        playSwitchClick();
      }
      // console.log(ui.position.top);
      // console.log("moved", $("#right-joycon").position().top);
      // console.log('dragRight',dragRight);
      // console.log('rightJoyconHeight',rightJoyconHeight);
      // console.log('moveContainerHeight',moveContainerHeight);
    }
  });
  
});


