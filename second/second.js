//문제 3. 현재 브라우저 스크롤 시 수직으로 얼마나 스크롤 됐는지 출력되도록 코드를 작성해보세요.
window.addEventListener("scroll", () => {
  console.log(window.scrollY);
});

//return 등을 이용해서 직접 html에 결과값을 쓰고 싶은데, 어떻게 작성해야 할 지 모르겠어서 일단 콘솔로그로만.

//문제 4. 1부터 10까지 숫자를 for문을 활용하여 출력해보세요.

for (let i = 1; i < 11; i++) {
  console.log(i);
}

//문제 5. 1부터 20까지 숫자 중 짝수만 출력하도록 코드를 작성해보세요.

for (let sn = 0; sn < 21; sn++) {
  if ((sn % 2 == 0, sn > 1)) {
    console.log(sn);
  }
}

//문제 6. 3초 후에 “3초 후에 출력되는 텍스트입니다.” 라는 콘솔로그가 출력되도록 코드를 작성해보세요.
setTimeout(function () {
  console.log("3초 후에 출력되는 텍스트입니다.");
}, 3000);
