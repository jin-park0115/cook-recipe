# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

#10/25일 
오늘 개발한 일 
오늘은 회원가입, 로그인, 유저페이지를 개발했다. 
회원가입과 로그인은 firebase를 이용하였고, 유저페이지는 로그인한 유저 정보를 저장하기 위해 localStorage를 사용해 user가 로그인한 이메일을 유저페이지에서 이메일뜨고 ~님 반갑습니다로 나오게 하였고
localStorage가 null이면 로그인하러 가겠냐는 div가 나오게 ui를 만들었다.
회원가입은 이메일과 비밀번호만 받게 짜놓았고,
로그인페이지는 firebase에서 주는 error코드를 switch문으로 해서 그 error에 맞는 문구가 뜨게 만들었다.
그리고 input, form, button은 components로 만들어 사용을 해보았다.
