const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Me giving you back rubbs and playing with your hair";
  gif.src ="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzFsbG9pYjQ0YzVzYjByemZiMjZ1bzBncnppOGw5cmZsaDVjNHJ2aSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xUA7aVwuBDwtKhspos/giphy.gif";
  gif.src ="https://tenor.com/bv6r3.gif";
  noBtn.style.display = "none";
  const remainingBtn = document.querySelector('.btn-group button:not(.no-btn)');
    // Center the remaining button by setting margin to auto
    remainingBtn.style.margin = 'auto';
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
