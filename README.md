1. 개발 환경 설정
- react router 설치 yarn add react-router-dom

2. Router
- path 에 속하는 경로에있는 모든 컴포넌트를 보여준다. path 가 완전 일치할 때만 보여주려면 exact 속성을 주면 된다.
** /about => / , /about 의 컴포넌트를 보여준다. 
- BrowerRouter : 일반적인 url 주소와 컴포넌트 랜더링
- HashRouter : 일반적인 url 주소에 # 이 포함되고 컴포넌트 랜더링
- MemoryRouter : url 주소는 변하지 않고 컴포넌트 랜더링

3. Link
- a 태그로의 url 이동은, 웹 페이지가 처음부터 새로 로딩되는 행위로, SAP 에는 어울리지 않는다.
- Link 컴포넌트를 사용하여, 페이지 이동이 없이 url 주소를 변경하고, 그에 해당하는 컴포넌트를 랜더링 한다.