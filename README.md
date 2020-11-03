1. 개발 환경 설정
- react router 설치 yarn add react-router-dom

2. Router
- path 에 속하는 경로에있는 모든 컴포넌트를 보여준다. path 가 완전 일치할 때만 보여주려면 exact 속성을 주면 된다.
** /about => / , /about 의 컴포넌트를 보여준다. 
- BrowerRouter : 일반적인 url 주소와 컴포넌트 랜더링
- HashRouter : 일반적인 url 주소에 # 이 포함되고 컴포넌트 랜더링
- MemoryRouter : url 주소는 변하지 않고 컴포넌트 랜더링