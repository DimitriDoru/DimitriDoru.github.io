const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Me giving you back rubbs and playing with your hair";
  gif.src ="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHdxdGppdTBjd3Y4bnplazNpYWtleHo5eXV5MGNucnR4cGlrMDE0cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VJrQgIxar9GwMDztbg/giphy.gif";
  yesBtn.style.display = "none";
  const yremainingBtn = document.querySelector('.btn-group button:not(.no-btn)');
    // Center the remaining button by setting margin to auto
    yremainingBtn.style.margin = 'auto';
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
  noBtn.style.transition = "all 2s"
});
