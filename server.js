// let arr=["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg"];
// let i=0;

//     let hello=arr[2];
//     console.log(hello);
//     // document.getElementById("slide_bar").style.background=`${url(`${hello}`)}`;
//     arr.forEach(element => {

//     document.getElementById("slide_bar").style.background="url("+element+")";
        
//     });
//     console.log(arr[0],typeof(arr[0]))
//     let slideIndex = 0;


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}