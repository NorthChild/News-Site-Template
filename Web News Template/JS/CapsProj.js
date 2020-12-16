/* ##################################################################

- check for all measurements, make sure they re all fluid (NO PX)
- fix the multiple id issue (photoLeft and photoRight)
- use sticky footer on credits page


################################################################## */

/* ############################################################## */
// on start this closes all windows and opens the welcoming page

function closeAll() {
  document.getElementById('initialScreen').style.display = 'block';
  document.getElementById('cyberPg').style.display = 'none';
  document.getElementById('spacePg').style.display = 'none';
  document.getElementById('creditsPg').style.display = 'none';
  document.getElementById('imagePg').style.display = 'none';
}

/* ############################################################## */
// on click this changes what is displayed, whether one or another page

function cyberChange() {
  document.getElementById('cyberStyle').className = 'active';
  document.getElementById('spaceStyle').className = 'nonActive';
  document.getElementById('creditsStyle').className = 'nonActive';
  document.getElementById('imageStyle').className = 'nonActive';

  document.getElementById('cyberPg').style.display = 'block';
  document.getElementById('imagePg').style.display = 'none';
  document.getElementById('spacePg').style.display = 'none';
  document.getElementById('creditsPg').style.display = 'none';
  document.getElementById('initialScreen').style.display = 'none';
}

function spaceChange() {
  document.getElementById('cyberStyle').className = 'nonActive';
  document.getElementById('spaceStyle').className = 'active';
  document.getElementById('creditsStyle').className = 'nonActive';
  document.getElementById('imageStyle').className = 'nonActive';

  document.getElementById('spacePg').style.display = 'block';
  document.getElementById('imagePg').style.display = 'none';
  document.getElementById('cyberPg').style.display = 'none';
  document.getElementById('creditsPg').style.display = 'none';
  document.getElementById('initialScreen').style.display = 'none';
  document.getElementById('imageStyle').className = 'none';
}

function credistsChange() {
  document.getElementById('cyberStyle').className = 'nonActive';
  document.getElementById('spaceStyle').className = 'nonActive';
  document.getElementById('creditsStyle').className = 'active';
  document.getElementById('imageStyle').className = 'nonActive';

  document.getElementById('creditsPg').style.display = 'block';
  document.getElementById('imagePg').style.display = 'none';
  document.getElementById('spacePg').style.display = 'none';
  document.getElementById('cyberPg').style.display = 'none';
  document.getElementById('initialScreen').style.display = 'none';
}

function imgChange() {
  document.getElementById('imageStyle').className = 'active';
  document.getElementById('cyberStyle').className = 'nonActive';
  document.getElementById('spaceStyle').className = 'nonActive';
  document.getElementById('creditsStyle').className = 'nonActive';


  document.getElementById('imagePg').style.display = 'block';
  document.getElementById('creditsPg').style.display = 'none';
  document.getElementById('spacePg').style.display = 'none';
  document.getElementById('cyberPg').style.display = 'none';
  document.getElementById('initialScreen').style.display = 'none';
}

/* ############################################################## */


function upDate(element){
 /* In this function you should
    1) change the url for the background image of the div with the id = "image"
    to the source file of the preview image */
    var x = document.getElementById('carousel').style.backgroundImage="url(" + element.src + ")";
	}

function unDo(){
 /* In this function you should
    1) Update the url for the background image of the div with the id = "image"
    back to the orginal-image.  You can use the css code to see what that original URL was */
    document.getElementById('carousel').style.backgroundImage = "url('https://t3.ftcdn.net/jpg/02/38/16/94/240_F_238169477_Daonex5XsbOWLdcL0x8IcQ91RCJGubDy.jpg')"
    /*
    2) Change the text  of the div with the id = "image"
    back to the original text.  You can use the html code to see what that original text was

    document.getElementById('carouselImg').innerHTML = 'Hover over an image below to display here.';
    */
  }

/* ############################################################## */

  function upDateII(element){
   /* In this function you should
      1) change the url for the background image of the div with the id = "image"
      to the source file of the preview image */
      var y = document.getElementById('carouselII').style.backgroundImage="url(" + element.src + ")";
  	}

  function unDoII(){
   /* In this function you should
      1) Update the url for the background image of the div with the id = "image"
      back to the orginal-image.  You can use the css code to see what that original URL was */
      document.getElementById('carouselII').style.backgroundImage = "url('https://t4.ftcdn.net/jpg/02/31/20/19/240_F_231201966_EnJL8kB3RJPxy9TsqXnh31RZRwxkeNdi.jpg')"
      /*
      2) Change the text  of the div with the id = "image"
      back to the original text.  You can use the html code to see what that original text was

      document.getElementById('carouselImg').innerHTML = 'Hover over an image below to display here.';
      */
    }
