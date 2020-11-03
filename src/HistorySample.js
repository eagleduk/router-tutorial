import { useEffect } from "react";
import {} from "react-router-dom";

function HistorySample({ history }) {

    const goBack = () => {
        history.goBack();
    }

    const goHome = () => {
        history.push("/");
    }

    const goHomeReplace = () => {
        // 현재 있는 history 에 덮어 씌우는 것..?
        history.replace("/");
    }

    useEffect(() => {
        console.log(history);
        // 지금 보고있는 페이지를 벗어날때 나오는 confirm
        const block = history.block("정말 떠나시겠습니까?");
        return () => {
            block();
        }
    }, [history]);

    return (
        <div>
            <button onClick={goBack}>goBack</button>
            <button onClick={goHome}>goHome</button>
            <button onClick={goHomeReplace}>goHome(replace)</button>
        </div>
    )
}

export default HistorySample;