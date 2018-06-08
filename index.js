
$(document).ready(function(){
  $(window).scrollTop(0);
  //There are 3 sections: "basic", "better", "best", each section takes 100% of the browser window.
  //we identify each section by these checkpoint variables.
  var sectionHeight=parseFloat($("#basic").css("height"))
  var checkpoint1=$("#better").offset().top;
  var buffer=sectionHeight*0.35;
  var vh=sectionHeight-(buffer);
  console.log("CP1",checkpoint1);
  var checkpoint2=$("#best").offset().top;
  console.log("CP2",checkpoint2);
  var scrollLock=true;
  $(window).scroll(function() {
    //scroll stores the current scroll value in pixels.
    var scroll=$(window).scrollTop();
    console.log("Scroll value",scroll)
//==========================BASIC TO BETTER=================================
    //check1percentage is the percentage (actually from 0 to 1) that the user has scrolled from the top of the page (plus a small buffer) to the #better section
    // 0 is at the top, 1 is when the #better section covers the whole browser window.
    var check1percentage=(scroll-buffer)/(checkpoint1-buffer);
    check1percentage = Math.min(1, Math.max(0, check1percentage)); //Clamp percentage to [0 , 1]
    console.log("Percentage 1",check1percentage);
    if(scroll<checkpoint1){
      $(".navbar").removeClass('navbar-better')
      $(".navbar-link").removeClass('btn-better')
      $("body").removeClass('body-better')
    }
    if(scroll >= 0 && scroll < checkpoint1){
      changeAlpha($("#navbar-fol"),check1percentage,'background-color');
      changeAlpha($("#navbar-fol"),1-check1percentage,'border-color');
      switchElements($(".main-title-basic"),$(".main-title-better"),check1percentage);
      switchElements($(".content-title-basic"),$(".content-title-better"),check1percentage);
      switchElements($(".main-paragraph-basic"),$(".main-paragraph-better"),check1percentage);
      switchElements($(".scroll-text-basic"),$(".scroll-text-better"),check1percentage);
      changeAttribute($("#navbar-fol"),60,100,check1percentage,"width","%");
      //changeColor($("#navbar-fol"),[0,0,0],'background-color',check1percentage);
      scrollLock=true;
    }
    // if(scroll>=checkpoint1 && scrollLock){
    //   console.log("locked")
    //   $(window).scrollTop(checkpoint1);
    //   setTimeout(function(){
    //     scrollLock=false;
    //   },1000)
    // }
    if(scroll>=checkpoint1){
      $(".navbar").addClass('navbar-better')
      $(".navbar-link").addClass('btn-better')
      $("body").addClass('body-better')
    }
//========================BETTER TO BEST============================//
    var check2percentage=(scroll-checkpoint1-buffer)/(checkpoint2-checkpoint1-buffer);
    check2percentage = Math.min(1, Math.max(0, check2percentage)); //Clamp percentage to [0 , 1]
    console.log("Percentage 2",check2percentage);
    if(scroll<checkpoint2){

    }
    if(scroll >= checkpoint1 && scroll <= checkpoint2){
      switchElements($(".main-title-better"),$(".main-title-best"),check2percentage);
      switchElements($(".content-title-better"),$(".content-title-best"),check2percentage);
      switchElements($(".main-paragraph-better"),$(".main-paragraph-best"),check2percentage);
      switchElements($(".scroll-text-better"),$(".scroll-text-best"),check2percentage);
      //changeAttribute($("#navbar-fol"),parseFloat($("#navbar-fol").css('height')),vh,check2percentage,"height","px");
      //changeColor($("#navbar-fol"),[0,0,0],'background-color',check1percentage);
    }
    if(scroll>checkpoint2){

    }
  });
})




//========================HELPER FUNCTIONS====================//


//This function gradually changes an elements color in rgba format, depending on the percentage
//element(Jquery Element) is the element that we want to change the color of
//targetColor(array) is the color that we want the element to take, format is that of RGB e.g [255,255,255]
//property (string) is the attribute or property what we want to change (background-color, border-color, etc.)
//percentage: float - it is the current scroll percentage (from 0 to 1)
function changeColor(element,targetColor,property,percentage){
  c=element.css(property);
  currentColor=c.slice(c.indexOf("(")+1,-1).split(",").map(parseFloat);
  colorDiff = [targetColor[0] - currentColor[0], targetColor[1] - currentColor[1], targetColor[2] - currentColor[2]];
  newValue = [Math.round(currentColor[0] + colorDiff[0] * percentage), Math.round(currentColor[1] + colorDiff[1] * percentage), Math.round(currentColor[2] + colorDiff[2] * percentage),currentColor[3]];
  newRGBAValue="rgba("+newValue.join(",")+")";
  element.css(property,newRGBAValue);
}

//This function gradually changes an elements alpha value without affecting the RGB values.
//element(Jquery Element) is the element that we want to change the alpha of
//alpha(float) is the alpha value that we want the element to take (from 0 to 1)
//property (string) is the attribute or property what we want to change (background-color, border-color, etc.)
function changeAlpha(element, alpha, property) {
  b = element.css(property);
  newValue= ('rgba' + b.slice(b.indexOf('('), ( (b.match(/,/g).length == 2) ? -1 : b.lastIndexOf(',') - b.length) ) + ', '+alpha+')');
  element.css(property,newValue)
}

//This function gradually changes an element's attribute value depending on a percentage.
//IT DOESN'T WORK FOR COLORS!
//Usage:
//element: Jquery Element - it is the element we want to change.
//startValue: float - it is the value that we want the element to take at 0. If null it takes the value from the object
//endValue: float - it is the value that we want the element to take at 1.
//percentage: float - it is the current scroll percentage (from 0 to 1)
//property: string - it is the property or attribute that we want to change (width, height)...
//unit: (optional default="") string - it is the unit of measurement we want to use (%, px, em, vh, etc.)
function changeAttribute(element,startValue="0",endValue,percentage,property,unit=""){
  newValue = ((endValue - startValue) * percentage) + startValue
  element.css(property,newValue + unit)
}

//This function "switches" two elements by changing their opacity
//It takes two Jquery elements and the scroll percentage
function switchElements(currentElement,targetElement,percentage){
  currentElement.css('opacity',1-percentage);
  targetElement.css('opacity',percentage);
}
