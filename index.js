
$(document).ready(function(){
  $(window).scrollTop(0);
  var sectionHeight=parseFloat($("#intro").css("height"))
  var buffer=sectionHeight*0.35;
  var buffer_short=sectionHeight*0.05
  var vh=sectionHeight-(buffer);
  var vh_short=sectionHeight-buffer_short;
//we identify each section by these slide variables. slide0 is not defined, but it is the first one.
  var slide2=$("#second").offset().top;
  var slide3=$("#business").offset().top;
  var slide4=$("#web-app").offset().top;
  var slide5=$("#mobile").offset().top;
  var slide6=$("#tablet").offset().top;
  var slide7=$("#alldevices").offset().top;
  var slide8=$("#skills").offset().top;
  var slide9=$("#contact").offset().top;
  var currentSection=$("#intro");
  $(window).scroll(function() {
    //scroll stores the current scroll value in pixels.
    var scroll=$(window).scrollTop();
    //console.log("Scroll value",scroll)
//==========================INTRO TO SECOND=================================
    //check1percentage is the percentage (actually from 0 to 1) that the user has scrolled from the top of the page (plus a small buffer) to the #better section
    // 0 is at the top, 1 is when the #better section covers the whole browser window.
    var section1percentage=(scroll-buffer)/(slide2-buffer);
    section1percentage = Math.min(1, Math.max(0, section1percentage)); //Clamp percentage to [0 , 1]
    if(scroll<slide2){
      $(".nav-1").removeClass("is-selected")
      $(".slide-title-second").addClass("invisible")
      currentSection=$("#intro")
    }
    if(scroll >= 0 && scroll < slide2){
      currentSection=$("#second")
      $(".nav-1").addClass("is-selected")
      $(".slide-title-second").removeClass("invisible")
      $(".slide-title-intro").removeClass("invisible")
      switchElementsSmooth($(".slide-title-intro"),$(".slide-title-second"),section1percentage)
    }
    if(scroll>=slide2){
      $(".slide-title-intro").addClass("invisible")
      $(".nav-1").removeClass("is-selected")
    }
//========================SECOND TO BUSINESS============================//
    var check2percentage=(scroll-slide2-buffer)/(slide3-slide2-buffer);
    check2percentage = Math.min(1, Math.max(0, check2percentage)); //Clamp percentage to [0 , 1]
    if(scroll<slide3){
      $(".nav-2").removeClass("is-selected")
      $(".slide-title-business").addClass("invisible")
    }
    if(scroll >= slide2 && scroll <= slide3){
      currentSection=$("#business")
      $(".slide-title-second").removeClass("invisible")
      $(".slide-title-business").removeClass("invisible")
      switchElements($('.slide-title-second'),$('.slide-title-business'),check2percentage,9,1);
      $(".nav-2").addClass("is-selected")
    }
    if(scroll>slide3){
      $(".slide-title-second").addClass("invisible")
      $(".nav-2").removeClass("is-selected")
    }

  // //==================BUSINESS TO WEB-APP==================//
    var section3percentage=(scroll-slide3-buffer)/(slide4-slide3-buffer);
    section3percentage = Math.min(1, Math.max(0, section3percentage)); //Clamp percentage to [0 , 1]
    if(scroll<slide4){
      $(".nav-3").removeClass("is-selected")
      $(".slide-title-webapp").addClass("invisible")
    }
    if(scroll >= slide3 && scroll <= slide4){
      currentSection=$("#web-app")
      $(".slide-title-business").removeClass("invisible")
      $(".slide-title-webapp").removeClass("invisible")
      switchElementsSmooth($(".slide-title-business"),$(".slide-title-webapp"),section3percentage)
      $(".nav-3").addClass("is-selected")
    }
    if(scroll>slide4){
      $(".slide-title-business").addClass("invisible")
      $(".nav-3").removeClass("is-selected")
    }

  //==================WEBAPP TO MOBILE==================//
    var check5percentage=(scroll-slide4-buffer)/(slide5-slide4-buffer);
    check5percentage = Math.min(1, Math.max(0, check5percentage)); //Clamp percentage to [0 , 1]
    if(scroll<slide5){
      $(".slide-title-mobile").addClass("invisible");
      $(".nav-4").removeClass("is-selected")
    }
    if(scroll >= slide4 && scroll <= slide5){
      currentSection=$("#mobile")
      $(".slide-title-webapp").css('opacity',1-check5percentage);
      $(".slide-title-mobile").removeClass("invisible");
      $(".slide-title-mobile").css('opacity',check5percentage);
      $(".nav-4").addClass("is-selected")
    }
    if(scroll>slide5){
      $(".nav-4").removeClass("is-selected")
      $(".slide-title-webapp").addClass("invisible")
    }
  //==================MOBILE TO TABLET==================//
    var check6percentage=(scroll-slide5-buffer)/(slide6-slide5-buffer);
    if(scroll<slide6){
      $(".slide-title-tablet").addClass("invisible");
      $(".nav-5").removeClass("is-selected")
    }
    if(scroll >= slide5 && scroll <= slide6){
      currentSection=$("#tablet")
      $(".slide-title-tablet").removeClass("invisible");
      $(".slide-title-mobile").removeClass("invisible");
      switchElementsSmooth($(".slide-title-mobile"),$(".slide-title-tablet"),check6percentage)
      $(".nav-5").addClass("is-selected")
    }
    if(scroll>=slide6){
      $(".nav-5").removeClass("is-selected")
      $(".slide-title-mobile").addClass("invisible");
      $(".slide-title-tablet").removeClass("invisible");
    }
    //==================TABLET TO ALL DEVICES==================//
    var check7percentage=(scroll-slide6-buffer)/(slide7-slide6-buffer);
    var check7percentagehalfway=(check7percentage-0.5)
    check7percentage = Math.min(1, Math.max(0, check7percentage)); //Clamp percentage to [0 , 1]
    check7percentagehalfway=Math.min(1, Math.max(0, check7percentagehalfway));
    var check7percentagedelayed=(scroll-slide6-buffer*2.5)/(slide7-slide6-buffer*2.5);
    if(scroll<slide7){
      $(".nav-6").removeClass("is-selected")
    }

    if(scroll >= slide6 && scroll <= slide7){  
      currentSection=$("#alldevices")    
      switchElementsSmooth($(".slide-title-tablet"),$(".slide-title-all"),check7percentage,0,50);
      $(".nav-6").addClass("is-selected")
    }
    if(scroll>slide7){
      $(".nav-6").removeClass("is-selected")
      $(".slide-title-skills").removeClass("invisible");
    }
    //========================ALL DEVICES TO SKILLS================//
    var check8percentage=(scroll-slide7-buffer)/(slide8-slide7-buffer);
    var check8percentagehalfway=(check8percentage-0.5)
    check8percentage = Math.min(1, Math.max(0, check8percentage)); //Clamp percentage to [0 , 1]
    check8percentagehalfway=Math.min(1, Math.max(0, check8percentagehalfway));
    var check8percentagedelayed=(scroll-slide7-buffer*2.5)/(slide8-slide7-buffer*2.5);
    if(scroll<slide8){
      $(".nav-7").removeClass("is-selected")
    }

    if(scroll >= slide7 && scroll <= slide8){  
      currentSection=$("#skills")      
      $(".technologies-icon-container").css("filter","grayscale("+(1-check8percentagedelayed)*100+"%)");
      switchElements($(".slide-title-all"),$(".slide-title-skills"),check8percentage,3.5,1);
      switchElements($(".slide-title-all"),$(".slide-content-skills"),check8percentage,3.5,2);
      $(".nav-7").addClass("is-selected")
    }
    if(scroll>slide8){    
      //$(".slide-title-skills").removeClass("invisible");    
      $(".nav-7").removeClass("is-selected")
    }

    // if(scroll>slide7){
      //  $(".slide-title-all").addClass("invisible");
    //   $(".slide-title-tablet").removeClass("invisible");
    //   $(".slide-title-skills").css("opacity",1);
    //   $(".slide-content-skills").css("opacity",1);
    // }
      
    //========================SKILLS TO CONTACT================//
    var check9percentage=(scroll-slide8-buffer)/(slide9-slide8-buffer);
    var check9percentagedelayed=(scroll-slide8-buffer*2.5)/(slide9-slide8-buffer*2.5);
    if(scroll<slide9){
      $(".slide-title-contact").addClass("invisible");
      $(".nav-9").removeClass("is-selected")
      $(".nav-8").removeClass("is-selected")
    }
    if(scroll >= slide8 && scroll < slide9){
      currentSection=$("#contact")
      $(".slide-logo-contact").removeClass("logo-normal-state");
      //ifelse statement necessary because the elements would block the previous slide's icons on hover. 
      //Normally this would not be a problem since there are no elements to interact with in other slides
      if(scroll>=slide8+vh*0.6){
        $(".slide-logo-contact").removeClass("invisible");
        $(".slide-title-contact").removeClass("invisible");
      }else{
        $(".slide-logo-contact").addClass("invisible");
        $(".slide-title-contact").addClass("invisible");

      }
      //switchElementsSmooth($(".slide-title-tablet"),$(".slide-logo-contact"),check8percentage,0,350,2.5,6.5);
      changeRotation($(".slide-logo-contact"),90,0,check9percentagedelayed)
      $(".slide-title-contact").css('opacity',check9percentagedelayed);
      $(".slide-logo-contact").css('opacity',check9percentagedelayed);
      $(".nav-8").addClass("is-selected")
      $(".nav-9").removeClass("is-selected")
    }
    if(scroll>=slide9){
      $(".nav-8").removeClass("is-selected")
      $(".nav-9").addClass("is-selected")
      $(".slide-logo-contact").addClass("logo-normal-state");
      $(".slide-title-contact").css('opacity',1);
      $(".slide-title-contact").removeClass("invisible");
      $(".slide-logo-contact").removeClass("invisible");
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

function changeRotation(element,startValue="0",endValue,percentage){
  newValue = ((endValue - startValue) * percentage) + startValue
  element.css('transform','rotateY('+newValue+'deg)');
}

//This function "switches" two elements by changing their opacity
//It takes two Jquery elements and the scroll percentage as well as an optional delay factor for each element
function switchElements(currentElement,targetElement,percentage,delayFactorCurrent=3.5,delayFactorTarget=3.5){
  currentElement.css('opacity',1-percentage*delayFactorCurrent);
  targetElement.css('opacity',percentage*delayFactorTarget);
}


//A more advanced version of switchElements, it takes a lot more parameters due to being more customizable,
// and is also able to move them a bit.
//It takes two Jquery elements and the scroll percentage just as switchElements.
//offsetCurrent=amount that element 1 will move based on percentage
//offsetTarget=amount the element 2 will move based on percentage
//delayFactorCurrent=changes a value on the formula which makes the element 1 appear or dissapear quicker/slower based on percentage.
//delayFactorTarget=same as previous but for element 2
function switchElementsSmooth(currentElement,targetElement,percentage,offsetCurrent=50,offsetTarget=50,delayFactorCurrent=3.5,delayFactorTarget=3.5){
  moveCurrent=(percentage-0.2)*offsetCurrent;
  moveTarget=(percentage-0.2)*offsetTarget;
  currentElement.css('opacity',1-percentage*delayFactorCurrent);
  if(offsetCurrent!=0){
    currentElement.css('margin-top',moveCurrent);
  } 
  targetElement.css('opacity',-1+percentage*delayFactorTarget);
  if(offsetTarget!=0){
    targetElement.css('margin-bottom',-moveTarget);
  }
}

function smoothScroll(target) {
  $('body,html').animate(
    {'scrollTop':target.offset().top+5},
    800
  );
}




