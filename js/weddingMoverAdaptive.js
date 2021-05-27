`use strict`;

var main = document.getElementsByClassName("wedding")[0];

function weddingMoverAdaptive(targetMain, targetDivsArray, headerSubDiv, targeDivsSubArray){
  try {
    
    console.log("hello");
  } catch (e) {
    console.log(e);
  } finally {
    //console.log("Ended.");
  }
}

//;;;;;;;;window.addEventListener("load",function(){weddingMoverAdaptive(main)});
window.addEventListener("resize",function(){weddingMoverAdaptive(main)});
