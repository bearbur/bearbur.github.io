`use strict`;
var mainClass = document.getElementsByClassName('mainClass')[0];
var divSlider = document.getElementsByClassName('contactsSlide')[0];
var divInfo = document.getElementsByClassName('contactsData')[0];
var divInsta = document.getElementsByClassName('contactsInstagram')[0];
var contactsDataInfo = document.getElementsByClassName('contactsDataInfo')[0];
var contactsDataForm = document.getElementsByClassName('contactsDataForm')[0];

function getHeightOfElement(element){
  var elementHeight = Math.max(
    element.scrollHeight,
    element.offsetHeight,
    element.clientHeight
  );
  return elementHeight;
}
function getWidthOfElement(element){
  var elementWidth = Math.max(
    element.scrollWidth,
    element.offsetWidth,
    element.clientWidth
  );
  return elementWidth;
}
function magicMover(divSlider,divInfo,divInsta,contactsDataInfo,contactsDataForm,mainClass){
  var mainHTML5 = document.getElementsByTagName('main')[0];
  var contactsParam = {
    sliderHeight: getHeightOfElement(divSlider),
    sliderWidth: getWidthOfElement(divSlider),
    infoHeight: getHeightOfElement(divInfo),
    infoWidth: getWidthOfElement(divInfo),
    instaHeight: getHeightOfElement(divInsta),
    instaWidth: getWidthOfElement(divInsta),
    dataInfoHeight: getHeightOfElement(contactsDataInfo),
    dataInfoWidth: getWidthOfElement(contactsDataInfo),
    dataFormHeight: getHeightOfElement(contactsDataForm),
    dataFormWidth: getWidthOfElement(contactsDataForm),
    bodyWidth: getWidthOfElement(document.body),
    bodyHeight: getHeightOfElement(document.body),
    mainHeight: getHeightOfElement(mainClass),
    mainWidth: getWidthOfElement(mainClass)
  };
  for (var key in contactsParam){
    console.log(key+" "+contactsParam[key])
  }//laptop
  if((contactsParam.mainWidth<1500)&&(contactsParam.mainWidth>333)&&(contactsParam.sliderWidth>=2*contactsParam.infoWidth)){
    divInfo.style.fontSize = '0.8em';
    contactsDataInfo.style.marginLeft =-((0.39)*contactsParam.infoWidth)+'px';
    contactsDataForm.style.marginLeft =+((0.39)*contactsParam.infoWidth)+'px';
    contactsDataForm.style.marginTop = -contactsParam.dataInfoHeight + 'px';
    divInfo.style.fontSize = '1em';
    divInsta.style.opacity = 0.9;
    divInsta.style.marginTop = 50+ 'px';
    divInfo.style.height = contactsParam.dataFormHeight*(0.8) + 'px';
    mainClass.style.height = (contactsParam.mainHeight-contactsParam.dataFormHeight) +50+ 'px';
    mainClass.style.minHeight = 2.2*contactsParam.instaHeight+50+'px';
    mainHTML5.style.height = (contactsParam.mainHeight-contactsParam.dataFormHeight)+50 + 'px';
    console.log('laptop');
  }//laptopMain
  else if((contactsParam.mainWidth>1000)&&(contactsParam.sliderWidth>3*contactsParam.infoWidth)){
    contactsDataInfo.style.marginLeft =-((1/2)*contactsParam.infoWidth+(1/2)*contactsParam.dataFormWidth+50)+'px';
    contactsDataForm.style.marginLeft =-50+'px';
    contactsDataForm.style.marginTop = -contactsParam.dataInfoHeight + 'px';
    divInsta.style.marginTop = - (+contactsParam.instaHeight)-10+ 'px';
    divInsta.style.marginLeft = +(1/2)*(contactsParam.mainWidth+contactsParam.dataFormWidth)+'px';
    divInsta.style.opacity = 0.9;
    divInfo.style.height = contactsParam.instaHeight + 'px';
    divInfo.style.fontSize = '1.1em';
    mainClass.style.height = (contactsParam.mainHeight-contactsParam.instaHeight) + 'px';
    mainClass.style.minHeight = 2.2*contactsParam.instaHeight+'px';
    mainHTML5.style.height = (contactsParam.mainHeight-contactsParam.instaHeight) + 'px';
    console.log('laptopMain');
  }//iphone5s
  else if ((contactsParam.mainWidth>290)) {
    divInsta.style.marginTop = '20vh';
    mainClass.style.height = (contactsParam.sliderHeight+contactsParam.infoHeight+contactsParam.instaHeight+60) + 'px';
    mainClass.style.minHeight = contactsParam.sliderHeight+2*contactsParam.instaHeight+'px';
    mainHTML5.style.height = (contactsParam.sliderHeight+contactsParam.infoHeight+contactsParam.instaHeight+60) + 'px';
    console.log('iphone');
  }
  else{
    console.log('nothing');
  }
}
window.onload=magicMover(divSlider,divInfo,divInsta,contactsDataInfo,contactsDataForm,mainClass);
