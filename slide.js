var count = 0;

// 다음 버튼
document.querySelector(".afterBtn").addEventListener("click", function () {
  if (count < 18) {
    count += 9;
    document.querySelector(
      ".container"
    ).style.transform = `translateX(-${count}00px)`;
  }
});

// 이전 버튼
document.querySelector(".beforeBtn").addEventListener("click", function () {
  if (count > 0) {
    count -= 9;
    document.querySelector(
      ".container"
    ).style.transform = `translateX(-${count}00px)`;
  }
});

//  선택 버튼
document.querySelector(".b1").addEventListener("click", function () {
  count = 0;
  document.querySelector(
    ".container"
  ).style.transform = `translateX(-${count}00px)`;
});

document.querySelector(".b2").addEventListener("click", function () {
  count = 9;
  document.querySelector(
    ".container"
  ).style.transform = `translateX(-${count}00px)`;
});

document.querySelector(".b3").addEventListener("click", function () {
  count = 18;
  document.querySelector(
    ".container"
  ).style.transform = `translateX(-${count}00px)`;
});
