const imagedata = document.querySelectorAll("[data-src]");
console.log("inside lazyload.js");

function preloadImage(img) {
  const src = img.getAttribute("data-src");
  if (!src) {
    return;
  }
  img.src = src;
  img.onload = function() {
    img.removeAttribute('data-src');
  }
}

const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px 100px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      preloadImage(entry.target);
      imgObserver.unobserve(entry.target);
      console.log("image has been lazy loaded");
    }
  })  
}, imgOptions);

imagedata.forEach(image => {
  imgObserver.observe(image);
});