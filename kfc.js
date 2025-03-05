new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: 30,
  // Pagination bullets
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
  },
  // Navigation arrows
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  // Responsive breakpoints
  breakpoints: {
      0: {
          slidesPerView: 1
      },
      768: {
          slidesPerView: 2
      },
      1024: {
          slidesPerView: 3
      }
  }
});
function sliderbar(){
    const slide=document.querySelector('.slid-bar');
    slide.style.display="flex";
   }
   function hidslid(){
    const slide=document.querySelector('.slid-bar');
    slide.style.display="none";
   }
   let friend=document.querySelector("body");
let flag=0;
let btn=document.querySelector(".btn2");

let btn1=document.addEventListener("click",()=>{
    
    friend.style.backgroungColor="white";
    friend.style.color="black";
    
    
})
document.addEventListener("oncontextmenu",function(a){
    a.preventDefault()
},false)