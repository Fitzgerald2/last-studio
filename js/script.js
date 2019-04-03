/*jshint esversion: 6 */

// listen for scroll event on the page.
// When the scroll bar reachea x distance change background color

const bodyTag = document.querySelector('body');

// what happens when an action is done. listen out for any scroll events on our page.
document.addEventListener("scroll", function() {

  //do something when page is scrolled
  console.log("Page has been scrolled");

  //step 3 find out and store how far the scroll bar is from the bottom

  let distanceFromTop = window.scrollY;
  console.log(distanceFromTop);

  //if the distance from the top is greater than 1000px do an action.

  if (distanceFromTop > 1000) {

    //bodyTag.style.backgroundColor = "red";
    bodyTag.classList.add("brogue-active");

  } else {
    bodyTag.classList.remove("brogue-active");
    //bodyTag.style.backgroundColor = "white";

  }

  if (distanceFromTop > 4300) {

    //bodyTag.style.backgroundColor = "red";
    bodyTag.classList.add("stationary-active");

  } else {
    bodyTag.classList.remove("stationary-active");
    //bodyTag.style.backgroundColor = "white";

  }



});



//Light box

//when we click on image we want to show the white box
// show the image clicked on
//fade in
//when we click pn the light box the image disapears

//step 1 decide what html tag we will use and make them a contrasting

const images = document.querySelectorAll("section img");
console.log(images);
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox img");

console.log(images);


images.forEach(image => {
  image.addEventListener("click", function() {
    console.log("Image clicked");

    lightbox.classList.add("fadein");
    let imageSrc = this.getAttribute("src");
    console.log(imageSrc);
    lightboxImage.setAttribute("src", imageSrc);


  });
});

//When we click on the light box remove the fade in clas

lightbox.addEventListener("click", function() {
  lightbox.classList.remove("fadein");

});