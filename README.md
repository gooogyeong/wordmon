# wordmon

## 서비스 소개 
워드몬은 심심함을 달래주고, 어휘력을 높여주며, 은근히 승부욕을 자극하는 끝말잇기 게임 웹 어플리케이션입니다. 

## 주요 기능
1. 구글 소셜 로그인
<img src="./gif/signin.gif"  width="600" height="300">

2. 회원가입
<img src="./gif/signup.gif"  width="600" height="300">

3. 프로필사진 변경
<img src="./gif/profile_pic.gif"  width="600" height="300">

4. 끝말잇기 - 개인전
<img src="./gif/soloplay.gif"  width="600" height="300">

5. 최고점수 관리
<img src="./gif/update_score.gif"  width="600" height="300">

6. 채팅
<img src="./gif/chat.gif"  width="600" height="300">

7. 끝말잇기 - 단체전
<img src="./gif/multiplay_start2.gif"  width="600" height="300">
<img src="./gif/ready.gif"  width="600" height="300">
<img src="./gif/multiplay.gif"  width="600" height="300">
<img src="./gif/multiplay_end.gif"  width="600" height="300">

## Tech Stack
- react (+ react-router-dom, react-google-login)
- redux (+ react-redux, redux-thunk)
- axios
- socket.io-client
- material-ui (/core, /icons, react-rainbowfy)

## Usage

서버와의 연동을 위해서는 클라이언트와 서버 파일을 설치해 함께 실행시켜주세요.

1. 코드 복사
`git clone https://github.com/gooogyeong/wordmon.git`

2. 패키지 설치
`npm install`

3. 실행
`npm start` (클라이언트)
`node app.js` (서버)

## 디렉토리 구조
```
├── src/
     └── components/
     |    ├──  Login/                      - login page component
     |    ├──  Login.css/                  - login page css
     |    ├──  Signup/                     - signup page component
     |    ├──  Mypage/                     - mypage page component
     |    ├──  Mypage.css/                 - mypage page css
     |    ├──  Play/                       - solo play page component
     |    ├──  Play/                       - solo play page css
     |    ├──  Room/                       - multiplay page component
     |    ├──  Room/                       - multiplay page css
     |    ├──  Usercard/                   - multiplay page 내 user info component
     |    ├──  Usercard/                   - multiplay page 내 user info css
     |    ├──  Chatbox/                    - multiplay page 내 user 채팅창 component
     |    └──  Chatbox/                    - multiplay page 내 채팅창 css
     ├── actions/
     |    ├── loginActions/                - login page에 필요한 함수들
     |    ├── signupActions/               - signup page에 필요한 함수들
     |    ├── myPageActions/               - mypage page에 필요한 함수들
     |    └── playActions/                 - play page에 필요한 함수들
     |
     ├── reducers/
     |    ├── loginReducer/                - login page의 state를 관리하는 reducer
     |    ├── signupReducer/               - signup page의 state를 관리하는 reducer
     |    ├── mypageReducer/               - mypage page의 state를 관리하는 reducer
     |    ├── playReducer/                 - play page의 state를 관리하는 reducer
     |    └── rootReducer/                 - 각 reducer들을 관리하는 root reducer
     |
     ├── App                              - 메인 자바스크립트
     ├── App.css                          
     └── index                            - 어플리케이션 엔트리 포인트
```

## API 문서

/user <br>

- GET - 유저 정보 <br>
  **request** <br>
  axios.get('http://localhost:4000/user') <br>
  **respons**e <br>
  cookie에 userId 토큰으로 로그인된 유저인지 식별 후 <br>
  res.json({ <br>
  nickname:, <br>
  profileImg:, <br>
  score <br>
  }) <br>

- POST - 유저 등록 <br>
  **request** <br>
  axios.post('http://localhost:4000/user', {
  googleToken:,
  nickname:,
  }) <br>
  **response** <br>
  res.json({ <br>
  nickname:, <br>
  profileImg:, <br>
  score <br>
  }) <br>

/user/siginin<br>

- POST - 로그인 (토큰을 쿠키에 저장)<br>
  **request** <br>
  axios.post('http://localhost:4000/user/siginin') <br>
  **response** <br>
  res.json({ <br>
  nickname:, <br>
  profileImg:, <br>
  score <br>
  }) <br>

/user/siginout<br>

- POST - 로그아웃 <br>
  **request** <br>
  axios.post('http://localhost:4000/user/siginout') <br>
  **response** <br>
  쿠키에서 로그인 토큰 삭제

/user/:nickname <br>

- GET - 닉네임 중복검사<br>
  **request** <br>
  axios.get('http://localhost:4000/user/:nickname') <br>
  **response** <br>
  res.send(true/false)

/user/nickname <br>

- PATCH - 닉네임 수정<br>
  **request** <br>
  axios.patch('http://localhost:4000/user/nickname', {nickname:'변경할닉네임'})<br>
  **response** <br>
  res.send(nickname updated: '변경된 닉네임');<br>

/user/profile-img <br>

- PATCH - 프로필 이미지 수정<br>
  **request** <br>
  axios.patch('http://localhost:4000/user/profile-img', {file: 변경할 프로필 이미지})<br>
  **response** <br>
  res.send(nickname updated: '변경된 프로필 이미지 경로');<br>

/user/score <br>

- PATCH - 최고 점수 수정 <br>
  **request** <br>
  axios.patch('http://localhost:4000/user/score', {score:'변경할 최고점수'})<br>
  **response** <br>
  res.send(nickname updated: '변경된 최고점수');<br>

---

/word <br>

- POST - 단어 사전 체크 <br>
  **request** <br>
  axios.patch('http://localhost:4000/word', {word:'검사할 단어'})<br>
  **response** <br>
  res.send(true);<br>
  
--- socket통신
/room
