
# 10/25일 기분: 😀 👍

오늘 개발한 일 
오늘은 회원가입, 로그인, 유저페이지를 개발했다. 
회원가입과 로그인은 firebase를 이용하였고, 유저페이지는 로그인한 유저 정보를 저장하기 위해 localStorage를 사용해 user가 로그인한 이메일을 유저페이지에서 이메일뜨고 ~님 반갑습니다로 나오게 하였고
localStorage가 null이면 로그인하러 가겠냐는 div가 나오게 ui를 만들었다.
회원가입은 이메일과 비밀번호만 받게 짜놓았고,
로그인페이지는 firebase에서 주는 error코드를 switch문으로 해서 그 error에 맞는 문구가 뜨게 만들었다.
그리고 input, form, button은 components로 만들어 사용을 해보았다.

기분 한줄평 : 오늘은 잘 집중해서 코딩을해서 기쁘다

# 10/26일 기분: 🤨 
오늘은 2시간밖에 못했다, 다연부도 가야해서.. 일찍할껄,
오늘은 idea페이지에서 구상하느라 애좀 먹었다 어떤식으로 해야.. firebase db는 사용해본적이 없어서..
등록이랑 idea페이지만 하면 이 프로젝트는 끝인디.. 잘 찾아보고 공부해보자 화이팅.

# 10/27 주일은 연합예배로 쉼
# 10/28 기분 : 😆
오늘은 저녁부터 해서 3시간정도 개발을 진행하였음.
오늘은 firebase db랑, firebase storage사용을 하였음, 이미지파일을 올리려면 url이 필요한데 그 url을 storage로 사용하였음.
그리고 createPage작업에서 이미지 파일을 받고 그 파일을 firebasestorage에 넘겨주는데 비동기 처리로 url을 넘기고 받게하였음. 
idea페이지는 디테일페이지로 가게 하고 싶은데.. 아직 그거는 너무 어렵다. 대신 context에 새롭게 추가하여서 firebase db에 있는 데이타들을 불러오도록 하였음.
내일은 idea페이지 ui좀 만지고, 사용자 별로 토큰값 받아서 수정, 삭제, 그리고 idea페이지에 어떤 유저가 올렸는지 보이게 할 예정.
그렇게 하면 일단은 프로젝트 준완성

# 10/29일 개발 못함
이유는 대학교 수업이슈

# 10월30일 기분 : 🤩
오늘은 로컬스토리지를 활용해서 create, delete, UI전체 조금 수정을 하였다.
오늘한 개발일지, create할때 firebase에 로컬스토리지에 저장된 userID를 같이 보내서 idea페이지에서 어떤 유저가 올린 게시글인지도 보이게 하였고
이제 textarea에서 띄어쓰기나 공백을 했을때 그대로 받아오기 위해 p태그인 .recipe 에 white-space: pre-line적용하여 사용자들이 문단 띄운것도 활용이 되게 하였다.
삭제는 로컬에 있는 아이디와 firebase에 있는 user라는 그 아이디 값을 비교해 똑같다면 삭제가 될 수 있게 하였다.
이제 개발 완전 막바지다 베포를하면 완성... UI가 이상하긴 하지만.. 잘 완성시킬것이다.

# 11월 2일 기분 : 🥳
오늘은 많은 부분을 좀 수정했다, 로그인 하면 6시간뒤 자동로그아웃 설정, 그리고 디테일 페이지가 새로고침을 하면 아무래도 비동기처리로 데이터를 받아오다 보니,
데이터가 먼저 안받아진 상태에서 프로퍼티를 읽다보니 에러가 생긴다. 그래서 로딩같은 로직하나 추가,
idea페이지에서도 콘솔에 비슷한 오류문자가 떠서 loading 컴포넌트를 추가하였다 깨달은점 : 비동기처리 할때 로딩 로직은 필수인거 같다.
그리고 로그인 안된 상태에서는 createbutton이 나타나지 않게 처리함. 
로그인할때 엔터치면 회원가입으로 넘어가졌는데 회원가입 버튼에 type을 설정해 엔터누르면 로그인이 바로되게 변경하였다.
그리고 오늘은 대망의 npm run build하는날 vercel이나 netlfy에서 잘 베포가 됐으면 한다.
# 11월 2일
네트리파이로 배포하였는데 외부api썼던게 http로 되어있었어서 외부api연동한것들은 안떴었는데 https로 바꾸니 잘 된다.
베포 성공!
🤩🤩🤩🤩🤩🤩

