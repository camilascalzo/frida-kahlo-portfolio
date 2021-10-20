// const openImg = document.querySelectorAll(".work-img-wrapper");
// const openImgArray = Array.from(openImg).entries();
const img = document.querySelectorAll("#modal-img-wrapper div");
// const imgArr = Array.from(img);
const nextBtn = document.getElementById("modal-btn-next");
const prevBTn = document.getElementById("modal-btn-prev");
const closeModalBtn = document.getElementById("modal-close");
const modal = document.getElementById("modal");
let idx = 0;
let intViewportWidth = window.innerWidth;

// const workImg = document.querySelectorAll(".work-img");
// const workImgArray = Array.from(workImg);
function getImage(imgId) {
    return document.getElementById("work-img-"+imgId);
}

window.addEventListener("resize", function () {
  intViewportWidth = window.innerWidth;
  console.log(intViewportWidth);
});

function openModal(id) {
    // debugger;
  if (isResponsive()) {
    idx = id;
    modal.style.display = "block";
    changeImg();
  }
}

function isResponsive() {
    return intViewportWidth > 700;
  }

function changeImg() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }
  img.forEach((item) => {
    item.style.transform = `translateX(${-idx * 700}px)`;
  });
}

prevBTn.addEventListener("click", () => {
  idx--;
  changeImg();
});

nextBtn.addEventListener("click", () => {
  idx++;
  changeImg();
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});


