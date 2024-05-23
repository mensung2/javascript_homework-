// const user = {
//   이름: "병수",
//   나이: 20,
//   주소: "시골",
// };

// // 1. user 데이터를 로컬스토리지에 저장하세요. 이때 로컬 스토리지의 `key`는 `user`로 저장합니다. 단, `value`에 `[object Object]` 처럼 저장되면 안됩니다.

// localStorage.setItem("user", JSON.stringify(user));

// // 2. 로컬 스토리지에 저장된 데이터(`user`)를 조회한 후 콘솔에 출력해보세요. 단, 문자열이 아니라 객체로 출력되어야 합니다.

// const userData = JSON.parse(localStorage.getItem("user"));

// console.log(userData);

// // 3. 조회한 로컬 스토리지 데이터의 나이를 30으로 변경 후 다시 로컬 스토리지에 저장해보세요.

// // const newUserData = userData.map((user) => {
// //   return {
// //     ...user,
// //     나이: 30,
// //   };
// // });

// // localStorage.setItem("user", JSON.stringify(newUserData));

// // 안됨? 왜 안되지? 하면서 들었던 의문 : 꼭 map을 써야 하는 걸까...

// // 4. 조회한 로컬 스토리지의 데이터(`user`)를 삭제하는 코드를 작성하는 코드를 작성해보세요. 그리고 다시 `user` 데이터 조회 후 `null`이 출력되는지 확인하세요.

// window.localStorage.removeItem("user");

// console.log(userData);

// 문제1) 아래 API 문서를 확인하고, 게시물 목록을 조회하여 콘솔에 출력해보세요.

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data));
