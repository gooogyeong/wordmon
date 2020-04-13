//!반.드.시 git push할때는 client id 지워야합니다!
//!Github에 push X
//gitignore에는 /src/config/google_client_id.js이렇게 되어있기 때문에
//해당 파일의 파일명이 google_client_id.js일때는 push되지 않습니다.
//TODO: 이 파일의 이름에서 example을 삭제, google_client_id.js로 만든 후에
//TODO: google client id를 입력
export const GOOGLE_CLIENT_ID = YOUR_GOOGLE_CLIENT_ID;
