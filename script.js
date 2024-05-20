// 문제1) 배열과 객체 만들기

const users = [
  { 이름: "철수", 나이: 19, 성별: "남" },
  { 이름: "짱구", 나이: 20, 성별: "남" },
  { 이름: "유리", 나이: 21, 성별: "여" },
];

//문제2) 문제1에서 만든 데이터를 html에 보여주기 : forEach를 활용해보세요.

const userContainer = document.querySelector(".user-container");

users.forEach((users) => {
  let userhtml = `<h1>이름: ${users.이름}</h1>
  <h3>나이 : ${users.나이}</h3>
  <h3>성별 : ${users.성별}</h3>
  <hr>`;

  userContainer.insertAdjacentHTML("beforeend", userhtml);
});

//처음엔 user-container클래스에 boder-style 을 주려고 했는데, 아무래도 html에선 반복된 세 div가 하나로 취급되기 때문에 요소의 전체에 씌워지는 형태로만 구성이 되었다.
//그래서 그냥 만만하게 hr을 아래에 추가했다. 품 좀 더 들이면 이 <h1> 태그들을 다시 div 로 감싸서 스타일 넣으면 될거같은데 귀찮았음 ㄱㅡ

//문제3) find 메소드 : 문제1에서 만든 객체들의 배열을 활용하여 성별이 여자인 데이터를 한 명 찾아 콘솔에 출력해보세요.

const womanuesr = users.find((user) => {
  return user.성별 === "여";
});

console.log(womanuesr);

//문제4) filter 메소드 : 문제1에서 만든 객체들의 배열을 활용하여 성별이 남자인 데이터를 필터링하여 콘솔에 출력해보세요.

const manuesr = users.filter((user) => {
  return user.성별 === "남";
});

console.log(manuesr);

// 문제5) map 연습 문제
// 문제1에서 만든 객체들의 배열을 활용하여 **모든 데이터의 나이에 10을 더한 새로운 배열**을 콘솔에 출력해보세요.
// 단, 문제1에서 만든 **기존 데이터는 변경되면 안됩니다.**
// 기존 데이터가 변경되지 않았는지 확인하기 위해 **기존 데이터와 새로운 배열을 모두 콘솔에 출력**해보세요.

const after10year = users.map((user) => {
  return {
    이름: user.이름,
    나이: user.나이 + 10,
    성별: user.성별,
  };
});

console.log(after10year);

console.log(users);

// 문제6) sort 연습 문제

// 문제1에서 만든 객체들의 배열을 활용하여 **나이순으로 정렬해보세요. (내림차순으로 정렬)**
// sort는 기존의 데이터를 변경하는 함수입니다. **spread operator로 복사본 생성 후** 진행해보세요.
// 기존 데이터가 변경되지 않았는지 확인하기 위해 **기존 데이터와 새로운 배열을 모두 콘솔에 출력**해보세요.

// const age = users.sort((a, b) => {
//   let a = { ...users};
//   ...a, return b.나이 - a.나이;
// });

// 복사본 생성해서 데이터 추가로 변경하는 함수 작성하는 게 어려움.
// let a = [1, 2, 3]
// let b = [...a] // b는 새로운 배열
// 이 상태에서 let c = [...a, 덧붙일 새 배열 값] 하면 배열이 늘어나는데 이건 덧붙이는 거고 원본을 두고 수정해서 내보내는 법이 헷갈림.

//문제7) destructuring (구조 분해 할당) 문법 활용

const user = {
  이름: "병수",
  나이: 20,
  주소: "시골",
};

const { 이름, 나이, 주소 } = user;

console.log(이름);
console.log(나이);
console.log(주소);
