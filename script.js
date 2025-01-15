const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Me giving you back rubbs and playing with your hair";
  gif.src ="https://media.giphy.com/media/giJwjx5braiNq/giphy.gif?cid=790b7611tp5kgrfl4hw4voixdri97f4g9wqwduhx5t43agq8&ep=v1_gifs_search&rid=giphy.gif&ct=g";
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
