`use strict`;
var weddingOfferContainer = document.getElementsByClassName('weddingText')[0];
//function take element of DOM and draw border around
makeBorders=function(targetDiv){
  targetDiv.style.border = "2.5px dotted black";
}
//function take element of DOM and return Object with height and width
findParametersOfElement = function(element){
  var parameters = {
    height: 0,
    width: 0
  };
  if (element){
    parameters.height = Math.max(
      element.scrollHeight,
      element.offsetHeight,
      element.clientHeight
    );
    parameters.width = Math.max(
      element.scrollWidth,
      element.offsetWidth,
      element.clientWidth
    );
  }
  return parameters;
}
//function take object and return quantity of keys in this object
howMuchKeys = function(ourObject){
  var numberOfKeys = 0;
  for (var key in ourObject){
    numberOfKeys++;
  }
  return numberOfKeys;
}
//function take object and find array in object[key] elements and return key
tryFindArrayInObject=function(ourObject){
  for (var key in ourObject){
      if (Array.isArray(ourObject[key])){
        return key;
      }
    }
}
//function take array with and return how much elements in this array
lengthArray = function(sameArray){
  var sameLength = 0;
  if (Array.isArray(sameArray)){
    sameLength = sameArray.length;
  }
  return sameLength;
}
//function create div with class and we choose what is this class. also we send to this function text and it will be inputed inside the div
makeDiv = function(ourText,ourClass,targetDiv){
  var div = document.createElement('div');
  div.innerHTML = "<span>"+ourText+"</span>";
  targetDiv.appendChild(div);
  div.className = ourClass;
}
//function take array, take ever array[i] and sum every element in array[i], then return total numberOfKeys
numbersObjectsInArray = function(sameArray){
  var sumObjects = 0;
  var lengthSameArray = lengthArray(sameArray);
  for (var i = 0;i<lengthSameArray;i++){
    var partOfArray = sameArray[i];
    for (var key in partOfArray){
      sumObjects++;
    }
  }
  return sumObjects;
}
//function take object, find in this object number of keys, find array in object[key], calculate total numbers of rows. we include data about height 1 row and function return total height in px
calculateHeightOfOffer = function(ourObject,heightOfOneRow){
  var keys = howMuchKeys(ourObject);
  var arrayOfDishes = tryFindArrayInObject(ourObject);
  var arrayLength = lengthArray(arrayOfDishes);
  //var numberOfDishes =
}


/*makeDiv("JustSomeText","headWedding",weddingOfferContainer);*/

makeOfferForWedding = function(urlJSON, targetDiv){
//makeBorders(targetDiv);
  (function() {
  $.getJSON( urlJSON,
    {format:"json"}
    )
  .done(function( data ) {
    var quantityOfferCards = data.length;
    for (var i=0;i<quantityOfferCards;i++){
          console.log("In this object we have "+howMuchKeys(data[i])+" keys");
          console.log("How about arrays: "+tryFindArrayInObject(data[i]));
          console.log("In "+tryFindArrayInObject(data[i])+" we have "+lengthArray(data[i][tryFindArrayInObject(data[i])])+" elements");
          console.log("InThisCard we have some row with menu detail"+numbersObjectsInArray(data[i][tryFindArrayInObject(data[i])]));
    }
    console.log("Quantityyy of the offer cards: "+quantityOfferCards);
    /*for(key in data){
      var infoOffer = data[key];
      for (key in infoOffer){
        console.log(infoOffer[key]);
      }
    }*/
   });
  })();
}


console.log(findParametersOfElement(weddingOfferContainer));

makeOfferForWedding("../json/weddingOffer.json",weddingOfferContainer);
