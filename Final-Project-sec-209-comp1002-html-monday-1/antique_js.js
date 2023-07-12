var introPage = document.getElementById('lower-section-intro');
var productPage = document.getElementById('lower-section-product');
var contactPage = document.getElementById('lower-section-contact');

var imgSection = document.getElementById('img-section');

var productImages = document.getElementsByClassName('img-product');
var lowerSections = [introPage, productPage, contactPage];
var productImgBtns = ['product1', 'product'];
var menuIds = ['introduction', 'product', 'contact'];





function lowerSectionListeners(x, array){

  if(x != array.length) {

  document.getElementById(array[x]).addEventListener('click', function(){
    
    for(var i = 0; i < lowerSections.length; i++){
      
    if(lowerSections[i].id == 'lower-section-intro' && array[x] == 'introduction')
       lowerSections[i].style.display = 'inherit';
      
    else if(lowerSections[i].id == 'lower-section-product' && array[x] == 'product'){
       for(var k = 0; k < productImages.length; k++){
           productImages[k].style.display = 'none';
  }
       lowerSections[i].style.display = 'flex';
    }
    
    else if(lowerSections[i].className == 'lower-sections ' + array[x] && lowerSections[i] != introPage)
            lowerSections[i].style.display = 'flex';
    
    else lowerSections[i].style.display = 'none';
  }
})
  
  return lowerSectionListeners(x+1, array);
}
  
   else if(x == array.length) 
   return;
}


lowerSectionListeners(0, menuIds);




function imgBtnListeners(x, array){
  
  if(x != array.length) {

  document.getElementById(array[x]).addEventListener('click', function(){

  for(var j = 0; j < productImages.length; j++){
    if(productImages[j].className == 'img-product ' + array[x]) productImages[j].style.display = 'inherit';
    else productImages[j].style.display = 'none';
  }
})
  return imgBtnListeners(x+1, array);
}
                  
 else if(x == array.length) 
   return;
}

imgBtnListeners(0, productImgBtns);
