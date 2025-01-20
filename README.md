# 현재 경로에 프로젝트 폴더 생성 및 구성

npm create vite@latest <프로젝트*폴더*이름>

# > React 선택

# > JavaScript + SWC 혹은 TypeScript + SWC 선택

# 프로젝트 경로로 이동

cd <프로젝트*폴더*이름>

# 의존성 패키지 설치

npm i

# 현재 경로를 새로운 VS Code 창으로 열기

code .

# 혹은 현재 VS Code 창에서 열기

code . -r

# 프로젝트 실행

npm run dev

# zustand 설치

npm i zustand

# React Router 설치

npm install react-router-dom localforage sort-by

# Node.js 타입 선언 설치

npm install @types/node

# ES 모듈 형식으로 제공되는 lodash 라이브러리의 설치. 필요한 유틸리티 함수만 선택적으로 가져와서 사용할 수 있습니다.

npm i lodash-es
npm i -D @types/lodash-es

# Zustand의 Immer 미들웨어를 사용하기 위해 설치해야 하는 피어 의존성(Peer Dependency)입니다.

npm i immer

# ESLint 설치

npm i -D eslint prettier eslint-plugin-react eslint-config-prettier eslint-plugin-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser

패키지 설명 비고
eslint ESLint 코어 패키지 / 코드 품질 확인 및 버그, 안티패턴(Anti-pattern)을 감지
prettier Prettier 코어 패키지 / 코드 스타일 및 포맷팅 관리, 일관된 코드 스타일을 적용 가능
eslint-plugin-react React 지원 플러그인, 문법 분석 및 검사 지원
eslint-config-prettier ESLint와 Prettier의 충돌 방지
eslint-plugin-prettier Prettier 규칙을 ESLint 규칙으로 통합
@typescript-eslint/eslint-plugin 타입스크립트 지원 플러그인
@typescript-eslint/parser 타입스크립트 코드 분석 및 검사 지원
eslint-plugin-react-hooks React Hooks 사용 규칙을 강제, 실수를 방지에 도움이 되는 규칙 제공 Vite에 포함됨
eslint-plugin-react-refresh React Refresh 사용 규칙 제공 Vite에 포함됨
