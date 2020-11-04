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

4. 파라메터, 쿼리
- 파라메터: url 뒤에 붙는 조건이 아닌 값... react router 에서는 url /:[parameter] 로 parameter 이름을 지정해 준다.
    파라메터를 받을때에는 match 로 [parameter] 가 포함된 객체로 받는다. 
    파라메터가 여러개 일때는 /:[parameter]/:[parameter]... 로 설정하고, url 값도 같은 패턴으로 전송을 해야 한다.
    (Profile.js)
- 쿼리: 검색시 검색 조건 url 에 ? 뒤에 붙는 [key]=[value]&[key]=[value].... 패턴의 값들.
    쿼리를 받을때에는 search 로 ?[key]=[value]&[key]=[value] 의 문자열이 포함된 객체로 받는다.
    search 문자열을 객체로 변환해 주기 위하여 qs 라이브러리를 사용한다. 
    qs.parse([문자열], {옵션}); 
    옵션중에 ignoreQueryPrefix 의 값을 true 로 해준다면 쿼리값의 ? 는 제외하고 객체를 만들어 준다. 
    파싱한 값은 무조건 문자열로 나온다. (About.js)

5. 서브 라우트
- 라우트 안의 라우트
- url 파라메터 매핑만 잘 해주면 되는듯하다.. (Profiles.js)

6. 리액트 라우터 부가기능
** https://reactrouter.com/web/guides/quick-start
- history 객체
- withRouter
** route 컴포넌트를 사용하지 않아도 location, match, history 를 사용할 수 있게 해준다.
** 하지만 match 값은 실제 match 값을 사용하는 컴포넌트에서 정상적으로 값을 가져올 수 있다.
- switch
** 여러 라우터 중 먼저 매치된 라우터 하나만 보여줌
** 존재하지 않는 url 주소 처리시에 유용.