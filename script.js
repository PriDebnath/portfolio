let myTitle = document.querySelector(".my_title");

// to stay visiable
setTimeout(() => {
  myTitle.classList.add("visible");
}, 4500);

// logic for images to go full scrreen

let fullImageContainer = document.getElementById("full_image_container");

let fullImage = document.getElementById("full_image");

let btn = document.getElementById("btn");

let images = document.querySelectorAll(".image");

images.forEach((image) => {
  let eventOnImg = image.addEventListener("click", (pri) => {
    fullImageContainer.style.display = "flex";
    fullImage.src = pri.target.src;
  });

  return eventOnImg;
});

btn.addEventListener("click", (pri) => {
  fullImageContainer.style.display = "none";
});

// logic for input hover effect
let inputs = document.querySelectorAll("input");
let labels = document.querySelectorAll("label");

inputs.forEach((input) => {
  let handleMouseover = input.addEventListener("mouseover", () => {
    labels.forEach((label) => {
      label.style.opacity = "1";
    });
  });

  let handleMouseout = input.addEventListener("mouseout", () => {
    let labels = document.querySelectorAll("label");

    labels.forEach((label) => {
      label.style.opacity = "0";
    });
  });
  // removing eventEisner
  removeEventListener("mouseover", handleMouseover);
  removeEventListener("mouseout", handleMouseout);
});

// load more projects

let loadMore = document.querySelector(".loadMore")
loadMore.addEventListener("click",()=>{
  console.log("click");
  let image_container_images = document.querySelectorAll(".image_container_images")
  image_container_images.forEach((project)=>{
    project.classList.remove("hide-project")
    loadMore.classList.add("hide-project")
  })
})

// show hide contact form

let form = document.querySelector("form")
console.log(form.clientHeight);
let mailIcon = document.querySelector(".mail")
mailIcon.addEventListener('click',()=>{
  console.log('cli');
console.log(form.clientHeight);
 window.scrollTo({
  top : document.clientHeight ,
  behavior : "smooth"
 })
 form.classList.toggle("form-hide")
})
