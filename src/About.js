import qs from "qs";

function About({ location }) {
    
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    })

    const detail = query.detail === "true";

    return (
        <div>
            <h1>소개</h1>
            <p>
                이 곳은 리액트 라우터 기초를 실습해보는 예제 프로젝트 입니다.
            </p>
            {detail && 
                <p>
                    이 값은 detail 값이 true 일 때만 보여지는 문자열 입니다.
                </p>
            }
        </div>
    )
}

export default About;